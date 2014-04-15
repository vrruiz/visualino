#include "mainwindow.h"
#include "ui_mainwindow.h"

#include <QApplication>
#include <QDebug>
#include <QDir>
#include <QFile>
#include <QSettings>
#include <QWebFrame>

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);

    // Set environment
    readSettings();

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

void MainWindow::actionVerify() {
    arduinoExec("--verify");
}

void MainWindow::actionUpload() {
    arduinoExec("--upload");
}

void MainWindow::actionMonitor() {
}

void MainWindow::onProcessStarted() {
    ui->textBrowser->append(tr("Running..."));
}

void MainWindow::onProcessOutputUpdated() {
    ui->textBrowser->append(QString(process->readAllStandardOutput()));
}

void MainWindow::onProcessFinished(int exitCode) {
    ui->textBrowser->append(tr("Finished."));
}
