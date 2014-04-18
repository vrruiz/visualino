#include "mainwindow.h"
#include "ui_mainwindow.h"

#include <QApplication>
#include <QDebug>
#include <QDir>
#include <QFile>
#include <QFileDialog>
#include <QMessageBox>
#include <QSettings>
#include <QWebFrame>

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);

    // Set environment
    readSettings();
    xmlFileName = "";

    // Load blockly index
    ui->webView->load(QUrl("file://" + htmlIndex));

    // Set process
    process = new QProcess();
    process->setProcessChannelMode(QProcess::MergedChannels);
    connect(process, SIGNAL(started()), this, SLOT(onProcessStarted()));
    connect(process, SIGNAL(readyReadStandardOutput()), this, SLOT(onProcessOutputUpdated()));
    connect(process, SIGNAL(finished(int)), this, SLOT(onProcessFinished(int)));
}

MainWindow::~MainWindow()
{
    delete process;
    delete ui;
}

void MainWindow::readSettings() {
    // Set environment
    QString configFile = QApplication::applicationDirPath() + "/config.ini";

    QSettings settings(configFile, QSettings::IniFormat);

    arduinoIdePath = settings.value(
                "arduino_ide_path",
                "/usr/bin/arduino"
                ).toString();
    tmpDirName = settings.value(
                "tmp_dir_name",
                "/tmp/visualarduino/"
                ).toString();
    tmpFileName = settings.value(
                "tmp_file_name",
                "/tmp/visualarduino/visualarduino.ino"
                ).toString();
    htmlIndex = settings.value(
                "html_index",
                QApplication::applicationDirPath() + "/blockly/blockly/apps/blocklyduino/index.html"
                ).toString();
}

void MainWindow::arduinoExec(const QString &action) {
    QStringList arguments;

    // Check if temp path exists
    QDir dir(tmpDirName);
    if (dir.exists() == false) {
        dir.mkdir(tmpDirName);
    }

    // Check if tmp file exists
    QFile tmpFile(tmpFileName);
    if (tmpFile.exists()) {
        tmpFile.remove();
    }
    tmpFile.open(QIODevice::WriteOnly);

    // Read code
    QWebFrame *mainFrame = ui->webView->page()->mainFrame();
    QVariant codeVariant = mainFrame->evaluateJavaScript("Blockly.Generator.workspaceToCode('Arduino');");
    QString codeString = codeVariant.toString();

    // Write code to tmp file
    tmpFile.write(codeString.toLocal8Bit());
    tmpFile.close();

    // Verify code
    arguments << action << tmpFileName;
    process->start(arduinoIdePath, arguments);
}

void MainWindow::actionNew() {
    // Unset file name
    xmlFileName = "";

    // Clear workspace
    QWebFrame *frame = ui->webView->page()->mainFrame();
    frame->evaluateJavaScript("Blockly.mainWorkspace.clear(); renderContent();");
}

void MainWindow::actionMonitor() {
}

void MainWindow::actionUpload() {
    arduinoExec("--upload");
}

void MainWindow::actionVerify() {
    arduinoExec("--verify");
}

void MainWindow::actionOpen() {
    // Open file dialog
    QString xmlFileName = QFileDialog::getOpenFileName(this, tr("Open File"),"", tr("Files (*.*)"));
    // Return if no file to open
    if (xmlFileName.isNull()) return;

    // Open file
    QFile xmlFile(xmlFileName);
    if (!xmlFile.open(QIODevice::ReadOnly)) {
        // Display error message
        QMessageBox msgBox(this);
        msgBox.setText(QString(tr("Couldn't open file to read content: %1.")).arg(xmlFileName));
        msgBox.exec();
        return;
    }

    // Read content
    QByteArray content = xmlFile.readAll();
    QString xml(content);
    QString escapedXml(escapeCharacters(xml));
    xmlFile.close();

    // Set XML to Workspace
    QWebFrame *frame = ui->webView->page()->mainFrame();
    frame->evaluateJavaScript(QString("var data = '%1'; var xml = Blockly.Xml.textToDom(data); Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);").arg(escapedXml));

    // Set file name
    this->xmlFileName = xmlFileName;
}

void MainWindow::actionSave() {
    QString xmlFileName;

    // Get XML
    QWebFrame *frame = ui->webView->page()->mainFrame();
    QVariant xml = frame->evaluateJavaScript("var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace); var data = Blockly.Xml.domToText(xml); data;");

    if (this->xmlFileName.isEmpty()) {
        // Open file dialog
         xmlFileName = QFileDialog::getSaveFileName(this, tr("Save File"),"", tr("Files (*.*)"));
        // Return if no file to open
        if (xmlFileName.isNull()) return;
    } else {
        xmlFileName = this->xmlFileName;
    }

    // Save XML to file
    QFile xmlFile(xmlFileName);

    if (!xmlFile.open(QIODevice::WriteOnly)) {
        // Display error message
        QMessageBox msgBox(this);
        msgBox.setText(QString(tr("Couldn't open file to save content: %1.")).arg(xmlFileName));
        msgBox.exec();
        return;
    }
    xmlFile.write(xml.toByteArray());
    xmlFile.close();

    // Set file name
    if (this->xmlFileName.isEmpty()) {
        this->xmlFileName = xmlFileName;
    }

    // Feedback
    statusBar()->showMessage(tr("Done saving."), 2000);
}

void MainWindow::onProcessFinished(int exitCode) {
    ui->textBrowser->append(tr("Finished."));
}

void MainWindow::onProcessOutputUpdated() {
    ui->textBrowser->append(QString(process->readAllStandardOutput()));
}

void MainWindow::onProcessStarted() {
    ui->textBrowser->append(tr("Running..."));
}

QString MainWindow::escapeCharacters(const QString& string)
{
    QString rValue = QString(string);
    // Assign \\ to backSlash
    QString backSlash = QString(QChar(0x5c)).append(QChar(0x5c));
    // Replace \ with \\
    rValue = rValue.replace('\\', backSlash);
    // Assing \" to quote.
    QString quote = QString(QChar(0x5c)).append(QChar(0x22));
    // Replace " with \"
    rValue = rValue.replace('"', quote);
    return rValue;
}
