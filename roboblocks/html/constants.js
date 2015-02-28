'use strict';
/* global RoboBlocks, Blockly*/
RoboBlocks.locales.initialize();
RoboBlocks.variables = {};
RoboBlocks.isVariable = function(varValue) {
    for (var i in Blockly.Variables.allVariables()) {
        if (Blockly.Variables.allVariables()[i] === varValue) {
            return true;
        }
    }
    if (RoboBlocks.variables[varValue]!==undefined){
        return true;
    }
    if (varValue.search('digitalRead\\(')>=0|| varValue.search('analogRead\\(')>=0){
        return true;
    }
    return false;
};

RoboBlocks.findPinMode=function(dropdown_pin){
    var code='';
    dropdown_pin = dropdown_pin.split(';\n');
    for (var j in dropdown_pin) {
        if (dropdown_pin[j].search('pinMode') >= 0) {
            code += dropdown_pin[j] + ';\n';
        } else {
            dropdown_pin = dropdown_pin[j];
        }
    }
    return {'code':code, 'pin':dropdown_pin};
};

// help URLs
RoboBlocks.GITHUB_SRC_URL = 'https://github.com/bq/roboblocks/tree/master/src/';
// RGB block colors
RoboBlocks.LANG_COLOUR_BQ = '#D04141';
RoboBlocks.LANG_COLOUR_ZUM = '#CC7B44';
RoboBlocks.LANG_COLOUR_SERVO = '#CECE42';
RoboBlocks.LANG_COLOUR_LCD = '#ACCE42';
RoboBlocks.LANG_COLOUR_CONTROL = '#44CC44';
RoboBlocks.LANG_COLOUR_LOGIC = '#42CE91';
RoboBlocks.LANG_COLOUR_MATH = '#42CBCE';
RoboBlocks.LANG_COLOUR_TEXT = '#42A3CE';
RoboBlocks.LANG_COLOUR_COMMUNICATION = '#4263CE';
RoboBlocks.LANG_COLOUR_ADVANCED = '#9142CE';
RoboBlocks.LANG_COLOUR_VARIABLES = '#B244CC';
RoboBlocks.LANG_COLOUR_PROCEDURES = '#CE42B3';
RoboBlocks.setColors = function(colorArray) {
    RoboBlocks.LANG_COLOUR_BQ = colorArray[0];
    RoboBlocks.LANG_COLOUR_ZUM = colorArray[1];
    RoboBlocks.LANG_COLOUR_SERVO = colorArray[2];
    RoboBlocks.LANG_COLOUR_LCD = colorArray[3];
    RoboBlocks.LANG_COLOUR_CONTROL = colorArray[4];
    RoboBlocks.LANG_COLOUR_LOGIC = colorArray[5];
    RoboBlocks.LANG_COLOUR_MATH = colorArray[6];
    RoboBlocks.LANG_COLOUR_TEXT = colorArray[7];
    RoboBlocks.LANG_COLOUR_COMMUNICATION = colorArray[8];
    RoboBlocks.LANG_COLOUR_ADVANCED = colorArray[9];
    RoboBlocks.LANG_COLOUR_VARIABLES = colorArray[10];
    RoboBlocks.LANG_COLOUR_PROCEDURES = colorArray[11];
};