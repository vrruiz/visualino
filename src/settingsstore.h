#ifndef SETTINGSSTORE_H
#define SETTINGSSTORE_H

#include <QHash>
#include <QObject>
#include <QSettings>
#include <QString>

class SettingsStore : public QObject
{
    Q_OBJECT

public:

    SettingsStore(const QString &fileName);
    ~SettingsStore();
    bool save();

    QString arduinoIdePath();
    QString tmpDirName();
    QString tmpFileName();
    QString htmlIndex();

    void setArduinoIdePath(const QString &value);
    void setTmpDirName(const QString &value);
    void setTmpFileName(const QString &value);
    void setHtmlIndex(const QString &value);

private:
    QString platform;
    QString filename;
    QSettings *settings;

    QString relativePath(const QString &value, const QString &defaultValue);
};

#endif // SETTINGSSTORE_H
