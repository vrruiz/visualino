Visualino
=========

A desktop version of Roboblocks, a block-based programming environment
for Arduino.

Requirements
------------

- Qt 5.x.
- Arduino IDE >= 1.6.

Visualino uses Arduino IDE to build and upload the sketches to Arduino.


Build in Linux/Ubuntu
---------------------

To build Visualino, install Qt 5.x and qmake and run:

```
$ qmake
$ make
```

Configure
---------

config.ini contains two important paths that must be correctly defined:

- arduino\_ide\_path: The binary for Arduino IDE.
- html\_index: The absolute path where Roboblocks' index.html file is stored.

In Linux, config.ini is searched in this folders

- ~/.local/share/visualino/
- /usr/share/visualino/

