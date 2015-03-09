#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include "settingsstore.h"
#include "settingsdialog.h"

#include <QMainWindow>
#include <QWebView>
#include <QProcess>
#include <QtSerialPort/QSerialPort>

namespace Ui {
class MainWindow;
}

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    explicit MainWindow(QWidget *parent = 0);
    ~MainWindow();

private:
    Ui::MainWindow *ui;
    QProcess *process;
    SettingsStore *settings;
    QString xmlFileName;
    QString xmlLoadContent;
    QStringList serialPortList;
    QSerialPort *serial;

    void actionSaveAndSaveAs(bool askFileName);
    void actionOpenInclude(const QString &title, bool clear = true);
    void arduinoExec(const QString &action);
    QString escapeCharacters(const QString& string);
    QString getXml();
    QString getCode();
    void setXml(const QString &xml, bool clear = false);
    bool listIsEqual(const QStringList &listOne, const QStringList &listTwo);
    void loadBlockly();
    void setArduinoBoard();
    void setXmlFileName(const QString &fileName);
    void serialPortOpen();
    void serialPortClose();
    QStringList portList();
    int saveXml(const QString &xmlFilePath);
    int saveSketch(const QString &inoFilePath);


public slots:
    void actionAbout();
    void actionCloseMessages();
    void actionExportSketch();
    void actionInclude();
    void actionInsertLanguage();
    void actionMessages();
    void actionMonitor();
    void actionMonitorSend();
    void actionNew();
    void actionOpen();
    void actionOpenMessages();
    void actionQuit();
    void actionUpload();
    void actionVerify();
    void actionSave();
    void actionSaveAs();
    void actionSettings();
    void onBoardChanged();
    void onLoadFinished(bool finished);
    void onProcessFinished(int exitCode);
    void onProcessOutputUpdated();
    void onProcessStarted();
    void onStatusMessageChanged(const QString &message);
    void readSerial();
    void unhide();
    void updateSerialPorts();
};

#endif // MAINWINDOW_H
