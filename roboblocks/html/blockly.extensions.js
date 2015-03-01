'use strict';
/* global Blockly */
/* jshint sub:true */

/**
 * Generates toolbox XML with all blocks defined in Blockly.Blocks
 * @return {String} Blockly toolbox XML
 */
Blockly.createToolbox = function() {

    var blocks = {};

    for (var block in this.Blocks) {
        // important check that this is objects own property 
        // not from prototype prop inherited
        if (this.Blocks.hasOwnProperty(block) && this.Blocks[block] instanceof Object && this.Blocks[block].category) {
            var category = this.Blocks[block].category;
            blocks[category] = blocks[category] || [];
            blocks[category].push(block);
        }
    }

    var toolbox = '<xml id="toolbox" style="display: none">';

    var categoryItem = function(type) {
        toolbox += '<block type="' + type + '"></block>';
    };

    for (block in blocks) {

        if (blocks.hasOwnProperty(block)) {
            toolbox += '<category id="'+block+'" name="' + block + '">';
            blocks[block].forEach(categoryItem);
            toolbox += '</category>';
        }

    }
    toolbox += '</xml>';

    return toolbox;
};
