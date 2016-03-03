#include "qblockswebview.h"

QBlocksWebView::QBlocksWebView() {
}

QBlocksWebView::QBlocksWebView(QWidget *parent)
    : QWebView::QWebView(parent) {
}

/*
 * Deactivate. Bad usability.
 *
void QBlocksWebView::wheelEvent(QWheelEvent *event) {
    // Capture mouse wheel events.
    // Zoom the WebView
    float scale = event->delta() / 120.0 / 10.0;
    doZoom(scale);
}
*/

void QBlocksWebView::doZoom(float scale) {
    // Apply zoom (in: scale > 0, out: scale < 0)
    if ((scale > 0 && zoomFactor() < 1.5) ||
        (scale < 0 && zoomFactor() > 0.5)) {
        setZoomFactor(scale + zoomFactor());
    }
}

void QBlocksWebView::zoomIn() {
    doZoom(0.1);
}

void QBlocksWebView::zoomOut() {
    doZoom(-0.1);
}
