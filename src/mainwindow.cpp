#include "mainwindow.h"
#include "ui_mainwindow.h"

#include <QApplication>
#include <QDebug>
#include <QDir>
#include <QFile>
#include <QFileDialog>
#include <QMessageBox>
#include <QThread>
#include <QSettings>
#include <QStandardPaths>
#include <QWebFrame>

#define CONFIG_INI "config.ini"

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);

    // Align last toolbar action to the right
    // QWidget* empty = new QWidget(this);
    // empty->setSizePolicy(QSizePolicy::Expanding,QSizePolicy::Preferred);
    // ui->mainToolBar->insertWidget(ui->actionSettings, empty);

    // Set environment
    settings = new SettingsStore(CONFIG_INI);
    xmlFileName = "";

    // Load blockly index
    loadBlockly();

    // Set process
    process = new QProcess();
    process->setProcessChannelMode(QProcess::MergedChannels);
    connect(process, SIGNAL(started()), this, SLOT(onProcessStarted()));
    connect(process, SIGNAL(readyReadStandardOutput()),
            this,
            SLOT(onProcessOutputUpdated()));
    connect(process, SIGNAL(finished(int)),
            this,
            SLOT(onProcessFinished(int)));
}

MainWindow::~MainWindow()
{
    delete settings;
    delete process;
    delete ui;
}

void MainWindow::arduinoExec(const QString &action) {
    QStringList arguments;

    // Check if temp path exists
    QDir dir(settings->tmpDirName());
    if (dir.exists() == false) {
        dir.mkdir(settings->tmpDirName());
    }

    // Check if tmp file exists
    QFile tmpFile(settings->tmpFileName());
    if (tmpFile.exists()) {
        tmpFile.remove();
    }
    tmpFile.open(QIODevice::WriteOnly);

    // Read code
    QWebFrame *mainFrame = ui->webView->page()->mainFrame();
    QVariant codeVariant = mainFrame->evaluateJavaScript(
                "Blockly.Arduino.workspaceToCode();");
    QString codeString = codeVariant.toString();

    // Write code to tmp file
    tmpFile.write(codeString.toLocal8Bit());
    tmpFile.close();

    // Verify code
    arguments << action << settings->tmpDirName();
    process->start(settings->arduinoIdePath(), arguments);
}

void MainWindow::actionAbout() {
}

void MainWindow::actionNew() {
    // Unset file name
    xmlFileName = "";

    // Clear workspace
    QWebFrame *frame = ui->webView->page()->mainFrame();
    frame->evaluateJavaScript(
                "Blockly.mainWorkspace.clear(); renderContent();");
}

void MainWindow::actionMonitor() {
}

void MainWindow::actionOpen() {
    // Open file dialog
    QString xmlFileName = QFileDialog::getOpenFileName(
                this,
                tr("Open File"),
                "",
                tr("Files (*.*)"));
    // Return if no file to open
    if (xmlFileName.isNull()) return;

    // Open file
    QFile xmlFile(xmlFileName);
    if (!xmlFile.open(QIODevice::ReadOnly)) {
        // Display error message
        QMessageBox msgBox(this);
        msgBox.setText(QString(tr("Couldn't open file to read content: %1.")
                               ).arg(xmlFileName));
        msgBox.exec();
        return;
    }

    // Read content
    QByteArray content = xmlFile.readAll();
    QString xml(content);
    xmlFile.close();

    // Set XML to Workspace
    setXml(xml);

    // Set file name
    this->xmlFileName = xmlFileName;
}

void MainWindow::actionQuit() {
    // Quit
    close();
}

void MainWindow::actionUpload() {
    // Upload sketch
    arduinoExec("--upload");
}

