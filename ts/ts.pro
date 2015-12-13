TEMPLATE = aux

linux {
  first.commands = lupdate ../visualino.pro && lrelease ../visualino.pro
  QMAKE_EXTRA_TARGETS += first
}

win32 {
  first.commands = lupdate $$PWD/../visualino.pro && lrelease $$PWD/../visualino.pro
  QMAKE_EXTRA_TARGETS += first
}


QMAKE_CLEAN += *.qm
