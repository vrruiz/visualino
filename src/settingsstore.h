#ifndef SETTINGSSTORE_H
#define SETTINGSSTORE_H

#include <QHash>
#include <QObject>
#include <QSettings>
#include <QString>

#define CONFIG_INI "config.ini"

class SettingsStore : public QObject
{
    Q_OBJECT

public:

    SettingsStore(const QString &fileName);
    ~SettingsStore();
    bool save();

    QString arduinoBoard();
    QString arduinoIdePath();
    QString defaultLanguage();
    QString examplesPath();
    QString htmlIndex();
    bool iconLabels();
    float zoomScale();

    void copyDefaultSettings(const QString &fileName = CONFIG_INI,
                             bool overwrite = false);
    void setArduinoBoard(const QString &value);
    void setArduinoIdePath(const QString &value);
    void setIconLabels(bool icon_labels);
    void setDefaultLanguage(const QString &value);
    void setExamplesPath(const QString &value);
    void setTmpDirName(const QString &value);
    void setTmpFileName(const QString &value);
    void setHtmlIndex(const QString &value);
    void setZoomScale(float value);

private:
    QString platform;
    QString filename;
    QSettings *settings;

    QString relativePath(const QString &value, const QString &defaultValue);
};

#endif // SETTINGSSTORE_H
