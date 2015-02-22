#include "settingsdialog.h"
#include "ui_settingsdialog.h"

#include <QDebug>
#include <QFileDialog>

SettingsDialog::SettingsDialog(SettingsStore *settings, QWidget *parent) :
    QDialog(parent),
    ui(new Ui::SettingsDialog)
{
    ui->setupUi(this);

    // Set values
    ui->arduinoIdePathEdit->setText(settings->arduinoIdePath());
    ui->htmlIndexEdit->setText(settings->htmlIndex());

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
