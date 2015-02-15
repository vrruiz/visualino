QT += core gui

greaterThan(QT_MAJOR_VERSION, 4): QT += widgets webkit webkitwidgets

TARGET = visualino
TEMPLATE = app

SOURCES += main.cpp\
        mainwindow.cpp

HEADERS += mainwindow.h

FORMS += mainwindow.ui

OTHER_FILES += ../config.ini

RESOURCES += Resources.qrc

# SUBDIRS = roboblocks