void MainWindow::actionVerify() {
    // Build sketch
    arduinoExec("--verify");
}
void MainWindow::actionSave() {
    // Save XML file
    QString xmlFileName;

    if (this->xmlFileName.isEmpty()) {
        // Open file dialog
         xmlFileName = QFileDialog::getSaveFileName(
                     this,
                     tr("Save File"),
                     "",
                     tr("Files (*.*)"));
        // Return if no file to open
        if (xmlFileName.isNull()) return;
    } else {
        xmlFileName = this->xmlFileName;
    }

    int result = saveXml(xmlFileName);

    if (result == 0) {
        // Display error message
        QMessageBox msgBox(this);
        msgBox.setText(QString(tr("Couldn't open file to save content: %1.")
                               ).arg(xmlFileName));
        msgBox.exec();
        return;
    }

    // Set file name
    if (this->xmlFileName.isEmpty()) {
        this->xmlFileName = xmlFileName;
    }

    // Feedback
    statusBar()->showMessage(tr("Done saving."), 2000);
}

void MainWindow::actionSettings() {
    // Open preferences dialog
    QString htmlIndex = settings->htmlIndex();
    SettingsDialog settingsDialog(settings, this);
    int result = settingsDialog.exec();
    if (result && settingsDialog.changed()) {
        // Reload blockly page
        if (htmlIndex != settings->htmlIndex()) {
            xmlLoadContent = getXml();
            loadBlockly();
            connect(ui->webView,
                    SIGNAL(loadFinished(bool)),
                    SLOT(onLoadFinished(bool)));
        }
    }
}

QString MainWindow::getXml() {
    // Get XML
    QWebFrame *frame = ui->webView->page()->mainFrame();
    QVariant xml = frame->evaluateJavaScript(
        "var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());"
        "var data = Blockly.Xml.domToText(xml); data;");
    return xml.toString();
}

void MainWindow::setXml(const QString &xml) {
    // Set XML
    QString escapedXml(escapeCharacters(xml));

    QWebFrame *frame = ui->webView->page()->mainFrame();
    frame->evaluateJavaScript(QString(
        "var data = '%1'; "
        "var xml = Blockly.Xml.textToDom(data);"
        "Blockly.Xml.domToWorkspace(Blockly.getMainWorkspace(),"
        "xml);").arg(escapedXml));
}

void MainWindow::loadBlockly() {
    // Load blockly index
    ui->webView->load(QUrl::fromLocalFile(settings->htmlIndex()));
    ui->webView->page()->mainFrame()->setScrollBarPolicy(
                Qt::Vertical,
                Qt::ScrollBarAlwaysOff);
    ui->webView->page()->mainFrame()->setScrollBarPolicy(
                Qt::Horizontal,
                Qt::ScrollBarAlwaysOff);
}

void MainWindow::onLoadFinished(bool finished) {
    // Load content using xmlLoadContent variable
    // This is triggered by settings dialog
    if (!finished || xmlLoadContent.isEmpty()) return;
    setXml(xmlLoadContent);
    ui->webView->disconnect(SIGNAL(loadFinished(bool)));
    xmlLoadContent = "";
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

int MainWindow::saveXml(const QString &xmlFilePath) {
    // Save XML file

    // Get XML
    QVariant xml = getXml();

    // Save XML to file
    QFile xmlFile(xmlFilePath);

    if (!xmlFile.open(QIODevice::WriteOnly)) {
        return 0;
    }
    xmlFile.write(xml.toByteArray());
    xmlFile.close();

    // Set file name
    if (this->xmlFileName.isEmpty()) {
        this->xmlFileName = xmlFileName;
    }

    return 1;
}

void MainWindow::unhide() {
    this->show();
}

QString MainWindow::escapeCharacters(const QString& string)
{
    QString rValue = QString(string);
    // Assign \\ to backSlash
    QString backSlash = QString(QChar(0x5c)).append(QChar(0x5c));
    /* Replace \ with \\ */
    rValue = rValue.replace('\\', backSlash);
    // Assing \" to quote.
    QString quote = QString(QChar(0x5c)).append(QChar(0x22));
    // Replace " with \"
    rValue = rValue.replace('"', quote);
    return rValue;
}
