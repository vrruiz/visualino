#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include "settingsstore.h"
#include "settingsdialog.h"

#include <QMainWindow>
#include <QWebView>
#include <QProcess>

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

    void arduinoExec(const QString &action);
    QString escapeCharacters(const QString& string);
    QString getXml();
    void setXml(const QString &xml);
    bool listIsEqual(const QStringList &listOne, const QStringList &listTwo);
    void loadBlockly();
    QStringList portList();
    int saveXml(const QString &xmlFilePath);

public slots:
    void actionAbout();
    void actionOpenMessages();
    void actionCloseMessages();
    void actionNew();
    void actionMessages();
    void actionMonitor();
    void actionOpen();
    void actionQuit();
    void actionUpload();
    void actionVerify();
    void actionSave();
    void actionSettings();
    void onLoadFinished(bool finished);
    void onProcessFinished(int exitCode);
    void onProcessOutputUpdated();
    void onProcessStarted();
    void unhide();
    void updateSerialPorts();
};

#endif // MAINWINDOW_H
