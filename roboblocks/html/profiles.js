'use strict';

/*
 * Arduino Board profiles
 */
var profiles = {
        arduino: {
            description: 'Standard-compatible board',
            digital: [['0', '0'],['1', '1'],['2', '2'],['3', '3'],['4', '4'],['5', '5'],['6', '6'],['7', '7'],['8', '8'],['9', '9'],['10', '10'],['11', '11'],['12', '12'],['13', '13']],
            bluetooth: [['1', '1'],['2', '2'],['3', '3'],['4', '4'],['5', '5'],['6', '6'],['7', '7'],['8', '8'],['9', '9'],['10', '10'],['11', '11']],
            pwm: [['#3', '3'],['#5', '5'],['#6', '6'],['#9', '9'],['#10', '10'],['#11', '11']],
            analog: [['A0', 'A0'],['A1', 'A1'],['A2', 'A2'],['A3', 'A3'],['A4', 'A4'],['A5', 'A5']],
            serial: 9600,
        },
        'arduino_mega': {
            description: 'Mega-compatible board',
        },
    };


// Set default profile to arduino standard-compatible board
profiles['default'] = profiles.arduino;
