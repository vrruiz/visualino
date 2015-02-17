#include "mainwindow.h"
#include <QApplication>
#include <QSplashScreen>
#include <QTimer>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);

    QImage img(":/splashscreen.png");
    QPixmap pixmap = QPixmap::fromImage(img);
    QSplashScreen splash(pixmap, Qt::WindowStaysOnTopHint);
    splash.show();
    a.processEvents();

    MainWindow w;    
    w.hide();

    QTimer::singleShot(2500, &splash, SLOT(close()));
    QTimer::singleShot(1500, &w, SLOT(unhide()));

    return a.exec();
}
