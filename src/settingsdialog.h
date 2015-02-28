#ifndef SETTINGSDIALOG_H
#define SETTINGSDIALOG_H

#include "settingsstore.h"

#include <QDialog>

namespace Ui {
class SettingsDialog;
}

class SettingsDialog : public QDialog
{
    Q_OBJECT

public:
    explicit SettingsDialog(SettingsStore *settings,
                            const QStringList &languageList,
                            QWidget *parent = 0);
    ~SettingsDialog();

    bool changed();
    virtual void accept();
    virtual void reject();

public slots:
    void arduinoIdePathOpenDialog();
    void htmlIndexOpenDialog();

private:
    Ui::SettingsDialog *ui;
    SettingsStore *settings;
    QStringList languageList;
    bool settingsChanged;
};

#endif // SETTINGSDIALOG_H
