#include "jswebhelpers.h"

JsWebHelpers::JsWebHelpers(QObject *parent) :
    QObject(parent)
{
    source_changed = false;
    source_changes = 0;
}

void JsWebHelpers::resetSourceChanged() {
    // Reset source changed status and reset count
    source_changed = false;
    source_changes = 0;
}

bool JsWebHelpers::isSourceChanged() {
    // Return the source changed status
    return source_changed;
}

int JsWebHelpers::sourceChanges() {
    // Number of changes to the source
    return source_changes;
}

void JsWebHelpers::sourceChanged() {
    // Callback for source changed signal, called from index.html through the
    // web brigde setup in MainWindow::onJavaScriptWindowObjectCleared()
    source_changed = true;
    source_changes++;
    // Emit signal
    emit changed();
}
