#ifndef GRAPHWIDGET_H
#define GRAPHWIDGET_H

#define MAX_DATA 100

#include <QWidget>

class GraphWidget : public QWidget
{
    Q_OBJECT
public:
    explicit GraphWidget(QWidget *parent = 0);
    ~GraphWidget();
    void append(int point);

protected:
    int data[MAX_DATA];
    int count;
    void paintEvent(QPaintEvent *event);

signals:

public slots:

};

#endif // GRAPHWIDGET_H
