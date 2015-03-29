#ifndef GRAPHWIDGET_H
#define GRAPHWIDGET_H

#define MAX_DATA 1000

#include <QFont>
#include <QWidget>

class GraphWidget : public QWidget
{
    Q_OBJECT
public:
    explicit GraphWidget(QWidget *parent = 0);
    ~GraphWidget();
    void append(long point);

protected:
    QFont *font;
    QVector<long> data;
    int max_value;
    int min_value;
    int count;

    void paintEvent(QPaintEvent *event);

signals:

public slots:

};

#endif // GRAPHWIDGET_H
