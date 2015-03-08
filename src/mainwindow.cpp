#include "mainwindow.h"
#include "ui_mainwindow.h"

#include <QApplication>
#include <QDebug>
#include <QDir>
#include <QFile>
#include <QFileDialog>
#include <QFontDatabase>
#include <QMessageBox>
#include <QtSerialPort/QSerialPortInfo>
#include <QScrollBar>
#include <QSettings>
#include <QStandardPaths>
#include <QThread>
#include <QTimer>
#include <QWebFrame>

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);

    // Align last toolbar action to the right
    QWidget* empty = new QWidget(this);
    empty->setSizePolicy(QSizePolicy::Expanding,QSizePolicy::Preferred);
    ui->mainToolBar->insertWidget(ui->actionMonitor, empty);

    // Set monospaced font in the monitor
    const QFont fixedFont = QFontDatabase::systemFont(QFontDatabase::FixedFont);
    ui->consoleText->setFont(fixedFont);

    // Set environment
    settings = new SettingsStore(CONFIG_INI);
    setArduinoBoard();
    xmlFileName = "";
    serial = NULL;

    // Hide messages
    actionCloseMessages();
    serialPortClose();

    // Load blockly index
    loadBlockly();

    // Set timer to update list of available ports
    updateSerialPorts();
    QTimer *timer = new QTimer(this);
    connect(timer, SIGNAL(timeout()), this, SLOT(updateSerialPorts()));
    timer->start(5000);

    ui->consoleText->document()->setMaximumBlockCount(100);

    // Set process
    process = new QProcess();
    process->setProcessChannelMode(QProcess::MergedChannels);
    connect(process,
            SIGNAL(started()),
            this,
            SLOT(onProcessStarted()));
    connect(process,
            SIGNAL(readyReadStandardOutput()),
            this,
            SLOT(onProcessOutputUpdated()));
    connect(process,
            SIGNAL(finished(int)),
            this,
            SLOT(onProcessFinished(int)));

    // Show opened file name in status bar
    connect(statusBar(),
            SIGNAL(messageChanged(QString)),
            this,
            SLOT(onStatusMessageChanged(QString)));
}

MainWindow::~MainWindow()
{
    delete serial;
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
    arguments << action;
    // Board parameter
    if (ui->boardBox->count() > 0) {
        arguments << "--board" << ui->boardBox->currentText();
    }
    // Port parameter
    if (ui->serialPortBox->count() > 0) {
        arguments << "--port" << ui->serialPortBox->currentText();
    }
    arguments << settings->tmpFileName();
    process->start(settings->arduinoIdePath(), arguments);

    // Show messages
    ui->messagesWidget->show();
}

void MainWindow::actionAbout() {
}

void MainWindow::actionExportSketch() {
    // Export workspace as Arduino Sketch
    QString inoFileName;

    // Open file dialog
    QFileDialog fileDialog(this, tr("Save"));
    fileDialog.setFileMode(QFileDialog::AnyFile);
    fileDialog.setNameFilter(QString("Sketches %1").arg("(*.ino)"));
    fileDialog.setDefaultSuffix("ino");
    if (!fileDialog.exec()) return; // Return if cancelled
    QStringList selectedFiles = fileDialog.selectedFiles();
    // Return if no file to open
    if (selectedFiles.count() < 1) return;
    inoFileName = selectedFiles.at(0);

    int result = saveSketch(inoFileName);

    if (result == 0) {
        // Display error message
        QMessageBox msgBox(this);
        msgBox.setText(QString(tr("Couldn't open file to save content: %1.")
                               ).arg(inoFileName));
        msgBox.exec();
        return;
    }

    // Feedback
    QString message(tr("Done exporting: %1.").arg(inoFileName));
    statusBar()->showMessage(message, 2000);
}

void MainWindow::actionInsertLanguage() {
    // Set language in Roboblocks
    QString jsLanguage = QString("var roboblocksLanguage = '%1';").
            arg(settings->defaultLanguage());
    ui->webView->page()->mainFrame()->evaluateJavaScript(jsLanguage);
}

void MainWindow::actionMonitor() {
    // Open close monitor
    if (ui->widgetConsole->isVisible()) {
        serialPortClose();
        ui->actionMonitor->setChecked(false);
    } else {
        serialPortOpen();
        ui->consoleEdit->setFocus();
        ui->actionMonitor->setChecked(true);
    }
}

void MainWindow::actionMonitorSend() {
    // Send what's available in the console line edit
    if (serial == NULL) return;

    QString data = ui->consoleEdit->text();
    if (data.isEmpty()) return; // Nothing to send

    // Send data
    qint64 result = serial->write(data.toLocal8Bit());
    if (result != -1) {
        // If data was sent successfully, clear line edit
        ui->consoleText->insertHtml("&rarr;&nbsp;");
        ui->consoleText->insertPlainText(data + "\n");
        ui->consoleEdit->clear();
    }
}

