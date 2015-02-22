#include "settingsstore.h"

#include <QCoreApplication>
#include <QDir>
#include <QString>
#include <QSettings>
#include <QStandardPaths>

SettingsStore::SettingsStore(const QString &fileName) {
    // Set environment
    QString settingsFile = QStandardPaths::locate(QStandardPaths::DataLocation,
                                                fileName,
                                                QStandardPaths::LocateFile);
    if (settingsFile.isEmpty()) {
        // Couldn't locate config.ini in DataLocation dirs.
        // Search in the binary path.
        settingsFile = QDir(QCoreApplication::applicationDirPath())
                .filePath(fileName);
    }

    // Set platform
#ifdef Q_OS_LINUX
    platform = "linux/";
#elif defined(Q_OS_WIN)
    platform = "windows/";
#elif defined(Q_OS_MAC)
    platform = "mac/";
#endif

    // Read settings file
    settings = new QSettings(settingsFile, QSettings::IniFormat);
}

SettingsStore::~SettingsStore() {
    delete settings;
}

QString SettingsStore::arduinoIdePath() {
    return relativePath("arduino_ide_path", "/usr/bin/arduino");
}

QString SettingsStore::tmpDirName() {
    return relativePath("tmp_dir_name", "/tmp/visualino/");
}

QString SettingsStore::tmpFileName() {
    return relativePath("tmp_file_name", "/tmp/visualino/visualino.ino");
}

QString SettingsStore::htmlIndex() {
    return relativePath("html_index", "/usr/share/visualino/html/index.html");
}

void SettingsStore::setArduinoIdePath(const QString &value) {
    settings->setValue(platform + "arduino_ide_path", value);
}

void SettingsStore::setTmpDirName(const QString &value) {
    settings->setValue(platform + "tmp_dir_name", value);
}

void SettingsStore::setTmpFileName(const QString &value) {
    settings->setValue(platform + "tmp_file_name", value);
}

void SettingsStore::setHtmlIndex(const QString &value) {
    settings->setValue(platform + "html_index", value);
}


QString SettingsStore::relativePath(const QString &value,
                                    const QString &defaultValue) {

    QString settingsValue = settings->value(platform + value,
                                             defaultValue).toString();

    // Append the binary path if relative
    if (QDir::isRelativePath(settingsValue)) {
        return QDir(QCoreApplication::applicationDirPath()).
                filePath(settingsValue);
    }

    return settingsValue;
}
