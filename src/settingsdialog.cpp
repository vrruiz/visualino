#include "settingsdialog.h"
#include "ui_settingsdialog.h"

#include <QDebug>
#include <QFileDialog>
#include <QLocale>
#include <QMessageBox>
#include <QPushButton>

SettingsDialog::SettingsDialog(SettingsStore *settings,
                               const QStringList &languageList,
                               QWidget *parent) :
    QDialog(parent),
    ui(new Ui::SettingsDialog)
{
    ui->setupUi(this);

    // Set values
    ui->arduinoIdePathEdit->setText(settings->arduinoIdePath());

    // Set values for list of languages. languageList must be in
    // "languageCode-countryCode" format (e.g. "en-US").
    ui->languageBox->clear();
    this->languageList = languageList;
    // Generate a list with the language names for the combo box
    foreach (QString language, languageList) {
        QLocale locale(language);
        QString languageName = QString("%1 (%2)").
                arg(QLocale::languageToString(locale.language())).
                arg(QLocale::countryToString(locale.country()));
        ui->languageBox->addItem(languageName);
    }
    // Set active language in the combo box, according to the setting
    ui->languageBox->setCurrentIndex(
                languageList.indexOf(settings->defaultLanguage()));

    this->settings = settings;
    settingsChanged = false;

    // Connect restore default button signal to slot. Can't be done in Qt Creator
    QPushButton *restoreButton = ui->buttonBox->button(
                QDialogButtonBox::RestoreDefaults);
    connect(restoreButton,
            SIGNAL(clicked(bool)),
            this,
            SLOT(restoreSettings()));
}

SettingsDialog::~SettingsDialog()
{
    delete ui;
}

bool SettingsDialog::changed() {
    return settingsChanged;
}

void SettingsDialog::accept() {
    // Save settings to file and close dialog
    if (ui->arduinoIdePathEdit->text() != settings->arduinoIdePath()) {
        settings->setArduinoIdePath(ui->arduinoIdePathEdit->text());
        settingsChanged = true;
    }

    // Convert selected item in the combo box to selected language
    QString language = languageList.at(ui->languageBox->currentIndex());
    if (language != settings->defaultLanguage()) {
        settings->setDefaultLanguage(language);
        settingsChanged = true;
    }

    done(QDialog::Accepted);
}

void SettingsDialog::reject() {
    // Discard changes and close dialog
    done(QDialog::Rejected);
}

void SettingsDialog::arduinoIdePathOpenDialog() {
    // Show open file dialog
    QString newPath = QFileDialog::getOpenFileName(
                this,
                tr("Arduino IDE"),
                settings->arduinoIdePath()
                );
    if (!newPath.isNull()) ui->arduinoIdePathEdit->setText(newPath);
}

void SettingsDialog::restoreSettings() {
    // Restore default settings
    QMessageBox::StandardButton confirm;
    // Confirm
    confirm = QMessageBox::question(this,
                                    tr("Default settings"),
                                    tr("Are you sure? This will "
                                       "erase your current preferences "
                                       "and replace them with the "
                                       "defaults."),
                                    QMessageBox::Yes | QMessageBox::No);
    if (confirm == QMessageBox::Yes) {
        // Do restore
        settings->copyDefaultSettings(CONFIG_INI, true);
        settingsChanged = true;
        done(QDialog::Accepted);
    }
}
