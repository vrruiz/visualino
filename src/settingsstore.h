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
    QString tmpDirName();
    QString tmpFileName();
    QString htmlIndex();

    void setArduinoBoard(const QString &value);
    void setArduinoIdePath(const QString &value);
    void setDefaultLanguage(const QString &value);
    void setTmpDirName(const QString &value);
    void setTmpFileName(const QString &value);
    void setHtmlIndex(const QString &value);
    void copyDefaultSettings(const QString &fileName = CONFIG_INI,
                             bool overwrite = false);

private:
    QString platform;
    QString filename;
    QSettings *settings;

    QString relativePath(const QString &value, const QString &defaultValue);
};

#endif // SETTINGSSTORE_H
