#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include "graphwidget.h"
#include "jswebhelpers.h"
#include "settingsdialog.h"
#include "settingsstore.h"

#include <QMainWindow>
#include <QProcess>
#include <QtSerialPort/QSerialPort>
#include <QWebView>

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
    QString dataString;
    QList<GraphWidget *> graphList;
    QStringList documentHistory;
    JsWebHelpers *webHelper;
    bool sourceChanging;
    bool sourceChanged;
    int documentHistoryStep;
    
    QString tmpDirName;
    QString tmpFileName;

    void actionSaveAndSaveAs(bool askFileName, const QString &directory = "");
    void actionOpenInclude(const QString &title,
                           bool clear = true,
                           const QString &directory = "");
    void arduinoExec(const QString &action);
    void documentHistoryReset();
    QString escapeCharacters(const QString& string);
    QString getXml();
    QString getCode();
    void setXml(const QString &xml, bool clear = false);
    void iconLabels();
    bool isCommaSeparatedNumbers(const QString data);
    bool listIsEqual(const QStringList &listOne, const QStringList &listTwo);
    void loadBlockly();
    void openFileToWorkspace(const QString &xmlFileName,
                             bool clear = true);
    void setArduinoBoard();
    void setXmlFileName(const QString &fileName);
    void serialPortOpen();
    void serialPortClose();
    QStringList portList();
    int saveXml(const QString &xmlFilePath);
    int saveSketch(const QString &inoFilePath);
    int checkSourceChanged();

    void closeEvent(QCloseEvent *bar);

protected:
    bool eventFilter(QObject *obj, QEvent *event);

public slots:
    void actionAbout();
    void actionCloseMessages();
    void actionCode();
    void actionExamples();
    void actionExportSketch();
    void actionIconLabels();
    void actionInclude();
    void actionInjectWebHelper();
    void actionInsertLanguage();
    void actionMessages();
    void actionMonitor();
    void actionMonitorSend();
    void actionNew();
    void actionOpen();
    void actionOpenMessages();
    void actionGraph();
    void actionQuit();
    void actionDocumentRedo();
    void actionDocumentUndo();
    void actionUpload();
    void actionVerify();
    void actionSave();
    void actionSaveAs();
    void actionSettings();
    void actionZoomIn();
    void actionZoomOut();
    void onBoardChanged();
    void onLoadFinished(bool finished);
    void onProcessFinished(int exitCode);
    void onProcessOutputUpdated();
    void onProcessStarted();
    void onSourceChanged();
    void onStatusMessageChanged(const QString &message);
    void readSerial();
    void unhide();
    void updateSerialPorts();
};

#endif // MAINWINDOW_H