void MainWindow::actionMessages() {
    // Open/hide messages window
    if (ui->messagesWidget->isVisible()) {
        actionCloseMessages();
    } else {
        actionOpenMessages();
    }
}

void MainWindow::actionNew() {
    // Unset file name
    setXmlFileName("");

    // Disable save as
    ui->actionSave_as->setEnabled(false);

    // Clear workspace
    QWebFrame *frame = ui->webView->page()->mainFrame();
    frame->evaluateJavaScript(
                "Blockly.mainWorkspace.clear(); renderContent();");
}

void MainWindow::actionCloseMessages() {
    // Hide messages window
    ui->messagesWidget->hide();
}

void MainWindow::actionOpen() {
    // Open file dialog
    QFileDialog fileDialog(this, tr("Open"));
    fileDialog.setFileMode(QFileDialog::AnyFile);
    fileDialog.setNameFilter(QString("Blockly Files %1").arg("(*.bly)"));
    fileDialog.setDefaultSuffix("bly");
    if (!fileDialog.exec()) return; // Return if cancelled
    QStringList selectedFiles = fileDialog.selectedFiles();
    // Return if no file to open
    if (selectedFiles.count() < 1) return;
    QString xmlFileName = selectedFiles.at(0);

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

    // Set XML file name
    setXmlFileName(xmlFileName);
}

