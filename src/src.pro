QT += core gui serialport

greaterThan(QT_MAJOR_VERSION, 4): QT += widgets webkit webkitwidgets

TARGET = visualino
TEMPLATE = app

SOURCES += main.cpp\
        mainwindow.cpp \
    settingsdialog.cpp \
    settingsstore.cpp

HEADERS += mainwindow.h \
    settingsdialog.h \
    settingsstore.h

FORMS += mainwindow.ui \
    settingsdialog.ui

OTHER_FILES += ../config.ini

RESOURCES += Resources.qrc

# SUBDIRS = roboblocks
