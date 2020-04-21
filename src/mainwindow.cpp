#include "mainwindow.h"
#include "ui_mainwindow.h"
#include "aboutdialog.h"

#include <QApplication>
#include <QDebug>
#include <QUuid>
#include <QDir>
#include <QFile>
#include <QFileDialog>
#include <QFontDatabase>
#include <QMessageBox>
#include <QKeyEvent>
#include <QtSerialPort/QSerialPortInfo>
#include <QScrollBar>
#include <QSettings>
#include <QSizePolicy>
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
    QWidget *empty = new QWidget(this);
    empty->setSizePolicy(QSizePolicy::Expanding,QSizePolicy::Preferred);
    ui->mainToolBar->insertWidget(ui->actionMonitor, empty);

    // Align last action to the right in the monitor toolbar
    QWidget *emptyMonitor = new QWidget(this);
    emptyMonitor->setSizePolicy(QSizePolicy::Expanding,QSizePolicy::Preferred);
    ui->monitorToolBar->insertWidget(ui->actionMonitor, emptyMonitor);
    // Hide monitor toolbar
    ui->monitorToolBar->setVisible(false);

    // Hide graphs widget
    ui->graphsWidget->setVisible(false);

    // Set monospaced font in the monitor
    const QFont fixedFont = QFontDatabase::systemFont(QFontDatabase::FixedFont);
    ui->consoleText->setFont(fixedFont);

    // Set environment
    settings = new SettingsStore(CONFIG_INI);
    setArduinoBoard();
    xmlFileName = "";
    serial = NULL;

    // Set zoom scale of the web view
    float zoomScale = settings->zoomScale();
    ui->webView->setZoomFactor(zoomScale);

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

    // Show/hide icon labels in the menu bar
    iconLabels();

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

    // Filter events to capture backspace key
    ui->webView->installEventFilter(this);
    
    // create temp path names
    QString uuid = QUuid::createUuid().toString();
    tmpDirName=QDir::tempPath()+"/visualino-"+uuid+"/visualino/";
    
    tmpFileName=tmpDirName+"visualino.ino";
}

MainWindow::~MainWindow() {
    
    // remove temp stuff
    QFile tmpFile(tmpFileName);
    if (tmpFile.exists()) {
        tmpFile.remove();
        QDir tmpDir(tmpDirName);
        tmpDir.rmdir(tmpDir.path());
        tmpDir.cdUp();
        tmpDir.rmdir(tmpDir.path());
    }
    
    delete webHelper;
    delete serial;
    delete settings;
    delete process;
    delete ui;
}

void MainWindow::arduinoExec(const QString &action) {
    QStringList arguments;
    
    // Check if temp path exists
    QDir dir(tmpDirName);
    if (dir.exists() == false) {
        qDebug()<<"Using temp path:"<<tmpDirName;
        dir.mkpath(tmpDirName);
    }

    // Check if tmp file exists
    QFile tmpFile(tmpFileName);
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
    arguments << tmpFileName;
    process->start(settings->arduinoIdePath(), arguments);

    // Show messages
    ui->messagesWidget->show();
}

void MainWindow::actionAbout() {
    // Open About dialog
    AboutDialog aboutDialog(this);
    aboutDialog.exec();
}

void MainWindow::actionCode() {
    // Show/hide code
    QString jsLanguage = QString("toogleCode();");
    ui->webView->page()->mainFrame()->evaluateJavaScript(jsLanguage);
}

void MainWindow::actionExamples() {
    // Check whether source was changed
    if (checkSourceChanged() == QMessageBox::Cancel) {
        return;
    }

    // Open an example from the examples folder
    actionOpenInclude(tr("Examples"), true, settings->examplesPath());
    // Void file name to prevent overwriting the original file by mistake
    setXmlFileName("");
}

