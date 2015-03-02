#include "mainwindow.h"
#include <QApplication>
#include <QSplashScreen>
#include <QTimer>

#define SPLASH

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);

#ifdef SPLASH
    QImage img(":/icons/splashscreen.png");
    QPixmap pixmap = QPixmap::fromImage(img);
    QSplashScreen splash(pixmap, Qt::WindowStaysOnTopHint);
    splash.show();
    a.processEvents();
#endif

    MainWindow w;

#ifdef SPLASH
    w.hide();

    QTimer::singleShot(2500, &splash, SLOT(close()));
    QTimer::singleShot(500, &w, SLOT(unhide()));
#else
    w.show();
#endif

    return a.exec();
}
