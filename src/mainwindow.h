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

    QString escapeCharacters(const QString& string);
    void arduinoExec(const QString &action);
    QString getXml();
    void setXml(const QString &xml);
    void loadBlockly();
    int saveXml(const QString &xmlFilePath);

public slots:
    void actionNew();
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
};

#endif // MAINWINDOW_H
