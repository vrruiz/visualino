#include "mainwindow.h"
#include "ui_mainwindow.h"

#include <QObject>
#include <QDebug>
#include <QWebFrame>
#include <QDir>
#include <QFile>

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    ui->webView->load(QUrl("file:///home/vrruiz/archivos/prog/Qt/VisualArduino/blockly/blockly/apps/blocklyduino/index.html"));

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

void MainWindow::actionVerify() {
    QString program = "/home/vrruiz/bin/arduino-1.5.6-r2/arduino";
    QString tmpDirName = "/tmp/visualarduino/";
    QString tmpFileName = "/tmp/visualarduino/visualarduino.ino";

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
    arguments << "--verify" << tmpFileName;
    process->start(program, arguments);
}

void MainWindow::actionSend() {
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