void MainWindow::actionOpenMessages() {
    // Open messages
    ui->messagesWidget->show();
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

void MainWindow::actionSaveAndSaveAs(bool askFileName) {
    // Save XML file
    QString xmlFileName;

    if (this->xmlFileName.isEmpty() || askFileName == true) {
        // Open file dialog
        QFileDialog fileDialog(this, tr("Save"));
        fileDialog.setFileMode(QFileDialog::AnyFile);
        fileDialog.setNameFilter(QString("Blockly Files %1").arg("(*.bly)"));
        fileDialog.setDefaultSuffix("bly");
        if (!fileDialog.exec()) return; // Return if cancelled
        QStringList selectedFiles = fileDialog.selectedFiles();
        // Return if no file to open
        if (selectedFiles.count() < 1) return;
        xmlFileName = selectedFiles.at(0);
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
    setXmlFileName(xmlFileName);

    // Feedback
    statusBar()->showMessage(tr("Done saving."), 2000);
}

void MainWindow::actionSave() {
    // Save XML file
    actionSaveAndSaveAs(false);
}

void MainWindow::actionSaveAs() {
    // Save XML file with other name
    actionSaveAndSaveAs(true);
}

void MainWindow::actionSettings() {
    // Open preferences dialog
    QString htmlIndex = settings->htmlIndex();
    QString defaultLanguage = settings->defaultLanguage();
    // Supported list of languages
    QStringList languageList;
    languageList << "en-GB" << "ca-ES" << "es-ES" << "it-IT" << "pt-PT";
    SettingsDialog settingsDialog(settings, languageList, this);
    int result = settingsDialog.exec();
    if (result && settingsDialog.changed()) {
        // Reload blockly page
        if (htmlIndex != settings->htmlIndex()
                || defaultLanguage != settings->defaultLanguage()) {
            // Refresh workspace with new language
            xmlLoadContent = getXml();
            loadBlockly();
            connect(ui->webView,
                    SIGNAL(loadFinished(bool)),
                    SLOT(onLoadFinished(bool)));

            // Reload app warning
            QMessageBox msgBox;
            msgBox.setText(tr("Please, restart the application to display "
                              "the selected language."));
            msgBox.exec();
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

QString MainWindow::getCode() {
    // Get code
    QWebFrame *frame = ui->webView->page()->mainFrame();
    QVariant xml = frame->evaluateJavaScript(
        "Blockly.Arduino.workspaceToCode();");
    return xml.toString();
}

void MainWindow::setXml(const QString &xml) {
    // Set XML
    QString escapedXml(escapeCharacters(xml));

    QWebFrame *frame = ui->webView->page()->mainFrame();
    frame->evaluateJavaScript(QString(
        "Blockly.mainWorkspace.clear();"
        "var data = '%1'; "
        "var xml = Blockly.Xml.textToDom(data);"
        "Blockly.Xml.domToWorkspace(Blockly.getMainWorkspace(),xml);"
        ).arg(escapedXml));
}

bool MainWindow::listIsEqual(const QStringList &listOne,
                             const QStringList &listTwo) {
    // Compare two string lists. Return true if equal.
    if (listOne.count() != listTwo.count()) return false;
    for (int i = 0; i < listOne.count(); i++) {
        if (listOne[i] != listTwo[i]) return false;
    }
    return true;
}

void MainWindow::loadBlockly() {
    // Load blockly index
    connect(ui->webView->page()->mainFrame(),
            SIGNAL(javaScriptWindowObjectCleared()),
            this,
            SLOT(actionInsertLanguage()));
    ui->webView->load(QUrl::fromLocalFile(settings->htmlIndex()));
    ui->webView->page()->mainFrame()->setScrollBarPolicy(
                Qt::Vertical,
                Qt::ScrollBarAlwaysOff);
    ui->webView->page()->mainFrame()->setScrollBarPolicy(
                Qt::Horizontal,
                Qt::ScrollBarAlwaysOff);
}

void MainWindow::setArduinoBoard() {
    // Select combo box value according to stored value in settings
    ui->boardBox->setCurrentText(settings->arduinoBoard());
}

void MainWindow::onBoardChanged() {
    // Board changed, update settings
    settings->setArduinoBoard(ui->boardBox->currentText());
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
    ui->textBrowser->clear();
    ui->textBrowser->append(tr("Building..."));
}

void MainWindow::onStatusMessageChanged(const QString &message) {
    // Show the file name if no message
    if (message.isNull()) {
        statusBar()->showMessage(this->xmlFileName);
    }
}

void MainWindow::setXmlFileName(const QString &fileName) {
    // Set file name and related widgets: Status bar message and Save as menu
    this->xmlFileName = fileName;
    if (fileName.isNull() || fileName.isEmpty()) {
        // Enable save as
        ui->actionSave_as->setEnabled(false);
        // Show message in status bar
    } else {
        // Enable save as
        ui->actionSave_as->setEnabled(true);
    }
    onStatusMessageChanged(NULL);
}

void MainWindow::serialPortClose() {
    // Close serial connection
    ui->webView->show();
    ui->widgetConsole->hide();
    ui->consoleText->clear();

    if (serial == NULL) return;

    serial->close();
    serial->disconnect(serial, SIGNAL(readyRead()), this, SLOT(readSerial()));
}

void MainWindow::serialPortOpen() {
    // Open serial connection
    ui->webView->hide();
    ui->widgetConsole->show();

    // No available connections, nothing to do
    if (ui->serialPortBox->currentText() == "") return;

    if (serial == NULL) {
        // Create serial connection
        serial = new QSerialPort(this);
    } else if (serial->isOpen()) {
        serial->close();
    }

    // Set default connection parameters
    serial->setPortName(ui->serialPortBox->currentText());
    serial->setBaudRate(QSerialPort::Baud9600);
    serial->setDataBits(QSerialPort::Data8);
    serial->setParity(QSerialPort::NoParity);
    serial->setStopBits(QSerialPort::OneStop);
    serial->setFlowControl(QSerialPort::HardwareControl);

    // Connect
    if (serial->open(QIODevice::ReadWrite)) {
        // Execute readSerial if data is available
        connect(serial, SIGNAL(readyRead()), this, SLOT(readSerial()));
    }
}

void MainWindow::readSerial() {
    // Read serial port data and display it in the console
    QByteArray data = serial->readAll();
    QString stringData(data);
    ui->consoleText->insertPlainText(stringData);

    // Move scroll to the bottom
    QScrollBar *bar = ui->consoleText->verticalScrollBar();
    bar->setValue(bar->maximum());
}

QStringList MainWindow::portList() {
    // Return list of serial ports
    QStringList serialPorts;

    // Get list
    foreach (const QSerialPortInfo &info, QSerialPortInfo::availablePorts()) {
        // Add to the list
        QString portName = info.portName();
#ifdef Q_OS_LINUX
        portName.insert(0, "/dev/");
#endif
        serialPorts.append(portName);
    }

    return serialPorts;
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
    if (xmlFile.write(xml.toByteArray()) == -1) {
        return 0;
    }
    xmlFile.close();

    // Set file name
    if (this->xmlFileName.isEmpty()) {
        this->xmlFileName = xmlFileName;
    }

    return 1;
}

int MainWindow::saveSketch(const QString &inoFilePath) {
    // Save sketch

    // Get code
    QVariant code = getCode();

    // Save code
    QFile inoFile(inoFilePath);
    if (!inoFile.open(QIODevice::WriteOnly)) {
        return 0;
    }
    if (inoFile.write(code.toByteArray()) == -1) {
        return 0;
    }
    inoFile.close();

    return 1;
}

void MainWindow::unhide() {
    this->show();
}

void MainWindow::updateSerialPorts() {
    // Update the list of available serial ports in the combo box
    QStringList ports = portList();
    if (!listIsEqual(serialPortList, ports)) {
        QString currentPort = ui->serialPortBox->currentText();
        ui->serialPortBox->clear();
        ui->serialPortBox->insertItems(0, ports);
        if (ports.indexOf(currentPort) != -1) {
            ui->serialPortBox->setCurrentText(currentPort);
        }
        serialPortList = ports;
    }
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