void MainWindow::actionExportSketch() {
    // Export workspace as Arduino Sketch
    QString inoFileName;

    // Open file dialog
    QFileDialog fileDialog(this, tr("Save"));
    fileDialog.setFileMode(QFileDialog::AnyFile);
    fileDialog.setNameFilter(QString("Sketches %1").arg("(*.ino)"));
    fileDialog.setDefaultSuffix("ino");
    fileDialog.setLabelText(QFileDialog::Accept, tr("Export"));
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

void MainWindow::actionDocumentUndo() {
    // If no history, return
    if (documentHistory.length() < 2) return;
    if (documentHistoryStep == -1) {
        // First undo, get previous document
        documentHistoryStep = documentHistory.length() - 2;
    } else {
        // If already in first change, return
        if (documentHistoryStep == 0) return;
        documentHistoryStep--;
    }
    sourceChanging = true; // Prevent adding this change to the history
    setXml(documentHistory[documentHistoryStep], true);
}

void MainWindow::actionDocumentRedo() {
    // If already in first change, return
    if (documentHistory.length() < 2) return;
    if (documentHistoryStep >= documentHistory.length() - 1) return;
    documentHistoryStep++;
    sourceChanging = true; // Prevent adding this change to the history
    setXml(documentHistory[documentHistoryStep], true);
}

void MainWindow::documentHistoryReset() {
    // Clear history of changes
    sourceChanging = false;
    documentHistoryStep = -1;
    documentHistory.clear();
}

void MainWindow::actionGraph() {
    // Show/hide graph
    if (ui->consoleText->isVisible() == true) {
        // Show graph
        ui->consoleText->setVisible(false);
        ui->graphsWidget->setVisible(true);
        ui->actionGraph->setChecked(true);
    } else {
        // Hide graph
        ui->consoleText->setVisible(true);
        ui->graphsWidget->setVisible(false);
        ui->actionGraph->setChecked(false);
    }
}

void MainWindow::actionIconLabels() {
    // Change icon labels mode
    bool showIconLabels = settings->iconLabels();
    showIconLabels = !showIconLabels;
    // Update settings
    settings->setIconLabels(showIconLabels);
    // Update display
    iconLabels();
}

void MainWindow::actionInclude() {
    // Include blockly file to the current workspace
    actionOpenInclude(tr("Include file"), false);
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
        // Show main toolbar, hide monitor toolbar
        ui->mainToolBar->setVisible(true);
        ui->monitorToolBar->setVisible(false);
    } else {
        serialPortOpen();
        ui->consoleEdit->setFocus();
        ui->actionMonitor->setChecked(true);
        // Hide main toolbar, show monitor toolbar
        ui->mainToolBar->setVisible(false);
        ui->monitorToolBar->setVisible(true);
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
    // Check whether source was changed
    if (checkSourceChanged() == QMessageBox::Cancel) {
        return;
    }

    // Unset file name
    setXmlFileName("");

    // Disable save as
    ui->actionSave_as->setEnabled(false);

    // Reset source change status
    webHelper->resetSourceChanged();

    // Clear workspace
    QWebFrame *frame = ui->webView->page()->mainFrame();
    frame->evaluateJavaScript("resetWorkspace();");

    // Reset history
    documentHistoryReset();
}

void MainWindow::actionCloseMessages() {
    // Hide messages window
    ui->messagesWidget->hide();
    ui->actionMessages->setChecked(false);
}

void MainWindow::actionOpen() {
    // Check whether source was changed
    if (checkSourceChanged() == QMessageBox::Cancel) {
        return;
    }

    // Open file
    QString directory = QStandardPaths::locate(
                QStandardPaths::DocumentsLocation,
                "",
                QStandardPaths::LocateDirectory);
    actionOpenInclude(tr("Open file"), true, directory);

    // Reset source changed and history
    documentHistoryReset();
    webHelper->resetSourceChanged();
}

void MainWindow::actionOpenInclude(const QString &title,
                                   bool clear,
                                   const QString &directory) {
    // Open file dialog
    QFileDialog fileDialog(this, title);
    fileDialog.setFileMode(QFileDialog::AnyFile);
    fileDialog.setNameFilter(QString(tr("Blockly Files %1")).
                             arg("(*.bly *.xml)"));
    fileDialog.setDefaultSuffix("bly");
    if (!directory.isEmpty()) fileDialog.setDirectory(directory);
    if (!fileDialog.exec()) return; // Return if cancelled
    QStringList selectedFiles = fileDialog.selectedFiles();
    // Return if no file to open
    if (selectedFiles.count() < 1) return;
    QString xmlFileName = selectedFiles.at(0);

    // Open file
    openFileToWorkspace(xmlFileName, clear);
}

void MainWindow::openFileToWorkspace(const QString &xmlFileName, bool clear) {
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
    setXml(xml, clear);

    // Set XML file name
    if (clear) {
        setXmlFileName(xmlFileName);
    }

}

void MainWindow::actionOpenMessages() {
    // Open messages
    ui->messagesWidget->show();
    ui->actionMessages->setChecked(true);
}

void MainWindow::actionQuit() {
    // Check whether source was changed
    if (checkSourceChanged() == QMessageBox::Cancel) {
        return;
    }

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

void MainWindow::actionSaveAndSaveAs(bool askFileName,
                                     const QString &directory) {
    // Save XML file
    QString xmlFileName;

    if (this->xmlFileName.isEmpty() || askFileName == true) {
        // Open file dialog
        QFileDialog fileDialog(this, tr("Save"));
        fileDialog.setAcceptMode(QFileDialog::AcceptSave);
        fileDialog.setFileMode(QFileDialog::AnyFile);
        fileDialog.setNameFilter(QString("Blockly Files %1").arg("(*.bly)"));
        fileDialog.setDefaultSuffix("bly");
        fileDialog.setLabelText(QFileDialog::Accept, tr("Save"));
        if (!directory.isEmpty()) fileDialog.setDirectory(directory);
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

    // Reset status changed status
    webHelper->resetSourceChanged();
}

void MainWindow::actionSave() {
    // Save XML file
    QString directory = QStandardPaths::locate(
                QStandardPaths::DocumentsLocation,
                "",
                QStandardPaths::LocateDirectory);
    actionSaveAndSaveAs(false, directory);
}

void MainWindow::actionSaveAs() {
    // Save XML file with other name
    QString directory = QStandardPaths::locate(
                QStandardPaths::DocumentsLocation,
                "",
                QStandardPaths::LocateDirectory);
    actionSaveAndSaveAs(true, directory);
}

void MainWindow::actionSettings() {
    // Open preferences dialog
    QString htmlIndex = settings->htmlIndex();
    QString defaultLanguage = settings->defaultLanguage();
    // Supported list of languages
    QStringList languageList;
    languageList << "en-GB" << "ca-ES" << "es-ES" << "eu-ES"
                 << "fr-FR" << "gl-ES" << "it-IT" << "pl-PL"
                 << "pt-BR" << "pt-PT" << "ru";
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

void MainWindow::actionZoomIn() {
    // Zoom in the web view
    ui->webView->zoomIn();
}

void MainWindow::actionZoomOut() {
    // Zoom out the web view
    ui->webView->zoomOut();
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

void MainWindow::setXml(const QString &xml, bool clear) {
    // Set XML
    QString escapedXml(escapeCharacters(xml));

    QWebFrame *frame = ui->webView->page()->mainFrame();
    QString js = QString("var data = '%1'; "
        "var xml = Blockly.Xml.textToDom(data);"
        "Blockly.Xml.domToWorkspace(Blockly.getMainWorkspace(),xml);"
         "").arg(escapedXml);

    if (clear) {
        js.prepend("Blockly.mainWorkspace.clear();");
    }
    frame->evaluateJavaScript(js);
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

    // Signal is emitted before frame loads any web content
    webHelper = new JsWebHelpers();
    connect(ui->webView->page()->mainFrame(),
            SIGNAL(javaScriptWindowObjectCleared()),
            this,
            SLOT(actionInjectWebHelper()));
    // Capture signal
    connect(webHelper, SIGNAL(changed()), this, SLOT(onSourceChanged()));
    // Reset history
    sourceChanging = false;
    documentHistoryStep = -1;
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

void MainWindow::onSourceChanged() {
    if (sourceChanging) {
        sourceChanging = false;
        return;
    }
    QString xml = getXml();
    if (documentHistory.length() > 0) {
        if (documentHistoryStep >= 0) {
            // Change ocurred at mid history. Remove the rest of steps.
            while (documentHistory.length() > documentHistoryStep + 1) {
                documentHistory.removeLast();
            }
            documentHistoryStep = -1;
        } else {
            // Add step to history only if there is a real change
            if (documentHistory.last() == xml) return;
        }
    }
    documentHistory.append(xml);
}

void MainWindow::onStatusMessageChanged(const QString &message) {
    // This was used to display the file name when no other message was shown
}

void MainWindow::setXmlFileName(const QString &fileName) {
    // Set file name and related widgets: Status bar message and Save as menu
    this->xmlFileName = fileName;
    if (fileName.isNull() || fileName.isEmpty()) {
        // Enable save as
        ui->actionSave_as->setEnabled(false);
        // Display file name in window title
        setWindowTitle("Visualino");
    } else {
        // Enable save as
        ui->actionSave_as->setEnabled(true);
        // Display file name in window title
        setWindowTitle("Visualino - " + this->xmlFileName);
    }
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

    // Connect
    if (serial->open(QIODevice::ReadWrite)) {
        // Execute readSerial if data is available
        connect(serial, SIGNAL(readyRead()), this, SLOT(readSerial()));
    }
}

void MainWindow::iconLabels() {
    // Show/hide icon labels
    if (settings->iconLabels() == true) {
        ui->mainToolBar->setToolButtonStyle(Qt::ToolButtonTextUnderIcon);
        ui->actionShow_hide_icon_labels->setChecked(true);
    } else {
        ui->mainToolBar->setToolButtonStyle(Qt::ToolButtonIconOnly);
        ui->actionShow_hide_icon_labels->setChecked(false);
    }
}

bool MainWindow::isCommaSeparatedNumbers(const QString data) {
    // Is data of format number,number,number?

    if (data.indexOf(",") < 0) return false; // Nope, at least two values needed

    // Separate values
    QStringList strings = dataString.split(",");
    bool allNumbers = true;
    // Check values
    foreach (QString s, strings) {
        bool ok;
        s.toLong(&ok);
        if (ok == false) {
            // This value is not an int
            allNumbers = false;
            break;
        }
    }

    return allNumbers;
}

void MainWindow::readSerial() {
    // Read serial port data and display it in the console
    QByteArray data = serial->readAll();

    // Read serial port data and display it in the console
    for (int i = 0; i < data.size(); i++) {
        int c = data.at(i);
        if (c > 13) {
            dataString.append(data.at(i));
        } else if (c == 13) {
            bool ok;
            bool display = false;
            ui->consoleText->insertPlainText(dataString + "\n");
            int value = dataString.toInt(&ok);

            // Check if values are all numbers
            QList<long> longList;

            if (isCommaSeparatedNumbers(dataString)) {
                // More than one value
                display = true;
                QStringList strings = dataString.split(",");
                foreach (QString s, strings) {
                    long value = s.toLong();
                    longList.append(value);
                }
            } else if (ok) {
                // One value
                display = true;
                longList.append(value);
            }

            // Add new graphs if needed
            if (display) {
                int diff = longList.count() - graphList.count();
                if (diff > 0 && graphList.count() <= 10) {
                    for (int n = 0; n < diff; n++) {
                        GraphWidget *gwidget = new GraphWidget();
                        gwidget->setSizePolicy(QSizePolicy::Expanding,
                                               QSizePolicy::Expanding);
                        ui->graphLayout->addWidget(gwidget);
                        graphList.append(gwidget);
                        // No more than 10 graphics
                        if (graphList.count() == 10) break;
                    }
                }

                // Display numbers
                for (int n = 0; n < graphList.count(); n++) {
                    GraphWidget *graphWidget = graphList.at(n);
                    long value = 0;
                    if (longList.count() > n) {
                        value = longList.at(n);
                    }
                    graphWidget->append(value);
                }
            }

            // Reset string
            dataString.clear();
        }
    }

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
#ifdef Q_OS_OSX
        portName.insert(0, "/dev/tty.");
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

void MainWindow::actionInjectWebHelper() {
    // Inject the webHelper object in the webview. This is used in index.html,
    // where a call is made back to webHelper.sourceChanged() function.
    ui->webView->page()->mainFrame()->addToJavaScriptWindowObject(
                QString("webHelper"),
                webHelper);
}

int MainWindow::checkSourceChanged() {
    // Check whether source has changed
    if (webHelper->sourceChanges() > 1) {
        // Does the user want to save the changes?
        QMessageBox msgBox(this);
        msgBox.setText(QString(tr("There are unsaved changes that could be "
                                  "lost. Do you want to save them before "
                                  "continuing?")));
        msgBox.setStandardButtons(QMessageBox::Save | QMessageBox::Discard |
                                  QMessageBox::Cancel);
        int result = msgBox.exec();
        if (result == QMessageBox::Save) {
            // Yes, save changes
            actionSave();
        }
        return result;
    }
    return -1;
}

void MainWindow::closeEvent(QCloseEvent *event) {
    // Check whether source was changed
    if (checkSourceChanged() == QMessageBox::Cancel) {
        event->ignore();
    } else {
        // Save zoom state
        settings->setZoomScale(ui->webView->zoomFactor());
    }
}

bool MainWindow::eventFilter(QObject *obj, QEvent *event) {
    if (obj == ui->webView) {
        if (event->type() == QEvent::KeyPress) {
            // Backspace filter to prevent a blank page.
            // Based on this code: http://ynonperek.com/qt-event-filters.html
            //
            // Specially in Mac OS X, the backspace key generates a page back event. In
            // order to disable that action, this event filter captures the key presses
            // to capture Backspace. Then, if there is a text edit field in focus, then
            // let the event to flow, but if not, it ignores it.
            QKeyEvent *keyEvent = static_cast<QKeyEvent*>(event);
            if (keyEvent->key() == Qt::Key_Backspace) {
                // Is the active element a text field?
                QWebFrame *frame = ui->webView->page()->mainFrame();
                QVariant code = frame->evaluateJavaScript(
                    "document.activeElement.type");
                QString type = code.toString();
                if (type == "text") {
                    // Text field: pass the event to the widget
                    return false;
                } else {
                    // No text field: ignore the event
                    return true;
                }
            } else {
                return false;
            }
        }
        // Pass the event to the widget
        return false;
    } else {
        // Pass the event on to the parent class
        return QMainWindow::eventFilter(obj, event);
    }
}
