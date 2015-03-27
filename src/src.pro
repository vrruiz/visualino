QT += core gui serialport widgets

greaterThan(QT_MAJOR_VERSION, 4): QT += widgets webkit webkitwidgets

TARGET = visualino
TEMPLATE = app

SOURCES += main.cpp\
        mainwindow.cpp \
    settingsdialog.cpp \
    settingsstore.cpp \
    graphwidget.cpp

HEADERS += mainwindow.h \
    settingsdialog.h \
    settingsstore.h \
    graphwidget.h

FORMS += mainwindow.ui \
    settingsdialog.ui

OTHER_FILES += ../config.ini ../ts/*.ts ../roboblocks/html/* ../icons/*

RESOURCES += Resources.qrc

DESTDIR = $${OUT_PWD}
INSTALLS_DESTDIR = $${DESTDIR}

macx {
  INSTALLS_DESTDIR = $${OUT_PWD}/visualino.app/Contents/MacOS/
  ICON = ../icons/visualino.icns
}

config.path = $${INSTALLS_DESTDIR}
config.files = ../config.ini

html.path = $${INSTALLS_DESTDIR}/html
html.files = ../roboblocks/html/*

translation.path = $${INSTALLS_DESTDIR}/ts
translation.files = ../ts/*.qm

INSTALLS += config html translation
