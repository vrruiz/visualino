#include "graphwidget.h"
#include <QBrush>
#include <QDebug>
#include <QPainter>
#include <QTimer>

#define MAX_VALUE 1023
#define MIN_VALUE 0

GraphWidget::GraphWidget(QWidget *parent) :
    QWidget(parent)
{
    count = 0;
}

GraphWidget::~GraphWidget() {
}

void GraphWidget::append(int point) {
    if (count == MAX_DATA) {
        // Remove first point
        for (int i = 1; i < MAX_DATA; i++) {
            data[i - 1] = data[i];
        }
        data[MAX_DATA - 1] = point;
    } else {
        // Append point
        data[count] = point;
        count++;
    }
    // Draw new data point
    repaint();
}


void GraphWidget::paintEvent(QPaintEvent *event) {
    if (count == 0) return;

    QPainter p(this);
    QSize s = size();
    float data_width = s.width() / MAX_DATA;
    if (data_width < 5) data_width = 5;

    // Ticks
    p.setPen(Qt::gray);
    int div = 10;
    if (s.height() < 400) div = 5;
    for (int n = 1; n <= div; n++) {
        int y = s.height() / div * n;
        p.drawLine(0, y, s.width(), y);
    }
    p.drawLine(0,0,s.width(),0);

    for (int i = 0; i < count; i++) {
        // Check boundaries
        int value = data[i];
        if (value > MAX_VALUE) {
            value = MAX_VALUE;
        } else if (value < MIN_VALUE) {
            value = MIN_VALUE;
        }
        // Draw rectangle
        p.fillRect(s.width() - data_width * (count - i) - 1,
                   s.height(),
                   data_width - 1,
                   -(s.height() * data[i] / 1023),
                   Qt::red);
    }

}
