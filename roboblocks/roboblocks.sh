#!/bin/bash
## This script imports and builds Roboblocks, the required
## Blockly-based HTML application that Visual Arduino
## embeds.
set -ex
git clone https://github.com/bq/roboblocks.git
cd roboblocks/
npm install bower
npm run bower
cp -r bower_components/ src/
cp -r bower_components/blockly-bq/media/ src/
cp -r dist/* src/
