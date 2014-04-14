#include "mainwindow.h"
#include "ui_mainwindow.h"

#include <QDebug>
#include <QProcess>
#include <QWebFrame>
#include <QDir>
#include <QFile>

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    ui->webView->load(QUrl("file:////Users/rvr/Downloads/BlocklyDuino-master/blockly/apps/blocklyduino/index.html"));
}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::actionVerify() {
    QString program = "/Users/rvr/Applications/Arduino.app";
    QString tmpDirName = "/tmp/visualarduino/";
    QString tmpFileName = "/tmp/visualarduino/visualarduino.ino";

    QStringList arguments;
    QProcess process;

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
    arguments << tmpFileName;
    process.start(program, arguments);
    process.waitForFinished();

    qDebug() << process.readAllStandardOutput();
}

void MainWindow::actionSend() {
}

void MainWindow::actionMonitor() {
}
