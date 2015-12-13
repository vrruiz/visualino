#include "mainwindow.h"
#include <QApplication>
#include <QDir>
#include <QLibraryInfo>
#include <QSplashScreen>
#include <QTimer>
#include <QTranslator>
#include "settingsstore.h"

#define SPLASH

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);    

    // Show splash
#ifdef SPLASH
    QImage img(":/icons/splashscreen.png");
    QPixmap pixmap = QPixmap::fromImage(img);
    QSplashScreen splash(pixmap, Qt::WindowStaysOnTopHint);
    splash.show();
    a.processEvents();
#endif

    // Load Qt translations
    QTranslator qtTranslator;
    qtTranslator.load("qt_" + QLocale::system().name(),
            QLibraryInfo::location(QLibraryInfo::TranslationsPath));
    a.installTranslator(&qtTranslator);

    // Load program translations
    SettingsStore *settings = new SettingsStore(CONFIG_INI);
    QString defaultLocale = settings->defaultLanguage();
    delete settings;

    QTranslator appTranslator;
    QString tsFile = "visualino_" + defaultLocale.toLower();
    QStringList directories;
    // List of directories to search
    // In Windows and Mac, the translation files must be located in the same
    // directory than the executable. In Linux, search also in /usr/share/.
    directories.append("./ts/");
    directories.append(a.applicationDirPath() + "/ts/");
    directories.append("/usr/share/visualino/ts/");
    foreach (QString directory, directories) {
        bool loaded = appTranslator.load(tsFile, directory);
        if (loaded) {
            a.installTranslator(&appTranslator);
            break;
        }
    }

    // Create main window
    MainWindow w;

    // Hide splash, show main window
#ifdef SPLASH
    w.hide();

    QTimer::singleShot(2500, &splash, SLOT(close()));
    QTimer::singleShot(1500, &w, SLOT(unhide()));
#else
    w.show();
#endif

    return a.exec();
}
