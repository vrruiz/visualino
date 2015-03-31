#include "graphwidget.h"
#include <QBrush>
#include <QDebug>
#include <QPainter>
#include <QTimer>

#define COLUMN_WIDTH 5
#define MAX_VALUE 1
#define MIN_VALUE 0

GraphWidget::GraphWidget(QWidget *parent) :
    QWidget(parent)
{
    count = 0;
    max_value = MAX_VALUE;
    min_value = MIN_VALUE;
    font = new QFont("Courier", 8);
}

GraphWidget::~GraphWidget() {
    delete font;
}

void GraphWidget::append(long point) {
    if (data.count() == MAX_DATA) {
        // Remove first point
        data.removeFirst();
        // Autoresize
        max_value = data.at(0);
        min_value = data.at(0);
        for (int i = 1; i < data.count(); i++) {
            long value = data.at(i);
            if (max_value < value) {
                max_value = value;
            }
            if (min_value > value) {
                min_value = value;
            }
        }
    }
    data.append(point);
    // Autoresize
    if (max_value < point) {
        max_value = point;
    }
    if (min_value > point) {
        min_value = point;
    }
    // Draw new data point
    repaint();
}


void GraphWidget::paintEvent(QPaintEvent *event) {
    if (data.count() == 0) return;

    QPainter p(this);
    QSize s = size();

    int num_columns = s.width() / COLUMN_WIDTH;

    // Ticks
    p.setPen(Qt::gray);
    p.setFont(*font);
    int div = 10;
    if (s.height() < 400) div = 5;
    for (int n = 1; n <= div; n++) {
        int y = s.height() / div * n;
        p.drawLine(0, y, s.width(), y);
        QString value(QString::number(max_value / div * (div - n)));
        p.drawText(0, y - 1, value);
    }
    p.drawLine(0, 0, s.width(), 0);
    p.drawText(0, 10, QString::number(max_value));

    // Draw columns, from last to first
    int i = data.count() - 1;
    int n = 1;
    while (i >= 0 && n <= num_columns) {
        // Draw rectangle
        p.fillRect(s.width() - COLUMN_WIDTH * n + 1,
                   s.height(),
                   COLUMN_WIDTH - 1,
                   -(s.height() * data.at(i) / max_value),
                   QColor(134, 196, 64, 170));
        i--;
        n++;
    }
}
