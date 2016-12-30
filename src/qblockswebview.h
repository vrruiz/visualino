#ifndef QBLOCKSWEBVIEW_H
#define QBLOCKSWEBVIEW_H

#include <QWebEngineView>
#include <QWheelEvent>

class QBlocksWebView : public QWebEngineView
{
public:
    QBlocksWebView();
    QBlocksWebView(QWidget *parent = 0);

    void zoomIn();
    void zoomOut();

private:
    // void wheelEvent(QWheelEvent *event);

    void init();
    void doZoom(float scale);

signals:

public slots:
};

#endif // QBLOCKSWEBVIEW_H
