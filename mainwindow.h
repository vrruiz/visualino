#ifndef MAINWINDOW_H
#define MAINWINDOW_H

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
    QString arduinoIdePath;
    QString htmlIndex;
    QString tmpDirName;
    QString tmpFileName;

    void arduinoExec(const QString &action);
    void readSettings();

public slots:
    void actionVerify();
    void actionUpload();
    void actionMonitor();
    void onProcessStarted();
    void onProcessOutputUpdated();
    void onProcessFinished(int exitCode);
};

#endif // MAINWINDOW_H
