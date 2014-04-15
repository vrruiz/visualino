#-------------------------------------------------
#
# Project created by QtCreator 2014-04-13T00:20:37
#
#-------------------------------------------------

QT       += core gui

greaterThan(QT_MAJOR_VERSION, 4): QT += widgets webkit webkitwidgets

TARGET = VisualArduino
TEMPLATE = app


SOURCES += main.cpp\
        mainwindow.cpp

HEADERS  += mainwindow.h

FORMS    += mainwindow.ui

OTHER_FILES += \
    blockly/apps/blocklyduino/index.html \
    config.ini

RESOURCES += \
    Resources.qrc
