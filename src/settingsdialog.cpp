#include "settingsdialog.h"
#include "ui_settingsdialog.h"

#include <QDebug>
#include <QFileDialog>
#include <QLocale>

SettingsDialog::SettingsDialog(SettingsStore *settings,
                               const QStringList &languageList,
                               QWidget *parent) :
    QDialog(parent),
    ui(new Ui::SettingsDialog)
{
    ui->setupUi(this);

    // Set values
    ui->arduinoIdePathEdit->setText(settings->arduinoIdePath());
    ui->htmlIndexEdit->setText(settings->htmlIndex());

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

    if (ui->htmlIndexEdit->text() != settings->htmlIndex()) {
        settings->setHtmlIndex(ui->htmlIndexEdit->text());
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

void SettingsDialog::htmlIndexOpenDialog() {
    // Show open file dialog
    QString newPath = QFileDialog::getOpenFileName(
                this,
                tr("Roboblocks"),
                settings->htmlIndex(),
                tr("HTML (*.html)")
                );
    if (!newPath.isNull()) ui->htmlIndexEdit->setText(newPath);
}
