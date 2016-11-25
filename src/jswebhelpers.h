#ifndef JSWEBHELPERS_H
#define JSWEBHELPERS_H

#include <QObject>

class JsWebHelpers : public QObject
{
    Q_OBJECT
public:
    explicit JsWebHelpers(QObject *parent = 0);

    void resetSourceChanged();
    int sourceChanges();
    bool isSourceChanged();

    Q_INVOKABLE void sourceChanged();

private:
    int source_changes;
    bool source_changed;

signals:
    void changed();

public slots:

};

#endif // JSWEBHELPERS_H
