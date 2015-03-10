TEMPLATE = aux

linux {
  first.commands = lupdate ../visualino.pro && lrelease ../visualino.pro
  QMAKE_EXTRA_TARGETS += first
}

QMAKE_CLEAN += *.qm
