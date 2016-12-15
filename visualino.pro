TEMPLATE = subdirs
SUBDIRS = ts src
TRANSLATIONS = \
    ts/visualino_ca-es.ts \
    ts/visualino_es-es.ts \
    ts/visualino_eu-es.ts \
    ts/visualino_fr-fr.ts \
    ts/visualino_gl-es.ts \
    ts/visualino_it-it.ts \
    ts/visualino_pl-pl.ts \
    ts/visualino_pt-pt.ts \
    ts/visualino_ru.ts

macx {
    deploy.commands = macdeployqt $${OUT_PWD}/visualino.app
    QMAKE_EXTRA_TARGETS += deploy
}

win32 {
    deploy.commands = windeployqt --release $${OUT_PWD}/src/visualino.exe
    QMAKE_EXTRA_TARGETS += deploy
}
