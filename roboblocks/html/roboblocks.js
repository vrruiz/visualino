/*! roboblocks - v0.2.3 - 2020-01-29
 * https://github.com/bq/roboblocks
 * Copyright (c) 2020 bq; Licensed  */

(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['underscore', 'blockly-bq', 'blockly.blocks'], factory);
    } else {
        factory(_, window.Blockly, window.Blocks);
    }
}(function(_, Blockly, Blocks) {
    var load = function(options) {
        // Source: src/lang.js
        /* global RoboBlocks, options */
        RoboBlocks.locales = {
            defaultLanguage: {},
            languages: []
        };
        RoboBlocks.locales.getLang = function() {
            return this.defaultLanguage.lngCode;
        };
        RoboBlocks.locales.getKey = function(key) {
            return this.defaultLanguage[key];
        };
        RoboBlocks.locales.setDefaultLang = function(langCode) {
            for (var i in this.languages) {
                if (this.languages[i].langCode === langCode) {
                    this.defaultLanguage = this.languages[i].values;
                    this.defaultLanguage.lngCode = langCode;
                }
            }
        };
        RoboBlocks.locales.add = function(langCode, values) {
            if (!langCode) {
                return this.defaultLanguage;
            }
            if (langCode && !values) {
                if (!this.languages[langCode]) {
                    throw new Error('Unknown language : ' + langCode);
                }
                //this.defaultLanguage = langCode;
            }
            if (values || !this.languages[langCode]) {
                this.languages.push({
                    langCode: langCode,
                    values: values
                });
            }
            return this;
        };
        RoboBlocks.locales.initialize = function() {
            var lang = options.lang || window.roboblocksLanguage || 'en-GB';
            this.setDefaultLang(lang);
            return this;
        };

        // Source: lang/ca-ES.js
        (function() {
            var language = {
                //random :
                BLOCKLY_MSG_DUPLICATE_BLOCK: 'Duplica',
                BLOCKLY_MSG_REMOVE_COMMENT: 'Elimina el comentari',
                BLOCKLY_MSG_ADD_COMMENT: 'Afegeix un comentari',
                BLOCKLY_MSG_EXTERNAL_INPUTS: 'Entrades externes',
                BLOCKLY_MSG_INLINE_INPUTS: 'Entrades en línia',
                BLOCKLY_MSG_DELETE_BLOCK: 'Elimina el bloc',
                BLOCKLY_MSG_DELETE_X_BLOCKS: 'Elimina %1 blocs',
                BLOCKLY_MSG_COLLAPSE_BLOCK: 'Replega el bloc',
                BLOCKLY_MSG_EXPAND_BLOCK: 'Desplega el bloc',
                BLOCKLY_MSG_DISABLE_BLOCK: 'Desactiva els blocs',
                BLOCKLY_MSG_ENABLE_BLOCK: 'Activa el bloc',
                BLOCKLY_MSG_HELP: 'Ajuda',
                BLOCKLY_MSG_COLLAPSE_ALL: 'Replega els blocs',
                BLOCKLY_MSG_EXPAND_ALL: 'Desplega els blocs',
                LANG_VARIABLES_SET_ITEM: 'element',
                LANG_RESERVED_WORDS: 'Paraula reservada: aquest nom no està permès.',
                LANG_CHAR_LENGTH: 'A character must have length 0 or 1.', //to translate
                //logic blocks:
                LANG_CATEGORY_LOGIC: 'Lògica',
                LANG_LOGIC_OPERATION_AND: 'i',
                LANG_LOGIC_OPERATION_OR: 'o',
                LANG_LOGIC_COMPARE_TOOLTIP_EQ: 'Compara si les dues entrades són iguals.',
                LANG_LOGIC_COMPARE_TOOLTIP_NEQ: 'Compara si les dues entrades són diferents.',
                LANG_LOGIC_COMPARE_TOOLTIP_LT: 'Compara si la primera entrada és menor que la segona entrada.',
                LANG_LOGIC_COMPARE_TOOLTIP_LTE: 'Compara si la primera entrada és menor o igual que la segona entrada.',
                LANG_LOGIC_COMPARE_TOOLTIP_GT: 'Compara si la primera entrada és més gran que la segona entrada.',
                LANG_LOGIC_COMPARE_TOOLTIP_GTE: 'Compara si la primera entrada és més gran o igual que la segona entrada.',
                LANG_LOGIC_OPERATION_TOOLTIP_AND: 'Compara si les dues entrades són veritables.',
                LANG_LOGIC_OPERATION_TOOLTIP_OR: 'Compara si alguna de les entrades són veritables.',
                LANG_LOGIC_NEGATE_INPUT_NOT: 'no',
                LANG_LOGIC_NEGATE_TOOLTIP: 'Retorna el contrari de l\'entrada.',
                LANG_LOGIC_NEGATE_HELPURL: '',
                LANG_LOGIC_BOOLEAN_TRUE: 'veritable',
                LANG_LOGIC_BOOLEAN_FALSE: 'fals',
                LANG_LOGIC_BOOLEAN_TOOLTIP: 'Retorna veritable o fals en funció del que s\'ha seleccionat.',
                //communication blocks:
                LANG_CATEGORY_COMMUNICATION: 'Comunicació',
                LANG_BQ_BLUETOOTH_RECEIVE: 'Rep dades per Bluetooth',
                LANG_BQ_BLUETOOTH_RECEIVE_BLUETOOTH: 'Bluetooth',
                LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP: 'Retorna les dades rebudes pel mòdul Bluetooth',
                LANG_BQ_BLUETOOTH_SEND: 'Envia dades per Bluetooth',
                LANG_BQ_BLUETOOTH_SEND_SEND: 'Envia dades',
                LANG_BQ_BLUETOOTH_SEND_TOOLTIP: 'Pren les dades de l\'entrada i les envia utilitzant el mòdul Bluetooth',
                LANG_BQ_BLUETOOTH_DEF: 'Bluetooth',
                LANG_BQ_BLUETOOTH_DEF_BAUD_RATE: 'Taxa de bauds',
                LANG_BQ_BLUETOOTH_DEF_PIN1: 'RX',
                LANG_BQ_BLUETOOTH_DEF_PIN2: 'TX',
                LANG_BQ_BLUETOOTH_DEF_NAME: 'Nom',
                LANG_BQ_BLUETOOTH_DEF_PINCODE: 'Codi PIN',
                LANG_BQ_BLUETOOTH_DEF_RECEIVE: 'Rep',
                LANG_BQ_BLUETOOTH_DEF_SEND: 'Envia',
                LANG_BQ_BLUETOOTH_DEF_TOOLTIP: 'Definició del mòdul Bluetooth',
                LANG_ADVANCED_BT_SERIAL_AVAILABLE: 'Bluetooth: port sèrie disponible',
                LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP: 'Comprova si el mòdul Bluetooth està disponible',
                LANG_ADVANCED_SERIAL_AVAILABLE: 'Port sèrie disponible',
                LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP: 'Comprova si el port sèrie està disponible',
                LANG_ADVANCED_SERIAL_PARSEINT: 'Llegeix l\'enter del port sèrie',
                LANG_ADVANCED_SERIAL_PARSEINT_TOOLTIP: 'Retorna el primer número enter (llarg) des del port sèrie',
                LANG_ADVANCED_SERIAL_PRINT: 'Imprimeix pel port sèrie',
                LANG_ADVANCED_SERIAL_PRINT_TOOLTIP: 'Imprimeix les dades com a text ASCII.',
                LANG_ADVANCED_SERIAL_PRINTLN: 'Imprimeix pel port sèrie amb salt de línia',
                LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP: 'Imprimeix les dades com a text ASCII i amb retorn de carro (RC).',
                LANG_ADVANCED_SERIAL_PRINT_FORMAT: 'Prints value with format', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_1: 'Binary', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_2: 'Octal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_3: 'Decimal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_4: 'Hexadecimal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_5: 'Without decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_6: 'One decimal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_7: 'Two decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_8: 'Three decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_9: 'Four decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_TOOLTIP: 'Prints value with specified format', //to translate
                LANG_ADVANCED_SERIAL_PRINTLN_FORMAT: 'Send value with format and CR', //To translate
                LANG_ADVANCED_SERIAL_PRINTLN_FORMAT_TOOLTIP: 'Send a number to serial port with specified format and carriage return (CR).', //To translate
                LANG_ADVANCED_SERIAL_READ: 'Llegeix des del port sèrie',
                LANG_ADVANCED_SERIAL_READ_TOOLTIP: 'Llegeix les dades que es reben pel port sèrie com a bytes.',
                LANG_ADVANCED_SERIAL_READSTRING: 'Llegeix text des del port sèrie',
                LANG_ADVANCED_SERIAL_READSTRING_TOOLTIP: 'Llegeix les dades que es reben pel port sèrie com a text ASCII.',
                //Sensor blocks:
                LANG_CATEGORY_SENSOR: 'Sensors',
                LANG_BQ_BAT: 'BAT - Sensor d\'ultrasons',
                LANG_BQ_BAT_RED_PIN: 'ECHO PIN#',
                LANG_BQ_BAT_BLUE_PIN: 'TRIGGER PIN#',
                LANG_BQ_BAT_TOOLTIP: 'Retorna la distància mesurada pel sensor.',
                LANG_IR_READ: 'Reads from infrared receiver', //to translate
                LANG_IR_READ_PIN: 'connected to PIN#', //to translate
                LANG_IR_READ_TOOLTIP: 'Reads the value received from the infrared receiver', //to translate
                //LCD blocks:
                LANG_CATEGORY_LCD: 'Blocs de la LCD',
                LANG_LCD_DEF: 'LCD (2x16)',
                LANG_LCD_DEF_CONNECTION: 'Connection type', //to translate
                LANG_LCD_DEF_CONNECTION_PARALLEL: 'Parallel (6 pins)', //to translate
                LANG_LCD_DEF_CONNECTION_I2C: 'I2C (4 wires)', //to translate
                LANG_LCD_DEF_ADDRESS: 'Address of the component', //to translate
                LANG_LCD_DEF_PIN_1: 'RS Pin', //to translate
                LANG_LCD_DEF_PIN_2: 'Enable Pin', //to translate
                LANG_LCD_DEF_PIN_3: 'Data4 Pin', //to translate
                LANG_LCD_DEF_PIN_4: 'Data5 Pin', //to translate
                LANG_LCD_DEF_PIN_5: 'Data6 Pin', //to translate
                LANG_LCD_DEF_PIN_6: 'Data7 Pin', //to translate
                LANG_LCD_DEF_TOOLTIP: 'Defineix la LCD',
                LANG_LCD_ADVANCED_DEF: 'LCD avançada',
                LANG_LCD_ADVANCED_ROWS: 'Files',
                LANG_LCD_ADVANCED_COLUMNS: 'Columnes',
                LANG_LCD_DEF_ADVANCED_TOOLTIP: 'Bloc que defineix la LCD avançada',
                LANG_LCD_SETBACKLIGHT: 'LCD: ajustar la retroiluminació',
                LANG_LCD_SETBACKLIGHT_CLOSE: '',
                LANG_LCD_SETBACKLIGHT_TOOLTIP: 'Ajusta la retroiluminació de la LCD',
                LANG_LCD_PRINT: 'LCD: Imprimir ',
                LANG_LCD_PRINT_POSITION: 'Vols fifxar la posició del text?',
                LANG_LCD_PRINT_TOOLTIP: 'Imprimeix una cadena a la LCD en la posició especificada o en la següent disponible.',
                LANG_LCD_CLEAR: 'Esborra la LCD',
                LANG_LCD_CLEAR_TOOLTIP: 'LCD: Esborra',
                LANG_LCD_HOME: 'LCD Go home', //to translate
                LANG_LCD_HOME_TOOLTIP: 'LCD: Positions the cursor in the upper-left corner of the screen', //to translate
                LANG_LCD_DISPLAY: 'LCD Show content', //to translate
                LANG_LCD_DISPLAY_TOOLTIP: 'LCD: Turns on the LCD display and restore the text that was on the display', //to translate
                LANG_LCD_NODISPLAY: 'LCD Hide content', //to translate
                LANG_LCD_NODISPLAY_TOOLTIP: 'LCD: Turns off the LCD display, without losing the text currently shown on it', //to translate
                LANG_LCD_SCROLLDISPLAYLEFT: 'LCD Scrolls to the left', //to translate
                LANG_LCD_SCROLLDISPLAYLEFT_TOOLTIP: 'LCD: Scrolls the contents of the display one space to the left', //to translate
                LANG_LCD_SCROLLDISPLAYRIGHT: 'LCD Scrolls to the right', //to translate
                LANG_LCD_SCROLLDISPLAYRIGHT_TOOLTIP: 'LCD: Scrolls the contents of the display one space to the right', //to translate
                //controls blocks :
                LANG_CATEGORY_CONTROLS: 'Control',
                LANG_CONTROLS_BASE_DELAY_WAIT: 'Espera (ms)',
                LANG_CONTROLS_BASE_DELAY_TOOLTIP: 'Espera el temps especificat en mil·lisegons (ms)',
                LANG_CONTROLS_BASE_MILLIS: 'Temps des de l\'inici (ms)',
                LANG_CONTROLS_BASE_MILLIS_TOOLTIP: 'Número de mil·lisegons des que el programa s\'ha iniciat (enter llarg)',
                LANG_CONTROLS_BASE_DELAY_MICROSECONDS: 'Wait [us]', //To translate
                LANG_CONTROLS_BASE_DELAY_MICROSECONDS_TOOLTIP: 'Waits the specified time in microseconds (us)', //To translate
                LANG_CONTROLS_BASE_MICROS: 'Time from start (us)', //To translate
                LANG_CONTROLS_BASE_MICROS_TOOLTIP: 'Number of microseconds since the program started (long integer)', //To translate
                LANG_CONTROLS_DOWHILE_OPERATOR_DO: 'Fes',
                LANG_CONTROLS_DOWHILE_OPERATOR_WHILE: 'mentre',
                LANG_CONTROLS_DOWHILE_TOOLTIP: 'Mentre la condició es compleix, continua fent les accions.',
                LANG_CONTROLS_EXECUTE: 'Fes',
                LANG_CONTROLS_EXECUTE_TOOLTIP: 'Executa codic C/C++. Utilitza-ho amb cura, perquè pot trencar fàcilment el programa i evitar que es compili.',
                LANG_CONTROLS_IF_TOOLTIP_1: 'Si la condició es compleix, fa les accions dins del bloc.',
                LANG_CONTROLS_IF_TOOLTIP_2: 'Si la condició es compleix, fa el primer bloc d\'ordres. Si no, fa el segon bloc d\'ordres.',
                LANG_CONTROLS_IF_TOOLTIP_3: 'Si el primer valor es compleix, fa el primer bloc d\'ordres. Si no, si el segon valor es compleix, fa el segon bloc d\'ordres.',
                LANG_CONTROLS_IF_TOOLTIP_4: 'Si el primer valor es compleix, fa el primer bloc d\'ordres. Si no, si el segon valor es compleix, fa el segon bloc d\'ordres. Si cap dels valors es compleix, fa l\'últim bloc d\'ordres',
                LANG_CONTROLS_IF_MSG_IF: 'si',
                LANG_CONTROLS_IF_MSG_ELSEIF: 'en canvi, si',
                LANG_CONTROLS_IF_MSG_ELSE: 'en cas contrari',
                LANG_CONTROLS_IF_MSG_THEN: 'fes',
                LANG_CONTROLS_IF_IF_Field_IF: 'si',
                LANG_CONTROLS_IF_IF_TOOLTIP: 'Afegeix, elimina o reordena seccions per reconfigurar aquest bloc «si».',
                LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF: 'en canvi, si',
                LANG_CONTROLS_IF_ELSEIF_TOOLTIP: 'Afegeix a condició del bloc «si».',
                LANG_CONTROLS_IF_ELSE_Field_ELSE: 'en cas contrari',
                LANG_CONTROLS_IF_ELSE_TOOLTIP: 'Afegeix una condició final al bloc "si" per capturar la resta d\'opcions.',
                LANG_CONTROLS_FOR_FROM_WARNING: 'No és possible establir una variable com a valor inicial pel bloc «per».',
                LANG_CONTROLS_FOR_TO_WARNING: 'No és possible establir una variable com a valor final pel bloc «per».',
                LANG_CONTROLS_FOR_INCREMENT_WARNING: 'No puedes asignar una variable al valor de incremento del for', //to translate
                LANG_CONTROLS_FOR_INPUT_WITH: 'compta amb',
                LANG_CONTROLS_FOR_INPUT_VAR: 'x',
                LANG_CONTROLS_FOR_INPUT_FROM: 'des de',
                LANG_CONTROLS_FOR_INPUT_TO: 'fins',
                LANG_CONTROLS_FOR_INPUT_INCREMENT: 'increment', //to translate
                LANG_CONTROLS_FOR_INPUT_DO: 'fes',
                LANG_CONTROLS_FOR_TOOLTIP: 'Compta des d\'un nombre d\'inici fins un de final. Cada vegada que s\'incrementa en un el compte, la variable pren aquest valor i s\'executen les accions.',
                LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE: 'mentre',
                LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL: 'fins',
                LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE: 'Mentre la condició es compleixi, fa les instruccions.',
                LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL: 'Mentre la condició no es compleixi, fa les instruccions.',
                LANG_CONTROLS_REPEAT_TITLE_REPEAT: 'Repeteix',
                LANG_CONTROLS_REPEAT_TITLE_TIMES: 'vegades',
                LANG_CONTROLS_REPEAT_INPUT_DO: 'fes',
                LANG_CONTROLS_REPEAT_TOOLTIP: 'Executa les instruccions un nombre concret de vegades.',
                LANG_CONTROLS_FLOW_STATEMENTS_HELPURL: '',
                LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP: 'el bucle',
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: 'interromp',
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: 'continua amb la següent iteració',
                LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK: 'Interromp el bucle que conté aquesta instrucció.',
                LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE: 'Se salta la resta d\'accions d\'aquesta iteració i continua amb la següent iteració.',
                LANG_CONTROLS_FLOW_STATEMENTS_WARNING: 'Atenció: Aquest bloc només es pot utilitzar dins d\'un bucle.',
                LANG_CONTROLS_SETUP_LOOP_SETUP_TITLE: 'Setup',
                LANG_CONTROLS_SETUP_LOOP_LOOP_TITLE: 'Loop',
                LANG_CONTROLS_SETUP_LOOP_TOOLTIP: 'Els blocs dins de «setup» els fa a l\'inici, i els blocs dins de «loop» es repetiran contínuament.',
                LANG_CONTROLS_SWITCH: 'si ',
                LANG_CONTROLS_SWITCH_TOOLTIP_1: 'Fa les accions del cas que es compleixi.',
                LANG_CONTROLS_SWITCH_TOOLTIP_2: 'Fa les accions del cas que es compleixi.',
                LANG_CONTROLS_SWITCH_TOOLTIP_3: 'Fa les accions del cas que es compleixi.',
                LANG_CONTROLS_SWITCH_TOOLTIP_4: 'Fa les accions del cas que es compleixi.',
                LANG_CONTROLS_SWITCH_SWITCH_TOOLTIP: 'Aquest bloc compara d\'un en un si es compleixen els diferents casos.',
                LANG_CONTROLS_SWITCH_CASE_TOOLTIP: 'cas ',
                LANG_CONTROLS_SWITCH_DEFAULT_TOOLTIP: 'El bloc «default» especifica l\'acció que es farà si no s\'ha complert cap dels casos anteriors.',
                LANG_CONTROLS_SWITCH_IS: 'és: ',
                LANG_CONTROLS_SWITCH_CASE: 'cas ',
                LANG_CONTROLS_SWITCH_COLON: ': ',
                LANG_CONTROLS_SWITCH_DEFAULT: 'en un altre cas',
                LANG_CONTROLS_SWITCH_DO: 'fes',
                //math blocks :
                LANG_CATEGORY_MATH: 'Matemàtiques',
                LANG_MATH_ADVANCED_MAP_MAP: 'Mapeja ',
                LANG_MATH_ADVANCED_MAP_FROM: 'De [',
                LANG_MATH_ADVANCED_MAP_HYPHEN: '-',
                LANG_MATH_ADVANCED_MAP_BRACKET: ']',
                LANG_MATH_ADVANCED_MAP_TO: 'a [',
                LANG_MATH_ADVANCED_MAP_TOOLTIP: 'Mapeja l\'entrada des d\'un rang de valors inicials a un altre rang diferent.',
                LANG_MATH_NUMBER_TOOLTIP: 'Nombre enter',
                LANG_MATH_ARRAY_ARRAY3: '[3]',
                LANG_MATH_ARRAY_BRACKET3: '{',
                LANG_MATH_ARRAY_BRACKET4: '}',
                LANG_MATH_ARRAY_COMMA: ',',
                LANG_MATH_ARRAY_TOOLTIP: 'Vector de tres enters',
                LANG_ARRAY_GET_BRACKET1: '[',
                LANG_ARRAY_GET_BRACKET2: ']',
                LANG_ARRAY_GET_TOOLTIP: 'Retorna el valor d\'un element concret del vector.',
                LANG_MATH_MODULO_TOOLTIP: 'Retorna la resta de la divisió de les dues entrades.',
                LANG_MATH_BASE_MAP: 'Mapeja ',
                LANG_MATH_BASE_MAP_VALUE_TO: 'Valor entre [0-',
                LANG_MATH_BASE_MAP_BRACKET: ']',
                LANG_MATH_BASE_MAP_TOOLTIP: 'Mapeja l\'entrada des del rang [0-1023] a un altre rang de valors.',
                LANG_MATH_SINGLE_OP_ROOT: 'arrel quadrada',
                LANG_MATH_SINGLE_OP_ABSOLUTE: 'valor absolut',
                LANG_MATH_SINGLE_TOOLTIP_ROOT: 'Retorna l\'arrel quadrada d\'un nombre.',
                LANG_MATH_SINGLE_TOOLTIP_ABS: 'Retorna el valor absolut d\'un nombre.',
                LANG_MATH_SINGLE_TOOLTIP_NEG: 'Retorna el nombre canviat de signe.',
                LANG_MATH_SINGLE_TOOLTIP_LN: 'Retorna el logaritme neperià d\'un nombre.',
                LANG_MATH_SINGLE_TOOLTIP_LOG10: 'Retorna el logaritme en base 10 d\'un nombre.',
                LANG_MATH_SINGLE_TOOLTIP_EXP: 'Retorna el exponencial d\'un nombre.',
                LANG_MATH_SINGLE_TOOLTIP_POW10: 'Retorna 10 elevat a una potència.',
                LANG_MATH_MIN: 'Minimum value between', //To translate
                LANG_MATH_MIN_PARAM2: 'and', //To translate
                LANG_MATH_MIN_TOOLTIP: 'Returns the minimum value of the inputs.', //To translate
                LANG_MATH_MAX: 'Maximum value between', //To translate
                LANG_MATH_MAX_PARAM2: 'and', //To translate
                LANG_MATH_MAX_TOOLTIP: 'Returns the maximum value of the inputs.', //To translate
                LANG_MATH_POW: 'Value of', //To translate
                LANG_MATH_POW_PARAM2: 'to the power of', //To translate
                LANG_MATH_POW_TOOLTIP: 'Returns the value of the first input to the power of the second.', //To translate
                //text blocks:
                LANG_CATEGORY_TEXT: 'Text',
                LANG_TEXT_TEXT_HELPURL: '',
                LANG_TEXT_TEXT_TOOLTIP: 'Una lletra, una paraula o una línia de text.',
                LANG_TEXT_CHAR_TOOLTIP: 'A simbol, letter or number, but just one character', //to translate
                LANG_TEXT_JOIN_HELPURL: '',
                LANG_TEXT_JOIN_Field_CREATEWITH: 'crea text amb',
                LANG_TEXT_JOIN_TOOLTIP: 'Crea text ajuntant qualsevol nombre d\'elements.',
                LANG_TEXT_CREATE_JOIN_Field_JOIN: 'uneix',
                LANG_TEXT_CREATE_JOIN_TOOLTIP: 'Afegeix, elimina o reordena seccions per reconfigurar aquest bloc de text.',
                LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM: 'element',
                LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP: 'Afegeix un element al text.',
                LANG_TEXT_CREATE_JOIN_TITLE_JOIN: 'uneix',
                LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM: 'element',
                LANG_TEXT_APPEND_HELPURL: '',
                LANG_TEXT_APPEND_TO: 'a',
                LANG_TEXT_APPEND_APPENDTEXT: 'afegeix-hi text',
                LANG_TEXT_APPEND_VARIABLE: 'element',
                LANG_TEXT_APPEND_TOOLTIP: 'Afegeix text a la variable %1.',
                LANG_TEXT_LENGTH_HELPURL: '',
                LANG_TEXT_LENGTH_INPUT_LENGTH: 'longitud',
                LANG_TEXT_LENGTH_TOOLTIP: 'Retorna el nombre de lletres (incloent-hi els espais) en el text introduït.',
                LANG_TEXT_EQUALSIGNORECASE_IS: '',
                LANG_TEXT_EQUALSIGNORECASE_EQUAL: ' =',
                LANG_TEXT_EQUALSIGNORECASE_QUESTION: '',
                LANG_TEXT_EQUALSIGNORECASE_TOOLTIP: 'Compara si els dos textos introduïts són iguals, independentment que tinguin lletres majúscules o minúscules.',
                LANG_TEXT_SUBSTRING: 'Retalla ',
                LANG_TEXT_SUBSTRING_FROM: 'des de',
                LANG_TEXT_SUBSTRING_TO: 'fins',
                LANG_TEXT_SUBSTRING_TOOLTIP: 'Retalla els caràcters del text introduït que es trobin entre els dos índexs i crea amb ells un nou text.',
                LANG_TEXT_CHARAT: 'Character of text', //To translate
                LANG_TEXT_CHARAT_POSITION: 'in position', //To translate
                LANG_TEXT_CHARAT_TOOLTIP: 'Returns character in the position of the text (beginning with 0).', //To translate
                LANG_TEXT_SPECIAL: 'Caràcters especials',
                LANG_TEXT_SPECIAL_TAB: 'Tabulador',
                LANG_TEXT_SPECIAL_CARRIAGE_RETURN: 'Retorn de carro',
                LANG_TEXT_SPECIAL_LINE_FEED: 'Salt de línia',
                LANG_TEXT_SPECIAL_TOOLTIP: 'Escriu caràcters especials.',
                LANG_TEXT_COMMENT: 'Comment', //to translate
                LANG_TEXT_COMMENT_TOOLTIP: 'Inserts a comment of one line in the program.', //to translate
                //advanced blocks :
                LANG_CATEGORY_ADVANCED: 'Funcions PIN',
                LANG_ADVANCED_CONVERSION_CONVERT: 'Converteix',
                LANG_ADVANCED_CONVERSION_DECIMAL: 'Decimal',
                LANG_ADVANCED_CONVERSION_HEXADECIMAL: 'Hexadecimal',
                LANG_ADVANCED_CONVERSION_OCTAL: 'Octal',
                LANG_ADVANCED_CONVERSION_BINARY: 'Binari',
                LANG_ADVANCED_CONVERSION_VALUE: 'valor',
                LANG_ADVANCED_CONVERSION_TOOLTIP: 'Converteix la base d\'un nombre.',
                LANG_ADVANCED_INOUT_ANALOG_READ: 'Llegeix el pin analògic PIN#',
                LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP: 'Llegeix el valor d\'un pin analògic específic.',
                LANG_ADVANCED_INOUT_ANALOG_WRITE: 'Escriu en el pin analògic PIN#',
                LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE: 'valor',
                LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP: 'Escriu un valor entre 0 i 255 en un PIN analògic específic.',
                LANG_ADVANCED_BUILTIN_LED: 'LED A LA PLACA',
                LANG_ADVANCED_BUILTIN_LED_STATE: 'estat',
                LANG_ADVANCED_BUILTIN_LED_ON: 'ENCÈS',
                LANG_ADVANCED_BUILTIN_LED_OFF: 'APAGAT',
                LANG_ADVANCED_BUILTIN_LED_TOOLTIP: 'LED integrat a la placa que està internament connectat al PIN 13.',
                LANG_ADVANCED_INOUT_DIGITAL_READ: 'Llegeix el pin digital PIN#',
                LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP: 'Llegeix el valor des d\'un pin digital específic.',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_GET_VAR: 'el valor',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE: 'Escriu en el pin digital',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN: 'PIN#',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE: 'estat',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH: 'ALT',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW: 'BAIX',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP: 'Escriu un valor al pin digital específic.',
                LANG_ADVANCED_INOUT_PULSEIN: 'Time for digital pin PIN#', //to translate
                LANG_ADVANCED_INOUT_PULSEIN_MODE: 'to change to', //to translate
                LANG_ADVANCED_INOUT_PULSEIN_TOOLTIP: 'Returns the time for a digital pin to change to the state specified (in milliseconds).', //to translate
                LANG_ADVANCED_HIGHLOW_HIGH: 'ALT',
                LANG_ADVANCED_HIGHLOW_LOW: 'BAIX',
                LANG_ADVANCED_HIGHLOW_TOOLTIP: 'Escriu "ALT" o "BAIX" en funció del seleccionat.',
                LANG_ADVANCED_MATH_RANDOM: 'Aleatori entre',
                LANG_ADVANCED_MATH_RANDOM_AND: ' I ',
                LANG_ADVANCED_MATH_RANDOM_TOOLTIP: 'Crea un nombre aleatori entre els dos límits introduïts.',
                LANG_ADVANCED_MATH_RANDOM_SEED: 'Set random seed to', //to translate
                LANG_ADVANCED_MATH_RANDOM_SEED_TOOLTIP: 'Sets seed for random number generator. For a random seed, read from an unconnected analog pin; to repeat the same sequence, use a fixed number.', //to translate
                //procedures blocks
                LANG_CATEGORY_PROCEDURES: 'Funcions',
                LANG_PROCEDURES_RETURN: 'retorna',
                LANG_PROCEDURES_RETURN_TOOLTIP: 'Retorna un valor',
                LANG_PROCEDURES_CALL_WITHOUT_DEFINITION: 'Crida a una funció sense definició prèvia.',
                LANG_PROCEDURES_DEFNORETURN_HELPURL: '',
                LANG_PROCEDURES_DEFNORETURN_PROCEDURE: 'func_sense_retorn',
                LANG_PROCEDURES_DEFNORETURN_DO: 'fes',
                LANG_PROCEDURES_DEFNORETURN_TOOLTIP: 'Funció que s\'executarà sense retornar res.',
                LANG_PROCEDURES_DEFRETURN_HELPURL: '',
                LANG_PROCEDURES_DEFRETURN_PROCEDURE: 'func_amb_retorn',
                LANG_PROCEDURES_DEFRETURN_DO: 'fes',
                LANG_PROCEDURES_DEFRETURN_RETURN: 'retorna',
                LANG_PROCEDURES_DEFRETURN_TOOLTIP: 'Funció amb valor de retorn.',
                LANG_PROCEDURES_DEF_DUPLICATE_WARNING: 'Atenció: Aquesta funció té paràmetres duplicats.',
                LANG_PROCEDURES_CALLNORETURN_HELPURL: '',
                LANG_PROCEDURES_CALLNORETURN_CALL: 'fes',
                LANG_PROCEDURES_CALLNORETURN_PROCEDURE: 'func_sense_retorn',
                LANG_PROCEDURES_CALLNORETURN_TOOLTIP: 'Fa aquesta funció.',
                LANG_PROCEDURES_CALLRETURN_HELPURL: '',
                LANG_PROCEDURES_CALLRETURN_CALL: 'fes',
                LANG_PROCEDURES_CALLRETURN_PROCEDURE: 'func_amb_retorn',
                LANG_PROCEDURES_CALLRETURN_TOOLTIP: 'Executa aquesta funció que té valor de retorn.',
                LANG_PROCEDURES_MUTATORCONTAINER_Field: 'paràmetres',
                LANG_PROCEDURES_MUTATORARG_Field: 'variable:',
                LANG_PROCEDURES_HIGHLIGHT_DEF: 'Subratlla la funció',
                LANG_PROCEDURES_IFRETURN_TOOLTIP: 'Si la condició es compleix, la funció retornarà aquest valor.',
                LANG_PROCEDURES_IFRETURN_WARNING: 'Atenció: Aquest bloc només es pot utilitzar dins d\'una funció que tingui valor de retorn.',
                //variables blocks :
                LANG_CATEGORY_VARIABLES: 'Variables',
                LANG_VARIABLES_CALL_WITHOUT_DEFINITION: 'Aquesta variable no està declarada.',
                LANG_VARIABLES_GLOBAL: 'Variable',
                LANG_VARIABLES_GLOBAL_TYPE: 'de tipus',
                LANG_VARIABLES_GLOBAL_EQUALS: '=',
                LANG_VARIABLES_GLOBAL_TOOLTIP: 'Declara i defineix una variable GLOBAL de tipus enter (int) o text (String).',
                LANG_VARIABLES_LOCAL: 'Variable LOCAL',
                LANG_VARIABLES_LOCAL_TYPE: 'de tipus ',
                LANG_VARIABLES_LOCAL_EQUALS: '=',
                LANG_VARIABLES_LOCAL_TOOLTIP: 'Declara i defineix una variable LOCAL de tipus enter (int) o text (String).',
                LANG_VARIABLES_DEFINE: 'Defineix variable ',
                LANG_VARIABLES_DEFINE_AS: 'com',
                LANG_VARIABLES_DEFINE_TOOLTIP: 'Defineix el valor d\'una variable.',
                LANG_VARIABLES_SET: 'Var ',
                LANG_VARIABLES_SET_AS: '=',
                LANG_VARIABLES_SET_TOOLTIP: 'Canvia el valor d\'una variable.',
                LANG_VARIABLES_GET: 'Var ',
                LANG_VARIABLES_GET_TOOLTIP: 'Retorna el valor d\'una variable',
                LANG_VARIABLES_PIN_ANALOG: 'Pin analògic',
                LANG_VARIABLES_PIN_DIGITAL: 'Pin digital',
                LANG_VARIABLES_PIN_DIGITAL0: 'WARNING: el pin digital 0 (pin RX) s\'utilitza quan es carrega un programa. Si s\'utilitza per connectar components electrònics pot causar problemes quan es carregui un nou programa.',
                LANG_VARIABLES_PIN_TOOLTIP: 'Selecciona el PIN desitjat.',
                LANG_VARIABLES_TYPE_BYTE: 'Byte',
                LANG_VARIABLES_TYPE_FLOAT: 'Coma flotant',
                LANG_VARIABLES_TYPE_INTEGER: 'Enter',
                LANG_VARIABLES_TYPE_INTEGER_LONG: 'Enter llarg',
                LANG_VARIABLES_TYPE_INTEGER_ULONG: 'Unsigned Long Integer', //To translate
                LANG_VARIABLES_TYPE_STRING: 'Cadena',
                LANG_VARIABLES_TYPE_CHAR: 'Character', //to translate
                LANG_VARIABLES_TYPE_BOOLEAN: 'Boolean', //to translate
                LANG_VARIABLES_VOLATILE_GLOBAL: 'Declara una variable GLOBAL VOLÀTIL ',
                LANG_VARIABLES_VOLATILE_GLOBAL_TYPE: 'del tipus ',
                LANG_VARIABLES_VOLATILE_GLOBAL_EQUALS: 'igual ',
                LANG_VARIABLES_VOLATILE_GLOBAL_TOOLTIP: 'Declara i defineix una variable GLOBAL VOLÀTIL de tipus enter o cadena utilitzada en una funció ISR.', // To translate
                //sound blocks (zum):
                LANG_CATEGORY_ZUM: 'Sons',
                LANG_ZUM_PIEZO_BUZZER: 'Brunzidor',
                LANG_ZUM_PIEZO_BUZZER_PIN: 'PIN#',
                LANG_ZUM_PIEZO_BUZZER_TONE: 'TO',
                LANG_ZUM_PIEZO_BUZZER_DO: 'DO',
                LANG_ZUM_PIEZO_BUZZER_RE: 'RE',
                LANG_ZUM_PIEZO_BUZZER_MI: 'MI',
                LANG_ZUM_PIEZO_BUZZER_FA: 'FA',
                LANG_ZUM_PIEZO_BUZZER_SOL: 'SOL',
                LANG_ZUM_PIEZO_BUZZER_LA: 'LA',
                LANG_ZUM_PIEZO_BUZZER_SI: 'SI',
                LANG_ZUM_PIEZO_BUZZER_DURATION: 'Durada',
                LANG_ZUM_PIEZO_BUZZER_TOOLTIP: 'Brunzidor piezoelèctric',
                LANG_ZUM_PIEZO_BUZZERAV: 'Brunzidor avançat',
                LANG_ZUM_PIEZO_BUZZERAV_PIN: 'PIN#',
                LANG_ZUM_PIEZO_BUZZERAV_TONE: 'TO',
                LANG_ZUM_PIEZO_BUZZERAV_DURATION: 'Durada',
                LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP: 'Brunzidor piezoelèctric avançat.',
                LANG_ZUM_DHT11_VALUE: 'Get', //to translate
                LANG_ZUM_DHT11_VALUE1: 'Temperature', //to translate
                LANG_ZUM_DHT11_VALUE2: 'Humidity', //to translate
                LANG_ZUM_DHT11_PIN: 'PIN', //to translate
                LANG_ZUM_DHT11_TOOLTIP: 'Get temperature or humidity from a DHT11, DHT21 or DHT22 sensor.', //to translate
                //motor blocks (servo and stepper):
                LANG_CATEGORY_MOTOR: 'Motors', //to translate
                LANG_MOTOR_SERVO_CONT: 'Servo de rotació contínua',
                LANG_MOTOR_SERVO_CONT_PIN: 'PIN#',
                LANG_MOTOR_SERVO_CONT_ROT: 'ROT',
                LANG_MOTOR_SERVO_CONT_TURN_CLOCKWISE: 'GIRA EN SENTIT HORARI',
                LANG_MOTOR_SERVO_CONT_TURN_COUNTERCLOCKWISE: 'GIRA EN SENTIT ANTIHORARI',
                LANG_MOTOR_SERVO_CONT_STOPPED: 'ATURA',
                LANG_MOTOR_SERVO_CONT_DELAY: 'Pausa [ms]',
                LANG_MOTOR_SERVO_CONT_TOOLTIP: 'Servo de rotació contínua.',
                LANG_MOTOR_SERVO_MOVE: 'Servo',
                LANG_MOTOR_SERVO_MOVE_PIN: 'PIN#',
                LANG_MOTOR_SERVO_MOVE_DEGREES: 'Graus (0~180)',
                LANG_MOTOR_SERVO_MOVE_DELAY: 'Pausa [ms]',
                LANG_MOTOR_SERVO_MOVE_TOOLTIP: 'Mou el servo entre 0 i 180 graus.',
                LANG_MOTOR_SERVO_WARNING: 'No es possible establir el pin del servo utilitzant una variable',
                LANG_MOTOR_STEPPER_MOVE: 'Stepper motor', //to translate
                LANG_MOTOR_STEPPER_MOVE_SPR: 'Steps per revolution', //to translate
                LANG_MOTOR_STEPPER_MOVE_PINS: '4 pins?', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN1: 'Pin 1', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN2: 'Pin 2', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN3: 'Pin 3', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN4: 'Pin 4', //to translate
                LANG_MOTOR_STEPPER_MOVE_SETSPEED: 'Set speed to', //to translate
                LANG_MOTOR_STEPPER_MOVE_SETSPEED_NEXT: '(rpm)', //to translate
                LANG_MOTOR_STEPPER_MOVE_STEP: 'Move motor', //to translate
                LANG_MOTOR_STEPPER_MOVE_STEP_NEXT: '(steps)', //to translate
                LANG_MOTOR_STEPPER_MOVE_TOOLTIP: 'Moves motor the number of steps. A positive steps value move in one direction, a negative value moves to the other direction.', //to translate
                LANG_MOTOR_PCA9685_DEF: 'PCA9685', //to translate
                LANG_MOTOR_PCA9685_DEF_SERVO: 'Servo', //to translate
                LANG_MOTOR_PCA9685_DEF_ADDRESS: 'Address of the component', //to translate
                LANG_MOTOR_PCA9685_DEF_TOOLTIP: 'Defines a PCA9685 connected to Arduino over I2C.', //to translate
                LANG_MOTOR_PCA9685_SET_PWM: 'PCA9685 Move servo', //to translate
                LANG_MOTOR_PCA9685_SET_PWM_ANGLE: 'angle', //to translate
                LANG_MOTOR_PCA9685_SET_PWM_TOOLTIP: 'Moves servo connected to PCA9685 the specified angle in degrees.', //to translate
                //interrupt blocks :
                LANG_CATEGORY_INTERRUPTS: 'Interrupcions',
                LANG_INTERRUPTS_STATE: 'Estableix l\'estat de les interrupcions a ',
                LANG_INTERRUPTS_STATE_ENABLED: 'ACTIVADES',
                LANG_INTERRUPTS_STATE_DISABLED: 'DESACTIVADES',
                LANG_INTERRUPTS_STATE_TOOLTIP: 'Activa o desactivar les interrupcions. Algunes funcions no funcionaran mentre les interrupcions estiguin desactivades. Utilitza-ho només per seccions del codi particularment crítiques.',
                LANG_INTERRUPTS_ATTACH: 'Associa la funció ',
                LANG_INTERRUPTS_ATTACH_PARAM2: 'en el mode ',
                LANG_INTERRUPTS_ATTACH_PARAM3: 'amb interrupció del pin digital',
                LANG_INTERRUPTS_ATTACH_LOW: 'BAIX',
                LANG_INTERRUPTS_ATTACH_CHANGE: 'CANVI',
                LANG_INTERRUPTS_ATTACH_RISING: 'PUJANT',
                LANG_INTERRUPTS_ATTACH_FALLING: 'BAIXANT',
                LANG_INTERRUPTS_ATTACH_PROCEDURE: 'func_sense_retorn',
                LANG_INTERRUPTS_ATTACH_TOOLTIP: 'Estableix la funció que s\'executarà quan es produeix la interrupció en el pin especificat.',
                LANG_INTERRUPTS_DETACH: 'Desassocia la interrupció al pin digital',
                LANG_INTERRUPTS_DETACH_TOOLTIP: 'Desactiva la interrupció en el pin. Quan s\'activa el pin, la funció associada no s\'executarà més.',
                LANG_WIFI_CONNECT: 'Wifi:', //To translate
                LANG_WIFI_CONNECT_STATION: 'connect', //To translate
                LANG_WIFI_CONNECT_SOFTAP: 'create network', //To translate
                LANG_WIFI_CONNECT_SSID: 'SSID', //To translate
                LANG_WIFI_CONNECT_PASSWORD: 'password', //To translate
                LANG_WIFI_CONNECT_CHANNEL: 'channel', //To translate
                LANG_WIFI_CONNECT_RX_PIN: 'Rx pin', //To translate
                LANG_WIFI_CONNECT_TX_PIN: 'Tx pin', //To translate
                LANG_WIFI_CONNECT_BAUD: 'baud rate', //To translate
                LANG_WIFI_CONNECT_TOOLTIP: 'Connects or creates a wifi using a ESP8266 adapter, and returns true on success.', //To translate
                LANG_WIFI_DISCONNECT: 'Wifi:disconnect', //To translate
                LANG_WIFI_DISCONNECT_TOOLTIP: 'Disconnects from the current wifi network.', //To translate
                LANG_WIFI_CLIENT: 'Wifi:connect to server', //To translate
                LANG_WIFI_CLIENT_IP: 'IP address', //To translate
                LANG_WIFI_CLIENT_PORT: 'Port', //To translate
                LANG_WIFI_CLIENT_TOOLTIP: 'Connects to a TCP server.', //To translate
                LANG_WIFI_SERVER: 'Wifi:start server', //To translate
                LANG_WIFI_SERVER_PORT: 'Port', //To translate
                LANG_WIFI_SERVER_TOOLTIP: 'Create a TCP server to accept connections from clients.', //To translate
                LANG_WIFI_GETIP: 'Wifi:get IP address', //To translate
                LANG_WIFI_GETIP_TOOLTIP: 'Returns IP address of the adapter.', //To translate
                LANG_WIFI_SEND_SERVER: 'Wifi:send to server', //To translate
                LANG_WIFI_SEND_SERVER_DATA: 'Text', //To translate
                LANG_WIFI_SEND_SERVER_TOOLTIP: 'Send text to the TCP server.', //To translate
                LANG_WIFI_SEND_CLIENT: 'Wifi:send to client', //To translate
                LANG_WIFI_SEND_CLIENT_ID: 'ID', //To translate
                LANG_WIFI_SEND_CLIENT_DATA: 'Data', //To translate
                LANG_WIFI_SEND_CLIENT_TOOLTIP: 'Send text to specified client (ID).', //To translate
                LANG_WIFI_RECEIVE_CLIENT: 'Wifi:receive from client', //To translate
                LANG_WIFI_RECEIVE_CLIENT_TOOLTIP: 'Receives a text from client, begining with id number and a colon (:). If timeout is reached, returns an empty string.', //To translate
                LANG_WIFI_RECEIVE_SERVER: 'Wifi:receive from server', //To translate
                LANG_WIFI_RECEIVE_SERVER_TIMEOUT: 'Timeout', //To translate
                LANG_WIFI_RECEIVE_SERVER_TOOLTIP: 'Receives a string from TCP server or empty string if timeout reached.', //To translate
                LANG_WIFI_CLOSE_SERVER: 'Wifi:stop server', //To translate
                LANG_WIFI_CLOSE_SERVER_TOOLTIP: 'Shutdown TCP server.', //To translate
                LANG_WIFI_CLOSE_CLIENT: 'Wifi:stop connection', //To translate
                LANG_WIFI_CLOSE_CLIENT_TOOLTIP: 'Shutdown connection with TCP server.' //To translate
            };
            // Node
            if (typeof module !== 'undefined' && module.exports) {
                module.exports = language;
            }
            // Browser
            // if (typeof window !== 'undefined' && this.RoboBlocks && this.RoboBlocks.locales.add) {
            //     this.RoboBlocks.locales.add('es', language);
            if (typeof window !== 'undefined' && RoboBlocks && RoboBlocks.locales.add) {
                RoboBlocks.locales.add('ca-ES', language);
            }
        }());

        // Source: lang/en-GB.js
        (function() {
            var language = {
                //random :
                BLOCKLY_MSG_DUPLICATE_BLOCK: 'Duplicate',
                BLOCKLY_MSG_REMOVE_COMMENT: 'Remove Comment',
                BLOCKLY_MSG_ADD_COMMENT: 'Add Comment',
                BLOCKLY_MSG_EXTERNAL_INPUTS: 'External Inputs',
                BLOCKLY_MSG_INLINE_INPUTS: 'Inline Inputs',
                BLOCKLY_MSG_DELETE_BLOCK: 'Delete Block',
                BLOCKLY_MSG_DELETE_X_BLOCKS: 'Delete %1 Blocks',
                BLOCKLY_MSG_COLLAPSE_BLOCK: 'Collapse Block',
                BLOCKLY_MSG_EXPAND_BLOCK: 'Expand Block',
                BLOCKLY_MSG_DISABLE_BLOCK: 'Disable Block',
                BLOCKLY_MSG_ENABLE_BLOCK: 'Enable Block',
                BLOCKLY_MSG_HELP: 'Help',
                BLOCKLY_MSG_COLLAPSE_ALL: 'Collapse Blocks',
                BLOCKLY_MSG_EXPAND_ALL: 'Expand Blocks',
                LANG_VARIABLES_SET_ITEM: 'item',
                LANG_RESERVED_WORDS: 'Reserved word: this name is not allowed.',
                LANG_CHAR_LENGTH: 'A character must have length 0 or 1.',
                //logic blocks:
                LANG_CATEGORY_LOGIC: 'Logic',
                LANG_LOGIC_OPERATION_AND: 'and',
                LANG_LOGIC_OPERATION_OR: 'or',
                LANG_LOGIC_COMPARE_TOOLTIP_EQ: 'Checks if both inputs are equal .',
                LANG_LOGIC_COMPARE_TOOLTIP_NEQ: 'Checks if both inputs are different.',
                LANG_LOGIC_COMPARE_TOOLTIP_LT: 'Checks if the first input is smaller than the second one.',
                LANG_LOGIC_COMPARE_TOOLTIP_LTE: 'Checks if the first input is smaller than or equal to the second one.',
                LANG_LOGIC_COMPARE_TOOLTIP_GT: 'Checks if the first input is greater than the second one.',
                LANG_LOGIC_COMPARE_TOOLTIP_GTE: 'Checks if the first input is greater than or equal to the second one.',
                LANG_LOGIC_OPERATION_TOOLTIP_AND: 'Checks if both inputs are true.',
                LANG_LOGIC_OPERATION_TOOLTIP_OR: 'Checks if either inputs are true.',
                LANG_LOGIC_NEGATE_INPUT_NOT: 'not',
                LANG_LOGIC_NEGATE_TOOLTIP: 'Returns the opposite of the input.',
                LANG_LOGIC_NEGATE_HELPURL: '',
                LANG_LOGIC_BOOLEAN_TRUE: 'true',
                LANG_LOGIC_BOOLEAN_FALSE: 'false',
                LANG_LOGIC_BOOLEAN_TOOLTIP: 'Returns either true or false.',
                //communication blocks:
                LANG_CATEGORY_COMMUNICATION: 'Communication',
                LANG_BQ_BLUETOOTH_RECEIVE: 'Bluetooth receive data',
                LANG_BQ_BLUETOOTH_RECEIVE_BLUETOOTH: 'Bluetooth',
                LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP: 'Returns the data received by the Bluetooth module',
                LANG_BQ_BLUETOOTH_SEND: 'Bluetooth send data',
                LANG_BQ_BLUETOOTH_SEND_SEND: 'Send',
                LANG_BQ_BLUETOOTH_SEND_TOOLTIP: 'Sends the input data using the Bluetooth module',
                LANG_BQ_BLUETOOTH_DEF: 'Bluetooth definition',
                LANG_BQ_BLUETOOTH_DEF_BAUD_RATE: 'Baud rate',
                LANG_BQ_BLUETOOTH_DEF_PIN1: 'RX',
                LANG_BQ_BLUETOOTH_DEF_PIN2: 'TX',
                LANG_BQ_BLUETOOTH_DEF_NAME: 'Name',
                LANG_BQ_BLUETOOTH_DEF_PINCODE: 'PinCode',
                LANG_BQ_BLUETOOTH_DEF_RECEIVE: 'Receive',
                LANG_BQ_BLUETOOTH_DEF_SEND: 'Send',
                LANG_BQ_BLUETOOTH_DEF_TOOLTIP: 'Bluetooth module definition',
                LANG_ADVANCED_BT_SERIAL_AVAILABLE: 'Bluetooth Serial Available',
                LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP: 'Check wether the bluetooth is available or not.',
                LANG_ADVANCED_SERIAL_AVAILABLE: 'Serial Available',
                LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP: 'Check wether the serial port is available or not',
                LANG_ADVANCED_SERIAL_PARSEINT: 'Serial Read Integer',
                LANG_ADVANCED_SERIAL_PARSEINT_TOOLTIP: 'First valid (long) integer number from the serial buffer',
                LANG_ADVANCED_SERIAL_PRINT: 'Send data to serial port',
                LANG_ADVANCED_SERIAL_PRINT_TOOLTIP: 'Send data to serial port as ASCII text.',
                LANG_ADVANCED_SERIAL_PRINTLN: 'Send data with carriage return',
                LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP: 'Send data to serial port as ASCII text and adds a Carriage Return (CR).',
                LANG_ADVANCED_SERIAL_PRINT_FORMAT: 'Send value with format',
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_1: 'Binary',
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_2: 'Octal',
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_3: 'Decimal',
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_4: 'Hexadecimal',
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_5: 'Without decimals',
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_6: 'One decimal',
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_7: 'Two decimals',
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_8: 'Three decimals',
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_9: 'Four decimals',
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_TOOLTIP: 'Send a number to serial port with specified format',
                LANG_ADVANCED_SERIAL_PRINTLN_FORMAT: 'Send value with format and CR',
                LANG_ADVANCED_SERIAL_PRINTLN_FORMAT_TOOLTIP: 'Send a number to serial port with specified format and carriage return (CR).',
                LANG_ADVANCED_SERIAL_READ: 'Serial Read',
                LANG_ADVANCED_SERIAL_READ_TOOLTIP: 'Reads incoming serial data from serial port as bytes.',
                LANG_ADVANCED_SERIAL_READSTRING: 'Serial Read String',
                LANG_ADVANCED_SERIAL_READSTRING_TOOLTIP: 'Reads incoming serial data from serial port as ASCII text.',
                //Sensor blocks:
                LANG_CATEGORY_SENSOR: 'Sensors',
                LANG_BQ_BAT: 'BAT - Ultrasonic Sensor',
                LANG_BQ_BAT_RED_PIN: 'ECHO PIN#',
                LANG_BQ_BAT_BLUE_PIN: 'TRIGGER PIN#',
                LANG_BQ_BAT_TOOLTIP: 'Returns the distance measured by the ultrasonic sensor.',
                LANG_IR_READ: 'Reads from infrared receiver',
                LANG_IR_READ_PIN: 'connected to PIN#',
                LANG_IR_READ_TOOLTIP: 'Reads the value received from the infrared receiver',
                //LCD blocks:
                LANG_CATEGORY_LCD: 'LCD bloqs',
                LANG_LCD_DEF: 'LCD (2x16)',
                LANG_LCD_DEF_CONNECTION: 'Connection type',
                LANG_LCD_DEF_CONNECTION_PARALLEL: 'Parallel (6 pins)',
                LANG_LCD_DEF_CONNECTION_I2C: 'I2C (4 wires)',
                LANG_LCD_DEF_ADDRESS: 'Address of the component',
                LANG_LCD_DEF_PIN_1: 'RS Pin',
                LANG_LCD_DEF_PIN_2: 'Enable Pin',
                LANG_LCD_DEF_PIN_3: 'Data4 Pin',
                LANG_LCD_DEF_PIN_4: 'Data5 Pin',
                LANG_LCD_DEF_PIN_5: 'Data6 Pin',
                LANG_LCD_DEF_PIN_6: 'Data7 Pin',
                LANG_LCD_DEF_TOOLTIP: 'Block that defines the LCD',
                LANG_LCD_ADVANCED_DEF: 'Advanced LCD',
                LANG_LCD_ADVANCED_ROWS: 'Rows',
                LANG_LCD_ADVANCED_COLUMNS: 'Columns',
                LANG_LCD_DEF_ADVANCED_TOOLTIP: 'Block that defines the advanced LCD',
                LANG_LCD_SETBACKLIGHT: 'LCD: setBacklight(',
                LANG_LCD_SETBACKLIGHT_CLOSE: ')',
                LANG_LCD_SETBACKLIGHT_TOOLTIP: 'Sets the backlight of the LCD screen.',
                LANG_LCD_PRINT: 'LCD: print ',
                LANG_LCD_PRINT_POSITION: 'Set text position?',
                LANG_LCD_PRINT_TOOLTIP: 'Prints a String in the LCD at the specified position or the next available one.',
                LANG_LCD_CLEAR: 'LCD clear',
                LANG_LCD_CLEAR_TOOLTIP: 'LCD clear',
                LANG_LCD_HOME: 'LCD Go home',
                LANG_LCD_HOME_TOOLTIP: 'LCD: Positions the cursor in the upper-left corner of the screen',
                LANG_LCD_DISPLAY: 'LCD Show content',
                LANG_LCD_DISPLAY_TOOLTIP: 'LCD: Turns on the LCD display and restore the text that was on the display',
                LANG_LCD_NODISPLAY: 'LCD Hide content',
                LANG_LCD_NODISPLAY_TOOLTIP: 'LCD: Turns off the LCD display, without losing the text currently shown on it',
                LANG_LCD_SCROLLDISPLAYLEFT: 'LCD Scrolls to the left',
                LANG_LCD_SCROLLDISPLAYLEFT_TOOLTIP: 'LCD: Scrolls the contents of the display one space to the left',
                LANG_LCD_SCROLLDISPLAYRIGHT: 'LCD Scrolls to the right',
                LANG_LCD_SCROLLDISPLAYRIGHT_TOOLTIP: 'LCD: Scrolls the contents of the display one space to the right',
                //controls blocks :
                LANG_CATEGORY_CONTROLS: 'Control',
                LANG_CONTROLS_BASE_DELAY_WAIT: 'Wait (ms)',
                LANG_CONTROLS_BASE_DELAY_TOOLTIP: 'Waits the specified time in milliseconds (ms)',
                LANG_CONTROLS_BASE_MILLIS: 'Time from start (ms)',
                LANG_CONTROLS_BASE_MILLIS_TOOLTIP: 'Number of milliseconds since the program started (long integer)',
                LANG_CONTROLS_BASE_DELAY_MICROSECONDS: 'Wait [us]',
                LANG_CONTROLS_BASE_DELAY_MICROSECONDS_TOOLTIP: 'Waits the specified time in microseconds (us)',
                LANG_CONTROLS_BASE_MICROS: 'Time from start (us)',
                LANG_CONTROLS_BASE_MICROS_TOOLTIP: 'Number of microseconds since the program started (long integer)',
                LANG_CONTROLS_DOWHILE_OPERATOR_DO: 'Do',
                LANG_CONTROLS_DOWHILE_OPERATOR_WHILE: 'while',
                LANG_CONTROLS_DOWHILE_TOOLTIP: 'While the condition is true, continue doing the statements.',
                LANG_CONTROLS_EXECUTE: 'Execute',
                LANG_CONTROLS_EXECUTE_TOOLTIP: 'Executes C/C++ code. Use with caution, as it can easily break the program and prevent it from compiling.',
                LANG_CONTROLS_IF_TOOLTIP_1: 'If the condition is true, execute the statements.',
                LANG_CONTROLS_IF_TOOLTIP_2: 'If the condition is true, then do the first block of statements. Otherwise, do the second block of statements.',
                LANG_CONTROLS_IF_TOOLTIP_3: 'If the first condition is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.',
                LANG_CONTROLS_IF_TOOLTIP_4: 'If the first condition is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.',
                LANG_CONTROLS_IF_MSG_IF: 'if',
                LANG_CONTROLS_IF_MSG_ELSEIF: 'else if',
                LANG_CONTROLS_IF_MSG_ELSE: 'else',
                LANG_CONTROLS_IF_MSG_THEN: 'do',
                LANG_CONTROLS_IF_IF_Field_IF: 'if',
                LANG_CONTROLS_IF_IF_TOOLTIP: 'Add, remove, or reorder sections to reconfigure this if block.',
                LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF: 'else if',
                LANG_CONTROLS_IF_ELSEIF_TOOLTIP: 'Add a condition to the if block.',
                LANG_CONTROLS_IF_ELSE_Field_ELSE: 'else',
                LANG_CONTROLS_IF_ELSE_TOOLTIP: 'Add a final, catch-all condition to the if block.',
                LANG_CONTROLS_FOR_FROM_WARNING: 'It is not possible to set a variable as the initial value of the for block.',
                LANG_CONTROLS_FOR_TO_WARNING: 'It is not possible to set a variable as the final value of the for block.',
                LANG_CONTROLS_FOR_INCREMENT_WARNING: 'It is not posiible to set a variable as the increment value of the for block',
                LANG_CONTROLS_FOR_INPUT_WITH: 'count with',
                LANG_CONTROLS_FOR_INPUT_VAR: 'x',
                LANG_CONTROLS_FOR_INPUT_FROM: 'from',
                LANG_CONTROLS_FOR_INPUT_TO: 'to',
                LANG_CONTROLS_FOR_INPUT_INCREMENT: 'increment',
                LANG_CONTROLS_FOR_INPUT_DO: 'do',
                LANG_CONTROLS_FOR_TOOLTIP: 'Count from a start number to an end number. Each time the count is incremented by one, the variable takes that value then do the statements.',
                LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE: 'while',
                LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL: 'until',
                LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE: 'While the condition is true, then do the statements.',
                LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL: 'While the condition is false, then do the statements.',
                LANG_CONTROLS_REPEAT_TITLE_REPEAT: 'Repeat',
                LANG_CONTROLS_REPEAT_TITLE_TIMES: 'times',
                LANG_CONTROLS_REPEAT_INPUT_DO: 'do',
                LANG_CONTROLS_REPEAT_TOOLTIP: 'Repeat the statements a certain number of times',
                LANG_CONTROLS_FLOW_STATEMENTS_HELPURL: '',
                LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP: 'of loop',
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: 'break out',
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: 'continue with next iteration',
                LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK: 'Break out of the containing loop.',
                LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE: 'Skip the rest of this loop, and continue with the next iteration.',
                LANG_CONTROLS_FLOW_STATEMENTS_WARNING: 'Warning: This block may only be used within a loop.',
                LANG_CONTROLS_SETUP_LOOP_SETUP_TITLE: 'Setup',
                LANG_CONTROLS_SETUP_LOOP_LOOP_TITLE: 'Loop',
                LANG_CONTROLS_SETUP_LOOP_TOOLTIP: 'Blocks in setup will be executed at start, and blocks in Loop will be repeated continously.',
                LANG_CONTROLS_SWITCH: 'switch ',
                LANG_CONTROLS_SWITCH_TOOLTIP_1: 'Execute the statement of the case .',
                LANG_CONTROLS_SWITCH_TOOLTIP_2: 'Use the switch statement to select one of many blocks of code to be executed.',
                LANG_CONTROLS_SWITCH_TOOLTIP_3: 'Use the switch statement to select one of many blocks of code to be executed.',
                LANG_CONTROLS_SWITCH_TOOLTIP_4: 'Use the switch statement to select one of many blocks of code to be executed.',
                LANG_CONTROLS_SWITCH_SWITCH_TOOLTIP: 'The switch expression is evaluated once',
                LANG_CONTROLS_SWITCH_CASE_TOOLTIP: 'case',
                LANG_CONTROLS_SWITCH_DEFAULT_TOOLTIP: 'The default keyword specifies the code to run if there is no case match',
                LANG_CONTROLS_SWITCH_IS: 'case: ',
                LANG_CONTROLS_SWITCH_CASE: 'case',
                LANG_CONTROLS_SWITCH_COLON: ': ',
                LANG_CONTROLS_SWITCH_DEFAULT: 'default',
                LANG_CONTROLS_SWITCH_DO: 'do',
                //math blocks :
                LANG_CATEGORY_MATH: 'Math',
                LANG_MATH_ADVANCED_MAP_MAP: 'Map ',
                LANG_MATH_ADVANCED_MAP_FROM: 'From [',
                LANG_MATH_ADVANCED_MAP_HYPHEN: '-',
                LANG_MATH_ADVANCED_MAP_BRACKET: ']',
                LANG_MATH_ADVANCED_MAP_TO: 'to [',
                LANG_MATH_ADVANCED_MAP_TOOLTIP: 'Re-map the input from a certain range to another.',
                LANG_MATH_NUMBER_TOOLTIP: 'Number',
                LANG_MATH_ARRAY_ARRAY3: '[3]',
                LANG_MATH_ARRAY_BRACKET3: '{',
                LANG_MATH_ARRAY_BRACKET4: '}',
                LANG_MATH_ARRAY_COMMA: ',',
                LANG_MATH_ARRAY_TOOLTIP: 'Array',
                LANG_ARRAY_GET_BRACKET1: '[',
                LANG_ARRAY_GET_BRACKET2: ']',
                LANG_ARRAY_GET_TOOLTIP: 'Returns the value of a certain element of the array.',
                LANG_MATH_MODULO_TOOLTIP: 'Returns the remainder of the division of the two input numbers.',
                LANG_MATH_BASE_MAP: 'Map ',
                LANG_MATH_BASE_MAP_VALUE_TO: 'Value to [0-',
                LANG_MATH_BASE_MAP_BRACKET: ']',
                LANG_MATH_BASE_MAP_TOOLTIP: 'Re-map the input from [0-1023] to another.',
                LANG_MATH_SINGLE_OP_ROOT: 'square root',
                LANG_MATH_SINGLE_OP_ABSOLUTE: 'absolute',
                LANG_MATH_SINGLE_TOOLTIP_ROOT: 'Returns the square root of a number.',
                LANG_MATH_SINGLE_TOOLTIP_ABS: 'Returns the absolute value of a number.',
                LANG_MATH_SINGLE_TOOLTIP_NEG: 'Returns the negation of a number.',
                LANG_MATH_SINGLE_TOOLTIP_LN: 'Returns the natural logarithm of a number.',
                LANG_MATH_SINGLE_TOOLTIP_LOG10: 'Returns the base 10 logarithm of a number.',
                LANG_MATH_SINGLE_TOOLTIP_EXP: 'Returns e to the power of a number.',
                LANG_MATH_SINGLE_TOOLTIP_POW10: 'Returns 10 to the power of a number.',
                LANG_MATH_MIN: 'Minimum value between',
                LANG_MATH_MIN_PARAM2: 'and',
                LANG_MATH_MIN_TOOLTIP: 'Returns the minimum value of the inputs.',
                LANG_MATH_MAX: 'Maximum value between',
                LANG_MATH_MAX_PARAM2: 'and',
                LANG_MATH_MAX_TOOLTIP: 'Returns the maximum value of the inputs.',
                LANG_MATH_POW: 'Value of',
                LANG_MATH_POW_PARAM2: 'to the power of',
                LANG_MATH_POW_TOOLTIP: 'Returns the value of the first input to the power of the second.',
                //text blocks:
                LANG_CATEGORY_TEXT: 'Text',
                LANG_TEXT_TEXT_HELPURL: '',
                LANG_TEXT_TEXT_TOOLTIP: 'A letter, word, or line of text.',
                LANG_TEXT_CHAR_TOOLTIP: 'A simbol, letter or number, but just one character',
                LANG_TEXT_JOIN_HELPURL: '',
                LANG_TEXT_JOIN_Field_CREATEWITH: 'create text with',
                LANG_TEXT_JOIN_TOOLTIP: 'Create a piece of text by joining together any number of items.',
                LANG_TEXT_CREATE_JOIN_Field_JOIN: 'join',
                LANG_TEXT_CREATE_JOIN_TOOLTIP: 'Add, remove, or reorder sections to reconfigure this text block.',
                LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM: 'item',
                LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP: 'Add an item to the text.',
                LANG_TEXT_CREATE_JOIN_TITLE_JOIN: 'join',
                LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM: 'element',
                LANG_TEXT_APPEND_HELPURL: '',
                LANG_TEXT_APPEND_TO: 'to',
                LANG_TEXT_APPEND_APPENDTEXT: 'append text',
                LANG_TEXT_APPEND_VARIABLE: 'item',
                LANG_TEXT_APPEND_TOOLTIP: 'Append some text to variable %1.',
                LANG_TEXT_LENGTH_HELPURL: '',
                LANG_TEXT_LENGTH_INPUT_LENGTH: 'length',
                LANG_TEXT_LENGTH_TOOLTIP: 'Returns number of letters (including spaces) in the provided text.',
                LANG_TEXT_EQUALSIGNORECASE_IS: '',
                LANG_TEXT_EQUALSIGNORECASE_EQUAL: ' =',
                LANG_TEXT_EQUALSIGNORECASE_QUESTION: '?',
                LANG_TEXT_EQUALSIGNORECASE_TOOLTIP: 'Checks if both input strings are equal, regardless of the case.',
                LANG_TEXT_SUBSTRING: 'Crop ',
                LANG_TEXT_SUBSTRING_FROM: 'from',
                LANG_TEXT_SUBSTRING_TO: 'to',
                LANG_TEXT_SUBSTRING_TOOLTIP: 'Obtain a substring from the input string with the caracters between the two input numbers.',
                LANG_TEXT_CHARAT: 'Character of text',
                LANG_TEXT_CHARAT_POSITION: 'in position',
                LANG_TEXT_CHARAT_TOOLTIP: 'Returns character in the position of the text (beginning with 0).',
                LANG_TEXT_SPECIAL: 'Special Chars',
                LANG_TEXT_SPECIAL_TAB: 'Tab',
                LANG_TEXT_SPECIAL_CARRIAGE_RETURN: 'Carriage Return',
                LANG_TEXT_SPECIAL_LINE_FEED: 'Line Feed',
                LANG_TEXT_SPECIAL_TOOLTIP: 'Writes special Chars.',
                LANG_TEXT_COMMENT: 'Comment',
                LANG_TEXT_COMMENT_TOOLTIP: 'Inserts a comment of one line in the program.',
                //advanced blocks :
                LANG_CATEGORY_ADVANCED: 'Pin functions',
                LANG_ADVANCED_INOUT_ANALOG_READ: 'AnalogRead PIN#',
                LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP: 'Reads the value from a specified digital pin',
                LANG_ADVANCED_INOUT_ANALOG_WRITE: 'AnalogWrite PIN#',
                LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE: 'value',
                LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP: 'Write a value between 0 and 255 to a specific analog output PIN',
                LANG_ADVANCED_BUILTIN_LED: 'BUILT-IN LED',
                LANG_ADVANCED_BUILTIN_LED_STATE: 'state',
                LANG_ADVANCED_BUILTIN_LED_ON: 'ON',
                LANG_ADVANCED_BUILTIN_LED_OFF: 'OFF',
                LANG_ADVANCED_BUILTIN_LED_TOOLTIP: 'Built-in LED that is internally connected to PIN 13',
                LANG_ADVANCED_INOUT_DIGITAL_READ: 'DigitalRead PIN#',
                LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP: 'Reads the value from a specified digital pin',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE: 'DigitalWrite',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_GET_VAR: 'value',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN: 'PIN#',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE: 'state',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH: 'HIGH',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW: 'LOW',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP: 'Write a value in a specified digital pin',
                LANG_ADVANCED_INOUT_PULSEIN: 'Time for digital pin PIN#',
                LANG_ADVANCED_INOUT_PULSEIN_MODE: 'to change to',
                LANG_ADVANCED_INOUT_PULSEIN_TOOLTIP: 'Returns the time for a digital pin to change to the state specified (in milliseconds).',
                LANG_ADVANCED_HIGHLOW_HIGH: 'HIGH',
                LANG_ADVANCED_HIGHLOW_LOW: 'LOW',
                LANG_ADVANCED_HIGHLOW_TOOLTIP: 'HIGH OR LOW',
                LANG_ADVANCED_MATH_RANDOM: 'Random between',
                LANG_ADVANCED_MATH_RANDOM_AND: ' and ',
                LANG_ADVANCED_MATH_RANDOM_TOOLTIP: 'Returns a random number between the two limits.',
                LANG_ADVANCED_MATH_RANDOM_SEED: 'Set random seed to',
                LANG_ADVANCED_MATH_RANDOM_SEED_TOOLTIP: 'Sets seed for random number generator. For a random seed, read from an unconnected analog pin; to repeat the same sequence, use a fixed number.',
                //procedures blocks
                LANG_CATEGORY_PROCEDURES: 'Functions',
                LANG_PROCEDURES_RETURN: 'return',
                LANG_PROCEDURES_RETURN_TOOLTIP: 'Returns a value',
                LANG_PROCEDURES_CALL_WITHOUT_DEFINITION: 'Function call without matching definition',
                LANG_PROCEDURES_DEFNORETURN_HELPURL: '',
                LANG_PROCEDURES_DEFNORETURN_PROCEDURE: 'function_without_return',
                LANG_PROCEDURES_DEFNORETURN_DO: 'do',
                LANG_PROCEDURES_DEFNORETURN_TOOLTIP: 'A function with no return value.',
                LANG_PROCEDURES_DEFRETURN_HELPURL: '',
                LANG_PROCEDURES_DEFRETURN_PROCEDURE: 'function_with_return',
                LANG_PROCEDURES_DEFRETURN_DO: 'do',
                LANG_PROCEDURES_DEFRETURN_RETURN: 'return',
                LANG_PROCEDURES_DEFRETURN_TOOLTIP: 'A function with a return value.',
                LANG_PROCEDURES_DEF_DUPLICATE_WARNING: 'Warning: This function has duplicate parameters.',
                LANG_PROCEDURES_CALLNORETURN_HELPURL: '',
                LANG_PROCEDURES_CALLNORETURN_CALL: 'do',
                LANG_PROCEDURES_CALLNORETURN_PROCEDURE: 'function_without_return',
                LANG_PROCEDURES_CALLNORETURN_TOOLTIP: 'Calls a function with no return value.',
                LANG_PROCEDURES_CALLRETURN_HELPURL: '',
                LANG_PROCEDURES_CALLRETURN_CALL: 'do',
                LANG_PROCEDURES_CALLRETURN_PROCEDURE: 'function_with_return',
                LANG_PROCEDURES_CALLRETURN_TOOLTIP: 'Calls a function with a return value.',
                LANG_PROCEDURES_MUTATORCONTAINER_Field: 'parameters',
                LANG_PROCEDURES_MUTATORARG_Field: 'variable:',
                LANG_PROCEDURES_HIGHLIGHT_DEF: 'Highlight function',
                LANG_PROCEDURES_IFRETURN_TOOLTIP: 'If the condition is true, then returns this value.',
                LANG_PROCEDURES_IFRETURN_WARNING: 'Warning: This block may only be used within a function with a return value.',
                //variables blocks :
                LANG_CATEGORY_VARIABLES: 'Variables',
                LANG_VARIABLES_CALL_WITHOUT_DEFINITION: 'This variable is not declared.',
                LANG_VARIABLES_GLOBAL: 'Declare GLOBAL Variable ',
                LANG_VARIABLES_GLOBAL_TYPE: 'of type ',
                LANG_VARIABLES_GLOBAL_EQUALS: 'equals',
                LANG_VARIABLES_GLOBAL_TOOLTIP: 'Declares and defines a GLOBAL variable of type int or String.',
                LANG_VARIABLES_LOCAL: 'Declare variable ',
                LANG_VARIABLES_LOCAL_TYPE: 'of type ',
                LANG_VARIABLES_LOCAL_EQUALS: 'equals',
                LANG_VARIABLES_LOCAL_TOOLTIP: 'Declare and define a LOCAL variable of type int or String.',
                LANG_VARIABLES_DEFINE: 'Define variable ',
                LANG_VARIABLES_DEFINE_AS: 'as',
                LANG_VARIABLES_DEFINE_TOOLTIP: 'Define the value of a variable.',
                LANG_VARIABLES_SET: 'Var',
                LANG_VARIABLES_SET_AS: '=',
                LANG_VARIABLES_SET_TOOLTIP: 'Sets the value of a variable.',
                LANG_VARIABLES_GET: 'Var',
                LANG_VARIABLES_GET_TOOLTIP: 'Returns the value of a variable.',
                LANG_VARIABLES_PIN_ANALOG: 'Analog pin',
                LANG_VARIABLES_PIN_DIGITAL: 'Digital pin',
                LANG_VARIABLES_PIN_DIGITAL0: 'WARNING: digital pin 0 (RX pin) is used when uploading a sketch. Using it to connect electronic components may cause problems when uploading a new sketch.',
                LANG_VARIABLES_PIN_TOOLTIP: 'Select the PIN.',
                LANG_VARIABLES_TYPE_BYTE: 'Byte',
                LANG_VARIABLES_TYPE_FLOAT: 'Float',
                LANG_VARIABLES_TYPE_INTEGER: 'Integer',
                LANG_VARIABLES_TYPE_INTEGER_LONG: 'Long Integer',
                LANG_VARIABLES_TYPE_INTEGER_ULONG: 'Unsigned Long Integer',
                LANG_VARIABLES_TYPE_STRING: 'String',
                LANG_VARIABLES_TYPE_CHAR: 'Character',
                LANG_VARIABLES_TYPE_BOOLEAN: 'Boolean',
                LANG_VARIABLES_VOLATILE_GLOBAL: 'Declare VOLATILE GLOBAL variable ',
                LANG_VARIABLES_VOLATILE_GLOBAL_TYPE: 'of type ',
                LANG_VARIABLES_VOLATILE_GLOBAL_EQUALS: 'equals ',
                LANG_VARIABLES_VOLATILE_GLOBAL_TOOLTIP: 'Declares and defines a VOLATILE GLOBAL variable of type int or String used in a ISR function.',
                //sound blocks (zum):
                LANG_CATEGORY_ZUM: 'Sounds',
                LANG_ZUM_PIEZO_BUZZER: 'Buzzer',
                LANG_ZUM_PIEZO_BUZZER_PIN: 'PIN#',
                LANG_ZUM_PIEZO_BUZZER_TONE: 'TONE',
                LANG_ZUM_PIEZO_BUZZER_DO: 'DO',
                LANG_ZUM_PIEZO_BUZZER_RE: 'RE',
                LANG_ZUM_PIEZO_BUZZER_MI: 'MI',
                LANG_ZUM_PIEZO_BUZZER_FA: 'FA',
                LANG_ZUM_PIEZO_BUZZER_SOL: 'SOL',
                LANG_ZUM_PIEZO_BUZZER_LA: 'LA',
                LANG_ZUM_PIEZO_BUZZER_SI: 'SI',
                LANG_ZUM_PIEZO_BUZZER_DURATION: 'Duration [ms]',
                LANG_ZUM_PIEZO_BUZZER_TOOLTIP: 'Piezo Buzzer',
                LANG_ZUM_PIEZO_BUZZERAV: 'Advanced Buzzer',
                LANG_ZUM_PIEZO_BUZZERAV_PIN: 'PIN#',
                LANG_ZUM_PIEZO_BUZZERAV_TONE: 'TONE',
                LANG_ZUM_PIEZO_BUZZERAV_DURATION: 'Duration [ms]',
                LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP: 'Piezo Buzzer Advanced',
                LANG_ZUM_DHT11_VALUE: 'Get',
                LANG_ZUM_DHT11_VALUE1: 'Temperature',
                LANG_ZUM_DHT11_VALUE2: 'Humidity',
                LANG_ZUM_DHT11_PIN: 'PIN',
                LANG_ZUM_DHT11_TOOLTIP: 'Get temperature or humidity from a DHT11, DHT21 or DHT22 sensor.',
                //motor blocks (servo and stepper):
                LANG_CATEGORY_MOTOR: 'Motors',
                LANG_MOTOR_SERVO_CONT: 'Continuous rotation servo',
                LANG_MOTOR_SERVO_CONT_PIN: 'PIN#',
                LANG_MOTOR_SERVO_CONT_ROT: 'ROT',
                LANG_MOTOR_SERVO_CONT_TURN_CLOCKWISE: 'TURN CLOCKWISE',
                LANG_MOTOR_SERVO_CONT_TURN_COUNTERCLOCKWISE: 'TURN COUNTERCLOCKWISE',
                LANG_MOTOR_SERVO_CONT_STOPPED: 'STOPPED',
                LANG_MOTOR_SERVO_CONT_DELAY: 'Delay [ms]',
                LANG_MOTOR_SERVO_CONT_TOOLTIP: 'Continuous rotation servo.',
                LANG_MOTOR_SERVO_MOVE: 'Servo',
                LANG_MOTOR_SERVO_MOVE_PIN: 'PIN#',
                LANG_MOTOR_SERVO_MOVE_DEGREES: 'Degrees (0~180)',
                LANG_MOTOR_SERVO_MOVE_DELAY: 'Delay [ms]',
                LANG_MOTOR_SERVO_MOVE_TOOLTIP: 'Move between 0~180 degree',
                LANG_MOTOR_SERVO_WARNING: 'It is not possible to set the servo pin using a variable',
                LANG_MOTOR_STEPPER_MOVE: 'Stepper motor',
                LANG_MOTOR_STEPPER_MOVE_SPR: 'Steps per revolution',
                LANG_MOTOR_STEPPER_MOVE_PINS: '4 pins?',
                LANG_MOTOR_STEPPER_MOVE_PIN1: 'Pin 1',
                LANG_MOTOR_STEPPER_MOVE_PIN2: 'Pin 2',
                LANG_MOTOR_STEPPER_MOVE_PIN3: 'Pin 3',
                LANG_MOTOR_STEPPER_MOVE_PIN4: 'Pin 4',
                LANG_MOTOR_STEPPER_MOVE_SETSPEED: 'Set speed to',
                LANG_MOTOR_STEPPER_MOVE_SETSPEED_NEXT: '(rpm)',
                LANG_MOTOR_STEPPER_MOVE_STEP: 'Move motor',
                LANG_MOTOR_STEPPER_MOVE_STEP_NEXT: '(steps)',
                LANG_MOTOR_STEPPER_MOVE_TOOLTIP: 'Moves motor the number of steps. A positive steps value move in one direction, a negative value moves to the other direction.',
                LANG_MOTOR_PCA9685_DEF: 'PCA9685',
                LANG_MOTOR_PCA9685_DEF_FREQ: 'Servo',
                LANG_MOTOR_PCA9685_DEF_ADDRESS: 'Address of the component',
                LANG_MOTOR_PCA9685_DEF_TOOLTIP: 'Defines a PCA9685 connected to Arduino over I2C.',
                LANG_MOTOR_PCA9685_SET_PWM: 'PCA9685 Move servo',
                LANG_MOTOR_PCA9685_SET_PWM_ANGLE: 'angle',
                LANG_MOTOR_PCA9685_SET_PWM_TOOLTIP: 'Moves servo connected to PCA9685 the specified angle in degrees.',
                //interrupt blocks :
                LANG_CATEGORY_INTERRUPTS: 'Interrupts',
                LANG_INTERRUPTS_STATE: 'Set interrupts state to ',
                LANG_INTERRUPTS_STATE_ENABLED: 'ENABLED',
                LANG_INTERRUPTS_STATE_DISABLED: 'DISABLED',
                LANG_INTERRUPTS_STATE_TOOLTIP: 'Enable or Disable interrupts. Some functions will not work while interrupts are disabled. Use only for particularly critical sections of code.',
                LANG_INTERRUPTS_ATTACH: 'Attach procedure ',
                LANG_INTERRUPTS_ATTACH_PARAM2: 'in mode ',
                LANG_INTERRUPTS_ATTACH_PARAM3: 'with interrupt of digital pin',
                LANG_INTERRUPTS_ATTACH_LOW: 'LOW',
                LANG_INTERRUPTS_ATTACH_CHANGE: 'CHANGE',
                LANG_INTERRUPTS_ATTACH_RISING: 'RISING',
                LANG_INTERRUPTS_ATTACH_FALLING: 'FALLING',
                LANG_INTERRUPTS_ATTACH_PROCEDURE: 'func_without_return',
                LANG_INTERRUPTS_ATTACH_TOOLTIP: 'Set the procedure to be executed when an interrupt is raised in the specified pin.',
                LANG_INTERRUPTS_DETACH: 'Detach interrupt on digital pin',
                LANG_INTERRUPTS_DETACH_TOOLTIP: 'Disables the interrupt on the pin. When the pin is activated, the procedure associated is no longer executed.',
                LANG_WIFI_CONNECT: 'Wifi:',
                LANG_WIFI_CONNECT_STATION: 'connect',
                LANG_WIFI_CONNECT_SOFTAP: 'create network',
                LANG_WIFI_CONNECT_SSID: 'SSID',
                LANG_WIFI_CONNECT_PASSWORD: 'password',
                LANG_WIFI_CONNECT_CHANNEL: 'channel',
                LANG_WIFI_CONNECT_RX_PIN: 'Rx pin',
                LANG_WIFI_CONNECT_TX_PIN: 'Tx pin',
                LANG_WIFI_CONNECT_BAUD: 'baud rate',
                LANG_WIFI_CONNECT_TOOLTIP: 'Connects or creates a wifi using a ESP8266 adapter, and returns true on success.',
                LANG_WIFI_DISCONNECT: 'Wifi:disconnect',
                LANG_WIFI_DISCONNECT_TOOLTIP: 'Disconnects from the current wifi network.',
                LANG_WIFI_CLIENT: 'Wifi:connect to server',
                LANG_WIFI_CLIENT_IP: 'IP address',
                LANG_WIFI_CLIENT_PORT: 'Port',
                LANG_WIFI_CLIENT_TOOLTIP: 'Connects to a TCP server.',
                LANG_WIFI_SERVER: 'Wifi:start server',
                LANG_WIFI_SERVER_PORT: 'Port',
                LANG_WIFI_SERVER_TOOLTIP: 'Create a TCP server to accept connections from clients.',
                LANG_WIFI_GETIP: 'Wifi:get IP address',
                LANG_WIFI_GETIP_TOOLTIP: 'Returns IP address of the adapter.',
                LANG_WIFI_SEND_SERVER: 'Wifi:send to server',
                LANG_WIFI_SEND_SERVER_DATA: 'Text',
                LANG_WIFI_SEND_SERVER_TOOLTIP: 'Send text to the TCP server.',
                LANG_WIFI_SEND_CLIENT: 'Wifi:send to client',
                LANG_WIFI_SEND_CLIENT_ID: 'ID',
                LANG_WIFI_SEND_CLIENT_DATA: 'Data',
                LANG_WIFI_SEND_CLIENT_TOOLTIP: 'Send text to specified client (ID).',
                LANG_WIFI_RECEIVE_CLIENT: 'Wifi:receive from client',
                LANG_WIFI_RECEIVE_CLIENT_TOOLTIP: 'Receives a text from client, begining with id number and a colon (:). If timeout is reached, returns an empty string.',
                LANG_WIFI_RECEIVE_SERVER: 'Wifi:receive from server',
                LANG_WIFI_RECEIVE_SERVER_TIMEOUT: 'Timeout',
                LANG_WIFI_RECEIVE_SERVER_TOOLTIP: 'Receives a string from TCP server or empty string if timeout reached.',
                LANG_WIFI_CLOSE_SERVER: 'Wifi:stop server',
                LANG_WIFI_CLOSE_SERVER_TOOLTIP: 'Shutdown TCP server.',
                LANG_WIFI_CLOSE_CLIENT: 'Wifi:stop connection',
                LANG_WIFI_CLOSE_CLIENT_TOOLTIP: 'Shutdown connection with TCP server.'
            };
            // Node
            if (typeof module !== 'undefined' && module.exports) {
                module.exports = language;
            }
            // Browser
            // if (typeof window !== 'undefined' && this.RoboBlocks && this.RoboBlocks.locales.add) {
            //     this.RoboBlocks.locales.add('en', language);
            if (typeof window !== 'undefined' && RoboBlocks && RoboBlocks.locales.add) {
                RoboBlocks.locales.add('en-GB', language);
            }
        }());

        // Source: lang/es-ES.js
        (function() {
            var language = {
                //random :
                BLOCKLY_MSG_DUPLICATE_BLOCK: 'Duplicar',
                BLOCKLY_MSG_REMOVE_COMMENT: 'Remove Comment',
                BLOCKLY_MSG_ADD_COMMENT: 'Add Comment',
                BLOCKLY_MSG_EXTERNAL_INPUTS: 'External Inputs',
                BLOCKLY_MSG_INLINE_INPUTS: 'Inline Inputs',
                BLOCKLY_MSG_DELETE_BLOCK: 'Delete Block',
                BLOCKLY_MSG_DELETE_X_BLOCKS: 'Delete %1 Blocks',
                BLOCKLY_MSG_COLLAPSE_BLOCK: 'Collapse Block',
                BLOCKLY_MSG_EXPAND_BLOCK: 'Expand Block',
                BLOCKLY_MSG_DISABLE_BLOCK: 'Disable Block',
                BLOCKLY_MSG_ENABLE_BLOCK: 'Enable Block',
                BLOCKLY_MSG_HELP: 'Help',
                BLOCKLY_MSG_COLLAPSE_ALL: 'Collapse Blocks',
                BLOCKLY_MSG_EXPAND_ALL: 'Expand Blocks',
                LANG_VARIABLES_SET_ITEM: 'elemento',
                LANG_RESERVED_WORDS: 'Palabra reservada: este nombre no está permitido.',
                LANG_CHAR_LENGTH: 'Un carácter sólo puede tener longitud 0 o 1.',
                //logic blocks:
                LANG_CATEGORY_LOGIC: 'Lógica',
                LANG_LOGIC_OPERATION_AND: 'y',
                LANG_LOGIC_OPERATION_OR: 'o',
                LANG_LOGIC_COMPARE_TOOLTIP_EQ: 'Compara si las dos entradas son iguales.',
                LANG_LOGIC_COMPARE_TOOLTIP_NEQ: 'Compara si las dos entradas no son iguales entre sí.',
                LANG_LOGIC_COMPARE_TOOLTIP_LT: 'Compara si la primera entrada es menor que la segunda entrada.',
                LANG_LOGIC_COMPARE_TOOLTIP_LTE: 'Compara si la primera entrada es menor o igual que la segunda entrada.',
                LANG_LOGIC_COMPARE_TOOLTIP_GT: 'Compara si la primera entrada es mayor que la segunda entrada.',
                LANG_LOGIC_COMPARE_TOOLTIP_GTE: 'Compara si la primera entrada es mayor o igual que la segunda entrada.',
                LANG_LOGIC_OPERATION_TOOLTIP_AND: 'Compara si ambas entradas son verdaderas.',
                LANG_LOGIC_OPERATION_TOOLTIP_OR: 'Compara si alguna de las entradas son verdaderas.',
                LANG_LOGIC_NEGATE_INPUT_NOT: 'no',
                LANG_LOGIC_NEGATE_TOOLTIP: 'Devuelve lo contrario de la entrada.',
                LANG_LOGIC_NEGATE_HELPURL: '',
                LANG_LOGIC_BOOLEAN_TRUE: 'verdadero',
                LANG_LOGIC_BOOLEAN_FALSE: 'falso',
                LANG_LOGIC_BOOLEAN_TOOLTIP: 'Devuelve verdadero o falso en función de lo seleccionado.',
                //communication blocks:
                LANG_CATEGORY_COMMUNICATION: 'Comunicación',
                LANG_BQ_BLUETOOTH_RECEIVE: 'Bluetooth: recibir ',
                LANG_BQ_BLUETOOTH_RECEIVE_BLUETOOTH: 'Bluetooth',
                LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP: 'Devuelve los datos recibidos por el módulo Bluetooth',
                LANG_BQ_BLUETOOTH_SEND: 'Bluetooth: Enviar',
                LANG_BQ_BLUETOOTH_SEND_SEND: 'Enviar datos',
                LANG_BQ_BLUETOOTH_SEND_TOOLTIP: 'Toma los datos de la entrada y los envía usando el módulo Bluetooth',
                LANG_BQ_BLUETOOTH_DEF: 'Bluetooth',
                LANG_BQ_BLUETOOTH_DEF_BAUD_RATE: 'Tasa de baudios',
                LANG_BQ_BLUETOOTH_DEF_PIN1: 'RX',
                LANG_BQ_BLUETOOTH_DEF_PIN2: 'TX',
                LANG_BQ_BLUETOOTH_DEF_NAME: 'Nombre',
                LANG_BQ_BLUETOOTH_DEF_PINCODE: 'Código PIN',
                LANG_BQ_BLUETOOTH_DEF_RECEIVE: 'Recibir',
                LANG_BQ_BLUETOOTH_DEF_SEND: 'Enviar',
                LANG_BQ_BLUETOOTH_DEF_TOOLTIP: 'Definición del módulo Bluetooth',
                LANG_ADVANCED_BT_SERIAL_AVAILABLE: 'Bluetooth: Puerto Serie Disponible',
                LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP: 'Comprueba si el módulo Bluetooth está disponible o no',
                LANG_ADVANCED_SERIAL_AVAILABLE: 'Puerto Serie Disponible',
                LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP: 'Comprueba si el puerto serie está disponible o no',
                LANG_ADVANCED_SERIAL_PARSEINT: 'Leer entero por el puerto serie', // To translate
                LANG_ADVANCED_SERIAL_PARSEINT_TOOLTIP: 'Devuelve el primer número entero (largo) desde el puerto serie', // To translate
                LANG_ADVANCED_SERIAL_PRINT: 'Enviar por serie',
                LANG_ADVANCED_SERIAL_PRINT_TOOLTIP: 'Envía los datos por el puerto serie como texto ASCII.',
                LANG_ADVANCED_SERIAL_PRINTLN: 'Enviar por serie con RCSL',
                LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP: 'Envía los datos por el puerto serie como texto ASCII, seguid de un retorno de carro (RC) y salto de línea (SL).',
                LANG_ADVANCED_SERIAL_PRINT_FORMAT: 'Enviar por serie con formato',
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_1: 'Binario',
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_2: 'Octal',
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_3: 'Decimal',
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_4: 'Hexadecimal',
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_5: 'Sin decimales',
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_6: 'Un decimal',
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_7: 'Dos decimales',
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_8: 'Tres decimales',
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_9: 'Cuatro decimales',
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_TOOLTIP: 'Envía un valor numérico por el puerto serie con el formato especificado',
                LANG_ADVANCED_SERIAL_PRINTLN_FORMAT: 'Enviar por serie con RCSL y formato',
                LANG_ADVANCED_SERIAL_PRINTLN_FORMAT_TOOLTIP: 'Envía un valor numérico por el puerto serie, seguido de un retorno de carro (RC) y salto de línea (SL), con el formato especificado',
                LANG_ADVANCED_SERIAL_READ: 'Leer desde el puerto serie',
                LANG_ADVANCED_SERIAL_READ_TOOLTIP: 'Lee los datos que se reciben por el puerto serie como texto bytes.',
                LANG_ADVANCED_SERIAL_READSTRING: 'Leer cadena desde el puerto serie',
                LANG_ADVANCED_SERIAL_READSTRING_TOOLTIP: 'Lee los datos que se reciben por el puerto serie como texto ASCII.',
                //Sensor blocks:
                LANG_CATEGORY_SENSOR: 'Sensores',
                LANG_BQ_BAT: 'BAT - Sensor de Ultrasonidos',
                LANG_BQ_BAT_RED_PIN: 'ECHO PIN#',
                LANG_BQ_BAT_BLUE_PIN: 'TRIGGER PIN#',
                LANG_BQ_BAT_TOOLTIP: 'Devuelve la distancia medida por el sensor.',
                LANG_IR_READ: 'Leer del receptor de infrarrojos',
                LANG_IR_READ_PIN: 'conectado en el PIN#',
                LANG_IR_READ_TOOLTIP: 'Lee el valor recibido por el receptor de infrarrojos',
                //LCD blocks:
                LANG_CATEGORY_LCD: 'Pantalla LCD',
                LANG_LCD_DEF: 'LCD (2x16)',
                LANG_LCD_DEF_CONNECTION: 'Tipo de conexión',
                LANG_LCD_DEF_CONNECTION_PARALLEL: 'Paralela, (6 pines)',
                LANG_LCD_DEF_CONNECTION_I2C: 'I2C, (4 cables)',
                LANG_LCD_DEF_ADDRESS: 'Dirección del componente',
                LANG_LCD_DEF_PIN_1: 'Pin RS',
                LANG_LCD_DEF_PIN_2: 'Pin Enable',
                LANG_LCD_DEF_PIN_3: 'Pin Data4',
                LANG_LCD_DEF_PIN_4: 'Pin Data5',
                LANG_LCD_DEF_PIN_5: 'Pin Data6',
                LANG_LCD_DEF_PIN_6: 'Pin Data7',
                LANG_LCD_DEF_TOOLTIP: 'Define el LCD',
                LANG_LCD_ADVANCED_DEF: 'LCD avanzado',
                LANG_LCD_ADVANCED_ROWS: 'Filas',
                LANG_LCD_ADVANCED_COLUMNS: 'Columnas',
                LANG_LCD_DEF_ADVANCED_TOOLTIP: 'Bloque que define el LCD avanzado',
                LANG_LCD_SETBACKLIGHT: 'LCD: ajustar la retroiluminación',
                LANG_LCD_SETBACKLIGHT_CLOSE: '',
                LANG_LCD_SETBACKLIGHT_TOOLTIP: 'Ajusta la retroiluminación de la pantalla LCD',
                LANG_LCD_PRINT: 'LCD: Imprimir ',
                LANG_LCD_PRINT_POSITION: '¿Fijar posición del texto?',
                LANG_LCD_PRINT_TOOLTIP: 'Imprime un string en la pantalla LCD en la posición específicada o en la siguiente disponible.',
                LANG_LCD_CLEAR: 'LCD borrar',
                LANG_LCD_CLEAR_TOOLTIP: 'LCD: Borrar',
                LANG_LCD_HOME: 'LCD Ir al principio',
                LANG_LCD_HOME_TOOLTIP: 'LCD: Coloca el cursor para escribir en la posición superior izquierda de la pantalla',
                LANG_LCD_DISPLAY: 'LCD Mostrar contenido',
                LANG_LCD_DISPLAY_TOOLTIP: 'LCD: Activa la pantalla y muestra su contenido',
                LANG_LCD_NODISPLAY: 'LCD Ocultar contenido',
                LANG_LCD_NODISPLAY_TOOLTIP: 'LCD: Desactiva la pantalla y oculta su contenido, aunque no lo borra',
                LANG_LCD_SCROLLDISPLAYLEFT: 'LCD Desplazar contenido a la izquierda',
                LANG_LCD_SCROLLDISPLAYLEFT_TOOLTIP: 'LCD: Desplaza el contenido de la pantalla una posición a la izquierda',
                LANG_LCD_SCROLLDISPLAYRIGHT: 'LCD Desplazar contenido a la derecha',
                LANG_LCD_SCROLLDISPLAYRIGHT_TOOLTIP: 'LCD: Desplaza el contenido de la pantalla una posición a la derecha',
                //controls blocks :
                LANG_CATEGORY_CONTROLS: 'Control',
                LANG_CONTROLS_BASE_DELAY_WAIT: 'Esperar [ms]',
                LANG_CONTROLS_BASE_DELAY_TOOLTIP: 'Espera el tiempo especificado en milisegundos (ms)',
                LANG_CONTROLS_BASE_MILLIS: 'Tiempo desde el arranque (ms)',
                LANG_CONTROLS_BASE_MILLIS_TOOLTIP: 'Número de milisegundos desde que se inició el programa (entero largo)',
                LANG_CONTROLS_BASE_DELAY_MICROSECONDS: 'Esperar [us]',
                LANG_CONTROLS_BASE_DELAY_MICROSECONDS_TOOLTIP: 'Espera el tiempo especificado en microsegundos (us)',
                LANG_CONTROLS_BASE_MICROS: 'Tiempo desde el arranque (us)',
                LANG_CONTROLS_BASE_MICROS_TOOLTIP: 'Número de microsegundos desde que se inició el programa (entero largo)',
                LANG_CONTROLS_DOWHILE_OPERATOR_DO: 'Hacer',
                LANG_CONTROLS_DOWHILE_OPERATOR_WHILE: 'mientras',
                LANG_CONTROLS_DOWHILE_TOOLTIP: 'Mientras la condición sea verdadera, continúa ejecutando las acciones del bloque.',
                LANG_CONTROLS_EXECUTE: 'Ejecutar',
                LANG_CONTROLS_EXECUTE_TOOLTIP: 'Ejecuta código C/C++. Utilizar con preucación, ya que puede romper fácilmente el programa e impedir su correcta compilación.',
                LANG_CONTROLS_IF_TOOLTIP_1: 'Si la condición es verdadera, ejecuta las acciones dentro del bloque.',
                LANG_CONTROLS_IF_TOOLTIP_2: 'Si la condición es verdadera, se ejecuta el primer bloque de comandos. Si no lo es, se ejecuta el segundo bloque de comandos.',
                LANG_CONTROLS_IF_TOOLTIP_3: 'Si el primer valor es verdadero, se ejecuta el primer bloque de comandos. Sino, si el segundo valor es verdadero, se ejecuta el segundo bloque de comandos.',
                LANG_CONTROLS_IF_TOOLTIP_4: 'Si el primer valor es verdadero, se ejecuta el primer bloque de comandos. Sino, si el segundo valor es verdadero, se ejecuta el segundo bloque de comandos. Si ninguno de los valores es verdadero, se ejecuta el último bloque de comandos',
                LANG_CONTROLS_IF_MSG_IF: 'si',
                LANG_CONTROLS_IF_MSG_ELSEIF: 'en cambio, si',
                LANG_CONTROLS_IF_MSG_ELSE: 'de lo contrario',
                LANG_CONTROLS_IF_MSG_THEN: 'ejecutar',
                LANG_CONTROLS_IF_IF_Field_IF: 'si',
                LANG_CONTROLS_IF_IF_TOOLTIP: 'Añadir, eliminar o reordenar secciones para reconfigurar este bloque "si".',
                LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF: 'en cambio, si',
                LANG_CONTROLS_IF_ELSEIF_TOOLTIP: 'Añade una condición al bloque "si".',
                LANG_CONTROLS_IF_ELSE_Field_ELSE: 'de lo contrario',
                LANG_CONTROLS_IF_ELSE_TOOLTIP: 'Añade una condición final al bloque "si" para capturar el resto de opciones.',
                LANG_CONTROLS_FOR_FROM_WARNING: 'No puedes asignar una variable al valor inicial del for',
                LANG_CONTROLS_FOR_TO_WARNING: 'No puedes asignar una variable al valor final del for',
                LANG_CONTROLS_FOR_INCREMENT_WARNING: 'No puedes asignar una variable al valor de incremento del for',
                LANG_CONTROLS_FOR_INPUT_WITH: 'Contar con',
                LANG_CONTROLS_FOR_INPUT_VAR: 'x',
                LANG_CONTROLS_FOR_INPUT_FROM: 'desde',
                LANG_CONTROLS_FOR_INPUT_TO: 'hasta',
                LANG_CONTROLS_FOR_INPUT_INCREMENT: 'incremento',
                LANG_CONTROLS_FOR_INPUT_DO: 'ejecutar',
                LANG_CONTROLS_FOR_TOOLTIP: 'Contar desde un número de inicio hasta uno final. Cada vez que se incrementa en uno la cuenta, la variable toma ese valor y se ejecutan las acciones.',
                LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE: 'mientras',
                LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL: 'hasta',
                LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE: 'Mientras la condición sea verdadera, ejecutar las instrucciones.',
                LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL: 'Mientras la condición sea falsa, ejecutar las instrucciones.',
                LANG_CONTROLS_REPEAT_TITLE_REPEAT: 'Repetir',
                LANG_CONTROLS_REPEAT_TITLE_TIMES: 'veces',
                LANG_CONTROLS_REPEAT_INPUT_DO: 'ejecutar',
                LANG_CONTROLS_REPEAT_TOOLTIP: 'Ejecutar las instrucciones un número concreto de veces.',
                LANG_CONTROLS_FLOW_STATEMENTS_HELPURL: '',
                LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP: 'el bucle',
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: 'interrumpir',
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: 'continuar con la siguiente iteración',
                LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK: 'Interrumpir el bucle que contiene esta instrucción.',
                LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE: 'Saltarse el resto de acciones de esta iteración y continuar con la siguiente iteración.',
                LANG_CONTROLS_FLOW_STATEMENTS_WARNING: 'Atención: Este bloque sólo puede ser usado dentro de un bucle.',
                LANG_CONTROLS_SETUP_LOOP_SETUP_TITLE: 'Inicio',
                LANG_CONTROLS_SETUP_LOOP_LOOP_TITLE: 'Repetir',
                LANG_CONTROLS_SETUP_LOOP_TOOLTIP: 'Los bloques en Inicio se ejecutarán una sola vez al arranque, mientras que los bloques en Repetir se ejecutarán de forma repetida.',
                LANG_CONTROLS_SWITCH: 'si ',
                LANG_CONTROLS_SWITCH_TOOLTIP_1: 'Ejecuta las acciones del caso que se cumpla.',
                LANG_CONTROLS_SWITCH_TOOLTIP_2: 'Ejecuta las acciones del caso que se cumpla.',
                LANG_CONTROLS_SWITCH_TOOLTIP_3: 'Ejecuta las acciones del caso que se cumpla.',
                LANG_CONTROLS_SWITCH_TOOLTIP_4: 'Ejecuta las acciones del caso que se cumpla.',
                LANG_CONTROLS_SWITCH_SWITCH_TOOLTIP: 'Este bloque compara de uno en uno si se cumplen los distintos casos.',
                LANG_CONTROLS_SWITCH_CASE_TOOLTIP: 'caso ',
                LANG_CONTROLS_SWITCH_DEFAULT_TOOLTIP: 'El bloque "default" especifica la acción que se va a ejecutar si no se han cumplido ninguno de los casos anteriores.',
                LANG_CONTROLS_SWITCH_IS: 'es: ',
                LANG_CONTROLS_SWITCH_CASE: 'caso ',
                LANG_CONTROLS_SWITCH_COLON: ': ',
                LANG_CONTROLS_SWITCH_DEFAULT: 'en otro caso',
                LANG_CONTROLS_SWITCH_DO: 'ejecutar',
                //math blocks :
                LANG_CATEGORY_MATH: 'Matemáticas',
                LANG_MATH_ADVANCED_MAP_MAP: 'Mapear ',
                LANG_MATH_ADVANCED_MAP_FROM: 'De [',
                LANG_MATH_ADVANCED_MAP_HYPHEN: '-',
                LANG_MATH_ADVANCED_MAP_BRACKET: ']',
                LANG_MATH_ADVANCED_MAP_TO: 'a [',
                LANG_MATH_ADVANCED_MAP_TOOLTIP: 'Mapea la entrada desde un rango de valores iniciales a otro rango distinto.',
                LANG_MATH_NUMBER_TOOLTIP: 'Número entero',
                LANG_MATH_ARRAY_ARRAY3: '[3]',
                LANG_MATH_ARRAY_BRACKET3: '{',
                LANG_MATH_ARRAY_BRACKET4: '}',
                LANG_MATH_ARRAY_COMMA: ',',
                LANG_MATH_ARRAY_TOOLTIP: 'Vector de tres enteros',
                LANG_ARRAY_GET_BRACKET1: '[',
                LANG_ARRAY_GET_BRACKET2: ']',
                LANG_ARRAY_GET_TOOLTIP: 'Devuelve el valor de un elemento concreto del vector.',
                LANG_MATH_MODULO_TOOLTIP: 'Devuelve el resto de la división de las dos entradas.',
                LANG_MATH_BASE_MAP: 'Mapear ',
                LANG_MATH_BASE_MAP_VALUE_TO: 'Valor entre [0-',
                LANG_MATH_BASE_MAP_BRACKET: ']',
                LANG_MATH_BASE_MAP_TOOLTIP: 'Mapea la entrada desde el rango [0-1023] a otro rango de valores.',
                LANG_MATH_SINGLE_OP_ROOT: 'raíz cuadrada',
                LANG_MATH_SINGLE_OP_ABSOLUTE: 'valor absoluto',
                LANG_MATH_SINGLE_TOOLTIP_ROOT: 'Devuelve la raíz cuadrada de un número.',
                LANG_MATH_SINGLE_TOOLTIP_ABS: 'Devuelve el valor absoluto de un número.',
                LANG_MATH_SINGLE_TOOLTIP_NEG: 'Devuelve el número cambiado de signo.',
                LANG_MATH_SINGLE_TOOLTIP_LN: 'Devuelve el logaritmo neperiano de un número.',
                LANG_MATH_SINGLE_TOOLTIP_LOG10: 'Devuelve el logaritmo en base 10 de un número.',
                LANG_MATH_SINGLE_TOOLTIP_EXP: 'Devuelve el exponencial de un número.',
                LANG_MATH_SINGLE_TOOLTIP_POW10: 'Devuelve 10 elevado a una potencia.',
                LANG_MATH_MIN: 'Valor mínimo entre',
                LANG_MATH_MIN_PARAM2: 'y',
                LANG_MATH_MIN_TOOLTIP: 'Devuelve el valor mínimo de los dos especificados.',
                LANG_MATH_MAX: 'Valor máximo entre',
                LANG_MATH_MAX_PARAM2: 'y',
                LANG_MATH_MAX_TOOLTIP: 'Devuelve el valor máximo de los dos especificados.',
                LANG_MATH_POW: 'Valor de',
                LANG_MATH_POW_PARAM2: 'elevado a',
                LANG_MATH_POW_TOOLTIP: 'Devuelve el primer valor elevado al segundo valor.',
                //text blocks:
                LANG_CATEGORY_TEXT: 'Texto',
                LANG_TEXT_TEXT_HELPURL: '',
                LANG_TEXT_TEXT_TOOLTIP: 'Una letra, una palabra o una línea de texto.',
                LANG_TEXT_CHAR_TOOLTIP: 'Cualquier símbolo, letra o número, pero sólo un carácter',
                LANG_TEXT_JOIN_HELPURL: '',
                LANG_TEXT_JOIN_Field_CREATEWITH: 'crear texto con',
                LANG_TEXT_JOIN_TOOLTIP: 'Crea texto juntando cualquier número de elementos.',
                LANG_TEXT_CREATE_JOIN_Field_JOIN: 'unir',
                LANG_TEXT_CREATE_JOIN_TOOLTIP: 'Añadir, eliminar o reordenar secciones para reconfigurar este bloque de texto.',
                LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM: 'elemento',
                LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP: 'Añadir un elemento al texto.',
                LANG_TEXT_CREATE_JOIN_TITLE_JOIN: 'unir',
                LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM: 'elemento',
                LANG_TEXT_APPEND_HELPURL: '',
                LANG_TEXT_APPEND_TO: 'a',
                LANG_TEXT_APPEND_APPENDTEXT: 'añadirle texto',
                LANG_TEXT_APPEND_VARIABLE: 'elemento',
                LANG_TEXT_APPEND_TOOLTIP: 'Añadir texto a la variable %1.',
                LANG_TEXT_LENGTH_HELPURL: '',
                LANG_TEXT_LENGTH_INPUT_LENGTH: 'longitud',
                LANG_TEXT_LENGTH_TOOLTIP: 'Devuelve el número de letras (incluyendo los espacios) en el texto introducido.',
                LANG_TEXT_EQUALSIGNORECASE_IS: '',
                LANG_TEXT_EQUALSIGNORECASE_EQUAL: ' =',
                LANG_TEXT_EQUALSIGNORECASE_QUESTION: '',
                LANG_TEXT_EQUALSIGNORECASE_TOOLTIP: 'Compara si los dos textos introducidos son iguales, independientemente de que tengan letras mayúsculas o minúsculas.',
                LANG_TEXT_SUBSTRING: 'Recortar ',
                LANG_TEXT_SUBSTRING_FROM: 'desde',
                LANG_TEXT_SUBSTRING_TO: 'hasta',
                LANG_TEXT_SUBSTRING_TOOLTIP: 'Recorta los caracteres del texto introducido que se encuentren entre los dos índices y crea con ellos un nuevo texto.',
                LANG_TEXT_CHARAT: 'Carácter del texto',
                LANG_TEXT_CHARAT_POSITION: 'en la posición',
                LANG_TEXT_CHARAT_TOOLTIP: 'Devuelve el carácter que se encuentra en la posición indicada del texto (comenzando por la 0).',
                LANG_TEXT_SPECIAL: 'Caracteres especiales',
                LANG_TEXT_SPECIAL_TAB: 'Tabulador',
                LANG_TEXT_SPECIAL_CARRIAGE_RETURN: 'Retorno de carro',
                LANG_TEXT_SPECIAL_LINE_FEED: 'Salto de línea',
                LANG_TEXT_SPECIAL_TOOLTIP: 'Escribe caracteres especiales.',
                LANG_TEXT_COMMENT: 'Comentario',
                LANG_TEXT_COMMENT_TOOLTIP: 'Inserta un bloque de comentario de una línea en el programa.',
                //advanced blocks :
                LANG_CATEGORY_ADVANCED: 'Funciones PIN',
                LANG_ADVANCED_INOUT_ANALOG_READ: 'Leer el pin analógico PIN#',
                LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP: 'Lee el valor de un pin analógico específico.',
                LANG_ADVANCED_INOUT_ANALOG_WRITE: 'Escribir en PIN digital',
                LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE: 'el valor analógico',
                LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP: 'Escribe un valor entre 0 y 255 en un PIN analógico específico.',
                LANG_ADVANCED_BUILTIN_LED: 'LED EN LA PLACA',
                LANG_ADVANCED_BUILTIN_LED_STATE: 'estado',
                LANG_ADVANCED_BUILTIN_LED_ON: 'ENCENDIDO',
                LANG_ADVANCED_BUILTIN_LED_OFF: 'APAGADO',
                LANG_ADVANCED_BUILTIN_LED_TOOLTIP: 'LED integrado en la placa que está internamente conectado al PIN 13.',
                LANG_ADVANCED_INOUT_DIGITAL_READ: 'Leer el pin digital PIN#',
                LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP: 'Lee el valor desde un pin digital específico.',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE: 'Escribir en el pin digital',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_GET_VAR: 'el valor',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN: 'PIN#',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE: 'estado',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH: 'ALTO',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW: 'BAJO',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP: 'Escribe un valor en el pin digital específico.',
                LANG_ADVANCED_INOUT_PULSEIN: 'Tiempo que tarda el pin digital PIN#',
                LANG_ADVANCED_INOUT_PULSEIN_MODE: 'en ponerse en estado',
                LANG_ADVANCED_INOUT_PULSEIN_TOOLTIP: 'Devuelve el tiempo que tarda un pin digital en ponerse en el estado especificado (en milisegundos).',
                LANG_ADVANCED_HIGHLOW_HIGH: 'ALTO',
                LANG_ADVANCED_HIGHLOW_LOW: 'BAJO',
                LANG_ADVANCED_HIGHLOW_TOOLTIP: 'Escribe "ALTO" o "BAJO" en función de lo seleccionado.',
                LANG_ADVANCED_MATH_RANDOM: 'Aleatorio entre',
                LANG_ADVANCED_MATH_RANDOM_AND: ' y ',
                LANG_ADVANCED_MATH_RANDOM_TOOLTIP: 'Crea un número aleatorio entre los dos límites introducidos.',
                LANG_ADVANCED_MATH_RANDOM_SEED: 'Establece semilla aleatorios a',
                LANG_ADVANCED_MATH_RANDOM_SEED_TOOLTIP: 'Establece la semilla del generador de números aleatorios. Para una semilla aleatoria, leer de un pin analógico no conectado; para repetir la misma secuencia, usar un valor fijo.',
                //procedures blocks
                LANG_CATEGORY_PROCEDURES: 'Funciones',
                LANG_PROCEDURES_RETURN: 'devuelve',
                LANG_PROCEDURES_RETURN_TOOLTIP: 'Devuelve un valor',
                LANG_PROCEDURES_CALL_WITHOUT_DEFINITION: 'Llamada a una función sin definición previa.',
                LANG_PROCEDURES_DEFNORETURN_HELPURL: '',
                LANG_PROCEDURES_DEFNORETURN_PROCEDURE: 'func_sin_retorno',
                LANG_PROCEDURES_DEFNORETURN_DO: 'ejecutar',
                LANG_PROCEDURES_DEFNORETURN_TOOLTIP: 'Función que se ejecutará sin devolver nada.',
                LANG_PROCEDURES_DEFRETURN_HELPURL: '',
                LANG_PROCEDURES_DEFRETURN_PROCEDURE: 'func_con_retorno',
                LANG_PROCEDURES_DEFRETURN_DO: 'ejecutar',
                LANG_PROCEDURES_DEFRETURN_RETURN: 'devuelve',
                LANG_PROCEDURES_DEFRETURN_TOOLTIP: 'Función con valor de retorno.',
                LANG_PROCEDURES_DEF_DUPLICATE_WARNING: 'Atención: Esta función tiene parámetros duplicados.',
                LANG_PROCEDURES_CALLNORETURN_HELPURL: '',
                LANG_PROCEDURES_CALLNORETURN_CALL: 'ejecutar',
                LANG_PROCEDURES_CALLNORETURN_PROCEDURE: 'func_sin_retorno',
                LANG_PROCEDURES_CALLNORETURN_TOOLTIP: 'Ejecuta esta función.',
                LANG_PROCEDURES_CALLRETURN_HELPURL: '',
                LANG_PROCEDURES_CALLRETURN_CALL: 'ejecutar',
                LANG_PROCEDURES_CALLRETURN_PROCEDURE: 'func_con_retorno',
                LANG_PROCEDURES_CALLRETURN_TOOLTIP: 'Ejecuta esta función que tiene valor de retorno.',
                LANG_PROCEDURES_MUTATORCONTAINER_Field: 'parámetros',
                LANG_PROCEDURES_MUTATORARG_Field: 'variable:',
                LANG_PROCEDURES_HIGHLIGHT_DEF: 'Subraya la función',
                LANG_PROCEDURES_IFRETURN_TOOLTIP: 'Si la condición es verdadera, la función devolverá este valor.',
                LANG_PROCEDURES_IFRETURN_WARNING: 'Atención: Este bloque sólo puede ser usado dentro de una función que tenga valor de retorno.',
                //variables blocks :
                LANG_CATEGORY_VARIABLES: 'Variables',
                LANG_VARIABLES_CALL_WITHOUT_DEFINITION: 'Esta variable no está declarada.',
                LANG_VARIABLES_GLOBAL: 'Declarar variable GLOBAL',
                LANG_VARIABLES_GLOBAL_TYPE: 'de tipo ',
                LANG_VARIABLES_GLOBAL_EQUALS: '=',
                LANG_VARIABLES_GLOBAL_TOOLTIP: 'Declara y define una variable GLOBAL de tipo entero (int) o texto (String).',
                LANG_VARIABLES_LOCAL: 'Declarar variable',
                LANG_VARIABLES_LOCAL_TYPE: 'de tipo ',
                LANG_VARIABLES_LOCAL_EQUALS: '=',
                LANG_VARIABLES_LOCAL_TOOLTIP: 'Declara y define una variable LOCAL de tipo entero (int) o texto (String).',
                LANG_VARIABLES_DEFINE: 'Definir variable ',
                LANG_VARIABLES_DEFINE_AS: 'como',
                LANG_VARIABLES_DEFINE_TOOLTIP: 'Definir el valor de una variable.',
                LANG_VARIABLES_SET: 'Var',
                LANG_VARIABLES_SET_AS: '=',
                LANG_VARIABLES_SET_TOOLTIP: 'Cambia el valor de una variable.',
                LANG_VARIABLES_GET: 'Var',
                LANG_VARIABLES_GET_TOOLTIP: 'Devuelve el valor de una variable',
                LANG_VARIABLES_PIN_ANALOG: 'Pin analógico',
                LANG_VARIABLES_PIN_DIGITAL: 'Pin digital',
                LANG_VARIABLES_PIN_DIGITAL0: 'CUIDADO: el pin digital 0 (pin Rx) es usado para escribir un programa en la placa desde el ordenador. Usarlo para conectar componentes puede dar problemas al programarla.',
                LANG_VARIABLES_PIN_TOOLTIP: 'Selecciona el PIN deseado.',
                LANG_VARIABLES_TYPE_BYTE: 'Octeto',
                LANG_VARIABLES_TYPE_FLOAT: 'Decimal',
                LANG_VARIABLES_TYPE_INTEGER: 'Entero',
                LANG_VARIABLES_TYPE_INTEGER_LONG: 'Entero largo',
                LANG_VARIABLES_TYPE_INTEGER_ULONG: 'Entero largo sin signo',
                LANG_VARIABLES_TYPE_STRING: 'Texto',
                LANG_VARIABLES_TYPE_CHAR: 'Carácter',
                LANG_VARIABLES_TYPE_BOOLEAN: 'Lógico',
                LANG_VARIABLES_VOLATILE_GLOBAL: 'Declarar variable VOLATIL GLOBAL ',
                LANG_VARIABLES_VOLATILE_GLOBAL_TYPE: 'de tipo ',
                LANG_VARIABLES_VOLATILE_GLOBAL_EQUALS: '=',
                LANG_VARIABLES_VOLATILE_GLOBAL_TOOLTIP: 'Declara y define una variable VOLATIL GLOBAL de tipo entero (int) o texto (String) usada en funciones de manejo de interrupciones.',
                //sound blocks (zum):
                LANG_CATEGORY_ZUM: 'Sonido',
                LANG_ZUM_PIEZO_BUZZER: 'Zumbador',
                LANG_ZUM_PIEZO_BUZZER_PIN: 'PIN#',
                LANG_ZUM_PIEZO_BUZZER_TONE: 'TONO',
                LANG_ZUM_PIEZO_BUZZER_DO: 'DO',
                LANG_ZUM_PIEZO_BUZZER_RE: 'RE',
                LANG_ZUM_PIEZO_BUZZER_MI: 'MI',
                LANG_ZUM_PIEZO_BUZZER_FA: 'FA',
                LANG_ZUM_PIEZO_BUZZER_SOL: 'SOL',
                LANG_ZUM_PIEZO_BUZZER_LA: 'LA',
                LANG_ZUM_PIEZO_BUZZER_SI: 'SI',
                LANG_ZUM_PIEZO_BUZZER_DURATION: 'Duración [ms]',
                LANG_ZUM_PIEZO_BUZZER_TOOLTIP: 'Zumbador piezoeléctrico',
                LANG_ZUM_PIEZO_BUZZERAV: 'Zumbador avanzado',
                LANG_ZUM_PIEZO_BUZZERAV_PIN: 'PIN#',
                LANG_ZUM_PIEZO_BUZZERAV_TONE: 'TONO',
                LANG_ZUM_PIEZO_BUZZERAV_DURATION: 'Duración [ms]',
                LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP: 'Zumbador piezoeléctrico avanzado.',
                LANG_ZUM_DHT11_VALUE: 'Obtener',
                LANG_ZUM_DHT11_VALUE1: 'Temperatura',
                LANG_ZUM_DHT11_VALUE2: 'Humedad',
                LANG_ZUM_DHT11_PIN: 'PIN',
                LANG_ZUM_DHT11_TOOLTIP: 'Obtiene el valor de temperatura o humedad de un sensor DHT11, DHT21 o DHT22.',
                //motor blocks (servo and stepper):
                LANG_CATEGORY_MOTOR: 'Motores',
                LANG_MOTOR_SERVO_CONT: 'Servo rotación continua',
                LANG_MOTOR_SERVO_CONT_PIN: 'PIN#',
                LANG_MOTOR_SERVO_CONT_ROT: 'ROT',
                LANG_MOTOR_SERVO_CONT_TURN_CLOCKWISE: 'GIRAR EN SENTIDO HORARIO',
                LANG_MOTOR_SERVO_CONT_TURN_COUNTERCLOCKWISE: 'GIRAR EN SENTIDO ANTIHORARIO',
                LANG_MOTOR_SERVO_CONT_STOPPED: 'DETENER',
                LANG_MOTOR_SERVO_CONT_DELAY: 'Pausa [ms]',
                LANG_MOTOR_SERVO_CONT_TOOLTIP: 'Servo de rotación continua.',
                LANG_MOTOR_SERVO_MOVE: 'Servo',
                LANG_MOTOR_SERVO_MOVE_PIN: 'PIN#',
                LANG_MOTOR_SERVO_MOVE_DEGREES: 'Grados (0~180)',
                LANG_MOTOR_SERVO_MOVE_DELAY: 'Pausa [ms]',
                LANG_MOTOR_SERVO_MOVE_TOOLTIP: 'Mover el servo entre 0 y 180 grados.',
                LANG_MOTOR_SERVO_WARNING: 'No puedes asignar una variable al pin del servo',
                LANG_MOTOR_STEPPER_MOVE: 'Motor a pasos',
                LANG_MOTOR_STEPPER_MOVE_SPR: 'Pasos por vuelta',
                LANG_MOTOR_STEPPER_MOVE_PINS: '4 pins?',
                LANG_MOTOR_STEPPER_MOVE_PIN1: 'Pin 1',
                LANG_MOTOR_STEPPER_MOVE_PIN2: 'Pin 2',
                LANG_MOTOR_STEPPER_MOVE_PIN3: 'Pin 3',
                LANG_MOTOR_STEPPER_MOVE_PIN4: 'Pin 4',
                LANG_MOTOR_STEPPER_MOVE_SETSPEED: 'Establecer velocidad a (rpm)',
                LANG_MOTOR_STEPPER_MOVE_STEP: 'Mover motor (pasos)',
                LANG_MOTOR_STEPPER_MOVE_TOOLTIP: 'Bloque para mover un motor los pasos indicados. Un valor de pasos positivo lo mueve en un sentido, negativo en el otro.',
                LANG_MOTOR_PCA9685_DEF: 'PCA9685',
                LANG_MOTOR_PCA9685_DEF_SERVO: 'Servo',
                LANG_MOTOR_PCA9685_DEF_ADDRESS: 'Dirección del coponente',
                LANG_MOTOR_PCA9685_DEF_TOOLTIP: 'Define una placa PCA9685 conectada a Arduino por I2C.',
                LANG_MOTOR_PCA9685_SET_PWM: 'PCA9685 Mover servo',
                LANG_MOTOR_PCA9685_SET_PWM_ANGLE: 'el ángulo',
                LANG_MOTOR_PCA9685_SET_PWM_TOOLTIP: 'Mueve el servo conectado a un PCA9685 el ángulo indicado en grados.',
                //interrupt blocks :
                LANG_CATEGORY_INTERRUPTS: 'Interrupciones',
                LANG_INTERRUPTS_STATE: 'Establece estado de las interrupciones a ',
                LANG_INTERRUPTS_STATE_ENABLED: 'HABILITADO',
                LANG_INTERRUPTS_STATE_DISABLED: 'DESHABILITADO',
                LANG_INTERRUPTS_STATE_TOOLTIP: 'Habilita o deshabilita las interrupciones. Algunas funciones no podrán usarse mientras que las interrupciones estén deshabilitadas. Utilizar solo para secciones críticas del programa.',
                LANG_INTERRUPTS_ATTACH: 'Asociar la función ',
                LANG_INTERRUPTS_ATTACH_PARAM2: 'en el modo ',
                LANG_INTERRUPTS_ATTACH_PARAM3: 'con la interrupción del pin digital',
                LANG_INTERRUPTS_ATTACH_LOW: 'BAJO',
                LANG_INTERRUPTS_ATTACH_CHANGE: 'CAMBIO',
                LANG_INTERRUPTS_ATTACH_RISING: 'SUBIENDO',
                LANG_INTERRUPTS_ATTACH_FALLING: 'BAJANDO',
                LANG_INTERRUPTS_ATTACH_PROCEDURE: 'func_sin_retorno',
                LANG_INTERRUPTS_ATTACH_TOOLTIP: 'Especifica la función que se va a ejecutar cuando se produzca la interrupción en el pin especificado.',
                LANG_INTERRUPTS_DETACH: 'Desasociar la interrupción del pin digital',
                LANG_INTERRUPTS_DETACH_TOOLTIP: 'Desactiva la asociación de la interrupción especificada en el pin. Cuando se active ese pin, ya no se ejecutará la función asociada.',
                LANG_WIFI_CONNECT: 'Wifi:',
                LANG_WIFI_CONNECT_STATION: 'conectar',
                LANG_WIFI_CONNECT_SOFTAP: 'crear red',
                LANG_WIFI_CONNECT_SSID: 'SSID',
                LANG_WIFI_CONNECT_PASSWORD: 'contraseña',
                LANG_WIFI_CONNECT_CHANNEL: 'canal',
                LANG_WIFI_CONNECT_RX_PIN: 'pin Rx',
                LANG_WIFI_CONNECT_TX_PIN: 'pin Tx',
                LANG_WIFI_CONNECT_BAUD: 'velocidad del puerto',
                LANG_WIFI_CONNECT_TOOLTIP: 'Conecta o crea una wifi usando el adaptador ESP8266, y devuelve verdadero en caso de éxito.',
                LANG_WIFI_DISCONNECT: 'Wifi:desconectar',
                LANG_WIFI_DISCONNECT_TOOLTIP: 'Desconecta de la red wifi actual.',
                LANG_WIFI_CLIENT: 'Wifi:conectar con servidor',
                LANG_WIFI_CLIENT_IP: 'Dirección IP',
                LANG_WIFI_CLIENT_PORT: 'Puerto',
                LANG_WIFI_CLIENT_TOOLTIP: 'Conecta con el servidor TCP especificado.',
                LANG_WIFI_SERVER: 'Wifi:iniciar el servidor',
                LANG_WIFI_SERVER_PORT: 'Puerto',
                LANG_WIFI_SERVER_TOOLTIP: 'Crea un servidor TCP para aceptar conexiones de clientes.',
                LANG_WIFI_GETIP: 'Wifi:obtener IP asignada',
                LANG_WIFI_GETIP_TOOLTIP: 'Devuelve la dirección IP asignada al adaptador.',
                LANG_WIFI_SEND_SERVER: 'Wifi:enviar al servidor',
                LANG_WIFI_SEND_SERVER_DATA: 'Texto',
                LANG_WIFI_SEND_SERVER_TOOLTIP: 'Envía el texto al servidor TCP.',
                LANG_WIFI_SEND_CLIENT: 'Wifi:enviar al cliente',
                LANG_WIFI_SEND_CLIENT_ID: 'ID',
                LANG_WIFI_SEND_CLIENT_DATA: 'Texto',
                LANG_WIFI_SEND_CLIENT_TOOLTIP: 'Envía la cadena de texto al cliente especificado.',
                LANG_WIFI_RECEIVE_CLIENT: 'Wifi:recibir del cliente',
                LANG_WIFI_RECEIVE_CLIENT_TOOLTIP: 'Recibe una cadena de texto del cliente que comienza por su identificador numérico y el símbolo de dos puntos. Si se alcanza el tiempo máximo indicado y no llega nada, se devuelve la cadena vacía.',
                LANG_WIFI_RECEIVE_SERVER: 'Wifi:recibir del servidor',
                LANG_WIFI_RECEIVE_SERVER_TIMEOUT: 'Tiempo de espera',
                LANG_WIFI_RECEIVE_SERVER_TOOLTIP: 'Recibe del servidor TCP una cadena de texto o una cadena vacía si se alcanza el tiempo máximo indicado.',
                LANG_WIFI_CLOSE_SERVER: 'Wifi:parar el servidor',
                LANG_WIFI_CLOSE_SERVER_TOOLTIP: 'Finaliza el servidor TCP.',
                LANG_WIFI_CLOSE_CLIENT: 'Wifi:terminar la conexión',
                LANG_WIFI_CLOSE_CLIENT_TOOLTIP: 'Finaliza la conexión con el servidor TCP.',
                //arrays blocks :
                LANG_ARRAYS_GLOBAL: 'Declarar vector GLOBAL',
                LANG_ARRAYS_GLOBAL_TYPE: 'de tipo ',
                LANG_ARRAYS_GLOBAL_DIMENSION: 'con',
                LANG_ARRAYS_GLOBAL_DIMENSION2: 'elementos',
                LANG_ARRAYS_GLOBAL_TOOLTIP: 'Declara y define un vector GLOBAL del tipo y con los elementos especificados.'
            };
            // Node
            if (typeof module !== 'undefined' && module.exports) {
                module.exports = language;
            }
            // Browser
            // if (typeof window !== 'undefined' && this.RoboBlocks && this.RoboBlocks.locales.add) {
            //     this.RoboBlocks.locales.add('es', language);
            if (typeof window !== 'undefined' && RoboBlocks && RoboBlocks.locales.add) {
                RoboBlocks.locales.add('es-ES', language);
            }
        }());

        // Source: lang/eu-ES.js
        (function() {
            var language = {
                //random :
                BLOCKLY_MSG_DUPLICATE_BLOCK: 'Bikoiztu',
                BLOCKLY_MSG_REMOVE_COMMENT: 'Iruzkina Ezabatu',
                BLOCKLY_MSG_ADD_COMMENT: 'Iruzkina Gehitu',
                BLOCKLY_MSG_EXTERNAL_INPUTS: 'Kanpoko Sarrerak',
                BLOCKLY_MSG_INLINE_INPUTS: 'Barruko Sarrerak',
                BLOCKLY_MSG_DELETE_BLOCK: 'Blokea Ezabatu',
                BLOCKLY_MSG_DELETE_X_BLOCKS: 'Ezabatu %1 bloke',
                BLOCKLY_MSG_COLLAPSE_BLOCK: 'Blokea Tolestu',
                BLOCKLY_MSG_EXPAND_BLOCK: 'Blokea Zabaldu',
                BLOCKLY_MSG_DISABLE_BLOCK: 'Ezgaitu Blokea',
                BLOCKLY_MSG_ENABLE_BLOCK: 'Gaitu Blokea',
                BLOCKLY_MSG_HELP: 'Laguntza',
                BLOCKLY_MSG_COLLAPSE_ALL: 'Blokeak Tolestu',
                BLOCKLY_MSG_EXPAND_ALL: 'Blokeak Zabaldu',
                LANG_VARIABLES_SET_ITEM: 'elementu',
                LANG_RESERVED_WORDS: 'Erreserbatutako hitza: izen hau ez dago baimenduta..',
                LANG_CHAR_LENGTH: 'A character must have length 0 or 1.', //to translate
                //logic blocks:
                LANG_CATEGORY_LOGIC: 'Logika',
                LANG_LOGIC_OPERATION_AND: 'eta',
                LANG_LOGIC_OPERATION_OR: 'edo',
                LANG_LOGIC_COMPARE_TOOLTIP_EQ: 'Bi sarrerak berdinak diren alderatzen du.',
                LANG_LOGIC_COMPARE_TOOLTIP_NEQ: 'Bi sarrera elkaren artean desberdinak diren alderatzen du.',
                LANG_LOGIC_COMPARE_TOOLTIP_LT: 'Lehenengo sarrera bigarrena baino txikiagoa den alderatzen du.',
                LANG_LOGIC_COMPARE_TOOLTIP_LTE: 'Lehenengo sarrera bigarrena baino txikiagoa edo berdina den alderatzen du.',
                LANG_LOGIC_COMPARE_TOOLTIP_GT: 'Lehenengo sarrera bigarrena baino handiagoa den alderatzen du.',
                LANG_LOGIC_COMPARE_TOOLTIP_GTE: 'Lehenengo sarrera bigarrena baino handiagoa edo berdina den alderatzen du.',
                LANG_LOGIC_OPERATION_TOOLTIP_AND: 'Bi sarrerak egiazkoak diren alderatzen du.',
                LANG_LOGIC_OPERATION_TOOLTIP_OR: 'Sarreretako baten bat egiazkoa den alderatzen du.',
                LANG_LOGIC_NEGATE_INPUT_NOT: 'ez',
                LANG_LOGIC_NEGATE_TOOLTIP: 'Sarreraren kontrakoa bueltatzen du.',
                LANG_LOGIC_NEGATE_HELPURL: '',
                LANG_LOGIC_BOOLEAN_TRUE: 'Egiazkoa',
                LANG_LOGIC_BOOLEAN_FALSE: 'faltsua',
                LANG_LOGIC_BOOLEAN_TOOLTIP: 'Egiazkoa edo faltsua bueltatzen du aukeratutakoaren arabera.',
                //communication blocks:
                LANG_CATEGORY_COMMUNICATION: 'Komunikazioa',
                LANG_BQ_BLUETOOTH_RECEIVE: 'Bluetooth: Jaso ',
                LANG_BQ_BLUETOOTH_RECEIVE_BLUETOOTH: 'Bluetooth',
                LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP: 'Bluetooth moduluak jasotako datuak bueltatzen ditu.',
                LANG_BQ_BLUETOOTH_SEND: 'Bluetooth: Bidali',
                LANG_BQ_BLUETOOTH_SEND_SEND: 'Datuak bidali',
                LANG_BQ_BLUETOOTH_SEND_TOOLTIP: 'Sarreratik datuak hartu eta bluetooth modulua erabiliz bidaltzen ditu',
                LANG_BQ_BLUETOOTH_DEF: 'Bluetooth',
                LANG_BQ_BLUETOOTH_DEF_BAUD_RATE: 'Baudio-tasa',
                LANG_BQ_BLUETOOTH_DEF_PIN1: 'RX',
                LANG_BQ_BLUETOOTH_DEF_PIN2: 'TX',
                LANG_BQ_BLUETOOTH_DEF_NAME: 'Izena',
                LANG_BQ_BLUETOOTH_DEF_PINCODE: 'PIN kodea',
                LANG_BQ_BLUETOOTH_DEF_RECEIVE: 'Jaso',
                LANG_BQ_BLUETOOTH_DEF_SEND: 'Bidali',
                LANG_BQ_BLUETOOTH_DEF_TOOLTIP: 'Bluetooth moduluaren definizioa',
                LANG_ADVANCED_BT_SERIAL_AVAILABLE: 'Bluetooth: Serieko Ataka erabilgarri',
                LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP: 'Bluetooth modulua erabilgarri dagoen edo ez egiaztatu',
                LANG_ADVANCED_SERIAL_AVAILABLE: 'Serieko Ataka Erabilgarri',
                LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP: 'Serieko Ataka erabilgarri dagoen edo ez egiaztatu',
                LANG_ADVANCED_SERIAL_PARSEINT: 'Serial Read Integer', // To translate
                LANG_ADVANCED_SERIAL_PARSEINT_TOOLTIP: 'First valid (long) integer number from the serial buffer', // To translate
                LANG_ADVANCED_SERIAL_PRINT: 'Serieko Atakatik inprimatu',
                LANG_ADVANCED_SERIAL_PRINT_TOOLTIP: 'Datuak ASCII testu bezala inprimatu.',
                LANG_ADVANCED_SERIAL_PRINTLN: 'Serieko Atakatik inprimatu lerro-jauziarekin',
                LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP: 'Serieko Atakatik inprimatu lerro-jauziarekin eta orga-itzulerarekin.',
                LANG_ADVANCED_SERIAL_PRINT_FORMAT: 'Prints value with format', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_1: 'Binary', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_2: 'Octal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_3: 'Decimal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_4: 'Hexadecimal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_5: 'Without decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_6: 'One decimal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_7: 'Two decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_8: 'Three decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_9: 'Four decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_TOOLTIP: 'Prints value with specified format', //to translate
                LANG_ADVANCED_SERIAL_PRINTLN_FORMAT: 'Send value with format and CR', //To translate
                LANG_ADVANCED_SERIAL_PRINTLN_FORMAT_TOOLTIP: 'Send a number to serial port with specified format and carriage return (CR).', //To translate
                LANG_ADVANCED_SERIAL_READ: 'Serieko Atakatik irakurri',
                LANG_ADVANCED_SERIAL_READ_TOOLTIP: 'Serieko Atakatik jasotzen diren datuak ASCII testu bezala irakurtzen ditu.',
                LANG_ADVANCED_SERIAL_READSTRING: 'Serieko Atakatik irakurri',
                LANG_ADVANCED_SERIAL_READSTRING_TOOLTIP: 'Serieko Atakatik jasotzen diren datuak ASCII testu bezala irakurtzen ditu.',
                //Sensor blocks:
                LANG_CATEGORY_SENSOR: 'Sentsore',
                LANG_BQ_BAT: 'BAT - Ultrasoinuen sentsorea',
                LANG_BQ_BAT_RED_PIN: 'ECHO PIN#',
                LANG_BQ_BAT_BLUE_PIN: 'TRIGGER PIN#',
                LANG_BQ_BAT_TOOLTIP: 'Sentsoreak neurtutako distantzia bueltatzen du.',
                LANG_IR_READ: 'Reads from infrared receiver', //to translate
                LANG_IR_READ_PIN: 'connected to PIN#', //to translate
                LANG_IR_READ_TOOLTIP: 'Reads the value received from the infrared receiver', //to translate
                //LCD blocks:
                LANG_CATEGORY_LCD: 'LCD blokeak',
                LANG_LCD_DEF: 'LCD (2x16)',
                LANG_LCD_DEF_CONNECTION: 'Connection type', //to translate
                LANG_LCD_DEF_CONNECTION_PARALLEL: 'Parallel (6 pins)', //to translate
                LANG_LCD_DEF_CONNECTION_I2C: 'I2C (4 wires)', //to translate
                LANG_LCD_DEF_ADDRESS: 'Address of the component', //to translate
                LANG_LCD_DEF_PIN_1: 'RS Pin', //to translate
                LANG_LCD_DEF_PIN_2: 'Enable Pin', //to translate
                LANG_LCD_DEF_PIN_3: 'Data4 Pin', //to translate
                LANG_LCD_DEF_PIN_4: 'Data5 Pin', //to translate
                LANG_LCD_DEF_PIN_5: 'Data6 Pin', //to translate
                LANG_LCD_DEF_PIN_6: 'Data7 Pin', //to translate
                LANG_LCD_DEF_TOOLTIP: 'LCDa definitu',
                LANG_LCD_ADVANCED_DEF: 'Advanced LCD',
                LANG_LCD_ADVANCED_ROWS: 'Rows',
                LANG_LCD_ADVANCED_COLUMNS: 'Columns',
                LANG_LCD_DEF_ADVANCED_TOOLTIP: 'Block that defines the advanced LCD',
                LANG_LCD_SETBACKLIGHT: 'LCD: atzeko iluminazioa doitu',
                LANG_LCD_SETBACKLIGHT_CLOSE: '',
                LANG_LCD_SETBACKLIGHT_TOOLTIP: 'LCD pantailaren atzeko iluminazioa doitu',
                LANG_LCD_PRINT: 'LCD: Inprimatu ',
                LANG_LCD_PRINT_POSITION: 'Testuaren posizioa finkatu?',
                LANG_LCD_PRINT_TOOLTIP: 'String bat zehaztutako posizioan edo erabilgarri dagoen hurrengoan inprimatzen du LCD pantailan.',
                LANG_LCD_CLEAR: 'LCD ezabatu',
                LANG_LCD_CLEAR_TOOLTIP: 'LCD: Ezabatu',
                LANG_LCD_HOME: 'LCD Go home', //to translate
                LANG_LCD_HOME_TOOLTIP: 'LCD: Positions the cursor in the upper-left corner of the screen', //to translate
                LANG_LCD_DISPLAY: 'LCD Show content', //to translate
                LANG_LCD_DISPLAY_TOOLTIP: 'LCD: Turns on the LCD display and restore the text that was on the display', //to translate
                LANG_LCD_NODISPLAY: 'LCD Hide content', //to translate
                LANG_LCD_NODISPLAY_TOOLTIP: 'LCD: Turns off the LCD display, without losing the text currently shown on it', //to translate
                LANG_LCD_SCROLLDISPLAYLEFT: 'LCD Scrolls to the left', //to translate
                LANG_LCD_SCROLLDISPLAYLEFT_TOOLTIP: 'LCD: Scrolls the contents of the display one space to the left', //to translate
                LANG_LCD_SCROLLDISPLAYRIGHT: 'LCD Scrolls to the right', //to translate
                LANG_LCD_SCROLLDISPLAYRIGHT_TOOLTIP: 'LCD: Scrolls the contents of the display one space to the right', //to translate
                //controls blocks :
                LANG_CATEGORY_CONTROLS: 'Kontrola',
                LANG_CONTROLS_BASE_DELAY_WAIT: 'Itxaron [ms]',
                LANG_CONTROLS_BASE_DELAY_TOOLTIP: 'Milisgundotan (ms) zehaztutako denbora itxaroten du',
                LANG_CONTROLS_BASE_MILLIS: 'Time from start (ms)', // To translate
                LANG_CONTROLS_BASE_MILLIS_TOOLTIP: 'Number of milliseconds since the program started (long integer)', // To translate
                LANG_CONTROLS_BASE_DELAY_MICROSECONDS: 'Wait [us]', //To translate
                LANG_CONTROLS_BASE_DELAY_MICROSECONDS_TOOLTIP: 'Waits the specified time in microseconds (us)', //To translate
                LANG_CONTROLS_BASE_MICROS: 'Time from start (us)', //To translate
                LANG_CONTROLS_BASE_MICROS_TOOLTIP: 'Number of microseconds since the program started (long integer)', //To translate
                LANG_CONTROLS_DOWHILE_OPERATOR_DO: 'Do',
                LANG_CONTROLS_DOWHILE_OPERATOR_WHILE: 'while',
                LANG_CONTROLS_DOWHILE_TOOLTIP: 'While the condition is true, continue doing the statements.',
                LANG_CONTROLS_EXECUTE: 'Execute',
                LANG_CONTROLS_EXECUTE_TOOLTIP: 'Executes C/C++ code. Use with caution, as it can easily break the program and prevent it from compiling.',
                LANG_CONTROLS_IF_TOOLTIP_1: 'Baldintza egiazkoa bada, bloke barruan dauden ekintzak exekutatzen ditu.',
                LANG_CONTROLS_IF_TOOLTIP_2: 'Baldintza egiazkoa bada, komandoen lehenengo blokea exekutatzen da. Bestela, bigarren komando blokea exekutatzen da.',
                LANG_CONTROLS_IF_TOOLTIP_3: 'Lehenengo balioa egiazkoa bada, lehenengo komando blokea exekutatzen da. Bestela, bigarren balioa egizkoa bada, bigarren komando blokea exekutatzen da.',
                LANG_CONTROLS_IF_TOOLTIP_4: 'Lehenengo balioa egiazkoa bada, lehenengo komando blokea exekutatzen da. Bestela, bigarren balioa egizkoa bada, bigarren komando blokea exekutatzen da. Bietatik bat ere ez bada egiazkoa, komandoen azkeneko blokea exekutatzen da.',
                LANG_CONTROLS_IF_MSG_IF: 'Baldin',
                LANG_CONTROLS_IF_MSG_ELSEIF: 'aldiz, baldin',
                LANG_CONTROLS_IF_MSG_ELSE: 'bestela',
                LANG_CONTROLS_IF_MSG_THEN: 'exekutatu',
                LANG_CONTROLS_IF_IF_Field_IF: 'baldin',
                LANG_CONTROLS_IF_IF_TOOLTIP: '"baldin" bloke hau berrezartzeko atalak gehitu, ezabatu edo berrantolatu.',
                LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF: 'aldiz, baldin',
                LANG_CONTROLS_IF_ELSEIF_TOOLTIP: '"baldin" blokeari baldintza bat gehitu.',
                LANG_CONTROLS_IF_ELSE_Field_ELSE: 'bestela',
                LANG_CONTROLS_IF_ELSE_TOOLTIP: 'Gehitu azken baldintza bat "baldin" blokeari gainontzeko aukerak atzitzeko.',
                LANG_CONTROLS_FOR_FROM_WARNING: 'It is not possible to set a variable as the initial value of the for block.', //to translate
                LANG_CONTROLS_FOR_TO_WARNING: 'It is not possible to set a variable as the final value of the for block.', //to translate
                LANG_CONTROLS_FOR_INCREMENT_WARNING: 'It is not possible to set a variable as the increment value of the for block', //to translate
                LANG_CONTROLS_FOR_INPUT_WITH: 'Zenbatu honekin:',
                LANG_CONTROLS_FOR_INPUT_VAR: 'x',
                LANG_CONTROLS_FOR_INPUT_FROM: 'hemendik',
                LANG_CONTROLS_FOR_INPUT_TO: 'honaino',
                LANG_CONTROLS_FOR_INPUT_INCREMENT: 'increment', //to translate
                LANG_CONTROLS_FOR_INPUT_DO: 'exekutatu',
                LANG_CONTROLS_FOR_TOOLTIP: 'Hasierako zenbaki batetik amaierako zenbaki baterarte zenbatu. Kontua batean handitzen den bakoitzean, aldagaiak balio hori hartu eta akzioak exekutatzen dira.',
                LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE: 'bitartean',
                LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL: 'honaino',
                LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE: 'Baldintza egiazkoa den bitartean, aginduak exekutatu.',
                LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL: 'Baldintza faltsua den bitartean, aginduak exekutatu.',
                LANG_CONTROLS_REPEAT_TITLE_REPEAT: 'Errepikatu',
                LANG_CONTROLS_REPEAT_TITLE_TIMES: 'aldiz',
                LANG_CONTROLS_REPEAT_INPUT_DO: 'exekutatu',
                LANG_CONTROLS_REPEAT_TOOLTIP: 'Aginduak exekutatu aldi kopuru jakin bat.',
                LANG_CONTROLS_FLOW_STATEMENTS_HELPURL: '',
                LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP: 'buklea',
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: 'eten',
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: 'hurrengo iterazioarekin jarraitu',
                LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK: 'Agindu hau duen buklea eten.',
                LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE: 'Iterazio honetako aginduak saltatu eta hurrengo iterazioarekin jarraitu.',
                LANG_CONTROLS_FLOW_STATEMENTS_WARNING: 'Adi: bloke hau bukle baten barruan soilik erabil daiteke.',
                LANG_CONTROLS_SWITCH: 'Aldatu ',
                LANG_CONTROLS_SWITCH_TOOLTIP_1: 'Betetzen den kasuaren ekintzak exekutatu.',
                LANG_CONTROLS_SWITCH_TOOLTIP_2: 'Betetzen den kasuaren ekintzak exekutatu.',
                LANG_CONTROLS_SWITCH_TOOLTIP_3: 'Betetzen den kasuaren ekintzak exekutatu.',
                LANG_CONTROLS_SWITCH_TOOLTIP_4: 'Betetzen den kasuaren ekintzak exekutatu.',
                LANG_CONTROLS_SWITCH_SWITCH_TOOLTIP: 'Kasu desberdinak betetzen diren banan-bana alderatzen ditu bloke honek.',
                LANG_CONTROLS_SWITCH_CASE_TOOLTIP: 'kasu ',
                LANG_CONTROLS_SWITCH_DEFAULT_TOOLTIP: '"default" blokeak aurreko kasuetatik bat ere ez bada bete exekutatu behar den ekintza zehazten du.',
                LANG_CONTROLS_SETUP_LOOP_SETUP_TITLE: 'Setup',
                LANG_CONTROLS_SETUP_LOOP_LOOP_TITLE: 'Loop',
                LANG_CONTROLS_SETUP_LOOP_TOOLTIP: 'Blocks in setup will be executed at start, and blocks in Loop will be repeated continously.',
                LANG_CONTROLS_SWITCH_IS: 'kasua: ',
                LANG_CONTROLS_SWITCH_CASE: 'kasua ',
                LANG_CONTROLS_SWITCH_COLON: ': ',
                LANG_CONTROLS_SWITCH_DEFAULT: 'default',
                LANG_CONTROLS_SWITCH_DO: 'exekutatu',
                //math blocks :
                LANG_CATEGORY_MATH: 'Matematika',
                LANG_MATH_ADVANCED_MAP_MAP: 'Mapeatu ',
                LANG_MATH_ADVANCED_MAP_FROM: 'Hemendik [',
                LANG_MATH_ADVANCED_MAP_HYPHEN: '-',
                LANG_MATH_ADVANCED_MAP_BRACKET: ']',
                LANG_MATH_ADVANCED_MAP_TO: 'honaino [',
                LANG_MATH_ADVANCED_MAP_TOOLTIP: 'Hasierako balio tarte batetik tarte desberdin baterainoko sarrerak mapeatu ',
                LANG_MATH_NUMBER_TOOLTIP: 'Zenbaki osoa',
                LANG_MATH_ARRAY_ARRAY3: '[3]',
                LANG_MATH_ARRAY_BRACKET3: '{',
                LANG_MATH_ARRAY_BRACKET4: '}',
                LANG_MATH_ARRAY_COMMA: ',',
                LANG_MATH_ARRAY_TOOLTIP: 'Hiru zenbaki osoko bektorea',
                LANG_ARRAY_GET_BRACKET1: '[',
                LANG_ARRAY_GET_BRACKET2: ']',
                LANG_ARRAY_GET_TOOLTIP: 'Bektorearen elementu jakin baten balioa bueltatzen du.',
                LANG_MATH_MODULO_TOOLTIP: 'Bi sarreren zatiduraren hondarra bueltatzen du.',
                LANG_MATH_BASE_MAP: 'Mapeatu ',
                LANG_MATH_BASE_MAP_VALUE_TO: 'Hauen arteko balioa [0-',
                LANG_MATH_BASE_MAP_BRACKET: ']',
                LANG_MATH_BASE_MAP_TOOLTIP: '[0-1023] tartetik beste balio tarte batera mapeatzen du sarrera.',
                LANG_MATH_SINGLE_OP_ROOT: 'erro karratua',
                LANG_MATH_SINGLE_OP_ABSOLUTE: 'balio absolutua',
                LANG_MATH_SINGLE_TOOLTIP_ROOT: 'Zenbaki baten erodura karratuaren balioa bueltatzen du.',
                LANG_MATH_SINGLE_TOOLTIP_ABS: 'Zenbaki baten balio absolutua bueltatzen du.',
                LANG_MATH_SINGLE_TOOLTIP_NEG: 'Zeinuz aldatutako zenbakia bueltatzen du.',
                LANG_MATH_SINGLE_TOOLTIP_LN: 'Zenbaki baten logaritmo nepertarra bueltatzen du.',
                LANG_MATH_SINGLE_TOOLTIP_LOG10: 'Zenbaki baten 10eko oinarriko logaritmoa bueltatzen du. ',
                LANG_MATH_SINGLE_TOOLTIP_EXP: 'Zenbaki baten berredura bueltatzen du.',
                LANG_MATH_SINGLE_TOOLTIP_POW10: '10eko berredura bueltatzen du.',
                LANG_MATH_MIN: 'Minimum value between', //To translate
                LANG_MATH_MIN_PARAM2: 'and', //To translate
                LANG_MATH_MIN_TOOLTIP: 'Returns the minimum value of the inputs.', //To translate
                LANG_MATH_MAX: 'Maximum value between', //To translate
                LANG_MATH_MAX_PARAM2: 'and', //To translate
                LANG_MATH_MAX_TOOLTIP: 'Returns the maximum value of the inputs.', //To translate
                LANG_MATH_POW: 'Value of', //To translate
                LANG_MATH_POW_PARAM2: 'to the power of', //To translate
                LANG_MATH_POW_TOOLTIP: 'Returns the value of the first input to the power of the second.', //To translate
                //text blocks:
                LANG_CATEGORY_TEXT: 'Testua',
                LANG_TEXT_TEXT_HELPURL: '',
                LANG_TEXT_TEXT_TOOLTIP: 'Hizki bat, hitz bat edo testu lerro bat.',
                LANG_TEXT_CHAR_TOOLTIP: 'A simbol, letter or number, but just one character', //to translate
                LANG_TEXT_JOIN_HELPURL: '',
                LANG_TEXT_JOIN_Field_CREATEWITH: 'testua sortu honekin:',
                LANG_TEXT_JOIN_TOOLTIP: 'Sortu testua edozein elementu kopuru elkartuz.',
                LANG_TEXT_CREATE_JOIN_Field_JOIN: 'elkartu',
                LANG_TEXT_CREATE_JOIN_TOOLTIP: 'Testu bloke hau berrezartzeko atalak gehitu, ezabatu edo berrantolatu.',
                LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM: 'elementu',
                LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP: 'Testuari elementu bat gehitu.',
                LANG_TEXT_CREATE_JOIN_TITLE_JOIN: 'elkartu',
                LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM: 'elementu',
                LANG_TEXT_APPEND_HELPURL: '',
                LANG_TEXT_APPEND_TO: 'honi',
                LANG_TEXT_APPEND_APPENDTEXT: 'testua gehitu',
                LANG_TEXT_APPEND_VARIABLE: 'elementu',
                LANG_TEXT_APPEND_TOOLTIP: '%1 aldagaiari testua gehitu.',
                LANG_TEXT_LENGTH_HELPURL: '',
                LANG_TEXT_LENGTH_INPUT_LENGTH: 'luzera',
                LANG_TEXT_LENGTH_TOOLTIP: 'Txertatutako testuan hizki kopurua (hutsuneak barne) bueltatzen ditu.',
                LANG_TEXT_EQUALSIGNORECASE_IS: '',
                LANG_TEXT_EQUALSIGNORECASE_EQUAL: ' =',
                LANG_TEXT_EQUALSIGNORECASE_QUESTION: '',
                LANG_TEXT_EQUALSIGNORECASE_TOOLTIP: 'Txertatutako testu biak berdinak diren alderatzen du, hizki larriak edo xeheak diren kontutan hartu gabe.',
                LANG_TEXT_SUBSTRING: 'Moztu ',
                LANG_TEXT_SUBSTRING_FROM: 'hemendik',
                LANG_TEXT_SUBSTRING_TO: 'honaino',
                LANG_TEXT_SUBSTRING_TOOLTIP: 'Bi indizeen artean agertzen diren testu karaktereak mozten ditu eta testu berri bat sortzen du beraiekin.',
                LANG_TEXT_CHARAT: 'Character of text', //To translate
                LANG_TEXT_CHARAT_POSITION: 'in position', //To translate
                LANG_TEXT_CHARAT_TOOLTIP: 'Returns character in the position of the text (beginning with 0).', //To translate
                LANG_TEXT_SPECIAL: 'Karaktere bereziak',
                LANG_TEXT_SPECIAL_TAB: 'Tabuladorea',
                LANG_TEXT_SPECIAL_CARRIAGE_RETURN: 'Orga-itzulera',
                LANG_TEXT_SPECIAL_LINE_FEED: 'Lerro-jauzia',
                LANG_TEXT_SPECIAL_TOOLTIP: 'Karaktere bereziak idatzi.',
                LANG_TEXT_COMMENT: 'Comment', //to translate
                LANG_TEXT_COMMENT_TOOLTIP: 'Inserts a comment of one line in the program.', //to translate
                //advanced blocks :
                LANG_CATEGORY_ADVANCED: 'PIN Funtzioak',
                LANG_ADVANCED_INOUT_ANALOG_READ: 'PIN# pin analogikoa irakurri',
                LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP: 'Dagokion pin analogiko baten balioa irakurtzen du.',
                LANG_ADVANCED_INOUT_ANALOG_WRITE: 'PIN digitalean idatzi',
                LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE: 'balio analogikoa',
                LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP: '0 y 255 bitarteko balio bat idatzi dagokion PIN analogikoan.',
                LANG_ADVANCED_BUILTIN_LED: 'LED PLAKAN',
                LANG_ADVANCED_BUILTIN_LED_STATE: 'egoera',
                LANG_ADVANCED_BUILTIN_LED_ON: 'PIZTUTA',
                LANG_ADVANCED_BUILTIN_LED_OFF: 'ITZALITA',
                LANG_ADVANCED_BUILTIN_LED_TOOLTIP: 'PIN 13ari barrutik konektaturik dagoen plakako LEDa.',
                LANG_ADVANCED_INOUT_DIGITAL_READ: 'PIN# digitala irakurri',
                LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP: 'Dagokion pin digitalaren balioa irakurtzen du.',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE: 'Pin digitalean idatzi',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_GET_VAR: 'balioa',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN: 'PIN#',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE: 'egoera',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH: 'ALTUA',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW: 'BAXUA',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP: 'Dagokion pin digitalean balio bat idatzi.',
                LANG_ADVANCED_INOUT_PULSEIN: 'Time for digital pin PIN#', //to translate
                LANG_ADVANCED_INOUT_PULSEIN_MODE: 'to change to', //to translate
                LANG_ADVANCED_INOUT_PULSEIN_TOOLTIP: 'Returns the time for a digital pin to change to the state specified (in milliseconds).', //to translate
                LANG_ADVANCED_HIGHLOW_HIGH: 'ALTUA',
                LANG_ADVANCED_HIGHLOW_LOW: 'BAXUA',
                LANG_ADVANCED_HIGHLOW_TOOLTIP: 'Hautatutakoaren arabera idatzi "ALTUA" o "BAXUA".',
                LANG_ADVANCED_MATH_RANDOM: 'Ausaz hauen artean',
                LANG_ADVANCED_MATH_RANDOM_AND: ' eta ',
                LANG_ADVANCED_MATH_RANDOM_TOOLTIP: 'Zehaztutako bi mugen artean ausazko zenbaki bat sortzen du.',
                LANG_ADVANCED_MATH_RANDOM_SEED: 'Set random seed to', //to translate
                LANG_ADVANCED_MATH_RANDOM_SEED_TOOLTIP: 'Sets seed for random number generator. For a random seed, read from an unconnected analog pin; to repeat the same sequence, use a fixed number.', //to translate
                //procedures blocks
                LANG_CATEGORY_PROCEDURES: 'Funtzioak',
                LANG_PROCEDURES_RETURN: 'itzuli',
                LANG_PROCEDURES_RETURN_TOOLTIP: 'Balio bat itzultzen du',
                LANG_PROCEDURES_CALL_WITHOUT_DEFINITION: 'Aurretik zehaztu gabeko funtzio bati deia.',
                LANG_PROCEDURES_DEFNORETURN_HELPURL: '',
                LANG_PROCEDURES_DEFNORETURN_PROCEDURE: 'itzulerarik_gabeko_funtzioa',
                LANG_PROCEDURES_DEFNORETURN_DO: 'exekutatu',
                LANG_PROCEDURES_DEFNORETURN_TOOLTIP: 'Ezer ez egin gabe exekutatuko den funtzioa.',
                LANG_PROCEDURES_DEFRETURN_HELPURL: '',
                LANG_PROCEDURES_DEFRETURN_PROCEDURE: 'itzulera_duen_funtzioa',
                LANG_PROCEDURES_DEFRETURN_DO: 'exekutatu',
                LANG_PROCEDURES_DEFRETURN_RETURN: 'bueltatu',
                LANG_PROCEDURES_DEFRETURN_TOOLTIP: 'Itzulera balioa duen funtzioa.',
                LANG_PROCEDURES_DEF_DUPLICATE_WARNING: 'Adi: funtzio honek bikoiztutako parametroak ditu.',
                LANG_PROCEDURES_CALLNORETURN_HELPURL: '',
                LANG_PROCEDURES_CALLNORETURN_CALL: 'exekutatu',
                LANG_PROCEDURES_CALLNORETURN_PROCEDURE: 'itzulerarik_gabeko_funtzioa',
                LANG_PROCEDURES_CALLNORETURN_TOOLTIP: 'Funtzio hau exekutatu.',
                LANG_PROCEDURES_CALLRETURN_HELPURL: '',
                LANG_PROCEDURES_CALLRETURN_CALL: 'exekutatu',
                LANG_PROCEDURES_CALLRETURN_PROCEDURE: 'itzulera_duen_funtzioa',
                LANG_PROCEDURES_CALLRETURN_TOOLTIP: 'Itzulera balioa duen funtzio hau exekutatu.',
                LANG_PROCEDURES_MUTATORCONTAINER_Field: 'parametroak',
                LANG_PROCEDURES_MUTATORARG_Field: 'aldagaia:',
                LANG_PROCEDURES_HIGHLIGHT_DEF: 'Funtzioa azpimarratu',
                LANG_PROCEDURES_IFRETURN_TOOLTIP: 'Funtzioa egiazkoa bada, funtzioak balio hau bueltatuko du.',
                LANG_PROCEDURES_IFRETURN_WARNING: 'Adi: bloke hau itzulera balioa duen funtzio baten barruan soilik erabil daiteke.',
                //variables blocks :
                LANG_CATEGORY_VARIABLES: 'Aldagaiak',
                LANG_VARIABLES_CALL_WITHOUT_DEFINITION: 'aitortu gabeko aldagaia.',
                LANG_VARIABLES_GLOBAL: 'Aldagai GLOBALA aitortu',
                LANG_VARIABLES_GLOBAL_TYPE: 'motatakoa ',
                LANG_VARIABLES_GLOBAL_EQUALS: '=',
                LANG_VARIABLES_GLOBAL_TOOLTIP: 'Testu (String) edo osoa (int) motako aldagai GLOBALA definitu eta aitortu.',
                LANG_VARIABLES_LOCAL: 'Aldagaia aitortu',
                LANG_VARIABLES_LOCAL_TYPE: 'motatakoa ',
                LANG_VARIABLES_LOCAL_EQUALS: '=',
                LANG_VARIABLES_LOCAL_TOOLTIP: 'Testu (String) edo osoa (int) motako aldagai LOKALA definitu eta aitortu.',
                LANG_VARIABLES_DEFINE: 'Aldagaia definitu ',
                LANG_VARIABLES_DEFINE_AS: 'honela',
                LANG_VARIABLES_DEFINE_TOOLTIP: 'Aldagai baten balioa definitu.',
                LANG_VARIABLES_SET: 'Var',
                LANG_VARIABLES_SET_AS: '=',
                LANG_VARIABLES_SET_TOOLTIP: 'Aldagai baten balioa aldatu.',
                LANG_VARIABLES_GET: 'Var',
                LANG_VARIABLES_GET_TOOLTIP: 'Aldagai baten balioa bueltatu',
                LANG_VARIABLES_PIN_ANALOG: 'Pin analogikoa',
                LANG_VARIABLES_PIN_DIGITAL: 'Pin digitala',
                LANG_VARIABLES_PIN_TOOLTIP: 'PINa aukeratu.',
                LANG_VARIABLES_TYPE_BYTE: 'Byte', // To translate
                LANG_VARIABLES_TYPE_FLOAT: 'Float', // To translate
                LANG_VARIABLES_TYPE_INTEGER: 'Integer', // To translate
                LANG_VARIABLES_TYPE_INTEGER_LONG: 'Long Integer', // To translate
                LANG_VARIABLES_TYPE_INTEGER_ULONG: 'Unsigned Long Integer', //To translate
                LANG_VARIABLES_TYPE_STRING: 'String', // To translate
                LANG_VARIABLES_TYPE_CHAR: 'Character', //to translate
                LANG_VARIABLES_TYPE_BOOLEAN: 'Boolean', //to translate
                LANG_VARIABLES_VOLATILE_GLOBAL: 'Declare VOLATILE GLOBAL variable ', // To translate
                LANG_VARIABLES_VOLATILE_GLOBAL_TYPE: 'of type ', // To translate
                LANG_VARIABLES_VOLATILE_GLOBAL_EQUALS: 'equals ', // To translate
                LANG_VARIABLES_VOLATILE_GLOBAL_TOOLTIP: 'Declares and defines a VOLATILE GLOBAL variable of type int or String used in a ISR function.', // To translate
                //sound blocks (zum):
                LANG_CATEGORY_ZUM: 'Soinuak',
                LANG_ZUM_PIEZO_BUZZER: 'Burrunbagailua',
                LANG_ZUM_PIEZO_BUZZER_PIN: 'PIN#',
                LANG_ZUM_PIEZO_BUZZER_TONE: 'TONUA',
                LANG_ZUM_PIEZO_BUZZER_DO: 'DO',
                LANG_ZUM_PIEZO_BUZZER_RE: 'RE',
                LANG_ZUM_PIEZO_BUZZER_MI: 'MI',
                LANG_ZUM_PIEZO_BUZZER_FA: 'FA',
                LANG_ZUM_PIEZO_BUZZER_SOL: 'SOL',
                LANG_ZUM_PIEZO_BUZZER_LA: 'LA',
                LANG_ZUM_PIEZO_BUZZER_SI: 'SI',
                LANG_ZUM_PIEZO_BUZZER_DURATION: 'Iraupena [ms]',
                LANG_ZUM_PIEZO_BUZZER_TOOLTIP: 'Burrunbagailu piezoelektrikoa',
                LANG_ZUM_PIEZO_BUZZERAV: 'Burrunbagailu aurreratua',
                LANG_ZUM_PIEZO_BUZZERAV_PIN: 'PIN#',
                LANG_ZUM_PIEZO_BUZZERAV_TONE: 'TONUA',
                LANG_ZUM_PIEZO_BUZZERAV_DURATION: 'Iraupena [ms]',
                LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP: 'Burrunbagailu piezoelektriko aurreratua.',
                LANG_ZUM_DHT11_VALUE: 'Get', //to translate
                LANG_ZUM_DHT11_VALUE1: 'Temperature', //to translate
                LANG_ZUM_DHT11_VALUE2: 'Humidity', //to translate
                LANG_ZUM_DHT11_PIN: 'PIN', //to translate
                LANG_ZUM_DHT11_TOOLTIP: 'Get temperature or humidity from a DHT11, DHT21 or DHT22 sensor.', //to translate
                //motor blocks (servo and stepper):
                LANG_CATEGORY_MOTOR: 'Motors', //to translate
                LANG_MOTOR_SERVO_CONT: 'Errotazio jarraiko serboa',
                LANG_MOTOR_SERVO_CONT_PIN: 'PIN#',
                LANG_MOTOR_SERVO_CONT_ROT: 'ROT',
                LANG_MOTOR_SERVO_CONT_TURN_CLOCKWISE: 'ERLOJU-ORRATZEN ARABERA BIRATU',
                LANG_MOTOR_SERVO_CONT_TURN_COUNTERCLOCKWISE: 'ERLOJU-ORRATZEN AURKA BIRATU',
                LANG_MOTOR_SERVO_CONT_STOPPED: 'GELDITU',
                LANG_MOTOR_SERVO_CONT_DELAY: 'Etena [ms]',
                LANG_MOTOR_SERVO_CONT_TOOLTIP: 'Errotazio jarraiko serboa.',
                LANG_MOTOR_SERVO_MOVE: 'Serboa',
                LANG_MOTOR_SERVO_MOVE_PIN: 'PIN#',
                LANG_MOTOR_SERVO_MOVE_DEGREES: 'Graduak (0~180)',
                LANG_MOTOR_SERVO_MOVE_DELAY: 'Etena [ms]',
                LANG_MOTOR_SERVO_MOVE_TOOLTIP: 'Serboa 0 eta 180 gradu artean biratu.',
                LANG_MOTOR_SERVO_WARNING: 'Serboaren pinari ezin diozu aldagai bat esleitu',
                LANG_MOTOR_STEPPER_MOVE: 'Stepper motor', //to translate
                LANG_MOTOR_STEPPER_MOVE_SPR: 'Steps per revolution', //to translate
                LANG_MOTOR_STEPPER_MOVE_PINS: '4 pins?', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN1: 'Pin 1', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN2: 'Pin 2', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN3: 'Pin 3', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN4: 'Pin 4', //to translate
                LANG_MOTOR_STEPPER_MOVE_SETSPEED: 'Set speed to', //to translate
                LANG_MOTOR_STEPPER_MOVE_SETSPEED_NEXT: '(rpm)', //to translate
                LANG_MOTOR_STEPPER_MOVE_STEP: 'Move motor', //to translate
                LANG_MOTOR_STEPPER_MOVE_STEP_NEXT: '(steps)', //to translate
                LANG_MOTOR_STEPPER_MOVE_TOOLTIP: 'Moves motor the number of steps. A positive steps value move in one direction, a negative value moves to the other direction.', //to translate
                LANG_MOTOR_PCA9685_DEF: 'PCA9685', //to translate
                LANG_MOTOR_PCA9685_DEF_SERVO: 'Servo', //to translate
                LANG_MOTOR_PCA9685_DEF_ADDRESS: 'Address of the component', //to translate
                LANG_MOTOR_PCA9685_DEF_TOOLTIP: 'Defines a PCA9685 connected to Arduino over I2C.', //to translate
                LANG_MOTOR_PCA9685_SET_PWM: 'PCA9685 Move servo', //to translate
                LANG_MOTOR_PCA9685_SET_PWM_ANGLE: 'angle', //to translate
                LANG_MOTOR_PCA9685_SET_PWM_TOOLTIP: 'Moves servo connected to PCA9685 the specified angle in degrees.', //to translate
                //interrupt blocks :
                LANG_CATEGORY_INTERRUPTS: 'Interrupts', // To translate
                LANG_INTERRUPTS_STATE: 'Set interrupts state to ', // To translate
                LANG_INTERRUPTS_STATE_ENABLED: 'ENABLED', // To translate
                LANG_INTERRUPTS_STATE_DISABLED: 'DISABLED', // To translate
                LANG_INTERRUPTS_STATE_TOOLTIP: 'Enable or Disable interrupts. Some functions will not work while interrupts are disabled. Use only for particularly critical sections of code.', // To translate
                LANG_INTERRUPTS_ATTACH: 'Attach procedure ', // To translate
                LANG_INTERRUPTS_ATTACH_PARAM2: 'in mode ', // To translate
                LANG_INTERRUPTS_ATTACH_PARAM3: 'with interrupt of digital pin', // To translate
                LANG_INTERRUPTS_ATTACH_LOW: 'LOW', // To translate
                LANG_INTERRUPTS_ATTACH_CHANGE: 'CHANGE', // To translate
                LANG_INTERRUPTS_ATTACH_RISING: 'RISING', // To translate
                LANG_INTERRUPTS_ATTACH_FALLING: 'FALLING', // To translate
                LANG_INTERRUPTS_ATTACH_PROCEDURE: 'func_without_return', // To translate
                LANG_INTERRUPTS_ATTACH_TOOLTIP: 'Set the procedure to be executed when an interrupt is raised in the specified pin.', // To translate
                LANG_INTERRUPTS_DETACH: 'Detach interrupt on digital pin', // To translate
                LANG_INTERRUPTS_DETACH_TOOLTIP: 'Disables the interrupt on the pin. When the pin is activated, the procedure associated is no longer executed.', // To translate
                LANG_WIFI_CONNECT: 'Wifi:', //To translate
                LANG_WIFI_CONNECT_STATION: 'connect', //To translate
                LANG_WIFI_CONNECT_SOFTAP: 'create network', //To translate
                LANG_WIFI_CONNECT_SSID: 'SSID', //To translate
                LANG_WIFI_CONNECT_PASSWORD: 'password', //To translate
                LANG_WIFI_CONNECT_CHANNEL: 'channel', //To translate
                LANG_WIFI_CONNECT_RX_PIN: 'Rx pin', //To translate
                LANG_WIFI_CONNECT_TX_PIN: 'Tx pin', //To translate
                LANG_WIFI_CONNECT_BAUD: 'baud rate', //To translate
                LANG_WIFI_CONNECT_TOOLTIP: 'Connects or creates a wifi using a ESP8266 adapter, and returns true on success.', //To translate
                LANG_WIFI_DISCONNECT: 'Wifi:disconnect', //To translate
                LANG_WIFI_DISCONNECT_TOOLTIP: 'Disconnects from the current wifi network.', //To translate
                LANG_WIFI_CLIENT: 'Wifi:connect to server', //To translate
                LANG_WIFI_CLIENT_IP: 'IP address', //To translate
                LANG_WIFI_CLIENT_PORT: 'Port', //To translate
                LANG_WIFI_CLIENT_TOOLTIP: 'Connects to a TCP server.', //To translate
                LANG_WIFI_SERVER: 'Wifi:start server', //To translate
                LANG_WIFI_SERVER_PORT: 'Port', //To translate
                LANG_WIFI_SERVER_TOOLTIP: 'Create a TCP server to accept connections from clients.', //To translate
                LANG_WIFI_GETIP: 'Wifi:get IP address', //To translate
                LANG_WIFI_GETIP_TOOLTIP: 'Returns IP address of the adapter.', //To translate
                LANG_WIFI_SEND_SERVER: 'Wifi:send to server', //To translate
                LANG_WIFI_SEND_SERVER_DATA: 'Text', //To translate
                LANG_WIFI_SEND_SERVER_TOOLTIP: 'Send text to the TCP server.', //To translate
                LANG_WIFI_SEND_CLIENT: 'Wifi:send to client', //To translate
                LANG_WIFI_SEND_CLIENT_ID: 'ID', //To translate
                LANG_WIFI_SEND_CLIENT_DATA: 'Data', //To translate
                LANG_WIFI_SEND_CLIENT_TOOLTIP: 'Send text to specified client (ID).', //To translate
                LANG_WIFI_RECEIVE_CLIENT: 'Wifi:receive from client', //To translate
                LANG_WIFI_RECEIVE_CLIENT_TOOLTIP: 'Receives a text from client, begining with id number and a colon (:). If timeout is reached, returns an empty string.', //To translate
                LANG_WIFI_RECEIVE_SERVER: 'Wifi:receive from server', //To translate
                LANG_WIFI_RECEIVE_SERVER_TIMEOUT: 'Timeout', //To translate
                LANG_WIFI_RECEIVE_SERVER_TOOLTIP: 'Receives a string from TCP server or empty string if timeout reached.', //To translate
                LANG_WIFI_CLOSE_SERVER: 'Wifi:stop server', //To translate
                LANG_WIFI_CLOSE_SERVER_TOOLTIP: 'Shutdown TCP server.', //To translate
                LANG_WIFI_CLOSE_CLIENT: 'Wifi:stop connection', //To translate
                LANG_WIFI_CLOSE_CLIENT_TOOLTIP: 'Shutdown connection with TCP server.' //To translate
            };
            // Node
            if (typeof module !== 'undefined' && module.exports) {
                module.exports = language;
            }
            // Browser
            // if (typeof window !== 'undefined' && this.RoboBlocks && this.RoboBlocks.locales.add) {
            //     this.RoboBlocks.locales.add('es', language);
            if (typeof window !== 'undefined' && RoboBlocks && RoboBlocks.locales.add) {
                RoboBlocks.locales.add('eu-ES', language);
            }
        }());

        // Source: lang/fr-FR.js
        (function() {
            var language = {
                //random :
                BLOCKLY_MSG_DUPLICATE_BLOCK: 'Dupliquer',
                BLOCKLY_MSG_REMOVE_COMMENT: 'Effacer le commentaire',
                BLOCKLY_MSG_ADD_COMMENT: 'Ajouter un commentaire',
                BLOCKLY_MSG_EXTERNAL_INPUTS: 'Données externes',
                BLOCKLY_MSG_INLINE_INPUTS: 'Données internes',
                BLOCKLY_MSG_DELETE_BLOCK: 'Supprimer le bloc',
                BLOCKLY_MSG_DELETE_X_BLOCKS: 'Supprimer %1 blocs',
                BLOCKLY_MSG_COLLAPSE_BLOCK: 'Comprimer le bloc',
                BLOCKLY_MSG_EXPAND_BLOCK: 'Étendre le bloc',
                BLOCKLY_MSG_DISABLE_BLOCK: 'Désactiver le bloc',
                BLOCKLY_MSG_ENABLE_BLOCK: 'Activer le bloc',
                BLOCKLY_MSG_HELP: 'Aide',
                BLOCKLY_MSG_COLLAPSE_ALL: 'Comprimer les blocs',
                BLOCKLY_MSG_EXPAND_ALL: 'Étendre les blocs',
                LANG_VARIABLES_SET_ITEM: 'élément',
                LANG_RESERVED_WORDS: 'mot réservé : ce nom n’est pas autorisé.',
                LANG_CHAR_LENGTH: 'A character must have length 0 or 1.', //to translate
                //logic blocks:
                LANG_CATEGORY_LOGIC: 'Logique',
                LANG_LOGIC_OPERATION_AND: 'et',
                LANG_LOGIC_OPERATION_OR: 'ou',
                LANG_LOGIC_COMPARE_TOOLTIP_EQ: 'Vérifie si les deux données correspondent.',
                LANG_LOGIC_COMPARE_TOOLTIP_NEQ: 'Vérifie si les deux données sont différentes.',
                LANG_LOGIC_COMPARE_TOOLTIP_LT: 'Vérifie si la première donnée est inférieure à la seconde.',
                LANG_LOGIC_COMPARE_TOOLTIP_LTE: 'Vérifie si la première donnée est inférieure ou égale à la seconde.',
                LANG_LOGIC_COMPARE_TOOLTIP_GT: 'Vérifie si la première donnée est supérieure à la seconde.',
                LANG_LOGIC_COMPARE_TOOLTIP_GTE: 'Vérifie si la première donnée est supérieure ou égale à la seconde.',
                LANG_LOGIC_OPERATION_TOOLTIP_AND: 'Vérifie si les deux données sont vraies.',
                LANG_LOGIC_OPERATION_TOOLTIP_OR: 'Vérifie si l’une ou l’autre donnée est vraie.',
                LANG_LOGIC_NEGATE_INPUT_NOT: 'pas',
                LANG_LOGIC_NEGATE_TOOLTIP: 'Renvoie l’opposé de la donnée.',
                LANG_LOGIC_NEGATE_HELPURL: '',
                LANG_LOGIC_BOOLEAN_TRUE: 'vrai',
                LANG_LOGIC_BOOLEAN_FALSE: 'faux',
                LANG_LOGIC_BOOLEAN_TOOLTIP: 'Renvoie la valeur vrai ou faux.',
                //communication blocks:
                LANG_CATEGORY_COMMUNICATION: 'Communication',
                LANG_BQ_BLUETOOTH_RECEIVE: 'Bluetooth : recevoir',
                LANG_BQ_BLUETOOTH_RECEIVE_BLUETOOTH: 'Bluetooth',
                LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP: 'Renvoie les données reçues par le module Bluetooth',
                LANG_BQ_BLUETOOTH_SEND: 'Bluetooth : envoyer',
                LANG_BQ_BLUETOOTH_SEND_SEND: 'Envoyer',
                LANG_BQ_BLUETOOTH_SEND_TOOLTIP: 'Envoie les données via le module Bluetooth',
                LANG_BQ_BLUETOOTH_DEF: 'Définition du Bluetooth',
                LANG_BQ_BLUETOOTH_DEF_BAUD_RATE: 'Débit (bauds)',
                LANG_BQ_BLUETOOTH_DEF_PIN1: 'RX',
                LANG_BQ_BLUETOOTH_DEF_PIN2: 'TX',
                LANG_BQ_BLUETOOTH_DEF_NAME: 'Nom',
                LANG_BQ_BLUETOOTH_DEF_PINCODE: 'CodePin',
                LANG_BQ_BLUETOOTH_DEF_RECEIVE: 'Recevoir',
                LANG_BQ_BLUETOOTH_DEF_SEND: 'Envoyer',
                LANG_BQ_BLUETOOTH_DEF_TOOLTIP: 'Définition du module Bluetooth',
                LANG_ADVANCED_BT_SERIAL_AVAILABLE: 'Port série Bluetooth disponible',
                LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP: 'Vérifier si le module Bluetooth est disponible ou non.',
                LANG_ADVANCED_SERIAL_AVAILABLE: 'Port série disponible',
                LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP: 'Vérifier si le port série est disponible ou non',
                LANG_ADVANCED_SERIAL_PARSEINT: 'Entier série lu',
                LANG_ADVANCED_SERIAL_PARSEINT_TOOLTIP: 'D abord valider le nombre entier(long) du tampon série',
                LANG_ADVANCED_SERIAL_PRINT: 'Imprimer via le port série',
                LANG_ADVANCED_SERIAL_PRINT_TOOLTIP: 'Imprime les données en caractères ASCII.',
                LANG_ADVANCED_SERIAL_PRINTLN: 'Imprimer via le port série avec retour chariot',
                LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP: 'Imprime les données en caractères ASCII et finit par un retour chariot (RC).',
                LANG_ADVANCED_SERIAL_PRINT_FORMAT: 'Prints value with format', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_TOOLTIP: 'Prints value with specified format', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_1: 'Binary', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_2: 'Octal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_3: 'Decimal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_4: 'Hexadecimal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_5: 'Without decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_6: 'One decimal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_7: 'Two decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_8: 'Three decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_9: 'Four decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINTLN_FORMAT: 'Send value with format and CR', //To translate
                LANG_ADVANCED_SERIAL_PRINTLN_FORMAT_TOOLTIP: 'Send a number to serial port with specified format and carriage return (CR).', //To translate
                LANG_ADVANCED_SERIAL_READ: 'Lire via le port série',
                LANG_ADVANCED_SERIAL_READ_TOOLTIP: 'Lit les données reçues via le port série comme des octets.',
                LANG_ADVANCED_SERIAL_READSTRING: 'Lire chaîne via le port série',
                LANG_ADVANCED_SERIAL_READSTRING_TOOLTIP: 'Lit les données reçues via le port série comme des caractères ASCII.',
                //sensor blocks :
                LANG_CATEGORY_SENSOR: 'Capteurs',
                LANG_BQ_BAT: 'BAT – Capteur à ultrasons',
                LANG_BQ_BAT_RED_PIN: 'BROCHE ECHO#',
                LANG_BQ_BAT_BLUE_PIN: 'BROCHE TRIGGER#',
                LANG_BQ_BAT_TOOLTIP: 'Renvoie la distance mesurée par le capteur à ultrasons.',
                LANG_IR_READ: 'Reads from infrared receiver', //to translate
                LANG_IR_READ_PIN: 'connected to PIN#', //to translate
                LANG_IR_READ_TOOLTIP: 'Reads the value received from the infrared receiver', //to translate
                //LCD blocks:
                LANG_CATEGORY_LCD: 'Blocs LCD',
                LANG_LCD_DEF: 'LCD (2x16)',
                LANG_LCD_DEF_CONNECTION: 'Connection type', //to translate
                LANG_LCD_DEF_CONNECTION_PARALLEL: 'Parallel (6 pins)', //to translate
                LANG_LCD_DEF_CONNECTION_I2C: 'I2C (4 wires)', //to translate
                LANG_LCD_DEF_ADDRESS: 'Address of the component', //to translate
                LANG_LCD_DEF_PIN_1: 'RS Pin', //to translate
                LANG_LCD_DEF_PIN_2: 'Enable Pin', //to translate
                LANG_LCD_DEF_PIN_3: 'Data4 Pin', //to translate
                LANG_LCD_DEF_PIN_4: 'Data5 Pin', //to translate
                LANG_LCD_DEF_PIN_5: 'Data6 Pin', //to translate
                LANG_LCD_DEF_PIN_6: 'Data7 Pin', //to translate
                LANG_LCD_DEF_TOOLTIP: 'Bloc qui définit l’écran LCD',
                LANG_LCD_ADVANCED_DEF: 'LCD avancé',
                LANG_LCD_ADVANCED_ROWS: 'Rangées',
                LANG_LCD_ADVANCED_COLUMNS: 'Colonnes',
                LANG_LCD_DEF_ADVANCED_TOOLTIP: 'Bloc définissant le LCD avancé',
                LANG_LCD_SETBACKLIGHT: 'LCD: définir le rétroéclairage(',
                LANG_LCD_SETBACKLIGHT_CLOSE: ')',
                LANG_LCD_SETBACKLIGHT_TOOLTIP: 'Définit le rétroéclairage de l’écran LCD.',
                LANG_LCD_PRINT: 'LCD : imprimer ',
                LANG_LCD_PRINT_POSITION: 'Définir la position du texte ?',
                LANG_LCD_PRINT_TOOLTIP: 'Affiche une chaîne de caractères sur l’écran LCD à l’endroit défini ou au prochain endroit disponible.',
                LANG_LCD_CLEAR: 'LCD : effacer',
                LANG_LCD_CLEAR_TOOLTIP: 'Effacer l’écran LCD',
                LANG_LCD_HOME: 'LCD Go home', //to translate
                LANG_LCD_HOME_TOOLTIP: 'LCD: Positions the cursor in the upper-left corner of the screen', //to translate
                LANG_LCD_DISPLAY: 'LCD Show content', //to translate
                LANG_LCD_DISPLAY_TOOLTIP: 'LCD: Turns on the LCD display and restore the text that was on the display', //to translate
                LANG_LCD_NODISPLAY: 'LCD Hide content', //to translate
                LANG_LCD_NODISPLAY_TOOLTIP: 'LCD: Turns off the LCD display, without losing the text currently shown on it', //to translate
                LANG_LCD_SCROLLDISPLAYLEFT: 'LCD Scrolls to the left', //to translate
                LANG_LCD_SCROLLDISPLAYLEFT_TOOLTIP: 'LCD: Scrolls the contents of the display one space to the left', //to translate
                LANG_LCD_SCROLLDISPLAYRIGHT: 'LCD Scrolls to the right', //to translate
                LANG_LCD_SCROLLDISPLAYRIGHT_TOOLTIP: 'LCD: Scrolls the contents of the display one space to the right', //to translate
                //controls blocks :
                LANG_CATEGORY_CONTROLS: 'Contrôle',
                LANG_CONTROLS_BASE_DELAY_WAIT: 'Attendre (ms)',
                LANG_CONTROLS_BASE_DELAY_TOOLTIP: 'Attend le temps défini en millisecondes (ms)',
                LANG_CONTROLS_BASE_MILLIS: 'Temps à partir du début (ms)',
                LANG_CONTROLS_BASE_MILLIS_TOOLTIP: 'Nombre de millisecondes depuis le démarrage du programme (entier long)',
                LANG_CONTROLS_BASE_DELAY_MICROSECONDS: 'Wait [us]', //To translate
                LANG_CONTROLS_BASE_DELAY_MICROSECONDS_TOOLTIP: 'Waits the specified time in microseconds (us)', //To translate
                LANG_CONTROLS_BASE_MICROS: 'Time from start (us)', //To translate
                LANG_CONTROLS_BASE_MICROS_TOOLTIP: 'Number of microseconds since the program started (long integer)', //To translate
                LANG_CONTROLS_DOWHILE_OPERATOR_DO: 'Do',
                LANG_CONTROLS_DOWHILE_OPERATOR_WHILE: 'while',
                LANG_CONTROLS_DOWHILE_TOOLTIP: 'While the condition is true, continue doing the statements.',
                LANG_CONTROLS_EXECUTE: 'Execute',
                LANG_CONTROLS_EXECUTE_TOOLTIP: 'Exécutes du code C/C++. A utiliser avec parcimonie, car il peut casser facilement le programme et l empêcher de compiler.',
                LANG_CONTROLS_IF_TOOLTIP_1: 'Si la condition est vraie, exécute les instructions.',
                LANG_CONTROLS_IF_TOOLTIP_2: 'Si la condition est vraie, exécuter le premier bloc d’instruction. Sinon, exécuter le second bloc d’instruction.',
                LANG_CONTROLS_IF_TOOLTIP_3: 'Si la première condition est vraie, exécuter le premier bloc d’instruction. Sinon, si la seconde valeur est vraie, exécuter le second bloc d’instruction.',
                LANG_CONTROLS_IF_TOOLTIP_4: 'Si la première condition est vraie, exécuter le premier bloc d’instruction. Sinon, si la seconde valeur est vraie, exécuter le deuxième bloc d’instruction. Si aucune des valeurs n’est vraie, exécuter le dernier bloc d’instruction.',
                LANG_CONTROLS_IF_MSG_IF: 'si',
                LANG_CONTROLS_IF_MSG_ELSEIF: 'ou bien si',
                LANG_CONTROLS_IF_MSG_ELSE: 'sinon',
                LANG_CONTROLS_IF_MSG_THEN: 'exécuter',
                LANG_CONTROLS_IF_IF_Field_IF: 'si',
                LANG_CONTROLS_IF_IF_TOOLTIP: 'Ajouter, supprimer ou réorganiser les sections pour reconfigurer le bloc “si”.',
                LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF: 'ou bien si',
                LANG_CONTROLS_IF_ELSEIF_TOOLTIP: 'Ajouter une condition au bloc “si”.',
                LANG_CONTROLS_IF_ELSE_Field_ELSE: 'sinon',
                LANG_CONTROLS_IF_ELSE_TOOLTIP: 'Ajouter une condition finale, globale, au bloc “si”.',
                LANG_CONTROLS_FOR_FROM_WARNING: 'Il n’est pas possible de définir une variable comme valeur initiale d’un bloc “compter”.',
                LANG_CONTROLS_FOR_TO_WARNING: 'Il n’est pas possible de définir une variable comme valeur finale d’un bloc “compter”.',
                LANG_CONTROLS_FOR_INCREMENT_WARNING: 'It is not possible to set a variable as the increment value of the for block', //to translate
                LANG_CONTROLS_FOR_INPUT_WITH: 'compter avec',
                LANG_CONTROLS_FOR_INPUT_VAR: 'x',
                LANG_CONTROLS_FOR_INPUT_FROM: 'de',
                LANG_CONTROLS_FOR_INPUT_TO: 'à',
                LANG_CONTROLS_FOR_INPUT_INCREMENT: 'increment', //to translate
                LANG_CONTROLS_FOR_INPUT_DO: 'exécuter',
                LANG_CONTROLS_FOR_TOOLTIP: 'Compter en partant d’un nombre donné jusqu’à un nombre donné. Chaque fois que le compte augmente de un, la variable prend cette valeur puis exécute les instructions.',
                LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE: 'tant que',
                LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL: 'jusqu’à',
                LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE: 'Tant que la condition est vraie, exécuter les instructions.',
                LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL: 'Tant que la condition est fausse, exécuter les instructions.',
                LANG_CONTROLS_REPEAT_TITLE_REPEAT: 'Répéter',
                LANG_CONTROLS_REPEAT_TITLE_TIMES: 'fois',
                LANG_CONTROLS_REPEAT_INPUT_DO: 'exécuter',
                LANG_CONTROLS_REPEAT_TOOLTIP: 'Répéter les instructions un certain nombre de fois',
                LANG_CONTROLS_FLOW_STATEMENTS_HELPURL: '',
                LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP: 'la boucle',
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: 'interrompre',
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: 'continuer avec l’itération suivante',
                LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK: 'Interrompre la boucle contenant ces instructions.',
                LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE: 'Passer le reste de cette boucle et continuer avec la prochaine itération.',
                LANG_CONTROLS_FLOW_STATEMENTS_WARNING: 'Attention : Ce bloc ne peut être utilisé que dans une boucle.',
                LANG_CONTROLS_SETUP_LOOP_SETUP_TITLE: 'Setup',
                LANG_CONTROLS_SETUP_LOOP_LOOP_TITLE: 'Loop',
                LANG_CONTROLS_SETUP_LOOP_TOOLTIP: 'Blocks in setup will be executed at start, and blocks in Loop will be repeated continously.',
                LANG_CONTROLS_SWITCH: 'si ',
                LANG_CONTROLS_SWITCH_TOOLTIP_1: 'Exécute les instructions du cas.',
                LANG_CONTROLS_SWITCH_TOOLTIP_2: 'Utiliser l’instruction “si” pour sélectionner un des nombreux blocs de code à exécuter.',
                LANG_CONTROLS_SWITCH_TOOLTIP_3: ' Utiliser l’instruction “si” pour sélectionner un des nombreux blocs de code à exécuter. ',
                LANG_CONTROLS_SWITCH_TOOLTIP_4: ' Utiliser l’instruction “si” pour sélectionner un des nombreux blocs de code à exécuter. ',
                LANG_CONTROLS_SWITCH_SWITCH_TOOLTIP: 'L’expression qui apparaît dans le bloc “si” est évaluée une seule fois',
                LANG_CONTROLS_SWITCH_CASE_TOOLTIP: 'cas',
                LANG_CONTROLS_SWITCH_DEFAULT_TOOLTIP: 'La mention “si autre cas”, spécifie le code à exécuter si aucun cas ne correspond',
                LANG_CONTROLS_SWITCH_IS: 'cas : ',
                LANG_CONTROLS_SWITCH_CASE: 'cas',
                LANG_CONTROLS_SWITCH_COLON: ': ',
                LANG_CONTROLS_SWITCH_DEFAULT: 'si autre cas',
                LANG_CONTROLS_SWITCH_DO: 'exécuter',
                //math blocks :
                LANG_CATEGORY_MATH: 'Mathématiques',
                LANG_MATH_ADVANCED_MAP_MAP: 'Échelonner',
                LANG_MATH_ADVANCED_MAP_FROM: 'De [',
                LANG_MATH_ADVANCED_MAP_HYPHEN: '-',
                LANG_MATH_ADVANCED_MAP_BRACKET: ']',
                LANG_MATH_ADVANCED_MAP_TO: 'à [',
                LANG_MATH_ADVANCED_MAP_TOOLTIP: 'Rééchelonne les données d’un certain intervalle à un autre.',
                LANG_MATH_NUMBER_TOOLTIP: 'Chiffre',
                LANG_MATH_ARRAY_ARRAY3: '[3]',
                LANG_MATH_ARRAY_BRACKET3: '{',
                LANG_MATH_ARRAY_BRACKET4: '}',
                LANG_MATH_ARRAY_COMMA: ',',
                LANG_MATH_ARRAY_TOOLTIP: 'Tableau',
                LANG_ARRAY_GET_BRACKET1: '[',
                LANG_ARRAY_GET_BRACKET2: ']',
                LANG_ARRAY_GET_TOOLTIP: 'Renvoie la valeur d’un élément donné du tableau.',
                LANG_MATH_MODULO_TOOLTIP: 'Renvoie le reste de la division des deux chiffres.',
                LANG_MATH_BASE_MAP: 'Échelonner ',
                LANG_MATH_BASE_MAP_VALUE_TO: 'Valeur de [0-',
                LANG_MATH_BASE_MAP_BRACKET: ']',
                LANG_MATH_BASE_MAP_TOOLTIP: 'Rééchelonner les données entre [0-1023] sur un autre intervalle.',
                LANG_MATH_SINGLE_OP_ROOT: 'racine carrée',
                LANG_MATH_SINGLE_OP_ABSOLUTE: 'valeur absolue',
                LANG_MATH_SINGLE_TOOLTIP_ROOT: 'Renvoie la racine carrée d’un chiffre.',
                LANG_MATH_SINGLE_TOOLTIP_ABS: 'Renvoie la valeur absolue d’un chiffre.',
                LANG_MATH_SINGLE_TOOLTIP_NEG: 'Renvoie la négation d’un chiffre.',
                LANG_MATH_SINGLE_TOOLTIP_LN: 'Renvoie le logarithme népérien d’un chiffre.',
                LANG_MATH_SINGLE_TOOLTIP_LOG10: 'Renvoie le logarithme décimal d’un chiffre.',
                LANG_MATH_SINGLE_TOOLTIP_EXP: 'Renvoie e à la puissance d’un chiffre.',
                LANG_MATH_SINGLE_TOOLTIP_POW10: 'Renvoie 10 à la puissance d’un chiffre.',
                LANG_MATH_MIN: 'Minimum value between', //To translate
                LANG_MATH_MIN_PARAM2: 'and', //To translate
                LANG_MATH_MIN_TOOLTIP: 'Returns the minimum value of the inputs.', //To translate
                LANG_MATH_MAX: 'Maximum value between', //To translate
                LANG_MATH_MAX_PARAM2: 'and', //To translate
                LANG_MATH_MAX_TOOLTIP: 'Returns the maximum value of the inputs.', //To translate
                LANG_MATH_POW: 'Value of', //To translate
                LANG_MATH_POW_PARAM2: 'to the power of', //To translate
                LANG_MATH_POW_TOOLTIP: 'Returns the value of the first input to the power of the second.', //To translate
                //text blocks:
                LANG_CATEGORY_TEXT: 'Texte',
                LANG_TEXT_TEXT_HELPURL: '',
                LANG_TEXT_TEXT_TOOLTIP: 'Une lettre, un mot ou une chaîne de caractères.',
                LANG_TEXT_CHAR_TOOLTIP: 'A simbol, letter or number, but just one character', //to translate
                LANG_TEXT_JOIN_HELPURL: '',
                LANG_TEXT_JOIN_Field_CREATEWITH: 'créer texte avec',
                LANG_TEXT_JOIN_TOOLTIP: 'Créer un texte en associant n’importe quel nombre d’éléments.',
                LANG_TEXT_CREATE_JOIN_Field_JOIN: 'associer',
                LANG_TEXT_CREATE_JOIN_TOOLTIP: 'Ajouter, supprimer ou réorganiser les sections pour reconfigurer le bloc texte.',
                LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM: 'élément',
                LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP: 'Ajouter un élément au texte.',
                LANG_TEXT_CREATE_JOIN_TITLE_JOIN: 'associer',
                LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM: 'élément',
                LANG_TEXT_APPEND_HELPURL: '',
                LANG_TEXT_APPEND_TO: 'à',
                LANG_TEXT_APPEND_APPENDTEXT: 'ajouter texte',
                LANG_TEXT_APPEND_VARIABLE: 'élément',
                LANG_TEXT_APPEND_TOOLTIP: 'Ajouter un texte à la variable %1.',
                LANG_TEXT_LENGTH_HELPURL: '',
                LANG_TEXT_LENGTH_INPUT_LENGTH: 'longueur',
                LANG_TEXT_LENGTH_TOOLTIP: 'Renvoie le nombre de caractères (espaces inclus) dans le texte donné.',
                LANG_TEXT_EQUALSIGNORECASE_IS: '',
                LANG_TEXT_EQUALSIGNORECASE_EQUAL: ' =',
                LANG_TEXT_EQUALSIGNORECASE_QUESTION: '?',
                LANG_TEXT_EQUALSIGNORECASE_TOOLTIP: 'Vérifie si les deux chaînes de caractères sont identiques, sans tenir compte de la casse. ',
                LANG_TEXT_SUBSTRING: 'Citer ',
                LANG_TEXT_SUBSTRING_FROM: 'de',
                LANG_TEXT_SUBSTRING_TO: 'à',
                LANG_TEXT_SUBSTRING_TOOLTIP: 'Extraire une sous-chaîne de caractères d’une chaîne donnée à partir de l’intervalle défini par les deux valeurs.',
                LANG_TEXT_CHARAT: 'Character of text', //To translate
                LANG_TEXT_CHARAT_POSITION: 'in position', //To translate
                LANG_TEXT_CHARAT_TOOLTIP: 'Returns character in the position of the text (beginning with 0).', //To translate
                LANG_TEXT_SPECIAL: 'Caractères spéciaux',
                LANG_TEXT_SPECIAL_TAB: 'Tabulation',
                LANG_TEXT_SPECIAL_CARRIAGE_RETURN: 'Retour chariot',
                LANG_TEXT_SPECIAL_LINE_FEED: 'Saut de ligne',
                LANG_TEXT_SPECIAL_TOOLTIP: 'Utilise des caractères spéciaux.',
                LANG_TEXT_COMMENT: 'Comment', //to translate
                LANG_TEXT_COMMENT_TOOLTIP: 'Inserts a comment of one line in the program.', //to translate
                //advanced blocks :
                LANG_CATEGORY_ADVANCED: 'Fonctions broche',
                LANG_ADVANCED_INOUT_ANALOG_READ: 'Lire broche analogique#',
                LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP: 'Lit la valeur provenant d’une broche analogique donnée',
                LANG_ADVANCED_INOUT_ANALOG_WRITE: 'Écrire dans la broche analogique#',
                LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE: 'valeur',
                LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP: 'Écrire une valeur comprise entre 0 et 255 pour une broche de sortie analogique donnée.',
                LANG_ADVANCED_BUILTIN_LED: 'LED de la carte',
                LANG_ADVANCED_BUILTIN_LED_STATE: 'état',
                LANG_ADVANCED_BUILTIN_LED_ON: 'ON',
                LANG_ADVANCED_BUILTIN_LED_OFF: 'OFF',
                LANG_ADVANCED_BUILTIN_LED_TOOLTIP: 'LED de la carte qui est connectée de manière interne à la broche 13',
                LANG_ADVANCED_INOUT_DIGITAL_READ: 'Lire la broche numérique#',
                LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP: 'Lit la valeur provenant d’une broche numérique donnée.',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE: 'Écrire dans la broche numérique',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_GET_VAR: 'la valeur',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN: '#',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE: 'état',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH: 'ÉLEVÉ',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW: 'BAS',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP: 'Écrire une valeur dans une broche numérique donnée',
                LANG_ADVANCED_INOUT_PULSEIN: 'Time for digital pin PIN#', //to translate
                LANG_ADVANCED_INOUT_PULSEIN_MODE: 'to change to', //to translate
                LANG_ADVANCED_INOUT_PULSEIN_TOOLTIP: 'Returns the time for a digital pin to change to the state specified (in milliseconds).', //to translate
                LANG_ADVANCED_HIGHLOW_HIGH: 'ÉLEVÉ',
                LANG_ADVANCED_HIGHLOW_LOW: 'BAS',
                LANG_ADVANCED_HIGHLOW_TOOLTIP: 'ÉLEVÉ OU BAS',
                LANG_ADVANCED_MATH_RANDOM: 'Aléatoire comprise entre',
                LANG_ADVANCED_MATH_RANDOM_AND: ' et ',
                LANG_ADVANCED_MATH_RANDOM_TOOLTIP: 'Renvoie un chiffre aléatoire compris dans l’intervalle défini.',
                LANG_ADVANCED_MATH_RANDOM_SEED: 'Set random seed to', //to translate
                LANG_ADVANCED_MATH_RANDOM_SEED_TOOLTIP: 'Sets seed for random number generator. For a random seed, read from an unconnected analog pin; to repeat the same sequence, use a fixed number.', //to translate
                //procedures blocks
                LANG_CATEGORY_PROCEDURES: 'Fonctions',
                LANG_PROCEDURES_RETURN: 'retourner',
                LANG_PROCEDURES_RETURN_TOOLTIP: 'Retourner une valeur',
                LANG_PROCEDURES_CALL_WITHOUT_DEFINITION: 'Appel de fonction sans définition préalable de cette fonction',
                LANG_PROCEDURES_DEFNORETURN_HELPURL: '',
                LANG_PROCEDURES_DEFNORETURN_PROCEDURE: 'fonction_sans_renvoi',
                LANG_PROCEDURES_DEFNORETURN_DO: 'exécuter',
                LANG_PROCEDURES_DEFNORETURN_TOOLTIP: 'Une fonction sans renvoi de valeur.',
                LANG_PROCEDURES_DEFRETURN_HELPURL: '',
                LANG_PROCEDURES_DEFRETURN_PROCEDURE: 'fonction_avec_renvoi',
                LANG_PROCEDURES_DEFRETURN_DO: 'exécuter',
                LANG_PROCEDURES_DEFRETURN_RETURN: 'renvoie',
                LANG_PROCEDURES_DEFRETURN_TOOLTIP: 'Une fonction avec renvoi de valeur.',
                LANG_PROCEDURES_DEF_DUPLICATE_WARNING: 'Attention : cette fonction a des paramètres dupliqués.',
                LANG_PROCEDURES_CALLNORETURN_HELPURL: '',
                LANG_PROCEDURES_CALLNORETURN_CALL: 'exécuter',
                LANG_PROCEDURES_CALLNORETURN_PROCEDURE: 'fonction_sans_renvoi',
                LANG_PROCEDURES_CALLNORETURN_TOOLTIP: 'Appelle une fonction sans renvoi de valeur.',
                LANG_PROCEDURES_CALLRETURN_HELPURL: '',
                LANG_PROCEDURES_CALLRETURN_CALL: 'exécuter',
                LANG_PROCEDURES_CALLRETURN_PROCEDURE: 'fonction_avec_renvoi',
                LANG_PROCEDURES_CALLRETURN_TOOLTIP: 'Appelle une fonction avec renvoi de valeur.',
                LANG_PROCEDURES_MUTATORCONTAINER_Field: 'paramètres',
                LANG_PROCEDURES_MUTATORARG_Field: 'variable :',
                LANG_PROCEDURES_HIGHLIGHT_DEF: 'Surligner la fonction',
                LANG_PROCEDURES_IFRETURN_TOOLTIP: 'Si la condition est vraie, renvoie cette valeur.',
                LANG_PROCEDURES_IFRETURN_WARNING: 'Attention : Ce bloc doit être utilisé uniquement dans une fonction avec renvoi de valeur.',
                //variables blocks :
                LANG_CATEGORY_VARIABLES: 'Variables',
                LANG_VARIABLES_CALL_WITHOUT_DEFINITION: 'Cette variable n’est pas déclarée.',
                LANG_VARIABLES_GLOBAL: 'Déclarer variable GLOBALE',
                LANG_VARIABLES_GLOBAL_TYPE: 'de type ',
                LANG_VARIABLES_GLOBAL_EQUALS: '=',
                LANG_VARIABLES_GLOBAL_TOOLTIP: 'Déclare et définit une variable GLOBALE de type entier (int) ou texte (string).',
                LANG_VARIABLES_LOCAL: 'Déclarer variable ',
                LANG_VARIABLES_LOCAL_TYPE: 'de type ',
                LANG_VARIABLES_LOCAL_EQUALS: '=',
                LANG_VARIABLES_LOCAL_TOOLTIP: 'Déclarer et définir une variable LOCALE de type entier (int) ou texte (string).',
                LANG_VARIABLES_DEFINE: 'Définir variable ',
                LANG_VARIABLES_DEFINE_AS: 'comme',
                LANG_VARIABLES_DEFINE_TOOLTIP: 'Définir la valeur d’une variable.',
                LANG_VARIABLES_SET: 'Var',
                LANG_VARIABLES_SET_AS: '=',
                LANG_VARIABLES_SET_TOOLTIP: 'Détermine la valeur d’une variable.',
                LANG_VARIABLES_GET: 'Var',
                LANG_VARIABLES_GET_TOOLTIP: 'Renvoie la valeur d’une variable.',
                LANG_VARIABLES_PIN_ANALOG: 'Broche analogique',
                LANG_VARIABLES_PIN_DIGITAL: 'Broche numérique',
                LANG_VARIABLES_PIN_DIGITAL0: 'ATTENTION : la broche numérique 0 (broche RX) sert à charger les programmes. Si elle est utilisée pour connecter des composants électroniques, des problèmes peuvent survenir lors du chargement d’un nouveau programme.',
                LANG_VARIABLES_PIN_TOOLTIP: 'Sélectionner la BROCHE.',
                LANG_VARIABLES_TYPE_BYTE: 'Octet',
                LANG_VARIABLES_TYPE_FLOAT: 'Virgule flotante',
                LANG_VARIABLES_TYPE_INTEGER: 'Entier',
                LANG_VARIABLES_TYPE_INTEGER_LONG: 'Entier long',
                LANG_VARIABLES_TYPE_INTEGER_ULONG: 'Unsigned Long Integer', //To translate
                LANG_VARIABLES_TYPE_STRING: 'Chaine',
                LANG_VARIABLES_TYPE_CHAR: 'Character', //to translate
                LANG_VARIABLES_TYPE_BOOLEAN: 'Boolean', //to translate
                LANG_VARIABLES_VOLATILE_GLOBAL: 'Variable Globale volatile déclarée',
                LANG_VARIABLES_VOLATILE_GLOBAL_TYPE: 'de type',
                LANG_VARIABLES_VOLATILE_GLOBAL_EQUALS: '=',
                LANG_VARIABLES_VOLATILE_GLOBAL_TOOLTIP: 'Déclare et défini une variable GLOBALE VOLATILE de type int ou chaine utilisé dans une fonction ISR.',
                //sound blocks (zum):
                LANG_CATEGORY_ZUM: 'Sons',
                LANG_ZUM_PIEZO_BUZZER: 'Buzzer',
                LANG_ZUM_PIEZO_BUZZER_PIN: 'BROCHE#',
                LANG_ZUM_PIEZO_BUZZER_TONE: 'TONALITÉ',
                LANG_ZUM_PIEZO_BUZZER_DO: 'DO',
                LANG_ZUM_PIEZO_BUZZER_RE: 'RÉ',
                LANG_ZUM_PIEZO_BUZZER_MI: 'MI',
                LANG_ZUM_PIEZO_BUZZER_FA: 'FA',
                LANG_ZUM_PIEZO_BUZZER_SOL: 'SOL',
                LANG_ZUM_PIEZO_BUZZER_LA: 'LA',
                LANG_ZUM_PIEZO_BUZZER_SI: 'SI',
                LANG_ZUM_PIEZO_BUZZER_DURATION: 'Temps [ms]',
                LANG_ZUM_PIEZO_BUZZER_TOOLTIP: 'Buzzer',
                LANG_ZUM_PIEZO_BUZZERAV: ' Buzzer avancé',
                LANG_ZUM_PIEZO_BUZZERAV_PIN: 'BROCHE#',
                LANG_ZUM_PIEZO_BUZZERAV_TONE: 'TONALITÉ',
                LANG_ZUM_PIEZO_BUZZERAV_DURATION: 'Temps [ms]',
                LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP: 'Buzzer avancé',
                LANG_ZUM_DHT11_VALUE: 'Get', //to translate
                LANG_ZUM_DHT11_VALUE1: 'Temperature', //to translate
                LANG_ZUM_DHT11_VALUE2: 'Humidity', //to translate
                LANG_ZUM_DHT11_PIN: 'PIN', //to translate
                LANG_ZUM_DHT11_TOOLTIP: 'Get temperature or humidity from a DHT11, DHT21 or DHT22 sensor.', //to translate
                //motor blocks (servo and stepper):
                LANG_CATEGORY_MOTOR: 'Motors', //to translate
                LANG_MOTOR_SERVO_CONT: 'Servo',
                LANG_MOTOR_SERVO_CONT_PIN: 'BROCHE#',
                LANG_MOTOR_SERVO_CONT_ROT: 'ROT',
                LANG_MOTOR_SERVO_CONT_TURN_CLOCKWISE: 'TOURNER DANS LE SENS DES AIGUILLES D’UNE MONTRE',
                LANG_MOTOR_SERVO_CONT_TURN_COUNTERCLOCKWISE: 'TOURNER DANS LE SENS INVERSE DES AIGUILLES D’UNE MONTRE ',
                LANG_MOTOR_SERVO_CONT_STOPPED: 'ARRETE',
                LANG_MOTOR_SERVO_CONT_DELAY: 'Attendre [ms]',
                LANG_MOTOR_SERVO_CONT_TOOLTIP: 'Servo à rotation continue.',
                LANG_MOTOR_SERVO_MOVE: 'Servo',
                LANG_MOTOR_SERVO_MOVE_PIN: 'BROCHE#',
                LANG_MOTOR_SERVO_MOVE_DEGREES: 'Degrés (0~180)',
                LANG_MOTOR_SERVO_MOVE_DELAY: 'Attendre [ms]',
                LANG_MOTOR_SERVO_MOVE_TOOLTIP: 'Bouger le servo entre 0 et 180 degrés',
                LANG_MOTOR_SERVO_WARNING: 'Il n’est pas possible de déterminer la broche du servo à l’aide d’une variable',
                LANG_MOTOR_STEPPER_MOVE: 'Stepper motor', //to translate
                LANG_MOTOR_STEPPER_MOVE_SPR: 'Steps per revolution', //to translate
                LANG_MOTOR_STEPPER_MOVE_PINS: '4 pins?', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN1: 'Pin 1', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN2: 'Pin 2', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN3: 'Pin 3', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN4: 'Pin 4', //to translate
                LANG_MOTOR_STEPPER_MOVE_SETSPEED: 'Set speed to', //to translate
                LANG_MOTOR_STEPPER_MOVE_SETSPEED_NEXT: '(rpm)', //to translate
                LANG_MOTOR_STEPPER_MOVE_STEP: 'Move motor', //to translate
                LANG_MOTOR_STEPPER_MOVE_STEP_NEXT: '(steps)', //to translate
                LANG_MOTOR_STEPPER_MOVE_TOOLTIP: 'Moves motor the number of steps. A positive steps value move in one direction, a negative value moves to the other direction.', //to translate
                LANG_MOTOR_PCA9685_DEF: 'PCA9685', //to translate
                LANG_MOTOR_PCA9685_DEF_SERVO: 'Servo', //to translate
                LANG_MOTOR_PCA9685_DEF_ADDRESS: 'Address of the component', //to translate
                LANG_MOTOR_PCA9685_DEF_TOOLTIP: 'Defines a PCA9685 connected to Arduino over I2C.', //to translate
                LANG_MOTOR_PCA9685_SET_PWM: 'PCA9685 Move servo', //to translate
                LANG_MOTOR_PCA9685_SET_PWM_ANGLE: 'angle', //to translate
                LANG_MOTOR_PCA9685_SET_PWM_TOOLTIP: 'Moves servo connected to PCA9685 the specified angle in degrees.', //to translate
                //interrupt blocks :
                LANG_CATEGORY_INTERRUPTS: 'Interruption',
                LANG_INTERRUPTS_STATE: 'Configurer les interruptions à l état de',
                LANG_INTERRUPTS_STATE_ENABLED: 'MARCHE',
                LANG_INTERRUPTS_STATE_DISABLED: 'ARRET',
                LANG_INTERRUPTS_STATE_TOOLTIP: 'Valider ou invalider les interruptions. Certaines fonctions ne fonctionnerons pas tant que les interruptions sont invalidées. A n utiliser qu en cas de sections de code critique',
                LANG_INTERRUPTS_ATTACH: 'Procédure jointe ',
                LANG_INTERRUPTS_ATTACH_PARAM2: 'en mode ',
                LANG_INTERRUPTS_ATTACH_PARAM3: 'Avec interruption de la broche digitale',
                LANG_INTERRUPTS_ATTACH_LOW: 'BAS',
                LANG_INTERRUPTS_ATTACH_CHANGE: 'MODIFIE',
                LANG_INTERRUPTS_ATTACH_RISING: 'MONTER',
                LANG_INTERRUPTS_ATTACH_FALLING: 'TOMBER',
                LANG_INTERRUPTS_ATTACH_PROCEDURE: 'fonction_sans_retour',
                LANG_INTERRUPTS_ATTACH_TOOLTIP: 'Régler la procédure qui doit être exécutée quand une interruption apparait dans la broche spécifiée.',
                LANG_INTERRUPTS_DETACH: 'Détacher l interruption sur la broche digitale',
                LANG_INTERRUPTS_DETACH_TOOLTIP: 'Annuler l interruption sur la broche. Quand la broche est activée, la procédure associée n est plus exécuter.',
                LANG_WIFI_CONNECT: 'Wifi:', //To translate
                LANG_WIFI_CONNECT_STATION: 'connect', //To translate
                LANG_WIFI_CONNECT_SOFTAP: 'create network', //To translate
                LANG_WIFI_CONNECT_SSID: 'SSID', //To translate
                LANG_WIFI_CONNECT_PASSWORD: 'password', //To translate
                LANG_WIFI_CONNECT_CHANNEL: 'channel', //To translate
                LANG_WIFI_CONNECT_RX_PIN: 'Rx pin', //To translate
                LANG_WIFI_CONNECT_TX_PIN: 'Tx pin', //To translate
                LANG_WIFI_CONNECT_BAUD: 'baud rate', //To translate
                LANG_WIFI_CONNECT_TOOLTIP: 'Connects or creates a wifi using a ESP8266 adapter, and returns true on success.', //To translate
                LANG_WIFI_DISCONNECT: 'Wifi:disconnect', //To translate
                LANG_WIFI_DISCONNECT_TOOLTIP: 'Disconnects from the current wifi network.', //To translate
                LANG_WIFI_CLIENT: 'Wifi:connect to server', //To translate
                LANG_WIFI_CLIENT_IP: 'IP address', //To translate
                LANG_WIFI_CLIENT_PORT: 'Port', //To translate
                LANG_WIFI_CLIENT_TOOLTIP: 'Connects to a TCP server.', //To translate
                LANG_WIFI_SERVER: 'Wifi:start server', //To translate
                LANG_WIFI_SERVER_PORT: 'Port', //To translate
                LANG_WIFI_SERVER_TOOLTIP: 'Create a TCP server to accept connections from clients.', //To translate
                LANG_WIFI_GETIP: 'Wifi:get IP address', //To translate
                LANG_WIFI_GETIP_TOOLTIP: 'Returns IP address of the adapter.', //To translate
                LANG_WIFI_SEND_SERVER: 'Wifi:send to server', //To translate
                LANG_WIFI_SEND_SERVER_DATA: 'Text', //To translate
                LANG_WIFI_SEND_SERVER_TOOLTIP: 'Send text to the TCP server.', //To translate
                LANG_WIFI_SEND_CLIENT: 'Wifi:send to client', //To translate
                LANG_WIFI_SEND_CLIENT_ID: 'ID', //To translate
                LANG_WIFI_SEND_CLIENT_DATA: 'Data', //To translate
                LANG_WIFI_SEND_CLIENT_TOOLTIP: 'Send text to specified client (ID).', //To translate
                LANG_WIFI_RECEIVE_CLIENT: 'Wifi:receive from client', //To translate
                LANG_WIFI_RECEIVE_CLIENT_TOOLTIP: 'Receives a text from client, begining with id number and a colon (:). If timeout is reached, returns an empty string.', //To translate
                LANG_WIFI_RECEIVE_SERVER: 'Wifi:receive from server', //To translate
                LANG_WIFI_RECEIVE_SERVER_TIMEOUT: 'Timeout', //To translate
                LANG_WIFI_RECEIVE_SERVER_TOOLTIP: 'Receives a string from TCP server or empty string if timeout reached.', //To translate
                LANG_WIFI_CLOSE_SERVER: 'Wifi:stop server', //To translate
                LANG_WIFI_CLOSE_SERVER_TOOLTIP: 'Shutdown TCP server.', //To translate
                LANG_WIFI_CLOSE_CLIENT: 'Wifi:stop connection', //To translate
                LANG_WIFI_CLOSE_CLIENT_TOOLTIP: 'Shutdown connection with TCP server.' //To translate
            };
            // Node
            if (typeof module !== 'undefined' && module.exports) {
                module.exports = language;
            }
            // Browser
            // if (typeof window !== 'undefined' && this.RoboBlocks && this.RoboBlocks.locales.add) {
            //     this.RoboBlocks.locales.add('en', language);
            if (typeof window !== 'undefined' && RoboBlocks && RoboBlocks.locales.add) {
                RoboBlocks.locales.add('fr-FR', language);
            }
        }());

        // Source: lang/gl-ES.js
        (function() {
            var language = {
                //random :
                BLOCKLY_MSG_DUPLICATE_BLOCK: 'Duplicar',
                BLOCKLY_MSG_REMOVE_COMMENT: 'Borrar comentario',
                BLOCKLY_MSG_ADD_COMMENT: 'Engadir comentario',
                BLOCKLY_MSG_EXTERNAL_INPUTS: 'Entradas externas',
                BLOCKLY_MSG_INLINE_INPUTS: 'Entradas en liña',
                BLOCKLY_MSG_DELETE_BLOCK: 'Eliminar bloque',
                BLOCKLY_MSG_DELETE_X_BLOCKS: 'Eliminar %1 bloques',
                BLOCKLY_MSG_COLLAPSE_BLOCK: 'Minimizar bloque',
                BLOCKLY_MSG_EXPAND_BLOCK: 'Expandir bloque',
                BLOCKLY_MSG_DISABLE_BLOCK: 'Desactivar bloque',
                BLOCKLY_MSG_ENABLE_BLOCK: 'Activar bloque',
                BLOCKLY_MSG_HELP: 'Axuda',
                BLOCKLY_MSG_COLLAPSE_ALL: 'Minimizar bloques',
                BLOCKLY_MSG_EXPAND_ALL: 'Expandir bloques',
                LANG_VARIABLES_SET_ITEM: 'elemento',
                LANG_RESERVED_WORDS: 'Palabra reservada: este nome non está permitido.',
                LANG_CHAR_LENGTH: 'A character must have length 0 or 1.', //to translate
                //logic blocks:
                LANG_CATEGORY_LOGIC: 'Lóxica',
                LANG_LOGIC_OPERATION_AND: 'e',
                LANG_LOGIC_OPERATION_OR: 'ou',
                LANG_LOGIC_COMPARE_TOOLTIP_EQ: 'Compara se as dúas entradas son iguais.',
                LANG_LOGIC_COMPARE_TOOLTIP_NEQ: 'Compara se as dúas entradas son iguais entre si.',
                LANG_LOGIC_COMPARE_TOOLTIP_LT: 'Compara se a primeira entrada é menor que a segunda entrada.',
                LANG_LOGIC_COMPARE_TOOLTIP_LTE: 'Compara se a primeira entrada é menor ou igual que a segunda entrada.',
                LANG_LOGIC_COMPARE_TOOLTIP_GT: 'Compara se a primeira entrada é maior que a segunda entrada.',
                LANG_LOGIC_COMPARE_TOOLTIP_GTE: 'Compara se a primeira entrada é maior ou igual que a segunda entrada.',
                LANG_LOGIC_OPERATION_TOOLTIP_AND: 'Compara se ambas as entradas son verdadeiras.',
                LANG_LOGIC_OPERATION_TOOLTIP_OR: 'Compara se algunha das entradas é verdadeira.',
                LANG_LOGIC_NEGATE_INPUT_NOT: 'non',
                LANG_LOGIC_NEGATE_TOOLTIP: 'Devolve o contrario da entrada.',
                LANG_LOGIC_NEGATE_HELPURL: '',
                LANG_LOGIC_BOOLEAN_TRUE: 'verdadeiro',
                LANG_LOGIC_BOOLEAN_FALSE: 'falso',
                LANG_LOGIC_BOOLEAN_TOOLTIP: 'Devolve verdadeiro ou falso en función do seleccionado.',
                //communication blocks:
                LANG_CATEGORY_COMMUNICATION: 'Comunicación',
                LANG_BQ_BLUETOOTH_RECEIVE: 'Bluetooth: recibir ',
                LANG_BQ_BLUETOOTH_RECEIVE_BLUETOOTH: 'Bluetooth',
                LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP: 'Devolve os datos recibidos polo módulo Bluetooth',
                LANG_BQ_BLUETOOTH_SEND: 'Bluetooth: Enviar',
                LANG_BQ_BLUETOOTH_SEND_SEND: 'Enviar datos',
                LANG_BQ_BLUETOOTH_SEND_TOOLTIP: 'Os datos da entrada son enviados usando o módulo Bluetooth',
                LANG_BQ_BLUETOOTH_DEF: 'Bluetooth',
                LANG_BQ_BLUETOOTH_DEF_BAUD_RATE: 'Tasa de baudios',
                LANG_BQ_BLUETOOTH_DEF_PIN1: 'RX',
                LANG_BQ_BLUETOOTH_DEF_PIN2: 'TX',
                LANG_BQ_BLUETOOTH_DEF_NAME: 'Nome',
                LANG_BQ_BLUETOOTH_DEF_PINCODE: 'Código PIN',
                LANG_BQ_BLUETOOTH_DEF_RECEIVE: 'Recibir',
                LANG_BQ_BLUETOOTH_DEF_SEND: 'Enviar',
                LANG_BQ_BLUETOOTH_DEF_TOOLTIP: 'Definición do módulo Bluetooth',
                LANG_ADVANCED_BT_SERIAL_AVAILABLE: 'Bluetooth: Porto Serie Dispoñible',
                LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP: 'Comproba se o módulo Bluetooth está dispoñible ou non',
                LANG_ADVANCED_SERIAL_AVAILABLE: 'Porto Serie Dispoñible',
                LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP: 'Comproba se o porto serie está dispoñible ou non',
                LANG_ADVANCED_SERIAL_PARSEINT: 'Ler enteiro polo porto serie', // To translate
                LANG_ADVANCED_SERIAL_PARSEINT_TOOLTIP: 'Devolve o primeiro número enteiro (longo) desde o porto serie', // To translate
                LANG_ADVANCED_SERIAL_PRINT: 'Imprimir polo porto serie',
                LANG_ADVANCED_SERIAL_PRINT_TOOLTIP: 'Imprime os datos como texto ASCII.',
                LANG_ADVANCED_SERIAL_PRINTLN: 'Imprimir polo porto serie con salto de liña',
                LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP: 'Imprime os datos como texto ASCII e con retorno de carro (RC).',
                LANG_ADVANCED_SERIAL_PRINT_FORMAT: 'Prints value with format', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_1: 'Binary', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_2: 'Octal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_3: 'Decimal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_4: 'Hexadecimal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_5: 'Without decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_6: 'One decimal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_7: 'Two decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_8: 'Three decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_9: 'Four decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_TOOLTIP: 'Prints value with specified format', //to translate
                LANG_ADVANCED_SERIAL_PRINTLN_FORMAT: 'Send value with format and CR', //To translate
                LANG_ADVANCED_SERIAL_PRINTLN_FORMAT_TOOLTIP: 'Send a number to serial port with specified format and carriage return (CR).', //To translate
                LANG_ADVANCED_SERIAL_READ: 'Ler o porto serie',
                LANG_ADVANCED_SERIAL_READ_TOOLTIP: 'Le os datos que se reciben polo porto serie como bytes.',
                LANG_ADVANCED_SERIAL_READSTRING: 'Ler cadea desde o porto serie',
                LANG_ADVANCED_SERIAL_READSTRING_TOOLTIP: 'Le os datos que se reciben polo porto serie como texto ASCII.',
                //sensor blocks :
                LANG_CATEGORY_Sensor: 'Sensores',
                LANG_BQ_BAT: 'BAT - Sensor de Ultrasons',
                LANG_BQ_BAT_RED_PIN: 'ECHO PIN#',
                LANG_BQ_BAT_BLUE_PIN: 'TRIGGER PIN#',
                LANG_BQ_BAT_TOOLTIP: 'Devolve a distancia medida polo sensor.',
                LANG_IR_READ: 'Reads from infrared receiver', //to translate
                LANG_IR_READ_PIN: 'connected to PIN#', //to translate
                LANG_IR_READ_TOOLTIP: 'Reads the value received from the infrared receiver', //to translate
                //LCD blocks:
                LANG_CATEGORY_LCD: 'LCD bloqs',
                LANG_LCD_DEF: 'LCD (2x16)',
                LANG_LCD_DEF_CONNECTION: 'Connection type', //to translate
                LANG_LCD_DEF_CONNECTION_PARALLEL: 'Parallel (6 pins)', //to translate
                LANG_LCD_DEF_CONNECTION_I2C: 'I2C (4 wires)', //to translate
                LANG_LCD_DEF_ADDRESS: 'Address of the component', //to translate
                LANG_LCD_DEF_PIN_1: 'RS Pin', //to translate
                LANG_LCD_DEF_PIN_2: 'Enable Pin', //to translate
                LANG_LCD_DEF_PIN_3: 'Data4 Pin', //to translate
                LANG_LCD_DEF_PIN_4: 'Data5 Pin', //to translate
                LANG_LCD_DEF_PIN_5: 'Data6 Pin', //to translate
                LANG_LCD_DEF_PIN_6: 'Data7 Pin', //to translate
                LANG_LCD_DEF_TOOLTIP: 'Define o LCD',
                LANG_LCD_ADVANCED_DEF: 'LCD avanzado',
                LANG_LCD_ADVANCED_ROWS: 'Filas',
                LANG_LCD_ADVANCED_COLUMNS: 'Columnas',
                LANG_LCD_DEF_ADVANCED_TOOLTIP: 'Bloque que define o LCD avanzado',
                LANG_LCD_SETBACKLIGHT: 'LCD: axustar a retroiluminación',
                LANG_LCD_SETBACKLIGHT_CLOSE: '',
                LANG_LCD_SETBACKLIGHT_TOOLTIP: 'Axusta a retroiluminación da pantalla LCD',
                LANG_LCD_PRINT: 'LCD: Imprimir ',
                LANG_LCD_PRINT_POSITION: 'Fixar posición do texto?',
                LANG_LCD_PRINT_TOOLTIP: 'Imprime unha frase na pantalla LCD na posición específicada ou na seguinte dispoñible.',
                LANG_LCD_CLEAR: 'LCD borrar',
                LANG_LCD_CLEAR_TOOLTIP: 'LCD: Borrar',
                LANG_LCD_HOME: 'LCD Go home', //to translate
                LANG_LCD_HOME_TOOLTIP: 'LCD: Positions the cursor in the upper-left corner of the screen', //to translate
                LANG_LCD_DISPLAY: 'LCD Show content', //to translate
                LANG_LCD_DISPLAY_TOOLTIP: 'LCD: Turns on the LCD display and restore the text that was on the display', //to translate
                LANG_LCD_NODISPLAY: 'LCD Hide content', //to translate
                LANG_LCD_NODISPLAY_TOOLTIP: 'LCD: Turns off the LCD display, without losing the text currently shown on it', //to translate
                LANG_LCD_SCROLLDISPLAYLEFT: 'LCD Scrolls to the left', //to translate
                LANG_LCD_SCROLLDISPLAYLEFT_TOOLTIP: 'LCD: Scrolls the contents of the display one space to the left', //to translate
                LANG_LCD_SCROLLDISPLAYRIGHT: 'LCD Scrolls to the right', //to translate
                LANG_LCD_SCROLLDISPLAYRIGHT_TOOLTIP: 'LCD: Scrolls the contents of the display one space to the right', //to translate
                //controls blocks :
                LANG_CATEGORY_CONTROLS: 'Control',
                LANG_CONTROLS_BASE_DELAY_WAIT: 'Agardar [ms]',
                LANG_CONTROLS_BASE_DELAY_TOOLTIP: 'Agarda o tempo especificado en milisegundos (ms)',
                LANG_CONTROLS_BASE_MILLIS: 'Tempo desde o arranque (ms)',
                LANG_CONTROLS_BASE_MILLIS_TOOLTIP: 'Número de milisegundos desde que se iniciou o programa (enteiro longo)',
                LANG_CONTROLS_BASE_DELAY_MICROSECONDS: 'Wait [us]', //To translate
                LANG_CONTROLS_BASE_DELAY_MICROSECONDS_TOOLTIP: 'Waits the specified time in microseconds (us)', //To translate
                LANG_CONTROLS_BASE_MICROS: 'Time from start (us)', //To translate
                LANG_CONTROLS_BASE_MICROS_TOOLTIP: 'Number of microseconds since the program started (long integer)', //To translate
                LANG_CONTROLS_DOWHILE_OPERATOR_DO: 'Facer',
                LANG_CONTROLS_DOWHILE_OPERATOR_WHILE: 'mentres',
                LANG_CONTROLS_DOWHILE_TOOLTIP: 'Mentres a condición sexa verdadeira continúa executando as acións do bloque.',
                LANG_CONTROLS_EXECUTE: 'Executar',
                LANG_CONTROLS_EXECUTE_TOOLTIP: 'Executa código C/C++. Utilizar con preucación, xa que pode romper facilmente o programa e impedir a súa correcta compilación.',
                LANG_CONTROLS_IF_TOOLTIP_1: 'Se a condición é verdadeira, executa as accións dentro do bloque.',
                LANG_CONTROLS_IF_TOOLTIP_2: 'Se a condición é verdadeira, executa o primeiro bloque de comandos. Se non é, executa o segundo bloque de comandos.',
                LANG_CONTROLS_IF_TOOLTIP_3: 'Se o primeiro valor é verdadeiro, executa o primeiro bloque de comandos. Se non, se o segundo valor é verdadeiro, executa o segundo bloque de comandos.',
                LANG_CONTROLS_IF_TOOLTIP_4: 'Se o primeiro valor é verdadeiro, executa o primeiro bloque de comandos. Se non, se o segundo valor é verdadeiro, executa o segundo bloque de comandos. Se ningún dos valores é verdadeiro, executa o último bloque de comandos',
                LANG_CONTROLS_IF_MSG_IF: 'se',
                LANG_CONTROLS_IF_MSG_ELSEIF: 'se non, se',
                LANG_CONTROLS_IF_MSG_ELSE: 'se non',
                LANG_CONTROLS_IF_MSG_THEN: 'executar',
                LANG_CONTROLS_IF_IF_Field_IF: 'se',
                LANG_CONTROLS_IF_IF_TOOLTIP: 'Engadir, eliminar ou reordenar seccións para reconfigurar este bloque "se".',
                LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF: 'se non, se',
                LANG_CONTROLS_IF_ELSEIF_TOOLTIP: 'Engade unha condición ao bloque "se".',
                LANG_CONTROLS_IF_ELSE_Field_ELSE: 'se non',
                LANG_CONTROLS_IF_ELSE_TOOLTIP: 'Engade unha condición final ao bloque "se" para capturar o resto de opcións.',
                LANG_CONTROLS_FOR_FROM_WARNING: 'Non é posible asignar unha variable ao valor inicial do bucle',
                LANG_CONTROLS_FOR_TO_WARNING: 'Non é posible asignar unha variable ao valor final do bucle',
                LANG_CONTROLS_FOR_INCREMENT_WARNING: 'It is not possible to set a variable as the increment value of the for block', //to translate
                LANG_CONTROLS_FOR_INPUT_WITH: 'Contar con',
                LANG_CONTROLS_FOR_INPUT_VAR: 'x',
                LANG_CONTROLS_FOR_INPUT_FROM: 'desde',
                LANG_CONTROLS_FOR_INPUT_TO: 'ata',
                LANG_CONTROLS_FOR_INPUT_INCREMENT: 'increment', //to translate
                LANG_CONTROLS_FOR_INPUT_DO: 'executar',
                LANG_CONTROLS_FOR_TOOLTIP: 'Contar desde un número de inicio ata un número final. Cada vez que se incrementa a conta a variable toma ese valor e execútanse as accións.',
                LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE: 'mentres',
                LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL: 'ata',
                LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE: 'Mentres a condición sexa verdadeira, executar as instrucións.',
                LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL: 'Mentres a condición sexa falsa, executar as instrucións.',
                LANG_CONTROLS_REPEAT_TITLE_REPEAT: 'Repetir',
                LANG_CONTROLS_REPEAT_TITLE_TIMES: 'veces',
                LANG_CONTROLS_REPEAT_INPUT_DO: 'executar',
                LANG_CONTROLS_REPEAT_TOOLTIP: 'executar as instrucións un número determinado de veces.',
                LANG_CONTROLS_FLOW_STATEMENTS_HELPURL: '',
                LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP: 'o bucle',
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: 'interromper',
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: 'continuar coa seguinte iteración',
                LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK: 'Interromper o bucle que contén esta instrución.',
                LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE: 'Saltar o resto de accións desta iteración e continuar coa seguinte iteración.',
                LANG_CONTROLS_FLOW_STATEMENTS_WARNING: 'Atención: Este bloque só pode ser usado dentro dun bucle.',
                LANG_CONTROLS_SETUP_LOOP_SETUP_TITLE: 'Inicio',
                LANG_CONTROLS_SETUP_LOOP_LOOP_TITLE: 'Repetir',
                LANG_CONTROLS_SETUP_LOOP_TOOLTIP: 'Os bloques en Inicio executaranse unha soa vez no arranque, mentres que os bloques en Repetir executaranse de forma repetida.',
                LANG_CONTROLS_SWITCH: 'se ',
                LANG_CONTROLS_SWITCH_TOOLTIP_1: 'Executa as accións do caso que se cumpra.',
                LANG_CONTROLS_SWITCH_TOOLTIP_2: 'Executa as accións do caso que se cumpra.',
                LANG_CONTROLS_SWITCH_TOOLTIP_3: 'Executa as accións do caso que se cumpra.',
                LANG_CONTROLS_SWITCH_TOOLTIP_4: 'Executa as accións do caso que se cumpra.',
                LANG_CONTROLS_SWITCH_SWITCH_TOOLTIP: 'Este bloque compara un a un se se cumplen os distintos casos.',
                LANG_CONTROLS_SWITCH_CASE_TOOLTIP: 'caso ',
                LANG_CONTROLS_SWITCH_DEFAULT_TOOLTIP: 'O bloque "default" especifica a acción que se vai executar se no se cumpriron ningún dos casos anteriores.',
                LANG_CONTROLS_SWITCH_IS: 'é: ',
                LANG_CONTROLS_SWITCH_CASE: 'caso ',
                LANG_CONTROLS_SWITCH_COLON: ': ',
                LANG_CONTROLS_SWITCH_DEFAULT: 'noutro caso',
                LANG_CONTROLS_SWITCH_DO: 'executar',
                //math blocks :
                LANG_CATEGORY_MATH: 'Matemáticas',
                LANG_MATH_ADVANCED_MAP_MAP: 'Mapear ',
                LANG_MATH_ADVANCED_MAP_FROM: 'De [',
                LANG_MATH_ADVANCED_MAP_HYPHEN: '-',
                LANG_MATH_ADVANCED_MAP_BRACKET: ']',
                LANG_MATH_ADVANCED_MAP_TO: 'a [',
                LANG_MATH_ADVANCED_MAP_TOOLTIP: 'Mapea a entrada desde un rango de valores iniciais a outro rango distinto.',
                LANG_MATH_NUMBER_TOOLTIP: 'Número enteiro',
                LANG_MATH_ARRAY_ARRAY3: '[3]',
                LANG_MATH_ARRAY_BRACKET3: '{',
                LANG_MATH_ARRAY_BRACKET4: '}',
                LANG_MATH_ARRAY_COMMA: ',',
                LANG_MATH_ARRAY_TOOLTIP: 'Vector de tres enteiros',
                LANG_ARRAY_GET_BRACKET1: '[',
                LANG_ARRAY_GET_BRACKET2: ']',
                LANG_ARRAY_GET_TOOLTIP: 'Devolve o valor dun elemento concreto do vector.',
                LANG_MATH_MODULO_TOOLTIP: 'Devolve o resto da división entre dúas entradas.',
                LANG_MATH_BASE_MAP: 'Mapear ',
                LANG_MATH_BASE_MAP_VALUE_TO: 'Valor entre [0-',
                LANG_MATH_BASE_MAP_BRACKET: ']',
                LANG_MATH_BASE_MAP_TOOLTIP: 'Mapea a entrada desde o rango [0-1023] a outro rango de valores.',
                LANG_MATH_SINGLE_OP_ROOT: 'raíz cadrada',
                LANG_MATH_SINGLE_OP_ABSOLUTE: 'valor absoluto',
                LANG_MATH_SINGLE_TOOLTIP_ROOT: 'Devolve a raíz cadrada dun número.',
                LANG_MATH_SINGLE_TOOLTIP_ABS: 'Devolve o valor absoluto dun número.',
                LANG_MATH_SINGLE_TOOLTIP_NEG: 'Devolve o número cambiado de signo.',
                LANG_MATH_SINGLE_TOOLTIP_LN: 'Devolve o logaritmo neperiano dun número.',
                LANG_MATH_SINGLE_TOOLTIP_LOG10: 'Devolve o logaritmo en base 10 dun número.',
                LANG_MATH_SINGLE_TOOLTIP_EXP: 'Devolve o exponencial dun número.',
                LANG_MATH_SINGLE_TOOLTIP_POW10: 'Devolve 10 elevado a unha potencia.',
                LANG_MATH_MIN: 'Minimum value between', //To translate
                LANG_MATH_MIN_PARAM2: 'and', //To translate
                LANG_MATH_MIN_TOOLTIP: 'Returns the minimum value of the inputs.', //To translate
                LANG_MATH_MAX: 'Maximum value between', //To translate
                LANG_MATH_MAX_PARAM2: 'and', //To translate
                LANG_MATH_MAX_TOOLTIP: 'Returns the maximum value of the inputs.', //To translate
                LANG_MATH_POW: 'Value of', //To translate
                LANG_MATH_POW_PARAM2: 'to the power of', //To translate
                LANG_MATH_POW_TOOLTIP: 'Returns the value of the first input to the power of the second.', //To translate
                //text blocks:
                LANG_CATEGORY_TEXT: 'Texto',
                LANG_TEXT_TEXT_HELPURL: '',
                LANG_TEXT_TEXT_TOOLTIP: 'Unha letra, unha palabra ou unha liña de texto.',
                LANG_TEXT_CHAR_TOOLTIP: 'A simbol, letter or number, but just one character', //to translate
                LANG_TEXT_JOIN_HELPURL: '',
                LANG_TEXT_JOIN_Field_CREATEWITH: 'crear texto con',
                LANG_TEXT_JOIN_TOOLTIP: 'Crea texto xuntando calquera número de elementos.',
                LANG_TEXT_CREATE_JOIN_Field_JOIN: 'unir',
                LANG_TEXT_CREATE_JOIN_TOOLTIP: 'Engadir, eliminar ou reordenar seccións para reconfigurar este bloque de texto.',
                LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM: 'elemento',
                LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP: 'Engadir un elemento ao texto.',
                LANG_TEXT_CREATE_JOIN_TITLE_JOIN: 'unir',
                LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM: 'elemento',
                LANG_TEXT_APPEND_HELPURL: '',
                LANG_TEXT_APPEND_TO: 'a',
                LANG_TEXT_APPEND_APPENDTEXT: 'Engadirlle texto',
                LANG_TEXT_APPEND_VARIABLE: 'elemento',
                LANG_TEXT_APPEND_TOOLTIP: 'Engadir texto á variable %1.',
                LANG_TEXT_LENGTH_HELPURL: '',
                LANG_TEXT_LENGTH_INPUT_LENGTH: 'lonxitude',
                LANG_TEXT_LENGTH_TOOLTIP: 'Devolve o número de letras (incluíndo os espazos) no texto introducido.',
                LANG_TEXT_EQUALSIGNORECASE_IS: '',
                LANG_TEXT_EQUALSIGNORECASE_EQUAL: ' =',
                LANG_TEXT_EQUALSIGNORECASE_QUESTION: '',
                LANG_TEXT_EQUALSIGNORECASE_TOOLTIP: 'Compara se os dous textos introducidos son iguais, independentemente de que teñan letras maiúsculas ou minúsculas.',
                LANG_TEXT_SUBSTRING: 'Recortar ',
                LANG_TEXT_SUBSTRING_FROM: 'desde',
                LANG_TEXT_SUBSTRING_TO: 'ata',
                LANG_TEXT_SUBSTRING_TOOLTIP: 'Recorta os caracteres do texto introducido que se atopen entre os dous índices e crea con eles un novo texto.',
                LANG_TEXT_CHARAT: 'Character of text', //To translate
                LANG_TEXT_CHARAT_POSITION: 'in position', //To translate
                LANG_TEXT_CHARAT_TOOLTIP: 'Returns character in the position of the text (beginning with 0).', //To translate
                LANG_TEXT_SPECIAL: 'Caracteres especiais',
                LANG_TEXT_SPECIAL_TAB: 'Tabulador',
                LANG_TEXT_SPECIAL_CARRIAGE_RETURN: 'Retorno de carro',
                LANG_TEXT_SPECIAL_LINE_FEED: 'Salto de liña',
                LANG_TEXT_SPECIAL_TOOLTIP: 'Escribe caracteres especiais.',
                LANG_TEXT_COMMENT: 'Comment', //to translate
                LANG_TEXT_COMMENT_TOOLTIP: 'Inserts a comment of one line in the program.', //to translate
                //advanced blocks :
                LANG_CATEGORY_ADVANCED: 'Funcións PIN',
                LANG_ADVANCED_INOUT_ANALOG_READ: 'Ler o pin analóxico PIN#',
                LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP: 'Le o valor dun pin analóxico específico.',
                LANG_ADVANCED_INOUT_ANALOG_WRITE: 'Escribir no PIN dixital',
                LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE: 'o valor analóxico',
                LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP: 'Escribe un valor entre 0 e 255 nun PIN analóxico específico.',
                LANG_ADVANCED_BUILTIN_LED: 'LED da PLACA',
                LANG_ADVANCED_BUILTIN_LED_STATE: 'estado',
                LANG_ADVANCED_BUILTIN_LED_ON: 'ACESO',
                LANG_ADVANCED_BUILTIN_LED_OFF: 'APAGADO',
                LANG_ADVANCED_BUILTIN_LED_TOOLTIP: 'LED integrado na placa que está internamente conectado ao PIN 13.',
                LANG_ADVANCED_INOUT_dixital_READ: 'Ler o pin dixital PIN#',
                LANG_ADVANCED_INOUT_dixital_READ_TOOLTIP: 'Le o valor desde un pin dixital específico.',
                LANG_ADVANCED_INOUT_dixital_WRITE: 'Escribir no pin dixital',
                LANG_ADVANCED_INOUT_dixital_WRITE_GET_VAR: 'o valor',
                LANG_ADVANCED_INOUT_dixital_WRITE_PIN: 'PIN#',
                LANG_ADVANCED_INOUT_dixital_WRITE_STATE: 'estado',
                LANG_ADVANCED_INOUT_dixital_WRITE_HIGH: 'ALTO',
                LANG_ADVANCED_INOUT_dixital_WRITE_LOW: 'BAIXO',
                LANG_ADVANCED_INOUT_dixital_WRITE_TOOLTIP: 'Escribe un valor nun pin dixital específico.',
                LANG_ADVANCED_INOUT_PULSEIN: 'Time for digital pin PIN#', //to translate
                LANG_ADVANCED_INOUT_PULSEIN_MODE: 'to change to', //to translate
                LANG_ADVANCED_INOUT_PULSEIN_TOOLTIP: 'Returns the time for a digital pin to change to the state specified (in milliseconds).', //to translate
                LANG_ADVANCED_HIGHLOW_HIGH: 'ALTO',
                LANG_ADVANCED_HIGHLOW_LOW: 'BAIXO',
                LANG_ADVANCED_HIGHLOW_TOOLTIP: 'Escribe "ALTO" oU "BAIXO" en función do seleccionado.',
                LANG_ADVANCED_MATH_RANDOM: 'Aleatorio entre',
                LANG_ADVANCED_MATH_RANDOM_AND: ' e ',
                LANG_ADVANCED_MATH_RANDOM_TOOLTIP: 'Crea un número ao chou entre os dous límites introducidos.',
                LANG_ADVANCED_MATH_RANDOM_SEED: 'Set random seed to', //to translate
                LANG_ADVANCED_MATH_RANDOM_SEED_TOOLTIP: 'Sets seed for random number generator. For a random seed, read from an unconnected analog pin; to repeat the same sequence, use a fixed number.', //to translate
                //procedures blocks
                LANG_CATEGORY_PROCEDURES: 'Funcións',
                LANG_PROCEDURES_RETURN: 'Devolve',
                LANG_PROCEDURES_RETURN_TOOLTIP: 'Devolve un valor',
                LANG_PROCEDURES_CALL_WITHOUT_DEFINITION: 'Chamada a unha función non definida previamente.',
                LANG_PROCEDURES_DEFNORETURN_HELPURL: '',
                LANG_PROCEDURES_DEFNORETURN_PROCEDURE: 'función_sen_retorno',
                LANG_PROCEDURES_DEFNORETURN_DO: 'executar',
                LANG_PROCEDURES_DEFNORETURN_TOOLTIP: 'Función que se executa sen devolver nada.',
                LANG_PROCEDURES_DEFRETURN_HELPURL: '',
                LANG_PROCEDURES_DEFRETURN_PROCEDURE: 'función_con_retorno',
                LANG_PROCEDURES_DEFRETURN_DO: 'executar',
                LANG_PROCEDURES_DEFRETURN_RETURN: 'Devolve',
                LANG_PROCEDURES_DEFRETURN_TOOLTIP: 'Función con valor de retorno.',
                LANG_PROCEDURES_DEF_DUPLICATE_WARNING: 'Atención: Esta función ten parámetros duplicados.',
                LANG_PROCEDURES_CALLNORETURN_HELPURL: '',
                LANG_PROCEDURES_CALLNORETURN_CALL: 'executar',
                LANG_PROCEDURES_CALLNORETURN_PROCEDURE: 'función_sen_retorno',
                LANG_PROCEDURES_CALLNORETURN_TOOLTIP: 'Executa esta función.',
                LANG_PROCEDURES_CALLRETURN_HELPURL: '',
                LANG_PROCEDURES_CALLRETURN_CALL: 'executar',
                LANG_PROCEDURES_CALLRETURN_PROCEDURE: 'función_con_retorno',
                LANG_PROCEDURES_CALLRETURN_TOOLTIP: 'Executa esta función que ten valor de retorno.',
                LANG_PROCEDURES_MUTATORCONTAINER_Field: 'parámetros',
                LANG_PROCEDURES_MUTATORARG_Field: 'variable:',
                LANG_PROCEDURES_HIGHLIGHT_DEF: 'Destaca a función',
                LANG_PROCEDURES_IFRETURN_TOOLTIP: 'Se a condición é verdadeira, a función devolverá este valor.',
                LANG_PROCEDURES_IFRETURN_WARNING: 'Atención: Este bloque só pode ser usado dentro dunha función que teña valor de retorno.',
                //variables blocks :
                LANG_CATEGORY_VARIABLES: 'Variables',
                LANG_VARIABLES_CALL_WITHOUT_DEFINITION: 'Esta variable non está declarada.',
                LANG_VARIABLES_GLOBAL: 'Declarar variable GLOBAL',
                LANG_VARIABLES_GLOBAL_TYPE: 'de tipo ',
                LANG_VARIABLES_GLOBAL_EQUALS: '=',
                LANG_VARIABLES_GLOBAL_TOOLTIP: 'Declara e define unha variable GLOBAL de tipo enteiro (int) ou texto (String).',
                LANG_VARIABLES_LOCAL: 'Declarar variable',
                LANG_VARIABLES_LOCAL_TYPE: 'de tipo ',
                LANG_VARIABLES_LOCAL_EQUALS: '=',
                LANG_VARIABLES_LOCAL_TOOLTIP: 'Declara e define unha variable LOCAL de tipo enteiro (int) ou texto (String).',
                LANG_VARIABLES_DEFINE: 'Definir variable ',
                LANG_VARIABLES_DEFINE_AS: 'como',
                LANG_VARIABLES_DEFINE_TOOLTIP: 'Definir o valor dunha variable.',
                LANG_VARIABLES_SET: 'Var',
                LANG_VARIABLES_SET_AS: '=',
                LANG_VARIABLES_SET_TOOLTIP: 'Cambia o valor dunha variable.',
                LANG_VARIABLES_GET: 'Var',
                LANG_VARIABLES_GET_TOOLTIP: 'Devolve o valor dunha variable',
                LANG_VARIABLES_PIN_ANALOG: 'Pin analóxico',
                LANG_VARIABLES_PIN_dixital: 'Pin dixital',
                LANG_VARIABLES_PIN_dixital0: 'COIDADO: o pin dixital 0 (pin Rx) é usado para a comunicación da placa desde o ordenador. Usarlo para conectar componentes pode dar problemas ao programala.',
                LANG_VARIABLES_PIN_TOOLTIP: 'Selecciona o PIN desexado.',
                LANG_VARIABLES_TYPE_BYTE: 'Byte',
                LANG_VARIABLES_TYPE_FLOAT: 'Decimal',
                LANG_VARIABLES_TYPE_INTEGER: 'enteiro',
                LANG_VARIABLES_TYPE_INTEGER_LONG: 'enteiro longo',
                LANG_VARIABLES_TYPE_INTEGER_ULONG: 'Unsigned Long Integer', //To translate
                LANG_VARIABLES_TYPE_STRING: 'Texto',
                LANG_VARIABLES_TYPE_CHAR: 'Character', //to translate
                LANG_VARIABLES_TYPE_BOOLEAN: 'Boolean', //to translate
                LANG_VARIABLES_VOLATILE_GLOBAL: 'Declare VOLATILE GLOBAL variable ', // To translate
                LANG_VARIABLES_VOLATILE_GLOBAL_TYPE: 'of type ', // To translate
                LANG_VARIABLES_VOLATILE_GLOBAL_EQUALS: 'equals ', // To translate
                LANG_VARIABLES_VOLATILE_GLOBAL_TOOLTIP: 'Declares and defines a VOLATILE GLOBAL variable of type int or String used in a ISR function.', // To translate
                //sound blocks (zum):
                LANG_CATEGORY_ZUM: 'Sonidos',
                LANG_ZUM_PIEZO_BUZZER: 'Zumbador',
                LANG_ZUM_PIEZO_BUZZER_PIN: 'PIN#',
                LANG_ZUM_PIEZO_BUZZER_TONE: 'TON',
                LANG_ZUM_PIEZO_BUZZER_DO: 'DO',
                LANG_ZUM_PIEZO_BUZZER_RE: 'RE',
                LANG_ZUM_PIEZO_BUZZER_MI: 'MI',
                LANG_ZUM_PIEZO_BUZZER_FA: 'FA',
                LANG_ZUM_PIEZO_BUZZER_SOL: 'SOL',
                LANG_ZUM_PIEZO_BUZZER_LA: 'LA',
                LANG_ZUM_PIEZO_BUZZER_SI: 'SI',
                LANG_ZUM_PIEZO_BUZZER_DURATION: 'Duración [ms]',
                LANG_ZUM_PIEZO_BUZZER_TOOLTIP: 'Zumbador piezoeléctrico',
                LANG_ZUM_PIEZO_BUZZERAV: 'Zumbador avanzado',
                LANG_ZUM_PIEZO_BUZZERAV_PIN: 'PIN#',
                LANG_ZUM_PIEZO_BUZZERAV_TONE: 'TON',
                LANG_ZUM_PIEZO_BUZZERAV_DURATION: 'Duración [ms]',
                LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP: 'Zumbador piezoeléctrico avanzado.',
                LANG_ZUM_DHT11_VALUE: 'Get', //to translate
                LANG_ZUM_DHT11_VALUE1: 'Temperature', //to translate
                LANG_ZUM_DHT11_VALUE2: 'Humidity', //to translate
                LANG_ZUM_DHT11_PIN: 'PIN', //to translate
                LANG_ZUM_DHT11_TOOLTIP: 'Get temperature or humidity from a DHT11, DHT21 or DHT22 sensor.', //to translate
                //motor blocks (servo and stepper):
                LANG_CATEGORY_MOTOR: 'Motors', //to translate
                LANG_MOTOR_SERVO_CONT: 'Servo de rotación continua',
                LANG_MOTOR_SERVO_CONT_PIN: 'PIN#',
                LANG_MOTOR_SERVO_CONT_ROT: 'ROT',
                LANG_MOTOR_SERVO_CONT_TURN_CLOCKWISE: 'XIRAR NO SENTIDO HORARIO',
                LANG_MOTOR_SERVO_CONT_TURN_COUNTERCLOCKWISE: 'XIRAR NO SENTIDO ANTIHORARIO',
                LANG_MOTOR_SERVO_CONT_STOPPED: 'DETER',
                LANG_MOTOR_SERVO_CONT_DELAY: 'Pausa [ms]',
                LANG_MOTOR_SERVO_CONT_TOOLTIP: 'Servo de rotación continua.',
                LANG_MOTOR_SERVO_MOVE: 'Servo',
                LANG_MOTOR_SERVO_MOVE_PIN: 'PIN#',
                LANG_MOTOR_SERVO_MOVE_DEGREES: 'Graos (0~180)',
                LANG_MOTOR_SERVO_MOVE_DELAY: 'Pausa [ms]',
                LANG_MOTOR_SERVO_MOVE_TOOLTIP: 'Mover o servo entre 0 e 180 grados.',
                LANG_MOTOR_SERVO_WARNING: 'Non é posible definir o pin do servo utilizando unha variable',
                LANG_MOTOR_STEPPER_MOVE: 'Stepper motor', //to translate
                LANG_MOTOR_STEPPER_MOVE_SPR: 'Steps per revolution', //to translate
                LANG_MOTOR_STEPPER_MOVE_PINS: '4 pins?', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN1: 'Pin 1', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN2: 'Pin 2', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN3: 'Pin 3', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN4: 'Pin 4', //to translate
                LANG_MOTOR_STEPPER_MOVE_SETSPEED: 'Set speed to', //to translate
                LANG_MOTOR_STEPPER_MOVE_SETSPEED_NEXT: '(rpm)', //to translate
                LANG_MOTOR_STEPPER_MOVE_STEP: 'Move motor', //to translate
                LANG_MOTOR_STEPPER_MOVE_STEP_NEXT: '(steps)', //to translate
                LANG_MOTOR_STEPPER_MOVE_TOOLTIP: 'Moves motor the number of steps. A positive steps value move in one direction, a negative value moves to the other direction.', //to translate
                LANG_MOTOR_PCA9685_DEF: 'PCA9685', //to translate
                LANG_MOTOR_PCA9685_DEF_SERVO: 'Servo', //to translate
                LANG_MOTOR_PCA9685_DEF_ADDRESS: 'Address of the component', //to translate
                LANG_MOTOR_PCA9685_DEF_TOOLTIP: 'Defines a PCA9685 connected to Arduino over I2C.', //to translate
                LANG_MOTOR_PCA9685_SET_PWM: 'PCA9685 Move servo', //to translate
                LANG_MOTOR_PCA9685_SET_PWM_ANGLE: 'angle', //to translate
                LANG_MOTOR_PCA9685_SET_PWM_TOOLTIP: 'Moves servo connected to PCA9685 the specified angle in degrees.', //to translate
                //interrupt blocks :
                LANG_CATEGORY_INTERRUPTS: 'Interrupts', // To translate
                LANG_INTERRUPTS_STATE: 'Set interrupts state to ', // To translate
                LANG_INTERRUPTS_STATE_ENABLED: 'ENABLED', // To translate
                LANG_INTERRUPTS_STATE_DISABLED: 'DISABLED', // To translate
                LANG_INTERRUPTS_STATE_TOOLTIP: 'Enable or Disable interrupts. Some functions will not work while interrupts are disabled. Use only for particularly critical sections of code.', // To translate
                LANG_INTERRUPTS_ATTACH: 'Attach procedure ', // To translate
                LANG_INTERRUPTS_ATTACH_PARAM2: 'in mode ', // To translate
                LANG_INTERRUPTS_ATTACH_PARAM3: 'with interrupt of digital pin', // To translate
                LANG_INTERRUPTS_ATTACH_LOW: 'LOW', // To translate
                LANG_INTERRUPTS_ATTACH_CHANGE: 'CHANGE', // To translate
                LANG_INTERRUPTS_ATTACH_RISING: 'RISING', // To translate
                LANG_INTERRUPTS_ATTACH_FALLING: 'FALLING', // To translate
                LANG_INTERRUPTS_ATTACH_PROCEDURE: 'func_without_return', // To translate
                LANG_INTERRUPTS_ATTACH_TOOLTIP: 'Set the procedure to be executed when an interrupt is raised in the specified pin.', // To translate
                LANG_INTERRUPTS_DETACH: 'Detach interrupt on digital pin', // To translate
                LANG_INTERRUPTS_DETACH_TOOLTIP: 'Disables the interrupt on the pin. When the pin is activated, the procedure associated is no longer executed.', // To translate
                LANG_WIFI_CONNECT: 'Wifi:', //To translate
                LANG_WIFI_CONNECT_STATION: 'connect', //To translate
                LANG_WIFI_CONNECT_SOFTAP: 'create network', //To translate
                LANG_WIFI_CONNECT_SSID: 'SSID', //To translate
                LANG_WIFI_CONNECT_PASSWORD: 'password', //To translate
                LANG_WIFI_CONNECT_CHANNEL: 'channel', //To translate
                LANG_WIFI_CONNECT_RX_PIN: 'Rx pin', //To translate
                LANG_WIFI_CONNECT_TX_PIN: 'Tx pin', //To translate
                LANG_WIFI_CONNECT_BAUD: 'baud rate', //To translate
                LANG_WIFI_CONNECT_TOOLTIP: 'Connects or creates a wifi using a ESP8266 adapter, and returns true on success.', //To translate
                LANG_WIFI_DISCONNECT: 'Wifi:disconnect', //To translate
                LANG_WIFI_DISCONNECT_TOOLTIP: 'Disconnects from the current wifi network.', //To translate
                LANG_WIFI_CLIENT: 'Wifi:connect to server', //To translate
                LANG_WIFI_CLIENT_IP: 'IP address', //To translate
                LANG_WIFI_CLIENT_PORT: 'Port', //To translate
                LANG_WIFI_CLIENT_TOOLTIP: 'Connects to a TCP server.', //To translate
                LANG_WIFI_SERVER: 'Wifi:start server', //To translate
                LANG_WIFI_SERVER_PORT: 'Port', //To translate
                LANG_WIFI_SERVER_TOOLTIP: 'Create a TCP server to accept connections from clients.', //To translate
                LANG_WIFI_GETIP: 'Wifi:get IP address', //To translate
                LANG_WIFI_GETIP_TOOLTIP: 'Returns IP address of the adapter.', //To translate
                LANG_WIFI_SEND_SERVER: 'Wifi:send to server', //To translate
                LANG_WIFI_SEND_SERVER_DATA: 'Text', //To translate
                LANG_WIFI_SEND_SERVER_TOOLTIP: 'Send text to the TCP server.', //To translate
                LANG_WIFI_SEND_CLIENT: 'Wifi:send to client', //To translate
                LANG_WIFI_SEND_CLIENT_ID: 'ID', //To translate
                LANG_WIFI_SEND_CLIENT_DATA: 'Data', //To translate
                LANG_WIFI_SEND_CLIENT_TOOLTIP: 'Send text to specified client (ID).', //To translate
                LANG_WIFI_RECEIVE_CLIENT: 'Wifi:receive from client', //To translate
                LANG_WIFI_RECEIVE_CLIENT_TOOLTIP: 'Receives a text from client, begining with id number and a colon (:). If timeout is reached, returns an empty string.', //To translate
                LANG_WIFI_RECEIVE_SERVER: 'Wifi:receive from server', //To translate
                LANG_WIFI_RECEIVE_SERVER_TIMEOUT: 'Timeout', //To translate
                LANG_WIFI_RECEIVE_SERVER_TOOLTIP: 'Receives a string from TCP server or empty string if timeout reached.', //To translate
                LANG_WIFI_CLOSE_SERVER: 'Wifi:stop server', //To translate
                LANG_WIFI_CLOSE_SERVER_TOOLTIP: 'Shutdown TCP server.', //To translate
                LANG_WIFI_CLOSE_CLIENT: 'Wifi:stop connection', //To translate
                LANG_WIFI_CLOSE_CLIENT_TOOLTIP: 'Shutdown connection with TCP server.' //To translate
            };
            // Node
            if (typeof module !== 'undefined' && module.exports) {
                module.exports = language;
            }
            // Browser
            // if (typeof window !== 'undefined' && this.RoboBlocks && this.RoboBlocks.locales.add) {
            //     this.RoboBlocks.locales.add('es', language);
            if (typeof window !== 'undefined' && RoboBlocks && RoboBlocks.locales.add) {
                RoboBlocks.locales.add('gl-ES', language);
            }
        }());

        // Source: lang/it_IT.js
        (function() {
            var language = {
                //random :
                BLOCKLY_MSG_DUPLICATE_BLOCK: 'Duplica',
                BLOCKLY_MSG_REMOVE_COMMENT: 'Rimuovi commento',
                BLOCKLY_MSG_ADD_COMMENT: 'Aggiungi commento',
                BLOCKLY_MSG_EXTERNAL_INPUTS: 'Input esterni',
                BLOCKLY_MSG_INLINE_INPUTS: 'Input in linea',
                BLOCKLY_MSG_DELETE_BLOCK: 'Cancella blocco',
                BLOCKLY_MSG_DELETE_X_BLOCKS: 'Cancella %1 blocchi',
                BLOCKLY_MSG_COLLAPSE_BLOCK: 'Comprimi',
                BLOCKLY_MSG_EXPAND_BLOCK: 'Espandi blocco',
                BLOCKLY_MSG_DISABLE_BLOCK: 'Disattiva blocco',
                BLOCKLY_MSG_ENABLE_BLOCK: 'Attiva blocco',
                BLOCKLY_MSG_HELP: 'Aiuto',
                BLOCKLY_MSG_COLLAPSE_ALL: 'Comprimi blocchi',
                BLOCKLY_MSG_EXPAND_ALL: 'Espandi blocchi',
                LANG_VARIABLES_SET_ITEM: 'Oggetto',
                LANG_RESERVED_WORDS: 'Parola riservata: questo nome non è permesso.',
                LANG_CHAR_LENGTH: 'A character must have length 0 or 1.', //to translate
                //logic blocks:
                LANG_CATEGORY_LOGIC: 'Logica',
                LANG_LOGIC_OPERATION_AND: 'e',
                LANG_LOGIC_OPERATION_OR: 'o',
                LANG_LOGIC_COMPARE_TOOLTIP_EQ: 'Controlla che entrambi i valori siano uguali .',
                LANG_LOGIC_COMPARE_TOOLTIP_NEQ: 'Controlla che i valori siano differenti.',
                LANG_LOGIC_COMPARE_TOOLTIP_LT: 'Controlla che il primo valore sia più piccolo del secondo.',
                LANG_LOGIC_COMPARE_TOOLTIP_LTE: 'Controlla che il primo valore sia più piccolo o uguale al secondo.',
                LANG_LOGIC_COMPARE_TOOLTIP_GT: 'Controlla che il primo valore sia più grande del secondo.',
                LANG_LOGIC_COMPARE_TOOLTIP_GTE: 'Controlla che il primo valore sia più grande o uguale al secondo.',
                LANG_LOGIC_OPERATION_TOOLTIP_AND: 'Controlla che entrambi i valori siano Veri.',
                LANG_LOGIC_OPERATION_TOOLTIP_OR: 'Controlla che almeno uno dei due valori sia Vero.',
                LANG_LOGIC_NEGATE_INPUT_NOT: 'non è',
                LANG_LOGIC_NEGATE_TOOLTIP: 'Restituisce il valore opposto.',
                LANG_LOGIC_NEGATE_HELPURL: '',
                LANG_LOGIC_BOOLEAN_TRUE: 'Vero',
                LANG_LOGIC_BOOLEAN_FALSE: 'Falso',
                LANG_LOGIC_BOOLEAN_TOOLTIP: 'Restituisce il valore vero o falso della funzione selezionata.',
                //communication blocks:
                LANG_CATEGORY_COMMUNICATION: 'Comunicazione',
                LANG_BQ_BLUETOOTH_RECEIVE: 'Ricezione dati da Bluetooth',
                LANG_BQ_BLUETOOTH_RECEIVE_BLUETOOTH: 'Bluetooth',
                LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP: 'Restituisce i dati ricevuti dal modulo Bluetooth',
                LANG_BQ_BLUETOOTH_SEND: 'Invio dati a Bluetooth',
                LANG_BQ_BLUETOOTH_SEND_SEND: 'Invia',
                LANG_BQ_BLUETOOTH_SEND_TOOLTIP: 'Invia dati usando il modulo Bluetooth',
                LANG_BQ_BLUETOOTH_DEF: 'Definizione Bluetooth',
                LANG_BQ_BLUETOOTH_DEF_BAUD_RATE: 'Velocità di trasmissione',
                LANG_BQ_BLUETOOTH_DEF_PIN1: 'RX',
                LANG_BQ_BLUETOOTH_DEF_PIN2: 'TX',
                LANG_BQ_BLUETOOTH_DEF_NAME: 'Nome',
                LANG_BQ_BLUETOOTH_DEF_PINCODE: 'Codice pin',
                LANG_BQ_BLUETOOTH_DEF_RECEIVE: 'Ricevi',
                LANG_BQ_BLUETOOTH_DEF_SEND: 'Invia',
                LANG_BQ_BLUETOOTH_DEF_TOOLTIP: 'Definizione del modulo Bluetooth',
                LANG_ADVANCED_BT_SERIAL_AVAILABLE: 'Porta seriale Bluetooth disponibile',
                LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP: 'Controlla se il Bluetooth è disponibile o meno.',
                LANG_ADVANCED_SERIAL_AVAILABLE: 'Porta seriale disponibile',
                LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP: 'Controlla se la porta seriale è disponibile o meno.',
                LANG_ADVANCED_SERIAL_PARSEINT: 'Serial Read Integer', // To translate
                LANG_ADVANCED_SERIAL_PARSEINT_TOOLTIP: 'First valid (long) integer number from the serial buffer', // To translate
                LANG_ADVANCED_SERIAL_PRINT: 'Invio dati porta seriale',
                LANG_ADVANCED_SERIAL_PRINT_TOOLTIP: 'Scrive i dati come testo ASCII.',
                LANG_ADVANCED_SERIAL_PRINTLN: 'Invio dati porta seriale (+accapo)',
                LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP: 'Visualizza i dati come testo ASCII aggiungendo l\'accapo (CR).',
                LANG_ADVANCED_SERIAL_PRINT_FORMAT: 'Prints value with format', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_1: 'Binary', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_2: 'Octal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_3: 'Decimal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_4: 'Hexadecimal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_5: 'Without decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_6: 'One decimal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_7: 'Two decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_8: 'Three decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_9: 'Four decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_TOOLTIP: 'Prints value with specified format', //to translate
                LANG_ADVANCED_SERIAL_PRINTLN_FORMAT: 'Send value with format and CR', //To translate
                LANG_ADVANCED_SERIAL_PRINTLN_FORMAT_TOOLTIP: 'Send a number to serial port with specified format and carriage return (CR).', //To translate
                LANG_ADVANCED_SERIAL_READ: 'Ricezione dati porta seriale',
                LANG_ADVANCED_SERIAL_READ_TOOLTIP: 'Riceve come byte i dati dalla porta seriale.',
                LANG_ADVANCED_SERIAL_READSTRING: 'Ricezione stringa porta seriale',
                LANG_ADVANCED_SERIAL_READSTRING_TOOLTIP: 'Riceve come testo ASCII i dati dalla porta seriale.',
                //sensor blocks :
                LANG_CATEGORY_SENSOR: 'Sensori',
                LANG_BQ_BAT: 'BAT - Sensore ad ultrasuoni',
                LANG_BQ_BAT_RED_PIN: 'ECHO PIN#',
                LANG_BQ_BAT_BLUE_PIN: 'TRIGGER PIN#',
                LANG_BQ_BAT_TOOLTIP: 'Restituisce la distanza misurata dal sensore ad ultrasuoni.',
                LANG_IR_READ: 'Reads from infrared receiver', //to translate
                LANG_IR_READ_PIN: 'connected to PIN#', //to translate
                LANG_IR_READ_TOOLTIP: 'Reads the value received from the infrared receiver', //to translate
                //LCD blocks:
                LANG_CATEGORY_LCD: 'LCD bloqs',
                LANG_LCD_DEF: 'LCD (2x16)',
                LANG_LCD_DEF_CONNECTION: 'Connection type', //to translate
                LANG_LCD_DEF_CONNECTION_PARALLEL: 'Parallel (6 pins)', //to translate
                LANG_LCD_DEF_CONNECTION_I2C: 'I2C (4 wires)', //to translate
                LANG_LCD_DEF_ADDRESS: 'Address of the component', //to translate
                LANG_LCD_DEF_PIN_1: 'RS Pin', //to translate
                LANG_LCD_DEF_PIN_2: 'Enable Pin', //to translate
                LANG_LCD_DEF_PIN_3: 'Data4 Pin', //to translate
                LANG_LCD_DEF_PIN_4: 'Data5 Pin', //to translate
                LANG_LCD_DEF_PIN_5: 'Data6 Pin', //to translate
                LANG_LCD_DEF_PIN_6: 'Data7 Pin', //to translate
                LANG_LCD_DEF_TOOLTIP: 'Questo blocco definisce l\'LCD',
                LANG_LCD_ADVANCED_DEF: 'LCD avanzato',
                LANG_LCD_ADVANCED_ROWS: 'Righe',
                LANG_LCD_ADVANCED_COLUMNS: 'Colonne',
                LANG_LCD_DEF_ADVANCED_TOOLTIP: 'Blocco che definisce il display LCD avanzato',
                LANG_LCD_SETBACKLIGHT: 'LCD: imposta retroilluminazione(',
                LANG_LCD_SETBACKLIGHT_CLOSE: ')',
                LANG_LCD_SETBACKLIGHT_TOOLTIP: 'Imposta la retroilluminazione del display LCD.',
                LANG_LCD_PRINT: 'LCD: Stampa ',
                LANG_LCD_PRINT_POSITION: 'Imposta posizione del testo',
                LANG_LCD_PRINT_TOOLTIP: 'Visualizza una stringa sul display LCD ad una determinata posizione o alla successiva disponibile.',
                LANG_LCD_CLEAR: 'Pulisci LCD',
                LANG_LCD_CLEAR_TOOLTIP: 'Pulisce l\'LCD',
                LANG_LCD_HOME: 'LCD Go home', //to translate
                LANG_LCD_HOME_TOOLTIP: 'LCD: Positions the cursor in the upper-left corner of the screen', //to translate
                LANG_LCD_DISPLAY: 'LCD Show content', //to translate
                LANG_LCD_DISPLAY_TOOLTIP: 'LCD: Turns on the LCD display and restore the text that was on the display', //to translate
                LANG_LCD_NODISPLAY: 'LCD Hide content', //to translate
                LANG_LCD_NODISPLAY_TOOLTIP: 'LCD: Turns off the LCD display, without losing the text currently shown on it', //to translate
                LANG_LCD_SCROLLDISPLAYLEFT: 'LCD Scrolls to the left', //to translate
                LANG_LCD_SCROLLDISPLAYLEFT_TOOLTIP: 'LCD: Scrolls the contents of the display one space to the left', //to translate
                LANG_LCD_SCROLLDISPLAYRIGHT: 'LCD Scrolls to the right', //to translate
                LANG_LCD_SCROLLDISPLAYRIGHT_TOOLTIP: 'LCD: Scrolls the contents of the display one space to the right', //to translate
                //controls blocks :
                LANG_CATEGORY_CONTROLS: 'Controllo',
                LANG_CONTROLS_BASE_DELAY_WAIT: 'Attendi (ms)',
                LANG_CONTROLS_BASE_DELAY_TOOLTIP: 'Attende un determinato tempo in millisecondi (ms)',
                LANG_CONTROLS_BASE_MILLIS: 'Time from start (ms)', // To translate
                LANG_CONTROLS_BASE_MILLIS_TOOLTIP: 'Number of milliseconds since the program started (long integer)', // To translate
                LANG_CONTROLS_BASE_DELAY_MICROSECONDS: 'Wait [us]', //To translate
                LANG_CONTROLS_BASE_DELAY_MICROSECONDS_TOOLTIP: 'Waits the specified time in microseconds (us)', //To translate
                LANG_CONTROLS_BASE_MICROS: 'Time from start (us)', //To translate
                LANG_CONTROLS_BASE_MICROS_TOOLTIP: 'Number of microseconds since the program started (long integer)', //To translate
                LANG_CONTROLS_DOWHILE_OPERATOR_DO: 'Do',
                LANG_CONTROLS_DOWHILE_OPERATOR_WHILE: 'while',
                LANG_CONTROLS_DOWHILE_TOOLTIP: 'While the condition is true, continue doing the statements.',
                LANG_CONTROLS_EXECUTE: 'Execute',
                LANG_CONTROLS_EXECUTE_TOOLTIP: 'Executes C/C++ code. Use with caution, as it can easily break the program and prevent it from compiling.',
                LANG_CONTROLS_IF_TOOLTIP_1: 'Se la condizione è vera, esegue il blocco.',
                LANG_CONTROLS_IF_TOOLTIP_2: 'Se la condizione è vera, esegue il primo blocco, altrimenti esegue il secondo blocco.',
                LANG_CONTROLS_IF_TOOLTIP_3: 'Se la prima condizione è vera si esegue il primo blocco di codice. Altrimenti, se il secondo valore è Vero, viene eseguito il secondo blocco di codice.',
                LANG_CONTROLS_IF_TOOLTIP_4: 'Se la prima condizione è vera, si esegue il primo blocco. Altrimenti, se il secondo valore è Vero, viene eseguito il secondo blocco.',
                LANG_CONTROLS_IF_MSG_IF: 'se',
                LANG_CONTROLS_IF_MSG_ELSEIF: 'altrimenti se',
                LANG_CONTROLS_IF_MSG_ELSE: 'altrimenti',
                LANG_CONTROLS_IF_MSG_THEN: 'esegui',
                LANG_CONTROLS_IF_IF_Field_IF: 'se',
                LANG_CONTROLS_IF_IF_TOOLTIP: 'Aggiunge, rimuove o riordina la sezione per riconfigurare il blocco SE.',
                LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF: 'altrimenti se',
                LANG_CONTROLS_IF_ELSEIF_TOOLTIP: 'Aggiunge una condizione al blocco ALTRIMENTI SE.',
                LANG_CONTROLS_IF_ELSE_Field_ELSE: 'altrimenti',
                LANG_CONTROLS_IF_ELSE_TOOLTIP: 'Aggiunge una seconda condizione, prende tutte le altre condizioni del blocco SE.',
                LANG_CONTROLS_FOR_FROM_WARNING: 'Impossibile impostare una variabile per il valore iniziale del blocco.',
                LANG_CONTROLS_FOR_TO_WARNING: 'Impossibile impostare una variabile per il valore finale del blocco.',
                LANG_CONTROLS_FOR_INCREMENT_WARNING: 'It is not possible to set a variable as the increment value of the for block', //to translate
                LANG_CONTROLS_FOR_INPUT_WITH: 'Conta con',
                LANG_CONTROLS_FOR_INPUT_VAR: 'x',
                LANG_CONTROLS_FOR_INPUT_FROM: 'da',
                LANG_CONTROLS_FOR_INPUT_TO: 'a',
                LANG_CONTROLS_FOR_INPUT_INCREMENT: 'increment', //to translate
                LANG_CONTROLS_FOR_INPUT_DO: 'esegui',
                LANG_CONTROLS_FOR_TOOLTIP: 'Conta dal numero iniziale al numero finale. La variabile corrispondente viene incrementata ad ogni ciclo.',
                LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE: 'mentre',
                LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL: 'finchè',
                LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE: 'Finché la condizione è vera, esegue il blocco.',
                LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL: 'Finché la condizione è falsa, esegue il blocco.',
                LANG_CONTROLS_REPEAT_TITLE_REPEAT: 'Ripetizione',
                LANG_CONTROLS_REPEAT_TITLE_TIMES: 'Volte',
                LANG_CONTROLS_REPEAT_INPUT_DO: 'esegui',
                LANG_CONTROLS_REPEAT_TOOLTIP: 'Ripeti il blocco per un determinato numero di volte',
                LANG_CONTROLS_FLOW_STATEMENTS_HELPURL: '',
                LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP: 'del ciclo',
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: 'interrompi',
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: 'Continua con la prossima interazione',
                LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK: 'Condizione d\'uscita dal ciclo.',
                LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE: 'Saltare il resto del ciclo e continuare con la prossima interazione.',
                LANG_CONTROLS_FLOW_STATEMENTS_WARNING: 'Attenzione: questo blocco può essere usato solo insieme ad un CICLO.',
                LANG_CONTROLS_SETUP_LOOP_SETUP_TITLE: 'Setup',
                LANG_CONTROLS_SETUP_LOOP_LOOP_TITLE: 'Loop',
                LANG_CONTROLS_SETUP_LOOP_TOOLTIP: 'Blocks in setup will be executed at start, and blocks in Loop will be repeated continously.',
                LANG_CONTROLS_SWITCH: 'commuta ',
                LANG_CONTROLS_SWITCH_TOOLTIP_1: 'Esegue il codice in un determinato caso.',
                LANG_CONTROLS_SWITCH_TOOLTIP_2: 'Usa il comando COMMUTA per selezionare uno o più blocchi di codice da eseguire.',
                LANG_CONTROLS_SWITCH_TOOLTIP_3: 'Usa il comando COMMUTA per selezionare uno o più blocchi di codice da eseguire.',
                LANG_CONTROLS_SWITCH_TOOLTIP_4: 'Usa il comando COMMUTA per selezionare uno o più blocchi di codice da eseguire.',
                LANG_CONTROLS_SWITCH_SWITCH_TOOLTIP: 'L’espressione che viene valutata una sola volta',
                LANG_CONTROLS_SWITCH_CASE_TOOLTIP: 'caso',
                LANG_CONTROLS_SWITCH_DEFAULT_TOOLTIP: 'La parola chiave di default da restituire nel caso non sia stata riscontrata uguaglianza',
                LANG_CONTROLS_SWITCH_IS: 'caso: ',
                LANG_CONTROLS_SWITCH_CASE: 'caso',
                LANG_CONTROLS_SWITCH_COLON: ': ',
                LANG_CONTROLS_SWITCH_DEFAULT: 'default',
                LANG_CONTROLS_SWITCH_DO: 'esegui',
                //math blocks :
                LANG_CATEGORY_MATH: 'Matematica',
                LANG_MATH_ADVANCED_MAP_MAP: 'Mappa ',
                LANG_MATH_ADVANCED_MAP_FROM: 'da [',
                LANG_MATH_ADVANCED_MAP_HYPHEN: '-',
                LANG_MATH_ADVANCED_MAP_BRACKET: ']',
                LANG_MATH_ADVANCED_MAP_TO: 'a [',
                LANG_MATH_ADVANCED_MAP_TOOLTIP: 'Cambia l\'input da un determinato range di valori ad un altro.',
                LANG_MATH_NUMBER_TOOLTIP: 'Numero',
                LANG_MATH_ARRAY_ARRAY3: '[3]',
                LANG_MATH_ARRAY_BRACKET3: '{',
                LANG_MATH_ARRAY_BRACKET4: '}',
                LANG_MATH_ARRAY_COMMA: ',',
                LANG_MATH_ARRAY_TOOLTIP: 'Insieme',
                LANG_ARRAY_GET_BRACKET1: '[',
                LANG_ARRAY_GET_BRACKET2: ']',
                LANG_ARRAY_GET_TOOLTIP: 'Restituisce il valore di uno specifico elemento di un insieme.',
                LANG_MATH_MODULO_TOOLTIP: 'Restituisce la differenza di una divisione tra due numeri.',
                LANG_MATH_BASE_MAP: 'Mappa ',
                LANG_MATH_BASE_MAP_VALUE_TO: 'Valore da [0-',
                LANG_MATH_BASE_MAP_BRACKET: ']',
                LANG_MATH_BASE_MAP_TOOLTIP: 'Cambia l\'input da [0-1023] ad altro.',
                LANG_MATH_SINGLE_OP_ROOT: 'radice quadrata',
                LANG_MATH_SINGLE_OP_ABSOLUTE: 'assoluto',
                LANG_MATH_SINGLE_TOOLTIP_ROOT: 'Restituisce la radice quadrata di un numero.',
                LANG_MATH_SINGLE_TOOLTIP_ABS: 'Restituisce il valore assoluto di un numero.',
                LANG_MATH_SINGLE_TOOLTIP_NEG: 'Restituisce il valore negativo di un numero.',
                LANG_MATH_SINGLE_TOOLTIP_LN: 'Restituisce il logaritmo naturale di un numero.',
                LANG_MATH_SINGLE_TOOLTIP_LOG10: 'Restituisce il logaritmo a base 10 di un numero.',
                LANG_MATH_SINGLE_TOOLTIP_EXP: 'Restituisce la potenza di un numero',
                LANG_MATH_SINGLE_TOOLTIP_POW10: 'Restituisce la potenza di 10 di un numero.',
                LANG_MATH_MIN: 'Minimum value between', //To translate
                LANG_MATH_MIN_PARAM2: 'and', //To translate
                LANG_MATH_MIN_TOOLTIP: 'Returns the minimum value of the inputs.', //To translate
                LANG_MATH_MAX: 'Maximum value between', //To translate
                LANG_MATH_MAX_PARAM2: 'and', //To translate
                LANG_MATH_MAX_TOOLTIP: 'Returns the maximum value of the inputs.', //To translate
                LANG_MATH_POW: 'Value of', //To translate
                LANG_MATH_POW_PARAM2: 'to the power of', //To translate
                LANG_MATH_POW_TOOLTIP: 'Returns the value of the first input to the power of the second.', //To translate
                //text blocks:
                LANG_CATEGORY_TEXT: 'Testo',
                LANG_TEXT_TEXT_HELPURL: '',
                LANG_TEXT_TEXT_TOOLTIP: 'A lettera, parola o linea di testo.',
                LANG_TEXT_CHAR_TOOLTIP: 'A simbol, letter or number, but just one character', //to translate
                LANG_TEXT_JOIN_HELPURL: '',
                LANG_TEXT_JOIN_Field_CREATEWITH: 'Crea un testo con',
                LANG_TEXT_JOIN_TOOLTIP: 'Crea una porzione di testo unendo un numero qualsiasi di oggetti.',
                LANG_TEXT_CREATE_JOIN_Field_JOIN: 'Unisci',
                LANG_TEXT_CREATE_JOIN_TOOLTIP: 'Aggiunge, rimuove o riordina la selezione per riconfigurare il blocco di testo.',
                LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM: 'Oggetto',
                LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP: 'Aggiunge un oggetto al testo.',
                LANG_TEXT_CREATE_JOIN_TITLE_JOIN: 'Unisci',
                LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM: 'elemento',
                LANG_TEXT_APPEND_HELPURL: '',
                LANG_TEXT_APPEND_TO: 'a',
                LANG_TEXT_APPEND_APPENDTEXT: 'Accoda testo',
                LANG_TEXT_APPEND_VARIABLE: 'oggetto',
                LANG_TEXT_APPEND_TOOLTIP: 'Accoda del testo alla variabile %1.',
                LANG_TEXT_LENGTH_HELPURL: '',
                LANG_TEXT_LENGTH_INPUT_LENGTH: 'lunghezza',
                LANG_TEXT_LENGTH_TOOLTIP: 'Restituisce il numero di lettere (inclusi gli spazi) presenti nel testo.',
                LANG_TEXT_EQUALSIGNORECASE_IS: '',
                LANG_TEXT_EQUALSIGNORECASE_EQUAL: ' =',
                LANG_TEXT_EQUALSIGNORECASE_QUESTION: '?',
                LANG_TEXT_EQUALSIGNORECASE_TOOLTIP: 'Controlla se entrambe le stringhe siano uguali, a seconda della regola.',
                LANG_TEXT_SUBSTRING: 'Taglia ',
                LANG_TEXT_SUBSTRING_FROM: 'da',
                LANG_TEXT_SUBSTRING_TO: 'a',
                LANG_TEXT_SUBSTRING_TOOLTIP: 'Ottiene una sotto-stringa del valore d\'ingresso con i caratteri tra i due estremi inseriti.',
                LANG_TEXT_CHARAT: 'Character of text', //To translate
                LANG_TEXT_CHARAT_POSITION: 'in position', //To translate
                LANG_TEXT_CHARAT_TOOLTIP: 'Returns character in the position of the text (beginning with 0).', //To translate
                LANG_TEXT_SPECIAL: 'Caratteri Speciali',
                LANG_TEXT_SPECIAL_TAB: 'Tab',
                LANG_TEXT_SPECIAL_CARRIAGE_RETURN: 'Ritorno a capo',
                LANG_TEXT_SPECIAL_LINE_FEED: 'Avanzamento riga',
                LANG_TEXT_SPECIAL_TOOLTIP: 'Scrive caratt. speciali',
                LANG_TEXT_COMMENT: 'Comment', //to translate
                LANG_TEXT_COMMENT_TOOLTIP: 'Inserts a comment of one line in the program.', //to translate
                //advanced blocks :
                LANG_CATEGORY_ADVANCED: 'Funzioni Pin',
                LANG_ADVANCED_INOUT_ANALOG_READ: 'Lettura Analogica PIN#',
                LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP: 'Legge il valore di uno specifico pin analogico',
                LANG_ADVANCED_INOUT_ANALOG_WRITE: 'Scrittura Analogica PIN#',
                LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE: 'valore',
                LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP: 'Scrive un valore da 0 a 255 in uscita ad un pin analogico',
                LANG_ADVANCED_BUILTIN_LED: 'LED integrato',
                LANG_ADVANCED_BUILTIN_LED_STATE: 'Stato',
                LANG_ADVANCED_BUILTIN_LED_ON: 'ACCESO',
                LANG_ADVANCED_BUILTIN_LED_OFF: 'SPENTO',
                LANG_ADVANCED_BUILTIN_LED_TOOLTIP: 'Il LED integrato è collegato al PIN 13',
                LANG_ADVANCED_INOUT_DIGITAL_READ: 'Lettura Digitale PIN#',
                LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP: 'Legge il valore di uno specifico Pin Digitale',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE: 'Scrittura Digitale',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_GET_VAR: 'il valore',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN: 'PIN#',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE: 'stato',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH: 'ACCESO',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW: 'SPENTO',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP: 'Scrive lo stato specifico ad un Pin Digitale',
                LANG_ADVANCED_INOUT_PULSEIN: 'Time for digital pin PIN#', //to translate
                LANG_ADVANCED_INOUT_PULSEIN_MODE: 'to change to', //to translate
                LANG_ADVANCED_INOUT_PULSEIN_TOOLTIP: 'Returns the time for a digital pin to change to the state specified (in milliseconds).', //to translate
                LANG_ADVANCED_HIGHLOW_HIGH: 'ACCESO',
                LANG_ADVANCED_HIGHLOW_LOW: 'SPENTO',
                LANG_ADVANCED_HIGHLOW_TOOLTIP: 'ACCESO o SPENTO',
                LANG_ADVANCED_MATH_RANDOM: 'Numero casuale tra',
                LANG_ADVANCED_MATH_RANDOM_AND: ' e ',
                LANG_ADVANCED_MATH_RANDOM_TOOLTIP: 'Restituisce un valore casuale tra i due estremi.',
                LANG_ADVANCED_MATH_RANDOM_SEED: 'Set random seed to', //to translate
                LANG_ADVANCED_MATH_RANDOM_SEED_TOOLTIP: 'Sets seed for random number generator. For a random seed, read from an unconnected analog pin; to repeat the same sequence, use a fixed number.', //to translate
                //procedures blocks
                LANG_CATEGORY_PROCEDURES: 'Funzioni',
                LANG_PROCEDURES_RETURN: 'return',
                LANG_PROCEDURES_RETURN_TOOLTIP: 'Ritorna un valore',
                LANG_PROCEDURES_CALL_WITHOUT_DEFINITION: 'La funzione è richiamata senza definizioni corrispondenti',
                LANG_PROCEDURES_DEFNORETURN_HELPURL: '',
                LANG_PROCEDURES_DEFNORETURN_PROCEDURE: 'Funzione Normale',
                LANG_PROCEDURES_DEFNORETURN_DO: 'esegui',
                LANG_PROCEDURES_DEFNORETURN_TOOLTIP: 'La funzione non restituisce alcun valore in uscita.',
                LANG_PROCEDURES_DEFRETURN_HELPURL: '',
                LANG_PROCEDURES_DEFRETURN_PROCEDURE: 'Funzione con Ritorno',
                LANG_PROCEDURES_DEFRETURN_DO: 'esegui',
                LANG_PROCEDURES_DEFRETURN_RETURN: 'uscita',
                LANG_PROCEDURES_DEFRETURN_TOOLTIP: 'La funzione restituisce un valore in uscita.',
                LANG_PROCEDURES_DEF_DUPLICATE_WARNING: 'Attenzione: questa funzione presenta un parametro duplicato.',
                LANG_PROCEDURES_CALLNORETURN_HELPURL: '',
                LANG_PROCEDURES_CALLNORETURN_CALL: 'esegui',
                LANG_PROCEDURES_CALLNORETURN_PROCEDURE: 'Funzione Normale',
                LANG_PROCEDURES_CALLNORETURN_TOOLTIP: 'Richiama una funzione senza valore in uscita.',
                LANG_PROCEDURES_CALLRETURN_HELPURL: '',
                LANG_PROCEDURES_CALLRETURN_CALL: 'esegui',
                LANG_PROCEDURES_CALLRETURN_PROCEDURE: 'Funzione con Ritorno',
                LANG_PROCEDURES_CALLRETURN_TOOLTIP: 'Richiama una funzione con valore in uscita.',
                LANG_PROCEDURES_MUTATORCONTAINER_Field: 'parametri',
                LANG_PROCEDURES_MUTATORARG_Field: 'variabili:',
                LANG_PROCEDURES_HIGHLIGHT_DEF: 'Evidenzia Funzione',
                LANG_PROCEDURES_IFRETURN_TOOLTIP: 'Se la condizione è vera, restituisce il valore.',
                LANG_PROCEDURES_IFRETURN_WARNING: 'Attenzione: questo blocco può essere usato solo con una funzione che restituisce un valore.',
                //variables blocks :
                LANG_CATEGORY_VARIABLES: 'Variabli',
                LANG_VARIABLES_CALL_WITHOUT_DEFINITION: 'Questa variabile non è dichiarata.',
                LANG_VARIABLES_GLOBAL: 'Variabile ',
                LANG_VARIABLES_GLOBAL_TYPE: 'tipo di ',
                LANG_VARIABLES_GLOBAL_EQUALS: 'uguale',
                LANG_VARIABLES_GLOBAL_TOOLTIP: 'Dichiara e definisce una Variabile Globale di tipo intero o stringa.',
                LANG_VARIABLES_LOCAL: 'Variabile locale ',
                LANG_VARIABLES_LOCAL_TYPE: 'tipo di ',
                LANG_VARIABLES_LOCAL_EQUALS: 'uguale',
                LANG_VARIABLES_LOCAL_TOOLTIP: 'Dichiara e definisce una variabile Locale di tipo intero o stringa.',
                LANG_VARIABLES_DEFINE: 'Definizione variabile ',
                LANG_VARIABLES_DEFINE_AS: 'come',
                LANG_VARIABLES_DEFINE_TOOLTIP: 'Definisce il valore della variabile.',
                LANG_VARIABLES_SET: 'Variabile ',
                LANG_VARIABLES_SET_AS: '=',
                LANG_VARIABLES_SET_TOOLTIP: 'Definisce il valore della variabile.',
                LANG_VARIABLES_GET: 'Variabile ',
                LANG_VARIABLES_GET_TOOLTIP: 'Restituisce il valore della variabile.',
                LANG_VARIABLES_PIN_ANALOG: 'PIN analogico',
                LANG_VARIABLES_PIN_DIGITAL: 'PIN digitale',
                LANG_VARIABLES_PIN_DIGITAL0: 'ATTENZIONE: il pin digitale 0 (RX pin) viene utilizzato durante il caricamento di una programma. Non collegare componenti elettronici altrimenti sarà impossibile caricare un nuova programma.',
                LANG_VARIABLES_PIN_TOOLTIP: 'Seleziona il PIN.',
                LANG_VARIABLES_TYPE_BYTE: 'Byte', // To translate
                LANG_VARIABLES_TYPE_FLOAT: 'Float', // To translate
                LANG_VARIABLES_TYPE_INTEGER: 'Integer', // To translate
                LANG_VARIABLES_TYPE_INTEGER_LONG: 'Long Integer', // To translate
                LANG_VARIABLES_TYPE_INTEGER_ULONG: 'Unsigned Long Integer', //To translate
                LANG_VARIABLES_TYPE_STRING: 'String', // To translate
                LANG_VARIABLES_TYPE_CHAR: 'Character', //to translate
                LANG_VARIABLES_TYPE_BOOLEAN: 'Boolean', //to translate
                LANG_VARIABLES_VOLATILE_GLOBAL: 'Declare VOLATILE GLOBAL variable ', // To translate
                LANG_VARIABLES_VOLATILE_GLOBAL_TYPE: 'of type ', // To translate
                LANG_VARIABLES_VOLATILE_GLOBAL_EQUALS: 'equals ', // To translate
                LANG_VARIABLES_VOLATILE_GLOBAL_TOOLTIP: 'Declares and defines a VOLATILE GLOBAL variable of type int or String used in a ISR function.', // To translate
                //sound blocks (zum):
                LANG_CATEGORY_ZUM: 'Suoni',
                LANG_ZUM_PIEZO_BUZZER: 'Buzzer',
                LANG_ZUM_PIEZO_BUZZER_PIN: 'PIN#',
                LANG_ZUM_PIEZO_BUZZER_TONE: 'TONO',
                LANG_ZUM_PIEZO_BUZZER_DO: 'DO',
                LANG_ZUM_PIEZO_BUZZER_RE: 'RE',
                LANG_ZUM_PIEZO_BUZZER_MI: 'MI',
                LANG_ZUM_PIEZO_BUZZER_FA: 'FA',
                LANG_ZUM_PIEZO_BUZZER_SOL: 'SOL',
                LANG_ZUM_PIEZO_BUZZER_LA: 'LA',
                LANG_ZUM_PIEZO_BUZZER_SI: 'SI',
                LANG_ZUM_PIEZO_BUZZER_DURATION: 'Durata',
                LANG_ZUM_PIEZO_BUZZER_TOOLTIP: 'Buzzer',
                LANG_ZUM_PIEZO_BUZZERAV: 'Buzzer avanzato',
                LANG_ZUM_PIEZO_BUZZERAV_PIN: 'PIN#',
                LANG_ZUM_PIEZO_BUZZERAV_TONE: 'TONO',
                LANG_ZUM_PIEZO_BUZZERAV_DURATION: 'Durata',
                LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP: 'Buzzer avanzato',
                LANG_ZUM_DHT11_VALUE: 'Get', //to translate
                LANG_ZUM_DHT11_VALUE1: 'Temperature', //to translate
                LANG_ZUM_DHT11_VALUE2: 'Humidity', //to translate
                LANG_ZUM_DHT11_PIN: 'PIN', //to translate
                LANG_ZUM_DHT11_TOOLTIP: 'Get temperature or humidity from a DHT11, DHT21 or DHT22 sensor.', //to translate
                //motor blocks (servo and stepper):
                LANG_CATEGORY_MOTOR: 'Motors', //to translate
                LANG_MOTOR_SERVO_CONT: 'Servomotore a rotazione continua',
                LANG_MOTOR_SERVO_CONT_PIN: 'PIN#',
                LANG_MOTOR_SERVO_CONT_ROT: 'ROTAZIONE',
                LANG_MOTOR_SERVO_CONT_TURN_CLOCKWISE: 'GIRA IN SENSO ORARIO',
                LANG_MOTOR_SERVO_CONT_TURN_COUNTERCLOCKWISE: 'GIRA IN SENSO ANTI-ORARIO',
                LANG_MOTOR_SERVO_CONT_STOPPED: 'FERMA',
                LANG_MOTOR_SERVO_CONT_DELAY: 'Pausa',
                LANG_MOTOR_SERVO_CONT_TOOLTIP: 'Servomotore a rotazione continua.',
                LANG_MOTOR_SERVO_MOVE: 'Servo',
                LANG_MOTOR_SERVO_MOVE_PIN: 'PIN#',
                LANG_MOTOR_SERVO_MOVE_DEGREES: 'Gradi (0~180)',
                LANG_MOTOR_SERVO_MOVE_DELAY: 'Pausa',
                LANG_MOTOR_SERVO_MOVE_TOOLTIP: 'Sposta di 0~180 gradi',
                LANG_MOTOR_SERVO_WARNING: 'Impossibile impostare il pin del servo motore utilizzando una variabile',
                LANG_MOTOR_STEPPER_MOVE: 'Stepper motor', //to translate
                LANG_MOTOR_STEPPER_MOVE_SPR: 'Steps per revolution', //to translate
                LANG_MOTOR_STEPPER_MOVE_PINS: '4 pins?', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN1: 'Pin 1', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN2: 'Pin 2', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN3: 'Pin 3', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN4: 'Pin 4', //to translate
                LANG_MOTOR_STEPPER_MOVE_SETSPEED: 'Set speed to', //to translate
                LANG_MOTOR_STEPPER_MOVE_SETSPEED_NEXT: '(rpm)', //to translate
                LANG_MOTOR_STEPPER_MOVE_STEP: 'Move motor', //to translate
                LANG_MOTOR_STEPPER_MOVE_STEP_NEXT: '(steps)', //to translate
                LANG_MOTOR_STEPPER_MOVE_TOOLTIP: 'Moves motor the number of steps. A positive steps value move in one direction, a negative value moves to the other direction.', //to translate
                LANG_MOTOR_PCA9685_DEF: 'PCA9685', //to translate
                LANG_MOTOR_PCA9685_DEF_SERVO: 'Servo', //to translate
                LANG_MOTOR_PCA9685_DEF_ADDRESS: 'Address of the component', //to translate
                LANG_MOTOR_PCA9685_DEF_TOOLTIP: 'Defines a PCA9685 connected to Arduino over I2C.', //to translate
                LANG_MOTOR_PCA9685_SET_PWM: 'PCA9685 Move servo', //to translate
                LANG_MOTOR_PCA9685_SET_PWM_ANGLE: 'angle', //to translate
                LANG_MOTOR_PCA9685_SET_PWM_TOOLTIP: 'Moves servo connected to PCA9685 the specified angle in degrees.', //to translate
                //interrupt blocks :
                LANG_CATEGORY_INTERRUPTS: 'Interrupts', // To translate
                LANG_INTERRUPTS_STATE: 'Set interrupts state to ', // To translate
                LANG_INTERRUPTS_STATE_ENABLED: 'ENABLED', // To translate
                LANG_INTERRUPTS_STATE_DISABLED: 'DISABLED', // To translate
                LANG_INTERRUPTS_STATE_TOOLTIP: 'Enable or Disable interrupts. Some functions will not work while interrupts are disabled. Use only for particularly critical sections of code.', // To translate
                LANG_INTERRUPTS_ATTACH: 'Attach procedure ', // To translate
                LANG_INTERRUPTS_ATTACH_PARAM2: 'in mode ', // To translate
                LANG_INTERRUPTS_ATTACH_PARAM3: 'with interrupt of digital pin', // To translate
                LANG_INTERRUPTS_ATTACH_LOW: 'LOW', // To translate
                LANG_INTERRUPTS_ATTACH_CHANGE: 'CHANGE', // To translate
                LANG_INTERRUPTS_ATTACH_RISING: 'RISING', // To translate
                LANG_INTERRUPTS_ATTACH_FALLING: 'FALLING', // To translate
                LANG_INTERRUPTS_ATTACH_PROCEDURE: 'func_without_return', // To translate
                LANG_INTERRUPTS_ATTACH_TOOLTIP: 'Set the procedure to be executed when an interrupt is raised in the specified pin.', // To translate
                LANG_INTERRUPTS_DETACH: 'Detach interrupt on digital pin', // To translate
                LANG_INTERRUPTS_DETACH_TOOLTIP: 'Disables the interrupt on the pin. When the pin is activated, the procedure associated is no longer executed.', // To translate
                LANG_WIFI_CONNECT: 'Wifi:', //To translate
                LANG_WIFI_CONNECT_STATION: 'connect', //To translate
                LANG_WIFI_CONNECT_SOFTAP: 'create network', //To translate
                LANG_WIFI_CONNECT_SSID: 'SSID', //To translate
                LANG_WIFI_CONNECT_PASSWORD: 'password', //To translate
                LANG_WIFI_CONNECT_CHANNEL: 'channel', //To translate
                LANG_WIFI_CONNECT_RX_PIN: 'Rx pin', //To translate
                LANG_WIFI_CONNECT_TX_PIN: 'Tx pin', //To translate
                LANG_WIFI_CONNECT_BAUD: 'baud rate', //To translate
                LANG_WIFI_CONNECT_TOOLTIP: 'Connects or creates a wifi using a ESP8266 adapter, and returns true on success.', //To translate
                LANG_WIFI_DISCONNECT: 'Wifi:disconnect', //To translate
                LANG_WIFI_DISCONNECT_TOOLTIP: 'Disconnects from the current wifi network.', //To translate
                LANG_WIFI_CLIENT: 'Wifi:connect to server', //To translate
                LANG_WIFI_CLIENT_IP: 'IP address', //To translate
                LANG_WIFI_CLIENT_PORT: 'Port', //To translate
                LANG_WIFI_CLIENT_TOOLTIP: 'Connects to a TCP server.', //To translate
                LANG_WIFI_SERVER: 'Wifi:start server', //To translate
                LANG_WIFI_SERVER_PORT: 'Port', //To translate
                LANG_WIFI_SERVER_TOOLTIP: 'Create a TCP server to accept connections from clients.', //To translate
                LANG_WIFI_GETIP: 'Wifi:get IP address', //To translate
                LANG_WIFI_GETIP_TOOLTIP: 'Returns IP address of the adapter.', //To translate
                LANG_WIFI_SEND_SERVER: 'Wifi:send to server', //To translate
                LANG_WIFI_SEND_SERVER_DATA: 'Text', //To translate
                LANG_WIFI_SEND_SERVER_TOOLTIP: 'Send text to the TCP server.', //To translate
                LANG_WIFI_SEND_CLIENT: 'Wifi:send to client', //To translate
                LANG_WIFI_SEND_CLIENT_ID: 'ID', //To translate
                LANG_WIFI_SEND_CLIENT_DATA: 'Data', //To translate
                LANG_WIFI_SEND_CLIENT_TOOLTIP: 'Send text to specified client (ID).', //To translate
                LANG_WIFI_RECEIVE_CLIENT: 'Wifi:receive from client', //To translate
                LANG_WIFI_RECEIVE_CLIENT_TOOLTIP: 'Receives a text from client, begining with id number and a colon (:). If timeout is reached, returns an empty string.', //To translate
                LANG_WIFI_RECEIVE_SERVER: 'Wifi:receive from server', //To translate
                LANG_WIFI_RECEIVE_SERVER_TIMEOUT: 'Timeout', //To translate
                LANG_WIFI_RECEIVE_SERVER_TOOLTIP: 'Receives a string from TCP server or empty string if timeout reached.', //To translate
                LANG_WIFI_CLOSE_SERVER: 'Wifi:stop server', //To translate
                LANG_WIFI_CLOSE_SERVER_TOOLTIP: 'Shutdown TCP server.', //To translate
                LANG_WIFI_CLOSE_CLIENT: 'Wifi:stop connection', //To translate
                LANG_WIFI_CLOSE_CLIENT_TOOLTIP: 'Shutdown connection with TCP server.' //To translate
            };
            // Node
            if (typeof module !== 'undefined' && module.exports) {
                module.exports = language;
            }
            // Browser
            // if (typeof window !== 'undefined' && this.RoboBlocks && this.RoboBlocks.locales.add) {
            //     this.RoboBlocks.locales.add('en', language);
            if (typeof window !== 'undefined' && RoboBlocks && RoboBlocks.locales.add) {
                RoboBlocks.locales.add('it-IT', language);
            }
        }());

        // Source: lang/pl-PL.js
        (function() {
            var language = {
                //random :
                BLOCKLY_MSG_DUPLICATE_BLOCK: 'Powiel blok',
                BLOCKLY_MSG_REMOVE_COMMENT: 'Usuń komentarz',
                BLOCKLY_MSG_ADD_COMMENT: 'Dodaj komentarz',
                BLOCKLY_MSG_EXTERNAL_INPUTS: 'Wejścia zewnętrzne',
                BLOCKLY_MSG_INLINE_INPUTS: 'Wejścia Inline',
                BLOCKLY_MSG_DELETE_BLOCK: 'Usuń blok',
                BLOCKLY_MSG_DELETE_X_BLOCKS: 'Usuń %1 bloków',
                BLOCKLY_MSG_COLLAPSE_BLOCK: 'Zwiń blok',
                BLOCKLY_MSG_EXPAND_BLOCK: 'Rozwiń blok',
                BLOCKLY_MSG_DISABLE_BLOCK: 'Wyłącz blok',
                BLOCKLY_MSG_ENABLE_BLOCK: 'Włącz blok',
                BLOCKLY_MSG_HELP: 'Pomoc',
                BLOCKLY_MSG_COLLAPSE_ALL: 'Zwiń wszystko',
                BLOCKLY_MSG_EXPAND_ALL: 'Rozwiń wszystko',
                LANG_VARIABLES_SET_ITEM: 'Element',
                LANG_RESERVED_WORDS: 'Słowo zarezerwowane, nazwa niedozwolona.',
                LANG_CHAR_LENGTH: 'A character must have length 0 or 1.', //to translate
                //bloki logiczne:
                LANG_CATEGORY_LOGIC: 'Logiczne',
                LANG_LOGIC_OPERATION_AND: 'i',
                LANG_LOGIC_OPERATION_OR: 'lub',
                LANG_LOGIC_COMPARE_TOOLTIP_EQ: 'Wynik porównania czy obie wartości są równe.',
                LANG_LOGIC_COMPARE_TOOLTIP_NEQ: 'Wynik porównania czy obie wartości są różne.',
                LANG_LOGIC_COMPARE_TOOLTIP_LT: 'Wynik porównania czy pierwsza wartość jest mniejsza od drugiej.',
                LANG_LOGIC_COMPARE_TOOLTIP_LTE: 'Wynik porównania czy pierwsza wartość jest równa lub mniejsza od drugiej.',
                LANG_LOGIC_COMPARE_TOOLTIP_GT: 'Wynik porównania czy pierwsza wartość jest większa od drugiej.',
                LANG_LOGIC_COMPARE_TOOLTIP_GTE: 'Wynik porównania czy pierwsza wartość jest równa lub większa od drugiej.',
                LANG_LOGIC_OPERATION_TOOLTIP_AND: 'Wynik sprawdzenia czy jednocześnie obie wartości są prawdą.',
                LANG_LOGIC_OPERATION_TOOLTIP_OR: 'Wynik sprawdzenia czy którakolwiek wartość jest prawdą.',
                LANG_LOGIC_NEGATE_INPUT_NOT: 'nie',
                LANG_LOGIC_NEGATE_TOOLTIP: 'Zwraca zaprzeczenie podanej wartości.',
                LANG_LOGIC_NEGATE_HELPURL: '',
                LANG_LOGIC_BOOLEAN_TRUE: 'prawda',
                LANG_LOGIC_BOOLEAN_FALSE: 'fałsz',
                LANG_LOGIC_BOOLEAN_TOOLTIP: 'Wartość logiczna: "prawda" lub "fałsz".',
                //bloki komunikacyjne:
                LANG_CATEGORY_COMMUNICATION: 'Komunikacyjne',
                LANG_BQ_BLUETOOTH_RECEIVE: 'Odbiera dane przez Bluetooth',
                LANG_BQ_BLUETOOTH_RECEIVE_BLUETOOTH: 'Bluetooth',
                LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP: 'Zwraca dane odebrane przez moduł Bluetooth',
                LANG_BQ_BLUETOOTH_SEND: 'Nadaje dane przez Bluetooth',
                LANG_BQ_BLUETOOTH_SEND_SEND: 'Nadajnik',
                LANG_BQ_BLUETOOTH_SEND_TOOLTIP: 'Wysyła dane wejściowe przez moduł Bluetooth',
                LANG_BQ_BLUETOOTH_DEF: 'Definicja Bluetooth',
                LANG_BQ_BLUETOOTH_DEF_BAUD_RATE: 'Prędkość transmisji',
                LANG_BQ_BLUETOOTH_DEF_PIN1: 'RX',
                LANG_BQ_BLUETOOTH_DEF_PIN2: 'TX',
                LANG_BQ_BLUETOOTH_DEF_NAME: 'Nazwa',
                LANG_BQ_BLUETOOTH_DEF_PINCODE: 'PinCode',
                LANG_BQ_BLUETOOTH_DEF_RECEIVE: 'Odbierz',
                LANG_BQ_BLUETOOTH_DEF_SEND: 'Wyślij',
                LANG_BQ_BLUETOOTH_DEF_TOOLTIP: 'Definicja modułu Bluetooth',
                LANG_ADVANCED_BT_SERIAL_AVAILABLE: 'Dostępny port szeregowy Bluetooth',
                LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP: 'Sprawdź czy jest dostępny port szeregowy Bluetooth.',
                LANG_ADVANCED_SERIAL_AVAILABLE: 'Port szeregowy dostępny.',
                LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP: 'Sprawdź czy jest dostępny port szeregowy.',
                LANG_ADVANCED_SERIAL_PARSEINT: 'Odczyt liczby całkowitej z portu szeregowego',
                LANG_ADVANCED_SERIAL_PARSEINT_TOOLTIP: 'Pierwsza poprawnie odczytana długa liczba całkowita (long integer) z buforu portu szeregowego',
                LANG_ADVANCED_SERIAL_PRINT: 'Wydruk tekstu przez port szeregowy',
                LANG_ADVANCED_SERIAL_PRINT_TOOLTIP: 'Drukuje dane jako tekst ASCII.',
                LANG_ADVANCED_SERIAL_PRINTLN: 'Wydruk linii tekstu przez port szeregowy',
                LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP: 'Drukuje dane jako tekst ASCII i dodaje znak powrotu karetki (CR).',
                LANG_ADVANCED_SERIAL_PRINT_FORMAT: 'Prints value with format', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_1: 'Binary', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_2: 'Octal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_3: 'Decimal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_4: 'Hexadecimal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_5: 'Without decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_6: 'One decimal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_7: 'Two decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_8: 'Three decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_9: 'Four decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_TOOLTIP: 'Prints value with specified format', //to translate
                LANG_ADVANCED_SERIAL_PRINTLN_FORMAT: 'Send value with format and CR', //To translate
                LANG_ADVANCED_SERIAL_PRINTLN_FORMAT_TOOLTIP: 'Send a number to serial port with specified format and carriage return (CR).', //To translate
                LANG_ADVANCED_SERIAL_READ: 'Odczyt przez port szeregowy',
                LANG_ADVANCED_SERIAL_READ_TOOLTIP: 'Odczytuje dane przychodzące z portu szeregowego jako bajty.',
                LANG_ADVANCED_SERIAL_READSTRING: 'Odczyt ciągu znaków przez port szeregowy',
                LANG_ADVANCED_SERIAL_READSTRING_TOOLTIP: 'Odczytuje dane przychodzące z portu szeregowego jako tekst ASCII.',
                //bloki czujniki:
                LANG_CATEGORY_SENSOR: 'Czujniki',
                LANG_BQ_BAT: 'BAT - czujnik ultradźwiękowy',
                LANG_BQ_BAT_RED_PIN: 'Echo PIN#',
                LANG_BQ_BAT_BLUE_PIN: 'Wyzwalacz PIN#',
                LANG_BQ_BAT_TOOLTIP: 'Zwraca odległość zmierzoną przez czujnik ultradźwiękowy.',
                LANG_IR_READ: 'Reads from infrared receiver', //to translate
                LANG_IR_READ_PIN: 'connected to PIN#', //to translate
                LANG_IR_READ_TOOLTIP: 'Reads the value received from the infrared receiver', //to translate
                //bloki LCD:
                LANG_CATEGORY_LCD: 'Wyświetlacze LCD',
                LANG_LCD_DEF: 'LCD (2x16)',
                LANG_LCD_DEF_CONNECTION: 'Connection type', //to translate
                LANG_LCD_DEF_CONNECTION_PARALLEL: 'Parallel (6 pins)', //to translate
                LANG_LCD_DEF_CONNECTION_I2C: 'I2C (4 wires)', //to translate
                LANG_LCD_DEF_ADDRESS: 'Address of the component', //to translate
                LANG_LCD_DEF_PIN_1: 'RS Pin', //to translate
                LANG_LCD_DEF_PIN_2: 'Enable Pin', //to translate
                LANG_LCD_DEF_PIN_3: 'Data4 Pin', //to translate
                LANG_LCD_DEF_PIN_4: 'Data5 Pin', //to translate
                LANG_LCD_DEF_PIN_5: 'Data6 Pin', //to translate
                LANG_LCD_DEF_PIN_6: 'Data7 Pin', //to translate
                LANG_LCD_DEF_TOOLTIP: 'Blok definiujący wyświetlacz LCD',
                LANG_LCD_ADVANCED_DEF: 'Zaawansowany wyświetlacz LCD',
                LANG_LCD_ADVANCED_ROWS: 'Rzędy',
                LANG_LCD_ADVANCED_COLUMNS: 'Kolumny',
                LANG_LCD_DEF_ADVANCED_TOOLTIP: 'Blok definiujący zaawansowany wyświetlacz LCD',
                LANG_LCD_SETBACKLIGHT: 'LCD: Poziom_podświetlenia(',
                LANG_LCD_SETBACKLIGHT_CLOSE: ')',
                LANG_LCD_SETBACKLIGHT_TOOLTIP: 'ustawia podświetlenie ekranu LCD.',
                LANG_LCD_PRINT: 'Wyświetl na LCD',
                LANG_LCD_PRINT_POSITION: 'Ustaw pozycję tekstu.',
                LANG_LCD_PRINT_TOOLTIP: 'Wyświetla ciąg znaków na wyświetlaczu LCD na określonej pozycji lub na następnej dostępnej.',
                LANG_LCD_CLEAR: 'Czyść LCD',
                LANG_LCD_CLEAR_TOOLTIP: 'Wygasza segmenty LCD',
                LANG_LCD_HOME: 'LCD Go home', //to translate
                LANG_LCD_HOME_TOOLTIP: 'LCD: Positions the cursor in the upper-left corner of the screen', //to translate
                LANG_LCD_NODISPLAY: 'LCD Hide content', //to translate
                LANG_LCD_NODISPLAY_TOOLTIP: 'LCD: Turns off the LCD display, without losing the text currently shown on it', //to translate
                LANG_LCD_SCROLLDISPLAYLEFT: 'LCD Scrolls to the left', //to translate
                LANG_LCD_SCROLLDISPLAYLEFT_TOOLTIP: 'LCD: Scrolls the contents of the display one space to the left', //to translate
                LANG_LCD_SCROLLDISPLAYRIGHT: 'LCD Scrolls to the right', //to translate
                LANG_LCD_SCROLLDISPLAYRIGHT_TOOLTIP: 'LCD: Scrolls the contents of the display one space to the right', //to translate
                //bloki sterujące:
                LANG_CATEGORY_CONTROLS: 'Sterujące',
                LANG_CONTROLS_BASE_DELAY_WAIT: 'Czekaj (ms)',
                LANG_CONTROLS_BASE_DELAY_TOOLTIP: 'Czeka przez czas określony w milisekundach (ms)',
                LANG_CONTROLS_BASE_MILLIS: 'Czas od startu',
                LANG_CONTROLS_BASE_MILLIS_TOOLTIP: 'Liczba milisekund od momentu startu programu (long integer)',
                LANG_CONTROLS_BASE_DELAY_MICROSECONDS: 'Wait [us]', //To translate
                LANG_CONTROLS_BASE_DELAY_MICROSECONDS_TOOLTIP: 'Waits the specified time in microseconds (us)', //To translate
                LANG_CONTROLS_BASE_MICROS: 'Time from start (us)', //To translate
                LANG_CONTROLS_BASE_MICROS_TOOLTIP: 'Number of microseconds since the program started (long integer)', //To translate
                LANG_CONTROLS_DOWHILE_OPERATOR_DO: 'Rób',
                LANG_CONTROLS_DOWHILE_OPERATOR_WHILE: 'dopóki',
                LANG_CONTROLS_DOWHILE_TOOLTIP: 'Powtarzaj wykonanie bloku poleceń dopóki warunek jest spełniony.',
                LANG_CONTROLS_EXECUTE: 'Wykonaj',
                LANG_CONTROLS_EXECUTE_TOOLTIP: 'Wykonaj kod C/C++. Używać ostrożnie, gdyż łatwo może przerwać wykonanie programu a także spowodować że nie zostanie skompilowany.',
                LANG_CONTROLS_IF_TOOLTIP_1: 'Jeżeli warunek jest prawdą, wtedy wykonaj blok poleceń.',
                LANG_CONTROLS_IF_TOOLTIP_2: 'Jeżeli warunek jest prawdą, wtedy wykonaj pierwszy blok poleceń. W przeciwnym przypadku wykonaj drugi blok poleceń.',
                LANG_CONTROLS_IF_TOOLTIP_3: 'Jeżeli pierwszy warunek jest prawdą, wtedy wykonaj pierwszy blok poleceń. W przeciwnym przypadku, jeżeli druga wartość jest prawdą, wykonaj drugi blok poleceń.',
                LANG_CONTROLS_IF_TOOLTIP_4: 'Jeżeli pierwszy warunek jest prawdą, wtedy wykonaj pierwszy blok poleceń. W przeciwnym przypadku, jeżeli druga wartość jest prawdą, wykonaj drugi blok poleceń. Jeżeli żadna z wartości nie jest prawdą, wykonaj ostatni blok poleceń.',
                LANG_CONTROLS_IF_MSG_IF: 'Jeżeli',
                LANG_CONTROLS_IF_MSG_ELSEIF: 'albo Jeżeli',
                LANG_CONTROLS_IF_MSG_ELSE: 'albo to',
                LANG_CONTROLS_IF_MSG_THEN: 'to',
                LANG_CONTROLS_IF_IF_Field_IF: 'Jeżeli',
                LANG_CONTROLS_IF_IF_TOOLTIP: 'Dodaj, usuń lub zmień kolejność sekcji aby przeorganizować blok Jeżeli.',
                LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF: 'albo Jeżeli',
                LANG_CONTROLS_IF_ELSEIF_TOOLTIP: 'Dodaj warunek bloku "albo Jeżeli".',
                LANG_CONTROLS_IF_ELSE_Field_ELSE: 'albo to',
                LANG_CONTROLS_IF_ELSE_TOOLTIP: 'Dodaj ostatni stan bloku Jeżeli dla pozostałych możliwości.',
                LANG_CONTROLS_FOR_FROM_WARNING: 'Nie można ustawić zmiennej jako wartości początkowej dla bloku Dla.',
                LANG_CONTROLS_FOR_TO_WARNING: 'Nie można ustawić zmiennej jako wartości końcowej dla bloku Dla.',
                LANG_CONTROLS_FOR_INCREMENT_WARNING: 'It is not possible to set a variable as the increment value of the for block', //to translate
                LANG_CONTROLS_FOR_INPUT_WITH: 'Dla',
                LANG_CONTROLS_FOR_INPUT_VAR: 'x',
                LANG_CONTROLS_FOR_INPUT_FROM: 'od',
                LANG_CONTROLS_FOR_INPUT_TO: 'do',
                LANG_CONTROLS_FOR_INPUT_INCREMENT: 'increment', //to translate
                LANG_CONTROLS_FOR_INPUT_DO: 'rób',
                LANG_CONTROLS_FOR_TOOLTIP: 'Odlicza od liczby początkowej do liczby końcowej. Za każdym razem, gdy licznik jest zwiększany o 1, zmienna pobiera wartość a następnie wykonuje blok poleceń.',
                LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE: 'Dopóki',
                LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL: 'Aż do',
                LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE: 'Dopóki warunek jest spełniony dopóty powtarzaj wykonanie bloku poleceń.',
                LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL: 'Dopóki warunek nie jest spełniony dopóty powtarzaj wykonanie bloku poleceń.',
                LANG_CONTROLS_REPEAT_TITLE_REPEAT: 'Powtórz',
                LANG_CONTROLS_REPEAT_TITLE_TIMES: 'razy',
                LANG_CONTROLS_REPEAT_INPUT_DO: 'rób',
                LANG_CONTROLS_REPEAT_TOOLTIP: 'Powtórz polecenia określoną liczbę razy.',
                LANG_CONTROLS_FLOW_STATEMENTS_HELPURL: '',
                LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP: 'pętlę',
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: 'przerwij',
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: 'kontynuuj',
                LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK: 'Przerwij pętlę i przejdź do bloku za pętlą.',
                LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE: 'Pomiń resztę pętli i kontynuuj następny przebieg.',
                LANG_CONTROLS_FLOW_STATEMENTS_WARNING: 'Ostrzeżenie: Ten blok może być użyty tylko w pętli.',
                LANG_CONTROLS_SETUP_LOOP_SETUP_TITLE: 'Ustawienia',
                LANG_CONTROLS_SETUP_LOOP_LOOP_TITLE: 'Pętla',
                LANG_CONTROLS_SETUP_LOOP_TOOLTIP: 'Bloki w Ustawieniach będą wykonane na początku, następnie bloki w Pętli będą powtarzane bez końca.',
                LANG_CONTROLS_SWITCH: 'Gdy',
                LANG_CONTROLS_SWITCH_TOOLTIP_1: 'Gdy zmienna jest równa jednej z podanych wartości, wykonuj od odpowiadającego jej bloku.',
                LANG_CONTROLS_SWITCH_TOOLTIP_2: 'Użyj bloku Gdy aby na podstawie wartości zmiennej wykonać jeden (i ew. kolejne) blok poleceń.',
                LANG_CONTROLS_SWITCH_TOOLTIP_3: 'Użyj bloku Gdy aby na podstawie wartości zmiennej wykonać jeden (i ew. kolejne) blok poleceń.',
                LANG_CONTROLS_SWITCH_TOOLTIP_4: 'Użyj bloku Gdy aby na podstawie wartości zmiennej wykonać jeden (i ew. kolejne) blok poleceń.',
                LANG_CONTROLS_SWITCH_SWITCH_TOOLTIP: 'Wyrażenie Gdy jest określane jeden raz',
                LANG_CONTROLS_SWITCH_CASE_TOOLTIP: 'równe',
                LANG_CONTROLS_SWITCH_DEFAULT_TOOLTIP: 'Po słowie kluczowym "domyślnie" wykonają się polecenia, jeżeli żadna z podanych wartości nie pasuje.',
                LANG_CONTROLS_SWITCH_IS: 'równe ',
                LANG_CONTROLS_SWITCH_CASE: 'równe',
                LANG_CONTROLS_SWITCH_COLON: ': ',
                LANG_CONTROLS_SWITCH_DEFAULT: 'domyślnie',
                LANG_CONTROLS_SWITCH_DO: 'rób',
                //bloki matematyczne:
                LANG_CATEGORY_MATH: 'Matematyczne',
                LANG_MATH_ADVANCED_MAP_MAP: 'Skaluj ',
                LANG_MATH_ADVANCED_MAP_FROM: 'od [',
                LANG_MATH_ADVANCED_MAP_HYPHEN: '-',
                LANG_MATH_ADVANCED_MAP_BRACKET: ']',
                LANG_MATH_ADVANCED_MAP_TO: 'do [',
                LANG_MATH_ADVANCED_MAP_TOOLTIP: 'Przeskaluj wartości z pewnego zakresu na inny.',
                LANG_MATH_NUMBER_TOOLTIP: 'Liczba',
                LANG_MATH_ARRAY_ARRAY3: '[3]',
                LANG_MATH_ARRAY_BRACKET3: '{',
                LANG_MATH_ARRAY_BRACKET4: '}',
                LANG_MATH_ARRAY_COMMA: ',',
                LANG_MATH_ARRAY_TOOLTIP: 'Tablica',
                LANG_ARRAY_GET_BRACKET1: '[',
                LANG_ARRAY_GET_BRACKET2: ']',
                LANG_ARRAY_GET_TOOLTIP: 'Zwraca wartość wskazanego elementu tablicy.',
                LANG_MATH_MODULO_TOOLTIP: 'Zwraca resztę z dzielenia dwóch liczb wejściowych.',
                LANG_MATH_BASE_MAP: 'Skaluj ',
                LANG_MATH_BASE_MAP_VALUE_TO: 'Wartość na [0-',
                LANG_MATH_BASE_MAP_BRACKET: ']',
                LANG_MATH_BASE_MAP_TOOLTIP: 'Przeskaluj wartości z zakresu [0-1023] na inny.',
                LANG_MATH_SINGLE_OP_ROOT: 'pierwiastek kwadratowy',
                LANG_MATH_SINGLE_OP_ABSOLUTE: 'wartość bezwzględna',
                LANG_MATH_SINGLE_TOOLTIP_ROOT: 'Zwraca pierwiastek kwadratowy liczby.',
                LANG_MATH_SINGLE_TOOLTIP_ABS: 'Zwraca wartość bezwzględną liczby.',
                LANG_MATH_SINGLE_TOOLTIP_NEG: 'Zwraca negację liczby.',
                LANG_MATH_SINGLE_TOOLTIP_LN: 'Zwraca logarytm naturalny z liczby.',
                LANG_MATH_SINGLE_TOOLTIP_LOG10: 'Zwraca logarytm dziesiętny z liczby.',
                LANG_MATH_SINGLE_TOOLTIP_EXP: 'Zwraca e do potęgi liczby.',
                LANG_MATH_SINGLE_TOOLTIP_POW10: 'Zwraca 10 do potęgi liczby.',
                LANG_MATH_MIN: 'Minimum value between', //To translate
                LANG_MATH_MIN_PARAM2: 'and', //To translate
                LANG_MATH_MIN_TOOLTIP: 'Returns the minimum value of the inputs.', //To translate
                LANG_MATH_MAX: 'Maximum value between', //To translate
                LANG_MATH_MAX_PARAM2: 'and', //To translate
                LANG_MATH_MAX_TOOLTIP: 'Returns the maximum value of the inputs.', //To translate
                LANG_MATH_POW: 'Value of', //To translate
                LANG_MATH_POW_PARAM2: 'to the power of', //To translate
                LANG_MATH_POW_TOOLTIP: 'Returns the value of the first input to the power of the second.', //To translate
                //bloki tekstowe:
                LANG_CATEGORY_TEXT: 'Tekstowe',
                LANG_TEXT_TEXT_HELPURL: '',
                LANG_TEXT_TEXT_TOOLTIP: 'Litera, słowo lub linia tekstu.',
                LANG_TEXT_CHAR_TOOLTIP: 'A simbol, letter or number, but just one character', //to translate
                LANG_TEXT_JOIN_HELPURL: '',
                LANG_TEXT_JOIN_Field_CREATEWITH: 'Utwórz tekst z',
                LANG_TEXT_JOIN_TOOLTIP: 'Utwórz tekst poprzez połączenie dowolnej liczby elementów.',
                LANG_TEXT_CREATE_JOIN_Field_JOIN: 'Złącz',
                LANG_TEXT_CREATE_JOIN_TOOLTIP: 'Dodaj, usuń lub zmień kolejność sekcji aby przekonfigurować ten blok tekstu.',
                LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM: 'element',
                LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP: 'Dodaj element do tekstu.',
                LANG_TEXT_CREATE_JOIN_TITLE_JOIN: 'Złącz',
                LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM: 'element',
                LANG_TEXT_APPEND_HELPURL: '',
                LANG_TEXT_APPEND_TO: 'z',
                LANG_TEXT_APPEND_APPENDTEXT: 'Dołącz tekst',
                LANG_TEXT_APPEND_VARIABLE: 'element',
                LANG_TEXT_APPEND_TOOLTIP: 'Dołącz pewien tekst do zmiennej %1.',
                LANG_TEXT_LENGTH_HELPURL: '',
                LANG_TEXT_LENGTH_INPUT_LENGTH: 'Długość',
                LANG_TEXT_LENGTH_TOOLTIP: 'Zwraca liczbę liter (włącznie ze spacjami) w podanym tekście.',
                LANG_TEXT_EQUALSIGNORECASE_IS: '',
                LANG_TEXT_EQUALSIGNORECASE_EQUAL: ' =',
                LANG_TEXT_EQUALSIGNORECASE_QUESTION: '?',
                LANG_TEXT_EQUALSIGNORECASE_TOOLTIP: 'Wynik sprawdzenia czy oba ciągi wejściowe są równe, niezależnie od wielkości liter.',
                LANG_TEXT_SUBSTRING: 'Przytnij ',
                LANG_TEXT_SUBSTRING_FROM: 'od',
                LANG_TEXT_SUBSTRING_TO: 'do',
                LANG_TEXT_SUBSTRING_TOOLTIP: 'Uzyskuje podciąg znaków z ciągu wejściowego z pozycji pomiędzy podanymi liczbami wejściowymi.',
                LANG_TEXT_CHARAT: 'Character of text', //To translate
                LANG_TEXT_CHARAT_POSITION: 'in position', //To translate
                LANG_TEXT_CHARAT_TOOLTIP: 'Returns character in the position of the text (beginning with 0).', //To translate
                LANG_TEXT_SPECIAL: 'Znaki specjalne',
                LANG_TEXT_SPECIAL_TAB: 'Znak tabulatora',
                LANG_TEXT_SPECIAL_CARRIAGE_RETURN: 'Znak powrotu karetki (CR)',
                LANG_TEXT_SPECIAL_LINE_FEED: 'Znak następnej linii (LF)',
                LANG_TEXT_SPECIAL_TOOLTIP: 'Wpisuje znaki specjalne.',
                LANG_TEXT_COMMENT: 'Comment', //to translate
                LANG_TEXT_COMMENT_TOOLTIP: 'Inserts a comment of one line in the program.', //to translate
                //bloki zaawansowane:
                LANG_CATEGORY_ADVANCED: 'Funkcje portów',
                LANG_ADVANCED_INOUT_ANALOG_READ: 'Odczyt analogowy PIN#',
                LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP: 'Czyta wartość z określonego wejścia analogowego',
                LANG_ADVANCED_INOUT_ANALOG_WRITE: 'Zapis analogowy PIN#',
                LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE: 'wartość',
                LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP: 'Wpisuje wartość z zakresu 0..255 do określonego wyjścia analogowego',
                LANG_ADVANCED_BUILTIN_LED: 'LED wbudowany',
                LANG_ADVANCED_BUILTIN_LED_STATE: 'stan',
                LANG_ADVANCED_BUILTIN_LED_ON: 'włączony',
                LANG_ADVANCED_BUILTIN_LED_OFF: 'wyłączony',
                LANG_ADVANCED_BUILTIN_LED_TOOLTIP: 'LED wbudowany, który jest wewnętrznie podpięty do PIN 13',
                LANG_ADVANCED_INOUT_DIGITAL_READ: 'Odczyt cyfrowy PIN#',
                LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP: 'Czyta wartość z określonego wejścia cyfrowego',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE: 'Zapis cyfrowy PIN#',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_GET_VAR: 'wartość',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN: 'PIN#',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE: 'Stan',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH: 'WYSOKI',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW: 'NISKI',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP: 'wpisuje wartość do określonego wyjścia cyfrowego',
                LANG_ADVANCED_INOUT_PULSEIN: 'Time for digital pin PIN#', //to translate
                LANG_ADVANCED_INOUT_PULSEIN_MODE: 'to change to', //to translate
                LANG_ADVANCED_INOUT_PULSEIN_TOOLTIP: 'Returns the time for a digital pin to change to the state specified (in milliseconds).', //to translate
                LANG_ADVANCED_HIGHLOW_HIGH: 'WYSOKI',
                LANG_ADVANCED_HIGHLOW_LOW: 'NISKI',
                LANG_ADVANCED_HIGHLOW_TOOLTIP: 'stan WYSOKI lub NISKI',
                LANG_ADVANCED_MATH_RANDOM: 'Losuj z zakresu',
                LANG_ADVANCED_MATH_RANDOM_AND: ' i ',
                LANG_ADVANCED_MATH_RANDOM_TOOLTIP: 'Zwraca liczbę losową z zakresu podanych dwóch liczb ograniczających.',
                LANG_ADVANCED_MATH_RANDOM_SEED: 'Set random seed to', //to translate
                LANG_ADVANCED_MATH_RANDOM_SEED_TOOLTIP: 'Sets seed for random number generator. For a random seed, read from an unconnected analog pin; to repeat the same sequence, use a fixed number.', //to translate
                //bloki procedur:
                LANG_CATEGORY_PROCEDURES: 'Funkcje',
                LANG_PROCEDURES_RETURN: 'Zwróć',
                LANG_PROCEDURES_RETURN_TOOLTIP: 'Zwraca wartość',
                LANG_PROCEDURES_CALL_WITHOUT_DEFINITION: 'Wywołanie funkcji bez dopasowanej definicji',
                LANG_PROCEDURES_DEFNORETURN_HELPURL: '',
                LANG_PROCEDURES_DEFNORETURN_PROCEDURE: 'Procedura',
                LANG_PROCEDURES_DEFNORETURN_DO: 'rób',
                LANG_PROCEDURES_DEFNORETURN_TOOLTIP: 'Procedura - nie zwraca wartości.',
                LANG_PROCEDURES_DEFRETURN_HELPURL: '',
                LANG_PROCEDURES_DEFRETURN_PROCEDURE: 'Funkcja',
                LANG_PROCEDURES_DEFRETURN_DO: 'rób',
                LANG_PROCEDURES_DEFRETURN_RETURN: 'zwróć',
                LANG_PROCEDURES_DEFRETURN_TOOLTIP: 'Funkcja - zwraca wartość.',
                LANG_PROCEDURES_DEF_DUPLICATE_WARNING: 'Ostrzeżenie: Ta funkcja ma powielone parametry.',
                LANG_PROCEDURES_CALLNORETURN_HELPURL: '',
                LANG_PROCEDURES_CALLNORETURN_CALL: 'Wywołaj',
                LANG_PROCEDURES_CALLNORETURN_PROCEDURE: 'Procedura',
                LANG_PROCEDURES_CALLNORETURN_TOOLTIP: 'Wywołuje blok procedury.',
                LANG_PROCEDURES_CALLRETURN_HELPURL: '',
                LANG_PROCEDURES_CALLRETURN_CALL: 'Wywołaj',
                LANG_PROCEDURES_CALLRETURN_PROCEDURE: 'Funkcja',
                LANG_PROCEDURES_CALLRETURN_TOOLTIP: 'Wywołuje blok funkcji i zwraca jej wynik.',
                LANG_PROCEDURES_MUTATORCONTAINER_Field: 'parametry',
                LANG_PROCEDURES_MUTATORARG_Field: 'zmienna:',
                LANG_PROCEDURES_HIGHLIGHT_DEF: 'Funkcja Highlight',
                LANG_PROCEDURES_IFRETURN_TOOLTIP: 'Jeżeli warunek jest prawdą, zwraca tę wartość.',
                LANG_PROCEDURES_IFRETURN_WARNING: 'Ostrzeżenie: Ten blok może być użyty wyłącznie w funkcji.',
                //bloki zmiennych:
                LANG_CATEGORY_VARIABLES: 'Zmienne',
                LANG_VARIABLES_CALL_WITHOUT_DEFINITION: 'Ta zmienna nie jest zadeklarowana.',
                LANG_VARIABLES_GLOBAL: 'Deklaracja zmiennej globalnej ',
                LANG_VARIABLES_GLOBAL_TYPE: 'typu ',
                LANG_VARIABLES_GLOBAL_EQUALS: 'równej',
                LANG_VARIABLES_GLOBAL_TOOLTIP: 'Deklaruje i definiuje zmienną globalną typu Int lub String.',
                LANG_VARIABLES_LOCAL: 'Deklaracja zmiennej ',
                LANG_VARIABLES_LOCAL_TYPE: 'typu ',
                LANG_VARIABLES_LOCAL_EQUALS: 'równej',
                LANG_VARIABLES_LOCAL_TOOLTIP: 'Deklaruje i definiuje zmienną lokalną typu Int lub String.',
                LANG_VARIABLES_DEFINE: 'definiuj zmienną ',
                LANG_VARIABLES_DEFINE_AS: 'jako',
                LANG_VARIABLES_DEFINE_TOOLTIP: 'Definiuje typ zmiennej.',
                LANG_VARIABLES_SET: 'Zmienna',
                LANG_VARIABLES_SET_AS: '=',
                LANG_VARIABLES_SET_TOOLTIP: 'Ustawia wartość zmiennej.',
                LANG_VARIABLES_GET: 'Zmienna',
                LANG_VARIABLES_GET_TOOLTIP: 'Zwraca wartość zmiennej.',
                LANG_VARIABLES_PIN_ANALOG: 'pin analogowy',
                LANG_VARIABLES_PIN_DIGITAL: 'pin cyfrowy',
                LANG_VARIABLES_PIN_DIGITAL0: 'Ostrzeżenie: pin cyfrowy 0 (RX pin) jst używany podczas ładowania programu (sketchu). Jego użycie do podłączania komponenetów elektronicznych może powodować problemy podczas ładowania nowego programu.',
                LANG_VARIABLES_PIN_TOOLTIP: 'Wybierz PIN.',
                LANG_VARIABLES_TYPE_BYTE: 'Bajt',
                LANG_VARIABLES_TYPE_FLOAT: 'Liczba zmiennoprzecinkowa',
                LANG_VARIABLES_TYPE_INTEGER: 'Liczba całkowita',
                LANG_VARIABLES_TYPE_INTEGER_LONG: 'Długa liczba całkowita',
                LANG_VARIABLES_TYPE_INTEGER_ULONG: 'Unsigned Long Integer', //To translate
                LANG_VARIABLES_TYPE_STRING: 'Ciąg znaków',
                LANG_VARIABLES_TYPE_CHAR: 'Character', //to translate
                LANG_VARIABLES_TYPE_BOOLEAN: 'Boolean', //to translate
                LANG_VARIABLES_VOLATILE_GLOBAL: 'Declare VOLATILE GLOBAL variable ', // To translate
                LANG_VARIABLES_VOLATILE_GLOBAL_TYPE: 'of type ', // To translate
                LANG_VARIABLES_VOLATILE_GLOBAL_EQUALS: 'equals ', // To translate
                LANG_VARIABLES_VOLATILE_GLOBAL_TOOLTIP: 'Declares and defines a VOLATILE GLOBAL variable of type int or String used in a ISR function.', // To translate
                //bloki dźwięk (zum):
                LANG_CATEGORY_ZUM: 'Dźwięki',
                LANG_ZUM_PIEZO_BUZZER: 'Brzęczyk',
                LANG_ZUM_PIEZO_BUZZER_PIN: 'PIN#',
                LANG_ZUM_PIEZO_BUZZER_TONE: 'Ton',
                LANG_ZUM_PIEZO_BUZZER_DO: 'do',
                LANG_ZUM_PIEZO_BUZZER_RE: 're',
                LANG_ZUM_PIEZO_BUZZER_MI: 'mi',
                LANG_ZUM_PIEZO_BUZZER_FA: 'fa',
                LANG_ZUM_PIEZO_BUZZER_SOL: 'sol',
                LANG_ZUM_PIEZO_BUZZER_LA: 'la',
                LANG_ZUM_PIEZO_BUZZER_SI: 'si',
                LANG_ZUM_PIEZO_BUZZER_DURATION: 'Czas trwania [ms]',
                LANG_ZUM_PIEZO_BUZZER_TOOLTIP: 'Brzęczyk piezoelektryczny Zum',
                LANG_ZUM_PIEZO_BUZZERAV: 'Brzęczyk zaawansowany',
                LANG_ZUM_PIEZO_BUZZERAV_PIN: 'PIN#',
                LANG_ZUM_PIEZO_BUZZERAV_TONE: 'Ton',
                LANG_ZUM_PIEZO_BUZZERAV_DURATION: 'Czas trwania [ms]',
                LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP: 'Brzęczyk piezoelektryczny Zum zaawansowany',
                LANG_ZUM_DHT11_VALUE: 'Get', //to translate
                LANG_ZUM_DHT11_VALUE1: 'Temperature', //to translate
                LANG_ZUM_DHT11_VALUE2: 'Humidity', //to translate
                LANG_ZUM_DHT11_PIN: 'PIN', //to translate
                LANG_ZUM_DHT11_TOOLTIP: 'Get temperature or humidity from a DHT11, DHT21 or DHT22 sensor.', //to translate
                //motor blocks (servo and stepper):
                LANG_CATEGORY_MOTOR: 'Motors', //to translate
                LANG_MOTOR_SERVO_CONT: 'Serwo obrotu ciągłego',
                LANG_MOTOR_SERVO_CONT_PIN: 'PIN#',
                LANG_MOTOR_SERVO_CONT_ROT: 'Rotacja',
                LANG_MOTOR_SERVO_CONT_TURN_CLOCKWISE: 'Obrót zgodnie ze wskazówkami zegara',
                LANG_MOTOR_SERVO_CONT_TURN_COUNTERCLOCKWISE: 'Obrót przeciwnie do wskazówek zegara',
                LANG_MOTOR_SERVO_CONT_STOPPED: 'Zatrzymany',
                LANG_MOTOR_SERVO_CONT_DELAY: 'Opóźnienie [ms]',
                LANG_MOTOR_SERVO_CONT_TOOLTIP: 'Serwomechanizm obrotu ciągłego.',
                LANG_MOTOR_SERVO_MOVE: 'Serwo obrotu kątowego',
                LANG_MOTOR_SERVO_MOVE_PIN: 'PIN#',
                LANG_MOTOR_SERVO_MOVE_DEGREES: 'Stopnie (0~180)',
                LANG_MOTOR_SERVO_MOVE_DELAY: 'Opóźnienie [ms]',
                LANG_MOTOR_SERVO_MOVE_TOOLTIP: 'Serwomechanizm obrotu w zakresie 0~180 stopni.',
                LANG_MOTOR_SERVO_WARNING: 'Ustawianie pinu serwomechanizmu przy użyciu zmiennej nie jest możliwe.',
                LANG_MOTOR_STEPPER_MOVE: 'Stepper motor', //to translate
                LANG_MOTOR_STEPPER_MOVE_SPR: 'Steps per revolution', //to translate
                LANG_MOTOR_STEPPER_MOVE_PINS: '4 pins?', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN1: 'Pin 1', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN2: 'Pin 2', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN3: 'Pin 3', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN4: 'Pin 4', //to translate
                LANG_MOTOR_STEPPER_MOVE_SETSPEED: 'Set speed to', //to translate
                LANG_MOTOR_STEPPER_MOVE_SETSPEED_NEXT: '(rpm)', //to translate
                LANG_MOTOR_STEPPER_MOVE_STEP: 'Move motor', //to translate
                LANG_MOTOR_STEPPER_MOVE_STEP_NEXT: '(steps)', //to translate
                LANG_MOTOR_STEPPER_MOVE_TOOLTIP: 'Moves motor the number of steps. A positive steps value move in one direction, a negative value moves to the other direction.', //to translate
                LANG_MOTOR_PCA9685_DEF: 'PCA9685', //to translate
                LANG_MOTOR_PCA9685_DEF_SERVO: 'Servo', //to translate
                LANG_MOTOR_PCA9685_DEF_ADDRESS: 'Address of the component', //to translate
                LANG_MOTOR_PCA9685_DEF_TOOLTIP: 'Defines a PCA9685 connected to Arduino over I2C.', //to translate
                LANG_MOTOR_PCA9685_SET_PWM: 'PCA9685 Move servo', //to translate
                LANG_MOTOR_PCA9685_SET_PWM_ANGLE: 'angle', //to translate
                LANG_MOTOR_PCA9685_SET_PWM_TOOLTIP: 'Moves servo connected to PCA9685 the specified angle in degrees.', //to translate
                //interrupt blocks :
                LANG_CATEGORY_INTERRUPTS: 'Interrupts', // To translate
                LANG_INTERRUPTS_STATE: 'Set interrupts state to ', // To translate
                LANG_INTERRUPTS_STATE_ENABLED: 'ENABLED', // To translate
                LANG_INTERRUPTS_STATE_DISABLED: 'DISABLED', // To translate
                LANG_INTERRUPTS_STATE_TOOLTIP: 'Enable or Disable interrupts. Some functions will not work while interrupts are disabled. Use only for particularly critical sections of code.', // To translate
                LANG_INTERRUPTS_ATTACH: 'Attach procedure ', // To translate
                LANG_INTERRUPTS_ATTACH_PARAM2: 'in mode ', // To translate
                LANG_INTERRUPTS_ATTACH_PARAM3: 'with interrupt of digital pin', // To translate
                LANG_INTERRUPTS_ATTACH_LOW: 'LOW', // To translate
                LANG_INTERRUPTS_ATTACH_CHANGE: 'CHANGE', // To translate
                LANG_INTERRUPTS_ATTACH_RISING: 'RISING', // To translate
                LANG_INTERRUPTS_ATTACH_FALLING: 'FALLING', // To translate
                LANG_INTERRUPTS_ATTACH_PROCEDURE: 'func_without_return', // To translate
                LANG_INTERRUPTS_ATTACH_TOOLTIP: 'Set the procedure to be executed when an interrupt is raised in the specified pin.', // To translate
                LANG_INTERRUPTS_DETACH: 'Detach interrupt on digital pin', // To translate
                LANG_INTERRUPTS_DETACH_TOOLTIP: 'Disables the interrupt on the pin. When the pin is activated, the procedure associated is no longer executed.', // To translate
                LANG_WIFI_CONNECT: 'Wifi:', //To translate
                LANG_WIFI_CONNECT_STATION: 'connect', //To translate
                LANG_WIFI_CONNECT_SOFTAP: 'create network', //To translate
                LANG_WIFI_CONNECT_SSID: 'SSID', //To translate
                LANG_WIFI_CONNECT_PASSWORD: 'password', //To translate
                LANG_WIFI_CONNECT_CHANNEL: 'channel', //To translate
                LANG_WIFI_CONNECT_RX_PIN: 'Rx pin', //To translate
                LANG_WIFI_CONNECT_TX_PIN: 'Tx pin', //To translate
                LANG_WIFI_CONNECT_BAUD: 'baud rate', //To translate
                LANG_WIFI_CONNECT_TOOLTIP: 'Connects or creates a wifi using a ESP8266 adapter, and returns true on success.', //To translate
                LANG_WIFI_DISCONNECT: 'Wifi:disconnect', //To translate
                LANG_WIFI_DISCONNECT_TOOLTIP: 'Disconnects from the current wifi network.', //To translate
                LANG_WIFI_CLIENT: 'Wifi:connect to server', //To translate
                LANG_WIFI_CLIENT_IP: 'IP address', //To translate
                LANG_WIFI_CLIENT_PORT: 'Port', //To translate
                LANG_WIFI_CLIENT_TOOLTIP: 'Connects to a TCP server.', //To translate
                LANG_WIFI_SERVER: 'Wifi:start server', //To translate
                LANG_WIFI_SERVER_PORT: 'Port', //To translate
                LANG_WIFI_SERVER_TOOLTIP: 'Create a TCP server to accept connections from clients.', //To translate
                LANG_WIFI_GETIP: 'Wifi:get IP address', //To translate
                LANG_WIFI_GETIP_TOOLTIP: 'Returns IP address of the adapter.', //To translate
                LANG_WIFI_SEND_SERVER: 'Wifi:send to server', //To translate
                LANG_WIFI_SEND_SERVER_DATA: 'Text', //To translate
                LANG_WIFI_SEND_SERVER_TOOLTIP: 'Send text to the TCP server.', //To translate
                LANG_WIFI_SEND_CLIENT: 'Wifi:send to client', //To translate
                LANG_WIFI_SEND_CLIENT_ID: 'ID', //To translate
                LANG_WIFI_SEND_CLIENT_DATA: 'Data', //To translate
                LANG_WIFI_SEND_CLIENT_TOOLTIP: 'Send text to specified client (ID).', //To translate
                LANG_WIFI_RECEIVE_CLIENT: 'Wifi:receive from client', //To translate
                LANG_WIFI_RECEIVE_CLIENT_TOOLTIP: 'Receives a text from client, begining with id number and a colon (:). If timeout is reached, returns an empty string.', //To translate
                LANG_WIFI_RECEIVE_SERVER: 'Wifi:receive from server', //To translate
                LANG_WIFI_RECEIVE_SERVER_TIMEOUT: 'Timeout', //To translate
                LANG_WIFI_RECEIVE_SERVER_TOOLTIP: 'Receives a string from TCP server or empty string if timeout reached.', //To translate
                LANG_WIFI_CLOSE_SERVER: 'Wifi:stop server', //To translate
                LANG_WIFI_CLOSE_SERVER_TOOLTIP: 'Shutdown TCP server.', //To translate
                LANG_WIFI_CLOSE_CLIENT: 'Wifi:stop connection', //To translate
                LANG_WIFI_CLOSE_CLIENT_TOOLTIP: 'Shutdown connection with TCP server.' //To translate
            };
            // Node
            if (typeof module !== 'undefined' && module.exports) {
                module.exports = language;
            }
            // Browser
            // if (typeof window !== 'undefined' && this.RoboBlocks && this.RoboBlocks.locales.add) {
            //     this.RoboBlocks.locales.add('es', language);
            if (typeof window !== 'undefined' && RoboBlocks && RoboBlocks.locales.add) {
                RoboBlocks.locales.add('pl-PL', language);
            }
        }());

        // Source: lang/pt-BR.js
        (function() {
            var language = {
                //random :
                BLOCKLY_MSG_DUPLICATE_BLOCK: 'Duplicar',
                BLOCKLY_MSG_REMOVE_COMMENT: 'Remover comentário',
                BLOCKLY_MSG_ADD_COMMENT: 'Adicionar comentário',
                BLOCKLY_MSG_EXTERNAL_INPUTS: 'Entradas externas',
                BLOCKLY_MSG_INLINE_INPUTS: 'Entradas em linha',
                BLOCKLY_MSG_DELETE_BLOCK: 'Eliminar bloco',
                BLOCKLY_MSG_DELETE_X_BLOCKS: 'Eliminar %1 blocos',
                BLOCKLY_MSG_COLLAPSE_BLOCK: 'Minimizar bloco',
                BLOCKLY_MSG_EXPAND_BLOCK: 'Expandir bloco',
                BLOCKLY_MSG_DISABLE_BLOCK: 'Desativar bloco',
                BLOCKLY_MSG_ENABLE_BLOCK: 'Ativar bloco',
                BLOCKLY_MSG_HELP: 'Ajuda',
                BLOCKLY_MSG_COLLAPSE_ALL: 'Minimizar blocos',
                BLOCKLY_MSG_EXPAND_ALL: 'Expandir blocos',
                LANG_VARIABLES_SET_ITEM: 'elemento',
                LANG_RESERVED_WORDS: 'Palavra reservada: este nome não é permitido.',
                LANG_CHAR_LENGTH: 'A character must have length 0 or 1.', //to translate
                //logic blocks:
                LANG_CATEGORY_LOGIC: 'Lógica',
                LANG_LOGIC_OPERATION_AND: 'e',
                LANG_LOGIC_OPERATION_OR: 'ou',
                LANG_LOGIC_COMPARE_TOOLTIP_EQ: 'Compara se as duas entradas são iguais.',
                LANG_LOGIC_COMPARE_TOOLTIP_NEQ: 'Compara se as duas entradas não são iguais entre sí.',
                LANG_LOGIC_COMPARE_TOOLTIP_LT: 'Compara se a primera entrada é menor do que a segunda entrada.',
                LANG_LOGIC_COMPARE_TOOLTIP_LTE: 'Compara se a primera entrada é menor ou igual à segunda entrada.',
                LANG_LOGIC_COMPARE_TOOLTIP_GT: 'Compara se a primera entrada é maior do que a segunda entrada.',
                LANG_LOGIC_COMPARE_TOOLTIP_GTE: 'Compara se a primera entrada é maior ou igual à segunda entrada.',
                LANG_LOGIC_OPERATION_TOOLTIP_AND: 'Compara se ambas as entradas são verdadeiras.',
                LANG_LOGIC_OPERATION_TOOLTIP_OR: 'Compara se alguma das entradas é verdadeira.',
                LANG_LOGIC_NEGATE_INPUT_NOT: 'não',
                LANG_LOGIC_NEGATE_TOOLTIP: 'Devolve o inverso da entrada.',
                LANG_LOGIC_NEGATE_HELPURL: '',
                LANG_LOGIC_BOOLEAN_TRUE: 'verdadeiro',
                LANG_LOGIC_BOOLEAN_FALSE: 'falso',
                LANG_LOGIC_BOOLEAN_TOOLTIP: 'Devolve verdadeiro ou falso em função do seleccionado.',
                //communication blocks:
                LANG_CATEGORY_COMMUNICATION: 'Comunicação',
                LANG_BQ_BLUETOOTH_RECEIVE: 'Bluetooth: receber ',
                LANG_BQ_BLUETOOTH_RECEIVE_BLUETOOTH: 'Bluetooth',
                LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP: 'Devolve os dados recebidos pelo módulo Bluetooth',
                LANG_BQ_BLUETOOTH_SEND: 'Bluetooth: Enviar',
                LANG_BQ_BLUETOOTH_SEND_SEND: 'Enviar dados',
                LANG_BQ_BLUETOOTH_SEND_TOOLTIP: 'Os dados da entrada são enviados usando o módulo Bluetooth',
                LANG_BQ_BLUETOOTH_DEF: 'Bluetooth',
                LANG_BQ_BLUETOOTH_DEF_BAUD_RATE: 'Baud Rate',
                LANG_BQ_BLUETOOTH_DEF_PIN1: 'RX',
                LANG_BQ_BLUETOOTH_DEF_PIN2: 'TX',
                LANG_BQ_BLUETOOTH_DEF_NAME: 'Nome',
                LANG_BQ_BLUETOOTH_DEF_PINCODE: 'Código PIN',
                LANG_BQ_BLUETOOTH_DEF_RECEIVE: 'Receber',
                LANG_BQ_BLUETOOTH_DEF_SEND: 'Enviar',
                LANG_BQ_BLUETOOTH_DEF_TOOLTIP: 'Definicão do módulo Bluetooth',
                LANG_ADVANCED_BT_SERIAL_AVAILABLE: 'Bluetooth: Porta Série disponível',
                LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP: 'Verifica se o módulo Bluetooth está disponível ou não',
                LANG_ADVANCED_SERIAL_AVAILABLE: 'Porta Série disponível',
                LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP: 'Verifica se a porta série está disponível ou não',
                LANG_ADVANCED_SERIAL_PARSEINT: 'Serial Read Integer', // To translate
                LANG_ADVANCED_SERIAL_PARSEINT_TOOLTIP: 'First valid (long) integer number from the serial buffer', // To translate
                LANG_ADVANCED_SERIAL_PRINT: 'Imprimir pela porta série',
                LANG_ADVANCED_SERIAL_PRINT_TOOLTIP: 'Imprime os dados como texto ASCII.',
                LANG_ADVANCED_SERIAL_PRINTLN: 'Imprimir pela porta série com salto de linha',
                LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP: 'Imprime os dados como texto ASCII e con retorno de carro (RC).',
                LANG_ADVANCED_SERIAL_PRINT_FORMAT: 'Prints value with format', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_1: 'Binary', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_2: 'Octal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_3: 'Decimal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_4: 'Hexadecimal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_5: 'Without decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_6: 'One decimal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_7: 'Two decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_8: 'Three decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_9: 'Four decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_TOOLTIP: 'Prints value with specified format', //to translate
                LANG_ADVANCED_SERIAL_PRINTLN_FORMAT: 'Send value with format and CR', //To translate
                LANG_ADVANCED_SERIAL_PRINTLN_FORMAT_TOOLTIP: 'Send a number to serial port with specified format and carriage return (CR).', //To translate
                LANG_ADVANCED_SERIAL_READ: 'Ler a porta série',
                LANG_ADVANCED_SERIAL_READ_TOOLTIP: 'Lê os dados recebidos pela porta série como bytes.',
                LANG_ADVANCED_SERIAL_READSTRING: 'Ler seqüência a porta série',
                LANG_ADVANCED_SERIAL_READSTRING_TOOLTIP: 'Lê os dados recebidos pela porta série como texto ASCII.',
                LANG_TEXT_SPECIAL: 'Caracteres especiais',
                LANG_TEXT_SPECIAL_TAB: 'Tabulador',
                LANG_TEXT_SPECIAL_CARRIAGE_RETURN: 'Retorno de carro',
                LANG_TEXT_SPECIAL_LINE_FEED: 'Salto de linha',
                LANG_TEXT_SPECIAL_TOOLTIP: 'Escreve caracteres especiais.',
                //sensor blocks :
                LANG_CATEGORY_SENSOR: 'Sensores',
                LANG_BQ_BAT: 'BAT - Sensor de Ultrasons',
                LANG_BQ_BAT_RED_PIN: 'ECHO PIN#',
                LANG_BQ_BAT_BLUE_PIN: 'TRIGGER PIN#',
                LANG_BQ_BAT_TOOLTIP: 'Devolve a distância medida pelo sensor.',
                LANG_IR_READ: 'Reads from infrared receiver', //to translate
                LANG_IR_READ_PIN: 'connected to PIN#', //to translate
                LANG_IR_READ_TOOLTIP: 'Reads the value received from the infrared receiver', //to translate
                //LCD blocks:
                LANG_CATEGORY_LCD: 'LCD bloqs',
                LANG_LCD_DEF: 'LCD (2x16)',
                LANG_LCD_DEF_CONNECTION: 'Connection type', //to translate
                LANG_LCD_DEF_CONNECTION_PARALLEL: 'Parallel (6 pins)', //to translate
                LANG_LCD_DEF_CONNECTION_I2C: 'I2C (4 wires)', //to translate
                LANG_LCD_DEF_ADDRESS: 'Address of the component', //to translate
                LANG_LCD_DEF_PIN_1: 'RS Pin', //to translate
                LANG_LCD_DEF_PIN_2: 'Enable Pin', //to translate
                LANG_LCD_DEF_PIN_3: 'Data4 Pin', //to translate
                LANG_LCD_DEF_PIN_4: 'Data5 Pin', //to translate
                LANG_LCD_DEF_PIN_5: 'Data6 Pin', //to translate
                LANG_LCD_DEF_PIN_6: 'Data7 Pin', //to translate
                LANG_LCD_DEF_TOOLTIP: 'Define o LCD',
                LANG_LCD_ADVANCED_DEF: 'LCD avançado',
                LANG_LCD_ADVANCED_ROWS: 'Linhas',
                LANG_LCD_ADVANCED_COLUMNS: 'Colunas',
                LANG_LCD_DEF_ADVANCED_TOOLTIP: 'Bloco que define o LCD avançado',
                LANG_LCD_SETBACKLIGHT: 'LCD: ajustar a retroiluminação',
                LANG_LCD_SETBACKLIGHT_CLOSE: '',
                LANG_LCD_SETBACKLIGHT_TOOLTIP: 'Ajusta a retroiluminação do LCD',
                LANG_LCD_PRINT: 'LCD: Imprimir ',
                LANG_LCD_PRINT_POSITION: 'Definir a posição do texto?',
                LANG_LCD_PRINT_TOOLTIP: 'Imprime uma frase no LCD na posição específicada ou na seguinte disponível.',
                LANG_LCD_CLEAR: 'LCD apagar',
                LANG_LCD_CLEAR_TOOLTIP: 'LCD: Apagar',
                LANG_LCD_HOME: 'LCD Go home', //to translate
                LANG_LCD_HOME_TOOLTIP: 'LCD: Positions the cursor in the upper-left corner of the screen', //to translate
                LANG_LCD_DISPLAY: 'LCD Show content', //to translate
                LANG_LCD_DISPLAY_TOOLTIP: 'LCD: Turns on the LCD display and restore the text that was on the display', //to translate
                LANG_LCD_NODISPLAY: 'LCD Hide content', //to translate
                LANG_LCD_NODISPLAY_TOOLTIP: 'LCD: Turns off the LCD display, without losing the text currently shown on it', //to translate
                LANG_LCD_SCROLLDISPLAYLEFT: 'LCD Scrolls to the left', //to translate
                LANG_LCD_SCROLLDISPLAYLEFT_TOOLTIP: 'LCD: Scrolls the contents of the display one space to the left', //to translate
                LANG_LCD_SCROLLDISPLAYRIGHT: 'LCD Scrolls to the right', //to translate
                LANG_LCD_SCROLLDISPLAYRIGHT_TOOLTIP: 'LCD: Scrolls the contents of the display one space to the right', //to translate
                //controls blocks :
                LANG_CATEGORY_CONTROLS: 'Controles',
                LANG_CONTROLS_BASE_DELAY_WAIT: 'Esperar (ms)',
                LANG_CONTROLS_BASE_DELAY_TOOLTIP: 'Espera o tempo especificado em milisegundos (ms)',
                LANG_CONTROLS_BASE_MILLIS: 'Time from start (ms)', // To translate
                LANG_CONTROLS_BASE_MILLIS_TOOLTIP: 'Number of milliseconds since the program started (long integer)', // To translate
                LANG_CONTROLS_BASE_DELAY_MICROSECONDS: 'Wait [us]', //To translate
                LANG_CONTROLS_BASE_DELAY_MICROSECONDS_TOOLTIP: 'Waits the specified time in microseconds (us)', //To translate
                LANG_CONTROLS_BASE_MICROS: 'Time from start (us)', //To translate
                LANG_CONTROLS_BASE_MICROS_TOOLTIP: 'Number of microseconds since the program started (long integer)', //To translate
                LANG_CONTROLS_DOWHILE_OPERATOR_DO: 'Do',
                LANG_CONTROLS_DOWHILE_OPERATOR_WHILE: 'while',
                LANG_CONTROLS_DOWHILE_TOOLTIP: 'While the condition is true, continue doing the statements.',
                LANG_CONTROLS_EXECUTE: 'Execute',
                LANG_CONTROLS_EXECUTE_TOOLTIP: 'Executes C/C++ code. Use with caution, as it can easily break the program and prevent it from compiling.',
                LANG_CONTROLS_IF_TOOLTIP_1: 'Se a condição é verdadeira, executa as ações dentro do bloco.',
                LANG_CONTROLS_IF_TOOLTIP_2: 'Se a condição é verdadeira, executa o primero bloco de comandos. Se não é, executa o segundo bloco de comandos.',
                LANG_CONTROLS_IF_TOOLTIP_3: 'Se o primeiro valor é verdadeiro, executa o primero bloco de comandos. Senão, se o segundo valor é verdadeiro, executa o segundo bloco de comandos.',
                LANG_CONTROLS_IF_TOOLTIP_4: 'Se o primeiro valor é verdadeiro, executa o primero bloco de comandos. Senão, se o segundo valor é verdadeiro, executa o segundo bloco de comandos. Se nenhum dos valores é verdadeiro, executa o último bloco de comandos',
                LANG_CONTROLS_IF_MSG_IF: 'se',
                LANG_CONTROLS_IF_MSG_ELSEIF: 'senão, se',
                LANG_CONTROLS_IF_MSG_ELSE: 'senão',
                LANG_CONTROLS_IF_MSG_THEN: 'executar',
                LANG_CONTROLS_IF_IF_Field_IF: 'se',
                LANG_CONTROLS_IF_IF_TOOLTIP: 'Adicionar, eliminar ou reordenar seções para reconfigurar este bloco "se".',
                LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF: 'senão, se',
                LANG_CONTROLS_IF_ELSEIF_TOOLTIP: 'Adiciona uma condição ao bloco "se".',
                LANG_CONTROLS_IF_ELSE_Field_ELSE: 'senão',
                LANG_CONTROLS_IF_ELSE_TOOLTIP: 'Adiciona uma condição final ao bloco "se" para capturar o resto das opções.',
                LANG_CONTROLS_FOR_FROM_WARNING: 'Não é possível definir uma variável como o valor inicial do bloco.',
                LANG_CONTROLS_FOR_TO_WARNING: 'Não é possível definir uma variável como o valor inicial do bloco.',
                LANG_CONTROLS_FOR_INCREMENT_WARNING: 'It is not possible to set a variable as the increment value of the for block', //to translate
                LANG_CONTROLS_FOR_INPUT_WITH: 'Contar com',
                LANG_CONTROLS_FOR_INPUT_VAR: 'x',
                LANG_CONTROLS_FOR_INPUT_FROM: 'desde',
                LANG_CONTROLS_FOR_INPUT_TO: 'até',
                LANG_CONTROLS_FOR_INPUT_INCREMENT: 'increment', //to translate
                LANG_CONTROLS_FOR_INPUT_DO: 'executar',
                LANG_CONTROLS_FOR_TOOLTIP: 'Contar desde de início até ao final. Cada vez que se incrementa o valor, a variável fica com esse valor e são executadas as ações.',
                LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE: 'enquanto',
                LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL: 'até',
                LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE: 'Enquanto a condição for verdadeira, executar as instruções.',
                LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL: 'Enquanto a condição for falsa, executar as instruções.',
                LANG_CONTROLS_REPEAT_TITLE_REPEAT: 'Repetir',
                LANG_CONTROLS_REPEAT_TITLE_TIMES: 'vezes',
                LANG_CONTROLS_REPEAT_INPUT_DO: 'executar',
                LANG_CONTROLS_REPEAT_TOOLTIP: 'executar as instruções um determinado número de vezes.',
                LANG_CONTROLS_FLOW_STATEMENTS_HELPURL: '',
                LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP: '"loop"',
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: 'interromper',
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: 'seguir para o próximo valor do "loop"',
                LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK: 'Sair do "loop" nesta instrução.',
                LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE: 'Saltar o resto das ações desta volta e continuar com para a próxima volta.',
                LANG_CONTROLS_FLOW_STATEMENTS_WARNING: 'Atenção: Este bloco só pode ser usado dentro de um "loop".',
                LANG_CONTROLS_SETUP_LOOP_SETUP_TITLE: 'Setup',
                LANG_CONTROLS_SETUP_LOOP_LOOP_TITLE: 'Loop',
                LANG_CONTROLS_SETUP_LOOP_TOOLTIP: 'Blocks in setup will be executed at start, and blocks in Loop will be repeated continously.',
                LANG_CONTROLS_SWITCH: 'se ',
                LANG_CONTROLS_SWITCH_TOOLTIP_1: 'executa as ações se for este o caso.',
                LANG_CONTROLS_SWITCH_TOOLTIP_2: 'executa as ações se for este o caso.',
                LANG_CONTROLS_SWITCH_TOOLTIP_3: 'executa as ações se for este o caso.',
                LANG_CONTROLS_SWITCH_TOOLTIP_4: 'executa as ações se for este o caso.',
                LANG_CONTROLS_SWITCH_SWITCH_TOOLTIP: 'Este bloco compara um a um se são cumpridos os diferentes casos.',
                LANG_CONTROLS_SWITCH_CASE_TOOLTIP: 'caso ',
                LANG_CONTROLS_SWITCH_DEFAULT_TOOLTIP: 'O bloco "default" especifica a ação que se vai executar se não forem cumpridos nehum dos casos anteriores.',
                LANG_CONTROLS_SWITCH_IS: 'é: ',
                LANG_CONTROLS_SWITCH_CASE: 'caso ',
                LANG_CONTROLS_SWITCH_COLON: ': ',
                LANG_CONTROLS_SWITCH_DEFAULT: 'noutro caso',
                LANG_CONTROLS_SWITCH_DO: 'executar',
                //math blocks :
                LANG_CATEGORY_MATH: 'Matemáticas',
                LANG_MATH_ADVANCED_MAP_MAP: 'Mapear ',
                LANG_MATH_ADVANCED_MAP_FROM: 'De [',
                LANG_MATH_ADVANCED_MAP_HYPHEN: '-',
                LANG_MATH_ADVANCED_MAP_BRACKET: ']',
                LANG_MATH_ADVANCED_MAP_TO: 'a [',
                LANG_MATH_ADVANCED_MAP_TOOLTIP: 'Mapeia a entrada do intervalo de valores iniciais para um intervalo diferente.',
                LANG_MATH_NUMBER_TOOLTIP: 'Número inteiro',
                LANG_MATH_ARRAY_ARRAY3: '[3]',
                LANG_MATH_ARRAY_BRACKET3: '{',
                LANG_MATH_ARRAY_BRACKET4: '}',
                LANG_MATH_ARRAY_COMMA: ',',
                LANG_MATH_ARRAY_TOOLTIP: 'Vector de três inteiros',
                LANG_ARRAY_GET_BRACKET1: '[',
                LANG_ARRAY_GET_BRACKET2: ']',
                LANG_ARRAY_GET_TOOLTIP: 'Devolve o valor de um elemento determinado do vetor.',
                LANG_MATH_MODULO_TOOLTIP: 'Devolve o resto da divisão entre os valores das entradas.',
                LANG_MATH_BASE_MAP: 'Mapear ',
                LANG_MATH_BASE_MAP_VALUE_TO: 'Valor entre [0-',
                LANG_MATH_BASE_MAP_BRACKET: ']',
                LANG_MATH_BASE_MAP_TOOLTIP: 'Mapeia o intervalo de valores da entrada [0-1023] a outro intervalo de valores.',
                LANG_MATH_SINGLE_OP_ROOT: 'raíz quadrada',
                LANG_MATH_SINGLE_OP_ABSOLUTE: 'valor absoluto',
                LANG_MATH_SINGLE_TOOLTIP_ROOT: 'Devolve a raíz quadrada de um número.',
                LANG_MATH_SINGLE_TOOLTIP_ABS: 'Devolve o valor absoluto de um número.',
                LANG_MATH_SINGLE_TOOLTIP_NEG: 'Devolve a negação do sinal de um número.',
                LANG_MATH_SINGLE_TOOLTIP_LN: 'Devolve o logaritmo de um número.',
                LANG_MATH_SINGLE_TOOLTIP_LOG10: 'Devolve o logaritmo de base 10 de um número.',
                LANG_MATH_SINGLE_TOOLTIP_EXP: 'Devolve o exponencial de um número.',
                LANG_MATH_SINGLE_TOOLTIP_POW10: 'Devolve 10 elevado a uma potência.',
                LANG_MATH_MIN: 'Minimum value between', //To translate
                LANG_MATH_MIN_PARAM2: 'and', //To translate
                LANG_MATH_MIN_TOOLTIP: 'Returns the minimum value of the inputs.', //To translate
                LANG_MATH_MAX: 'Maximum value between', //To translate
                LANG_MATH_MAX_PARAM2: 'and', //To translate
                LANG_MATH_MAX_TOOLTIP: 'Returns the maximum value of the inputs.', //To translate
                LANG_MATH_POW: 'Value of', //To translate
                LANG_MATH_POW_PARAM2: 'to the power of', //To translate
                LANG_MATH_POW_TOOLTIP: 'Returns the value of the first input to the power of the second.', //To translate
                //text blocks:
                LANG_CATEGORY_TEXT: 'Texto',
                LANG_TEXT_TEXT_HELPURL: '',
                LANG_TEXT_TEXT_TOOLTIP: 'Uma letra, uma palabra ou uma linha de texto.',
                LANG_TEXT_CHAR_TOOLTIP: 'A simbol, letter or number, but just one character', //to translate
                LANG_TEXT_JOIN_HELPURL: '',
                LANG_TEXT_JOIN_Field_CREATEWITH: 'criar texto com',
                LANG_TEXT_JOIN_TOOLTIP: 'Cria texto juntando qualquer número de elementos.',
                LANG_TEXT_CREATE_JOIN_Field_JOIN: 'unir',
                LANG_TEXT_CREATE_JOIN_TOOLTIP: 'Adicionar, eliminar ou reordenar seções para reconfigurar este bloco de texto.',
                LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM: 'elemento',
                LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP: 'Adicionar um elemento ao texto.',
                LANG_TEXT_CREATE_JOIN_TITLE_JOIN: 'unir',
                LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM: 'elemento',
                LANG_TEXT_APPEND_HELPURL: '',
                LANG_TEXT_APPEND_TO: 'para',
                LANG_TEXT_APPEND_APPENDTEXT: 'acrescentando texto',
                LANG_TEXT_APPEND_VARIABLE: 'elemento',
                LANG_TEXT_APPEND_TOOLTIP: 'Adicionar texto a variável e %1.',
                LANG_TEXT_LENGTH_HELPURL: '',
                LANG_TEXT_LENGTH_INPUT_LENGTH: 'longitude',
                LANG_TEXT_LENGTH_TOOLTIP: 'Devolve o número de letras (incluindo os espaços) no texto introduzido.',
                LANG_TEXT_EQUALSIGNORECASE_IS: '',
                LANG_TEXT_EQUALSIGNORECASE_EQUAL: ' =',
                LANG_TEXT_EQUALSIGNORECASE_QUESTION: '',
                LANG_TEXT_EQUALSIGNORECASE_TOOLTIP: 'Compara se os dois textos introduzidos são iguais, independentemente de que tenham letras maiúsculas ou minúsculas.',
                LANG_TEXT_SUBSTRING: 'Recortar ',
                LANG_TEXT_SUBSTRING_FROM: 'de',
                LANG_TEXT_SUBSTRING_TO: 'até',
                LANG_TEXT_SUBSTRING_TOOLTIP: 'Recorta os caracteres do texto introduzido que se encontrem entre os dois índices e cria com eles um novo texto.',
                LANG_TEXT_CHARAT: 'Character of text', //To translate
                LANG_TEXT_CHARAT_POSITION: 'in position', //To translate
                LANG_TEXT_CHARAT_TOOLTIP: 'Returns character in the position of the text (beginning with 0).', //To translate
                LANG_TEXT_SPECIAL: 'Caracteres especiais',
                LANG_TEXT_SPECIAL_TAB: 'Tabulador',
                LANG_TEXT_SPECIAL_CARRIAGE_RETURN: 'Retorno de carro',
                LANG_TEXT_SPECIAL_LINE_FEED: 'Salto de linha',
                LANG_TEXT_SPECIAL_TOOLTIP: 'Escreve caracteres especiais.',
                LANG_TEXT_COMMENT: 'Comment', //to translate
                LANG_TEXT_COMMENT_TOOLTIP: 'Inserts a comment of one line in the program.', //to translate
                //advanced blocks :
                LANG_CATEGORY_ADVANCED: 'Funções PIN',
                LANG_ADVANCED_INOUT_ANALOG_READ: 'Ler o pino analógico PIN#',
                LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP: 'Lê o valor de um pino analógico específico.',
                LANG_ADVANCED_INOUT_ANALOG_WRITE: 'Escrever no pino analógico PIN#',
                LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE: 'valor',
                LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP: 'Escreve um valor entre 0 e 255 num pino analógico específico.',
                LANG_ADVANCED_BUILTIN_LED: 'LED DA PLACA',
                LANG_ADVANCED_BUILTIN_LED_STATE: 'Estado',
                LANG_ADVANCED_BUILTIN_LED_ON: 'ACESO',
                LANG_ADVANCED_BUILTIN_LED_OFF: 'APAGADO',
                LANG_ADVANCED_BUILTIN_LED_TOOLTIP: 'LED integrado na placa e que está internamente conectado ao pino 13.',
                LANG_ADVANCED_INOUT_DIGITAL_READ: 'Ler o pino digital PIN#',
                LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP: 'Lê o valor de um pino digital específico.',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE: 'Escrever no pino digital',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_GET_VAR: 'o valor',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN: 'PIN#',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE: 'Estado',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH: 'ALTO',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW: 'BAIXO',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP: 'Escreve um valor num pino digital específico.',
                LANG_ADVANCED_INOUT_PULSEIN: 'Time for digital pin PIN#', //to translate
                LANG_ADVANCED_INOUT_PULSEIN_MODE: 'to change to', //to translate
                LANG_ADVANCED_INOUT_PULSEIN_TOOLTIP: 'Returns the time for a digital pin to change to the state specified (in milliseconds).', //to translate
                LANG_ADVANCED_HIGHLOW_HIGH: 'ALTO',
                LANG_ADVANCED_HIGHLOW_LOW: 'BAIXO',
                LANG_ADVANCED_HIGHLOW_TOOLTIP: 'Escreve "ALTO" ou "BAIXO" em função do selecionado.',
                LANG_ADVANCED_MATH_RANDOM: 'Aleatório entre',
                LANG_ADVANCED_MATH_RANDOM_AND: ' e ',
                LANG_ADVANCED_MATH_RANDOM_TOOLTIP: 'Cria um número aleatório entre os dois limites introduzidos.',
                LANG_ADVANCED_MATH_RANDOM_SEED: 'Set random seed to', //to translate
                LANG_ADVANCED_MATH_RANDOM_SEED_TOOLTIP: 'Sets seed for random number generator. For a random seed, read from an unconnected analog pin; to repeat the same sequence, use a fixed number.', //to translate
                //procedures blocks
                LANG_CATEGORY_PROCEDURES: 'Funções',
                LANG_PROCEDURES_RETURN: 'devolver',
                LANG_PROCEDURES_RETURN_TOOLTIP: 'Devolve um valor',
                LANG_PROCEDURES_CALL_WITHOUT_DEFINITION: 'Chamada de uma função não definida.',
                LANG_PROCEDURES_DEFNORETURN_HELPURL: '',
                LANG_PROCEDURES_DEFNORETURN_PROCEDURE: 'função sem retorno',
                LANG_PROCEDURES_DEFNORETURN_DO: 'executar',
                LANG_PROCEDURES_DEFNORETURN_TOOLTIP: 'função que se executa sem devolver nada.',
                LANG_PROCEDURES_DEFRETURN_HELPURL: '',
                LANG_PROCEDURES_DEFRETURN_PROCEDURE: 'função com retorno',
                LANG_PROCEDURES_DEFRETURN_DO: 'executar',
                LANG_PROCEDURES_DEFRETURN_RETURN: 'Devolve',
                LANG_PROCEDURES_DEFRETURN_TOOLTIP: 'função com valor de retorno.',
                LANG_PROCEDURES_DEF_DUPLICATE_WARNING: 'Atenção: Esta função tem parâmetros duplicados.',
                LANG_PROCEDURES_CALLNORETURN_HELPURL: '',
                LANG_PROCEDURES_CALLNORETURN_CALL: 'executar',
                LANG_PROCEDURES_CALLNORETURN_PROCEDURE: ' função sem retorno',
                LANG_PROCEDURES_CALLNORETURN_TOOLTIP: 'executa esta função.',
                LANG_PROCEDURES_CALLRETURN_HELPURL: '',
                LANG_PROCEDURES_CALLRETURN_CALL: 'executar',
                LANG_PROCEDURES_CALLRETURN_PROCEDURE: ' função com retorno',
                LANG_PROCEDURES_CALLRETURN_TOOLTIP: 'executa esta função que tem valor de retorno.',
                LANG_PROCEDURES_MUTATORCONTAINER_Field: 'parâmetros',
                LANG_PROCEDURES_MUTATORARG_Field: 'variável:',
                LANG_PROCEDURES_HIGHLIGHT_DEF: 'Destaca a função',
                LANG_PROCEDURES_IFRETURN_TOOLTIP: 'Se a condição é verdadeira, a função devolverá este valor.',
                LANG_PROCEDURES_IFRETURN_WARNING: 'Atenção: Este bloco só pode ser usado dentro de uma função que tenha valor de retorno.',
                //variables blocks :
                LANG_CATEGORY_VARIABLES: 'Variáveis',
                LANG_VARIABLES_CALL_WITHOUT_DEFINITION: 'Esta variável não está declarada.',
                LANG_VARIABLES_GLOBAL: 'Variável',
                LANG_VARIABLES_GLOBAL_TYPE: 'do tipo ',
                LANG_VARIABLES_GLOBAL_EQUALS: '=',
                LANG_VARIABLES_GLOBAL_TOOLTIP: 'Declara e define uma variável GLOBAL do tipo inteiro (int) ou texto (String).',
                LANG_VARIABLES_LOCAL: 'Variável LOCAL',
                LANG_VARIABLES_LOCAL_TYPE: 'do tipo ',
                LANG_VARIABLES_LOCAL_EQUALS: '=',
                LANG_VARIABLES_LOCAL_TOOLTIP: 'Declara e define uma variável LOCAL do tipo inteiro (int) ou texto (String).',
                LANG_VARIABLES_DEFINE: 'Definir variável ',
                LANG_VARIABLES_DEFINE_AS: 'como',
                LANG_VARIABLES_DEFINE_TOOLTIP: 'Definir o valor de uma variável.',
                LANG_VARIABLES_SET: 'Var',
                LANG_VARIABLES_SET_AS: '=',
                LANG_VARIABLES_SET_TOOLTIP: 'Troca o valor de uma variável.',
                LANG_VARIABLES_GET: 'Var',
                LANG_VARIABLES_GET_TOOLTIP: 'Devolve o valor de uma variável',
                LANG_VARIABLES_PIN_ANALOG: 'Pino analógico',
                LANG_VARIABLES_PIN_DIGITAL: 'Pino digital',
                LANG_VARIABLES_PIN_DIGITAL0: 'AVISO: o pin digital 0 (pin RX) é utilizado ao carregar um esboço. Utilizá-lo para ligar componentes eletrônicos pode causar problemas ao carregar um novo esboço.',
                LANG_VARIABLES_PIN_TOOLTIP: 'Seleciona o pino desejado.',
                LANG_VARIABLES_TYPE_BYTE: 'Byte', // To translate
                LANG_VARIABLES_TYPE_FLOAT: 'Float', // To translate
                LANG_VARIABLES_TYPE_INTEGER: 'Integer', // To translate
                LANG_VARIABLES_TYPE_INTEGER_LONG: 'Long Integer', // To translate
                LANG_VARIABLES_TYPE_INTEGER_ULONG: 'Unsigned Long Integer', //To translate
                LANG_VARIABLES_TYPE_STRING: 'String', // To translate
                LANG_VARIABLES_TYPE_CHAR: 'Character', //to translate
                LANG_VARIABLES_TYPE_BOOLEAN: 'Boolean', //to translate
                LANG_VARIABLES_VOLATILE_GLOBAL: 'Declare VOLATILE GLOBAL variable ', // To translate
                LANG_VARIABLES_VOLATILE_GLOBAL_TYPE: 'of type ', // To translate
                LANG_VARIABLES_VOLATILE_GLOBAL_EQUALS: 'equals ', // To translate
                LANG_VARIABLES_VOLATILE_GLOBAL_TOOLTIP: 'Declares and defines a VOLATILE GLOBAL variable of type int or String used in a ISR function.', // To translate
                //sound blocks (zum):
                LANG_CATEGORY_ZUM: 'Sons',
                LANG_ZUM_PIEZO_BUZZER: 'Cigarra',
                LANG_ZUM_PIEZO_BUZZER_PIN: 'PIN#',
                LANG_ZUM_PIEZO_BUZZER_TONE: 'TOM',
                LANG_ZUM_PIEZO_BUZZER_DO: 'DO',
                LANG_ZUM_PIEZO_BUZZER_RE: 'RE',
                LANG_ZUM_PIEZO_BUZZER_MI: 'MI',
                LANG_ZUM_PIEZO_BUZZER_FA: 'FA',
                LANG_ZUM_PIEZO_BUZZER_SOL: 'SOL',
                LANG_ZUM_PIEZO_BUZZER_LA: 'LA',
                LANG_ZUM_PIEZO_BUZZER_SI: 'SI',
                LANG_ZUM_PIEZO_BUZZER_DURATION: 'Duração',
                LANG_ZUM_PIEZO_BUZZER_TOOLTIP: 'Cigarra',
                LANG_ZUM_PIEZO_BUZZERAV: 'Cigarra avançado',
                LANG_ZUM_PIEZO_BUZZERAV_PIN: 'PIN#',
                LANG_ZUM_PIEZO_BUZZERAV_TONE: 'TOM',
                LANG_ZUM_PIEZO_BUZZERAV_DURATION: 'Duração',
                LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP: 'Cigarra - Elemento piezoelétrico avançado.',
                LANG_ZUM_DHT11_VALUE: 'Get', //to translate
                LANG_ZUM_DHT11_VALUE1: 'Temperature', //to translate
                LANG_ZUM_DHT11_VALUE2: 'Humidity', //to translate
                LANG_ZUM_DHT11_PIN: 'PIN', //to translate
                LANG_ZUM_DHT11_TOOLTIP: 'Get temperature or humidity from a DHT11, DHT21 or DHT22 sensor.', //to translate
                //motor blocks (servo and stepper):
                LANG_CATEGORY_MOTOR: 'Motors', //to translate
                LANG_MOTOR_SERVO_CONT: 'Servo de rotação contínua',
                LANG_MOTOR_SERVO_CONT_PIN: 'PIN#',
                LANG_MOTOR_SERVO_CONT_ROT: 'ROT',
                LANG_MOTOR_SERVO_CONT_TURN_CLOCKWISE: 'GIRAR no SENTIDO HORÁRIO',
                LANG_MOTOR_SERVO_CONT_TURN_COUNTERCLOCKWISE: 'GIRAR no SENTIDO ANTI-HORÁRIO',
                LANG_MOTOR_SERVO_CONT_STOPPED: 'PARAR',
                LANG_MOTOR_SERVO_CONT_DELAY: 'Pausa',
                LANG_MOTOR_SERVO_CONT_TOOLTIP: 'Servo de rotação contínua.',
                LANG_MOTOR_SERVO_MOVE: 'Servo',
                LANG_MOTOR_SERVO_MOVE_PIN: 'PIN#',
                LANG_MOTOR_SERVO_MOVE_DEGREES: 'Graus (0~180)',
                LANG_MOTOR_SERVO_MOVE_DELAY: 'Pausa',
                LANG_MOTOR_SERVO_MOVE_TOOLTIP: 'Mover o servo entre 0 e 180 graus.',
                LANG_MOTOR_SERVO_WARNING: 'Não é possível definir o pin servo utilizando uma variável.',
                LANG_MOTOR_STEPPER_MOVE: 'Stepper motor', //to translate
                LANG_MOTOR_STEPPER_MOVE_SPR: 'Steps per revolution', //to translate
                LANG_MOTOR_STEPPER_MOVE_PINS: '4 pins?', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN1: 'Pin 1', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN2: 'Pin 2', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN3: 'Pin 3', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN4: 'Pin 4', //to translate
                LANG_MOTOR_STEPPER_MOVE_SETSPEED: 'Set speed to', //to translate
                LANG_MOTOR_STEPPER_MOVE_SETSPEED_NEXT: '(rpm)', //to translate
                LANG_MOTOR_STEPPER_MOVE_STEP: 'Move motor', //to translate
                LANG_MOTOR_STEPPER_MOVE_STEP_NEXT: '(steps)', //to translate
                LANG_MOTOR_STEPPER_MOVE_TOOLTIP: 'Moves motor the number of steps. A positive steps value move in one direction, a negative value moves to the other direction.', //to translate
                LANG_MOTOR_PCA9685_DEF: 'PCA9685', //to translate
                LANG_MOTOR_PCA9685_DEF_SERVO: 'Servo', //to translate
                LANG_MOTOR_PCA9685_DEF_ADDRESS: 'Address of the component', //to translate
                LANG_MOTOR_PCA9685_DEF_TOOLTIP: 'Defines a PCA9685 connected to Arduino over I2C.', //to translate
                LANG_MOTOR_PCA9685_SET_PWM: 'PCA9685 Move servo', //to translate
                LANG_MOTOR_PCA9685_SET_PWM_ANGLE: 'angle', //to translate
                LANG_MOTOR_PCA9685_SET_PWM_TOOLTIP: 'Moves servo connected to PCA9685 the specified angle in degrees.', //to translate
                //interrupt blocks :
                LANG_CATEGORY_INTERRUPTS: 'Interrupts', // To translate
                LANG_INTERRUPTS_STATE: 'Set interrupts state to ', // To translate
                LANG_INTERRUPTS_STATE_ENABLED: 'ENABLED', // To translate
                LANG_INTERRUPTS_STATE_DISABLED: 'DISABLED', // To translate
                LANG_INTERRUPTS_STATE_TOOLTIP: 'Enable or Disable interrupts. Some functions will not work while interrupts are disabled. Use only for particularly critical sections of code.', // To translate
                LANG_INTERRUPTS_ATTACH: 'Attach procedure ', // To translate
                LANG_INTERRUPTS_ATTACH_PARAM2: 'in mode ', // To translate
                LANG_INTERRUPTS_ATTACH_PARAM3: 'with interrupt of digital pin', // To translate
                LANG_INTERRUPTS_ATTACH_LOW: 'LOW', // To translate
                LANG_INTERRUPTS_ATTACH_CHANGE: 'CHANGE', // To translate
                LANG_INTERRUPTS_ATTACH_RISING: 'RISING', // To translate
                LANG_INTERRUPTS_ATTACH_FALLING: 'FALLING', // To translate
                LANG_INTERRUPTS_ATTACH_PROCEDURE: 'func_without_return', // To translate
                LANG_INTERRUPTS_ATTACH_TOOLTIP: 'Set the procedure to be executed when an interrupt is raised in the specified pin.', // To translate
                LANG_INTERRUPTS_DETACH: 'Detach interrupt on digital pin', // To translate
                LANG_INTERRUPTS_DETACH_TOOLTIP: 'Disables the interrupt on the pin. When the pin is activated, the procedure associated is no longer executed.', // To translate
                LANG_WIFI_CONNECT: 'Wifi:', //To translate
                LANG_WIFI_CONNECT_STATION: 'connect', //To translate
                LANG_WIFI_CONNECT_SOFTAP: 'create network', //To translate
                LANG_WIFI_CONNECT_SSID: 'SSID', //To translate
                LANG_WIFI_CONNECT_PASSWORD: 'password', //To translate
                LANG_WIFI_CONNECT_CHANNEL: 'channel', //To translate
                LANG_WIFI_CONNECT_RX_PIN: 'Rx pin', //To translate
                LANG_WIFI_CONNECT_TX_PIN: 'Tx pin', //To translate
                LANG_WIFI_CONNECT_BAUD: 'baud rate', //To translate
                LANG_WIFI_CONNECT_TOOLTIP: 'Connects or creates a wifi using a ESP8266 adapter, and returns true on success.', //To translate
                LANG_WIFI_DISCONNECT: 'Wifi:disconnect', //To translate
                LANG_WIFI_DISCONNECT_TOOLTIP: 'Disconnects from the current wifi network.', //To translate
                LANG_WIFI_CLIENT: 'Wifi:connect to server', //To translate
                LANG_WIFI_CLIENT_IP: 'IP address', //To translate
                LANG_WIFI_CLIENT_PORT: 'Port', //To translate
                LANG_WIFI_CLIENT_TOOLTIP: 'Connects to a TCP server.', //To translate
                LANG_WIFI_SERVER: 'Wifi:start server', //To translate
                LANG_WIFI_SERVER_PORT: 'Port', //To translate
                LANG_WIFI_SERVER_TOOLTIP: 'Create a TCP server to accept connections from clients.', //To translate
                LANG_WIFI_GETIP: 'Wifi:get IP address', //To translate
                LANG_WIFI_GETIP_TOOLTIP: 'Returns IP address of the adapter.', //To translate
                LANG_WIFI_SEND_SERVER: 'Wifi:send to server', //To translate
                LANG_WIFI_SEND_SERVER_DATA: 'Text', //To translate
                LANG_WIFI_SEND_SERVER_TOOLTIP: 'Send text to the TCP server.', //To translate
                LANG_WIFI_SEND_CLIENT: 'Wifi:send to client', //To translate
                LANG_WIFI_SEND_CLIENT_ID: 'ID', //To translate
                LANG_WIFI_SEND_CLIENT_DATA: 'Data', //To translate
                LANG_WIFI_SEND_CLIENT_TOOLTIP: 'Send text to specified client (ID).', //To translate
                LANG_WIFI_RECEIVE_CLIENT: 'Wifi:receive from client', //To translate
                LANG_WIFI_RECEIVE_CLIENT_TOOLTIP: 'Receives a text from client, begining with id number and a colon (:). If timeout is reached, returns an empty string.', //To translate
                LANG_WIFI_RECEIVE_SERVER: 'Wifi:receive from server', //To translate
                LANG_WIFI_RECEIVE_SERVER_TIMEOUT: 'Timeout', //To translate
                LANG_WIFI_RECEIVE_SERVER_TOOLTIP: 'Receives a string from TCP server or empty string if timeout reached.', //To translate
                LANG_WIFI_CLOSE_SERVER: 'Wifi:stop server', //To translate
                LANG_WIFI_CLOSE_SERVER_TOOLTIP: 'Shutdown TCP server.', //To translate
                LANG_WIFI_CLOSE_CLIENT: 'Wifi:stop connection', //To translate
                LANG_WIFI_CLOSE_CLIENT_TOOLTIP: 'Shutdown connection with TCP server.' //To translate
            };
            // Node
            if (typeof module !== 'undefined' && module.exports) {
                module.exports = language;
            }
            // Browser
            // if (typeof window !== 'undefined' && this.RoboBlocks && this.RoboBlocks.locales.add) {
            //     this.RoboBlocks.locales.add('es', language);
            if (typeof window !== 'undefined' && RoboBlocks && RoboBlocks.locales.add) {
                RoboBlocks.locales.add('pt-BR', language);
            }
        }());

        // Source: lang/pt-PT.js
        (function() {
            var language = {
                //random :
                BLOCKLY_MSG_DUPLICATE_BLOCK: 'Duplicar',
                BLOCKLY_MSG_REMOVE_COMMENT: 'Remover comentário',
                BLOCKLY_MSG_ADD_COMMENT: 'Adicionar comentário',
                BLOCKLY_MSG_EXTERNAL_INPUTS: 'Entradas externas',
                BLOCKLY_MSG_INLINE_INPUTS: 'Entradas em linha',
                BLOCKLY_MSG_DELETE_BLOCK: 'Eliminar bloco',
                BLOCKLY_MSG_DELETE_X_BLOCKS: 'Eliminar %1 blocos',
                BLOCKLY_MSG_COLLAPSE_BLOCK: 'Minimizar bloco',
                BLOCKLY_MSG_EXPAND_BLOCK: 'Expandir bloco',
                BLOCKLY_MSG_DISABLE_BLOCK: 'Desativar bloco',
                BLOCKLY_MSG_ENABLE_BLOCK: 'Ativar bloco',
                BLOCKLY_MSG_HELP: 'Ajuda',
                BLOCKLY_MSG_COLLAPSE_ALL: 'Minimizar blocos',
                BLOCKLY_MSG_EXPAND_ALL: 'Expandir blocos',
                LANG_VARIABLES_SET_ITEM: 'elemento',
                LANG_RESERVED_WORDS: 'Palavra reservada: este nome não é permitido.',
                LANG_CHAR_LENGTH: 'A character must have length 0 or 1.', //to translate
                //logic blocks:
                LANG_CATEGORY_LOGIC: 'Lógica',
                LANG_LOGIC_OPERATION_AND: 'e',
                LANG_LOGIC_OPERATION_OR: 'ou',
                LANG_LOGIC_COMPARE_TOOLTIP_EQ: 'Compara se as duas entradas são iguais.',
                LANG_LOGIC_COMPARE_TOOLTIP_NEQ: 'Compara se as duas entradas não são iguais entre sí.',
                LANG_LOGIC_COMPARE_TOOLTIP_LT: 'Compara se a primera entrada é menor do que a segunda entrada.',
                LANG_LOGIC_COMPARE_TOOLTIP_LTE: 'Compara se a primera entrada é menor ou igual à segunda entrada.',
                LANG_LOGIC_COMPARE_TOOLTIP_GT: 'Compara se a primera entrada é maior do que a segunda entrada.',
                LANG_LOGIC_COMPARE_TOOLTIP_GTE: 'Compara se a primera entrada é maior ou igual à segunda entrada.',
                LANG_LOGIC_OPERATION_TOOLTIP_AND: 'Compara se ambas as entradas são verdadeiras.',
                LANG_LOGIC_OPERATION_TOOLTIP_OR: 'Compara se alguna das entradas é verdadeira.',
                LANG_LOGIC_NEGATE_INPUT_NOT: 'não',
                LANG_LOGIC_NEGATE_TOOLTIP: 'Devolve o inverso da entrada.',
                LANG_LOGIC_NEGATE_HELPURL: '',
                LANG_LOGIC_BOOLEAN_TRUE: 'verdadeiro',
                LANG_LOGIC_BOOLEAN_FALSE: 'falso',
                LANG_LOGIC_BOOLEAN_TOOLTIP: 'Devolve verdadeiro ou falso em função do seleccionado.',
                //communication blocks:
                LANG_CATEGORY_COMMUNICATION: 'Comunicação',
                LANG_BQ_BLUETOOTH_RECEIVE: 'Bluetooth: receber ',
                LANG_BQ_BLUETOOTH_RECEIVE_BLUETOOTH: 'Bluetooth',
                LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP: 'Devolve os dados recebidos pelo módulo Bluetooth',
                LANG_BQ_BLUETOOTH_SEND: 'Bluetooth: Enviar',
                LANG_BQ_BLUETOOTH_SEND_SEND: 'Enviar dados',
                LANG_BQ_BLUETOOTH_SEND_TOOLTIP: 'Os dados da entrada são enviados usando o módulo Bluetooth',
                LANG_BQ_BLUETOOTH_DEF: 'Bluetooth',
                LANG_BQ_BLUETOOTH_DEF_BAUD_RATE: 'Baud Rate',
                LANG_BQ_BLUETOOTH_DEF_PIN1: 'RX',
                LANG_BQ_BLUETOOTH_DEF_PIN2: 'TX',
                LANG_BQ_BLUETOOTH_DEF_NAME: 'Nome',
                LANG_BQ_BLUETOOTH_DEF_PINCODE: 'Código PIN',
                LANG_BQ_BLUETOOTH_DEF_RECEIVE: 'Receber',
                LANG_BQ_BLUETOOTH_DEF_SEND: 'Enviar',
                LANG_BQ_BLUETOOTH_DEF_TOOLTIP: 'Definicão do módulo Bluetooth',
                LANG_ADVANCED_BT_SERIAL_AVAILABLE: 'Bluetooth: Porta Série disponível',
                LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP: 'Verifica se o módulo Bluetooth está disponível ou não',
                LANG_ADVANCED_SERIAL_AVAILABLE: 'Porta Série disponível',
                LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP: 'Verifica se a porta série está disponível ou não',
                LANG_ADVANCED_SERIAL_PARSEINT: 'Serial Read Integer', // To translate
                LANG_ADVANCED_SERIAL_PARSEINT_TOOLTIP: 'First valid (long) integer number from the serial buffer', // To translate
                LANG_ADVANCED_SERIAL_PRINT: 'Imprimir pela porta série',
                LANG_ADVANCED_SERIAL_PRINT_TOOLTIP: 'Imprime os dados como texto ASCII.',
                LANG_ADVANCED_SERIAL_PRINTLN: 'Imprimir pela porta série com salto de linha',
                LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP: 'Imprime os dados como texto ASCII e con retorno de carro (RC).',
                LANG_ADVANCED_SERIAL_PRINT_FORMAT: 'Prints value with format', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_1: 'Binary', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_2: 'Octal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_3: 'Decimal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_4: 'Hexadecimal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_5: 'Without decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_6: 'One decimal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_7: 'Two decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_8: 'Three decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_9: 'Four decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_TOOLTIP: 'Prints value with specified format', //to translate
                LANG_ADVANCED_SERIAL_PRINTLN_FORMAT: 'Send value with format and CR', //To translate
                LANG_ADVANCED_SERIAL_PRINTLN_FORMAT_TOOLTIP: 'Send a number to serial port with specified format and carriage return (CR).', //To translate
                LANG_ADVANCED_SERIAL_READ: 'Ler a porta série',
                LANG_ADVANCED_SERIAL_READ_TOOLTIP: 'Lê os dados recebidos pela porta série como bytes.',
                LANG_ADVANCED_SERIAL_READSTRING: 'Ler seqüência a porta série',
                LANG_ADVANCED_SERIAL_READSTRING_TOOLTIP: 'Lê os dados recebidos pela porta série como texto ASCII.',
                //sensor blocks :
                LANG_CATEGORY_SENSOR: 'Sensores',
                LANG_BQ_BAT: 'BAT - Sensor de Ultrasons',
                LANG_BQ_BAT_RED_PIN: 'ECHO PIN#',
                LANG_BQ_BAT_BLUE_PIN: 'TRIGGER PIN#',
                LANG_BQ_BAT_TOOLTIP: 'Devolve a distância medida pelo sensor.',
                LANG_IR_READ: 'Reads from infrared receiver', //to translate
                LANG_IR_READ_PIN: 'connected to PIN#', //to translate
                LANG_IR_READ_TOOLTIP: 'Reads the value received from the infrared receiver', //to translate
                //LCD blocks:
                LANG_CATEGORY_LCD: 'LCD bloqs',
                LANG_LCD_DEF: 'LCD (2x16)',
                LANG_LCD_DEF_CONNECTION: 'Connection type', //to translate
                LANG_LCD_DEF_CONNECTION_PARALLEL: 'Parallel (6 pins)', //to translate
                LANG_LCD_DEF_CONNECTION_I2C: 'I2C (4 wires)', //to translate
                LANG_LCD_DEF_ADDRESS: 'Address of the component', //to translate
                LANG_LCD_DEF_PIN_1: 'RS Pin', //to translate
                LANG_LCD_DEF_PIN_2: 'Enable Pin', //to translate
                LANG_LCD_DEF_PIN_3: 'Data4 Pin', //to translate
                LANG_LCD_DEF_PIN_4: 'Data5 Pin', //to translate
                LANG_LCD_DEF_PIN_5: 'Data6 Pin', //to translate
                LANG_LCD_DEF_PIN_6: 'Data7 Pin', //to translate
                LANG_LCD_DEF_TOOLTIP: 'Define o LCD',
                LANG_LCD_ADVANCED_DEF: 'LCD avançado',
                LANG_LCD_ADVANCED_ROWS: 'Linhas',
                LANG_LCD_ADVANCED_COLUMNS: 'Colunas',
                LANG_LCD_DEF_ADVANCED_TOOLTIP: 'Bloco que define o LCD avançado',
                LANG_LCD_SETBACKLIGHT: 'LCD: ajustar a retroiluminação',
                LANG_LCD_SETBACKLIGHT_CLOSE: '',
                LANG_LCD_SETBACKLIGHT_TOOLTIP: 'Ajusta a retroiluminação do LCD',
                LANG_LCD_PRINT: 'LCD: Imprimir ',
                LANG_LCD_PRINT_POSITION: 'Definir a posição do texto?',
                LANG_LCD_PRINT_TOOLTIP: 'Imprime uma frase no LCD na posição específicada ou na seguinte disponível.',
                LANG_LCD_CLEAR: 'LCD apagar',
                LANG_LCD_CLEAR_TOOLTIP: 'LCD: Apagar',
                LANG_LCD_HOME: 'LCD Go home', //to translate
                LANG_LCD_HOME_TOOLTIP: 'LCD: Positions the cursor in the upper-left corner of the screen', //to translate
                LANG_LCD_DISPLAY: 'LCD Show content', //to translate
                LANG_LCD_DISPLAY_TOOLTIP: 'LCD: Turns on the LCD display and restore the text that was on the display', //to translate
                LANG_LCD_NODISPLAY: 'LCD Hide content', //to translate
                LANG_LCD_NODISPLAY_TOOLTIP: 'LCD: Turns off the LCD display, without losing the text currently shown on it', //to translate
                LANG_LCD_SCROLLDISPLAYLEFT: 'LCD Scrolls to the left', //to translate
                LANG_LCD_SCROLLDISPLAYLEFT_TOOLTIP: 'LCD: Scrolls the contents of the display one space to the left', //to translate
                LANG_LCD_SCROLLDISPLAYRIGHT: 'LCD Scrolls to the right', //to translate
                LANG_LCD_SCROLLDISPLAYRIGHT_TOOLTIP: 'LCD: Scrolls the contents of the display one space to the right', //to translate
                //controls blocks :
                LANG_CATEGORY_CONTROLS: 'Controlo',
                LANG_CONTROLS_BASE_DELAY_WAIT: 'Esperar (ms)',
                LANG_CONTROLS_BASE_DELAY_TOOLTIP: 'Espera o tempo especificado em milisegundos (ms)',
                LANG_CONTROLS_BASE_MILLIS: 'Time from start (ms)', // To translate
                LANG_CONTROLS_BASE_MILLIS_TOOLTIP: 'Number of milliseconds since the program started (long integer)', // To translate
                LANG_CONTROLS_BASE_DELAY_MICROSECONDS: 'Wait [us]', //To translate
                LANG_CONTROLS_BASE_DELAY_MICROSECONDS_TOOLTIP: 'Waits the specified time in microseconds (us)', //To translate
                LANG_CONTROLS_BASE_MICROS: 'Time from start (us)', //To translate
                LANG_CONTROLS_BASE_MICROS_TOOLTIP: 'Number of microseconds since the program started (long integer)', //To translate
                LANG_CONTROLS_DOWHILE_OPERATOR_DO: 'Do',
                LANG_CONTROLS_DOWHILE_OPERATOR_WHILE: 'while',
                LANG_CONTROLS_DOWHILE_TOOLTIP: 'While the condition is true, continue doing the statements.',
                LANG_CONTROLS_EXECUTE: 'Execute',
                LANG_CONTROLS_EXECUTE_TOOLTIP: 'Executes C/C++ code. Use with caution, as it can easily break the program and prevent it from compiling.',
                LANG_CONTROLS_IF_TOOLTIP_1: 'Se a condição é verdadeira, executa as acções dentro do bloco.',
                LANG_CONTROLS_IF_TOOLTIP_2: 'Se a condição é verdadeira, executa o primero bloco de comandos. Se não é, executa o segundo bloco de comandos.',
                LANG_CONTROLS_IF_TOOLTIP_3: 'Se o primeiro valor é verdadeiro, executa o primero bloco de comandos. Senão, se o segundo valor é verdadeiro, executa o segundo bloco de comandos.',
                LANG_CONTROLS_IF_TOOLTIP_4: 'Se o primeiro valor é verdadeiro, executa o primero bloco de comandos. Senão, se o segundo valor é verdadeiro, executa o segundo bloco de comandos. Se nengum dos valores é verdadeiro, executa o último bloco de comandos',
                LANG_CONTROLS_IF_MSG_IF: 'se',
                LANG_CONTROLS_IF_MSG_ELSEIF: 'senão, se',
                LANG_CONTROLS_IF_MSG_ELSE: 'senão',
                LANG_CONTROLS_IF_MSG_THEN: 'executar',
                LANG_CONTROLS_IF_IF_Field_IF: 'se',
                LANG_CONTROLS_IF_IF_TOOLTIP: 'Adicionar, eliminar ou reordenar secções para reconfigurar este bloco "se".',
                LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF: 'senão, se',
                LANG_CONTROLS_IF_ELSEIF_TOOLTIP: 'Adiciona uma condição ao bloco "se".',
                LANG_CONTROLS_IF_ELSE_Field_ELSE: 'senão',
                LANG_CONTROLS_IF_ELSE_TOOLTIP: 'Adiciona uma condição final ao bloco "se" para capturar o resto das opções.',
                LANG_CONTROLS_FOR_FROM_WARNING: 'Não é possível definir uma variável como o valor inicial do bloco.',
                LANG_CONTROLS_FOR_TO_WARNING: 'Não é possível definir uma variável como o valor inicial do bloco.',
                LANG_CONTROLS_FOR_INCREMENT_WARNING: 'It is not possible to set a variable as the increment value of the for block', //to translate
                LANG_CONTROLS_FOR_INPUT_WITH: 'Contar com',
                LANG_CONTROLS_FOR_INPUT_VAR: 'x',
                LANG_CONTROLS_FOR_INPUT_FROM: 'desde',
                LANG_CONTROLS_FOR_INPUT_TO: 'até',
                LANG_CONTROLS_FOR_INPUT_INCREMENT: 'increment', //to translate
                LANG_CONTROLS_FOR_INPUT_DO: 'executar',
                LANG_CONTROLS_FOR_TOOLTIP: 'Contar desde de início até ao final. Cada vez que se incrementa o valor, a variável fica com esse valor e são executadas as acções.',
                LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE: 'enquanto',
                LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL: 'até',
                LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE: 'Enquanto a condição for verdadera, executar as instruções.',
                LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL: 'Enquanto a condição for falsa, executar as instruções.',
                LANG_CONTROLS_REPEAT_TITLE_REPEAT: 'Repetir',
                LANG_CONTROLS_REPEAT_TITLE_TIMES: 'vezes',
                LANG_CONTROLS_REPEAT_INPUT_DO: 'executar',
                LANG_CONTROLS_REPEAT_TOOLTIP: 'executar as instruções um determinado número de vezes.',
                LANG_CONTROLS_FLOW_STATEMENTS_HELPURL: '',
                LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP: '"loop"',
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: 'interromper',
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: 'seguir para o próximo valor do "loop"',
                LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK: 'Sair do "loop" nesta instrução.',
                LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE: 'Saltar o resto das accões desta volta e continuar com para a próxima volta.',
                LANG_CONTROLS_FLOW_STATEMENTS_WARNING: 'Atenção: Este bloco só pode ser usado dentro de um "loop".',
                LANG_CONTROLS_SETUP_LOOP_SETUP_TITLE: 'Setup',
                LANG_CONTROLS_SETUP_LOOP_LOOP_TITLE: 'Loop',
                LANG_CONTROLS_SETUP_LOOP_TOOLTIP: 'Blocks in setup will be executed at start, and blocks in Loop will be repeated continously.',
                LANG_CONTROLS_SWITCH: 'se ',
                LANG_CONTROLS_SWITCH_TOOLTIP_1: 'executa as acções se for este o caso.',
                LANG_CONTROLS_SWITCH_TOOLTIP_2: 'executa as acções se for este o caso.',
                LANG_CONTROLS_SWITCH_TOOLTIP_3: 'executa as acções se for este o caso.',
                LANG_CONTROLS_SWITCH_TOOLTIP_4: 'executa as acções se for este o caso.',
                LANG_CONTROLS_SWITCH_SWITCH_TOOLTIP: 'Este bloco compara um a um se são cumpridos os diferentes casos.',
                LANG_CONTROLS_SWITCH_CASE_TOOLTIP: 'caso ',
                LANG_CONTROLS_SWITCH_DEFAULT_TOOLTIP: 'O bloco "default" especifica a acção que se vai executar se não forem cumpridos nehum dos casos anteriores.',
                LANG_CONTROLS_SWITCH_IS: 'é: ',
                LANG_CONTROLS_SWITCH_CASE: 'caso ',
                LANG_CONTROLS_SWITCH_COLON: ': ',
                LANG_CONTROLS_SWITCH_DEFAULT: 'noutro caso',
                LANG_CONTROLS_SWITCH_DO: 'executar',
                //math blocks :
                LANG_CATEGORY_MATH: 'Matemáticas',
                LANG_MATH_ADVANCED_MAP_MAP: 'Mapear ',
                LANG_MATH_ADVANCED_MAP_FROM: 'De [',
                LANG_MATH_ADVANCED_MAP_HYPHEN: '-',
                LANG_MATH_ADVANCED_MAP_BRACKET: ']',
                LANG_MATH_ADVANCED_MAP_TO: 'a [',
                LANG_MATH_ADVANCED_MAP_TOOLTIP: 'Mapeia a entrada do intervalo de valores iniciais para um intervalo diferente.',
                LANG_MATH_NUMBER_TOOLTIP: 'Número inteiro',
                LANG_MATH_ARRAY_ARRAY3: '[3]',
                LANG_MATH_ARRAY_BRACKET3: '{',
                LANG_MATH_ARRAY_BRACKET4: '}',
                LANG_MATH_ARRAY_COMMA: ',',
                LANG_MATH_ARRAY_TOOLTIP: 'Vector de três inteiros',
                LANG_ARRAY_GET_BRACKET1: '[',
                LANG_ARRAY_GET_BRACKET2: ']',
                LANG_ARRAY_GET_TOOLTIP: 'Devolve o valor de um elemento determinado do vector.',
                LANG_MATH_MODULO_TOOLTIP: 'Devolve o resto da divisão entre os valores das entradas.',
                LANG_MATH_BASE_MAP: 'Mapear ',
                LANG_MATH_BASE_MAP_VALUE_TO: 'Valor entre [0-',
                LANG_MATH_BASE_MAP_BRACKET: ']',
                LANG_MATH_BASE_MAP_TOOLTIP: 'Mapeia o intervalo de valores da entrada [0-1023] a outro intervalo de valores.',
                LANG_MATH_SINGLE_OP_ROOT: 'raíz quadrada',
                LANG_MATH_SINGLE_OP_ABSOLUTE: 'valor absoluto',
                LANG_MATH_SINGLE_TOOLTIP_ROOT: 'Devolve a raíz quadrada de um número.',
                LANG_MATH_SINGLE_TOOLTIP_ABS: 'Devolve o valor absoluto de um número.',
                LANG_MATH_SINGLE_TOOLTIP_NEG: 'Devolve a negação do sinal de um número.',
                LANG_MATH_SINGLE_TOOLTIP_LN: 'Devolve o logaritmo de um número.',
                LANG_MATH_SINGLE_TOOLTIP_LOG10: 'Devolve o logaritmo de base 10 de um número.',
                LANG_MATH_SINGLE_TOOLTIP_EXP: 'Devolve o exponencial de um número.',
                LANG_MATH_SINGLE_TOOLTIP_POW10: 'Devolve 10 elevado a uma potência.',
                LANG_MATH_MIN: 'Minimum value between', //To translate
                LANG_MATH_MIN_PARAM2: 'and', //To translate
                LANG_MATH_MIN_TOOLTIP: 'Returns the minimum value of the inputs.', //To translate
                LANG_MATH_MAX: 'Maximum value between', //To translate
                LANG_MATH_MAX_PARAM2: 'and', //To translate
                LANG_MATH_MAX_TOOLTIP: 'Returns the maximum value of the inputs.', //To translate
                LANG_MATH_POW: 'Value of', //To translate
                LANG_MATH_POW_PARAM2: 'to the power of', //To translate
                LANG_MATH_POW_TOOLTIP: 'Returns the value of the first input to the power of the second.', //To translate
                //text blocks:
                LANG_CATEGORY_TEXT: 'Texto',
                LANG_TEXT_TEXT_HELPURL: '',
                LANG_TEXT_TEXT_TOOLTIP: 'Uma letra, uma palabra ou uma linha de texto.',
                LANG_TEXT_CHAR_TOOLTIP: 'A simbol, letter or number, but just one character', //to translate
                LANG_TEXT_JOIN_HELPURL: '',
                LANG_TEXT_JOIN_Field_CREATEWITH: 'criar texto com',
                LANG_TEXT_JOIN_TOOLTIP: 'Cria texto juntando qualquer número de elementos.',
                LANG_TEXT_CREATE_JOIN_Field_JOIN: 'unir',
                LANG_TEXT_CREATE_JOIN_TOOLTIP: 'Adicionar, eliminar ou reordenar secções para reconfigurar este bloco de texto.',
                LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM: 'elemento',
                LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP: 'Adicionar um elemento ao texto.',
                LANG_TEXT_CREATE_JOIN_TITLE_JOIN: 'unir',
                LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM: 'elemento',
                LANG_TEXT_APPEND_HELPURL: '',
                LANG_TEXT_APPEND_TO: 'para',
                LANG_TEXT_APPEND_APPENDTEXT: 'acrescentando texto',
                LANG_TEXT_APPEND_VARIABLE: 'elemento',
                LANG_TEXT_APPEND_TOOLTIP: 'Adicionar texto a variável e %1.',
                LANG_TEXT_LENGTH_HELPURL: '',
                LANG_TEXT_LENGTH_INPUT_LENGTH: 'longitude',
                LANG_TEXT_LENGTH_TOOLTIP: 'Devolve o número de letras (incluindo os espaços) no texto introduzido.',
                LANG_TEXT_EQUALSIGNORECASE_IS: '',
                LANG_TEXT_EQUALSIGNORECASE_EQUAL: ' =',
                LANG_TEXT_EQUALSIGNORECASE_QUESTION: '',
                LANG_TEXT_EQUALSIGNORECASE_TOOLTIP: 'Compara se os dois textos introduzidos são iguais, independentemente de que tenham letras maiúsculas ou minúsculas.',
                LANG_TEXT_SUBSTRING: 'Recortar ',
                LANG_TEXT_SUBSTRING_FROM: 'de',
                LANG_TEXT_SUBSTRING_TO: 'até',
                LANG_TEXT_SUBSTRING_TOOLTIP: 'Recorta os caracteres do texto introduzido que se encontrem entre os dois índices e cria com eles um novo texto.',
                LANG_TEXT_CHARAT: 'Character of text', //To translate
                LANG_TEXT_CHARAT_POSITION: 'in position', //To translate
                LANG_TEXT_CHARAT_TOOLTIP: 'Returns character in the position of the text (beginning with 0).', //To translate
                LANG_TEXT_SPECIAL: 'Caracteres especiais',
                LANG_TEXT_SPECIAL_TAB: 'Tabulador',
                LANG_TEXT_SPECIAL_CARRIAGE_RETURN: 'Retorno de carro',
                LANG_TEXT_SPECIAL_LINE_FEED: 'Salto de linha',
                LANG_TEXT_SPECIAL_TOOLTIP: 'Escreve caracteres especiais.',
                LANG_TEXT_COMMENT: 'Comment', //to translate
                LANG_TEXT_COMMENT_TOOLTIP: 'Inserts a comment of one line in the program.', //to translate
                //advanced blocks :
                LANG_CATEGORY_ADVANCED: 'Funções PIN',
                LANG_ADVANCED_INOUT_ANALOG_READ: 'Ler o pino analógico PIN#',
                LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP: 'Lê o valor de um pino analógico específico.',
                LANG_ADVANCED_INOUT_ANALOG_WRITE: 'Escrever no pino analógico PIN#',
                LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE: 'valor',
                LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP: 'Escreve um valor entre 0 e 255 num pino analógico específico.',
                LANG_ADVANCED_BUILTIN_LED: 'LED DA PLACA',
                LANG_ADVANCED_BUILTIN_LED_STATE: 'estado',
                LANG_ADVANCED_BUILTIN_LED_ON: 'ACESO',
                LANG_ADVANCED_BUILTIN_LED_OFF: 'APAGADO',
                LANG_ADVANCED_BUILTIN_LED_TOOLTIP: 'LED integrado na placa e que está internamente conectado ao pino 13.',
                LANG_ADVANCED_INOUT_DIGITAL_READ: 'Ler o pino digital PIN#',
                LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP: 'Lê o valor de um pino digital específico.',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE: 'Escrever no pino digital',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_GET_VAR: 'o valor',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN: 'PIN#',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE: 'estado',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH: 'ALTO',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW: 'BAIXO',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP: 'Escreve um valor num pino digital específico.',
                LANG_ADVANCED_INOUT_PULSEIN: 'Time for digital pin PIN#', //to translate
                LANG_ADVANCED_INOUT_PULSEIN_MODE: 'to change to', //to translate
                LANG_ADVANCED_INOUT_PULSEIN_TOOLTIP: 'Returns the time for a digital pin to change to the state specified (in milliseconds).', //to translate
                LANG_ADVANCED_HIGHLOW_HIGH: 'ALTO',
                LANG_ADVANCED_HIGHLOW_LOW: 'BAIXO',
                LANG_ADVANCED_HIGHLOW_TOOLTIP: 'Escreve "ALTO" ou "BAIXO" em função do seleccionado.',
                LANG_ADVANCED_MATH_RANDOM: 'Aleatório entre',
                LANG_ADVANCED_MATH_RANDOM_AND: ' e ',
                LANG_ADVANCED_MATH_RANDOM_TOOLTIP: 'Cria um número aleatório entre os dois limites introduzidos.',
                LANG_ADVANCED_MATH_RANDOM_SEED: 'Set random seed to', //to translate
                LANG_ADVANCED_MATH_RANDOM_SEED_TOOLTIP: 'Sets seed for random number generator. For a random seed, read from an unconnected analog pin; to repeat the same sequence, use a fixed number.', //to translate
                //procedures blocks
                LANG_CATEGORY_PROCEDURES: 'Funções',
                LANG_PROCEDURES_RETURN: 'devolver',
                LANG_PROCEDURES_RETURN_TOOLTIP: 'Devolve um valor',
                LANG_PROCEDURES_CALL_WITHOUT_DEFINITION: 'Chamada de uma função não definida.',
                LANG_PROCEDURES_DEFNORETURN_HELPURL: '',
                LANG_PROCEDURES_DEFNORETURN_PROCEDURE: 'função_sem_retorno',
                LANG_PROCEDURES_DEFNORETURN_DO: 'executar',
                LANG_PROCEDURES_DEFNORETURN_TOOLTIP: 'função que se executa sem devolver nada.',
                LANG_PROCEDURES_DEFRETURN_HELPURL: '',
                LANG_PROCEDURES_DEFRETURN_PROCEDURE: 'função_com_retorno',
                LANG_PROCEDURES_DEFRETURN_DO: 'executar',
                LANG_PROCEDURES_DEFRETURN_RETURN: 'Devolve',
                LANG_PROCEDURES_DEFRETURN_TOOLTIP: 'função com valor de retorno.',
                LANG_PROCEDURES_DEF_DUPLICATE_WARNING: 'Atenção: Esta função tem parâmetros duplicados.',
                LANG_PROCEDURES_CALLNORETURN_HELPURL: '',
                LANG_PROCEDURES_CALLNORETURN_CALL: 'executar',
                LANG_PROCEDURES_CALLNORETURN_PROCEDURE: ' função _sem_retorno',
                LANG_PROCEDURES_CALLNORETURN_TOOLTIP: 'executa esta função.',
                LANG_PROCEDURES_CALLRETURN_HELPURL: '',
                LANG_PROCEDURES_CALLRETURN_CALL: 'executar',
                LANG_PROCEDURES_CALLRETURN_PROCEDURE: ' função _com_retorno',
                LANG_PROCEDURES_CALLRETURN_TOOLTIP: 'executa esta função que tem valor de retorno.',
                LANG_PROCEDURES_MUTATORCONTAINER_Field: 'parâmetros',
                LANG_PROCEDURES_MUTATORARG_Field: 'variável:',
                LANG_PROCEDURES_HIGHLIGHT_DEF: 'Destaca a função',
                LANG_PROCEDURES_IFRETURN_TOOLTIP: 'Se a condição é verdadeira, a função devolverá este valor.',
                LANG_PROCEDURES_IFRETURN_WARNING: 'Atencão: Este bloco só pode ser usado dentro de uma função que tenha valor de retorno.',
                //variables blocks :
                LANG_CATEGORY_VARIABLES: 'Variáveis',
                LANG_VARIABLES_CALL_WITHOUT_DEFINITION: 'Esta variável não está declarada.',
                LANG_VARIABLES_GLOBAL: 'Variável',
                LANG_VARIABLES_GLOBAL_TYPE: 'do tipo ',
                LANG_VARIABLES_GLOBAL_EQUALS: '=',
                LANG_VARIABLES_GLOBAL_TOOLTIP: 'Declara e define uma variável GLOBAL do tipo inteiro (int) ou texto (String).',
                LANG_VARIABLES_LOCAL: 'Variável LOCAL',
                LANG_VARIABLES_LOCAL_TYPE: 'do tipo ',
                LANG_VARIABLES_LOCAL_EQUALS: '=',
                LANG_VARIABLES_LOCAL_TOOLTIP: 'Declara e define uma variável LOCAL do tipo inteiro (int) ou texto (String).',
                LANG_VARIABLES_DEFINE: 'Definir variável ',
                LANG_VARIABLES_DEFINE_AS: 'como',
                LANG_VARIABLES_DEFINE_TOOLTIP: 'Definir o valor de uma variável.',
                LANG_VARIABLES_SET: 'Var',
                LANG_VARIABLES_SET_AS: '=',
                LANG_VARIABLES_SET_TOOLTIP: 'Troca o valor de uma variável.',
                LANG_VARIABLES_GET: 'Var',
                LANG_VARIABLES_GET_TOOLTIP: 'Devolve o valor de uma variável',
                LANG_VARIABLES_PIN_ANALOG: 'Pino analógico',
                LANG_VARIABLES_PIN_DIGITAL: 'Pino digital',
                LANG_VARIABLES_PIN_DIGITAL0: 'AVISO: o pin digital 0 (pin RX) é utilizado ao carregar um esboço. Utilizá-lo para ligar componentes eletrónicos pode causar problemas ao carregar um novo esboço.',
                LANG_VARIABLES_PIN_TOOLTIP: 'Selecciona o pino desejado.',
                LANG_VARIABLES_TYPE_BYTE: 'Byte', // To translate
                LANG_VARIABLES_TYPE_FLOAT: 'Float', // To translate
                LANG_VARIABLES_TYPE_INTEGER: 'Integer', // To translate
                LANG_VARIABLES_TYPE_INTEGER_LONG: 'Long Integer', // To translate
                LANG_VARIABLES_TYPE_INTEGER_ULONG: 'Unsigned Long Integer', //To translate
                LANG_VARIABLES_TYPE_STRING: 'String', // To translate
                LANG_VARIABLES_TYPE_CHAR: 'Character', //to translate
                LANG_VARIABLES_TYPE_BOOLEAN: 'Boolean', //to translate
                LANG_VARIABLES_VOLATILE_GLOBAL: 'Declare VOLATILE GLOBAL variable ', // To translate
                LANG_VARIABLES_VOLATILE_GLOBAL_TYPE: 'of type ', // To translate
                LANG_VARIABLES_VOLATILE_GLOBAL_EQUALS: 'equals ', // To translate
                LANG_VARIABLES_VOLATILE_GLOBAL_TOOLTIP: 'Declares and defines a VOLATILE GLOBAL variable of type int or String used in a ISR function.', // To translate
                //sound blocks (zum):
                LANG_CATEGORY_ZUM: 'Sons',
                LANG_ZUM_PIEZO_BUZZER: 'Cigarra',
                LANG_ZUM_PIEZO_BUZZER_PIN: 'PIN#',
                LANG_ZUM_PIEZO_BUZZER_TONE: 'TOM',
                LANG_ZUM_PIEZO_BUZZER_DO: 'DO',
                LANG_ZUM_PIEZO_BUZZER_RE: 'RE',
                LANG_ZUM_PIEZO_BUZZER_MI: 'MI',
                LANG_ZUM_PIEZO_BUZZER_FA: 'FA',
                LANG_ZUM_PIEZO_BUZZER_SOL: 'SOL',
                LANG_ZUM_PIEZO_BUZZER_LA: 'LA',
                LANG_ZUM_PIEZO_BUZZER_SI: 'SI',
                LANG_ZUM_PIEZO_BUZZER_DURATION: 'Duração',
                LANG_ZUM_PIEZO_BUZZER_TOOLTIP: 'Cigarra',
                LANG_ZUM_PIEZO_BUZZERAV: 'Cigarra avançado',
                LANG_ZUM_PIEZO_BUZZERAV_PIN: 'PIN#',
                LANG_ZUM_PIEZO_BUZZERAV_TONE: 'TOM',
                LANG_ZUM_PIEZO_BUZZERAV_DURATION: 'Duração',
                LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP: 'Cigarra - Elemento piezoeléctrico avançado.',
                LANG_ZUM_DHT11_VALUE: 'Get', //to translate
                LANG_ZUM_DHT11_VALUE1: 'Temperature', //to translate
                LANG_ZUM_DHT11_VALUE2: 'Humidity', //to translate
                LANG_ZUM_DHT11_PIN: 'PIN', //to translate
                LANG_ZUM_DHT11_TOOLTIP: 'Get temperature or humidity from a DHT11, DHT21 or DHT22 sensor.', //to translate
                //motor blocks (servo and stepper):
                LANG_CATEGORY_MOTOR: 'Motors', //to translate
                LANG_MOTOR_SERVO_CONT: 'Servo de rotação contínua',
                LANG_MOTOR_SERVO_CONT_PIN: 'PIN#',
                LANG_MOTOR_SERVO_CONT_ROT: 'ROT',
                LANG_MOTOR_SERVO_CONT_TURN_CLOCKWISE: 'GIRAR no SENTIDO HORÁRIO',
                LANG_MOTOR_SERVO_CONT_TURN_COUNTERCLOCKWISE: 'GIRAR no SENTIDO ANTI-HORÁRIO',
                LANG_MOTOR_SERVO_CONT_STOPPED: 'PARAR',
                LANG_MOTOR_SERVO_CONT_DELAY: 'Pausa',
                LANG_MOTOR_SERVO_CONT_TOOLTIP: 'Servo de rotação contínua.',
                LANG_MOTOR_SERVO_MOVE: 'Servo',
                LANG_MOTOR_SERVO_MOVE_PIN: 'PIN#',
                LANG_MOTOR_SERVO_MOVE_DEGREES: 'Graus (0~180)',
                LANG_MOTOR_SERVO_MOVE_DELAY: 'Pausa',
                LANG_MOTOR_SERVO_MOVE_TOOLTIP: 'Mover o servo entre 0 e 180 graus.',
                LANG_MOTOR_SERVO_WARNING: 'Não é possível definir o pin servo utilizando uma variável.',
                LANG_MOTOR_STEPPER_MOVE: 'Stepper motor', //to translate
                LANG_MOTOR_STEPPER_MOVE_SPR: 'Steps per revolution', //to translate
                LANG_MOTOR_STEPPER_MOVE_PINS: '4 pins?', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN1: 'Pin 1', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN2: 'Pin 2', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN3: 'Pin 3', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN4: 'Pin 4', //to translate
                LANG_MOTOR_STEPPER_MOVE_SETSPEED: 'Set speed to', //to translate
                LANG_MOTOR_STEPPER_MOVE_SETSPEED_NEXT: '(rpm)', //to translate
                LANG_MOTOR_STEPPER_MOVE_STEP: 'Move motor', //to translate
                LANG_MOTOR_STEPPER_MOVE_STEP_NEXT: '(steps)', //to translate
                LANG_MOTOR_STEPPER_MOVE_TOOLTIP: 'Moves motor the number of steps. A positive steps value move in one direction, a negative value moves to the other direction.', //to translate
                LANG_MOTOR_PCA9685_DEF: 'PCA9685', //to translate
                LANG_MOTOR_PCA9685_DEF_SERVO: 'Servo', //to translate
                LANG_MOTOR_PCA9685_DEF_ADDRESS: 'Address of the component', //to translate
                LANG_MOTOR_PCA9685_DEF_TOOLTIP: 'Defines a PCA9685 connected to Arduino over I2C.', //to translate
                LANG_MOTOR_PCA9685_SET_PWM: 'PCA9685 Move servo', //to translate
                LANG_MOTOR_PCA9685_SET_PWM_ANGLE: 'angle', //to translate
                LANG_MOTOR_PCA9685_SET_PWM_TOOLTIP: 'Moves servo connected to PCA9685 the specified angle in degrees.', //to translate
                //interrupt blocks :
                LANG_CATEGORY_INTERRUPTS: 'Interrupts', // To translate
                LANG_INTERRUPTS_STATE: 'Set interrupts state to ', // To translate
                LANG_INTERRUPTS_STATE_ENABLED: 'ENABLED', // To translate
                LANG_INTERRUPTS_STATE_DISABLED: 'DISABLED', // To translate
                LANG_INTERRUPTS_STATE_TOOLTIP: 'Enable or Disable interrupts. Some functions will not work while interrupts are disabled. Use only for particularly critical sections of code.', // To translate
                LANG_INTERRUPTS_ATTACH: 'Attach procedure ', // To translate
                LANG_INTERRUPTS_ATTACH_PARAM2: 'in mode ', // To translate
                LANG_INTERRUPTS_ATTACH_PARAM3: 'with interrupt of digital pin', // To translate
                LANG_INTERRUPTS_ATTACH_LOW: 'LOW', // To translate
                LANG_INTERRUPTS_ATTACH_CHANGE: 'CHANGE', // To translate
                LANG_INTERRUPTS_ATTACH_RISING: 'RISING', // To translate
                LANG_INTERRUPTS_ATTACH_FALLING: 'FALLING', // To translate
                LANG_INTERRUPTS_ATTACH_PROCEDURE: 'func_without_return', // To translate
                LANG_INTERRUPTS_ATTACH_TOOLTIP: 'Set the procedure to be executed when an interrupt is raised in the specified pin.', // To translate
                LANG_INTERRUPTS_DETACH: 'Detach interrupt on digital pin', // To translate
                LANG_INTERRUPTS_DETACH_TOOLTIP: 'Disables the interrupt on the pin. When the pin is activated, the procedure associated is no longer executed.', // To translate
                LANG_WIFI_CONNECT: 'Wifi:', //To translate
                LANG_WIFI_CONNECT_STATION: 'connect', //To translate
                LANG_WIFI_CONNECT_SOFTAP: 'create network', //To translate
                LANG_WIFI_CONNECT_SSID: 'SSID', //To translate
                LANG_WIFI_CONNECT_PASSWORD: 'password', //To translate
                LANG_WIFI_CONNECT_CHANNEL: 'channel', //To translate
                LANG_WIFI_CONNECT_RX_PIN: 'Rx pin', //To translate
                LANG_WIFI_CONNECT_TX_PIN: 'Tx pin', //To translate
                LANG_WIFI_CONNECT_BAUD: 'baud rate', //To translate
                LANG_WIFI_CONNECT_TOOLTIP: 'Connects or creates a wifi using a ESP8266 adapter, and returns true on success.', //To translate
                LANG_WIFI_DISCONNECT: 'Wifi:disconnect', //To translate
                LANG_WIFI_DISCONNECT_TOOLTIP: 'Disconnects from the current wifi network.', //To translate
                LANG_WIFI_CLIENT: 'Wifi:connect to server', //To translate
                LANG_WIFI_CLIENT_IP: 'IP address', //To translate
                LANG_WIFI_CLIENT_PORT: 'Port', //To translate
                LANG_WIFI_CLIENT_TOOLTIP: 'Connects to a TCP server.', //To translate
                LANG_WIFI_SERVER: 'Wifi:start server', //To translate
                LANG_WIFI_SERVER_PORT: 'Port', //To translate
                LANG_WIFI_SERVER_TOOLTIP: 'Create a TCP server to accept connections from clients.', //To translate
                LANG_WIFI_GETIP: 'Wifi:get IP address', //To translate
                LANG_WIFI_GETIP_TOOLTIP: 'Returns IP address of the adapter.', //To translate
                LANG_WIFI_SEND_SERVER: 'Wifi:send to server', //To translate
                LANG_WIFI_SEND_SERVER_DATA: 'Text', //To translate
                LANG_WIFI_SEND_SERVER_TOOLTIP: 'Send text to the TCP server.', //To translate
                LANG_WIFI_SEND_CLIENT: 'Wifi:send to client', //To translate
                LANG_WIFI_SEND_CLIENT_ID: 'ID', //To translate
                LANG_WIFI_SEND_CLIENT_DATA: 'Data', //To translate
                LANG_WIFI_SEND_CLIENT_TOOLTIP: 'Send text to specified client (ID).', //To translate
                LANG_WIFI_RECEIVE_CLIENT: 'Wifi:receive from client', //To translate
                LANG_WIFI_RECEIVE_CLIENT_TOOLTIP: 'Receives a text from client, begining with id number and a colon (:). If timeout is reached, returns an empty string.', //To translate
                LANG_WIFI_RECEIVE_SERVER: 'Wifi:receive from server', //To translate
                LANG_WIFI_RECEIVE_SERVER_TIMEOUT: 'Timeout', //To translate
                LANG_WIFI_RECEIVE_SERVER_TOOLTIP: 'Receives a string from TCP server or empty string if timeout reached.', //To translate
                LANG_WIFI_CLOSE_SERVER: 'Wifi:stop server', //To translate
                LANG_WIFI_CLOSE_SERVER_TOOLTIP: 'Shutdown TCP server.', //To translate
                LANG_WIFI_CLOSE_CLIENT: 'Wifi:stop connection', //To translate
                LANG_WIFI_CLOSE_CLIENT_TOOLTIP: 'Shutdown connection with TCP server.' //To translate
            };
            // Node
            if (typeof module !== 'undefined' && module.exports) {
                module.exports = language;
            }
            // Browser
            // if (typeof window !== 'undefined' && this.RoboBlocks && this.RoboBlocks.locales.add) {
            //     this.RoboBlocks.locales.add('es', language);
            if (typeof window !== 'undefined' && RoboBlocks && RoboBlocks.locales.add) {
                RoboBlocks.locales.add('pt-PT', language);
            }
        }());

        // Source: lang/ru.js
        (function() {
            var language = {
                //random :
                BLOCKLY_MSG_DUPLICATE_BLOCK: 'Дублировать',
                BLOCKLY_MSG_REMOVE_COMMENT: 'Удалить комментарий',
                BLOCKLY_MSG_ADD_COMMENT: 'Добавить комментарий',
                BLOCKLY_MSG_EXTERNAL_INPUTS: 'Внешний ввод',
                BLOCKLY_MSG_INLINE_INPUTS: 'Прямой ввод',
                BLOCKLY_MSG_DELETE_BLOCK: 'Удалить блок',
                BLOCKLY_MSG_DELETE_X_BLOCKS: 'Удалить %1 бл.',
                BLOCKLY_MSG_COLLAPSE_BLOCK: 'Свернуть блок',
                BLOCKLY_MSG_EXPAND_BLOCK: 'Развернуть блок',
                BLOCKLY_MSG_DISABLE_BLOCK: 'Отключить блок',
                BLOCKLY_MSG_ENABLE_BLOCK: 'Включить блок',
                BLOCKLY_MSG_HELP: 'Помощь',
                BLOCKLY_MSG_COLLAPSE_ALL: 'Свернуть все блоки',
                BLOCKLY_MSG_EXPAND_ALL: 'Развернуть все блоки',
                LANG_VARIABLES_SET_ITEM: 'элемент',
                LANG_RESERVED_WORDS: 'Зарезервированное слово: Это имя не допускается.',
                LANG_CHAR_LENGTH: 'A character must have length 0 or 1.', //to translate
                //logic blocks:
                LANG_CATEGORY_LOGIC: 'Логические',
                LANG_LOGIC_OPERATION_AND: 'и',
                LANG_LOGIC_OPERATION_OR: 'или',
                LANG_LOGIC_COMPARE_TOOLTIP_EQ: 'Сравнение двух аргументов на равенство.',
                LANG_LOGIC_COMPARE_TOOLTIP_NEQ: 'Сравнение двух аргументов на неравенство',
                LANG_LOGIC_COMPARE_TOOLTIP_LT: 'Сравнение двух аргументов: первый меньше второго?',
                LANG_LOGIC_COMPARE_TOOLTIP_LTE: 'Сравнение двух аргументов: первый меньше второго, или равен ему?',
                LANG_LOGIC_COMPARE_TOOLTIP_GT: 'Сравнение двух аргументов: первый больше второго?',
                LANG_LOGIC_COMPARE_TOOLTIP_GTE: 'Сравнение двух аргументов: первый больше второго, или равен ему?',
                LANG_LOGIC_OPERATION_TOOLTIP_AND: 'Сравнение двух аргументов на логическую функцию И.',
                LANG_LOGIC_OPERATION_TOOLTIP_OR: 'Сравнение двух аргументов на логическую функцию ИЛИ.',
                LANG_LOGIC_NEGATE_INPUT_NOT: 'НЕ',
                LANG_LOGIC_NEGATE_TOOLTIP: 'Возвращает обратное значение логического аргумента.',
                LANG_LOGIC_NEGATE_HELPURL: '',
                LANG_LOGIC_BOOLEAN_TRUE: 'ИСТРИНА',
                LANG_LOGIC_BOOLEAN_FALSE: 'ЛОЖЬ',
                LANG_LOGIC_BOOLEAN_TOOLTIP: 'Возвращает логическое ИСТИНА или ЛОЖЬ в зависимости от выбора.',
                //communication blocks:
                LANG_CATEGORY_COMMUNICATION: 'Коммуникации',
                LANG_BQ_BLUETOOTH_RECEIVE: 'Bluetooth: приемник ',
                LANG_BQ_BLUETOOTH_RECEIVE_BLUETOOTH: 'Bluetooth',
                LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP: 'Возвращает данные, полученные с помощью модуля Bluetooth',
                LANG_BQ_BLUETOOTH_SEND: 'Bluetooth: Отправить',
                LANG_BQ_BLUETOOTH_SEND_SEND: 'Передать данные',
                LANG_BQ_BLUETOOTH_SEND_TOOLTIP: 'Входные данные передаются с помощью модуля Bluetooth',
                LANG_BQ_BLUETOOTH_DEF: 'Bluetooth',
                LANG_BQ_BLUETOOTH_DEF_BAUD_RATE: 'Скорость передачи',
                LANG_BQ_BLUETOOTH_DEF_PIN1: 'RX',
                LANG_BQ_BLUETOOTH_DEF_PIN2: 'TX',
                LANG_BQ_BLUETOOTH_DEF_NAME: 'Имя',
                LANG_BQ_BLUETOOTH_DEF_PINCODE: 'Кодовый PIN',
                LANG_BQ_BLUETOOTH_DEF_RECEIVE: 'Прием',
                LANG_BQ_BLUETOOTH_DEF_SEND: 'Передача',
                LANG_BQ_BLUETOOTH_DEF_TOOLTIP: 'Определяет подключение к модулю Bluetooth',
                LANG_ADVANCED_BT_SERIAL_AVAILABLE: 'Bluetooth: Модуль доступен',
                LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP: 'Проверяет, доступен ли модуль Bluetooth.',
                LANG_ADVANCED_SERIAL_AVAILABLE: 'Последовательный порт доступен',
                LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP: 'Проверяет, доступен ли последовательный порт',
                LANG_ADVANCED_SERIAL_PARSEINT: 'Serial Read Integer', // To translate
                LANG_ADVANCED_SERIAL_PARSEINT_TOOLTIP: 'First valid (long) integer number from the serial buffer', // To translate
                LANG_ADVANCED_SERIAL_PRINT: 'Отправляет данные в последовательный порт',
                LANG_ADVANCED_SERIAL_PRINT_TOOLTIP: 'Отправляет данные в последовательный порт в кодировке ASCII.',
                LANG_ADVANCED_SERIAL_PRINTLN: 'Отправляет данные в последовательный порт одной строкой',
                LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP: 'Отправляет данные в последовательный порт в кодировке ASCII, заканчивая посылку кодом перевода строки.',
                LANG_ADVANCED_SERIAL_PRINT_FORMAT: 'Prints value with format', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_1: 'Binary', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_2: 'Octal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_3: 'Decimal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_4: 'Hexadecimal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_5: 'Without decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_6: 'One decimal', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_7: 'Two decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_8: 'Three decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_9: 'Four decimals', //to translate
                LANG_ADVANCED_SERIAL_PRINT_FORMAT_TOOLTIP: 'Prints value with specified format', //to translate
                LANG_ADVANCED_SERIAL_PRINTLN_FORMAT: 'Send value with format and CR', //To translate
                LANG_ADVANCED_SERIAL_PRINTLN_FORMAT_TOOLTIP: 'Send a number to serial port with specified format and carriage return (CR).', //To translate
                LANG_ADVANCED_SERIAL_READ: 'Читать последовательный порт',
                        LANG_ADVANCED_SERIAL_READ_TOOLTIP: 'Прочитать данные, полученные через последовательный порт, как байт.',
                        LANG_ADVANCED_SERIAL_READSTRING: 'Читать строку символов из последовательного порта',
                        LANG_ADVANCED_SERIAL_READSTRING_TOOLTIP: 'Прочитать данные, полученные через последовательный порт в виде текста ASCII.',
                         //sensor blocks:
                        LANG_CATEGORY_SENSOR: 'датчиков',
                        LANG_BQ_BAT: 'BAT - ультразвуковой датчик',
                        LANG_BQ_BAT_RED_PIN: 'ECHO PIN #',
                        LANG_BQ_BAT_BLUE_PIN: 'TRIGGER PIN #',
                        LANG_BQ_BAT_TOOLTIP: 'Возвращает расстояние, измеренное датчиком.',
                LANG_IR_READ: 'Reads from infrared receiver', //to translate
                LANG_IR_READ_PIN: 'connected to PIN#', //to translate
                LANG_IR_READ_TOOLTIP: 'Reads the value received from the infrared receiver', //to translate
                         // ЖК блоки:
                        LANG_CATEGORY_LCD: 'Блоки ЖК',
                        LANG_LCD_DEF: 'ЖК-дисплей (2x16) ',
                LANG_LCD_DEF_CONNECTION: 'Connection type', //to translate
                LANG_LCD_DEF_CONNECTION_PARALLEL: 'Parallel (6 pins)', //to translate
                LANG_LCD_DEF_CONNECTION_I2C: 'I2C (4 wires)', //to translate
                LANG_LCD_DEF_ADDRESS: 'Address of the component', //to translate
                LANG_LCD_DEF_PIN_1: 'RS Pin', //to translate
                LANG_LCD_DEF_PIN_2: 'Enable Pin', //to translate
                LANG_LCD_DEF_PIN_3: 'Data4 Pin', //to translate
                LANG_LCD_DEF_PIN_4: 'Data5 Pin', //to translate
                LANG_LCD_DEF_PIN_5: 'Data6 Pin', //to translate
                LANG_LCD_DEF_PIN_6: 'Data7 Pin', //to translate
                        LANG_LCD_DEF_TOOLTIP: 'Установка ЖК',
                        LANG_LCD_ADVANCED_DEF: 'расширенный ЖК ',
                        LANG_LCD_ADVANCED_ROWS: 'Линии',
                        LANG_LCD_ADVANCED_COLUMNS: 'Колонки',
                        LANG_LCD_DEF_ADVANCED_TOOLTIP: 'блок, который определяет настройки ЖК',
                        LANG_LCD_SETBACKLIGHT: 'ЖК: настроить подсветку',
                        LANG_LCD_SETBACKLIGHT_CLOSE: '',
                        LANG_LCD_SETBACKLIGHT_TOOLTIP: 'Настройка подсветки ЖК-дисплея',
                        LANG_LCD_PRINT: 'ЖК: Печать',
                        LANG_LCD_PRINT_POSITION: 'Установите позицию текста?',
                        LANG_LCD_PRINT_TOOLTIP: 'Печать фразы на ЖК-дисплее в указанной позиции или на следующей доступной.',
                        LANG_LCD_CLEAR: 'ЖК очистить',
                        LANG_LCD_CLEAR_TOOLTIP: 'ЖК: Удалить символы с экрана',
                LANG_LCD_HOME: 'LCD Go home', //to translate
                LANG_LCD_HOME_TOOLTIP: 'LCD: Positions the cursor in the upper-left corner of the screen', //to translate
                LANG_LCD_DISPLAY: 'LCD Show content', //to translate
                LANG_LCD_DISPLAY_TOOLTIP: 'LCD: Turns on the LCD display and restore the text that was on the display', //to translate
                LANG_LCD_NODISPLAY: 'LCD Hide content', //to translate
                LANG_LCD_NODISPLAY_TOOLTIP: 'LCD: Turns off the LCD display, without losing the text currently shown on it', //to translate
                LANG_LCD_SCROLLDISPLAYLEFT: 'LCD Scrolls to the left', //to translate
                LANG_LCD_SCROLLDISPLAYLEFT_TOOLTIP: 'LCD: Scrolls the contents of the display one space to the left', //to translate
                LANG_LCD_SCROLLDISPLAYRIGHT: 'LCD Scrolls to the right', //to translate
                LANG_LCD_SCROLLDISPLAYRIGHT_TOOLTIP: 'LCD: Scrolls the contents of the display one space to the right', //to translate
                         // Управление блоками:
                        LANG_CATEGORY_CONTROLS: 'Контроль',
                        LANG_CONTROLS_BASE_DELAY_WAIT: 'Ждать (мс)',
                        LANG_CONTROLS_BASE_DELAY_TOOLTIP: 'Время ожидания указано в миллисекундах (мс) ',
                LANG_CONTROLS_BASE_MILLIS: 'Time from start (ms)', // To translate
                LANG_CONTROLS_BASE_MILLIS_TOOLTIP: 'Number of milliseconds since the program started (long integer)', // To translate
                LANG_CONTROLS_BASE_DELAY_MICROSECONDS: 'Wait [us]', //To translate
                LANG_CONTROLS_BASE_DELAY_MICROSECONDS_TOOLTIP: 'Waits the specified time in microseconds (us)', //To translate
                LANG_CONTROLS_BASE_MICROS: 'Time from start (us)', //To translate
                LANG_CONTROLS_BASE_MICROS_TOOLTIP: 'Number of microseconds since the program started (long integer)', //To translate
                LANG_CONTROLS_DOWHILE_OPERATOR_DO: 'Do',
                LANG_CONTROLS_DOWHILE_OPERATOR_WHILE: 'while',
                LANG_CONTROLS_DOWHILE_TOOLTIP: 'While the condition is true, continue doing the statements.',
                LANG_CONTROLS_EXECUTE: 'Execute',
                LANG_CONTROLS_EXECUTE_TOOLTIP: 'Executes C/C++ code. Use with caution, as it can easily break the program and prevent it from compiling.',
                        LANG_CONTROLS_IF_TOOLTIP_1: 'Если условие истинно, выполняет действия в блоке.',
                        LANG_CONTROLS_IF_TOOLTIP_2: 'Если условие истинно, выполняет команду первого блока, в противном случае выполняет вторую команду блока.',
                        LANG_CONTROLS_IF_TOOLTIP_3: 'Если первое значение ИСТИНА, выполняет команду первого блока. В противном случае, если второе значение ИСТИНА, выполняет второй командный блок.',
                        LANG_CONTROLS_IF_TOOLTIP_4: 'Если первое значение ИСТИНА, выполняет команды первого блока. В противном случае, если второе значение ИСТИНА, выполняет второй командный блок. Если какое-нибудь из следующих условий является ИСТИНА, выполняет последнюю команду блока.',
                        LANG_CONTROLS_IF_MSG_IF: 'если',
                        LANG_CONTROLS_IF_MSG_ELSEIF: ', иначе если',
                        LANG_CONTROLS_IF_MSG_ELSE: 'иначе',
                        LANG_CONTROLS_IF_MSG_THEN: 'Выполнить',
                        LANG_CONTROLS_IF_IF_Field_IF: 'если',
                        LANG_CONTROLS_IF_IF_TOOLTIP: 'Добавить, удалить, изменить или перенастроить разделы этого блока ЕСЛИ. ',
                        LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF: ', иначе если',
                        LANG_CONTROLS_IF_ELSEIF_TOOLTIP: 'Добавляет состояние к блоку ЕСЛИ',
                        LANG_CONTROLS_IF_ELSE_Field_ELSE: 'иначе',
                        LANG_CONTROLS_IF_ELSE_TOOLTIP: 'Добавляет окончательное состояние блока, если соответствует  остальная часть параметров',
                        LANG_CONTROLS_FOR_FROM_WARNING: 'Вы не можете установить переменную в качестве начального значения блока.',
                        LANG_CONTROLS_FOR_TO_WARNING: 'Вы не можете установить переменную в начальное значение блока.',
                LANG_CONTROLS_FOR_INCREMENT_WARNING: 'It is not possible to set a variable as the increment value of the for block', //to translate
                        LANG_CONTROLS_FOR_INPUT_WITH: 'Введите значение ',
                        LANG_CONTROLS_FOR_INPUT_VAR: 'х',
                        LANG_CONTROLS_FOR_INPUT_FROM: 'от',
                        LANG_CONTROLS_FOR_INPUT_TO: 'до ',
                LANG_CONTROLS_FOR_INPUT_INCREMENT: 'increment', //to translate
                        LANG_CONTROLS_FOR_INPUT_DO: 'Выполнить',
                        LANG_CONTROLS_FOR_TOOLTIP: 'Считая от начала до конца. Каждый раз, когда вы увеличить значение, переменная получает это значение и действия выполняются.',
                        LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE: 'пока',
                        LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL: 'до',
                        LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE: 'В то время как состояние истинно, выполнить инструкции ',
                        LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL: 'В то время как условие ложно, выполните инструкции',
                        LANG_CONTROLS_REPEAT_TITLE_REPEAT: 'Повторить',
                        LANG_CONTROLS_REPEAT_TITLE_TIMES: 'раз',
                        LANG_CONTROLS_REPEAT_INPUT_DO: 'Выполнить',
                        LANG_CONTROLS_REPEAT_TOOLTIP: 'выполнить инструкции несколько раз.',
                        LANG_CONTROLS_FLOW_STATEMENTS_HELPURL: '',
                        LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP: ' "петля" ',
                        LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: 'остановить',
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: 'Переход к следующему значению в "петли" ',
                        LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK: 'Выйдите из "петли" в этом действии.',
                        LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE: 'Пропустите оставшуюся часть действий этого круга, и продолжить со следующего круга.',
                        LANG_CONTROLS_FLOW_STATEMENTS_WARNING: 'Внимание: Этот блок может быть использован только в пределах "петли".',
                LANG_CONTROLS_SETUP_LOOP_SETUP_TITLE: 'Setup',
                LANG_CONTROLS_SETUP_LOOP_LOOP_TITLE: 'Loop',
                LANG_CONTROLS_SETUP_LOOP_TOOLTIP: 'Blocks in setup will be executed at start, and blocks in Loop will be repeated continously.',
                        LANG_CONTROLS_SWITCH: 'если',
                        LANG_CONTROLS_SWITCH_TOOLTIP_1: 'выполняет действия, если это так.',
                        LANG_CONTROLS_SWITCH_TOOLTIP_2: 'выполняет действия, если это так.',
                        LANG_CONTROLS_SWITCH_TOOLTIP_3: 'выполняет действия, если это так.',
                        LANG_CONTROLS_SWITCH_TOOLTIP_4: 'выполняет действия, если это так.',
                        LANG_CONTROLS_SWITCH_SWITCH_TOOLTIP: 'Этот блок сравнивает значения по одному для выбора варианта действия.',
                        LANG_CONTROLS_SWITCH_CASE_TOOLTIP: 'Выполнить',
                        LANG_CONTROLS_SWITCH_DEFAULT_TOOLTIP: 'Блок "по умолчанию" определяет действие, которое будет работать, если не встретил соответствий в предыдущих случаях.',
                        LANG_CONTROLS_SWITCH_IS: 'это',
                        LANG_CONTROLS_SWITCH_CASE: 'выполнить',
                        LANG_CONTROLS_SWITCH_COLON: ':',
                        LANG_CONTROLS_SWITCH_DEFAULT: 'либо выполнить',
                        LANG_CONTROLS_SWITCH_DO: 'Выполнить',
                         // Математические блоки:
                        LANG_CATEGORY_MATH: 'Математика',
                        LANG_MATH_ADVANCED_MAP_MAP: 'Массив',
                        LANG_MATH_ADVANCED_MAP_FROM: 'От [',
                        LANG_MATH_ADVANCED_MAP_HYPHEN: '-',
                        LANG_MATH_ADVANCED_MAP_BRACKET: ']',
                        LANG_MATH_ADVANCED_MAP_TO: 'до [',
                        LANG_MATH_ADVANCED_MAP_TOOLTIP: 'Ввод начальных значений для массива чисел.',
                        LANG_MATH_NUMBER_TOOLTIP: 'Целое',
                        LANG_MATH_ARRAY_ARRAY3: '[3]',
                        LANG_MATH_ARRAY_BRACKET3: '{',
                        LANG_MATH_ARRAY_BRACKET4: '}',
                        LANG_MATH_ARRAY_COMMA: ',',
                        LANG_MATH_ARRAY_TOOLTIP: 'Вектор из трех значений',
                        LANG_ARRAY_GET_BRACKET1: '[',
                        LANG_ARRAY_GET_BRACKET2: ']',
                        LANG_ARRAY_GET_TOOLTIP: 'Возвращает значение элемента вектора.',
                        LANG_MATH_MODULO_TOOLTIP: 'Возвращает остаток от деления между значениями параметров.',
                        LANG_MATH_BASE_MAP: 'Массив',
                        LANG_MATH_BASE_MAP_VALUE_TO: 'Значение между [0- ',
                        LANG_MATH_BASE_MAP_BRACKET: ']',
                        LANG_MATH_BASE_MAP_TOOLTIP: 'Входные значения массива в диапазоне [0-1023] для другого диапазона значений.',
                        LANG_MATH_SINGLE_OP_ROOT: 'квадратный корень ',
                        LANG_MATH_SINGLE_OP_ABSOLUTE: 'абсолютное значение',
                        LANG_MATH_SINGLE_TOOLTIP_ROOT: 'Возвращает квадратный корень из числа.',
                        LANG_MATH_SINGLE_TOOLTIP_ABS: 'возвращает абсолютное значение числа.',
                        LANG_MATH_SINGLE_TOOLTIP_NEG: 'Возвращает число с обратным знаком.',
                        LANG_MATH_SINGLE_TOOLTIP_LN: 'Возвращает натуральный логарифм числа. ',
                        LANG_MATH_SINGLE_TOOLTIP_LOG10: 'возвращает десятичный логарифм числа.',
                        LANG_MATH_SINGLE_TOOLTIP_EXP: 'возвращает экспоненту числа.',
                        LANG_MATH_SINGLE_TOOLTIP_POW10: 'Возвращает 10 в степени ',
                LANG_MATH_MIN: 'Minimum value between', //To translate
                LANG_MATH_MIN_PARAM2: 'and', //To translate
                LANG_MATH_MIN_TOOLTIP: 'Returns the minimum value of the inputs.', //To translate
                LANG_MATH_MAX: 'Maximum value between', //To translate
                LANG_MATH_MAX_PARAM2: 'and', //To translate
                LANG_MATH_MAX_TOOLTIP: 'Returns the maximum value of the inputs.', //To translate
                LANG_MATH_POW: 'Value of', //To translate
                LANG_MATH_POW_PARAM2: 'to the power of', //To translate
                LANG_MATH_POW_TOOLTIP: 'Returns the value of the first input to the power of the second.', //To translate
                         // Текстовых блоков:
                        LANG_CATEGORY_TEXT: 'Текст',
                        LANG_TEXT_TEXT_HELPURL: '',
                        LANG_TEXT_TEXT_TOOLTIP: 'Письмо, одно слово или строка текста.',
                LANG_TEXT_CHAR_TOOLTIP: 'A simbol, letter or number, but just one character', //to translate
                        LANG_TEXT_JOIN_HELPURL: '',
                        LANG_TEXT_JOIN_Field_CREATEWITH: 'создать текст',
                        LANG_TEXT_JOIN_TOOLTIP: 'Создает текст, соединяющую любое количество элементов.',
                        LANG_TEXT_CREATE_JOIN_Field_JOIN: 'объединить',
                        LANG_TEXT_CREATE_JOIN_TOOLTIP: 'Добавить, удалить, изменить или разделы для перенастройки этого текстовый блок.',
                        LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM: 'элемент',
                        LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP: 'Добавить элемент в тексте.',
                        LANG_TEXT_CREATE_JOIN_TITLE_JOIN: 'объединить',
                        LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM: 'элемент',
                        LANG_TEXT_APPEND_HELPURL: '',
                        LANG_TEXT_APPEND_TO: 'на',
                        LANG_TEXT_APPEND_APPENDTEXT: 'добавление текста',
                        LANG_TEXT_APPEND_VARIABLE: 'элемент',
                        LANG_TEXT_APPEND_TOOLTIP: 'Добавить текст в переменной и 1%.',
                        LANG_TEXT_LENGTH_HELPURL: '',
                        LANG_TEXT_LENGTH_INPUT_LENGTH: 'долгота',
                        LANG_TEXT_LENGTH_TOOLTIP: 'Возвращает количество букв (включая пробелы) в введенного текста.',
                        LANG_TEXT_EQUALSIGNORECASE_IS: '',
                        LANG_TEXT_EQUALSIGNORECASE_EQUAL: '=',
                        LANG_TEXT_EQUALSIGNORECASE_QUESTION: '',
                        LANG_TEXT_EQUALSIGNORECASE_TOOLTIP: 'Сравнение двух текстов. Сравниваются независимо от того, имеют ли они прописные буквы в нижнем регистре.',
                        LANG_TEXT_SUBSTRING: 'Вырезать',
                        LANG_TEXT_SUBSTRING_FROM: 'из',
                        LANG_TEXT_SUBSTRING_TO: 'до',
                        LANG_TEXT_SUBSTRING_TOOLTIP: 'Вырезает текстовые символы из указанных позиций начала и конца,  и создает с ними новый текст.',
                LANG_TEXT_CHARAT: 'Character of text', //To translate
                LANG_TEXT_CHARAT_POSITION: 'in position', //To translate
                LANG_TEXT_CHARAT_TOOLTIP: 'Returns character in the position of the text (beginning with 0).', //To translate
                        LANG_TEXT_SPECIAL: 'Специальные символы ',
                        LANG_TEXT_SPECIAL_TAB: 'Табулятор',
                        LANG_TEXT_SPECIAL_CARRIAGE_RETURN: 'Возврат каретки',
                        LANG_TEXT_SPECIAL_LINE_FEED: 'Линия',
                        LANG_TEXT_SPECIAL_TOOLTIP: 'Написать специальные символы.',
                LANG_TEXT_COMMENT: 'Comment', //to translate
                LANG_TEXT_COMMENT_TOOLTIP: 'Inserts a comment of one line in the program.', //to translate
                         // Расширенные блоки:
                        LANG_CATEGORY_ADVANCED: 'Функции портов',
                        LANG_ADVANCED_INOUT_ANALOG_READ: 'Читать значение аналогового PIN # ',
                        LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP: 'Читает значение заданного аналогового входа.',
                        LANG_ADVANCED_INOUT_ANALOG_WRITE: 'Писать значение в аналоговый PIN #',
                        LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE: 'значение',
                        LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP: 'Написать значение между 0 и 255 в аналоговый вход данных.',
                        LANG_ADVANCED_BUILTIN_LED: 'Встроенный LED',
                        LANG_ADVANCED_BUILTIN_LED_STATE: 'состояние',
                        LANG_ADVANCED_BUILTIN_LED_ON: 'ВКЛ',
                        LANG_ADVANCED_BUILTIN_LED_OFF: 'ВЫКЛ',
                        LANG_ADVANCED_BUILTIN_LED_TOOLTIP: 'Управление интегрированным светодиодом на плате, внутренне соединенным с выводом 13. ',
                        LANG_ADVANCED_INOUT_DIGITAL_READ: 'Читать цифровой PIN# ',
                        LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP: 'Читает значение определенного цифрового контакта.',
                        LANG_ADVANCED_INOUT_DIGITAL_WRITE: 'Записать в цифровой PIN#',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_GET_VAR: 'значение',
                        LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN: 'PIN# ',
                        LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE: 'состояние',
                        LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH: 'ВКЛ',
                        LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW: 'ВЫКЛ',
                        LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP: 'Написать значение в конкретном цифровом выводе.',
                LANG_ADVANCED_INOUT_PULSEIN: 'Time for digital pin PIN#', //to translate
                LANG_ADVANCED_INOUT_PULSEIN_MODE: 'to change to', //to translate
                LANG_ADVANCED_INOUT_PULSEIN_TOOLTIP: 'Returns the time for a digital pin to change to the state specified (in milliseconds).', //to translate
                        LANG_ADVANCED_HIGHLOW_HIGH: 'ВКЛ',
                        LANG_ADVANCED_HIGHLOW_LOW: 'ВЫКЛ',
                        LANG_ADVANCED_HIGHLOW_TOOLTIP: 'Написать "ВКЛ" или "ВЫКЛ" в соответствии с выбором.',
                        LANG_ADVANCED_MATH_RANDOM: 'Случайное число между',
                        LANG_ADVANCED_MATH_RANDOM_AND: 'и',
                        LANG_ADVANCED_MATH_RANDOM_TOOLTIP: 'создает случайное число в интервале между двумя пороговыми значениями.',
                LANG_ADVANCED_MATH_RANDOM_SEED: 'Set random seed to', //to translate
                LANG_ADVANCED_MATH_RANDOM_SEED_TOOLTIP: 'Sets seed for random number generator. For a random seed, read from an unconnected analog pin; to repeat the same sequence, use a fixed number.', //to translate
                         // Процедуры блоки
                        LANG_CATEGORY_PROCEDURES: 'Функции',
                        LANG_PROCEDURES_RETURN: 'Возврат',
                        LANG_PROCEDURES_RETURN_TOOLTIP: 'Возвращает значение ',
                        LANG_PROCEDURES_CALL_WITHOUT_DEFINITION: 'Вызвать неопределенную функцию.',
                        LANG_PROCEDURES_DEFNORETURN_HELPURL: '',
                        LANG_PROCEDURES_DEFNORETURN_PROCEDURE: 'функция_без_значения',
                        LANG_PROCEDURES_DEFNORETURN_DO: 'Выполнить',
                        LANG_PROCEDURES_DEFNORETURN_TOOLTIP: 'функция выполняется без возвращения данных.',
                        LANG_PROCEDURES_DEFRETURN_HELPURL: '',
                        LANG_PROCEDURES_DEFRETURN_PROCEDURE: 'функция_со_значением',
                        LANG_PROCEDURES_DEFRETURN_DO: 'Выполнить',
                        LANG_PROCEDURES_DEFRETURN_RETURN: 'Возврат',
                        LANG_PROCEDURES_DEFRETURN_TOOLTIP: 'функция возвращает значение.',
                        LANG_PROCEDURES_DEF_DUPLICATE_WARNING: 'Предупреждение: Эта функция дублируется параметры.',
                        LANG_PROCEDURES_CALLNORETURN_HELPURL: '',
                        LANG_PROCEDURES_CALLNORETURN_CALL: 'Выполнить',
                        LANG_PROCEDURES_CALLNORETURN_PROCEDURE: 'Без_возврата функция',
                        LANG_PROCEDURES_CALLNORETURN_TOOLTIP: 'выполняет эту функцию.',
                        LANG_PROCEDURES_CALLRETURN_HELPURL: '',
                        LANG_PROCEDURES_CALLRETURN_CALL: 'Выполнить',
                        LANG_PROCEDURES_CALLRETURN_PROCEDURE: 'С_возвратом функция',
                        LANG_PROCEDURES_CALLRETURN_TOOLTIP: 'Выполняет эту функцию. Имеется возвращаемое значение.',
                        LANG_PROCEDURES_MUTATORCONTAINER_Field: 'параметры',
                        LANG_PROCEDURES_MUTATORARG_Field: 'переменная',
                        LANG_PROCEDURES_HIGHLIGHT_DEF: 'Основные функции',
                        LANG_PROCEDURES_IFRETURN_TOOLTIP: 'Если условие истинно, то функция возвращает это значение. ',
                        LANG_PROCEDURES_IFRETURN_WARNING: 'Внимание: Этот блок может быть использован только в пределах функции, имеющей возвращаемое значение.',
                         // Переменные блоков:
                        LANG_CATEGORY_VARIABLES: 'Переменная',
                        LANG_VARIABLES_CALL_WITHOUT_DEFINITION: 'Эта переменная не объявлена.',
                        LANG_VARIABLES_GLOBAL: 'Переменная',
                        LANG_VARIABLES_GLOBAL_TYPE: 'тип',
                        LANG_VARIABLES_GLOBAL_EQUALS: '=',
                        LANG_VARIABLES_GLOBAL_TOOLTIP: 'Определяет и устанавливает глобальную переменную (INT) или текст (String).',
                        LANG_VARIABLES_LOCAL: 'локальная переменная',
                        LANG_VARIABLES_LOCAL_TYPE: 'тип',
                        LANG_VARIABLES_LOCAL_EQUALS: '=',
                        LANG_VARIABLES_LOCAL_TOOLTIP: 'Объявляет и определяет переменную целого типа (INT) или текст (String).',
                        LANG_VARIABLES_DEFINE: 'Установить переменную ',
                        LANG_VARIABLES_DEFINE_AS: 'как',
                        LANG_VARIABLES_DEFINE_TOOLTIP: 'Установить значение переменной.',
                        LANG_VARIABLES_SET: 'Var',
                        LANG_VARIABLES_SET_AS: '=',
                        LANG_VARIABLES_SET_TOOLTIP: 'Изменение значения переменной.',
                        LANG_VARIABLES_GET: 'Var',
                        LANG_VARIABLES_GET_TOOLTIP: 'Возвращает значение переменной',
                        LANG_VARIABLES_PIN_ANALOG: 'аналоговый PIN ',
                        LANG_VARIABLES_PIN_DIGITAL: 'цифровой PIN ',
                        LANG_VARIABLES_PIN_DIGITAL0: 'ВНИМАНИЕ: цифровой контактный 0 (контактный RX) используется для загрузки скетча. Использование его для подключения электронных компонентов может вызвать проблемы при загрузке новых скетчей.',
                        LANG_VARIABLES_PIN_TOOLTIP: 'Выберите нужный контакт.',
                LANG_VARIABLES_TYPE_BYTE: 'Byte', // To translate
                LANG_VARIABLES_TYPE_FLOAT: 'Float', // To translate
                LANG_VARIABLES_TYPE_INTEGER: 'Integer', // To translate
                LANG_VARIABLES_TYPE_INTEGER_LONG: 'Long Integer', // To translate
                LANG_VARIABLES_TYPE_INTEGER_ULONG: 'Unsigned Long Integer', //To translate
                LANG_VARIABLES_TYPE_STRING: 'String', // To translate
                LANG_VARIABLES_TYPE_CHAR: 'Character', //to translate
                LANG_VARIABLES_TYPE_BOOLEAN: 'Boolean', //to translate
                LANG_VARIABLES_VOLATILE_GLOBAL: 'Declare VOLATILE GLOBAL variable ', // To translate
                LANG_VARIABLES_VOLATILE_GLOBAL_TYPE: 'of type ', // To translate
                LANG_VARIABLES_VOLATILE_GLOBAL_EQUALS: 'equals ', // To translate
                LANG_VARIABLES_VOLATILE_GLOBAL_TOOLTIP: 'Declares and defines a VOLATILE GLOBAL variable of type int or String used in a ISR function.', // To translate
                         //sound blocks (zum):
                        LANG_CATEGORY_ZUM: 'звуки',
                        LANG_ZUM_PIEZO_BUZZER: 'Звукоизлучатель',
                        LANG_ZUM_PIEZO_BUZZER_PIN: 'PIN# ',
                        LANG_ZUM_PIEZO_BUZZER_TONE: 'Тон',
                        LANG_ZUM_PIEZO_BUZZER_DO: 'ДО',
                        LANG_ZUM_PIEZO_BUZZER_RE: 'РЕ',
                        LANG_ZUM_PIEZO_BUZZER_MI: 'МИ',
                        LANG_ZUM_PIEZO_BUZZER_FA: 'ФА',
                        LANG_ZUM_PIEZO_BUZZER_SOL: 'СОЛЬ',
                        LANG_ZUM_PIEZO_BUZZER_LA: 'ЛЯ',
                        LANG_ZUM_PIEZO_BUZZER_SI: 'СИ',
                        LANG_ZUM_PIEZO_BUZZER_DURATION: 'Продолжительность',
                        LANG_ZUM_PIEZO_BUZZER_TOOLTIP: 'Звукоизлучатель пьезоэлектрический.',
                        LANG_ZUM_PIEZO_BUZZERAV: 'Расширенный звукоизлучатель',
                        LANG_ZUM_PIEZO_BUZZERAV_PIN: 'PIN # ',
                        LANG_ZUM_PIEZO_BUZZERAV_TONE: 'Тон',
                        LANG_ZUM_PIEZO_BUZZERAV_DURATION: 'Продолжительность',
                        LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP: 'Звукоизлучатель - пьезоэлектрический элемент.',
                LANG_ZUM_DHT11_VALUE: 'Get', //to translate
                LANG_ZUM_DHT11_VALUE1: 'Temperature', //to translate
                LANG_ZUM_DHT11_VALUE2: 'Humidity', //to translate
                LANG_ZUM_DHT11_PIN: 'PIN', //to translate
                LANG_ZUM_DHT11_TOOLTIP: 'Get temperature or humidity from a DHT11, DHT21 or DHT22 sensor.', //to translate
                //motor blocks (servo and stepper):
                LANG_CATEGORY_MOTOR: 'Motors', //to translate
                        LANG_MOTOR_SERVO_CONT: 'Сервопривод непрерывного вращения',
                        LANG_MOTOR_SERVO_CONT_PIN: 'PIN# ',
                        LANG_MOTOR_SERVO_CONT_ROT: 'Вращение',
                        LANG_MOTOR_SERVO_CONT_TURN_CLOCKWISE: 'Вращаться по часовой стрелке',
                        LANG_MOTOR_SERVO_CONT_TURN_COUNTERCLOCKWISE: 'вращаться против часовой стрелки',
                        LANG_MOTOR_SERVO_CONT_STOPPED: 'Стоп',
                        LANG_MOTOR_SERVO_CONT_DELAY: 'Пауза',
                        LANG_MOTOR_SERVO_CONT_TOOLTIP: 'Сервопривод непрерывного вращения.',
                        LANG_MOTOR_SERVO_MOVE: 'Сервопривод',
                        LANG_MOTOR_SERVO_MOVE_PIN: 'PIN# ',
                        LANG_MOTOR_SERVO_MOVE_DEGREES: '° (0 ~ 180)',
                        LANG_MOTOR_SERVO_MOVE_DELAY: 'Пауза',
                        LANG_MOTOR_SERVO_MOVE_TOOLTIP: 'Повернуть вал сервопривода между 0 и 180 градусов.',
                        LANG_MOTOR_SERVO_WARNING: 'Вы не можете установить управляющий PIN сервопривода с помощью переменной.',
                LANG_MOTOR_STEPPER_MOVE: 'Stepper motor', //to translate
                LANG_MOTOR_STEPPER_MOVE_SPR: 'Steps per revolution', //to translate
                LANG_MOTOR_STEPPER_MOVE_PINS: '4 pins?', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN1: 'Pin 1', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN2: 'Pin 2', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN3: 'Pin 3', //to translate
                LANG_MOTOR_STEPPER_MOVE_PIN4: 'Pin 4', //to translate
                LANG_MOTOR_STEPPER_MOVE_SETSPEED: 'Set speed to', //to translate
                LANG_MOTOR_STEPPER_MOVE_SETSPEED_NEXT: '(rpm)', //to translate
                LANG_MOTOR_STEPPER_MOVE_STEP: 'Move motor', //to translate
                LANG_MOTOR_STEPPER_MOVE_STEP_NEXT: '(steps)', //to translate
                LANG_MOTOR_STEPPER_MOVE_TOOLTIP: 'Moves motor the number of steps. A positive steps value move in one direction, a negative value moves to the other direction.', //to translate
                LANG_MOTOR_PCA9685_DEF: 'PCA9685', //to translate
                LANG_MOTOR_PCA9685_DEF_SERVO: 'Servo', //to translate
                LANG_MOTOR_PCA9685_DEF_ADDRESS: 'Address of the component', //to translate
                LANG_MOTOR_PCA9685_DEF_TOOLTIP: 'Defines a PCA9685 connected to Arduino over I2C.', //to translate
                LANG_MOTOR_PCA9685_SET_PWM: 'PCA9685 Move servo', //to translate
                LANG_MOTOR_PCA9685_SET_PWM_ANGLE: 'angle', //to translate
                LANG_MOTOR_PCA9685_SET_PWM_TOOLTIP: 'Moves servo connected to PCA9685 the specified angle in degrees.', //to translate
                //interrupt blocks :
                LANG_CATEGORY_INTERRUPTS: 'Interrupts', // To translate
                LANG_INTERRUPTS_STATE: 'Set interrupts state to ', // To translate
                LANG_INTERRUPTS_STATE_ENABLED: 'ENABLED', // To translate
                LANG_INTERRUPTS_STATE_DISABLED: 'DISABLED', // To translate
                LANG_INTERRUPTS_STATE_TOOLTIP: 'Enable or Disable interrupts. Some functions will not work while interrupts are disabled. Use only for particularly critical sections of code.', // To translate
                LANG_INTERRUPTS_ATTACH: 'Attach procedure ', // To translate
                LANG_INTERRUPTS_ATTACH_PARAM2: 'in mode ', // To translate
                LANG_INTERRUPTS_ATTACH_PARAM3: 'with interrupt of digital pin', // To translate
                LANG_INTERRUPTS_ATTACH_LOW: 'LOW', // To translate
                LANG_INTERRUPTS_ATTACH_CHANGE: 'CHANGE', // To translate
                LANG_INTERRUPTS_ATTACH_RISING: 'RISING', // To translate
                LANG_INTERRUPTS_ATTACH_FALLING: 'FALLING', // To translate
                LANG_INTERRUPTS_ATTACH_PROCEDURE: 'func_without_return', // To translate
                LANG_INTERRUPTS_ATTACH_TOOLTIP: 'Set the procedure to be executed when an interrupt is raised in the specified pin.', // To translate
                LANG_INTERRUPTS_DETACH: 'Detach interrupt on digital pin', // To translate
                LANG_INTERRUPTS_DETACH_TOOLTIP: 'Disables the interrupt on the pin. When the pin is activated, the procedure associated is no longer executed.', // To translate
                LANG_WIFI_CONNECT: 'Wifi:', //To translate
                LANG_WIFI_CONNECT_STATION: 'connect', //To translate
                LANG_WIFI_CONNECT_SOFTAP: 'create network', //To translate
                LANG_WIFI_CONNECT_SSID: 'SSID', //To translate
                LANG_WIFI_CONNECT_PASSWORD: 'password', //To translate
                LANG_WIFI_CONNECT_CHANNEL: 'channel', //To translate
                LANG_WIFI_CONNECT_RX_PIN: 'Rx pin', //To translate
                LANG_WIFI_CONNECT_TX_PIN: 'Tx pin', //To translate
                LANG_WIFI_CONNECT_BAUD: 'baud rate', //To translate
                LANG_WIFI_CONNECT_TOOLTIP: 'Connects or creates a wifi using a ESP8266 adapter, and returns true on success.', //To translate
                LANG_WIFI_DISCONNECT: 'Wifi:disconnect', //To translate
                LANG_WIFI_DISCONNECT_TOOLTIP: 'Disconnects from the current wifi network.', //To translate
                LANG_WIFI_CLIENT: 'Wifi:connect to server', //To translate
                LANG_WIFI_CLIENT_IP: 'IP address', //To translate
                LANG_WIFI_CLIENT_PORT: 'Port', //To translate
                LANG_WIFI_CLIENT_TOOLTIP: 'Connects to a TCP server.', //To translate
                LANG_WIFI_SERVER: 'Wifi:start server', //To translate
                LANG_WIFI_SERVER_PORT: 'Port', //To translate
                LANG_WIFI_SERVER_TOOLTIP: 'Create a TCP server to accept connections from clients.', //To translate
                LANG_WIFI_GETIP: 'Wifi:get IP address', //To translate
                LANG_WIFI_GETIP_TOOLTIP: 'Returns IP address of the adapter.', //To translate
                LANG_WIFI_SEND_SERVER: 'Wifi:send to server', //To translate
                LANG_WIFI_SEND_SERVER_DATA: 'Text', //To translate
                LANG_WIFI_SEND_SERVER_TOOLTIP: 'Send text to the TCP server.', //To translate
                LANG_WIFI_SEND_CLIENT: 'Wifi:send to client', //To translate
                LANG_WIFI_SEND_CLIENT_ID: 'ID', //To translate
                LANG_WIFI_SEND_CLIENT_DATA: 'Data', //To translate
                LANG_WIFI_SEND_CLIENT_TOOLTIP: 'Send text to specified client (ID).', //To translate
                LANG_WIFI_RECEIVE_CLIENT: 'Wifi:receive from client', //To translate
                LANG_WIFI_RECEIVE_CLIENT_TOOLTIP: 'Receives a text from client, begining with id number and a colon (:). If timeout is reached, returns an empty string.', //To translate
                LANG_WIFI_RECEIVE_SERVER: 'Wifi:receive from server', //To translate
                LANG_WIFI_RECEIVE_SERVER_TIMEOUT: 'Timeout', //To translate
                LANG_WIFI_RECEIVE_SERVER_TOOLTIP: 'Receives a string from TCP server or empty string if timeout reached.', //To translate
                LANG_WIFI_CLOSE_SERVER: 'Wifi:stop server', //To translate
                LANG_WIFI_CLOSE_SERVER_TOOLTIP: 'Shutdown TCP server.', //To translate
                LANG_WIFI_CLOSE_CLIENT: 'Wifi:stop connection', //To translate
                LANG_WIFI_CLOSE_CLIENT_TOOLTIP: 'Shutdown connection with TCP server.' //To translate
            };
            // Node
            if (typeof module !== 'undefined' && module.exports) {
                module.exports = language;
            }
            // Browser
            // if (typeof window !== 'undefined' && this.RoboBlocks && this.RoboBlocks.locales.add) {
            //     this.RoboBlocks.locales.add('es', language);
            if (typeof window !== 'undefined' && RoboBlocks && RoboBlocks.locales.add) {
                RoboBlocks.locales.add('ru', language);
            }
        }());

        // Source: src/constants.js
        /* global RoboBlocks, Blockly*/
        RoboBlocks.locales.initialize();
        RoboBlocks.variables = {};
        RoboBlocks.isVariable = function(varValue) {
            for (var i in Blockly.Variables.allVariables()) {
                if (Blockly.Variables.allVariables()[i] === varValue) {
                    return true;
                }
            }
            if (RoboBlocks.variables[varValue] !== undefined) {
                return true;
            }
            if (varValue.search('digitalRead\\(') >= 0 || varValue.search('analogRead\\(') >= 0) {
                return true;
            }
            return false;
        };

        RoboBlocks.findPinMode = function(dropdown_pin) {
            var code = '';
            dropdown_pin = dropdown_pin.split(';\n');
            for (var j in dropdown_pin) {
                if (dropdown_pin[j].search('pinMode') >= 0) {
                    code += dropdown_pin[j] + ';\n';
                } else {
                    dropdown_pin = dropdown_pin[j];
                }
            }
            return {
                'code': code,
                'pin': dropdown_pin
            };
        };

        // help URLs
        RoboBlocks.GITHUB_SRC_URL = 'https://github.com/bq/roboblocks/tree/master/src/';
        RoboBlocks.URL_LED = 'http://diwo.bq.com/programando-un-led-en-bitbloq-i/';
        RoboBlocks.URL_LDR = 'http://diwo.bq.com/el-sensor-de-luz/';
        RoboBlocks.URL_BUTTON = 'http://diwo.bq.com/programando-el-pulsador-en-bitbloq/';
        RoboBlocks.URL_BUZZER = 'http://diwo.bq.com/programando-el-zumbador-en-bitbloq/';
        RoboBlocks.URL_POTENTIOMETER = 'http://diwo.bq.com/programando-un-potenciometro-en-bitbloq/';
        RoboBlocks.URL_SENSOR = 'http://diwo.bq.com/programando-un-sensor-infrarrojo-en-bitbloq/';
        RoboBlocks.URL_CONTINUOUS_ROTATION_SERVO = 'http://diwo.bq.com/programando-un-servo-en-bitbloq/';
        RoboBlocks.URL_MOTOR = 'http://diwo.bq.com/programando-un-miniservo-en-bitbloq/';
        RoboBlocks.URL_LCD = 'http://diwo.bq.com/programando-una-pantalla-lcd-en-bitbloq/';
        RoboBlocks.URL_US = 'http://diwo.bq.com/programando-el-sensor-ultrasonido-en-bitbloq/';
        RoboBlocks.URL_BUTTONS = 'http://diwo.bq.com/programando-la-botonera-en-bitbloq/';
        RoboBlocks.URL_JOYSTICK = 'http://diwo.bq.com/programando-un-joystick-con-bitbloq/';
        RoboBlocks.URL_SERIE = 'http://diwo.bq.com/comunicacion-puerto-serie-en-windows-7/';
        RoboBlocks.URL_IF = 'http://diwo.bq.com/programando-los-bloques-de-control-el-bloque-si-ejecutar/';
        RoboBlocks.URL_SWITCH = 'http://diwo.bq.com/programando-los-bloques-de-control-el-bloque-si-switch-case/';
        RoboBlocks.URL_WHILE = 'http://diwo.bq.com/programando-los-bloques-de-control-el-bloque-mientras/';
        RoboBlocks.URL_FOR = 'http://diwo.bq.com/programando-los-bloques-de-control-el-bloque-contar/';
        RoboBlocks.URL_FLOW_STATEMENTS = 'http://diwo.bq.com/programando-los-bloques-de-control-interrumpir/';
        RoboBlocks.URL_LOGIC = 'http://diwo.bq.com/programando-los-bloques-logicos/';
        RoboBlocks.URL_MATH = 'http://diwo.bq.com/programando-los-bloques-matematicos/';
        RoboBlocks.URL_TEXT = 'http://diwo.bq.com/programando-los-bloques-de-texto/';
        RoboBlocks.URL_BT = 'http://diwo.bq.com/ejemplo-en-bitbloq-de-comunicacion-bluetooth/';
        RoboBlocks.URL_VAR = 'http://diwo.bq.com/programando-con-variables-en-bitbloq/';
        RoboBlocks.URL_PROC_NO_RET = 'http://diwo.bq.com/programando-con-funciones-en-bitbloq/';
        RoboBlocks.URL_PROC = 'http://diwo.bq.com/programando-con-funciones-en-bitbloq-2/';
        RoboBlocks.URL_PIN_FUNC = 'http://diwo.bq.com/programando-los-bloques-funciones-pin';
        RoboBlocks.URL_INTERRUPTS = 'https://drive.google.com/open?id=0B8SXZjdcc9F9ZjBVTDRtOV8wd2s';

        // RGB block colors
        RoboBlocks.LANG_COLOUR_SENSOR = '#D04141';
        RoboBlocks.LANG_COLOUR_ZUM = '#CC7B44';
        RoboBlocks.LANG_COLOUR_MOTOR = '#CECE42';
        RoboBlocks.LANG_COLOUR_LCD = '#ACCE42';
        RoboBlocks.LANG_COLOUR_CONTROL = '#44CC44';
        RoboBlocks.LANG_COLOUR_LOGIC = '#42CE91';
        RoboBlocks.LANG_COLOUR_MATH = '#42CBCE';
        RoboBlocks.LANG_COLOUR_TEXT = '#42A3CE';
        RoboBlocks.LANG_COLOUR_COMMUNICATION = '#4263CE';
        RoboBlocks.LANG_COLOUR_ADVANCED = '#9142CE';
        RoboBlocks.LANG_COLOUR_VARIABLES = '#B244CC';
        RoboBlocks.LANG_COLOUR_PROCEDURES = '#CE42B3';
        RoboBlocks.LANG_COLOUR_INTERRUPTS = '#8A603E';
        RoboBlocks.setColors = function(colorArray) {
            RoboBlocks.LANG_COLOUR_SENSOR = colorArray[0];
            RoboBlocks.LANG_COLOUR_ZUM = colorArray[1];
            RoboBlocks.LANG_COLOUR_MOTOR = colorArray[2];
            RoboBlocks.LANG_COLOUR_LCD = colorArray[3];
            RoboBlocks.LANG_COLOUR_CONTROL = colorArray[4];
            RoboBlocks.LANG_COLOUR_LOGIC = colorArray[5];
            RoboBlocks.LANG_COLOUR_MATH = colorArray[6];
            RoboBlocks.LANG_COLOUR_TEXT = colorArray[7];
            RoboBlocks.LANG_COLOUR_COMMUNICATION = colorArray[8];
            RoboBlocks.LANG_COLOUR_ADVANCED = colorArray[9];
            RoboBlocks.LANG_COLOUR_VARIABLES = colorArray[10];
            RoboBlocks.LANG_COLOUR_PROCEDURES = colorArray[11];
            RoboBlocks.LANG_COLOUR_INTERRUPTS = colorArray[12];
        };
        // Source: src/profiles.js
        /*
         * Arduino Board profiles
         */
        var profiles = {
            'arduino_uno': {
                description: 'Standard-compatible board',
                digital: [
                    ['0', '0'],
                    ['1', '1'],
                    ['2', '2'],
                    ['3', '3'],
                    ['4', '4'],
                    ['5', '5'],
                    ['6', '6'],
                    ['7', '7'],
                    ['8', '8'],
                    ['9', '9'],
                    ['10', '10'],
                    ['11', '11'],
                    ['12', '12'],
                    ['13', '13']
                ],
                bluetooth: [
                    ['1', '1'],
                    ['2', '2'],
                    ['3', '3'],
                    ['4', '4'],
                    ['5', '5'],
                    ['6', '6'],
                    ['7', '7'],
                    ['8', '8'],
                    ['9', '9'],
                    ['10', '10'],
                    ['11', '11']
                ],
                pwm: [
                    ['#3', '3'],
                    ['#5', '5'],
                    ['#6', '6'],
                    ['#9', '9'],
                    ['#10', '10'],
                    ['#11', '11']
                ],
                analog: [
                    ['A0', 'A0'],
                    ['A1', 'A1'],
                    ['A2', 'A2'],
                    ['A3', 'A3'],
                    ['A4', 'A4'],
                    ['A5', 'A5']
                ],
                serial: 9600,
            },
            'arduino_mega': {
                description: 'Mega-compatible board',
                digital: [
                    ['0', '0'],
                    ['1', '1'],
                    ['2', '2'],
                    ['3', '3'],
                    ['4', '4'],
                    ['5', '5'],
                    ['6', '6'],
                    ['7', '7'],
                    ['8', '8'],
                    ['9', '9'],
                    ['10', '10'],
                    ['11', '11'],
                    ['12', '12'],
                    ['13', '13'],
                    ['14', '14'],
                    ['15', '15'],
                    ['16', '16'],
                    ['17', '17'],
                    ['18', '18'],
                    ['19', '19'],
                    ['20', '20'],
                    ['21', '21'],
                    ['22', '22'],
                    ['23', '23'],
                    ['24', '24'],
                    ['25', '25'],
                    ['26', '26'],
                    ['27', '27'],
                    ['28', '28'],
                    ['29', '29'],
                    ['30', '30'],
                    ['31', '31'],
                    ['32', '32'],
                    ['33', '33'],
                    ['34', '34'],
                    ['35', '35'],
                    ['36', '36'],
                    ['37', '37'],
                    ['38', '38'],
                    ['39', '39'],
                    ['40', '40']
                ],
                bluetooth: [
                    ['1', '1'],
                    ['2', '2'],
                    ['3', '3'],
                    ['4', '4'],
                    ['5', '5'],
                    ['6', '6'],
                    ['7', '7'],
                    ['8', '8'],
                    ['9', '9'],
                    ['10', '10'],
                    ['11', '11']
                ],
                pwm: [
                    ['#2', '2'],
                    ['#3', '3'],
                    ['#4', '4'],
                    ['#5', '5'],
                    ['#6', '6'],
                    ['#7', '7'],
                    ['#8', '8'],
                    ['#9', '9'],
                    ['#10', '10'],
                    ['#11', '11'],
                    ['#12', '12'],
                    ['#13', '13']
                ],
                analog: [
                    ['A0', 'A0'],
                    ['A1', 'A1'],
                    ['A2', 'A2'],
                    ['A3', 'A3'],
                    ['A4', 'A4'],
                    ['A5', 'A5'],
                    ['A6', 'A6'],
                    ['A7', 'A7'],
                    ['A8', 'A8'],
                    ['A9', 'A9'],
                    ['A10', 'A10'],
                    ['A11', 'A11'],
                    ['A12', 'A12'],
                    ['A13', 'A13'],
                    ['A14', 'A14'],
                    ['A15', 'A15']
                ],
                serial: 9600,
            },
            'arduino_nano': {
                description: 'Arduino Nano board',
                digital: [
                    ['0', '0'],
                    ['1', '1'],
                    ['2', '2'],
                    ['3', '3'],
                    ['4', '4'],
                    ['5', '5'],
                    ['6', '6'],
                    ['7', '7'],
                    ['8', '8'],
                    ['9', '9'],
                    ['10', '10'],
                    ['11', '11'],
                    ['12', '12'],
                    ['13', '13']
                ],
                bluetooth: [
                    ['1', '1'],
                    ['2', '2'],
                    ['3', '3'],
                    ['4', '4'],
                    ['5', '5'],
                    ['6', '6'],
                    ['7', '7'],
                    ['8', '8'],
                    ['9', '9'],
                    ['10', '10'],
                    ['11', '11']
                ],
                pwm: [
                    ['#3', '3'],
                    ['#5', '5'],
                    ['#6', '6'],
                    ['#9', '9'],
                    ['#10', '10'],
                    ['#11', '11']
                ],
                analog: [
                    ['A0', 'A0'],
                    ['A1', 'A1'],
                    ['A2', 'A2'],
                    ['A3', 'A3'],
                    ['A4', 'A4'],
                    ['A5', 'A5'],
                    ['A6', 'A6'],
                    ['A7', 'A7']
                ],
                serial: 9600,
            },
        };


        // Set default profile to arduino standard-compatible board
        var selected_arduino_board = window.selectedArduinoBoard || 'arduino_uno';
        profiles['default'] = profiles[selected_arduino_board];


        // Source: src/blockly.extensions.js
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
                    toolbox += '<category id="' + block + '" name="' + block + '">';
                    blocks[block].forEach(categoryItem);
                    toolbox += '</category>';
                }

            }
            toolbox += '</xml>';

            return toolbox;
        };

        // Source: tmp/jst.js
        // Source: tmp/jst.js
        this["JST"] = this["JST"] || {};

        this["JST"]["advanced_map"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'map(' +
                    ((__t = (num)) == null ? '' : __t) +
                    ',' +
                    ((__t = (from_min)) == null ? '' : __t) +
                    ',' +
                    ((__t = (from_max)) == null ? '' : __t) +
                    ',' +
                    ((__t = (to_min)) == null ? '' : __t) +
                    ',' +
                    ((__t = (to_max)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["base_delay"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'delay(' +
                    ((__t = (delay_time)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["base_delay_microseconds"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'delayMicroseconds(' +
                    ((__t = (delay_time)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["base_map"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'map(' +
                    ((__t = (value_num)) == null ? '' : __t) +
                    ',0,1023,0,' +
                    ((__t = (value_dmax)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["base_micros"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'micros()\n';

            }
            return __p
        };

        this["JST"]["base_millis"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'millis()\n';

            }
            return __p
        };

        this["JST"]["bq_bat"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Distance(' +
                    ((__t = (trigger_pin)) == null ? '' : __t) +
                    ',' +
                    ((__t = (echo_pin)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["bq_bat_definitions_distance"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'long Distance(int trigger_pin, int echo_pin)\n{\n  long microseconds = TP_init(trigger_pin, echo_pin);\n  long distance;\n  distance = microseconds/29/2;\n  if (distance == 0){\n    distance = 999;\n  }\n  return distance;\n}\n';

            }
            return __p
        };

        this["JST"]["bq_bat_definitions_tp_init"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '//bqBAT\nlong TP_init(int trigger_pin, int echo_pin)\n{\n  digitalWrite(trigger_pin, LOW);\n  delayMicroseconds(2);\n  digitalWrite(trigger_pin, HIGH);\n  delayMicroseconds(10);\n  digitalWrite(trigger_pin, LOW);\n  long microseconds = pulseIn(echo_pin ,HIGH);\n  return microseconds;\n}\n';

            }
            return __p
        };

        this["JST"]["bq_bat_setups_echo"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode( ' +
                    ((__t = (echo_pin)) == null ? '' : __t) +
                    ' , INPUT );\n';

            }
            return __p
        };

        this["JST"]["bq_bat_setups_trigger"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode( ' +
                    ((__t = (trigger_pin)) == null ? '' : __t) +
                    ' , OUTPUT );\n';

            }
            return __p
        };

        this["JST"]["bq_bluetooth_def_definitions"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '#include <SoftwareSerial.h>';

            }
            return __p
        };

        this["JST"]["bq_bluetooth_def_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    ',INPUT);\n  pinMode(' +
                    ((__t = (NextPIN)) == null ? '' : __t) +
                    ', OUTPUT);\n  blueToothSerial.begin(' +
                    ((__t = (baud_rate)) == null ? '' : __t) +
                    ');\n  blueToothSerial.flush();\n';

            }
            return __p
        };

        this["JST"]["bq_bluetooth_receive"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'blueToothSerial.read()';

            }
            return __p
        };

        this["JST"]["bq_bluetooth_send"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'blueToothSerial.write( ' +
                    ((__t = (statement_send)) == null ? '' : __t) +
                    ' );\n';

            }
            return __p
        };

        this["JST"]["bt_serial_available"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'if (blueToothSerial.available()>0){\n' +
                    ((__t = (branch)) == null ? '' : __t) +
                    '\n}\n';

            }
            return __p
        };

        this["JST"]["controls_doWhile"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'do {\n' +
                    ((__t = (branch)) == null ? '' : __t) +
                    '\n} while (' +
                    ((__t = (argument0)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["controls_execute"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (content)) == null ? '' : __t) +
                    '\n';

            }
            return __p
        };

        this["JST"]["controls_else"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'else {\n' +
                    ((__t = (branch)) == null ? '' : __t) +
                    ' }';

            }
            return __p
        };

        this["JST"]["controls_elseif"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'else if (' +
                    ((__t = (argument)) == null ? '' : __t) +
                    ') {\n' +
                    ((__t = (branch)) == null ? '' : __t) +
                    ' }';

            }
            return __p
        };

        this["JST"]["controls_if"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'if (' +
                    ((__t = (argument)) == null ? '' : __t) +
                    ') {\n' +
                    ((__t = (branch)) == null ? '' : __t) +
                    ' }';

            }
            return __p
        };

        this["JST"]["controls_setupLoop"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (branch)) == null ? '' : __t) +
                    '\n';

            }
            return __p
        };

        this["JST"]["controls_whileUntil"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'while (' +
                    ((__t = (argument0)) == null ? '' : __t) +
                    ') {\n' +
                    ((__t = (branch)) == null ? '' : __t) +
                    ' }\n';

            }
            return __p
        };

        this["JST"]["inout_analog_read"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'analogRead(' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["inout_analog_read_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    ',INPUT);\n';

            }
            return __p
        };

        this["JST"]["inout_analog_write"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'analogWrite(' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    ',' +
                    ((__t = (value_num)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["inout_analog_write_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    ',OUTPUT);\n';

            }
            return __p
        };

        this["JST"]["inout_builtin_led"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'digitalWrite(13,' +
                    ((__t = (dropdown_stat)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["inout_builtin_led_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(13,OUTPUT);\n';

            }
            return __p
        };

        this["JST"]["inout_digital_read"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'digitalRead(' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["inout_digital_read_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    ',INPUT);\n';

            }
            return __p
        };

        this["JST"]["inout_digital_write"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'digitalWrite(' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    ',' +
                    ((__t = (dropdown_stat)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["inout_digital_write_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    ',OUTPUT);\n';

            }
            return __p
        };

        this["JST"]["inout_digital_write_var"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'digitalWrite(' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    ',' +
                    ((__t = (value_num)) == null ? '' : __t) +
                    ' % 2);\n';

            }
            return __p
        };

        this["JST"]["inout_digital_write_var_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    ',OUTPUT);\n';

            }
            return __p
        };

        this["JST"]["inout_highlow"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (bool_value)) == null ? '' : __t);

            }
            return __p
        };

        this["JST"]["inout_pulsein"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pulseIn(' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    ',' +
                    ((__t = (dropdown_mode)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["inout_pulsein_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    ',INPUT);\n';

            }
            return __p
        };

        this["JST"]["interrupt_attach"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'attachInterrupt(digitalPinToInterrupt(' +
                    ((__t = (block_pin)) == null ? '' : __t) +
                    '),' +
                    ((__t = (funcName)) == null ? '' : __t) +
                    ',' +
                    ((__t = (mode)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["interrupt_detach"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'detachInterrupt(digitalPinToInterrupt(' +
                    ((__t = (block_pin)) == null ? '' : __t) +
                    '));\n';

            }
            return __p
        };

        this["JST"]["interrupt_state_disabled"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'noInterrupts();\n';

            }
            return __p
        };

        this["JST"]["interrupt_state_enabled"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'interrupts();\n';

            }
            return __p
        };

        this["JST"]["ir_read"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'readFromIrReceiver()';

            }
            return __p
        };

        this["JST"]["ir_read_declare"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'IRrecv irrecv(' +
                    ((__t = (ir_pin)) == null ? '' : __t) +
                    ');\ndecode_results results;\n';

            }
            return __p
        };

        this["JST"]["ir_read_definitions"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '#include <IRremote.h>';

            }
            return __p
        };

        this["JST"]["ir_read_function"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'long readFromIrReceiver() {\n  if(irrecv.decode(&results)) {\n    irrecv.resume();\n    return results.value;\n  } else return 0;\n}\n';

            }
            return __p
        };

        this["JST"]["ir_read_function_tp_init"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '//bqBAT\nlong TP_init(int trigger_pin, int echo_pin)\n{\n  digitalWrite(trigger_pin, LOW);\n  delayMicroseconds(2);\n  digitalWrite(trigger_pin, HIGH);\n  delayMicroseconds(10);\n  digitalWrite(trigger_pin, LOW);\n  long microseconds = pulseIn(echo_pin ,HIGH);\n  return microseconds;\n}\n';

            }
            return __p
        };

        this["JST"]["ir_read_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'irrecv.enableIRIn();\n';

            }
            return __p
        };

        this["JST"]["ir_read_setups_t"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode( ' +
                    ((__t = (trigger_pin)) == null ? '' : __t) +
                    ' , OUTPUT );\n';

            }
            return __p
        };

        this["JST"]["lcd_clear"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'lcd.clear();\n';

            }
            return __p
        };

        this["JST"]["lcd_def_declare"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'LiquidCrystal lcd(' +
                    ((__t = (pin1)) == null ? '' : __t) +
                    ', ' +
                    ((__t = (pin2)) == null ? '' : __t) +
                    ', ' +
                    ((__t = (pin3)) == null ? '' : __t) +
                    ', ' +
                    ((__t = (pin4)) == null ? '' : __t) +
                    ', ' +
                    ((__t = (pin5)) == null ? '' : __t) +
                    ', ' +
                    ((__t = (pin6)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["lcd_def_declare_i2c"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'LiquidCrystal_I2C lcd(' +
                    ((__t = (address)) == null ? '' : __t) +
                    ', 16, 2);\n';

            }
            return __p
        };

        this["JST"]["lcd_def_definitions"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '#include <LiquidCrystal.h>';

            }
            return __p
        };

        this["JST"]["lcd_def_definitions_i2c"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '#include <Wire.h>\n#include <LiquidCrystal_I2C.h>';

            }
            return __p
        };

        this["JST"]["lcd_def_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'lcd.begin(16, 2);\nlcd.clear();\n';

            }
            return __p
        };

        this["JST"]["lcd_def_setups_i2c"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'lcd.begin();\nlcd.clear();\n';

            }
            return __p
        };

        this["JST"]["lcd_display"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'lcd.display();\n';

            }
            return __p
        };

        this["JST"]["lcd_home"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'lcd.home();\n';

            }
            return __p
        };

        this["JST"]["lcd_nodisplay"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'lcd.noDisplay();\n';

            }
            return __p
        };

        this["JST"]["lcd_print"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'lcd.print(' +
                    ((__t = (val)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["lcd_print_pos"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'lcd.setCursor(' +
                    ((__t = (ycoor)) == null ? '' : __t) +
                    ',' +
                    ((__t = (xcoor)) == null ? '' : __t) +
                    ');\nlcd.print(' +
                    ((__t = (val)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["lcd_scrolldisplayleft"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'lcd.scrollDisplayLeft();\n';

            }
            return __p
        };

        this["JST"]["lcd_scrolldisplayright"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'lcd.scrollDisplayRight();\n';

            }
            return __p
        };

        this["JST"]["lcd_setBacklight"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'lcd.setBacklight(' +
                    ((__t = (state)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["logic_compare"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (argument0)) == null ? '' : __t) +
                    ' ' +
                    ((__t = (operator)) == null ? '' : __t) +
                    ' ' +
                    ((__t = (argument1)) == null ? '' : __t);

            }
            return __p
        };

        this["JST"]["logic_negate"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '!' +
                    ((__t = (argument0)) == null ? '' : __t);

            }
            return __p
        };

        this["JST"]["logic_operation"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (argument0)) == null ? '' : __t) +
                    ' ' +
                    ((__t = (operator)) == null ? '' : __t) +
                    ' ' +
                    ((__t = (argument1)) == null ? '' : __t);

            }
            return __p
        };

        this["JST"]["math_arithmetic"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (argument0)) == null ? '' : __t) +
                    '' +
                    ((__t = (operator)) == null ? '' : __t) +
                    '' +
                    ((__t = (argument1)) == null ? '' : __t);

            }
            return __p
        };

        this["JST"]["math_arithmetic_pow"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pow(' +
                    ((__t = (argument0)) == null ? '' : __t) +
                    ',' +
                    ((__t = (argument1)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["math_max"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'max(' +
                    ((__t = (argument0)) == null ? '' : __t) +
                    ',' +
                    ((__t = (argument1)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["math_min"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'min(' +
                    ((__t = (argument0)) == null ? '' : __t) +
                    ',' +
                    ((__t = (argument1)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["math_modulo"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (argument0)) == null ? '' : __t) +
                    '%' +
                    ((__t = (argument1)) == null ? '' : __t);

            }
            return __p
        };

        this["JST"]["math_pow"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pow(' +
                    ((__t = (argument0)) == null ? '' : __t) +
                    ',' +
                    ((__t = (argument1)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["math_random"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'random(' +
                    ((__t = (value_num)) == null ? '' : __t) +
                    ',' +
                    ((__t = (value_dmax)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["math_random_seed"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'randomSeed(' +
                    ((__t = (seed_num)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["pca9685_def_declare"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Adafruit_PWMServoDriver pca9685=Adafruit_PWMServoDriver(' +
                    ((__t = (address)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["pca9685_def_definitions"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '#include <Adafruit_PWMServoDriver.h>\n#define PCA9685_SERVO_POS0 ' +
                    ((__t = (servo_pos0)) == null ? '' : __t) +
                    '\n#define PCA9685_SERVO_POS180 ' +
                    ((__t = (servo_pos180)) == null ? '' : __t);

            }
            return __p
        };

        this["JST"]["pca9685_def_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pca9685.begin();\npca9685.setPWMFreq(' +
                    ((__t = (servo_freq)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["pca9685_set_pwm"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pca9685.setPWM(' +
                    ((__t = (servo_num)) == null ? '' : __t) +
                    ',map(' +
                    ((__t = (servo_angle)) == null ? '' : __t) +
                    ',0,180,PCA9685_SERVO_POS0,PCA9685_SERVO_POS180));';

            }
            return __p
        };

        this["JST"]["procedures_callnoreturn"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (funcName)) == null ? '' : __t) +
                    '(' +
                    ((__t = (funcArgs)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["procedures_callreturn"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (funcName)) == null ? '' : __t) +
                    '(' +
                    ((__t = (funcArgs)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["procedures_defnoreturn"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (returnType)) == null ? '' : __t) +
                    ' ' +
                    ((__t = (funcName)) == null ? '' : __t) +
                    ' (' +
                    ((__t = (args)) == null ? '' : __t) +
                    ') {\n' +
                    ((__t = (branch)) == null ? '' : __t) +
                    ' }\n';

            }
            return __p
        };

        this["JST"]["procedures_defreturn"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (returnType)) == null ? '' : __t) +
                    ' ' +
                    ((__t = (funcName)) == null ? '' : __t) +
                    ' (' +
                    ((__t = (args)) == null ? '' : __t) +
                    ') {\n' +
                    ((__t = (branch)) == null ? '' : __t) +
                    '\n' +
                    ((__t = (returnValue)) == null ? '' : __t) +
                    ' }\n';

            }
            return __p
        };

        this["JST"]["serial_available"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'if (Serial.available()>0){\n' +
                    ((__t = (branch)) == null ? '' : __t) +
                    '\n}\n';

            }
            return __p
        };

        this["JST"]["serial_parseint_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Serial.begin(' +
                    ((__t = (bitrate)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["serial_print"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Serial.print(' +
                    ((__t = (content)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["serial_print_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Serial.begin(' +
                    ((__t = (bitrate)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["serial_print_format"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Serial.print(' +
                    ((__t = (content)) == null ? '' : __t) +
                    ',' +
                    ((__t = (format)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["serial_print_format_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Serial.begin(' +
                    ((__t = (bitrate)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["serial_println"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Serial.println(' +
                    ((__t = (content)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["serial_println_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Serial.begin(' +
                    ((__t = (bitrate)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["serial_println_format"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Serial.println(' +
                    ((__t = (content)) == null ? '' : __t) +
                    ',' +
                    ((__t = (format)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["serial_println_format_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Serial.begin(' +
                    ((__t = (bitrate)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["serial_read"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Serial.read()';

            }
            return __p
        };

        this["JST"]["serial_read_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Serial.begin(' +
                    ((__t = (bitrate)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["serial_readstring"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Serial.readString()\n';

            }
            return __p
        };

        this["JST"]["serial_readstring_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Serial.begin(' +
                    ((__t = (bitrate)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["servo_cont"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'servos[' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    '].write(' +
                    ((__t = (value_degree)) == null ? '' : __t) +
                    ');\ndelay(' +
                    ((__t = (delay_time)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["servo_cont_definitions_include"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '#include <Servo.h>\n\nServo servos[13];';

            }
            return __p
        };

        this["JST"]["servo_cont_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'servos[' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    '].attach(' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["servo_move"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'servos[' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    '].write(' +
                    ((__t = (value_degree)) == null ? '' : __t) +
                    ');\ndelay(' +
                    ((__t = (delay_time)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["servo_move_definitions_include"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '#include <Servo.h>\n\nServo servos[13];';

            }
            return __p
        };

        this["JST"]["servo_move_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'servos[' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    '].attach(' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["stepper_move"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'steppers[' +
                    ((__t = (pin1)) == null ? '' : __t) +
                    ']->setSpeed(' +
                    ((__t = (value_speed)) == null ? '' : __t) +
                    ');\nsteppers[' +
                    ((__t = (pin1)) == null ? '' : __t) +
                    ']->step(' +
                    ((__t = (value_steps)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["stepper_move_definitions_include"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '#include <Stepper.h>\n\nStepper *steppers[13];';

            }
            return __p
        };

        this["JST"]["stepper_move_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'steppers[' +
                    ((__t = (pin1)) == null ? '' : __t) +
                    ']=new Stepper(' +
                    ((__t = (spr)) == null ? '' : __t) +
                    ',' +
                    ((__t = (pin1)) == null ? '' : __t) +
                    ',' +
                    ((__t = (pin2)) == null ? '' : __t) +
                    ',' +
                    ((__t = (pin3)) == null ? '' : __t) +
                    ',' +
                    ((__t = (pin4)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["text_char_special"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '\'' +
                    ((__t = (char)) == null ? '' : __t) +
                    '\'';

            }
            return __p
        };

        this["JST"]["text_charat"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (string1)) == null ? '' : __t) +
                    '.charAt(' +
                    ((__t = (position)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["text_comment_definitions"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '//' +
                    ((__t = (argument0)) == null ? '' : __t);

            }
            return __p
        };

        this["JST"]["text_equalsIgnoreCase"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (string1)) == null ? '' : __t) +
                    '.equalsIgnoreCase(' +
                    ((__t = (string2)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["text_length"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (argument0)) == null ? '' : __t) +
                    '.length()';

            }
            return __p
        };

        this["JST"]["text_substring"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (string1)) == null ? '' : __t) +
                    '.substring(' +
                    ((__t = (from)) == null ? '' : __t) +
                    ',' +
                    ((__t = (to)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["variables_set"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (varName)) == null ? '' : __t) +
                    '=' +
                    ((__t = (varValue)) == null ? '' : __t) +
                    ';\n';

            }
            return __p
        };

        this["JST"]["wifi_client"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'wifi.createTCP(' +
                    ((__t = (ip_address)) == null ? '' : __t) +
                    ',' +
                    ((__t = (port)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["wifi_client_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'wifi.disableMUX();\n';

            }
            return __p
        };

        this["JST"]["wifi_close_client"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'wifi.releaseTCP();\n';

            }
            return __p
        };

        this["JST"]["wifi_close_server"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'wifi.stopTCPServer();\n';

            }
            return __p
        };

        this["JST"]["wifi_connect"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'wifi.joinAP(' +
                    ((__t = (ssid)) == null ? '' : __t) +
                    ',' +
                    ((__t = (password)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["wifi_connect_declare"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'ESP8266 wifi(' +
                    ((__t = (serial_port)) == null ? '' : __t) +
                    ',' +
                    ((__t = (baud_rate)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["wifi_connect_declare_software"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'SoftwareSerial serialwifi(' +
                    ((__t = (rx_pin)) == null ? '' : __t) +
                    ',' +
                    ((__t = (tx_pin)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["wifi_connect_definitions"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '#include <ESP8266' +
                    ((__t = (connection_type)) == null ? '' : __t) +
                    '.h>\n#define VERSION_18\n';

            }
            return __p
        };

        this["JST"]["wifi_connect_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (serial_port)) == null ? '' : __t) +
                    '.begin(' +
                    ((__t = (baud_rate)) == null ? '' : __t) +
                    ');\nwifi.restart();\nwifi.kick();\nwifi.setOprToStation();';

            }
            return __p
        };

        this["JST"]["wifi_create"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'wifi.setSoftAPParam(' +
                    ((__t = (ssid)) == null ? '' : __t) +
                    ',' +
                    ((__t = (password)) == null ? '' : __t) +
                    ',' +
                    ((__t = (channel)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["wifi_create_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    ((__t = (serial_port)) == null ? '' : __t) +
                    '.begin(' +
                    ((__t = (baud_rate)) == null ? '' : __t) +
                    ');\nwifi.restart();\nwifi.kick();\nwifi.setOprToSoftAP();';

            }
            return __p
        };

        this["JST"]["wifi_disconnect"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'wifi.leaveAP();\n';

            }
            return __p
        };

        this["JST"]["wifi_getip"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'wifi_getIPAddress()';

            }
            return __p
        };

        this["JST"]["wifi_getip_definitions_getipaddress"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'String wifi_getIPAddress()\n{ \n  String resul=wifi.getLocalIP();\n  if(resul.length()>21) { \n    resul=resul.substring(14);\n    resul=resul.substring(0,resul.indexOf(\'\\"\'));\n  }\n  return resul;\n}\n';

            }
            return __p
        };

        this["JST"]["wifi_receive_client"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'wifi_receiveFromClient()';

            }
            return __p
        };

        this["JST"]["wifi_receive_client_declare"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'String wifi_receiveFromClient()\n{\n  String cad="";\n  uint8_t id,palabra[100];\n  uint32_t tam;\n  uint32_t num=wifi.recv(&id,palabra,&tam,' +
                    ((__t = (timeout)) == null ? '' : __t) +
                    ');\n  if(num>0) {\n    cad=String((int)id)+":";\n    for(int i=0;i<num;i++) cad+=(char)palabra[i];\n    return cad;\n  } else return "";\n}\n';

            }
            return __p
        };

        this["JST"]["wifi_receive_server"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'wifi_receiveFromServer()';

            }
            return __p
        };

        this["JST"]["wifi_receive_server_declare"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'String wifi_receiveFromServer()\n{\n  char palabra[100];\n  uint32_t tam;\n  uint32_t num=wifi.recv(palabra,&tam,' +
                    ((__t = (timeout)) == null ? '' : __t) +
                    ');\n  if(num>0) {\n    return String(palabra);\n  } else return "";\n}\n';

            }
            return __p
        };

        this["JST"]["wifi_send_client"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'wifi_enviarCliente(' +
                    ((__t = (id_client)) == null ? '' : __t) +
                    ',' +
                    ((__t = (data)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["wifi_send_client_declare"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'bool wifi_enviarCliente(int id,String s)\n{\n  int tam=s.length();\n  char palabra[tam];\n  s.toCharArray(palabra,tam);\n  return wifi.send((uint8_t)id,palabra,tam);\n}\n';

            }
            return __p
        };

        this["JST"]["wifi_send_server"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'wifi_enviarServidor(' +
                    ((__t = (data)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["wifi_send_server_declare_function"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'bool wifi_enviarServidor(String s)\n{\n  int i,tam=s.length();\n  char palabra[tam];\n  for(i=0;i<tam;i++) palabra[i]=s.charAt(i);\n  palabra[i]=0;\n  return wifi.send(palabra,tam);\n}\n';

            }
            return __p
        };

        this["JST"]["wifi_server"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'wifi.startServer(' +
                    ((__t = (port)) == null ? '' : __t) +
                    ')';

            }
            return __p
        };

        this["JST"]["wifi_server_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'wifi.enableMUX();\n';

            }
            return __p
        };

        this["JST"]["zum_dht11"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'dht_' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    '.read' +
                    ((__t = (value_type)) == null ? '' : __t) +
                    '()';

            }
            return __p
        };

        this["JST"]["zum_dht11_declare"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'DHT dht_' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    '(' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    ', ' +
                    ((__t = (sensor_type)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["zum_dht11_definitions"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '#include <DHT.h>';

            }
            return __p
        };

        this["JST"]["zum_dht11_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'dht_' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    '.begin();\n';

            }
            return __p
        };

        this["JST"]["zum_piezo_buzzer"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'tone(' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    ',' +
                    ((__t = (dropdown_stat)) == null ? '' : __t) +
                    ',' +
                    ((__t = (delay_time)) == null ? '' : __t) +
                    ');\ndelay(' +
                    ((__t = (delay_time)) == null ? '' : __t) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["zum_piezo_buzzerav"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'tone(' +
                    ((__t = (dropdown_pin)) == null ? '' : __t) +
                    ',' +
                    ((__t = (Buzztone)) == null ? '' : __t) +
                    ',' +
                    ((__t = (delay_time)) == null ? '' : __t) +
                    ');\ndelay(' +
                    ((__t = (delay_time)) == null ? '' : __t) +
                    ');\n\n';

            }
            return __p
        };
        var JST = this.JST;

        // Source: src/blocks/advanced_map/advanced_map.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * advanced_map code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.advanced_map = function() {
            var num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE);
            var from_min = Blockly.Arduino.valueToCode(this, 'FROM_MIN', Blockly.Arduino.ORDER_NONE);
            var from_max = Blockly.Arduino.valueToCode(this, 'FROM_MAX', Blockly.Arduino.ORDER_NONE);
            var to_min = Blockly.Arduino.valueToCode(this, 'TO_MIN', Blockly.Arduino.ORDER_NONE);
            var to_max = Blockly.Arduino.valueToCode(this, 'TO_MAX', Blockly.Arduino.ORDER_NONE);

            var code = '';
            var a = RoboBlocks.findPinMode(num);
            code += a['code'];
            num = a['pin'];

            a = RoboBlocks.findPinMode(from_min);
            code += a['code'];
            from_min = a['pin'];

            a = RoboBlocks.findPinMode(from_max);
            code += a['code'];
            from_max = a['pin'];

            a = RoboBlocks.findPinMode(to_min);
            code += a['code'];
            to_min = a['pin'];

            a = RoboBlocks.findPinMode(to_max);
            code += a['code'];
            to_max = a['pin'];


            code += JST['advanced_map']({
                'num': num,
                'from_min': from_min,
                'from_max': from_max,
                'to_min': to_min,
                'to_max': to_max
            });
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * advanced_map block definition
         * @type {Object}
         */
        Blockly.Blocks.advanced_map = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_MATH'),
            helpUrl: RoboBlocks.URL_MATH,
            /**
             * advanced_map initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_MATH);
                this.appendValueInput('NUM', Number)
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_ADVANCED_MAP_MAP'))
                    .setCheck(Number);
                this.appendValueInput('FROM_MIN', Number)
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_ADVANCED_MAP_FROM'))
                    .setCheck(Number);
                this.appendValueInput('FROM_MAX', Number)
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_ADVANCED_MAP_HYPHEN'))
                    .setCheck(Number);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_ADVANCED_MAP_BRACKET'));
                this.appendValueInput('TO_MIN', Number)
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_ADVANCED_MAP_TO'))
                    .setCheck(Number);
                this.appendValueInput('TO_MAX', Number)
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_ADVANCED_MAP_HYPHEN'))
                    .setCheck(Number);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_ADVANCED_MAP_BRACKET'));
                this.setInputsInline(true);
                this.setOutput(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_MATH_ADVANCED_MAP_TOOLTIP'));
            }
        };

        // Source: src/blocks/array_get/array_get.js
        /* global Blockly, RoboBlocks */
        /* jshint sub:true */
        /**
         * array_get code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.array_get = function() {
            // Numeric value.
            var variable = this.getFieldValue('VAR');
            var index = this.getFieldValue('INDEX');
            var code = variable + '[' + index + ']';
            // -4.abs() returns -4 in Dart due to strange order of operation choices.
            // -4 is actually an operator and a number.  Reflect this in the order.
            // var order = code < 0 ? Blockly.Arduino.ORDER_UNARY_PREFIX : Blockly.Arduino.ORDER_ATOMIC;
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        Blockly.Blocks.array_get = {
            // Numeric value.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_VARIABLES'),
            helpUrl: RoboBlocks.URL_VAR,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
                this.appendDummyInput('DUMMY').appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_GET')).appendField(new Blockly.FieldVariable(' '), 'VAR');
                // .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');
                this.appendDummyInput('DUMMY2').appendField(RoboBlocks.locales.getKey('LANG_ARRAY_GET_BRACKET1')).appendField(new Blockly.FieldTextInput('0', Blockly.Blocks.array_get.validator), 'INDEX').appendField(RoboBlocks.locales.getKey('LANG_ARRAY_GET_BRACKET2'));
                this.setOutput(true, Number);
                this.setInputsInline(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ARRAY_GET_TOOLTIP'));
            },
            getVariables: function() {
                var variables = Blockly.Variables.allVariables();
                var dropdown = [];
                if (variables.length > 0) {
                    for (var i in variables) {
                        dropdown.push([variables[i], variables[i]]);
                    }
                } else {
                    dropdown.push(['', '']);
                }
                return dropdown;
            },
            onchange: function() {
                if (!this.workspace) {
                    // Block has been deleted.
                    return;
                }
                this.last_variable = this.getFieldValue('VAR');
                if (!this.last_variables) {
                    this.last_variables = Blockly.Variables.allVariables();
                }
                var variables = Blockly.Variables.allVariables();
                for (var i in variables) {
                    if (Blockly.Variables.allVariables()[i] !== this.last_variables[i]) {
                        try {
                            this.removeInput('DUMMY');
                            this.removeInput('DUMMY2');
                        } catch (e) {}
                        this.appendDummyInput('DUMMY').appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_GET')).appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');
                        this.appendDummyInput('DUMMY2').appendField(RoboBlocks.locales.getKey('LANG_ARRAY_GET_BRACKET1')).appendField(new Blockly.FieldTextInput('0', Blockly.Blocks.array_get.validator), 'INDEX').appendField(RoboBlocks.locales.getKey('LANG_ARRAY_GET_BRACKET2'));
                        this.setFieldValue(this.last_variable, 'VAR');
                        this.last_variables = Blockly.Variables.allVariables();
                    }
                }
                try {
                    if (!this.exists()) {
                        this.setWarningText(RoboBlocks.locales.getKey('LANG_VARIABLES_CALL_WITHOUT_DEFINITION'));
                    } else {
                        this.setWarningText(null);
                    }
                } catch (e) {}
            },
            renameVar: function(oldName, newName) {
                if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
                    this.setTitleValue(newName, 'VAR');
                }
            },
            exists: function() {
                if (this.getFieldValue('VAR')) {
                    for (var i in Blockly.Variables.allVariables()) {
                        if (Blockly.Variables.allVariables()[i] === this.getFieldValue('VAR')) {
                            return true;
                        }
                    }
                }
                return false;
            }
        };
        Blockly.Blocks.array_get.validator = function(text) {
            // Ensure that only a number may be entered.
            // TODO: Handle cases like 'o', 'ten', '1,234', '3,14', etc.
            var n = window.parseFloat(text || 0);
            return window.isNaN(n) ? null : String(n);
        };
        // Source: src/blocks/base_delay/base_delay.js
        /* global Blockly, JST, RoboBlocks */

        //register with blockly arduino
        Blockly.Arduino.base_delay = function() {
            var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC);
            var code = '';
            var a = RoboBlocks.findPinMode(delay_time);
            code += a['code'];
            delay_time = a['pin'];

            code += JST['base_delay']({
                'delay_time': delay_time
            });
            return code;
        };

        Blockly.Blocks.base_delay = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
            helpUrl: RoboBlocks.URL_LED,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendValueInput('DELAY_TIME', Number)
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_BASE_DELAY_WAIT'))
                    .setCheck(Number);
                this.setInputsInline(true);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_CONTROLS_BASE_DELAY_TOOLTIP'));
            }
        };

        // Source: src/blocks/base_delay_microseconds/base_delay_microseconds.js
        /* global Blockly, JST, RoboBlocks */

        //register with blockly arduino
        Blockly.Arduino.base_delay_microseconds = function() {
            var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC);
            var code = '';
            var a = RoboBlocks.findPinMode(delay_time);
            code += a['code'];
            delay_time = a['pin'];

            code += JST['base_delay_microseconds']({
                'delay_time': delay_time
            });
            return code;
        };

        Blockly.Blocks.base_delay_microseconds = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
            helpUrl: RoboBlocks.URL_LED,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendValueInput('DELAY_TIME', Number)
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_BASE_DELAY_MICROSECONDS'))
                    .setCheck(Number);
                this.setInputsInline(true);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_CONTROLS_BASE_DELAY_MICROSECONDS_TOOLTIP'));
            }
        };

        // Source: src/blocks/base_map/base_map.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * base_map code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.base_map = function() {
            var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE);
            var value_dmax = Blockly.Arduino.valueToCode(this, 'DMAX', Blockly.Arduino.ORDER_ATOMIC);

            var code = '';
            var a = RoboBlocks.findPinMode(value_num);
            code += a['code'];
            value_num = a['pin'];

            a = RoboBlocks.findPinMode(value_dmax);
            code += a['code'];
            value_dmax = a['pin'];

            code += JST['base_map']({
                'value_num': value_num,
                'value_dmax': value_dmax
            });

            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        Blockly.Blocks.base_map = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_MATH'),
            helpUrl: RoboBlocks.URL_MATH,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_MATH);
                this.appendValueInput('NUM', Number)
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_BASE_MAP'))
                    .setCheck(Number);
                this.appendValueInput('DMAX', Number)
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_BASE_MAP_VALUE_TO'))
                    .setCheck(Number);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_BASE_MAP_BRACKET'));
                this.setInputsInline(true);
                this.setOutput(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_MATH_BASE_MAP_TOOLTIP'));
            }
        };

        // Source: src/blocks/base_micros/base_micros.js
        /* global Blockly, RoboBlocks */

        //register with blockly arduino
        Blockly.Arduino.base_micros = function() {
            var code = 'micros()';
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        Blockly.Blocks.base_micros = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
            helpUrl: RoboBlocks.URL_LED,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendDummyInput('').appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_BASE_MICROS'));
                this.setOutput(true, 'Number');
                this.setTooltip(RoboBlocks.locales.getKey('LANG_CONTROLS_BASE_MICROS_TOOLTIP'));
            }
        };

        // Source: src/blocks/base_millis/base_millis.js
        /* global Blockly, RoboBlocks */

        //register with blockly arduino
        Blockly.Arduino.base_millis = function() {
            var code = 'millis()';
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        Blockly.Blocks.base_millis = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
            helpUrl: RoboBlocks.URL_LED,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendDummyInput('').appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_BASE_MILLIS'));
                this.setOutput(true, 'Number');
                this.setTooltip(RoboBlocks.locales.getKey('LANG_CONTROLS_BASE_MILLIS_TOOLTIP'));
            }
        };

        // Source: src/blocks/bq_bat/bq_bat.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * bq_bat code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.bq_bat = function() {
            var echo_pin = Blockly.Arduino.valueToCode(this, 'RED PIN', Blockly.Arduino.ORDER_ATOMIC);
            var trigger_pin = Blockly.Arduino.valueToCode(this, 'BLUE PIN', Blockly.Arduino.ORDER_ATOMIC);
            var code = '';
            var a = RoboBlocks.findPinMode(echo_pin);
            code += a['code'];
            echo_pin = a['pin'];

            a = RoboBlocks.findPinMode(trigger_pin);
            code += a['code'];
            trigger_pin = a['pin'];

            Blockly.Arduino.definitions_['define_bq_bat_tp_init'] = JST['bq_bat_definitions_tp_init']({});
            Blockly.Arduino.definitions_['define_bq_bat_distance'] = JST['bq_bat_definitions_distance']({});
            if (RoboBlocks.isVariable(echo_pin)) {
                code += JST['bq_bat_setups_echo']({
                    'echo_pin': echo_pin
                });
            } else {
                Blockly.Arduino.setups_['setup_bq_bat_' + echo_pin + trigger_pin] = JST['bq_bat_setups_echo']({
                    'echo_pin': echo_pin
                });
            }
            if (RoboBlocks.isVariable(trigger_pin)) {
                code += JST['bq_bat_setups_trigger']({
                    'trigger_pin': trigger_pin
                });
            } else {
                Blockly.Arduino.setups_['setup_bq_bat_2' + trigger_pin + echo_pin] = JST['bq_bat_setups_trigger']({
                    'trigger_pin': trigger_pin
                });
            }
            code += JST['bq_bat']({
                'trigger_pin': trigger_pin,
                'echo_pin': echo_pin
            });
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        /**
         * bq_bat block definition
         * @type {Object}
         */
        Blockly.Blocks.bq_bat = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_SENSOR'),
            tags: ['bat'],
            helpUrl: RoboBlocks.URL_US,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_SENSOR);
                this.appendDummyInput('').appendField(RoboBlocks.locales.getKey('LANG_BQ_BAT')).appendField(new Blockly.FieldImage('img/blocks/bqmod09.png', 208 * options.zoom, 140 * options.zoom));
                this.appendValueInput('RED PIN').appendField(RoboBlocks.locales.getKey('LANG_BQ_BAT_RED_PIN')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
                this.appendValueInput('BLUE PIN').appendField(RoboBlocks.locales.getKey('LANG_BQ_BAT_BLUE_PIN')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
                this.setInputsInline(false);
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_BAT_TOOLTIP'));
            }
        };
        // Source: src/blocks/bq_bluetooth_def/bq_bluetooth_def.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * bq_bluetooth_def code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.bq_bluetooth_def = function() {
            var dropdown_pin, NextPIN;
            if (this.getFieldValue('TOGGLE') === 'FALSE') {
                dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
                NextPIN = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);
                var a = RoboBlocks.findPinMode(dropdown_pin);
                Blockly.Arduino.setups_['setup_bluetooth_pinmode'] = a['code'];
                dropdown_pin = a['pin'];
                a = RoboBlocks.findPinMode(NextPIN);
                Blockly.Arduino.setups_['setup_bluetooth_pinmode2'] = a['code'];
                NextPIN = a['pin'];
            } else {
                dropdown_pin = 0;
                NextPIN = 1;
            }
            var baud_rate = Blockly.Arduino.valueToCode(this, 'BAUD_RATE', Blockly.Arduino.ORDER_ATOMIC);
            var b = RoboBlocks.findPinMode(baud_rate);
            Blockly.Arduino.setups_['setup_bluetooth_pinmode3'] = b['code'];
            baud_rate = b['pin'];

            Blockly.Arduino.definitions_['declare_var_blueToothSerial' + dropdown_pin] = 'SoftwareSerial blueToothSerial(' + dropdown_pin + ',' + NextPIN + ');\n';
            Blockly.Arduino.definitions_['define_softwareserial'] = JST['bq_bluetooth_def_definitions']({
                'dropdown_pin': dropdown_pin,
                'NextPIN': NextPIN
            });
            Blockly.Arduino.setups_['setup_bluetooth_'] = JST['bq_bluetooth_def_setups']({
                'baud_rate': baud_rate,
                'dropdown_pin': dropdown_pin,
                'NextPIN': NextPIN
            });
            return '';
        };
        /**
         * bq_bluetooth__def block definition
         * @type {Object}
         */
        Blockly.Blocks.bq_bluetooth_def = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            tags: ['bluetooth'],
            helpUrl: RoboBlocks.URL_BT,
            /**
             * bq_bluetooth_slave initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_BQ_BLUETOOTH_DEF')).appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom));
                this.appendValueInput('BAUD_RATE').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_BQ_BLUETOOTH_DEF_BAUD_RATE')).setAlign(Blockly.ALIGN_RIGHT);
                this.appendDummyInput().appendField('zum?').appendField(new Blockly.FieldCheckbox('FALSE'), 'TOGGLE').setAlign(Blockly.ALIGN_RIGHT);
                this.checkBT();
                this.last_toogle = this.getFieldValue('TOGGLE');
                this.setInputsInline(false);
                //this.setPreviousStatement(true, null);
                //this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_BLUETOOTH_DEF_TOOLTIP'));
            },
            checkBT: function() {
                if (this.getFieldValue('TOGGLE') === 'FALSE') {
                    try {
                        this.removeInput('PIN');
                        this.removeInput('PIN2');
                    } catch (e) {}
                    this.appendValueInput('PIN').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_BQ_BLUETOOTH_DEF_PIN1')).setAlign(Blockly.ALIGN_RIGHT);
                    this.appendValueInput('PIN2').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_BQ_BLUETOOTH_DEF_PIN2')).setAlign(Blockly.ALIGN_RIGHT);
                } else {
                    try {
                        this.removeInput('PIN');
                        this.removeInput('PIN2');
                    } catch (e) {}
                }
            },
            onchange: function() {
                if (this.getFieldValue('TOGGLE') !== this.last_toogle) {
                    this.checkBT();
                    this.last_toogle = this.getFieldValue('TOGGLE');
                }
            }
        };
        // Source: src/blocks/bq_bluetooth_receive/bq_bluetooth_receive.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * bq_bluetooth_slave code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.bq_bluetooth_receive = function() {
            var code = JST['bq_bluetooth_receive']({});
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * bq_bluetooth_slave block definition
         * @type {Object}
         */
        Blockly.Blocks.bq_bluetooth_receive = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            tags: ['bluetooth'],
            helpUrl: RoboBlocks.URL_BT,
            /**
             * bq_bluetooth_slave initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_BLUETOOTH_RECEIVE'));
                // .appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom));

                this.setInputsInline(false);


                this.setOutput(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP'));
            }
        };

        // Source: src/blocks/bq_bluetooth_send/bq_bluetooth_send.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * bq_bluetooth_slave code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.bq_bluetooth_send = function() {
            var statement_send = Blockly.Arduino.valueToCode(this, 'SNT', Blockly.Arduino.ORDER_ATOMIC) || '';

            var code = '';
            var a = RoboBlocks.findPinMode(statement_send);
            code += a['code'];
            statement_send = a['pin'];

            code += JST['bq_bluetooth_send']({
                'statement_send': statement_send
            });

            return code;
        };

        /**
         * bq_bluetooth_send block definition
         * @type {Object}
         */
        Blockly.Blocks.bq_bluetooth_send = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            tags: ['bluetooth'],
            helpUrl: RoboBlocks.URL_BT,
            /**
             * bq_bluetooth_send initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_BLUETOOTH_SEND'));
                // .appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom));

                this.appendValueInput('SNT')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_BLUETOOTH_SEND_SEND'));

                this.setInputsInline(false);


                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_BLUETOOTH_SEND_TOOLTIP'));
            }
        };

        // Source: src/blocks/bt_serial_available/bt_serial_available.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * serial_available code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.bt_serial_available = function() {
            var branch = Blockly.Arduino.statementToCode(this, 'DO');
            branch = branch.replace(/&quot;/g, '"');

            var code = JST['bt_serial_available']({
                'branch': branch
            });
            return code;
        };

        /**
         * serial_available block definition
         * @type {Object}
         */
        Blockly.Blocks.bt_serial_available = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            helpUrl: RoboBlocks.URL_BT,
            tags: ['bluetooth'],
            /**
             * bt_serial_available initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_BT_SERIAL_AVAILABLE'));
                this.appendStatementInput('DO')
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_REPEAT_INPUT_DO'));
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP'));
            }
        };

        // Source: src/blocks/controls_doWhile/controls_doWhile.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * controls_doWhile code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.controls_doWhile = function() {
            // Do while/until loop.
            var argument0 = Blockly.Arduino.valueToCode(this, 'WHILE', Blockly.Arduino.ORDER_NONE) || '';
            argument0 = argument0.replace(/&quot;/g, '"');
            var branch = Blockly.Arduino.statementToCode(this, 'DO');
            branch = branch.replace(/&quot;/g, '"');
            var code = '';
            if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
                branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + this.id + '\'') + branch;
                // branch = branch.substring(0, branch.length - 2);
            }
            // branch=branch.replace(/&amp;/g, '');
            if (this.getFieldValue('MODE') === 'UNTIL') {
                if (!argument0.match(/^\w+$/)) {
                    argument0 = '(' + argument0 + ')';
                }
                argument0 = '!' + argument0;
            }
            code += JST['controls_doWhile']({
                'argument0': argument0,
                'branch': branch
            });
            return code;
        };
        Blockly.Blocks.controls_doWhile = {
            // Do/while loop.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
            // helpUrl: RoboBlocks.URL_DOWHILE,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendStatementInput('DO').appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_DOWHILE_OPERATOR_DO'));
                this.appendValueInput('WHILE').setCheck(Boolean).appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_WHILEUNTIL_TITLE_REPEAT')).appendField(new Blockly.FieldDropdown([
                    [RoboBlocks.locales.getKey('LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE'), 'WHILE'],
                    [RoboBlocks.locales.getKey('LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL'), 'UNTIL']
                ]), 'MODE');
                // this.appendValueInput('WHILE').setCheck(Boolean).appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_DOWHILE_OPERATOR_WHILE'));
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_CONTROLS_DOWHILE_TOOLTIP'));
            }
        };

        // Source: src/blocks/controls_execute/controls_execute.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * controls_execute code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.controls_execute = function() {
            var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC);
            var code = '';
            content = content.replace(/^"/, '');
            content = content.replace(/"$/g, '');
            if (content.match(/^#include /)) {
                var include_code = JST['controls_execute']({
                    'content': content
                });
                if ('define_include' in Blockly.Arduino.definitions_) {
                    Blockly.Arduino.definitions_['define_include'] += include_code;
                } else {
                    Blockly.Arduino.definitions_['define_include'] = include_code;
                }
            } else {
                code += JST['controls_execute']({
                    'content': content
                });
            }
            return code;
        };
        /**
         * control_execute block definition
         * @type {Object}
         */
        Blockly.Blocks.controls_execute = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
            // helpUrl: RoboBlocks.URL_SERIE,
            /**
             * controls_execute initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendValueInput('CONTENT', String).appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_EXECUTE'));
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_CONTROLS_EXECUTE_TOOLTIP'));
            }
        };

        // Source: src/blocks/controls_flow_statements/controls_flow_statements.js
        /* global Blockly, RoboBlocks */
        /* jshint sub:true */

        /**
         * controls_flow_statements code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.controls_flow_statements = function() {
            // Flow statements: continue, break.
            switch (this.getFieldValue('FLOW')) {
                case 'BREAK':
                    return 'break;\n';
                case 'CONTINUE':
                    return 'continue;\n';
            }
            throw 'Unknown flow statement.';
        };


        Blockly.Blocks.controls_flow_statements = {
            // Flow statements: continue, break.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
            helpUrl: RoboBlocks.URL_FLOW_STATEMENTS,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                var dropdown = new Blockly.FieldDropdown(
                    [
                        [RoboBlocks.locales.getKey('LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK') || 'BREAK', 'BREAK'],
                        [RoboBlocks.locales.getKey('LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE') || 'CONTINUE', 'CONTINUE']
                    ]);
                this.appendDummyInput()
                    .appendField(dropdown, 'FLOW')
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP'));
                this.setPreviousStatement(true);
                // Assign 'this' to a variable for use in the tooltip closure below.
                var thisBlock = this;
                this.setTooltip(function() {
                    var op = thisBlock.getFieldValue('FLOW');
                    return Blockly.Blocks.controls_flow_statements.TOOLTIPS[op];
                });
            },
            onchange: function() {
                if (!this.workspace) {
                    // Block has been deleted.
                    return;
                }
                var legal = false;
                // Is the block nested in a control statement?
                var block = this;
                do {
                    if (block.type === 'controls_repeat' ||
                        block.type === 'controls_forEach' ||
                        block.type === 'controls_for' ||
                        block.type === 'controls_whileUntil') {
                        legal = true;
                        break;
                    }
                    block = block.getSurroundParent();
                } while (block);
                if (legal) {
                    this.setWarningText(null);
                } else {
                    try {
                        this.setWarningText(RoboBlocks.locales.getKey('LANG_CONTROLS_FLOW_STATEMENTS_WARNING'));
                    } catch (err) {
                        console.log('Captured error: ', err);
                    }
                }
            }
        };

        Blockly.Blocks.controls_flow_statements.TOOLTIPS = {
            BREAK: RoboBlocks.locales.getKey('LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK'),
            CONTINUE: RoboBlocks.locales.getKey('LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE')
        };

        // Source: src/blocks/controls_for/controls_for.js
        /* global Blockly, RoboBlocks */
        /* jshint sub:true */
        /**
         * controls_for code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.controls_for = function() {
            var variable0 = Blockly.Arduino.valueToCode(this, 'VAR', Blockly.Arduino.ORDER_NONE) || '';
            var argument0 = Blockly.Arduino.valueToCode(this, 'FROM', Blockly.Arduino.ORDER_ASSIGNMENT) || '';
            var argument1 = Blockly.Arduino.valueToCode(this, 'TO', Blockly.Arduino.ORDER_ASSIGNMENT) || '';
            var argument2 = Blockly.Arduino.valueToCode(this, 'INCREMENT', Blockly.Arduino.ORDER_ASSIGNMENT) || '';
            var branch = Blockly.Arduino.statementToCode(this, 'DO');
            if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
                branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + this.id + '\'') + branch;
            }

            var code = '';
            var a = RoboBlocks.findPinMode(variable0);
            code += a['code'];
            variable0 = a['pin'];

            a = RoboBlocks.findPinMode(argument0);
            code += a['code'];
            argument0 = a['pin'];

            a = RoboBlocks.findPinMode(argument1);
            code += a['code'];
            argument1 = a['pin'];

            a = RoboBlocks.findPinMode(argument2);
            code += a['code'];
            argument2 = a['pin'];

            //var up = parseFloat(argument0) <= parseFloat(argument1);
            code += 'for (' + variable0 + ' = ' + argument0 + '; ' + variable0 + (argument2 > 0 ? ' <= ' : ' >= ') + argument1 + '; ' + variable0 + '=' + variable0 + (argument2 > 0 ? '+' : '') + argument2 + ') {\n' + branch + '}\n';
            return code;
        };
        Blockly.Blocks.controls_for = {
            // For loop.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
            helpUrl: RoboBlocks.URL_FOR,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendValueInput('VAR').appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_WITH'));
                // .appendField(new Blockly.FieldVariable(' '), 'VAR');
                this.appendValueInput('FROM').setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_FROM'));
                this.appendValueInput('TO').setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_TO'));
                this.appendValueInput('INCREMENT').setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_INCREMENT'));
                this.appendStatementInput('DO').appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_DO'));
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setInputsInline(true);
                // Assign 'this' to a variable for use in the tooltip closure below.
                var thisBlock = this;
                this.setTooltip(function() {
                    return RoboBlocks.LANG_CONTROLS_FOR_TOOLTIP.replace('%1', thisBlock.getFieldValue('VAR'));
                });
            },
            getVars: function() {
                return [this.getFieldValue('VAR')];
            },
            getVariables: function() {
                var variables = Blockly.Variables.allVariables();
                var dropdown = [];
                if (variables.length > 0) {
                    for (var i in variables) {
                        dropdown.push([variables[i], variables[i]]);
                    }
                } else {
                    dropdown.push(['', '']);
                }
                return dropdown;
            },
            isVariable: function(varValue) {
                for (var i in Blockly.Variables.allVariables()) {
                    if (Blockly.Variables.allVariables()[i] === varValue) {
                        return true;
                    }
                }
                return false;
            },
            onchange: function() {
                try {
                    if (this.isVariable(Blockly.Arduino.valueToCode(this, 'INCREMENT', Blockly.Arduino.ORDER_ATOMIC))) {
                        this.setWarningText(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_INCREMENT_WARNING'));
                        //    }
                        //    else if (this.isVariable(Blockly.Arduino.valueToCode(this, 'FROM', Blockly.Arduino.ORDER_ATOMIC))) {
                        //        this.setWarningText(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_FROM_WARNING'));
                        //    }
                        //    else if ( this.isVariable(Blockly.Arduino.valueToCode(this, 'TO', Blockly.Arduino.ORDER_ATOMIC))) {
                        //        this.setWarningText(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_TO_WARNING'));
                    } else {
                        this.setWarningText(null);
                    }
                } catch (e) {}


                // if (!this.workspace) {
                //     // Block has been deleted.
                //     return;
                // }
                // if (!this.last_variables){
                //     this.last_variables=Blockly.Variables.allVariables();
                // }
                // var variables=Blockly.Variables.allVariables();
                // for (var i in variables){
                //     if (Blockly.Variables.allVariables()[i]!==this.last_variables[i]){
                //         try{
                //             this.removeInput('DUMMY');
                //             this.removeInput('FROM');
                //             this.removeInput('TO');
                //             this.removeInput('DO');
                //             this.appendDummyInput('DUMMY')
                //                 .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_WITH'))
                //                 .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');
                //             this.appendValueInput('FROM')
                //                 .setCheck(Number)
                //                 .setAlign(Blockly.ALIGN_RIGHT)
                //                 .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_FROM'));
                //             this.appendValueInput('TO')
                //                 .setCheck(Number)
                //                 .setAlign(Blockly.ALIGN_RIGHT)
                //                 .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_TO'));
                //             this.appendStatementInput('DO')
                //                 .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_DO'));
                //         }catch(e){}
                //         this.last_variables=Blockly.Variables.allVariables();
                //     }
                // }
                // try {
                //     if (!this.exists()) {
                //         this.setWarningText(RoboBlocks.locales.getKey('LANG_VARIABLES_CALL_WITHOUT_DEFINITION'));
                //     } else {
                //         this.setWarningText(null);
                //     }
                // } catch (e) {}
            },
            renameVar: function(oldName, newName) {
                if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
                    this.setTitleValue(newName, 'VAR');
                }
            },
            // exists: function() {
            //     console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaa', Blockly.Variables.allVariables(), this.getFieldValue('VAR'));
            //     if (this.getFieldValue('VAR') === ' ') {
            //         return false;
            //     }
            //     for (var i in Blockly.Variables.allVariables()) {
            //         if (Blockly.Variables.allVariables()[i] === this.getFieldValue('VAR')) {
            //             console.log('controls_for, variable!', this.getFieldValue('VAR'), Blockly.Variables.allVariables()[i]);
            //             return true;
            //         }
            //     }
            //     return false;
            // }
        };
        // Source: src/blocks/controls_if/controls_if.js
        /* global Blockly, JST,  RoboBlocks */
        /* jshint sub:true */

        /**
         * controls_if code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.controls_if = function() {
            // If/elseif/else condition.
            var n = 0;
            var argument = Blockly.Arduino.valueToCode(this, 'IF' + n, Blockly.Arduino.ORDER_NONE);
            argument = argument.replace(/&quot;/g, '"');

            var branch = Blockly.Arduino.statementToCode(this, 'DO' + n);

            var code = '';
            var a = RoboBlocks.findPinMode(argument);
            code += a['code'];
            argument = a['pin'];

            code += JST['controls_if']({
                'argument': argument,
                'branch': branch
            });


            for (n = 1; n <= this.elseifCount_; n++) {
                argument = Blockly.Arduino.valueToCode(this, 'IF' + n, Blockly.Arduino.ORDER_NONE);
                branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
                // branch=branch.replace(/&amp;/g, '');

                code += JST['controls_elseif']({
                    'argument': argument,
                    'branch': branch
                });
            }
            if (this.elseCount_) {
                branch = Blockly.Arduino.statementToCode(this, 'ELSE');
                // branch=branch.replace(/&amp;/g, '');

                code += JST['controls_else']({
                    'argument': argument,
                    'branch': branch
                });
            }
            branch = branch.replace(/&quot;/g, '"');
            code = code.replace(/&quot;/g, '"');

            return code + '\n';
        };

        /**
         * controls_if block definition
         * @type {Object}
         */
        Blockly.Blocks.controls_if = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
            helpUrl: RoboBlocks.URL_IF,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendValueInput('IF0')
                    .setCheck(Boolean)
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_IF_MSG_IF'));
                this.appendStatementInput('DO0')
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_IF_MSG_THEN'))
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setMutator(new Blockly.Mutator(['controls_if_elseif',
                    'controls_if_else'
                ]));
                // Assign 'this' to a variable for use in the tooltip closure below.
                var thisBlock = this;
                this.setTooltip(function() {
                    if (!thisBlock.elseifCount_ && !thisBlock.elseCount_) {
                        return RoboBlocks.locales.getKey('LANG_CONTROLS_IF_TOOLTIP_1');
                    } else if (!thisBlock.elseifCount_ && thisBlock.elseCount_) {
                        return RoboBlocks.locales.getKey('LANG_CONTROLS_IF_TOOLTIP_2');
                    } else if (thisBlock.elseifCount_ && !thisBlock.elseCount_) {
                        return RoboBlocks.locales.getKey('LANG_CONTROLS_IF_TOOLTIP_3');
                    } else if (thisBlock.elseifCount_ && thisBlock.elseCount_) {
                        return RoboBlocks.locales.getKey('LANG_CONTROLS_IF_TOOLTIP_4');
                    }
                    return '';
                });
                this.elseifCount_ = 0;
                this.elseCount_ = 0;
            },
            mutationToDom: function() {
                if (!this.elseifCount_ && !this.elseCount_) {
                    return null;
                }
                var container = document.createElement('mutation');
                if (this.elseifCount_) {
                    container.setAttribute('elseif', this.elseifCount_);
                }
                if (this.elseCount_) {
                    container.setAttribute('else', 1);
                }
                return container;
            },
            domToMutation: function(xmlElement) {
                this.elseifCount_ = window.parseInt(xmlElement.getAttribute('elseif'), 10);
                this.elseCount_ = window.parseInt(xmlElement.getAttribute('else'), 10);
                for (var x = 1; x <= this.elseifCount_; x++) {
                    this.appendValueInput('IF' + x)
                        .setCheck(Boolean)
                        .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_IF_MSG_ELSEIF'));
                    this.appendStatementInput('DO' + x)
                        .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_IF_MSG_THEN'))
                        .setAlign(Blockly.ALIGN_RIGHT);
                }
                if (this.elseCount_) {
                    this.appendStatementInput('ELSE')
                        .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_IF_MSG_ELSE'))
                        .setAlign(Blockly.ALIGN_RIGHT);
                }
            },
            decompose: function(workspace) {
                var containerBlock = Blockly.Block.obtain(workspace, 'controls_if_if');
                containerBlock.initSvg();
                var connection = containerBlock.getInput('STACK').connection;
                for (var x = 1; x <= this.elseifCount_; x++) {
                    var elseifBlock = Blockly.Block.obtain(workspace, 'controls_if_elseif');
                    elseifBlock.initSvg();
                    connection.connect(elseifBlock.previousConnection);
                    connection = elseifBlock.nextConnection;
                }
                if (this.elseCount_) {
                    var elseBlock = Blockly.Block.obtain(workspace, 'controls_if_else');
                    elseBlock.initSvg();
                    connection.connect(elseBlock.previousConnection);
                }
                return containerBlock;
            },
            compose: function(containerBlock) {
                // Disconnect the else input blocks and remove the inputs.
                if (this.elseCount_) {
                    this.removeInput('ELSE');
                }
                this.elseCount_ = 0;
                // Disconnect all the elseif input blocks and remove the inputs.
                for (var x = this.elseifCount_; x > 0; x--) {
                    this.removeInput('IF' + x);
                    this.removeInput('DO' + x);
                }
                this.elseifCount_ = 0;
                // Rebuild the block's optional inputs.
                var clauseBlock = containerBlock.getInputTargetBlock('STACK');
                while (clauseBlock) {
                    switch (clauseBlock.type) {
                        case 'controls_if_elseif':
                            this.elseifCount_++;
                            var ifInput = this.appendValueInput('IF' + this.elseifCount_)
                                .setCheck(Boolean)
                                .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_IF_MSG_ELSEIF'));
                            var doInput = this.appendStatementInput('DO' + this.elseifCount_);
                            doInput.appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_IF_MSG_THEN'))
                                .setAlign(Blockly.ALIGN_RIGHT);
                            // Reconnect any child blocks.
                            if (clauseBlock.valueConnection_) {
                                ifInput.connection.connect(clauseBlock.valueConnection_);
                            }
                            if (clauseBlock.statementConnection_) {
                                doInput.connection.connect(clauseBlock.statementConnection_);
                            }
                            break;
                        case 'controls_if_else':
                            this.elseCount_++;
                            var elseInput = this.appendStatementInput('ELSE');
                            elseInput.appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_IF_MSG_ELSE'))
                                .setAlign(Blockly.ALIGN_RIGHT);
                            // Reconnect any child blocks.
                            if (clauseBlock.statementConnection_) {
                                elseInput.connection.connect(clauseBlock.statementConnection_);
                            }
                            break;
                        default:
                            throw 'Unknown block type.';
                    }
                    clauseBlock = clauseBlock.nextConnection &&
                        clauseBlock.nextConnection.targetBlock();
                }
            },
            saveConnections: function(containerBlock) {
                // Store a pointer to any connected child blocks.
                var clauseBlock = containerBlock.getInputTargetBlock('STACK');
                var x = 1;
                while (clauseBlock) {
                    switch (clauseBlock.type) {
                        case 'controls_if_elseif':
                            var inputIf = this.getInput('IF' + x);
                            var inputDo = this.getInput('DO' + x);
                            clauseBlock.valueConnection_ =
                                inputIf && inputIf.connection.targetConnection;
                            clauseBlock.statementConnection_ =
                                inputDo && inputDo.connection.targetConnection;
                            x++;
                            break;
                        case 'controls_if_else':
                            inputDo = this.getInput('ELSE');
                            clauseBlock.statementConnection_ =
                                inputDo && inputDo.connection.targetConnection;
                            break;
                        default:
                            throw 'Unknown block type.';
                    }
                    clauseBlock = clauseBlock.nextConnection &&
                        clauseBlock.nextConnection.targetBlock();
                }
            }
        };

        Blockly.Blocks.controls_if_if = {
            // If condition.
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_IF_IF_Field_IF'))
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.appendStatementInput('STACK');
                this.setTooltip(RoboBlocks.locales.getKey('LANG_CONTROLS_IF_IF_TOOLTIP'));
                this.contextMenu = false;
            }
        };

        Blockly.Blocks.controls_if_elseif = {
            // Else-If condition.
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF'))
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_CONTROLS_IF_ELSEIF_TOOLTIP'));
                this.contextMenu = false;
            }
        };

        Blockly.Blocks.controls_if_else = {
            // Else condition.
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_IF_ELSE_Field_ELSE'))
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.setPreviousStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_CONTROLS_IF_ELSE_TOOLTIP'));
                this.contextMenu = false;
            }
        };



        // Source: src/blocks/controls_setupLoop/controls_setupLoop.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * controls_setup code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.controls_setupLoop = function() {
            // Add statements to setup.
            var branch = Blockly.Arduino.statementToCode(this, 'SETUP');
            branch = branch.replace(/&quot;/g, '"');

            Blockly.Arduino.setups_['X_SETUP'] = JST['controls_setupLoop']({
                'branch': branch
            });

            var content = Blockly.Arduino.statementToCode(this, 'LOOP');
            content = content.replace(/&quot;/g, '"');
            content = JST['controls_setupLoop']({
                'branch': content
            });
            return content;
        };
        Blockly.Blocks.controls_setupLoop = {
            // Setup statements.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
            // helpUrl: RoboBlocks.URL_SETUP,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendStatementInput('SETUP').appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_SETUP_LOOP_SETUP_TITLE'));
                this.appendStatementInput('LOOP').appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_SETUP_LOOP_LOOP_TITLE'));
                this.setPreviousStatement(false);
                this.setNextStatement(false);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_CONTROLS_SETUP_LOOP_TOOLTIP'));
            }
        };

        // Source: src/blocks/controls_switch/controls_switch.js
        /* global Blockly, RoboBlocks */
        /* jshint sub:true */

        /**
         * controls_switch code generation
         * @return {String} Code generated with block parameters
         */
        var indentSentences = function(sentences) {
            var splitted_sentences = sentences.split('\n');
            var final_sentences = '';
            for (var i in splitted_sentences) {
                final_sentences += '  ' + splitted_sentences[i] + '\n';
            }
            return final_sentences;
        };

        Blockly.Arduino.controls_switch = function() {
            // switch condition.
            var n = 0;
            var argument = Blockly.Arduino.valueToCode(this, 'IF0',
                Blockly.Arduino.ORDER_NONE) || '';
            var branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
            branch = indentSentences(branch);
            // branch=branch.replace(/&amp;/g, '');

            var code = '';
            var a = RoboBlocks.findPinMode(argument);
            code += a['code'];
            argument = a['pin'];

            code += 'switch (' + argument + ')\n{';
            for (n = 1; n <= this.switchCount_; n++) {
                argument = Blockly.Arduino.valueToCode(this, 'SWITCH' + n, Blockly.Arduino.ORDER_NONE) || '';
                branch = Blockly.Arduino.statementToCode(this, 'DO' + n);
                branch = indentSentences(branch);
                branch = branch.substring(0, branch.length - 1);
                // branch=branch.replace(/&amp;/g, '');

                code += ' \n  case ' + argument + ': \n  {\n' + branch + '  break;\n  }';
            }
            if (this.defaultCount_) {
                branch = Blockly.Arduino.statementToCode(this, 'DEFAULT');
                branch = indentSentences(branch);
                branch = branch.substring(0, branch.length - 1);
                // branch=branch.replace(/&amp;/g, '');

                code += '  \n  default:\n  {\n' + branch + '}';
            }
            return code + '\n}\n';
        };


        Blockly.Blocks.controls_switch = {
            // switch condition.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
            helpUrl: RoboBlocks.URL_SWITCH,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendValueInput('IF0')
                    .setCheck(Boolean)
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH'))
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setMutator(new Blockly.Mutator(['controls_switch_case', 'controls_switch_default']));
                // Assign 'this' to a variable for use in the tooltip closure below.
                var thisBlock = this;
                this.setTooltip(function() {
                    if (!thisBlock.switchCount_ && !thisBlock.defaultCount_) {
                        return RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_TOOLTIP_1');
                    } else if (!thisBlock.switchCount_ && thisBlock.defaultCount_) {
                        return RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_TOOLTIP_2');
                    } else if (thisBlock.switchCount_ && !thisBlock.defaultCount_) {
                        return RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_TOOLTIP_3');
                    } else if (thisBlock.switchCount_ && thisBlock.defaultCount_) {
                        return RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_TOOLTIP_4');
                    }
                    return '';
                });
                this.defaultCount_ = 0;
            },
            mutationToDom: function() {
                if (!this.switchCount_ && !this.defaultCount_) {
                    return null;
                }
                var container = document.createElement('mutation');
                if (this.switchCount_) {
                    container.setAttribute('case', this.switchCount_);
                }
                if (this.defaultCount_) {
                    container.setAttribute('default', 1);
                }
                return container;
            },
            domToMutation: function(xmlElement) {
                this.switchCount_ = window.parseInt(xmlElement.getAttribute('case'), 10);
                this.defaultCount_ = window.parseInt(xmlElement.getAttribute('default'), 10);
                for (var x = 1; x <= this.switchCount_; x++) {
                    this.appendValueInput('SWITCH' + x)
                        .setCheck(Number)
                        .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_CASE'))
                        .setAlign(Blockly.ALIGN_RIGHT);
                    this.setInputsInline(true);
                    this.appendStatementInput('DO' + x)
                        .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_IF_MSG_THEN'))
                        .setAlign(Blockly.ALIGN_RIGHT);
                }
                if (this.defaultCount_) {
                    this.appendStatementInput('DEFAULT')
                        .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_DEFAULT'))
                        .setAlign(Blockly.ALIGN_RIGHT);
                }
            },
            decompose: function(workspace) {
                var containerBlock = Blockly.Block.obtain(workspace, 'controls_switch_switch');
                containerBlock.initSvg();
                var connection = containerBlock.getInput('STACK').connection;
                for (var x = 1; x <= this.switchCount_; x++) {
                    var switchBlock = Blockly.Block.obtain(workspace, 'controls_switch_case');
                    switchBlock.initSvg();
                    connection.connect(switchBlock.previousConnection);
                    connection = switchBlock.nextConnection;
                }
                if (this.defaultCount_) {
                    var defaultBlock = Blockly.Block.obtain(workspace, 'controls_switch_default');
                    defaultBlock.initSvg();
                    connection.connect(defaultBlock.previousConnection);
                }
                return containerBlock;
            },
            compose: function(containerBlock) {
                // Disconnect the switch blocks and remove the inputs.
                if (this.defaultCount_) {
                    this.removeInput('DEFAULT');
                }
                this.defaultCount_ = 0;
                // Disconnect all the switch input blocks and remove the inputs.
                for (var x = this.switchCount_; x > 0; x--) {
                    this.removeInput('SWITCH' + x);
                    this.removeInput('DO' + x);
                }
                this.switchCount_ = 0;
                // Rebuild the block's optional inputs.
                var clauseBlock = containerBlock.getInputTargetBlock('STACK');
                while (clauseBlock) {
                    switch (clauseBlock.type) {
                        case 'controls_switch_case':
                            this.switchCount_++;
                            var case_lang;
                            if (this.switchCount_ === 1) {
                                case_lang = RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_IS');
                            } else {
                                case_lang = RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_CASE');
                            }
                            var switchInput = this.appendValueInput('SWITCH' + this.switchCount_)
                                .setCheck(Number)
                                .appendField(case_lang)
                                .setAlign(Blockly.ALIGN_RIGHT);
                            this.setInputsInline(true);

                            var doInput = this.appendStatementInput('DO' + this.switchCount_);
                            doInput.appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_DO'))
                                .setAlign(Blockly.ALIGN_RIGHT);
                            // Reconnect any child blocks.
                            if (clauseBlock.valueConnection_) {
                                switchInput.connection.connect(clauseBlock.valueConnection_);
                            }
                            if (clauseBlock.statementConnection_) {
                                doInput.connection.connect(clauseBlock.statementConnection_);
                            }
                            break;
                        case 'controls_switch_default':
                            this.defaultCount_++;
                            var defaultInput = this.appendStatementInput('DEFAULT');
                            defaultInput.appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_DEFAULT'))
                                .setAlign(Blockly.ALIGN_RIGHT);
                            // Reconnect any child blocks.
                            if (clauseBlock.statementConnection_) {
                                defaultInput.connection.connect(clauseBlock.statementConnection_);
                            }
                            break;
                        default:
                            throw 'Unknown block type.';
                    }
                    clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock();
                }
            },
            saveConnections: function(containerBlock) {
                // Store a pointer to any connected child blocks.
                var clauseBlock = containerBlock.getInputTargetBlock('STACK');
                var x = 1;
                while (clauseBlock) {
                    switch (clauseBlock.type) {
                        case 'controls_switch_case':
                            var inputSwitch = this.getInput('SWITCH' + x);
                            var inputDo = this.getInput('DO' + x);
                            clauseBlock.valueConnection_ =
                                inputSwitch && inputSwitch.connection.targetConnection;
                            clauseBlock.statementConnection_ =
                                inputDo && inputDo.connection.targetConnection;
                            x++;
                            break;
                        case 'controls_switch_default':
                            inputDo = this.getInput('DEFAULT');
                            clauseBlock.statementConnection_ =
                                inputDo && inputDo.connection.targetConnection;
                            break;
                        default:
                            throw 'Unknown block type.';
                    }
                    clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock();
                }
            }
        };


        Blockly.Blocks.controls_switch_switch = {
            // If condition.
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH'))
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.appendStatementInput('STACK');
                this.setTooltip('Switch');
                this.contextMenu = false;
            }
        };

        Blockly.Blocks.controls_switch_case = {
            // case condition.
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_CASE'))
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip('Switch case');
                this.contextMenu = false;
            }
        };

        Blockly.Blocks.controls_switch_default = {
            // default condition.
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_SWITCH_DEFAULT'))
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.setPreviousStatement(true);
                this.setTooltip('Switch default');
                this.contextMenu = false;
            }
        };
        // Source: src/blocks/controls_whileUntil/controls_whileUntil.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * controls_whileUntil code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.controls_whileUntil = function() {
            // Do while/until loop.
            var argument0 = Blockly.Arduino.valueToCode(this, 'BOOL', Blockly.Arduino.ORDER_NONE) || '';
            argument0 = argument0.replace(/&quot;/g, '"');
            var branch = Blockly.Arduino.statementToCode(this, 'DO');
            branch = branch.replace(/&quot;/g, '"');

            var code = '';
            var a = RoboBlocks.findPinMode(argument0);
            code += a['code'];
            argument0 = a['pin'];

            if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
                branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + this.id + '\'') + branch;
                // branch = branch.substring(0, branch.length - 2);
            }
            // branch=branch.replace(/&amp;/g, '');

            if (this.getFieldValue('MODE') === 'UNTIL') {
                if (!argument0.match(/^\w+$/)) {
                    argument0 = '(' + argument0 + ')';
                }
                argument0 = '!' + argument0;
            }
            code += JST['controls_whileUntil']({
                'argument0': argument0,
                'branch': branch
            });
            return code;
        };
        Blockly.Blocks.controls_whileUntil = {
            // Do while/until loop.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
            helpUrl: RoboBlocks.URL_WHILE,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendValueInput('BOOL').setCheck(Boolean).appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_WHILEUNTIL_TITLE_REPEAT')).appendField(new Blockly.FieldDropdown([
                    [RoboBlocks.locales.getKey('LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE'), 'WHILE'],
                    [RoboBlocks.locales.getKey('LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL'), 'UNTIL']
                ]), 'MODE');
                this.appendStatementInput('DO').appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_WHILEUNTIL_INPUT_DO'));
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                // Assign 'this' to a variable for use in the tooltip closure below.
                var thisBlock = this;
                this.setTooltip(function() {
                    var op = thisBlock.getFieldValue('MODE');
                    return Blockly.Blocks.controls_whileUntil.TOOLTIPS[op];
                });
            }
        };
        Blockly.Blocks.controls_whileUntil.TOOLTIPS = {
            WHILE: RoboBlocks.locales.getKey('LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE'),
            UNTIL: RoboBlocks.locales.getKey('LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL')
        };
        // Source: src/blocks/inout_analog_read/inout_analog_read.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * inout_analog_read code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.inout_analog_read = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
            var code = '';

            var a = RoboBlocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];

            if (RoboBlocks.isVariable(dropdown_pin)) {
                code += JST['inout_analog_read_setups']({
                    'dropdown_pin': dropdown_pin,
                });
            } else {
                Blockly.Arduino.setups_['setup_green_analog_read' + dropdown_pin] = JST['inout_analog_read_setups']({
                    'dropdown_pin': dropdown_pin,
                });
            }
            code += JST['inout_analog_read']({
                'dropdown_pin': dropdown_pin,
            });
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        /**
         * inout_analog_read block definition
         * @type {Object}
         */
        Blockly.Blocks.inout_analog_read = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
            helpUrl: RoboBlocks.URL_PIN_FUNC,
            /**
             * inout_analog_read initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
                this.appendValueInput('PIN').appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_ANALOG_READ'));
                this.setOutput(true, Number);
                this.setInputsInline(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP'));
            }
        };
        // Source: src/blocks/inout_analog_write/inout_analog_write.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * inout_analog_write code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.inout_analog_write = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
            var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
            var code = '';
            var a = RoboBlocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];

            var b = RoboBlocks.findPinMode(value_num);
            code += b['code'];
            value_num = b['pin'];


            if (RoboBlocks.isVariable(dropdown_pin)) {
                code += JST['inout_analog_write_setups']({
                    'dropdown_pin': dropdown_pin,
                    'value_num': value_num
                });
            } else {
                Blockly.Arduino.setups_['setup_analog_write' + dropdown_pin] = JST['inout_analog_write_setups']({
                    'dropdown_pin': dropdown_pin,
                    'value_num': value_num
                });
            }

            code += JST['inout_analog_write']({
                'dropdown_pin': dropdown_pin,
                'value_num': value_num
            });
            return code;
        };
        /**
         * inout_analog_write block definition
         * @type {Object}
         */
        Blockly.Blocks.inout_analog_write = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
            helpUrl: RoboBlocks.URL_PIN_FUNC,
            /**
             * inout_analog_write initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
                this.appendValueInput('PIN').appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_ANALOG_WRITE'));
                this.appendValueInput('NUM', Number).appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE')).setCheck(Number);
                this.setInputsInline(true);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP'));
            }
        };
        // Source: src/blocks/inout_builtin_led/inout_builtin_led.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * inout_builtin_led code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.inout_builtin_led = function() {
            var dropdown_stat = this.getFieldValue('STAT');

            Blockly.Arduino.setups_['setup_green_led_13'] = JST['inout_builtin_led_setups']({});

            var code = JST['inout_builtin_led']({
                'dropdown_stat': dropdown_stat
            });

            return code;
        };

        /**
         * inout_builtin_led block definition
         * @type {Object}
         */
        Blockly.Blocks.inout_builtin_led = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
            helpUrl: RoboBlocks.URL_LED,
            /**
             * inout_builtin_led initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_BUILTIN_LED'))
                    .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_BUILTIN_LED_STATE'))
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.locales.getKey('LANG_ADVANCED_BUILTIN_LED_ON') || 'ON', 'HIGH'],
                        [RoboBlocks.locales.getKey('LANG_ADVANCED_BUILTIN_LED_OFF') || 'OFF', 'LOW']
                    ]), 'STAT');
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_BUILTIN_LED_TOOLTIP'));
            }
        };

        // Source: src/blocks/inout_digital_read/inout_digital_read.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * inout_digital_read code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.inout_digital_read = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
            var code = '';
            var a = RoboBlocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];
            if (RoboBlocks.isVariable(dropdown_pin)) {
                code += JST['inout_digital_read_setups']({
                    'dropdown_pin': dropdown_pin,
                });
            } else {
                Blockly.Arduino.setups_['setup_green_digital_read' + dropdown_pin] = JST['inout_digital_read_setups']({
                    'dropdown_pin': dropdown_pin,
                });
            }
            code += JST['inout_digital_read']({
                'dropdown_pin': dropdown_pin,
            });
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        /**
         * inout_digital_read block definition
         * @type {Object}
         */
        Blockly.Blocks.inout_digital_read = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
            helpUrl: RoboBlocks.URL_PIN_FUNC,
            /**
             * inout_digital_read initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
                this.appendValueInput('PIN').appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_READ'));
                this.setOutput(true, Boolean);
                this.setInputsInline(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP'));
            }
        };
        // Source: src/blocks/inout_digital_write/inout_digital_write.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * inout_digital_write code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.inout_digital_write = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
            var dropdown_stat = this.getFieldValue('STAT');
            var code = '';
            var a = RoboBlocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];
            if (RoboBlocks.isVariable(dropdown_pin)) {
                code += JST['inout_digital_write_setups']({
                    'dropdown_pin': dropdown_pin,
                    'dropdown_stat': dropdown_stat
                });
            } else {
                Blockly.Arduino.setups_['setup_green_digital_write_' + dropdown_pin] = JST['inout_digital_write_setups']({
                    'dropdown_pin': dropdown_pin,
                    'dropdown_stat': dropdown_stat
                });
            }
            code += JST['inout_digital_write']({
                'dropdown_pin': dropdown_pin,
                'dropdown_stat': dropdown_stat
            });
            return code;
        };
        /**
         * inout_digital_write block definition
         * @type {Object}
         */
        Blockly.Blocks.inout_digital_write = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
            helpUrl: RoboBlocks.URL_PIN_FUNC,
            /**
             * inout_digital_write initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
                this.appendValueInput('PIN').appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE')).appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN'));
                this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE')).appendField(new Blockly.FieldDropdown([
                    [RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH') || 'HIGH', 'HIGH'],
                    [RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW') || 'LOW', 'LOW']
                ]), 'STAT');
                this.setPreviousStatement(true, null);
                this.setInputsInline(true);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP'));
            }
        };
        // Source: src/blocks/inout_digital_write_var/inout_digital_write_var.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * inout_digital_write_var code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.inout_digital_write_var = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
            var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
            var code = '';

            var a = RoboBlocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];

            var b = RoboBlocks.findPinMode(value_num);
            code += b['code'];
            value_num = b['pin'];

            /* Parece que actúa sobre el setup  */
            if (RoboBlocks.isVariable(dropdown_pin)) {
                code += JST['inout_digital_write_var_setups']({
                    'dropdown_pin': dropdown_pin,
                    'value_num': value_num
                });
            } else {
                Blockly.Arduino.setups_['setup_green_digital_write_' + dropdown_pin] = JST['inout_digital_write_var_setups']({
                    'dropdown_pin': dropdown_pin,
                    'value_num': value_num
                });
            }

            /* Y esto actúa sobre la escritura en el loop */
            code += JST['inout_digital_write_var']({
                'dropdown_pin': dropdown_pin,
                'value_num': value_num,
            });
            return code;
        };
        /**
         * inout_digital_write_var block definition
         * @type {Object}
         */
        Blockly.Blocks.inout_digital_write_var = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
            helpUrl: RoboBlocks.URL_PIN_FUNC,
            /**
             * inout_digital_write_var initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
                this.appendValueInput('PIN').appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE')).appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN'));
                this.appendValueInput('NUM', Number).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_GET_VAR')).appendField('[0,1]');
                this.setPreviousStatement(true, null);
                this.setInputsInline(true);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP'));
            }
        };

        // Source: src/blocks/inout_highlow/inout_highlow.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * inout_highlow code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.inout_highlow = function() {
            var bool_value = this.getFieldValue('BOOL');

            var code = JST['inout_highlow']({
                'bool_value': bool_value,
            });

            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * inout_highlow block definition
         * @type {Object}
         */
        Blockly.Blocks.inout_highlow = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
            helpUrl: RoboBlocks.URL_PIN_FUNC,
            /**
             * inout_highlow initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
                this.appendDummyInput('')
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.locales.getKey('LANG_ADVANCED_HIGHLOW_HIGH') || 'HIGH', 'HIGH'],
                        [RoboBlocks.locales.getKey('LANG_ADVANCED_HIGHLOW_LOW') || 'LOW', 'LOW']
                    ]), 'BOOL');
                this.setOutput(true, Boolean);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_HIGHLOW_TOOLTIP'));
            }
        };

        // Source: src/blocks/inout_pulsein/inout_pulsein.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * inout_pulsein code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.inout_pulsein = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
            var dropdown_mode = this.getFieldValue('MODE');
            var code = '';
            var a = RoboBlocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];
            if (RoboBlocks.isVariable(dropdown_pin)) {
                code += JST['inout_pulsein_setups']({
                    'dropdown_pin': dropdown_pin
                });
            } else {
                Blockly.Arduino.setups_['setup_pulsein' + dropdown_pin] = JST['inout_pulsein_setups']({
                    'dropdown_pin': dropdown_pin
                });
            }
            code += JST['inout_pulsein']({
                'dropdown_pin': dropdown_pin,
                'dropdown_mode': dropdown_mode
            });
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        /**
         * inout_pulsein block definition
         * @type {Object}
         */
        Blockly.Blocks.inout_pulsein = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
            helpUrl: RoboBlocks.URL_PIN_FUNC,
            /**
             * inout_digital_read initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
                this.appendValueInput('PIN').appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_PULSEIN'));
                this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_PULSEIN_MODE')).appendField(new Blockly.FieldDropdown([
                    [RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH') || 'HIGH', 'HIGH'],
                    [RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW') || 'LOW', 'LOW']
                ]), 'MODE');
                this.setOutput(true, Boolean);
                this.setInputsInline(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_PULSEIN_TOOLTIP'));
            }
        };
        // Source: src/blocks/interrupt_attach/interrupt_attach.js
        /* global Blockly, JST, RoboBlocks */
        /**
         * interrupt_attach code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.interrupt_attach = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
            var funcName = this.getFieldValue('PROCEDURES');
            var dropdown_mode = this.getFieldValue('MODE');
            var code = '';
            var a = RoboBlocks.findPinMode(dropdown_pin);
            dropdown_pin = a['pin'];
            if (RoboBlocks.isVariable(dropdown_pin)) {
                code += JST['interrupt_attach']({
                    'block_pin': dropdown_pin,
                    'funcName': funcName,
                    'mode': dropdown_mode
                });
            } else {
                code += JST['interrupt_attach']({
                    'block_pin': dropdown_pin,
                    'funcName': funcName,
                    'mode': dropdown_mode
                });
            }
            return code;
        };
        Blockly.Blocks.interrupt_attach = {
            // Variable getter.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_INTERRUPTS'), // Variables are handled specially.
            helpUrl: RoboBlocks.URL_INTERRUPTS,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_INTERRUPTS);
                this.appendDummyInput('DUMMY')
                    .appendField(RoboBlocks.locales.getKey('LANG_INTERRUPTS_ATTACH'))
                    .appendField(new Blockly.FieldDropdown(this.getProcedures()), 'PROCEDURES')
                    .appendField(RoboBlocks.locales.getKey('LANG_INTERRUPTS_ATTACH_PARAM2'))
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.locales.getKey('LANG_INTERRUPTS_ATTACH_LOW') || 'LOW', 'LOW'],
                        [RoboBlocks.locales.getKey('LANG_INTERRUPTS_ATTACH_CHANGE') || 'CHANGE', 'CHANGE'],
                        [RoboBlocks.locales.getKey('LANG_INTERRUPTS_ATTACH_RISING') || 'RISING', 'RISING'],
                        [RoboBlocks.locales.getKey('LANG_INTERRUPTS_ATTACH_FALLING') || 'FALLING', 'FALLING']
                    ]), 'MODE');
                this.appendValueInput('PIN').appendField(RoboBlocks.locales.getKey('LANG_INTERRUPTS_ATTACH_PARAM3')).appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN'));
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_INTERRUPTS_ATTACH_TOOLTIP'));
                this.quarkConnections_ = null;
                this.quarkArguments_ = null;
            },
            validName: function(name) {
                if (name && name.length > 0) {
                    var i = 0;
                    while (i < name.length) {
                        if (!isNaN(parseFloat(name[i]))) {
                            name = name.substring(1, name.length);
                        } else {
                            break;
                        }
                    }
                    name = name.replace(/([ ])/g, '_');
                    name = name.replace(/([áàâä])/g, 'a');
                    name = name.replace(/([éèêë])/g, 'e');
                    name = name.replace(/([íìîï])/g, 'i');
                    name = name.replace(/([óòôö])/g, 'o');
                    name = name.replace(/([úùûü])/g, 'u');
                    name = name.replace(/([ñ])/g, 'n');
                    name = name.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|<>\-\&\Ç\%\=\~\{\}\¿\¡\"\@\:\;\-\"\·\|\º\ª\¨\'\·\̣\─\ç\`\´\¨\^])/g, '');
                    i = 0;
                    while (i < name.length) {
                        if (!isNaN(parseFloat(name[i]))) {
                            name = name.substring(1, name.length);
                        } else {
                            break;
                        }
                    }
                }
                return name;
            },
            getProcedures: function() {
                var procedures = Blockly.Procedures.allProcedures();
                var procedures_dropdown = [];
                if (procedures[0].length > 0) {
                    for (var i in procedures[0]) {
                        var proc_name = procedures[0][i][0];
                        proc_name = this.validName(proc_name);
                        procedures_dropdown.push([proc_name, proc_name]);
                    }
                } else {
                    procedures_dropdown.push([RoboBlocks.locales.getKey('LANG_PROCEDURES_DEFNORETURN_PROCEDURE'), RoboBlocks.locales.getKey('LANG_PROCEDURES_DEFNORETURN_PROCEDURE')]);
                }
                return procedures_dropdown;
            },
            exists: function() {
                var procedures = Blockly.Procedures.allProcedures();
                if (procedures[0].length > 0) {
                    for (var i in procedures[0]) {
                        if (procedures[0][i][0] === this.getFieldValue('PROCEDURES')) {
                            return true;
                        }
                    }
                } else {
                    return false;
                }
            },
            onchange: function() {
                if (!this.workspace) {
                    // Block has been deleted.
                    return;
                }
                if (this.getFieldValue('PROCEDURES') !== this.last_procedure && this.getFieldValue('PROCEDURES')) {
                    //this.changeVariables();
                    this.last_procedure = this.getFieldValue('PROCEDURES');
                }
                if (!this.exists()) {
                    try {
                        this.setWarningText(RoboBlocks.locales.getKey('LANG_PROCEDURES_CALL_WITHOUT_DEFINITION'));
                    } catch (e) {}
                } else {
                    try {
                        this.setWarningText(null);
                    } catch (e) {}
                }
            },
            renameProcedure: function(oldName, newName) {
                if (this.last_procedure) {
                    var procedures = this.getProcedures();
                    for (var i in procedures) {
                        if (Blockly.Names.equals(oldName, procedures[i][0])) {
                            this.removeInput('DUMMY');
                            //this.removeInput('PIN');
                            //this.appendDummyInput('DUMMY').appendField(new Blockly.FieldDropdown(this.getProcedures()), 'PROCEDURES');
                            this.appendDummyInput('DUMMY')
                                .appendField(RoboBlocks.locales.getKey('LANG_INTERRUPTS_ATTACH'))
                                .appendField(new Blockly.FieldDropdown(this.getProcedures()), 'PROCEDURES')
                                .appendField(RoboBlocks.locales.getKey('LANG_INTERRUPTS_ATTACH_PARAM2'))
                                .appendField(new Blockly.FieldDropdown([
                                    [RoboBlocks.locales.getKey('LANG_INTERRUPTS_ATTACH_LOW') || 'LOW', 'LOW'],
                                    [RoboBlocks.locales.getKey('LANG_INTERRUPTS_ATTACH_CHANGE') || 'CHANGE', 'CHANGE'],
                                    [RoboBlocks.locales.getKey('LANG_INTERRUPTS_ATTACH_RISING') || 'RISING', 'RISING'],
                                    [RoboBlocks.locales.getKey('LANG_INTERRUPTS_ATTACH_FALLING') || 'FALLING', 'FALLING']
                                ]), 'MODE');
                            //this.appendValueInput('PIN').appendField(RoboBlocks.locales.getKey('LANG_INTERRUPTS_ATTACH_PARAM3')).appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN'));
                            this.moveInputBefore('DUMMY', 'PIN');
                        }
                    }
                    if (this.last_procedure === oldName) {
                        this.last_procedure = newName;
                    }
                    try {
                        this.setFieldValue(this.last_procedure, 'PROCEDURES');
                    } catch (e) {}
                }
            },
            mutationToDom: function() {
                // Save the name and arguments (none of which are editable).
                var container = document.createElement('mutation');
                container.setAttribute('name', this.getFieldValue('PROCEDURES'));
                if (typeof this.arguments_ === 'undefined') {
                    //this.arguments_ = this.getVariables(this.getFieldValue('PROCEDURES'));
                }
                if (typeof this.arguments_ === 'undefined') {
                    this.arguments_ = [];
                }
                for (var x = 0; x < this.arguments_.length; x++) {
                    var parameter = document.createElement('arg');
                    parameter.setAttribute('name', this.arguments_[x]);
                    container.appendChild(parameter);
                }
                return container;
            },
            domToMutation: function(xmlElement) {
                this.xmlElement = xmlElement;
                // Restore the name and parameters.
                var name = xmlElement.getAttribute('name');
                this.last_procedure = name;
                this.setFieldValue(name, 'PROCEDURES');
                for (var x = 0; x < xmlElement.childNodes.length; x++) {
                    this.appendValueInput('ARG' + x).appendField(xmlElement.childNodes[x].getAttribute('name'), 'ARG_NAME' + x).setAlign(Blockly.ALIGN_RIGHT);
                }
            }
        };
        // Source: src/blocks/interrupt_detach/interrupt_detach.js
        /* global Blockly, JST, RoboBlocks */
        /**
         * interrupt_detach code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.interrupt_detach = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
            var code = '';
            var a = RoboBlocks.findPinMode(dropdown_pin);
            dropdown_pin = a['pin'];
            if (RoboBlocks.isVariable(dropdown_pin)) {
                code += JST['interrupt_detach']({
                    'block_pin': dropdown_pin
                });
            } else {
                code += JST['interrupt_detach']({
                    'block_pin': dropdown_pin
                });
            }
            return code;
        };
        Blockly.Blocks.interrupt_detach = {
            // Variable getter.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_INTERRUPTS'), // Variables are handled specially.
            helpUrl: RoboBlocks.URL_INTERRUPTS,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_INTERRUPTS);
                this.appendValueInput('PIN').appendField(RoboBlocks.locales.getKey('LANG_INTERRUPTS_DETACH')).appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN'));
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_INTERRUPTS_DETACH_TOOLTIP'));
                this.quarkConnections_ = null;
                this.quarkArguments_ = null;
            }
        };
        // Source: src/blocks/interrupt_state/interrupt_state.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * interrupt_state code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.interrupt_state = function() {
            var dropdown_stat = this.getFieldValue('STAT');
            var code = '';

            if (dropdown_stat === 'ENABLED') {
                code = JST['interrupt_state_enabled']({});
            } else {
                code = JST['interrupt_state_disabled']({});
            }

            return code;
        };

        /**
         * interrupt_state block definition
         * @type {Object}
         */
        Blockly.Blocks.interrupt_state = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_INTERRUPTS'),
            helpUrl: RoboBlocks.URL_INTERRUPTS,
            /**
             * inout_builtin_led initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_INTERRUPTS);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.locales.getKey('LANG_INTERRUPTS_STATE'))
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.locales.getKey('LANG_INTERRUPTS_STATE_ENABLED') || 'ENABLED', 'ENABLED'],
                        [RoboBlocks.locales.getKey('LANG_INTERRUPTS_STATE_DISABLED') || 'DIABLED', 'DISABLED']
                    ]), 'STAT');
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_INTERRUPTS_STATE_TOOLTIP'));
            }
        };

        // Source: src/blocks/ir_read/ir_read.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * ir_read code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.ir_read = function() {
            var ir_pin = Blockly.Arduino.valueToCode(this, 'IR PIN', Blockly.Arduino.ORDER_ATOMIC);
            var code = '';
            var a = RoboBlocks.findPinMode(ir_pin);
            code += a['code'];
            ir_pin = a['pin'];

            Blockly.Arduino.definitions_['define_ir_read_definition'] = JST['ir_read_definitions']({});
            Blockly.Arduino.definitions_['declare_var_ir_read'] = JST['ir_read_declare']({
                'ir_pin': ir_pin
            });
            Blockly.Arduino.definitions_['define_ir_read_function'] = JST['ir_read_function']({});
            //if (RoboBlocks.isVariable(ir_pin)) {
            //code += JST['ir_read_setups']({
            //'ir_pin': ir_pin
            //});
            //} else {
            Blockly.Arduino.setups_['setup_ir_read_' + ir_pin] = JST['ir_read_setups']({
                //'ir_pin': ir_pin
            });
            //}
            code += JST['ir_read']({});
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        /**
         * ir_read block definition
         * @type {Object}
         */
        Blockly.Blocks.ir_read = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_SENSOR'),
            helpUrl: RoboBlocks.URL_SENSOR,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_SENSOR);
                this.appendDummyInput('').appendField(RoboBlocks.locales.getKey('LANG_IR_READ')).appendField(new Blockly.FieldImage('img/blocks/ir.png', 208 * options.zoom, 140 * options.zoom));
                this.appendValueInput('IR PIN').appendField(RoboBlocks.locales.getKey('LANG_IR_READ_PIN')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
                this.setInputsInline(false);
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_IR_READ_TOOLTIP'));
            }
        };

        // Source: src/blocks/lcd_clear/lcd_clear.js

        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * lcd_clear code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.lcd_clear = function() {
            var code = JST['lcd_clear']({});
            return code;
        };

        /**
         * lcd_clear block definition
         * @type {Object}
         */
        Blockly.Blocks.lcd_clear = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_LCD'),
            tags: ['lcd'],
            helpUrl: RoboBlocks.URL_LCD,
            /**
             * lcd_slave initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_LCD);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_LCD_CLEAR'));
                // .appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom));



                this.setInputsInline(false);

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_LCD_CLEAR_TOOLTIP'));
            }
        };

        // Source: src/blocks/lcd_def/lcd_def.js
        /*
        *******VER ESTO A VER SI LO PUEDO PONER TODO EN UN SOLO BLOQUE:
        https://stackoverflow.com/questions/51667300/how-to-hide-remove-field-in-blockly

        *******ADEMÁS DE LO ANTERIOR, TAMBIÉN TENDRÍA QUE DAR SOPORTE A VARIAS PANTALLAS
        CONECTADAS, LO QUE CONLLEVA MODIFICAR EL RESTO DE BLOQUES DE LCD
        */
        /* global Blockly, JST, options, RoboBlocks */
        /* jshint sub:true */
        /**
         * lcd_def code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.lcd_def = function() {
            var conn_type = this.getFieldValue('CONN_TYPE');
            var pin1, pin2, pin3, pin4, pin5, pin6, address;
            if (conn_type === '1') {
                pin1 = Blockly.Arduino.valueToCode(this, 'PIN_1', Blockly.Arduino.ORDER_ATOMIC);
                pin2 = Blockly.Arduino.valueToCode(this, 'PIN_2', Blockly.Arduino.ORDER_ATOMIC);
                pin3 = Blockly.Arduino.valueToCode(this, 'PIN_3', Blockly.Arduino.ORDER_ATOMIC);
                pin4 = Blockly.Arduino.valueToCode(this, 'PIN_4', Blockly.Arduino.ORDER_ATOMIC);
                pin5 = Blockly.Arduino.valueToCode(this, 'PIN_5', Blockly.Arduino.ORDER_ATOMIC);
                pin6 = Blockly.Arduino.valueToCode(this, 'PIN_6', Blockly.Arduino.ORDER_ATOMIC);
                Blockly.Arduino.definitions_['define_lcd'] = JST['lcd_def_definitions']({});
                Blockly.Arduino.definitions_['declare_var_lcd'] = JST['lcd_def_declare']({
                    'pin1': pin1,
                    'pin2': pin2,
                    'pin3': pin3,
                    'pin4': pin4,
                    'pin5': pin5,
                    'pin6': pin6
                });
                Blockly.Arduino.setups_['setup_lcd_'] = JST['lcd_def_setups']({});
            } else {
                address = Blockly.Arduino.valueToCode(this, 'ADDRESS', Blockly.Arduino.ORDER_ATOMIC);
                Blockly.Arduino.definitions_['define_lcd'] = JST['lcd_def_definitions_i2c']({});
                Blockly.Arduino.definitions_['declare_var_lcd'] = JST['lcd_def_declare_i2c']({
                    'address': address
                });
                Blockly.Arduino.setups_['setup_lcd_'] = JST['lcd_def_setups_i2c']({});
            }
            return '';
        };
        /**
         * lcd_def block definition
         * @type {Object}
         */
        Blockly.Blocks.lcd_def = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_LCD'),
            tags: ['lcd'],
            helpUrl: RoboBlocks.URL_LCD,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_LCD);
                this.appendDummyInput('').appendField(RoboBlocks.locales.getKey('LANG_LCD_DEF')).appendField(new Blockly.FieldImage('img/blocks/lcd.png', 208 * options.zoom, 100 * options.zoom));
                this.appendDummyInput('').appendField(RoboBlocks.locales.getKey('LANG_LCD_DEF_CONNECTION')).appendField(new Blockly.FieldDropdown([
                    [RoboBlocks.locales.getKey('LANG_LCD_DEF_CONNECTION_PARALLEL') || 'Parallel', '1'],
                    [RoboBlocks.locales.getKey('LANG_LCD_DEF_CONNECTION_I2C') || 'I2C', '2']
                ]), 'CONN_TYPE');
                this.last_conn_type = this.getFieldValue('CONN_TYPE');
                this.check_conn_type();
                this.setInputsInline(false);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_LCD_DEF_TOOLTIP'));
            },
            check_conn_type: function() {
                if (this.getInput('PIN_1')) {
                    this.removeInput('PIN_1');
                }
                if (this.getInput('PIN_2')) {
                    this.removeInput('PIN_2');
                }
                if (this.getInput('PIN_3')) {
                    this.removeInput('PIN_3');
                }
                if (this.getInput('PIN_4')) {
                    this.removeInput('PIN_4');
                }
                if (this.getInput('PIN_5')) {
                    this.removeInput('PIN_5');
                }
                if (this.getInput('PIN_6')) {
                    this.removeInput('PIN_6');
                }
                if (this.getInput('ADDRESS')) {
                    this.removeInput('ADDRESS');
                }
                if (this.last_conn_type === '1') {
                    this.appendValueInput('PIN_1').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_LCD_DEF_PIN_1')).setAlign(Blockly.ALIGN_RIGHT);
                    this.appendValueInput('PIN_2').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_LCD_DEF_PIN_2')).setAlign(Blockly.ALIGN_RIGHT);
                    this.appendValueInput('PIN_3').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_LCD_DEF_PIN_3')).setAlign(Blockly.ALIGN_RIGHT);
                    this.appendValueInput('PIN_4').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_LCD_DEF_PIN_4')).setAlign(Blockly.ALIGN_RIGHT);
                    this.appendValueInput('PIN_5').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_LCD_DEF_PIN_5')).setAlign(Blockly.ALIGN_RIGHT);
                    this.appendValueInput('PIN_6').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_LCD_DEF_PIN_6')).setAlign(Blockly.ALIGN_RIGHT);
                } else {
                    this.appendValueInput('ADDRESS').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_LCD_DEF_ADDRESS')).setAlign(Blockly.ALIGN_RIGHT);
                }
            },
            onchange: function() {
                if (this.getFieldValue('CONN_TYPE') !== this.last_conn_type) {
                    this.last_conn_type = this.getFieldValue('CONN_TYPE');
                    this.check_conn_type();
                }
            },
            mutationToDom: function() {
                var container = document.createElement('mutation');
                container.setAttribute('connection_type', this.last_conn_type);
                return container;
            },
            domToMutation: function(xmlElement) {
                var connectionType = xmlElement.getAttribute('connection_type');
                if (connectionType && connectionType !== 'undefined') {
                    this.last_conn_type = connectionType;
                }
                this.check_conn_type();
            }
        };

        // Source: src/blocks/lcd_display/lcd_display.js

        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * lcd_display code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.lcd_display = function() {
            var code = JST['lcd_display']({});
            return code;
        };

        /**
         * lcd_display block definition
         * @type {Object}
         */
        Blockly.Blocks.lcd_display = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_LCD'),
            tags: ['lcd'],
            helpUrl: RoboBlocks.URL_LCD,
            /**
             * lcd_slave initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_LCD);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_LCD_DISPLAY'));
                // .appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom));



                this.setInputsInline(false);

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_LCD_DISPLAY_TOOLTIP'));
            }
        };

        // Source: src/blocks/lcd_home/lcd_home.js

        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * lcd_home code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.lcd_home = function() {
            var code = JST['lcd_home']({});
            return code;
        };

        /**
         * lcd_home block definition
         * @type {Object}
         */
        Blockly.Blocks.lcd_home = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_LCD'),
            tags: ['lcd'],
            helpUrl: RoboBlocks.URL_LCD,
            /**
             * lcd_slave initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_LCD);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_LCD_HOME'));
                // .appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom));



                this.setInputsInline(false);

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_LCD_HOME_TOOLTIP'));
            }
        };

        // Source: src/blocks/lcd_nodisplay/lcd_nodisplay.js

        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * lcd_nodisplay code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.lcd_nodisplay = function() {
            var code = JST['lcd_nodisplay']({});
            return code;
        };

        /**
         * lcd_nodisplay block definition
         * @type {Object}
         */
        Blockly.Blocks.lcd_nodisplay = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_LCD'),
            tags: ['lcd'],
            helpUrl: RoboBlocks.URL_LCD,
            /**
             * lcd_slave initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_LCD);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_LCD_NODISPLAY'));
                // .appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom));



                this.setInputsInline(false);

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_LCD_NODISPLAY_TOOLTIP'));
            }
        };

        // Source: src/blocks/lcd_print/lcd_print.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * lcd_print code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.lcd_print = function() {
            var val = Blockly.Arduino.valueToCode(this, 'VAL', Blockly.Arduino.ORDER_ATOMIC);
            var xcoor = Blockly.Arduino.valueToCode(this, 'XCOOR', Blockly.Arduino.ORDER_ATOMIC);
            var ycoor = Blockly.Arduino.valueToCode(this, 'YCOOR', Blockly.Arduino.ORDER_ATOMIC);
            var code = '';

            var a = RoboBlocks.findPinMode(xcoor);
            code += a['code'];
            xcoor = a['pin'];

            a = RoboBlocks.findPinMode(ycoor);
            code += a['code'];
            ycoor = a['pin'];

            a = RoboBlocks.findPinMode(val);
            code += a['code'];
            val = a['pin'];

            if (this.getFieldValue('POS') === 'TRUE') {
                code += JST['lcd_print_pos']({
                    'val': val,
                    'xcoor': xcoor,
                    'ycoor': ycoor
                });
            } else {
                code += JST['lcd_print']({
                    'val': val
                });
            }
            code = code.replace(/&quot;/g, '"');
            return code;
        };
        /**
         * lcd_print block definition
         * @type {Object}
         */
        Blockly.Blocks.lcd_print = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_LCD'),
            tags: ['lcd'],
            helpUrl: RoboBlocks.URL_LCD,
            /**
             * lcd_slave initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_LCD);
                this.appendValueInput('VAL').appendField(RoboBlocks.locales.getKey('LANG_LCD_PRINT'));
                // .appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom));
                this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_LCD_PRINT_POSITION')).appendField(new Blockly.FieldCheckbox('TRUE'), 'POS').setAlign(Blockly.ALIGN_RIGHT);
                this.last_pos = this.getFieldValue('POS');
                this.getPosition();
                this.setInputsInline(false);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_LCD_PRINT_TOOLTIP'));
            },
            getPosition: function() {
                try {
                    this.removeInput('XCOOR');
                    this.removeInput('YCOOR');
                } catch (e) {}
                if (this.getFieldValue('POS') === 'TRUE') {
                    this.appendValueInput('XCOOR').appendField('row').setAlign(Blockly.ALIGN_RIGHT);
                    this.appendValueInput('YCOOR').appendField('column').setAlign(Blockly.ALIGN_RIGHT);
                }
            },
            onchange: function() {
                if (this.getFieldValue('POS') !== this.last_pos) {
                    this.getPosition();
                    this.last_pos = this.getFieldValue('POS');
                }
            },
            mutationToDom: function() {
                var container = document.createElement('mutation');
                if (this.getFieldValue('POS') === 'TRUE') {
                    container.setAttribute('fixed', true);
                } else if (this.getFieldValue('POS') === 'FALSE') {
                    container.setAttribute('fixed', false);
                }
                return container;
            },
            domToMutation: function(xmlElement) {
                this.setFieldValue(xmlElement.getAttribute('fixed'), 'POS');
                if (this.getFieldValue('POS') === 'TRUE') {
                    this.appendValueInput('XCOOR').appendField('row').setAlign(Blockly.ALIGN_RIGHT);
                    this.appendValueInput('YCOOR').appendField('column').setAlign(Blockly.ALIGN_RIGHT);
                }
            }
        };
        // Source: src/blocks/lcd_scrolldisplayleft/lcd_scrolldisplayleft.js

        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * lcd_scrolldisplayleft code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.lcd_scrolldisplayleft = function() {
            var code = JST['lcd_scrolldisplayleft']({});
            return code;
        };

        /**
         * lcd_scrolldisplayleft block definition
         * @type {Object}
         */
        Blockly.Blocks.lcd_scrolldisplayleft = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_LCD'),
            tags: ['lcd'],
            helpUrl: RoboBlocks.URL_LCD,
            /**
             * lcd_slave initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_LCD);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_LCD_SCROLLDISPLAYLEFT'));
                // .appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom));



                this.setInputsInline(false);

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_LCD_SCROLLDISPLAYLEFT_TOOLTIP'));
            }
        };

        // Source: src/blocks/lcd_scrolldisplayright/lcd_scrolldisplayright.js

        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * lcd_scrolldisplayright code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.lcd_scrolldisplayright = function() {
            var code = JST['lcd_scrolldisplayright']({});
            return code;
        };

        /**
         * lcd_scrolldisplayright block definition
         * @type {Object}
         */
        Blockly.Blocks.lcd_scrolldisplayright = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_LCD'),
            tags: ['lcd'],
            helpUrl: RoboBlocks.URL_LCD,
            /**
             * lcd_slave initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_LCD);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_LCD_SCROLLDISPLAYRIGHT'));
                // .appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom));



                this.setInputsInline(false);

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_LCD_SCROLLDISPLAYRIGHT_TOOLTIP'));
            }
        };

        // Source: src/blocks/lcd_setBacklight/lcd_setBacklight.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * lcd_setBacklight code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.lcd_setBacklight = function() {
            var state = this.getFieldValue('STATE');
            var code = JST['lcd_setBacklight']({
                'state': state
            });
            return code;
        };

        /**
         * lcd_setBacklight block definition
         * @type {Object}
         */
        Blockly.Blocks.lcd_setBacklight = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_LCD'),
            helpUrl: RoboBlocks.URL_LCD,
            tags: ['lcd'],
            /**
             * lcd_slave initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_LCD);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_LCD_SETBACKLIGHT'))
                    .appendField(new Blockly.FieldDropdown([
                        ['LOW', 'LOW'],
                        ['HIGH', 'HIGH']
                    ]), 'STATE')
                    .appendField(RoboBlocks.locales.getKey('LANG_LCD_SETBACKLIGHT_CLOSE'));
                // .appendField(new Blockly.FieldImage('img/blocks/bqmod03.png', 208 * options.zoom, 100 * options.zoom));


                this.setInputsInline(false);

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_LCD_SETBACKLIGHT_TOOLTIP'));
            }
        };

        // Source: src/blocks/logic_boolean/logic_boolean.js
        /* global Blockly, RoboBlocks */

        /**
         * logic_boolean code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.logic_boolean = function() {
            // Boolean values true and false.
            var code = (this.getFieldValue('BOOL') === 'TRUE') ? 'true' : 'false';
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        Blockly.Blocks.logic_boolean = {
            // Boolean data type: true and false.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_LOGIC'),
            helpUrl: RoboBlocks.URL_LOGIC,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_LOGIC);
                this.setOutput(true, Boolean);
                this.appendDummyInput()
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.locales.getKey('LANG_LOGIC_BOOLEAN_TRUE'), 'TRUE'],
                        [RoboBlocks.locales.getKey('LANG_LOGIC_BOOLEAN_FALSE'), 'FALSE']
                    ]), 'BOOL');
                this.setTooltip(RoboBlocks.locales.getKey('LANG_LOGIC_BOOLEAN_TOOLTIP'));
            }
        };
        // Source: src/blocks/logic_compare/logic_compare.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * logic_compare code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.logic_compare = function() {
            // Comparison operator.
            var mode = this.getFieldValue('OP');
            var operator = Blockly.Arduino.logic_compare.OPERATORS[mode];
            var order = (operator === '==' || operator === '!=') ?
                Blockly.Arduino.ORDER_EQUALITY : Blockly.Arduino.ORDER_RELATIONAL;
            var argument0 = Blockly.Arduino.valueToCode(this, 'A', order) || '';
            var argument1 = Blockly.Arduino.valueToCode(this, 'B', order) || '';

            var code = '';

            var a = RoboBlocks.findPinMode(argument0);
            code += a['code'];
            argument0 = a['pin'];

            a = RoboBlocks.findPinMode(argument1);
            code += a['code'];
            argument1 = a['pin'];

            code += JST['logic_compare']({
                'argument0': argument0,
                'argument1': argument1,
                'operator': operator
            });

            return [code, order];
        };

        Blockly.Arduino.logic_compare.OPERATORS = {
            EQ: '==',
            NEQ: '!=',
            LT: '<',
            LTE: '<=',
            GT: '>',
            GTE: '>='
        };


        Blockly.Blocks.logic_compare = {
            // Comparison operator.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_LOGIC'),
            helpUrl: RoboBlocks.URL_LOGIC,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_LOGIC);
                this.setOutput(true, Boolean);
                this.appendValueInput('A');
                this.appendValueInput('B')
                    .appendField(new Blockly.FieldDropdown(this.OPERATORS), 'OP');
                this.setInputsInline(true);
                // Assign 'this' to a variable for use in the tooltip closure below.
                var thisBlock = this;
                this.setTooltip(function() {
                    var op = thisBlock.getFieldValue('OP');
                    return Blockly.Blocks.logic_compare.TOOLTIPS[op];
                });
            }
        };

        Blockly.Blocks.logic_compare.OPERATORS = [
            ['=', 'EQ'],
            ['\u2260', 'NEQ'],
            ['<', 'LT'],
            ['\u2264', 'LTE'],
            ['>', 'GT'],
            ['\u2265', 'GTE']
        ];

        Blockly.Blocks.logic_compare.TOOLTIPS = {
            EQ: RoboBlocks.locales.getKey('LANG_LOGIC_COMPARE_TOOLTIP_EQ'),
            NEQ: RoboBlocks.locales.getKey('LANG_LOGIC_COMPARE_TOOLTIP_NEQ'),
            LT: RoboBlocks.locales.getKey('LANG_LOGIC_COMPARE_TOOLTIP_LT'),
            LTE: RoboBlocks.locales.getKey('LANG_LOGIC_COMPARE_TOOLTIP_LTE'),
            GT: RoboBlocks.locales.getKey('LANG_LOGIC_COMPARE_TOOLTIP_GT'),
            GTE: RoboBlocks.locales.getKey('LANG_LOGIC_COMPARE_TOOLTIP_GTE')
        };

        // Source: src/blocks/logic_negate/logic_negate.js
        /* global Blockly, JST, RoboBlocks */

        /**
         * logic_negate code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.logic_negate = function() {
            // Negation.
            var order = Blockly.Arduino.ORDER_UNARY_PREFIX;
            var argument0 = Blockly.Arduino.valueToCode(this, 'BOOL', order) || 'false';
            var code = '';
            var a = RoboBlocks.findPinMode(argument0);
            code += a['code'];
            argument0 = a['pin'];

            code += JST['logic_negate']({
                'argument0': argument0
            });

            //'!' + argument0;
            return [code, order];
        };


        Blockly.Blocks.logic_negate = {
            // Negation.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_LOGIC'),
            helpUrl: RoboBlocks.URL_LOGIC,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_LOGIC);
                this.setOutput(true, Boolean);
                this.appendValueInput('BOOL')
                    .setCheck(Boolean)
                    .appendField(RoboBlocks.locales.getKey('LANG_LOGIC_NEGATE_INPUT_NOT'));
                this.setTooltip(RoboBlocks.locales.getKey('LANG_LOGIC_NEGATE_TOOLTIP'));
            }
        };

        // Source: src/blocks/logic_operation/logic_operation.js
        /* global Blockly, RoboBlocks */
        /**
         * logic_operation code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.logic_operation = function() {
            // Operations 'and', 'or'.
            var operator = (this.getFieldValue('OP') === 'AND') ? '&&' : '||';
            var order = (operator === '&&') ? Blockly.Arduino.ORDER_LOGICAL_AND : Blockly.Arduino.ORDER_LOGICAL_OR;
            var argument0 = Blockly.Arduino.valueToCode(this, 'A', order) || '';
            var argument1 = Blockly.Arduino.valueToCode(this, 'B', order) || '';
            // var code = JST['logic_operation']({
            //     'operator': operator,
            //     'argument0': argument0,
            //     'argument1': argument1
            // });
            var code = '';
            var a = RoboBlocks.findPinMode(argument0);
            code += a['code'];
            argument0 = a['pin'];
            a = RoboBlocks.findPinMode(argument1);
            code += a['code'];
            argument1 = a['pin'];

            code += '(' + argument0 + ') ' + operator + ' (' + argument1 + ')';
            return [code, order];
        };
        Blockly.Blocks.logic_operation = {
            // Logical operations: 'and', 'or'.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_LOGIC'),
            helpUrl: RoboBlocks.URL_LOGIC,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_LOGIC);
                this.setOutput(true, Boolean);
                this.appendValueInput('A').setCheck(Boolean);
                this.appendValueInput('B').setCheck(Boolean).appendField(new Blockly.FieldDropdown([
                    [RoboBlocks.locales.getKey('LANG_LOGIC_OPERATION_AND') || 'AND', 'AND'],
                    [RoboBlocks.locales.getKey('LANG_LOGIC_OPERATION_OR') || 'OR', 'OR']
                ]), 'OP');
                this.setInputsInline(true);
                // Assign 'this' to a variable for use in the tooltip closure below.
                var thisBlock = this;
                this.setTooltip(function() {
                    var op = thisBlock.getFieldValue('OP');
                    return Blockly.Blocks.logic_operation.TOOLTIPS[op];
                });
            }
        };
        Blockly.Blocks.logic_operation.TOOLTIPS = {
            AND: RoboBlocks.locales.getKey('LANG_LOGIC_OPERATION_TOOLTIP_AND'),
            OR: RoboBlocks.locales.getKey('LANG_LOGIC_OPERATION_TOOLTIP_OR')
        };
        // Source: src/blocks/math_arithmetic/math_arithmetic.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * math_arithmetic code generation
         * @return {String} Code generated with block parameters
         */


        Blockly.Arduino.math_arithmetic = function() {
            // Basic arithmetic operators, and power.
            var mode = this.getFieldValue('OP');
            var tuple = Blockly.Arduino.math_arithmetic.OPERATORS[mode];
            var operator = tuple[0];
            var order = tuple[1];
            var argument0 = Blockly.Arduino.valueToCode(this, 'A', order) || '';
            var argument1 = Blockly.Arduino.valueToCode(this, 'B', order) || '';
            var code = '';
            var a = RoboBlocks.findPinMode(argument0);
            code += a['code'];
            argument0 = a['pin'];

            a = RoboBlocks.findPinMode(argument1);
            code += a['code'];
            argument1 = a['pin'];
            if (!operator) {
                code = JST['math_arithmetic_pow']({
                    'argument0': argument0,
                    'argument1': argument1
                });
                return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
            }
            code += JST['math_arithmetic']({
                'argument0': argument0,
                'argument1': argument1,
                'operator': operator
            });
            return [code, order];
        };

        Blockly.Arduino.math_arithmetic.OPERATORS = {
            ADD: [' + ', Blockly.Arduino.ORDER_ADDITIVE],
            MINUS: [' - ', Blockly.Arduino.ORDER_ADDITIVE],
            MULTIPLY: [' * ', Blockly.Arduino.ORDER_MULTIPLICATIVE],
            DIVIDE: [' / ', Blockly.Arduino.ORDER_MULTIPLICATIVE],
            POWER: [null, Blockly.Arduino.ORDER_NONE]
        };




        Blockly.Blocks.math_arithmetic = {
            // Basic arithmetic operator.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_MATH'),
            helpUrl: RoboBlocks.URL_MATH,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_MATH);
                this.setOutput(true, Number);
                this.appendValueInput('A')
                    .setCheck(Number);
                this.appendValueInput('B')
                    .setCheck(Number)
                    .appendField(new Blockly.FieldDropdown(this.OPERATORS), 'OP');
                this.setInputsInline(true);
                // Assign 'this' to a variable for use in the tooltip closure below.
                var thisBlock = this;
                this.setTooltip(function() {
                    var mode = thisBlock.getFieldValue('OP');
                    return Blockly.Blocks.math_arithmetic.TOOLTIPS[mode];
                });
            }
        };

        Blockly.Blocks.math_arithmetic.OPERATORS = [
            ['+', 'ADD'],
            ['-', 'MINUS'],
            ['\u00D7', 'MULTIPLY'],
            ['\u00F7', 'DIVIDE'],
            ['^', 'POWER']
        ];

        Blockly.Blocks.math_arithmetic.TOOLTIPS = {
            ADD: RoboBlocks.locales.getKey('LANG_MATH_ARITHMETIC_TOOLTIP_ADD'),
            MINUS: RoboBlocks.locales.getKey('LANG_MATH_ARITHMETIC_TOOLTIP_MINUS'),
            MULTIPLY: RoboBlocks.locales.getKey('LANG_MATH_ARITHMETIC_TOOLTIP_MULTIPLY'),
            DIVIDE: RoboBlocks.locales.getKey('LANG_MATH_ARITHMETIC_TOOLTIP_DIVIDE'),
            POWER: RoboBlocks.locales.getKey('LANG_MATH_ARITHMETIC_TOOLTIP_POWER')
        };

        // Source: src/blocks/math_array/math_array.js
        /* global Blockly, RoboBlocks */
        /* jshint sub:true */

        /**
         * math_array code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.math_array = function() {
            // Numeric value.
            var code = '{';
            code += window.parseFloat(this.getFieldValue('NUM0'));
            code += ',';
            code += window.parseFloat(this.getFieldValue('NUM1'));
            code += ',';
            code += window.parseFloat(this.getFieldValue('NUM2'));
            code += '}';

            // -4.abs() returns -4 in Dart due to strange order of operation choices.
            // -4 is actually an operator and a number.  Reflect this in the order.
            // var order = code < 0 ? Blockly.Arduino.ORDER_UNARY_PREFIX : Blockly.Arduino.ORDER_ATOMIC;
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        Blockly.Blocks.math_array = {
            // Numeric value.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_MATH'), // Variables are handled specially.
            helpUrl: RoboBlocks.URL_MATH,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_MATH);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_ARRAY_ARRAY3'))
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_ARRAY_BRACKET3'))
                    .appendField(new Blockly.FieldTextInput('0', Blockly.Blocks.math_array.validator), 'NUM0')
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_ARRAY_COMMA'));


                this.appendDummyInput()
                    .appendField(new Blockly.FieldTextInput('0', Blockly.Blocks.math_array.validator), 'NUM1')
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_ARRAY_COMMA'));

                this.appendDummyInput()
                    .appendField(new Blockly.FieldTextInput('0', Blockly.Blocks.math_array.validator), 'NUM2')
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_ARRAY_BRACKET4'));

                this.setOutput(true, Number);
                this.setInputsInline(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_MATH_ARRAY_TOOLTIP'));
            }
        };


        Blockly.Blocks.math_array.validator = function(text) {
            // Ensure that only a number may be entered.
            // TODO: Handle cases like 'o', 'ten', '1,234', '3,14', etc.
            var n = window.parseFloat(text || 0);
            return window.isNaN(n) ? null : String(n);
        };
        // Source: src/blocks/math_max/math_max.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * math_max code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.math_max = function() {
            var argument0 = Blockly.Arduino.valueToCode(this, 'PARAM1',
                Blockly.Arduino.ORDER_MULTIPLICATIVE) || '';
            var argument1 = Blockly.Arduino.valueToCode(this, 'PARAM2',
                Blockly.Arduino.ORDER_MULTIPLICATIVE) || '';
            var code = '';
            var a = RoboBlocks.findPinMode(argument0);
            code += a['code'];
            argument0 = a['pin'];
            a = RoboBlocks.findPinMode(argument1);
            code += a['code'];
            argument1 = a['pin'];
            code += JST['math_max']({
                'argument0': argument0,
                'argument1': argument1
            });

            return [code, Blockly.Arduino.ORDER_MULTIPLICATIVE];
        };

        Blockly.Blocks.math_max = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_MATH'),
            helpUrl: RoboBlocks.URL_MATH,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_MATH);
                this.setOutput(true, Number);
                this.appendValueInput('PARAM1')
                    .setCheck(Number)
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_MAX'));
                this.appendValueInput('PARAM2')
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_MAX_PARAM2'));
                this.setInputsInline(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_MATH_MAX_TOOLTIP'));
            }
        };

        // Source: src/blocks/math_min/math_min.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * math_min code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.math_min = function() {
            var argument0 = Blockly.Arduino.valueToCode(this, 'NUMBER1',
                Blockly.Arduino.ORDER_MULTIPLICATIVE) || '';
            var argument1 = Blockly.Arduino.valueToCode(this, 'NUMBER2',
                Blockly.Arduino.ORDER_MULTIPLICATIVE) || '';
            var code = '';
            var a = RoboBlocks.findPinMode(argument0);
            code += a['code'];
            argument0 = a['pin'];
            a = RoboBlocks.findPinMode(argument1);
            code += a['code'];
            argument1 = a['pin'];
            code += JST['math_min']({
                'argument0': argument0,
                'argument1': argument1
            });

            return [code, Blockly.Arduino.ORDER_MULTIPLICATIVE];
        };

        Blockly.Blocks.math_min = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_MATH'),
            helpUrl: RoboBlocks.URL_MATH,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_MATH);
                this.setOutput(true, Number);
                this.appendValueInput('NUMBER1')
                    .setCheck(Number)
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_MIN'));
                this.appendValueInput('NUMBER2')
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_MIN_PARAM2'));
                this.setInputsInline(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_MATH_MIN_TOOLTIP'));
            }
        };

        // Source: src/blocks/math_modulo/math_modulo.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * math_modulo code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.math_modulo = function() {
            // Remainder computation.
            var argument0 = Blockly.Arduino.valueToCode(this, 'DIVIDEND',
                Blockly.Arduino.ORDER_MULTIPLICATIVE) || '';
            var argument1 = Blockly.Arduino.valueToCode(this, 'DIVISOR',
                Blockly.Arduino.ORDER_MULTIPLICATIVE) || '';
            var code = '';
            var a = RoboBlocks.findPinMode(argument0);
            code += a['code'];
            argument0 = a['pin'];
            a = RoboBlocks.findPinMode(argument1);
            code += a['code'];
            argument1 = a['pin'];
            code += JST['math_modulo']({
                'argument0': argument0,
                'argument1': argument1
            });

            //argument0 + ' % ' + argument1;
            return [code, Blockly.Arduino.ORDER_MULTIPLICATIVE];
        };

        Blockly.Blocks.math_modulo = {
            // Remainder of a division.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_MATH'),
            helpUrl: RoboBlocks.URL_MATH,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_MATH);
                this.setOutput(true, Number);
                this.appendValueInput('DIVIDEND')
                    .setCheck(Number)
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_MODULO_INPUT_DIVIDEND'));
                this.appendValueInput('DIVISOR')
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField('%');
                this.setInputsInline(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_MATH_MODULO_TOOLTIP'));
            }
        };

        // Source: src/blocks/math_number/math_number.js
        /* global Blockly, RoboBlocks */
        /* jshint sub:true */

        /**
         * math_number code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.math_number = function() {
            // Numeric value.
            var code = window.parseFloat(this.getFieldValue('NUM'));
            // -4.abs() returns -4 in Dart due to strange order of operation choices.
            // -4 is actually an operator and a number.  Reflect this in the order.
            var order = code < 0 ? Blockly.Arduino.ORDER_UNARY_PREFIX : Blockly.Arduino.ORDER_ATOMIC;
            return [code, order];
        };

        Blockly.Blocks.math_number = {
            // Numeric value.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_MATH'), // Variables are handled specially.
            helpUrl: RoboBlocks.URL_MATH,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_MATH);
                this.appendDummyInput()
                    .appendField(new Blockly.FieldTextInput('0', Blockly.Blocks.math_number.validator), 'NUM');
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_MATH_NUMBER_TOOLTIP'));
            }
        };

        Blockly.Blocks.math_number.validator = function(text) {
            // Ensure that only a number may be entered.
            // TODO: Handle cases like 'o', 'ten', '1,234', '3,14', etc.
            var n = window.parseFloat(text || 0);
            return window.isNaN(n) ? null : String(n);
        };

        // Source: src/blocks/math_pow/math_pow.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * math_pow code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.math_pow = function() {
            var argument0 = Blockly.Arduino.valueToCode(this, 'BASE',
                Blockly.Arduino.ORDER_MULTIPLICATIVE) || '';
            var argument1 = Blockly.Arduino.valueToCode(this, 'EXP',
                Blockly.Arduino.ORDER_MULTIPLICATIVE) || '';
            var code = '';
            var a = RoboBlocks.findPinMode(argument0);
            code += a['code'];
            argument0 = a['pin'];
            a = RoboBlocks.findPinMode(argument1);
            code += a['code'];
            argument1 = a['pin'];
            code += JST['math_pow']({
                'argument0': argument0,
                'argument1': argument1
            });

            return [code, Blockly.Arduino.ORDER_MULTIPLICATIVE];
        };

        Blockly.Blocks.math_pow = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_MATH'),
            helpUrl: RoboBlocks.URL_MATH,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_MATH);
                this.setOutput(true, Number);
                this.appendValueInput('BASE')
                    .setCheck(Number)
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_POW'));
                this.appendValueInput('EXP')
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_MATH_POW_PARAM2'));
                this.setInputsInline(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_MATH_POW_TOOLTIP'));
            }
        };

        // Source: src/blocks/math_random/math_random.js
        /* global Blockly, JST, RoboBlocks */

        /**
         * math_random code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.math_random = function() {
            var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE);
            var value_dmax = Blockly.Arduino.valueToCode(this, 'DMAX', Blockly.Arduino.ORDER_ATOMIC);
            var code = '';
            var a = RoboBlocks.findPinMode(value_num);
            code += a['code'];
            value_num = a['pin'];

            a = RoboBlocks.findPinMode(value_dmax);
            code += a['code'];
            value_dmax = a['pin'];

            code += JST['math_random']({
                'value_num': value_num,
                'value_dmax': value_dmax
            });

            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        Blockly.Blocks.math_random = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_MATH'),
            helpUrl: RoboBlocks.URL_MATH,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_MATH);
                this.appendValueInput('NUM', Number)
                    .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_MATH_RANDOM'))
                    .setCheck(Number);
                this.appendValueInput('DMAX', Number)
                    .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_MATH_RANDOM_AND'))
                    .setCheck(Number);
                this.setInputsInline(true);
                this.setOutput(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_MATH_RANDOM_TOOLTIP'));
            }
        };

        // Source: src/blocks/math_random_seed/math_random_seed.js
        /* global Blockly, JST, RoboBlocks */

        //register with blockly arduino
        Blockly.Arduino.math_random_seed = function() {
            var seed_num = Blockly.Arduino.valueToCode(this, 'SEED_NUM', Blockly.Arduino.ORDER_ATOMIC);
            var code = '';
            var a = RoboBlocks.findPinMode(seed_num);
            code += a['code'];
            seed_num = a['pin'];

            code += JST['math_random_seed']({
                'seed_num': seed_num
            });
            return code;
        };

        Blockly.Blocks.math_random_seed = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_MATH'),
            helpUrl: RoboBlocks.URL_MATH,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_MATH);
                this.appendValueInput('SEED_NUM', Number)
                    .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_MATH_RANDOM_SEED'))
                    .setCheck(Number);
                this.setInputsInline(true);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_MATH_RANDOM_SEED_TOOLTIP'));
            }
        };

        // Source: src/blocks/math_single/math_single.js
        /* global Blockly, RoboBlocks */
        /* jshint sub:true */

        /**
         * math_single code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.math_single = function() {
            // Math operators with single operand.
            var operator = this.getFieldValue('OP');
            var arg;
            var code = '';
            var a;

            if (operator === 'NEG') {
                // Negation is a special case given its different operator precedents.
                arg = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_UNARY_PREFIX) || '';
                a = RoboBlocks.findPinMode(arg);
                code += a['code'];
                arg = a['pin'];
                if (arg[0] === '-') {
                    // --3 is not legal in Dart.
                    arg = ' ' + arg;
                }
                code += '-' + arg;
                return [code, Blockly.Arduino.ORDER_UNARY_PREFIX];
            } else if (operator === 'SIN' || operator === 'COS' || operator === 'TAN') {
                arg = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_MULTIPLICATIVE) || '';
                a = RoboBlocks.findPinMode(arg);
                code += a['code'];
                arg = a['pin'];
            } else if (operator === 'LOG10') {
                code = '';
            } else {
                arg = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE) || '';
                a = RoboBlocks.findPinMode(arg);
                code += a['code'];
                arg = a['pin'];
            }
            var PI = 3.14159;
            // First, handle cases which generate values that don't need parentheses.
            switch (operator) {
                case 'ABS':
                    code += 'abs(' + arg + ')';
                    break;
                case 'ROOT':
                    code += 'sqrt(' + arg + ')';
                    break;
                case 'LN':
                    code += 'log(' + arg + ')';
                    break;
                case 'EXP':
                    code += 'exp(' + arg + ')';
                    break;
                case 'POW10':
                    code += 'pow(10,' + arg + ')';
                    break;
                case 'SIN':
                    code += 'sin(' + arg + ' / 180 * ' + PI + ')';
                    break;
                case 'COS':
                    code += 'cos(' + arg + ' / 180 * ' + PI + ')';
                    break;
                case 'TAN':
                    code += 'tan(' + arg + ' / 180 * ' + PI + ')';
                    break;
            }
            if (code) {
                return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
            }

            // Second, handle cases which generate values that may need parentheses.
            switch (operator) {
                case 'LOG10':
                    arg = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE) || '';
                    a = RoboBlocks.findPinMode(arg);
                    code += a['code'];
                    arg = a['pin'];
                    code += 'log(' + arg + ') / log(10)';
                    break;
                case 'ASIN':
                    code += 'asin(' + arg + ') / ' + PI + ' * 180';
                    break;
                case 'ACOS':
                    code += 'acos(' + arg + ') / ' + PI + ' * 180';
                    break;
                case 'ATAN':
                    code += 'atan(' + arg + ') / ' + PI + ' * 180';
                    break;
                default:
                    throw 'Unknown math operator: ' + operator;
            }
            return [code, Blockly.Arduino.ORDER_MULTIPLICATIVE];
        };


        Blockly.Blocks.math_single = {
            // Advanced math operators with single operand.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_MATH'),
            helpUrl: RoboBlocks.URL_MATH,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_MATH);
                this.setOutput(true, Number);
                this.appendValueInput('NUM')
                    .setCheck(Number)
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.locales.getKey('LANG_MATH_SINGLE_OP_ROOT') || 'SQR ROOT', 'ROOT'],
                        [RoboBlocks.locales.getKey('LANG_MATH_SINGLE_OP_ABSOLUTE') || 'ABS', 'ABS'],
                        ['-', 'NEG'],
                        ['ln', 'LN'],
                        ['log10', 'LOG10'],
                        ['e^', 'EXP'],
                        ['10^', 'POW10']
                    ]), 'OP');
                // Assign 'this' to a variable for use in the tooltip closure below.
                var thisBlock = this;
                this.setTooltip(function() {
                    var mode = thisBlock.getFieldValue('OP');
                    return Blockly.Blocks.math_single.TOOLTIPS[mode];
                });
            }
        };

        Blockly.Blocks.math_single.TOOLTIPS = {
            ROOT: RoboBlocks.locales.getKey('LANG_MATH_SINGLE_TOOLTIP_ROOT'),
            ABS: RoboBlocks.locales.getKey('LANG_MATH_SINGLE_TOOLTIP_ABS'),
            NEG: RoboBlocks.locales.getKey('LANG_MATH_SINGLE_TOOLTIP_NEG'),
            LN: RoboBlocks.locales.getKey('LANG_MATH_SINGLE_TOOLTIP_LN'),
            LOG10: RoboBlocks.locales.getKey('LANG_MATH_SINGLE_TOOLTIP_LOG10'),
            EXP: RoboBlocks.locales.getKey('LANG_MATH_SINGLE_TOOLTIP_EXP'),
            POW10: RoboBlocks.locales.getKey('LANG_MATH_SINGLE_TOOLTIP_POW10')
        };

        // Source: src/blocks/pca9685_def/pca9685_def.js
        /* global Blockly, JST, options, RoboBlocks */
        /* jshint sub:true */
        /**
         * pca9685_def code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.pca9685_def = function() {
            var servo_type = this.getFieldValue('SERVO_TYPE');
            var address = Blockly.Arduino.valueToCode(this, 'ADDRESS', Blockly.Arduino.ORDER_ATOMIC);
            var servo_freq, servo_pos0, servo_pos180;
            //var servo_freq = this.getFieldValue('SERVO_FREQ');
            //var servo_pos0 = this.getFieldValue('SERVO_POS0');
            //var servo_pos180 = this.getFieldValue('SERVO_POS180');
            switch (servo_type) {
                case 'S3003':
                    servo_freq = 33; //30ms
                    servo_pos0 = 68; //0,5ms
                    servo_pos180 = 405; //3ms
                    break;
                case 'S3004':
                    servo_freq = 50; //20ms
                    servo_pos0 = 61; //0,3ms
                    servo_pos180 = 471; //2,3ms
                    break;
                case 'HXT900':
                    servo_freq = 50; //20ms
                    servo_pos0 = 92; //0,45ms
                    servo_pos180 = 501; //2,45ms
                    break;
                case 'Hitec':
                    servo_freq = 50; //20ms
                    servo_pos0 = 184; //0,9ms
                    servo_pos180 = 430; //2,1ms
                    break;
                case 'TowerPro':
                    servo_freq = 50; //20ms
                    servo_pos0 = 205; //1ms
                    servo_pos180 = 409; //2ms
                    break;
                default:
                    servo_freq = 50;
                    servo_pos0 = 150;
                    servo_pos180 = 500;
            }
            Blockly.Arduino.definitions_['define_pca9685'] = JST['pca9685_def_definitions']({
                'servo_pos0': servo_pos0,
                'servo_pos180': servo_pos180
            });
            Blockly.Arduino.definitions_['declare_var_pca9685'] = JST['pca9685_def_declare']({
                'address': address
            });
            Blockly.Arduino.setups_['setup_lcd_'] = JST['pca9685_def_setups']({
                'servo_freq': servo_freq
            });
            return '';
        };
        /**
         * pca9685_def block definition
         * @type {Object}
         */
        Blockly.Blocks.pca9685_def = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_MOTOR'),
            tags: ['servo'],
            helpUrl: RoboBlocks.URL_SERVO,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_MOTOR);
                this.appendDummyInput('').appendField(RoboBlocks.locales.getKey('LANG_MOTOR_PCA9685_DEF')).appendField(new Blockly.FieldImage('img/blocks/pca9685.png', 208 * options.zoom, 100 * options.zoom));
                this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_MOTOR_PCA9685_DEF_SERVO'))
                    .appendField(new Blockly.FieldDropdown([
                        ['Futaba S3003', 'S3003'],
                        ['Futaba S3004', 'S3004'],
                        ['Hextronik HXT900', 'HXT900'],
                        ['Hitec', 'Hitec'],
                        ['TowerPro', 'TowerPro']
                    ]), 'SERVO_TYPE');
                //.appendField(new Blockly.FieldTextInput('60', Blockly.Blocks.math_number.validator), 'SERVO_FREQ')
                //.appendField(RoboBlocks.locales.getKey('LANG_MOTOR_PCA9685_DEF_MIN'))
                //.appendField(new Blockly.FieldTextInput('150', Blockly.Blocks.math_number.validator), 'SERVO_POS0')
                //.appendField(RoboBlocks.locales.getKey('LANG_MOTOR_PCA9685_DEF_MAX'))
                //.appendField(new Blockly.FieldTextInput('600', Blockly.Blocks.math_number.validator), 'SERVO_POS180');
                this.appendValueInput('ADDRESS').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_MOTOR_PCA9685_DEF_ADDRESS')).setAlign(Blockly.ALIGN_RIGHT);
                this.setInputsInline(false);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_MOTOR_PCA9685_DEF_TOOLTIP'));
            }
        };

        // Source: src/blocks/pca9685_set_pwm/pca9685_set_pwm.js
        /* global Blockly, JST, RoboBlocks */
        /**
         * pca9685_set_pwm code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.pca9685_set_pwm = function() {
            var servo_num = Blockly.Arduino.valueToCode(this, 'SERVO_NUM', Blockly.Arduino.ORDER_NONE) || '';
            var servo_angle = Blockly.Arduino.valueToCode(this, 'SERVO_ANGLE', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '';
            var code = '';
            var a = RoboBlocks.findPinMode(servo_num);
            code += a['code'];
            servo_num = a['pin'];
            a = RoboBlocks.findPinMode(servo_angle);
            code += a['code'];
            servo_angle = a['pin'];
            code += JST['pca9685_set_pwm']({
                'servo_num': servo_num,
                'servo_angle': servo_angle
            });
            return code;
        };
        Blockly.Blocks.pca9685_set_pwm = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_MOTOR'),
            helpUrl: RoboBlocks.URL_SERVO,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_MOTOR);
                this.appendValueInput('SERVO_NUM').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_MOTOR_PCA9685_SET_PWM'));
                this.appendValueInput('SERVO_ANGLE').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_MOTOR_PCA9685_SET_PWM_ANGLE'));
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setInputsInline(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_MOTOR_PCA9685_SET_PWM_TOOLTIP'));
            },

        };
        // Source: src/blocks/pin_analog/pin_analog.js
        /* global Blockly, profiles, RoboBlocks */

        /**
         * pin code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.pin_analog = function() {
            var pin = this.getFieldValue('PIN') || '';
            return [pin, Blockly.Arduino.ORDER_NONE];
        };

        Blockly.Blocks.pin_analog = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
            helpUrl: RoboBlocks.URL_PIN_FUNC,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_PIN_ANALOG'))
                    .appendField(new Blockly.FieldDropdown(profiles.default.analog), 'PIN');

                this.setInputsInline(true);
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_VARIABLES_PIN_TOOLTIP'));
            }
        };

        // Source: src/blocks/pin_digital/pin_digital.js
        /* global Blockly, profiles, RoboBlocks */

        /**
         * pin code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.pin_digital = function() {
            var pin = this.getFieldValue('PIN') || '';
            return [pin, Blockly.Arduino.ORDER_NONE];
        };

        Blockly.Blocks.pin_digital = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ADVANCED'),
            helpUrl: RoboBlocks.URL_PIN_FUNC,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ADVANCED);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_PIN_DIGITAL'))
                    .appendField(new Blockly.FieldDropdown(profiles.default.digital), 'PIN');

                this.setInputsInline(true);
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_VARIABLES_PIN_TOOLTIP'));
            },
            onchange: function() {
                if (!this.workspace) {
                    // Block has been deleted.
                    return;
                }
                if (this.getFieldValue('PIN') === '0') {
                    try {
                        this.setWarningText(RoboBlocks.locales.getKey('LANG_VARIABLES_PIN_DIGITAL0'));
                    } catch (e) {}
                } else {
                    try {
                        this.setWarningText(null);
                    } catch (e) {}
                }
            }
        };

        // Source: src/blocks/procedures_callnoreturn/procedures_callnoreturn.js
        /* global Blockly, JST, RoboBlocks */
        /**
         * procedures_callnoreturn code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.procedures_callnoreturn = function() {
            // Call a procedure with a return value.
            var funcName = this.getFieldValue('PROCEDURES');
            var args = [];
            var code = '';
            var a;
            try {
                for (var x = 0; x < this.getVariables(funcName).length; x++) {
                    args[x] = Blockly.Arduino.valueToCode(this, 'ARG' + x, Blockly.Arduino.ORDER_NONE) || '';
                    a = RoboBlocks.findPinMode(args[x]);
                    code += a['code'];
                    args[x] = a['pin'];
                }
            } catch (e) {}
            var funcArgs = args.join(', ');
            code += JST['procedures_callnoreturn']({
                'funcName': funcName,
                'funcArgs': funcArgs
            });
            return code;
        };
        Blockly.Blocks.procedures_callnoreturn = {
            // Variable getter.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_PROCEDURES'), // Variables are handled specially.
            helpUrl: RoboBlocks.URL_PROC_NO_RET,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_PROCEDURES);
                this.appendDummyInput('DUMMY').appendField(new Blockly.FieldDropdown(this.getProcedures()), 'PROCEDURES');
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_PROCEDURES_CALLNORETURN_TOOLTIP'));
                this.arguments_ = this.getVariables(this.getFieldValue('PROCEDURES'));
                this.quarkConnections_ = null;
                this.quarkArguments_ = null;
                this.last_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
            },
            validName: function(name) {
                if (name && name.length > 0) {
                    var i = 0;
                    while (i < name.length) {
                        if (!isNaN(parseFloat(name[i]))) {
                            name = name.substring(1, name.length);
                        } else {
                            break;
                        }
                    }
                    name = name.replace(/([ ])/g, '_');
                    name = name.replace(/([áàâä])/g, 'a');
                    name = name.replace(/([éèêë])/g, 'e');
                    name = name.replace(/([íìîï])/g, 'i');
                    name = name.replace(/([óòôö])/g, 'o');
                    name = name.replace(/([úùûü])/g, 'u');
                    name = name.replace(/([ñ])/g, 'n');
                    name = name.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|<>\-\&\Ç\%\=\~\{\}\¿\¡\"\@\:\;\-\"\·\|\º\ª\¨\'\·\̣\─\ç\`\´\¨\^])/g, '');
                    i = 0;
                    while (i < name.length) {
                        if (!isNaN(parseFloat(name[i]))) {
                            name = name.substring(1, name.length);
                        } else {
                            break;
                        }
                    }
                }
                return name;
            },
            getProcedures: function() {
                var procedures = Blockly.Procedures.allProcedures();
                var procedures_dropdown = [];
                if (procedures[0].length > 0) {
                    for (var i in procedures[0]) {
                        var proc_name = procedures[0][i][0];
                        proc_name = this.validName(proc_name);
                        procedures_dropdown.push([proc_name, proc_name]);
                    }
                } else {
                    procedures_dropdown.push([RoboBlocks.locales.getKey('LANG_PROCEDURES_DEFNORETURN_PROCEDURE'), RoboBlocks.locales.getKey('LANG_PROCEDURES_DEFNORETURN_PROCEDURE')]);
                }
                return procedures_dropdown;
            },
            maxVariableNumber: function() {
                var procedures = Blockly.Procedures.allProcedures();
                var procedures_dropdown = [];
                var max_num = 0;
                if (procedures[0].length > 0 || procedures[1].length > 0) {
                    for (var i in procedures[0]) {
                        if (procedures[0][i][1].length > max_num) { // if the length of the variable array is larger than the max_num, equal max_num to that number
                            max_num = procedures[0][i][1].length;
                        }
                    }
                    return max_num;
                } else {
                    procedures_dropdown.push(['', '']);
                }
            },
            getVariables: function(funcName) {
                try {
                    var procedures = Blockly.Procedures.allProcedures();
                    var procedures_dropdown = [];
                    if (procedures[0].length > 0) {
                        for (var i in procedures[0]) {
                            if (procedures[0][i][0] === funcName) {
                                return procedures[0][i][1];
                            }
                        }
                    } else {
                        procedures_dropdown.push(['', '']);
                    }
                } catch (e) {}
            },
            exists: function() {
                var procedures = Blockly.Procedures.allProcedures();
                if (procedures[0].length > 0) {
                    for (var i in procedures[0]) {
                        if (procedures[0][i][0] === this.getFieldValue('PROCEDURES')) {
                            return true;
                        }
                    }
                } else {
                    return false;
                }
            },
            onchange: function() {
                if (!this.workspace) {
                    // Block has been deleted.
                    return;
                }
                if (this.getFieldValue('PROCEDURES') !== this.last_procedure && this.getFieldValue('PROCEDURES')) {
                    this.changeVariables();
                    this.last_procedure = this.getFieldValue('PROCEDURES');
                    this.last_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
                } else if (this.getVariables(this.getFieldValue('PROCEDURES')) !== this.last_variables) {
                    this.addVariables();
                    this.last_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
                    this.last_procedure = this.getFieldValue('PROCEDURES');
                }
                if (!this.exists()) {
                    try {
                        this.setWarningText(RoboBlocks.locales.getKey('LANG_PROCEDURES_CALL_WITHOUT_DEFINITION'));
                    } catch (e) {}
                } else {
                    try {
                        this.setWarningText(null);
                    } catch (e) {}
                }
            },
            addVariables: function() {
                var func_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
                var var_num = 0;
                if (func_variables) {
                    if (!this.last_variables) {
                        this.last_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
                    }
                    if (func_variables.length >= this.last_variables.length) {
                        var_num = func_variables.length;
                    } else if (this.last_variables) {
                        try {
                            var_num = this.last_variables.length;
                        } catch (e) {}
                    }
                    for (var x = 0; x < var_num; x++) {
                        if (this.getInput('ARG' + x) === null) {
                            this.appendValueInput('ARG' + x).appendField(func_variables[x], 'ARG_NAME' + x).setAlign(Blockly.ALIGN_RIGHT);
                        } else {
                            if (func_variables[x] && this.getFieldValue('ARG_NAME' + x)) {
                                this.setFieldValue(func_variables[x], 'ARG_NAME' + x);
                            } else {
                                this.removeInput('ARG' + x);
                            }
                        }
                    }
                    this.arguments_ = func_variables;
                }
            },
            renameProcedure: function(oldName, newName) {
                if (this.last_procedure) {
                    var procedures = this.getProcedures();
                    for (var i in procedures) {
                        if (Blockly.Names.equals(oldName, procedures[i][0])) {
                            this.removeInput('DUMMY');
                            this.appendDummyInput('DUMMY').appendField(new Blockly.FieldDropdown(this.getProcedures()), 'PROCEDURES');
                        }
                    }
                    if (this.last_procedure === oldName) {
                        this.last_procedure = newName;
                    }
                    try {
                        this.setFieldValue(this.last_procedure, 'PROCEDURES');
                    } catch (e) {}
                }
            },
            changeVariables: function() {
                var func_variables = this.getVariables(this.getFieldValue('PROCEDURES')); //get the variables of the actual function
                for (var i = 0; i < this.maxVariableNumber(); i++) { // remove all the possible variable inputs
                    if (this.getInput('ARG' + i) === null) {
                        break;
                    }
                    this.removeInput('ARG' + i);
                }
                for (var variable in func_variables) {
                    this.appendValueInput('ARG' + variable).appendField(func_variables[variable]).setAlign(Blockly.ALIGN_RIGHT);
                }
                this.arguments_ = func_variables;
            },
            mutationToDom: function() {
                // Save the name and arguments (none of which are editable).
                var container = document.createElement('mutation');
                container.setAttribute('name', this.getFieldValue('PROCEDURES'));
                if (typeof this.arguments_ === 'undefined') {
                    this.arguments_ = this.getVariables(this.getFieldValue('PROCEDURES'));
                }
                if (typeof this.arguments_ === 'undefined') {
                    this.arguments_ = [];
                }
                for (var x = 0; x < this.arguments_.length; x++) {
                    var parameter = document.createElement('arg');
                    parameter.setAttribute('name', this.arguments_[x]);
                    container.appendChild(parameter);
                }
                return container;
            },
            domToMutation: function(xmlElement) {
                this.xmlElement = xmlElement;
                // Restore the name and parameters.
                var name = xmlElement.getAttribute('name');
                this.last_procedure = name;
                this.setFieldValue(name, 'PROCEDURES');
                for (var x = 0; x < xmlElement.childNodes.length; x++) {
                    this.appendValueInput('ARG' + x).appendField(xmlElement.childNodes[x].getAttribute('name'), 'ARG_NAME' + x).setAlign(Blockly.ALIGN_RIGHT);
                }
            }
        };
        // Source: src/blocks/procedures_callreturn/procedures_callreturn.js
        /* global Blockly, JST, RoboBlocks */
        /**
         * procedures_callreturn code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.procedures_callreturn = function() {
            // Call a procedure with a return value.
            var funcName = this.getFieldValue('PROCEDURES');
            var args = [];
            var a;
            var code = '';
            for (var x = 0; x < this.getVariables(funcName).length; x++) {
                args[x] = Blockly.Arduino.valueToCode(this, 'ARG' + x, Blockly.Arduino.ORDER_NONE) || 'null';

                a = RoboBlocks.findPinMode(args[x]);
                code += a['code'];
                args[x] = a['pin'];
            }
            var funcArgs = args.join(', ');
            code += JST['procedures_callreturn']({
                'funcName': funcName,
                'funcArgs': funcArgs
            });
            //funcName + '(' + args.join(', ') + ')';
            return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
        };
        Blockly.Blocks.procedures_callreturn = {
            // Variable getter.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_PROCEDURES'), // Variables are handled specially.
            helpUrl: RoboBlocks.URL_PROC,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_PROCEDURES);
                this.appendDummyInput('DUMMY').appendField(new Blockly.FieldDropdown(this.getProcedures()), 'PROCEDURES');
                this.setOutput(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_PROCEDURES_CALLRETURN_TOOLTIP'));
                this.arguments_ = this.getVariables(this.getFieldValue('PROCEDURES'));
                this.quarkConnections_ = null;
                this.quarkArguments_ = null;
                this.last_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
            },
            validName: function(name) {
                if (name && name.length > 0) {
                    var i = 0;
                    while (i < name.length) {
                        if (!isNaN(parseFloat(name[i]))) {
                            name = name.substring(1, name.length);
                        } else {
                            break;
                        }
                    }
                    name = name.replace(/([ ])/g, '_');
                    name = name.replace(/([áàâä])/g, 'a');
                    name = name.replace(/([éèêë])/g, 'e');
                    name = name.replace(/([íìîï])/g, 'i');
                    name = name.replace(/([óòôö])/g, 'o');
                    name = name.replace(/([úùûü])/g, 'u');
                    name = name.replace(/([ñ])/g, 'n');
                    name = name.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|<>\-\&\Ç\%\=\~\{\}\¿\¡\"\@\:\;\-\"\·\|\º\ª\¨\'\·\̣\─\ç\`\´\¨\^])/g, '');
                    i = 0;
                    while (i < name.length) {
                        if (!isNaN(parseFloat(name[i]))) {
                            name = name.substring(1, name.length);
                        } else {
                            break;
                        }
                    }
                    for (var j in Blockly.Arduino.RESERVED_WORDS_) {
                        var reserved_words = Blockly.Arduino.RESERVED_WORDS_.split(',');
                        if (name === reserved_words[j]) {
                            this.setWarningText(RoboBlocks.locales.getKey('LANG_RESERVED_WORDS'));
                            name = '';
                            break;
                        } else {
                            this.setWarningText(null);
                        }
                    }
                }
                return name;
            },
            getProcedures: function() {
                var procedures = Blockly.Procedures.allProcedures();
                var procedures_dropdown = [];
                if (procedures[1].length > 0) {
                    for (var i in procedures[1]) {
                        var proc_name = procedures[1][i][0];
                        proc_name = this.validName(proc_name);
                        procedures_dropdown.push([proc_name, proc_name]);
                    }
                } else {
                    procedures_dropdown.push([RoboBlocks.locales.getKey('LANG_PROCEDURES_DEFRETURN_PROCEDURE'), RoboBlocks.locales.getKey('LANG_PROCEDURES_DEFRETURN_PROCEDURE')]);
                }
                return procedures_dropdown;
            },
            maxVariableNumber: function() {
                var procedures = Blockly.Procedures.allProcedures();
                var procedures_dropdown = [];
                var max_num = 0;
                if (procedures[1].length > 0) {
                    for (var i in procedures[1]) {
                        if (procedures[1][i][1].length > max_num) { // if the length of the variable array is larger than the max_num, equal max_num to that number
                            max_num = procedures[1][i][1].length;
                        }
                    }
                    return max_num;
                } else {
                    procedures_dropdown.push(['', '']);
                }
            },
            getVariables: function(funcName) {
                try {
                    var procedures = Blockly.Procedures.allProcedures();
                    var procedures_dropdown = [];
                    if (procedures[1].length > 0) {
                        for (var i in procedures[1]) {
                            if (procedures[1][i][0] === funcName) {
                                return procedures[1][i][1];
                            }
                        }
                    } else {
                        procedures_dropdown.push(['', '']);
                    }
                } catch (e) {}
            },
            exists: function() {
                var procedures = Blockly.Procedures.allProcedures();
                if (procedures[1].length > 0) {
                    for (var i in procedures[1]) {
                        if (procedures[1][i][0] === this.getFieldValue('PROCEDURES')) {
                            return true;
                        }
                    }
                } else {
                    return false;
                }
            },
            onchange: function() {
                if (!this.workspace) {
                    // Block has been deleted.
                    return;
                }
                if (this.getFieldValue('PROCEDURES') !== this.last_procedure && this.getFieldValue('PROCEDURES')) {
                    this.changeVariables();
                    this.last_procedure = this.getFieldValue('PROCEDURES');
                    this.last_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
                } else if (this.getVariables(this.getFieldValue('PROCEDURES')) !== this.last_variables) {
                    this.addVariables();
                    this.last_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
                    this.last_procedure = this.getFieldValue('PROCEDURES');
                }
                if (!this.exists()) {
                    try {
                        this.setWarningText(RoboBlocks.locales.getKey('LANG_PROCEDURES_CALL_WITHOUT_DEFINITION'));
                    } catch (e) {}
                } else {
                    try {
                        this.setWarningText(null);
                    } catch (e) {}
                }
            },
            addVariables: function() {
                var func_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
                var var_num = 0;
                if (func_variables) {
                    if (!this.last_variables) {
                        this.last_variables = this.getVariables(this.getFieldValue('PROCEDURES'));
                    }
                    if (func_variables.length >= this.last_variables.length) {
                        var_num = func_variables.length;
                    } else if (this.last_variables) {
                        try {
                            var_num = this.last_variables.length;
                        } catch (e) {}
                    }
                    for (var x = 0; x < var_num; x++) {
                        if (this.getInput('ARG' + x) === null) {
                            this.appendValueInput('ARG' + x).appendField(func_variables[x], 'ARG_NAME' + x).setAlign(Blockly.ALIGN_RIGHT);
                        } else {
                            if (func_variables[x] && this.getFieldValue('ARG_NAME' + x)) {
                                this.setFieldValue(func_variables[x], 'ARG_NAME' + x);
                            } else {
                                this.removeInput('ARG' + x);
                            }
                        }
                    }
                    this.arguments_ = func_variables;
                }
            },
            renameProcedure: function(oldName, newName) {
                if (this.last_procedure) {
                    var procedures = this.getProcedures();
                    for (var i in procedures) {
                        if (Blockly.Names.equals(oldName, procedures[i][0])) {
                            this.removeInput('DUMMY');
                            this.appendDummyInput('DUMMY').appendField(new Blockly.FieldDropdown(this.getProcedures()), 'PROCEDURES');
                        }
                    }
                    if (this.last_procedure === oldName) {
                        this.last_procedure = newName;
                    }
                    try {
                        this.setFieldValue(this.last_procedure, 'PROCEDURES');
                    } catch (e) {}
                }
            },
            changeVariables: function() {
                var func_variables = this.getVariables(this.getFieldValue('PROCEDURES')); //get the variables of the actual function
                for (var i = 0; i < this.maxVariableNumber(); i++) { // remove all the possible variable inputs
                    if (this.getInput('ARG' + i) === null) {
                        break;
                    }
                    this.removeInput('ARG' + i);
                }
                for (var variable in func_variables) {
                    this.appendValueInput('ARG' + variable).appendField(func_variables[variable]).setAlign(Blockly.ALIGN_RIGHT);
                }
                this.arguments_ = func_variables;
            },
            mutationToDom: function() {
                // Save the name and arguments (none of which are editable).
                var container = document.createElement('mutation');
                container.setAttribute('name', this.getFieldValue('PROCEDURES'));
                if (typeof this.arguments_ === 'undefined') {
                    this.arguments_ = this.getVariables(this.getFieldValue('PROCEDURES'));
                }
                if (typeof this.arguments_ === 'undefined') {
                    this.arguments_ = [];
                }
                for (var x = 0; x < this.arguments_.length; x++) {
                    var parameter = document.createElement('arg');
                    parameter.setAttribute('name', this.arguments_[x]);
                    container.appendChild(parameter);
                }
                return container;
            },
            domToMutation: function(xmlElement) {
                this.xmlElement = xmlElement;
                // Restore the name and parameters.
                var name = xmlElement.getAttribute('name');
                this.last_procedure = name;
                this.setFieldValue(name, 'PROCEDURES');
                for (var x = 0; x < xmlElement.childNodes.length; x++) {
                    this.appendValueInput('ARG' + x).appendField(xmlElement.childNodes[x].getAttribute('name'), 'ARG_NAME' + x).setAlign(Blockly.ALIGN_RIGHT);
                }
            }
        };
        // Source: src/blocks/procedures_defnoreturn/procedures_defnoreturn.js
        /* global Blockly, JST, RoboBlocks */
        /**
         * procedures_defnoreturn code generation
         * @return {String} Code generated with block parameters
         */
        // Defining a procedure without a return value uses the same generator as
        // a procedure with a return value.
        Blockly.Arduino.procedures_defnoreturn = function() {
            // Define a procedure with a return value.
            var funcName = this.getFieldValue('NAME');
            var branch = Blockly.Arduino.statementToCode(this, 'STACK');
            branch = branch.replace(/&quot;/g, '"');
            if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
                branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + this.id + '\'') + branch;
            }
            // branch=branch.replace(/&amp;/g, '');

            var returnType = 'void';
            var args = this.paramString;
            var code = JST['procedures_defnoreturn']({
                'returnType': returnType,
                'funcName': funcName,
                'args': args,
                'branch': branch
            });
            // code=code.replace(/&amp;/g, '');

            code = Blockly.Arduino.scrub_(this, code);
            Blockly.Arduino.definitions_[funcName] = code;
            return null;
        };
        Blockly.Blocks.procedures_defnoreturn = {
            // Define a procedure with no return value.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_PROCEDURES'),
            helpUrl: RoboBlocks.URL_PROC_NO_RET,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_PROCEDURES);
                var name = Blockly.Procedures.findLegalName(RoboBlocks.locales.getKey('LANG_PROCEDURES_DEFNORETURN_PROCEDURE'), this);
                this.appendDummyInput().appendField(new Blockly.FieldTextInput(name, Blockly.Procedures.rename), 'NAME').appendField('', 'PARAMS');
                // this.appendDummyInput().appendField(new Blockly.FieldTextInput(name), 'NAME').appendField('', 'PARAMS');
                this.appendStatementInput('STACK').appendField(RoboBlocks.locales.getKey('LANG_PROCEDURES_DEFNORETURN_DO'));
                this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
                this.setTooltip(RoboBlocks.locales.getKey('LANG_PROCEDURES_DEFNORETURN_TOOLTIP'));
                this.arguments_ = [];
                this.type_arguments_ = [];
            },
            updateParams_: function() {
                // Check for duplicated arguments.
                var badArg = false;
                var hash = {};
                for (var x = 0; x < this.arguments_.length; x++) {
                    if (hash['arg_' + this.arguments_[x].toLowerCase()]) {
                        badArg = true;
                        break;
                    }
                    hash['arg_' + this.arguments_[x].toLowerCase()] = true;
                }
                if (badArg) {
                    try {
                        this.setWarningText(RoboBlocks.locales.getKey('LANG_PROCEDURES_DEF_DUPLICATE_WARNING'));
                    } catch (err) {
                        console.log('Captured error: ', err);
                    }
                } else {
                    this.setWarningText(null);
                }
                // Merge the arguments into a human-readable list.
                var params = [];
                for (var i in this.arguments_) {
                    params.push(this.type_arguments_[i] + ' ' + this.arguments_[i]);
                }
                this.paramString = params.join(', ');
                this.setFieldValue(this.paramString, 'PARAMS');
            },
            mutationToDom: function() {
                var container = document.createElement('mutation');
                for (var x = 0; x < this.arguments_.length; x++) {
                    var parameter = document.createElement('arg_name');
                    parameter.setAttribute('name', this.arguments_[x]);
                    container.appendChild(parameter);
                    parameter = document.createElement('arg_type');
                    parameter.setAttribute('name', this.type_arguments_[x]);
                    container.appendChild(parameter);
                }
                return container;
            },
            domToMutation: function(xmlElement) {
                this.arguments_ = [];
                this.type_arguments_ = [];
                var childNode;
                for (var x = 0; x < xmlElement.childNodes.length; x++) {
                    childNode = xmlElement.childNodes[x];
                    if (childNode.nodeName.toLowerCase() === 'arg_name') {
                        this.arguments_.push(childNode.getAttribute('name'));
                    }
                    if (childNode.nodeName.toLowerCase() === 'arg_type') {
                        this.type_arguments_.push(childNode.getAttribute('name'));
                    }
                }
                this.updateParams_();
            },
            decompose: function(workspace) {
                var containerBlock = Blockly.Block.obtain(workspace, 'procedures_mutatorcontainer');
                containerBlock.initSvg();
                var connection = containerBlock.getInput('STACK').connection;
                for (var x = 0; x < this.arguments_.length; x++) {
                    var paramBlock = Blockly.Block.obtain(workspace, 'procedures_mutatorarg');
                    paramBlock.initSvg();
                    paramBlock.setFieldValue(this.type_arguments_[x], 'TYPE');
                    paramBlock.setFieldValue(this.arguments_[x], 'NAME');
                    // Store the old location.
                    paramBlock.oldLocation = x;
                    connection.connect(paramBlock.previousConnection);
                    connection = paramBlock.nextConnection;
                }
                // Initialize procedure's callers with blank IDs.
                Blockly.Procedures.mutateCallers(this.getFieldValue('NAME'), this.workspace, this.arguments_, null);
                Blockly.Procedures.mutateCallers(this.getFieldValue('TYPE'), this.workspace, this.type_arguments_, null);
                return containerBlock;
            },
            compose: function(containerBlock) {
                this.arguments_ = [];
                this.paramIds_ = [];
                this.type_arguments_ = [];
                var paramBlock = containerBlock.getInputTargetBlock('STACK');
                var varName;
                while (paramBlock) {
                    varName = paramBlock.getFieldValue('NAME');
                    this.type_arguments_.push(paramBlock.getFieldValue('TYPE'));
                    this.arguments_.push(varName);
                    this.paramIds_.push(paramBlock.id);
                    paramBlock = paramBlock.nextConnection && paramBlock.nextConnection.targetBlock();
                }
                this.updateParams_();
                Blockly.Procedures.mutateCallers(this.getFieldValue('NAME'), this.workspace, this.arguments_, this.paramIds_);
            },
            dispose: function() {
                var name = this.getFieldValue('NAME');
                var editable = this.editable;
                var workspace = this.workspace;
                // Call parent's destructor.
                Blockly.Block.prototype.dispose.apply(this, arguments);
                if (editable) {
                    // Dispose of any callers.
                    Blockly.Procedures.disposeCallers(name, workspace);
                }
            },
            getProcedureDef: function() {
                // Return the name of the defined procedure,
                // a list of all its arguments,
                // and that it DOES NOT have a return value.
                return [this.getFieldValue('NAME'), this.arguments_, false];
            },
            getVars: function() {
                return this.arguments_;
            },
            renameVar: function(oldName, newName) {
                var change = false;
                for (var x = 0; x < this.arguments_.length; x++) {
                    if (Blockly.Names.equals(oldName, this.arguments_[x])) {
                        newName = this.validName(newName);
                        this.arguments_[x] = newName;
                        change = true;
                    }
                }
                if (change) {
                    this.updateParams_();
                    // Update the mutator's variables if the mutator is open.
                    if (this.mutator.isVisible_()) {
                        var blocks = this.mutator.workspace_.getAllBlocks();
                        var block;
                        for (x = 0; blocks.length; x++) {
                            block = blocks[x];
                            if (block.type === 'procedures_mutatorarg' && Blockly.Names.equals(oldName, block.getFieldValue('NAME'))) {
                                block.setFieldValue(newName, 'NAME');
                            }
                        }
                    }
                }
            },
            validName: function(name) {
                if (name && name.length > 0) {
                    var i = 0;
                    while (i < name.length) {
                        if (!isNaN(parseFloat(name[i]))) {
                            name = name.substring(1, name.length);
                        } else {
                            break;
                        }
                    }
                    name = name.replace(/([ ])/g, '_');
                    name = name.replace(/([áàâä])/g, 'a');
                    name = name.replace(/([éèêë])/g, 'e');
                    name = name.replace(/([íìîï])/g, 'i');
                    name = name.replace(/([óòôö])/g, 'o');
                    name = name.replace(/([úùûü])/g, 'u');
                    name = name.replace(/([ñ])/g, 'n');
                    name = name.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|<>\-\&\Ç\%\=\~\{\}\¿\¡\"\@\:\;\-\"\·\|\º\ª\¨\'\·\̣\─\ç\`\´\¨\^])/g, '');
                    i = 0;
                    while (i < name.length) {
                        if (!isNaN(parseFloat(name[i]))) {
                            name = name.substring(1, name.length);
                        } else {
                            break;
                        }
                    }
                    for (var j in Blockly.Arduino.RESERVED_WORDS_) {
                        this.reserved_words = Blockly.Arduino.RESERVED_WORDS_.split(',');
                        if (name === this.reserved_words[j]) {
                            this.setWarningText(RoboBlocks.locales.getKey('LANG_RESERVED_WORDS'));
                            name = '';
                            break;
                        } else {
                            this.setWarningText(null);
                        }
                    }
                }
                return name;
            },
            onchange: function() {
                if (this.last_procedure !== this.getFieldValue('NAME')) {
                    var name = this.getFieldValue('NAME');
                    name = this.validName(name);
                    try {
                        this.setFieldValue(name, 'NAME');
                    } catch (e) {}
                    this.last_procedure = name;
                }
            }
        };
        Blockly.Blocks.procedures_mutatorcontainer = {
            // Procedure container (for mutator dialog).
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_PROCEDURES);
                this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_PROCEDURES_MUTATORCONTAINER_Field'));
                this.appendStatementInput('STACK');
                this.setTooltip('');
                this.contextMenu = false;
            }
        };
        Blockly.Blocks.procedures_mutatorarg = {
            // Procedure argument (for mutator dialog).
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_PROCEDURES);
                this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_PROCEDURES_MUTATORARG_Field')).appendField(new Blockly.FieldDropdown([
                    [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_INTEGER'), 'int'],
                    [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_INTEGER_LONG'), 'long'],
                    [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_INTEGER_ULONG'), 'unsigned long'],
                    [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_BYTE'), 'byte'],
                    [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_FLOAT'), 'float'],
                    [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_CHAR'), 'char'],
                    [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_BOOLEAN'), 'boolean'],
                    [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_STRING'), 'String']
                ]), 'TYPE').appendField(new Blockly.FieldTextInput('x', Blockly.Blocks.procedures_mutatorarg.validator), 'NAME');
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip('');
                this.contextMenu = false;
            },
            onchange: function() {
                if (this.last_variable !== this.getFieldValue('NAME')) {
                    var name = this.getFieldValue('NAME');
                    name = this.validName(name);
                    try {
                        this.setFieldValue(name, 'NAME');
                    } catch (e) {}
                    this.last_variable = name;
                }
            },
            validName: Blockly.Blocks.procedures_defnoreturn.validName
        };
        Blockly.Blocks.procedures_mutatorarg.validator = function(newVar) {
            // Merge runs of whitespace.  Strip leading and trailing whitespace.
            // Beyond this, all names are legal.
            newVar = newVar.replace(/[\s\xa0]+/g, ' ').replace(/^ | $/g, '');
            return newVar || null;
        };

        // Source: src/blocks/procedures_defreturn/procedures_defreturn.js
        /* global Blockly, JST, RoboBlocks */
        /**
         * procedures_defreturn code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.procedures_defreturn = function() {
            // Define a procedure with a return value.
            var funcName = this.getFieldValue('NAME');
            var branch = Blockly.Arduino.statementToCode(this, 'STACK');
            branch = branch.replace(/&quot;/g, '"');

            if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
                branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + this.id + '\'') + branch;
            }
            var returnValue = Blockly.Arduino.valueToCode(this, 'RETURN', Blockly.Arduino.ORDER_NONE) || '';
            var code = '';

            returnValue = returnValue.replace(/&quot;/g, '"');
            var returnType = this.getReturnType();
            if (returnValue) {
                var a = RoboBlocks.findPinMode(returnValue);
                returnValue = a['code'];
                returnValue += '  return ' + a['pin'] + ';\n';
            }
            var args = this.paramString;
            code += JST['procedures_defreturn']({
                'returnType': returnType,
                'funcName': funcName,
                'args': args,
                'branch': branch,
                'returnValue': returnValue
            });
            // code=code.replace(/&amp;/g, '');

            code = Blockly.Arduino.scrub_(this, code);
            Blockly.Arduino.definitions_[funcName] = code;
            return null;
        };
        Blockly.Blocks.procedures_defreturn = {
            // Define a procedure with a return value.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_PROCEDURES'), // Procedures are handled specially.
            helpUrl: RoboBlocks.URL_PROC,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_PROCEDURES);
                var name = Blockly.Procedures.findLegalName(RoboBlocks.locales.getKey('LANG_PROCEDURES_DEFRETURN_PROCEDURE'), this);
                this.appendDummyInput().appendField(new Blockly.FieldTextInput(name, Blockly.Procedures.rename), 'NAME').appendField('', 'PARAMS');
                this.appendStatementInput('STACK').appendField(RoboBlocks.locales.getKey('LANG_PROCEDURES_DEFRETURN_DO'));
                this.appendValueInput('RETURN').setAlign(Blockly.ALIGN_RIGHT).appendField(RoboBlocks.locales.getKey('LANG_PROCEDURES_DEFRETURN_RETURN'));
                this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
                this.setTooltip(RoboBlocks.locales.getKey('LANG_PROCEDURES_DEFRETURN_TOOLTIP'));
                this.arguments_ = [];
            },
            isVariable: function(varValue) {
                for (var i in Blockly.Variables.allVariables()) {
                    if (Blockly.Variables.allVariables()[i] === varValue) {
                        return true;
                    }
                }
                return false;
            },
            getReturnType: function() {
                var returnType;
                var returnValue = Blockly.Arduino.valueToCode(this, 'RETURN', Blockly.Arduino.ORDER_NONE) || '';
                var a = RoboBlocks.findPinMode(returnValue);
                // code+=a['code'];
                returnValue = a['pin'];

                var isFunction = false;

                for (var i in Blockly.Arduino.definitions_) {
                    if (Blockly.Arduino.definitions_[i].search(returnValue + ' \\(') >= 0) {
                        isFunction = true;
                        break;
                    }
                }
                if (!returnValue) {
                    returnType = 'void';
                }
                if (returnValue.search('"') >= 0) {
                    returnType = 'String';
                } else if (isFunction) { //returnValue.search('\\(') >= 0 && returnValue.search('\\)') >= 0) {
                    for (i in Blockly.Arduino.definitions_) {
                        if (Blockly.Arduino.definitions_[i].search(returnValue) >= 0) {
                            if (Blockly.Arduino.definitions_[i].substring(0, 3) === 'int' || Blockly.Arduino.definitions_[i].substring(0, 3) === '//b') { //bqbat function
                                if (Blockly.Arduino.definitions_[i].substring(0, 5) === 'int *' || Blockly.Arduino.definitions_[i].substring(0, 5) === 'int _') {
                                    returnType = 'int *';
                                } else {
                                    returnType = 'int';
                                }
                            } else if (Blockly.Arduino.definitions_[i].substring(0, 3) === 'Str') {
                                returnType = 'String';
                            } else {
                                returnType = '';
                            }
                        }
                    }
                } else if (this.isVariable(returnValue)) {
                    returnType = RoboBlocks.variables[returnValue][0];
                } else if ((returnValue.search('analogRead') >= 0) || (returnValue.search('digitalRead') >= 0) || (returnValue.search('Distanc') >= 0) || (!isNaN(parseFloat(returnValue)) || (returnValue.search('random') >= 0)) || (returnValue.search('map') >= 0) || returnValue.search('\\[') >= 0 || (returnValue.search('abs') >= 0) || (returnValue.search('sqrt') >= 0) || (returnValue.search('log') >= 0) || (returnValue.search('log') >= 0) || (returnValue.search('exp') >= 0) || (returnValue.search('pow') >= 0)) {
                    returnType = 'int';
                } else if (returnValue.search('readJoystick') >= 0 || returnValue[0] === '{') {
                    returnType = 'int *';
                } else {
                    returnType = 'void';
                }
                return returnType;
            },
            updateParams_: Blockly.Blocks.procedures_defnoreturn.updateParams_,
            decompose: Blockly.Blocks.procedures_defnoreturn.decompose,
            compose: Blockly.Blocks.procedures_defnoreturn.compose,
            dispose: Blockly.Blocks.procedures_defnoreturn.dispose,
            getProcedureDef: function() {
                // Return the name of the defined procedure,
                // a list of all its arguments,
                // and that it DOES have a return value.
                return [this.getFieldValue('NAME'), this.arguments_, true];
            },
            getVars: Blockly.Blocks.procedures_defnoreturn.getVars,
            renameVar: Blockly.Blocks.procedures_defnoreturn.renameVar,
            mutationToDom: Blockly.Blocks.procedures_defnoreturn.mutationToDom,
            domToMutation: Blockly.Blocks.procedures_defnoreturn.domToMutation,
            validName: Blockly.Blocks.procedures_defnoreturn.validName,
            onchange: Blockly.Blocks.procedures_defnoreturn.onchange
        };

        // Source: src/blocks/procedures_ifreturn/procedures_ifreturn.js
        /* global Blockly, RoboBlocks */

        /**
         * procedures_ifreturn code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.procedures_ifreturn = function() {
            // Conditionally return value from a procedure.
            var condition = Blockly.Arduino.valueToCode(this, 'CONDITION',
                Blockly.Arduino.ORDER_NONE) || '';
            var code = '';
            var a = RoboBlocks.findPinMode(condition);
            code += a['code'];
            condition = a['pin'];

            code += 'if (' + condition + ') {\n';
            // if (this.hasReturnValue_) {
            var value = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_NONE) || '';
            a = RoboBlocks.findPinMode(value);
            code += a['code'];
            code += '  return (' + value + ');\n';
            // } else {
            //     code += '  return;\n';
            // }
            code += '}\n';
            return code;
        };



        Blockly.Blocks.procedures_ifreturn = {
            // Conditionally return value from a procedure.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_PROCEDURES'),
            helpUrl: RoboBlocks.URL_PROC,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_PROCEDURES);
                this.appendValueInput('CONDITION')
                    .setCheck(Boolean)
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_IF_MSG_IF'));
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_PROCEDURES_DEFRETURN_RETURN'));
                this.appendValueInput('VALUE');
                this.setInputsInline(true);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_PROCEDURES_IFRETURN_TOOLTIP'));
                this.hasReturnValue_ = true;
            },
            mutationToDom: function() {
                // Save whether this block has a return value.
                var container = document.createElement('mutation');
                container.setAttribute('value', Number(this.hasReturnValue_));
                return container;
            },
            domToMutation: function(xmlElement) {
                // Restore whether this block has a return value.
                var value = xmlElement.getAttribute('value');
                this.hasReturnValue_ = (value === 1);
                // if (!this.hasReturnValue_) {
                //     this.removeInput('VALUE');
                // }
            },
            onchange: function() {
                if (!this.workspace) {
                    // Block has been deleted.
                    return;
                }
                var legal = false;
                // Is the block nested in a procedure?
                var block = this;
                do {
                    if (block.type === 'procedures_defreturn') {
                        legal = true;
                        break;
                    }
                    block = block.getSurroundParent();
                } while (block);
                if (legal) {
                    // If needed, toggle whether this block has a return value.
                    // if (block.type === 'procedures_defnoreturn' && this.hasReturnValue_) {
                    //     this.removeInput('VALUE');
                    //     this.hasReturnValue_ = false;
                    // } else if (block.type === 'procedures_defreturn' && !this.hasReturnValue_) {
                    //     this.appendValueInput('VALUE');
                    //     this.hasReturnValue_ = true;
                    // }
                    this.setWarningText(null);
                } else {
                    try {
                        this.setWarningText(RoboBlocks.locales.getKey('LANG_PROCEDURES_IFRETURN_WARNING'));
                    } catch (err) {
                        console.log('Captured error: ', err);
                    }
                }
            }
        };

        // Source: src/blocks/procedures_return/procedures_return.js
        /* global Blockly, RoboBlocks */

        /**
         * procedures_ifreturn code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.procedures_return = function() {
            // Conditionally return value from a procedure.
            var code = '';
            var value = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_NONE) || '';
            var a = RoboBlocks.findPinMode(value);
            code += a['code'];
            code += '  return (' + value + ');\n';
            return code;
        };



        Blockly.Blocks.procedures_return = {
            // Conditionally return value from a procedure.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_PROCEDURES'),
            helpUrl: RoboBlocks.URL_PROC,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_PROCEDURES);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_PROCEDURES_RETURN'));
                this.appendValueInput('VALUE');
                this.setInputsInline(true);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_PROCEDURES_RETURN_TOOLTIP'));
                this.hasReturnValue_ = true;
            },
            mutationToDom: function() {
                // Save whether this block has a return value.
                var container = document.createElement('mutation');
                container.setAttribute('value', Number(this.hasReturnValue_));
                return container;
            },
            domToMutation: function(xmlElement) {
                // Restore whether this block has a return value.
                var value = xmlElement.getAttribute('value');
                this.hasReturnValue_ = (value === 1);
            },
            onchange: function() {
                if (!this.workspace) {
                    // Block has been deleted.
                    return;
                }
                var legal = false;
                // Is the block nested in a procedure?
                var block = this;
                do {
                    if (block.type === 'procedures_defreturn') {
                        legal = true;
                        break;
                    }
                    block = block.getSurroundParent();
                } while (block);
                if (legal) {
                    this.setWarningText(null);
                } else {
                    try {
                        this.setWarningText(RoboBlocks.locales.getKey('LANG_PROCEDURES_IFRETURN_WARNING'));
                    } catch (err) {
                        console.log('Captured error: ', err);
                    }
                }
            }
        };

        // Source: src/blocks/serial_available/serial_available.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * serial_available code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.serial_available = function() {
            var branch = Blockly.Arduino.statementToCode(this, 'DO');
            branch = branch.replace(/&quot;/g, '"');
            // branch=branch.replace(/&amp;/g, '');

            var code = JST['serial_available']({
                'branch': branch
            });
            return code;
        };

        /**
         * serial_available block definition
         * @type {Object}
         */
        Blockly.Blocks.serial_available = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            helpUrl: RoboBlocks.URL_SERIE,
            tags: ['serial'],

            /**
             * serial_available initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_AVAILABLE'));
                this.appendStatementInput('DO')
                    .appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_REPEAT_INPUT_DO'));
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP'));
            }
        };

        // Source: src/blocks/serial_parseint/serial_parseint.js
        /* global Blockly, profiles, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * serial_parseint code generation
         * @return {Number} First valid (long) integer number from the serial buffer
         */

        Blockly.Arduino.serial_parseint = function() {
            Blockly.Arduino.setups_['setup_serial'] = JST['serial_parseint_setups']({
                'bitrate': profiles.default.serial
            });
            var code = 'Serial.parseInt()';

            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * serial_parseint block definition
         * @type {Object}
         */
        Blockly.Blocks.serial_parseint = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            helpUrl: RoboBlocks.URL_SERIE,
            tags: ['serial'],

            /**
             * serial_paraseint initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PARSEINT'));
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PARSEINT_TOOLTIP'));
            }
        };

        // Source: src/blocks/serial_print/serial_print.js
        /* global Blockly, profiles, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * serial_print code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.serial_print = function() {
            var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC);
            var code = '';
            var a = RoboBlocks.findPinMode(content);
            code += a['code'];
            content = a['pin'];
            Blockly.Arduino.setups_['setup_serial'] = JST['serial_print_setups']({
                'bitrate': profiles.
                default.serial
            });
            code += JST['serial_print']({
                'content': content
            });
            return code;
        };
        /**
         * serial_print block definition
         * @type {Object}
         */
        Blockly.Blocks.serial_print = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            helpUrl: RoboBlocks.URL_SERIE,
            tags: ['serial'],
            /**
             * serial_print initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendValueInput('CONTENT', String).appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT'));
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT_TOOLTIP'));
            }
        };
        // Source: src/blocks/serial_print_format/serial_print_format.js
        /* global Blockly, profiles, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * serial_print_format code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.serial_print_format = function() {
            var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC);
            var varFormat = this.getFieldValue('FORMAT');
            var code = '';
            var a = RoboBlocks.findPinMode(content);
            code += a['code'];
            content = a['pin'];
            Blockly.Arduino.setups_['setup_serial'] = JST['serial_print_format_setups']({
                'bitrate': profiles.
                default.serial
            });
            code += JST['serial_print_format']({
                'content': content,
                'format': varFormat
            });
            return code;
        };
        /**
         * serial_print_format block definition
         * @type {Object}
         */
        Blockly.Blocks.serial_print_format = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            helpUrl: RoboBlocks.URL_SERIE,
            tags: ['serial'],
            /**
             * serial_print_format initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendValueInput('CONTENT', String).appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT_FORMAT')).
                appendField(new Blockly.FieldDropdown([
                    [RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT_FORMAT_1'), 'BIN'],
                    [RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT_FORMAT_2'), 'OCT'],
                    [RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT_FORMAT_3'), 'DEC'],
                    [RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT_FORMAT_4'), 'HEX'],
                    [RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT_FORMAT_5'), '0'],
                    [RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT_FORMAT_6'), '1'],
                    [RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT_FORMAT_7'), '2'],
                    [RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT_FORMAT_8'), '3'],
                    [RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT_FORMAT_9'), '4'],
                ]), 'FORMAT');
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT_FORMAT_TOOLTIP'));
            }
        };
        // Source: src/blocks/serial_println/serial_println.js
        /* global Blockly, profiles, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * serial_println code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.serial_println = function() {
            var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC);
            var code = '';
            var a = RoboBlocks.findPinMode(content);
            code += a['code'];
            content = a['pin'];
            Blockly.Arduino.setups_['setup_serial'] = JST['serial_println_setups']({
                'bitrate': profiles.
                default.serial
            });
            code += JST['serial_println']({
                'content': content
            });
            return code;
        };
        /**
         * serial_println block definition
         * @type {Object}
         */
        Blockly.Blocks.serial_println = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            helpUrl: RoboBlocks.URL_SERIE,
            tags: ['serial'],
            /**
             * serial_println initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendValueInput('CONTENT', String).appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINTLN'));
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP'));
            }
        };
        // Source: src/blocks/serial_println_format/serial_println_format.js
        /* global Blockly, profiles, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * serial_println_format code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.serial_println_format = function() {
            var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC);
            var varFormat = this.getFieldValue('FORMAT');
            var code = '';
            var a = RoboBlocks.findPinMode(content);
            code += a['code'];
            content = a['pin'];
            Blockly.Arduino.setups_['setup_serial'] = JST['serial_println_format_setups']({
                'bitrate': profiles.default.serial
            });
            code += JST['serial_println_format']({
                'content': content,
                'format': varFormat
            });
            return code;
        };
        /**
         * serial_println_format block definition
         * @type {Object}
         */
        Blockly.Blocks.serial_println_format = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            helpUrl: RoboBlocks.URL_SERIE,
            tags: ['serial'],
            /**
             * serial_print_format initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendValueInput('CONTENT', String).appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINTLN_FORMAT')).
                appendField(new Blockly.FieldDropdown([
                    [RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT_FORMAT_1'), 'BIN'],
                    [RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT_FORMAT_2'), 'OCT'],
                    [RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT_FORMAT_3'), 'DEC'],
                    [RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT_FORMAT_4'), 'HEX'],
                    [RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT_FORMAT_5'), '0'],
                    [RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT_FORMAT_6'), '1'],
                    [RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT_FORMAT_7'), '2'],
                    [RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT_FORMAT_8'), '3'],
                    [RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINT_FORMAT_9'), '4'],
                ]), 'FORMAT');
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_PRINTLN_FORMAT_TOOLTIP'));
            }
        };
        // Source: src/blocks/serial_read/serial_read.js
        /* global Blockly, profiles, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * serial_read code generation
         * @return {int} Code generated with block parameters
         */

        Blockly.Arduino.serial_read = function() {

            Blockly.Arduino.setups_['setup_serial'] = JST['serial_read_setups']({
                'bitrate': profiles.default.serial
            });
            var code = JST['serial_read']({});

            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * serial_read block definition
         * @type {Object}
         */
        Blockly.Blocks.serial_read = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            helpUrl: RoboBlocks.URL_SERIE,
            tags: ['serial'],

            /**
             * serial_read initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_READ'));
                this.setOutput(true, String);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_READ_TOOLTIP'));
            }
        };

        // Source: src/blocks/serial_readstring/serial_readstring.js
        /* global Blockly, profiles, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * serial_readstring code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.serial_readstring = function() {

            Blockly.Arduino.setups_['setup_serial'] = JST['serial_readstring_setups']({
                'bitrate': profiles.default.serial
            });
            var code = JST['serial_readstring']({});

            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * serial_readstring block definition
         * @type {Object}
         */
        Blockly.Blocks.serial_readstring = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            helpUrl: RoboBlocks.URL_SERIE,
            tags: ['serial'],

            /**
             * serial_readstring initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_READSTRING'));
                this.setOutput(true, String);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_READSTRING_TOOLTIP'));
            }
        };

        // Source: src/blocks/servo_cont/servo_cont.js
        /* global Blockly, options,JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * servo_cont code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.servo_cont = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '';
            var value_degree = this.getFieldValue('ROT') || '';
            var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC) || '';
            Blockly.Arduino.definitions_['include_servo'] = JST['servo_cont_definitions_include']({});
            var code = '';
            var a = RoboBlocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];
            var b = RoboBlocks.findPinMode(delay_time);
            code += b['code'];
            delay_time = b['pin'];


            if (RoboBlocks.isVariable(dropdown_pin)) {
                code += JST['servo_cont_setups']({
                    'dropdown_pin': dropdown_pin
                });
            } else {
                Blockly.Arduino.setups_['servo_cont_' + dropdown_pin] = JST['servo_cont_setups']({
                    'dropdown_pin': dropdown_pin
                });
            }
            code += JST['servo_cont']({
                'dropdown_pin': dropdown_pin,
                'value_degree': value_degree,
                'delay_time': delay_time
            });
            return code;
        };
        /**
         * servo_cont block definition
         * @type {Object}
         */
        Blockly.Blocks.servo_cont = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_MOTOR'),
            tags: ['servo'],
            helpUrl: RoboBlocks.URL_CONTINUOUS_ROTATION_SERVO,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_MOTOR);
                this.appendValueInput('PIN').appendField(RoboBlocks.locales.getKey('LANG_MOTOR_SERVO_CONT')).appendField(new Blockly.FieldImage('img/blocks/bqservo03.png', 208 * options.zoom, 126 * options.zoom)).appendField(RoboBlocks.locales.getKey('LANG_MOTOR_SERVO_CONT_PIN')).setCheck(Number);
                this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_MOTOR_SERVO_CONT_ROT')).setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown([
                    [RoboBlocks.locales.getKey('LANG_MOTOR_SERVO_CONT_TURN_CLOCKWISE') || 'CLOCKWISE', '0'],
                    [RoboBlocks.locales.getKey('LANG_MOTOR_SERVO_CONT_TURN_COUNTERCLOCKWISE') || 'ANTICLOCKWISE', '180'],
                    [RoboBlocks.locales.getKey('LANG_MOTOR_SERVO_CONT_STOPPED') || 'STOPPED', '90']
                ]), 'ROT');
                this.appendValueInput('DELAY_TIME', Number).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(RoboBlocks.locales.getKey('LANG_MOTOR_SERVO_CONT_DELAY'));
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_MOTOR_SERVO_CONT_TOOLTIP'));
            },
            isVariable: function(varValue) {
                for (var i in Blockly.Variables.allVariables()) {
                    if (Blockly.Variables.allVariables()[i] === varValue) {
                        return true;
                    }
                }
                return false;
            },
            onchange: function() {
                // try {
                //     if (this.isVariable(Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC))) {
                //         this.setWarningText(RoboBlocks.locales.getKey('LANG_MOTOR_SERVO_WARNING'));
                //     } else {
                //         this.setWarningText(null);
                //     }
                // } catch (e) {}
            }
        };
        // Source: src/blocks/servo_move/servo_move.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * servo_move code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.servo_move = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
            var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
            var delay_time = Blockly.Arduino.valueToCode(this, 'DELAY_TIME', Blockly.Arduino.ORDER_ATOMIC);
            Blockly.Arduino.definitions_['include_servo'] = JST['servo_move_definitions_include']({
                'dropdown_pin': dropdown_pin
            });
            var code = '';
            var a = RoboBlocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];
            var b = RoboBlocks.findPinMode(delay_time);
            code += b['code'];
            delay_time = b['pin'];
            var c = RoboBlocks.findPinMode(value_degree);
            code += c['code'];
            value_degree = c['pin'];

            if (RoboBlocks.isVariable(dropdown_pin)) {
                code += JST['servo_move_setups']({
                    'dropdown_pin': dropdown_pin
                });
            } else {
                Blockly.Arduino.setups_['servo_move_' + dropdown_pin] = JST['servo_move_setups']({
                    'dropdown_pin': dropdown_pin
                });
            }

            code += JST['servo_move']({
                'dropdown_pin': dropdown_pin,
                'value_degree': value_degree,
                'delay_time': delay_time
            });
            return code;
        };
        /**
         * servo_move block definition
         * @type {Object}
         */
        Blockly.Blocks.servo_move = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_MOTOR'),
            tags: ['servo'],
            helpUrl: RoboBlocks.URL_SERVO,
            /**
             * servo_move initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_MOTOR);
                this.appendValueInput('PIN').appendField(RoboBlocks.locales.getKey('LANG_MOTOR_SERVO_MOVE')).appendField(new Blockly.FieldImage('img/blocks/bqservo01.png', 208 * options.zoom, 126 * options.zoom)).appendField(RoboBlocks.locales.getKey('LANG_MOTOR_SERVO_MOVE_PIN')).setCheck(Number);
                this.appendValueInput('DEGREE', Number).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(RoboBlocks.locales.getKey('LANG_MOTOR_SERVO_MOVE_DEGREES'));
                this.appendValueInput('DELAY_TIME', Number).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(RoboBlocks.locales.getKey('LANG_MOTOR_SERVO_MOVE_DELAY'));
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_MOTOR_SERVO_MOVE_TOOLTIP'));
            },
            isVariable: function(varValue) {
                for (var i in Blockly.Variables.allVariables()) {
                    if (Blockly.Variables.allVariables()[i] === varValue) {
                        return true;
                    }
                }
                return false;
            },
            onchange: function() {
                // try {
                //     if (this.isVariable(Blockly.Arduino.valueToCode(this,'PIN', Blockly.Arduino.ORDER_ATOMIC))) {
                //         this.setWarningText(RoboBlocks.locales.getKey('LANG_MOTOR_SERVO_WARNING'));
                //     } else {
                //         this.setWarningText(null);
                //     }
                // } catch (e) {}
            }
        };
        // Source: src/blocks/stepper_move/stepper_move.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * stepper_move code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.stepper_move = function() {
            var value_spr = Blockly.Arduino.valueToCode(this, 'SPR', Blockly.Arduino.ORDER_ATOMIC);
            var pin1 = Blockly.Arduino.valueToCode(this, 'PIN1', Blockly.Arduino.ORDER_ATOMIC);
            var pin2 = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);
            var pin3 = Blockly.Arduino.valueToCode(this, 'PIN3', Blockly.Arduino.ORDER_ATOMIC);
            var pin4 = Blockly.Arduino.valueToCode(this, 'PIN4', Blockly.Arduino.ORDER_ATOMIC);
            var value_speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
            var value_steps = Blockly.Arduino.valueToCode(this, 'STEPS', Blockly.Arduino.ORDER_ATOMIC);
            Blockly.Arduino.definitions_['include_stepper'] = JST['stepper_move_definitions_include']({
                'pin1': pin1
            });
            var code = '';
            var a = RoboBlocks.findPinMode(value_spr);
            code += a['code'];
            value_spr = a['pin'];
            var b = RoboBlocks.findPinMode(pin1);
            code += b['code'];
            pin1 = b['pin'];
            var c = RoboBlocks.findPinMode(pin2);
            code += c['code'];
            pin2 = c['pin'];
            var d = RoboBlocks.findPinMode(pin3);
            code += d['code'];
            pin3 = d['pin'];
            var e = RoboBlocks.findPinMode(pin4);
            code += e['code'];
            pin4 = e['pin'];
            var f = RoboBlocks.findPinMode(value_steps);
            code += f['code'];
            value_steps = f['pin'];
            var g = RoboBlocks.findPinMode(value_speed);
            code += g['code'];
            value_speed = g['pin'];

            if (RoboBlocks.isVariable(pin1)) {
                code += JST['stepper_move_setups']({
                    'spr': value_spr,
                    'pin1': pin1,
                    'pin2': pin2,
                    'pin3': pin3,
                    'pin4': pin4
                });
            } else {
                Blockly.Arduino.setups_['stepper_move_' + pin1] = JST['stepper_move_setups']({
                    'spr': value_spr,
                    'pin1': pin1,
                    'pin2': pin2,
                    'pin3': pin3,
                    'pin4': pin4
                });
            }

            code += JST['stepper_move']({
                'pin1': pin1,
                'value_speed': value_speed,
                'value_steps': value_steps
            });
            return code;
        };
        /**
         * stepper_move block definition
         * @type {Object}
         */
        Blockly.Blocks.stepper_move = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_MOTOR'),
            tags: ['servo'],
            helpUrl: RoboBlocks.URL_SERVO,
            /**
             * stepper_move initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_MOTOR);
                this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_MOTOR_STEPPER_MOVE')).appendField(new Blockly.FieldImage('img/blocks/stepper.png', 208 * options.zoom, 126 * options.zoom)).setAlign(Blockly.ALIGN_RIGHT);
                this.appendValueInput('SPR', Number).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(RoboBlocks.locales.getKey('LANG_MOTOR_STEPPER_MOVE_SPR')).setAlign(Blockly.ALIGN_RIGHT);
                //this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_MOTOR_STEPPER_MOVE_PINS')).appendField(new Blockly.FieldCheckbox('FALSE'), 'TOGGLE').setAlign(Blockly.ALIGN_RIGHT);
                this.appendValueInput('PIN1').appendField(RoboBlocks.locales.getKey('LANG_MOTOR_STEPPER_MOVE_PIN1')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
                this.appendValueInput('PIN2').appendField(RoboBlocks.locales.getKey('LANG_MOTOR_STEPPER_MOVE_PIN2')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
                this.appendValueInput('PIN3').appendField(RoboBlocks.locales.getKey('LANG_MOTOR_STEPPER_MOVE_PIN3')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
                this.appendValueInput('PIN4').appendField(RoboBlocks.locales.getKey('LANG_MOTOR_STEPPER_MOVE_PIN4')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
                this.appendValueInput('SPEED', Number).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(RoboBlocks.locales.getKey('LANG_MOTOR_STEPPER_MOVE_SETSPEED'));
                this.appendValueInput('STEPS', Number).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(RoboBlocks.locales.getKey('LANG_MOTOR_STEPPER_MOVE_STEP'));
                //this.checkStepper();
                //this.last_toggle = this.getFieldValue('TOGGLE');
                this.setInputsInline(false);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_MOTOR_STEPPER_MOVE_TOOLTIP'));
            },
            //checkStepper: function() {
            //    if (this.getFieldValue('TOGGLE') === 'TRUE') {
            //        try {
            //            this.removeInput('PIN3');
            //            this.removeInput('PIN4');
            //        } catch (e) {}
            //        try {
            //            this.removeInput('SPEED');
            //            this.removeInput('STEPS');
            //        } catch (e) {}
            //        this.appendValueInput('PIN3').appendField(RoboBlocks.locales.getKey('LANG_MOTOR_STEPPER_MOVE_PIN3')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
            //        this.appendValueInput('PIN4').appendField(RoboBlocks.locales.getKey('LANG_MOTOR_STEPPER_MOVE_PIN4')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
            //        this.appendValueInput('SPEED').appendField(RoboBlocks.locales.getKey('LANG_MOTOR_STEPPER_MOVE_SETSPEED')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
            //        this.appendValueInput('STEPS').appendField(RoboBlocks.locales.getKey('LANG_MOTOR_STEPPER_MOVE_STEP')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
            //    } else {
            //        try {
            //            this.removeInput('PIN3');
            //            this.removeInput('PIN4');
            //        } catch (e) {}
            //    }
            //},
            isVariable: function(varValue) {
                for (var i in Blockly.Variables.allVariables()) {
                    if (Blockly.Variables.allVariables()[i] === varValue) {
                        return true;
                    }
                }
                return false;
            },
            onchange: function() {
                //if (this.getFieldValue('TOGGLE') !== this.last_toggle) {
                //    this.checkStepper();
                //    this.last_toggle = this.getFieldValue('TOGGLE');
                //}
                // try {
                //     if (this.isVariable(Blockly.Arduino.valueToCode(this,'PIN', Blockly.Arduino.ORDER_ATOMIC))) {
                //         this.setWarningText(RoboBlocks.locales.getKey('LANG_MOTOR_SERVO_WARNING'));
                //     } else {
                //         this.setWarningText(null);
                //     }
                // } catch (e) {}
            }
        };
        // Source: src/blocks/text/text.js
        /* global Blockly, RoboBlocks */

        /**
         * text code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.text = function() {
            // Text value.
            var code = Blockly.Arduino.quote_(this.getFieldValue('TEXT'));
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        Blockly.Blocks.text = {
            // Text value.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_TEXT'),
            helpUrl: RoboBlocks.URL_TEXT,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
                this.appendDummyInput()
                    .appendField('"')
                    .appendField(new Blockly.FieldTextInput(''), 'TEXT')
                    .appendField('"');
                this.setOutput(true, String);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_TEXT_TOOLTIP'));
            }
        };

        // Source: src/blocks/text_append/text_append.js
        /* global Blockly, RoboBlocks */
        /**
         * text_append code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.text_append = function() {
            // Append to a variable in place.
            var varName = Blockly.Arduino.valueToCode(this, 'VAR', Blockly.Arduino.ORDER_NONE) || '';
            var argument0 = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '';

            var code = '';

            var a = RoboBlocks.findPinMode(varName);
            code += a['code'];
            varName = a['pin'];
            a = RoboBlocks.findPinMode(argument0);
            code += a['code'];
            argument0 = a['pin'];

            code += varName + ' += String(' + argument0 + ');\n';
            return code;
        };
        Blockly.Blocks.text_append = {
            // Append to a variable in place.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_TEXT'),
            helpUrl: RoboBlocks.URL_TEXT,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
                this.appendValueInput('VAR')
                    // .appendField(new Blockly.FieldVariable(' '), 'VAR')
                    .appendField(RoboBlocks.locales.getKey('LANG_TEXT_APPEND_TO'));
                this.appendValueInput('TEXT').appendField(RoboBlocks.locales.getKey('LANG_TEXT_APPEND_APPENDTEXT'));
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setInputsInline(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_APPEND_TOOLTIP'));
            },
            getVars: function() {
                return [this.getFieldValue('VAR')];
            },
            renameVar: function(oldName, newName) {
                if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
                    this.setTitleValue(newName, 'VAR');
                }
            },
            getVariables: function() {
                var variables = Blockly.Variables.allVariables();
                var dropdown = [];
                if (variables.length > 0) {
                    for (var i in variables) {
                        dropdown.push([variables[i], variables[i]]);
                    }
                } else {
                    dropdown.push(['', '']);
                }
                return dropdown;
            },
            onchange: function() {
                // if (!this.last_variables){
                //     this.last_variables=Blockly.Variables.allVariables();
                // }
                // var variables=Blockly.Variables.allVariables();
                // for (var i in variables){
                //     if (Blockly.Variables.allVariables()[i]!==this.last_variables[i]){
                //         try{
                //             this.removeInput('TEXT');
                //             this.appendValueInput('TEXT')
                //                 .appendField(RoboBlocks.locales.getKey('LANG_TEXT_APPEND_TO'))
                //                 .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR')
                //                 .appendField(RoboBlocks.locales.getKey('LANG_TEXT_APPEND_APPENDTEXT'));
                //             this.setInputsInline(true);
                //         }catch(e){}
                //         this.last_variables=Blockly.Variables.allVariables();
                //     }
                // }
            }
        };
        // Source: src/blocks/text_char/text_char.js
        /* global Blockly, RoboBlocks */

        /**
         * text_char code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.text_char = function() {
            var code = '\'' + this.getFieldValue('CHAR') + '\'';
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        /**
         * text_char block definition
         * @type {Object}
         */
        Blockly.Blocks.text_char = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_TEXT'),
            helpUrl: RoboBlocks.URL_TEXT,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
                this.appendDummyInput()
                    .appendField('\'')
                    .appendField(new Blockly.FieldTextInput(''), 'CHAR')
                    .appendField('\'');
                this.setOutput(true, String);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_CHAR_TOOLTIP'));
            },
            onchange: function() {
                var car = this.getFieldValue('CHAR');
                if (car.length > 1 && car.charAt(0) !== '\\') {
                    this.setWarningText(RoboBlocks.locales.getKey('LANG_CHAR_LENGTH'));
                } else {
                    this.setWarningText(null);
                }
            }
        };

        // Source: src/blocks/text_char_special/text_char_special.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * text_char_special code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.text_char_special = function() {
            var char = this.getFieldValue('CHAR');
            var code = JST['text_char_special']({
                'char': char
            });
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * text_char_special block definition
         * @type {Object}
         */
        Blockly.Blocks.text_char_special = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_TEXT'),
            helpUrl: RoboBlocks.URL_TEXT,
            tags: ['text'],

            /**
             * text_char_special initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.locales.getKey('LANG_TEXT_SPECIAL'))
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.locales.getKey('LANG_TEXT_SPECIAL_TAB') || 'TAB', '\\t'],
                        [RoboBlocks.locales.getKey('LANG_TEXT_SPECIAL_CARRIAGE_RETURN') || 'CARRIAGE RETURN', '\\r'],
                        [RoboBlocks.locales.getKey('LANG_TEXT_SPECIAL_LINE_FEED') || 'LINE FEED', '\\n']
                    ]), 'CHAR');
                this.setOutput(true, String);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_SPECIAL_TOOLTIP'));
            }
        };

        // Source: src/blocks/text_charat/text_charat.js
        /* global Blockly, JST, RoboBlocks */

        /**
         * text_charat code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.text_charat = function() {
            var string1 = Blockly.Arduino.valueToCode(this, 'STRING1', Blockly.Arduino.ORDER_NONE);
            string1 = string1.replace(/&quot;/g, '"');
            var position = Blockly.Arduino.valueToCode(this, 'POSITION', Blockly.Arduino.ORDER_NONE);
            var code = '';
            var a = RoboBlocks.findPinMode(string1);
            code += a['code'];
            string1 = a['pin'];
            a = RoboBlocks.findPinMode(position);
            code += a['code'];
            position = a['pin'];
            code += JST['text_charat']({
                'string1': string1,
                'position': position
            });
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        Blockly.Blocks.text_charat = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_TEXT'),
            helpUrl: RoboBlocks.URL_TEXT,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
                this.appendValueInput('STRING1').setCheck(String).appendField(RoboBlocks.locales.getKey('LANG_TEXT_CHARAT'));
                this.appendValueInput('POSITION').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_TEXT_CHARAT_POSITION')).setAlign(Blockly.ALIGN_RIGHT);
                this.setInputsInline(true);
                this.setOutput(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_CHARAT_TOOLTIP'));
            }
        };
        // Source: src/blocks/text_comment/text_comment.js
        /* global Blockly, RoboBlocks */

        /**
         * text_comment code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.text_comment = function() {
            var argument0 = this.getFieldValue('COMMENT');
            var code = '//' + argument0 + '\n';
            //Blockly.Arduino.definitions_['declare_text_comment'] = '/*' + argument0 + '*/\n';
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        Blockly.Blocks.text_comment = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_TEXT'),
            helpUrl: RoboBlocks.URL_TEXT,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_TEXT_COMMENT'))
                    .appendField(new Blockly.FieldTextInput(''), 'COMMENT');
                this.setPreviousStatement(false);
                this.setNextStatement(false);
                this.setInputsInline(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_COMMENT_TOOLTIP'));
            }
        };

        // Source: src/blocks/text_equalsIgnoreCase/text_equalsIgnoreCase.js
        /* global Blockly, JST, RoboBlocks */

        /**
         * text_equalsIgnoreCase code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.text_equalsIgnoreCase = function() {
            var string1 = Blockly.Arduino.valueToCode(this, 'STRING1', Blockly.Arduino.ORDER_NONE);
            string1 = string1.replace(/&quot;/g, '"');
            var string2 = Blockly.Arduino.valueToCode(this, 'STRING2', Blockly.Arduino.ORDER_NONE);
            string2 = string2.replace(/&quot;/g, '"');

            var code = '';

            var a = RoboBlocks.findPinMode(string1);
            code += a['code'];
            string1 = a['pin'];

            a = RoboBlocks.findPinMode(string2);
            code += a['code'];
            string2 = a['pin'];

            code += JST['text_equalsIgnoreCase']({
                'string1': string1,
                'string2': string2
            });

            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        Blockly.Blocks.text_equalsIgnoreCase = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_TEXT'),
            helpUrl: RoboBlocks.URL_TEXT,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
                this.appendValueInput('STRING1')
                    .appendField(RoboBlocks.locales.getKey('LANG_TEXT_EQUALSIGNORECASE_IS'));

                this.appendValueInput('STRING2')
                    .appendField(RoboBlocks.locales.getKey('LANG_TEXT_EQUALSIGNORECASE_EQUAL'))
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_TEXT_EQUALSIGNORECASE_QUESTION'));

                this.setInputsInline(true);

                this.setOutput(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_EQUALSIGNORECASE_TOOLTIP'));
            }
        };
        // Source: src/blocks/text_join/text_join.js
        /* global Blockly, RoboBlocks */

        /**
         * text_join code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.text_join = function() {
            // Create a string made up of any number of elements of any type.
            var code = '';
            var a;
            console.log('this.itemCount_', this.itemCount_);
            if (this.itemCount_ === 0) {
                return ['\'\'', Blockly.Arduino.ORDER_ATOMIC];
            } else if (this.itemCount_ === 1) {
                var argument0 = Blockly.Arduino.valueToCode(this, 'ADD0', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '';
                a = RoboBlocks.findPinMode(argument0);
                code += a['code'];
                argument0 = a['pin'];

                code += 'String(' + argument0 + ')';
                return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
            } else {
                var i = (Blockly.Arduino.valueToCode(this, 'ADD0', Blockly.Arduino.ORDER_NONE) || '');
                console.log('Blockly.Arduino.valueToCode(this, ADD0, Blockly.Arduino.ORDER_NONE)', Blockly.Arduino.valueToCode(this, 'ADD0', Blockly.Arduino.ORDER_NONE));
                a = RoboBlocks.findPinMode(i);
                code = a['code'];
                i = a['pin'];

                var final_line = 'String(' + i;
                console.log('iteration 0', '\ncode: ', code, '\nfinal_line: ', final_line, '\nb', i);

                for (var n = 1; n < this.itemCount_; n++) {
                    i = (Blockly.Arduino.valueToCode(this, 'ADD' + n, Blockly.Arduino.ORDER_NONE) || '');
                    console.log('Blockly.Arduino.valueToCode(this, ADDn, Blockly.Arduino.ORDER_NONE)', Blockly.Arduino.valueToCode(this, 'ADD' + n, Blockly.Arduino.ORDER_NONE));
                    a = RoboBlocks.findPinMode(i);
                    code += a['code'];
                    i = a['pin'];
                    final_line += ') + String(' + i;
                    console.log('iteration', n, '\ncode: ', code, '\nfinal_line: ', final_line, '\nb', i);
                }


                code += final_line + ')';

                return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
            }
        };

        Blockly.Blocks.text_join = {
            // Create a string made up of any number of elements of any type.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_TEXT'),
            helpUrl: RoboBlocks.URL_TEXT,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
                this.appendValueInput('ADD0')
                    .appendField(RoboBlocks.locales.getKey('LANG_TEXT_JOIN_Field_CREATEWITH'));
                this.appendValueInput('ADD1');
                this.setOutput(true, String);
                this.setMutator(new Blockly.Mutator(['text_create_join_item']));
                this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_JOIN_TOOLTIP'));
                this.itemCount_ = 2;
            },
            mutationToDom: function() {
                var container = document.createElement('mutation');
                container.setAttribute('items', this.itemCount_);
                return container;
            },
            domToMutation: function(xmlElement) {
                for (var x = 0; x < this.itemCount_; x++) {
                    this.removeInput('ADD' + x);
                }
                this.itemCount_ = window.parseInt(xmlElement.getAttribute('items'), 10);
                for (x = 0; x < this.itemCount_; x++) {
                    var input = this.appendValueInput('ADD' + x);
                    if (x === 0) {
                        input.appendField(RoboBlocks.locales.getKey('LANG_TEXT_JOIN_Field_CREATEWITH'));
                    }
                }
                if (this.itemCount_ === 0) {
                    this.appendDummyInput('EMPTY')
                        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
                            'media/quote0.png', 12, 12))
                        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
                            'media/quote1.png', 12, 12));
                }
            },
            decompose: function(workspace) {
                var containerBlock = Blockly.Block.obtain(workspace, 'text_create_join_container');
                containerBlock.initSvg();
                var connection = containerBlock.getInput('STACK').connection;
                for (var x = 0; x < this.itemCount_; x++) {
                    var itemBlock = Blockly.Block.obtain(workspace, 'text_create_join_item');
                    itemBlock.initSvg();
                    connection.connect(itemBlock.previousConnection);
                    connection = itemBlock.nextConnection;
                }
                return containerBlock;
            },
            compose: function(containerBlock) {
                // Disconnect all input blocks and remove all inputs.
                if (this.itemCount_ === 0) {
                    this.removeInput('EMPTY');
                } else {
                    for (var x = this.itemCount_ - 1; x >= 0; x--) {
                        this.removeInput('ADD' + x);
                    }
                }
                this.itemCount_ = 0;
                // Rebuild the block's inputs.
                var itemBlock = containerBlock.getInputTargetBlock('STACK');
                while (itemBlock) {
                    var input = this.appendValueInput('ADD' + this.itemCount_);
                    if (this.itemCount_ === 0) {
                        input.appendField(RoboBlocks.locales.getKey('LANG_TEXT_JOIN_Field_CREATEWITH'));
                    }
                    // Reconnect any child blocks.
                    if (itemBlock.valueConnection_) {
                        input.connection.connect(itemBlock.valueConnection_);
                    }
                    this.itemCount_++;
                    itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
                }
                if (this.itemCount_ === 0) {
                    this.appendDummyInput('EMPTY')
                        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
                            'media/quote0.png', 12, 12))
                        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly +
                            'media/quote1.png', 12, 12));
                }
            },
            saveConnections: function(containerBlock) {
                // Store a pointer to any connected child blocks.
                var itemBlock = containerBlock.getInputTargetBlock('STACK');
                var x = 0;
                while (itemBlock) {
                    var input = this.getInput('ADD' + x);
                    itemBlock.valueConnection_ = input && input.connection.targetConnection;
                    x++;
                    itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
                }
            }
        };



        Blockly.Blocks.text_create_join_container = {
            // Container.
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_TEXT_CREATE_JOIN_Field_JOIN'));
                this.appendStatementInput('STACK');
                this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_CREATE_JOIN_TOOLTIP'));
                this.contextMenu = false;
            }
        };

        Blockly.Blocks.text_create_join_item = {
            // Add items.
            init: function() {
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM'));
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP'));
                this.contextMenu = false;
            }
        };


        Blockly.Blocks.text_create_join_container = {
            // Container.
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_TEXT_CREATE_JOIN_TITLE_JOIN'));
                this.appendStatementInput('STACK');
                this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_CREATE_JOIN_TOOLTIP'));
                this.contextMenu = false;
            }
        };

        Blockly.Blocks.text_create_join_item = {
            // Add items.
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM'));
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP'));
                this.contextMenu = false;
            }
        };



        // Source: src/blocks/text_length/text_length.js
        /* global Blockly, JST, RoboBlocks */

        /**
         * text_length code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.text_length = function() {
            // String length.
            var argument0 = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_UNARY_POSTFIX) || '';
            var code = '';
            var a = RoboBlocks.findPinMode(argument0);
            code += a['code'];
            argument0 = a['pin'];

            code += JST['text_length']({
                'argument0': argument0
            });

            return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
        };

        Blockly.Blocks.text_length = {
            // String length.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_TEXT'),
            helpUrl: RoboBlocks.URL_TEXT,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
                this.appendValueInput('VALUE')
                    .setCheck([String, Array])
                    .appendField(RoboBlocks.locales.getKey('LANG_TEXT_LENGTH_INPUT_LENGTH'));
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_LENGTH_TOOLTIP'));
            }
        };
        // Source: src/blocks/text_substring/text_substring.js
        /* global Blockly, JST, RoboBlocks */

        /**
         * text_substring code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.text_substring = function() {
            var string1 = Blockly.Arduino.valueToCode(this, 'STRING1', Blockly.Arduino.ORDER_NONE);
            var from = Blockly.Arduino.valueToCode(this, 'FROM', Blockly.Arduino.ORDER_NONE);
            var to = Blockly.Arduino.valueToCode(this, 'TO', Blockly.Arduino.ORDER_NONE);
            var code = '';
            var a = RoboBlocks.findPinMode(string1);
            code += a['code'];
            string1 = a['pin'];

            a = RoboBlocks.findPinMode(from);
            code += a['code'];
            from = a['pin'];

            a = RoboBlocks.findPinMode(to);
            code += a['code'];
            to = a['pin'];

            code += JST['text_substring']({
                'string1': string1,
                'from': from,
                'to': to
            });

            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        Blockly.Blocks.text_substring = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_TEXT'),
            helpUrl: RoboBlocks.URL_TEXT,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
                this.appendValueInput('STRING1')
                    // .setCheck(String)
                    .appendField(RoboBlocks.locales.getKey('LANG_TEXT_SUBSTRING'));

                this.appendValueInput('FROM')
                    .appendField(RoboBlocks.locales.getKey('LANG_TEXT_SUBSTRING_FROM'))
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT);

                this.appendValueInput('TO')
                    .appendField(RoboBlocks.locales.getKey('LANG_TEXT_SUBSTRING_TO'))
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT);
                // this.appendDummyInput()
                //     .appendField(RoboBlocks.locales.getKey('LANG_TEXT_SUBSTRING_QUESTION'));

                this.setInputsInline(true);

                this.setOutput(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_TEXT_SUBSTRING_TOOLTIP'));
            }
        };
        // Source: src/blocks/variables_get/variables_get.js
        /* global Blockly, RoboBlocks */
        /* jshint sub:true */
        /**
         * variables_get code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.variables_get = function() {
            // Variable setter.
            var varName = this.getFieldValue('VAR') || '';
            if (RoboBlocks.variables[this.getFieldValue('VAR')] !== undefined) {
                this.var_type = RoboBlocks.variables[this.getFieldValue('VAR')][0];
            }
            return [varName, Blockly.Arduino.ORDER_ATOMIC];
        };
        Blockly.Blocks.variables_get = {
            // Variable setter.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_VARIABLES'), // Variables are handled specially.
            helpUrl: RoboBlocks.URL_VAR,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
                this.appendDummyInput('DUMMY').appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_GET'))
                    // .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');
                    .appendField(new Blockly.FieldVariable(' '), 'VAR');
                this.setOutput(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_VARIABLES_GET_TOOLTIP'));
            },
            getVariables: function() {
                var variables = Blockly.Variables.allVariables();
                var dropdown = [];
                if (variables.length > 0) {
                    for (var i in variables) {
                        dropdown.push([variables[i], variables[i]]);
                    }
                } else {
                    dropdown.push(['', '']);
                }
                return dropdown;
            },
            onchange: function() {
                // if (!this.workspace) {
                //     // Block has been deleted.
                //     return;
                // }
                // this.last_variable=this.getFieldValue('VAR');
                // if (!this.last_variables){
                //     this.last_variables=Blockly.Variables.allVariables();
                // }
                // var variables=Blockly.Variables.allVariables();
                // for (var i in variables){
                //     if (Blockly.Variables.allVariables()[i]!==this.last_variables[i]){
                //         try{
                //             this.removeInput('DUMMY');
                //         }catch(e){}
                //         this.appendDummyInput('DUMMY')
                //             .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_GET'))
                //             .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR');
                //         this.setFieldValue(this.last_variable, 'VAR');
                //         this.last_variables=Blockly.Variables.allVariables();
                //     }
                // }
                try {
                    if (!this.exists()) {
                        this.setWarningText(RoboBlocks.locales.getKey('LANG_VARIABLES_CALL_WITHOUT_DEFINITION'));
                    } else {
                        this.setWarningText(null);
                    }
                } catch (e) {}
            },
            renameVar: function(oldName, newName) {
                if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
                    this.setTitleValue(newName, 'VAR');
                }
            },
            exists: function() {
                for (var i in Blockly.Variables.allVariables()) {
                    if (Blockly.Variables.allVariables()[i] === this.getFieldValue('VAR')) {
                        return true;
                    }
                }
                return false;
            }
        };
        // Source: src/blocks/variables_global/variables_global.js
        /* global Blockly,  RoboBlocks */
        /* jshint sub:true */
        /**
         * variables_global code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.variables_global = function() {
            // Variable setter.
            var varType;
            var varValue = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT);
            var varName = this.getFieldValue('VAR') || '';
            var isFunction = false;

            var a = RoboBlocks.findPinMode(varValue);
            Blockly.Arduino.setups_['pinMode' + varValue] = a['code'];
            varValue = a['pin'];

            for (var i in Blockly.Arduino.definitions_) {
                if (Blockly.Arduino.definitions_[i].search(varValue + ' \\(') >= 0) {
                    isFunction = true;
                    break;
                }
            }
            if (varValue.search('"') >= 0 || varValue.search('substring\\(') >= 0) {
                varType = 'String';
                Blockly.Arduino.definitions_['declare_var' + varName] = varType + ' ' + varName + '=' + varValue + ';';
            } else if (isFunction) { //varValue.search('\\(') >= 0 && varValue.search('\\)') >= 0) {
                for (i in Blockly.Arduino.definitions_) {
                    if (Blockly.Arduino.definitions_[i].search(varValue) >= 0) {
                        if (Blockly.Arduino.definitions_[i].substring(0, 3) === 'int' || Blockly.Arduino.definitions_[i].substring(0, 3) === '//b') { //bqbat function
                            if (Blockly.Arduino.definitions_[i].substring(0, 5) === 'int *' || Blockly.Arduino.definitions_[i].substring(0, 5) === 'int _') {
                                varType = 'int *';
                            } else {
                                varType = 'int';
                            }
                        } else if (Blockly.Arduino.definitions_[i].substring(0, 3) === 'Str') {
                            varType = 'String';
                        } else {
                            varType = '';
                        }
                        Blockly.Arduino.definitions_['declare_var' + varName] = varType + ' ' + varName + ';\n';
                        Blockly.Arduino.setups_['define_var' + varName] = varName + '=' + varValue + ';\n';
                        break;
                    }
                }
            } else if (varValue[0] === '{') {
                varType = 'int *';
                varValue = varValue.replace('{', '');
                varValue = varValue.replace('}', '');
                varValue = varValue.split(',');
                Blockly.Arduino.definitions_['declare_var' + varName] = varType + varName + '=' + '(int*)malloc(3*sizeof(int));\n';
                // Blockly.Arduino.definitions_['declare_var' + varName] = varType + varName + ';\n';
                Blockly.Arduino.setups_['define_var' + varName] = varName + '[0]=' + varValue[0] + ';\n  ' + varName + '[1]=' + varValue[1] + ';\n  ' + varName + '[2]=' + varValue[2] + ';\n';
            } else if (this.isVariable(varValue)) {
                varType = RoboBlocks.variables[varValue][0];
                Blockly.Arduino.definitions_['declare_var' + varName] = varType + ' ' + varName + ';\n';
                Blockly.Arduino.setups_['define_var' + varName] = varName + '=' + varValue + ';\n';
            } else if (varValue.search('readJoystick') >= 0) {
                varType = 'int *';
                Blockly.Arduino.definitions_['declare_var' + varName] = varType + varName + '=' + '(int*)malloc(3*sizeof(int));\n';
                Blockly.Arduino.setups_['define_var' + varName] = varName + '=' + varValue + ';\n';
            } else if ((varValue.search('analogRead') >= 0) || (varValue.search('digitalRead') >= 0) || (varValue.search('Distanc') >= 0) || (!isNaN(parseFloat(varValue)) || (varValue.search('random') >= 0)) || (varValue.search('map') >= 0) || varValue.search('\\[') >= 0 || (varValue.search('abs') >= 0) || (varValue.search('sqrt') >= 0) || (varValue.search('log') >= 0) || (varValue.search('log') >= 0) || (varValue.search('exp') >= 0) || (varValue.search('pow') >= 0) || (varValue.search('\\+'))) {
                varType = 'int';
                if (!isNaN(parseFloat(varValue))) {
                    Blockly.Arduino.definitions_['declare_var' + varName] = varType + ' ' + varName + '=' + varValue + ';\n';
                } else if ((varValue.search('analogRead') >= 0) || (varValue.search('digitalRead') >= 0) || (varValue.search('Distanc') >= 0) || (varValue.search('random') >= 0) || (varValue.search('map') >= 0) || varValue.search('\\[') >= 0 || (varValue.search('abs') >= 0) || (varValue.search('sqrt') >= 0) || (varValue.search('log') >= 0) || (varValue.search('log') >= 0) || (varValue.search('exp') >= 0) || (varValue.search('pow') >= 0) || (varValue.search('\\+'))) {
                    Blockly.Arduino.definitions_['declare_var' + varName] = varType + ' ' + varName + ';\n';
                    Blockly.Arduino.setups_['define_var' + varName] = varName + '=' + varValue + ';\n';
                }
            } else {
                varType = 'unknown';
                Blockly.Arduino.definitions_['declare_var' + varName] = varType + ' ' + varName + ';\n';
                Blockly.Arduino.setups_['define_var' + varName] = varName + '=' + varValue + ';\n';
            }
            RoboBlocks.variables[varName] = [varType, 'global'];
            RoboBlocks.variables['analogRead(' + varName + ')'] = [varType, 'global'];
            RoboBlocks.variables['digitalRead(' + varName + ')'] = [varType, 'global'];

            return '';
        };
        Blockly.Blocks.variables_global = {
            // Variable setter.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_VARIABLES'), // Variables are handled specially.
            helpUrl: RoboBlocks.URL_VAR,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
                this.appendValueInput('VALUE').appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_GLOBAL')).appendField(new Blockly.FieldTextInput(''), 'VAR').appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_GLOBAL_EQUALS'));
                this.setInputsInline(false);
                //this.setPreviousStatement(true);
                //this.setNextStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_VARIABLES_GLOBAL_TOOLTIP'));
            },
            getVars: function() {
                return [this.getFieldValue('VAR')];
            },
            renameVar: function(oldName, newName) {
                if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
                    this.setFieldValue(newName, 'VAR');
                }
            },
            isVariable: function(varValue) {
                for (var i in Blockly.Variables.allVariables()) {
                    if (Blockly.Variables.allVariables()[i] === varValue) {
                        return true;
                    }
                }
                return false;
            },
            validName: function(name) {
                if (name && name.length > 0) {
                    var i = 0;
                    while (i < name.length) {
                        if (!isNaN(parseFloat(name[i]))) {
                            name = name.substring(1, name.length);
                        } else {
                            break;
                        }
                    }
                    name = name.replace(/([ ])/g, '_');
                    name = name.replace(/([áàâä])/g, 'a');
                    name = name.replace(/([éèêë])/g, 'e');
                    name = name.replace(/([íìîï])/g, 'i');
                    name = name.replace(/([óòôö])/g, 'o');
                    name = name.replace(/([úùûü])/g, 'u');
                    name = name.replace(/([ñ])/g, 'n');
                    name = name.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|<>\-\&\Ç\%\=\~\{\}\¿\¡\"\@\:\;\-\"\·\|\º\ª\¨\'\·\̣\─\ç\`\´\¨\^])/g, '');
                    i = 0;
                    while (i < name.length) {
                        if (!isNaN(parseFloat(name[i]))) {
                            name = name.substring(1, name.length);
                        } else {
                            break;
                        }
                    }
                    for (var j in Blockly.Arduino.RESERVED_WORDS_) {
                        var reserved_words = Blockly.Arduino.RESERVED_WORDS_.split(',');
                        if (name === reserved_words[j]) {
                            this.setWarningText(RoboBlocks.locales.getKey('LANG_RESERVED_WORDS'));
                            name = '';
                            break;
                        } else {
                            this.setWarningText(null);
                        }
                    }
                }
                return name;
            },
            onchange: function() {
                if (this.last_variable !== this.getFieldValue('VAR')) {
                    var name = this.getFieldValue('VAR');
                    name = this.validName(name);
                    try {
                        this.setFieldValue(name, 'VAR');
                    } catch (e) {}
                    this.last_variable = name;
                }
            }
        };
        // Source: src/blocks/variables_global_type/variables_global_type.js
        /* global Blockly,  RoboBlocks */
        /* jshint sub:true */
        /**
         * variables_global_type code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.variables_global_type = function() {
            // Variable setter.
            var varType = this.getFieldValue('VAR_TYPE');
            var varValue = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT);
            var varName = this.getFieldValue('VAR') || '';
            //var isFunction = false;

            //var varName = this.getFieldValue('VAR') || '';
            var code = '';

            var a = RoboBlocks.findPinMode(varValue);
            code += a['code'];
            varValue = a['pin'];

            Blockly.Arduino.definitions_['declare_var' + varName] = varType + ' ' + varName + ';\n';
            Blockly.Arduino.setups_['define_var' + varName] = varName + '=' + varValue + ';\n';

            RoboBlocks.variables[varName] = [varType, 'global'];
            RoboBlocks.variables['analogRead(' + varName + ')'] = [varType, 'global'];
            RoboBlocks.variables['digitalRead(' + varName + ')'] = [varType, 'global'];

            return '';
        };

        Blockly.Blocks.variables_global_type = {
            // Variable setter.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_VARIABLES'), // Variables are handled specially.
            helpUrl: RoboBlocks.URL_VAR,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
                this.appendValueInput('VALUE').
                appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_GLOBAL')).
                appendField(new Blockly.FieldTextInput(''), 'VAR').
                appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_GLOBAL_TYPE')).
                appendField(new Blockly.FieldDropdown([
                    [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_INTEGER'), 'int'],
                    [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_INTEGER_LONG'), 'long'],
                    [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_INTEGER_ULONG'), 'unsigned long'],
                    [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_BYTE'), 'byte'],
                    [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_FLOAT'), 'float'],
                    [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_CHAR'), 'char'],
                    [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_BOOLEAN'), 'boolean'],
                    [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_STRING'), 'String'],
                ]), 'VAR_TYPE').
                appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_GLOBAL_EQUALS'));
                this.setInputsInline(false);
                //this.setPreviousStatement(true);
                //this.setNextStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_VARIABLES_GLOBAL_TOOLTIP'));
            },
            getVars: function() {
                return [this.getFieldValue('VAR')];
            },
            renameVar: function(oldName, newName) {
                if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
                    this.setFieldValue(newName, 'VAR');
                }
            },
            isVariable: function(varValue) {
                for (var i in Blockly.Variables.allVariables()) {
                    if (Blockly.Variables.allVariables()[i] === varValue) {
                        return true;
                    }
                }
                return false;
            },
            validName: function(name) {
                if (name && name.length > 0) {
                    var i = 0;
                    while (i < name.length) {
                        if (!isNaN(parseFloat(name[i]))) {
                            name = name.substring(1, name.length);
                        } else {
                            break;
                        }
                    }
                    name = name.replace(/([ ])/g, '_');
                    name = name.replace(/([áàâä])/g, 'a');
                    name = name.replace(/([éèêë])/g, 'e');
                    name = name.replace(/([íìîï])/g, 'i');
                    name = name.replace(/([óòôö])/g, 'o');
                    name = name.replace(/([úùûü])/g, 'u');
                    name = name.replace(/([ñ])/g, 'n');
                    name = name.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|<>\-\&\Ç\%\=\~\{\}\¿\¡\"\@\:\;\-\"\·\|\º\ª\¨\'\·\̣\─\ç\`\´\¨\^])/g, '');
                    i = 0;
                    while (i < name.length) {
                        if (!isNaN(parseFloat(name[i]))) {
                            name = name.substring(1, name.length);
                        } else {
                            break;
                        }
                    }
                    for (var j in Blockly.Arduino.RESERVED_WORDS_) {
                        var reserved_words = Blockly.Arduino.RESERVED_WORDS_.split(',');
                        if (name === reserved_words[j]) {
                            this.setWarningText(RoboBlocks.locales.getKey('LANG_RESERVED_WORDS'));
                            name = '';
                            break;
                        } else {
                            this.setWarningText(null);
                        }
                    }
                }
                return name;
            },
            onchange: function() {
                if (this.last_variable !== this.getFieldValue('VAR')) {
                    var name = this.getFieldValue('VAR');
                    name = this.validName(name);
                    try {
                        this.setFieldValue(name, 'VAR');
                    } catch (e) {}
                    this.last_variable = name;
                }
            }
        };

        // Source: src/blocks/variables_local/variables_local.js
        /* global Blockly,  RoboBlocks */
        /* jshint sub:true */
        /**
         * variable code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.variables_local = function() {
            // Variable setter.
            var varType;
            var varValue = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT);
            var varName = this.getFieldValue('VAR') || '';
            var sufix = '';
            var code = '';
            var isFunction = false;


            var a = RoboBlocks.findPinMode(varValue);
            code += a['code'];
            varValue = a['pin'];


            for (var i in Blockly.Arduino.definitions_) {
                if (Blockly.Arduino.definitions_[i].search(varValue + ' \\(') >= 0) {
                    isFunction = true;
                    break;
                }
            }
            if (varValue.search('"') >= 0 || varValue.search('substring\\(') >= 0) {
                varType = 'String';
                code += varType + ' ' + varName + '=' + varValue + ';\n';
            } else if (isFunction) { //varValue.search('\\(') >= 0 && varValue.search('\\)') >= 0) {
                for (i in Blockly.Arduino.definitions_) {
                    if (Blockly.Arduino.definitions_[i].search(varValue) >= 0) {
                        if (Blockly.Arduino.definitions_[i].substring(0, 3) === 'int' || Blockly.Arduino.definitions_[i].substring(0, 3) === '//b') { //bqbat function
                            if (Blockly.Arduino.definitions_[i].substring(0, 5) === 'int *' || Blockly.Arduino.definitions_[i].substring(0, 5) === 'int _') {
                                varType = 'int *';
                            } else {
                                varType = 'int';
                            }
                        } else if (Blockly.Arduino.definitions_[i].substring(0, 3) === 'Str') {
                            varType = 'String';
                        } else {
                            varType = '';
                        }
                        code += varType + ' ' + varName + '=' + varValue + ';\n';
                    }
                }
            } else if (varValue[0] === '{') {
                varType = 'int *';
                varValue = varValue.replace('{', '');
                varValue = varValue.replace('}', '');
                varValue = varValue.split(',');
                code += varType + varName + '=' + '(int*)malloc(3*sizeof(int));\n';
                // code += varType + varName + ';\n';
                code += varName + '[0]=' + varValue[0] + ';\n' + varName + '[1]=' + varValue[1] + ';\n' + varName + '[2]=' + varValue[2] + ';\n';
            } else if (this.isVariable(varValue)) {
                varType = RoboBlocks.variables[varValue][0];
                code += varType + ' ' + varName + '=' + varValue + ';\n';
            } else if (varValue.search('readJoystick') >= 0) {
                varType = 'int *';
                code += varType + varName + '=' + '(int*)malloc(3*sizeof(int));\n';
                code += varName + '=' + varValue + ';\n';
            } else if ((varValue.search('analogRead') >= 0) || (varValue.search('digitalRead') >= 0) || (varValue.search('Distanc') >= 0) || (!isNaN(parseFloat(varValue))) || (varValue.search('random') >= 0) || (varValue.search('map') >= 0) || varValue.search('\\[') >= 0 || (varValue.search('abs') >= 0) || (varValue.search('sqrt') >= 0) || (varValue.search('log') >= 0) || (varValue.search('exp') >= 0) || (varValue.search('pow') >= 0) || (varValue.search('\\+'))) {
                varType = 'int';
                code += varType + ' ' + varName + sufix + '=' + varValue + ';\n';
            } else {
                varType = 'unknown';
                code += varType + ' ' + varName + '=' + varValue + ';\n';
            }

            RoboBlocks.variables[varName] = [varType, 'local'];
            RoboBlocks.variables['analogRead(' + varName + ')'] = [varType, 'local'];
            RoboBlocks.variables['digitalRead(' + varName + ')'] = [varType, 'local'];

            return code;
        };
        Blockly.Blocks.variables_local = {
            // Variable setter.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_VARIABLES'), // Variables are handled specially.
            helpUrl: RoboBlocks.URL_VAR,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
                this.appendValueInput('VALUE').appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_LOCAL')).appendField(new Blockly.FieldTextInput(''), 'VAR').appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_LOCAL_EQUALS'));
                this.setInputsInline(false);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_VARIABLES_LOCAL_TOOLTIP'));
            },
            getVars: function() {
                return [this.getFieldValue('VAR')];
            },
            renameVar: function(oldName, newName) {
                if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
                    this.setFieldValue(newName, 'VAR');
                }
            },
            isVariable: Blockly.Blocks.variables_global.isVariable,
            onchange: Blockly.Blocks.variables_global.onchange,
            validName: Blockly.Blocks.variables_global.validName
        };
        // Source: src/blocks/variables_local_type/variables_local_type.js
        /* global Blockly,  RoboBlocks */
        /* jshint sub:true */
        /**
         * variable code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.variables_local_type = function() {
            // Variable setter.
            var varType = this.getFieldValue('VAR_TYPE');
            var varValue = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT);
            var varName = this.getFieldValue('VAR') || '';
            var code = '';

            var a = RoboBlocks.findPinMode(varValue);
            code += a['code'];
            varValue = a['pin'];

            code += varType + ' ' + varName + '=' + varValue + ';\n';

            RoboBlocks.variables[varName] = [varType, 'local'];
            RoboBlocks.variables['analogRead(' + varName + ')'] = [varType, 'local'];
            RoboBlocks.variables['digitalRead(' + varName + ')'] = [varType, 'local'];

            return code;
        };
        Blockly.Blocks.variables_local_type = {
            // Variable setter.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_VARIABLES'), // Variables are handled specially.
            helpUrl: RoboBlocks.URL_VAR,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
                this.appendValueInput('VALUE').
                appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_LOCAL')).
                appendField(new Blockly.FieldTextInput(''), 'VAR').
                appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_LOCAL_TYPE')).
                appendField(new Blockly.FieldDropdown([
                    [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_INTEGER'), 'int'],
                    [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_INTEGER_LONG'), 'long'],
                    [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_INTEGER_ULONG'), 'unsigned long'],
                    [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_BYTE'), 'byte'],
                    [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_FLOAT'), 'float'],
                    [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_CHAR'), 'char'],
                    [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_BOOLEAN'), 'boolean'],
                    [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_STRING'), 'String']
                ]), 'VAR_TYPE').
                appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_GLOBAL_EQUALS'));
                this.setInputsInline(false);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_VARIABLES_LOCAL_TOOLTIP'));
            },
            getVars: function() {
                return [this.getFieldValue('VAR')];
            },
            renameVar: function(oldName, newName) {
                if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
                    this.setFieldValue(newName, 'VAR');
                }
            },
            isVariable: Blockly.Blocks.variables_global.isVariable,
            onchange: Blockly.Blocks.variables_global.onchange,
            validName: Blockly.Blocks.variables_global.validName
        };

        // Source: src/blocks/variables_set/variables_set.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * variables_set code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.variables_set = function() {
            // Variable setter.
            var varValue = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT) || '';
            var varName = this.getFieldValue('VAR') || '';
            var code = '';

            var a = RoboBlocks.findPinMode(varValue);
            code += a['code'];
            varValue = a['pin'];


            code += JST['variables_set']({
                'varName': varName,
                'varValue': varValue
            });
            return code;
        };
        Blockly.Blocks.variables_set = {
            // Variable setter.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_VARIABLES'), // Variables are handled specially.
            helpUrl: RoboBlocks.URL_VAR,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
                this.appendValueInput('VALUE').appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_SET'))
                    // .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR')
                    .appendField(new Blockly.FieldVariable(' '), 'VAR').appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_SET_AS')).setAlign(Blockly.ALIGN_RIGHT);
                this.setInputsInline(false);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_VARIABLES_SET_TOOLTIP'));
            },
            getVariables: function() {
                var variables = Blockly.Variables.allVariables();
                var dropdown = [];
                if (variables.length > 0) {
                    for (var i in variables) {
                        dropdown.push([variables[i], variables[i]]);
                    }
                } else {
                    dropdown.push(['', '']);
                }
                return dropdown;
            },
            onchange: function() {
                if (!this.workspace) {
                    // Block has been deleted.
                    return;
                }
                // this.last_variable=this.getFieldValue('VAR');
                // if (!this.last_variables){
                //     this.last_variables=Blockly.Variables.allVariables();
                // }
                // var variables=Blockly.Variables.allVariables();
                // for (var i in variables){
                //     if (Blockly.Variables.allVariables()[i]!==this.last_variables[i]){
                //         try{
                //             this.removeInput('VALUE');
                //             this.appendValueInput('VALUE')
                //                 .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_SET'))
                //                 .appendField(new Blockly.FieldDropdown(this.getVariables()), 'VAR')
                //                 .appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_SET_AS'))
                //                 .setAlign(Blockly.ALIGN_RIGHT);
                //             this.setInputsInline(false);
                //             this.setFieldValue(this.last_variable, 'VAR');
                //         }catch(e){}
                //         this.last_variables=Blockly.Variables.allVariables();
                //     }
                // }
                try {
                    if (!this.exists()) {
                        this.setWarningText(RoboBlocks.locales.getKey('LANG_VARIABLES_CALL_WITHOUT_DEFINITION'));
                    } else {
                        this.setWarningText(null);
                    }
                } catch (e) {}
            },
            renameVar: function(oldName, newName) {
                if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
                    this.setTitleValue(newName, 'VAR');
                }
            },
            exists: function() {
                for (var i in Blockly.Variables.allVariables()) {
                    if (Blockly.Variables.allVariables()[i] === this.getFieldValue('VAR')) {
                        return true;
                    }
                }
                return false;
            }
        };
        // Source: src/blocks/variables_volatile_global_type/variables_volatile_global_type.js
        /* global Blockly,  RoboBlocks */
        /* jshint sub:true */
        /**
         * variables_volatile_global_type code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.variables_volatile_global_type = function() {
            // Variable setter.
            var varType = this.getFieldValue('VAR_TYPE');
            var varValue = Blockly.Arduino.valueToCode(this, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT);
            var varName = this.getFieldValue('VAR') || '';
            //var isFunction = false;

            //var varName = this.getFieldValue('VAR') || '';
            var code = '';

            var a = RoboBlocks.findPinMode(varValue);
            code += a['code'];
            varValue = a['pin'];

            Blockly.Arduino.definitions_['declare_var' + varName] = 'volatile ' + varType + ' ' + varName + ';\n';
            Blockly.Arduino.definitions_['define_var' + varName] = varName + '=' + varValue + ';\n';

            RoboBlocks.variables[varName] = [varType, 'global'];
            RoboBlocks.variables['analogRead(' + varName + ')'] = [varType, 'global'];
            RoboBlocks.variables['digitalRead(' + varName + ')'] = [varType, 'global'];

            return '';
        };

        Blockly.Blocks.variables_volatile_global_type = {
            // Variable setter.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_VARIABLES'), // Variables are handled specially.
            helpUrl: RoboBlocks.URL_VAR,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
                this.appendValueInput('VALUE').
                appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_VOLATILE_GLOBAL')).
                appendField(new Blockly.FieldTextInput(''), 'VAR').
                appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_VOLATILE_GLOBAL_TYPE')).
                appendField(new Blockly.FieldDropdown([
                    [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_INTEGER'), 'int'],
                    [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_INTEGER_LONG'), 'long'],
                    [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_INTEGER_ULONG'), 'unsigned long'],
                    [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_BYTE'), 'byte'],
                    [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_FLOAT'), 'float'],
                    [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_CHAR'), 'char'],
                    [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_BOOLEAN'), 'boolean'],
                    [RoboBlocks.locales.getKey('LANG_VARIABLES_TYPE_STRING'), 'String']
                ]), 'VAR_TYPE').
                appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_VOLATILE_GLOBAL_EQUALS'));
                this.setInputsInline(false);
                //this.setPreviousStatement(true);
                //this.setNextStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_VARIABLES_VOLATILE_GLOBAL_TOOLTIP'));
            },
            getVars: function() {
                return [this.getFieldValue('VAR')];
            },
            renameVar: function(oldName, newName) {
                if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
                    this.setFieldValue(newName, 'VAR');
                }
            },
            isVariable: function(varValue) {
                for (var i in Blockly.Variables.allVariables()) {
                    if (Blockly.Variables.allVariables()[i] === varValue) {
                        return true;
                    }
                }
                return false;
            },
            validName: function(name) {
                if (name && name.length > 0) {
                    var i = 0;
                    while (i < name.length) {
                        if (!isNaN(parseFloat(name[i]))) {
                            name = name.substring(1, name.length);
                        } else {
                            break;
                        }
                    }
                    name = name.replace(/([ ])/g, '_');
                    name = name.replace(/([áàâä])/g, 'a');
                    name = name.replace(/([éèêë])/g, 'e');
                    name = name.replace(/([íìîï])/g, 'i');
                    name = name.replace(/([óòôö])/g, 'o');
                    name = name.replace(/([úùûü])/g, 'u');
                    name = name.replace(/([ñ])/g, 'n');
                    name = name.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|<>\-\&\Ç\%\=\~\{\}\¿\¡\"\@\:\;\-\"\·\|\º\ª\¨\'\·\̣\─\ç\`\´\¨\^])/g, '');
                    i = 0;
                    while (i < name.length) {
                        if (!isNaN(parseFloat(name[i]))) {
                            name = name.substring(1, name.length);
                        } else {
                            break;
                        }
                    }
                    for (var j in Blockly.Arduino.RESERVED_WORDS_) {
                        var reserved_words = Blockly.Arduino.RESERVED_WORDS_.split(',');
                        if (name === reserved_words[j]) {
                            this.setWarningText(RoboBlocks.locales.getKey('LANG_RESERVED_WORDS'));
                            name = '';
                            break;
                        } else {
                            this.setWarningText(null);
                        }
                    }
                }
                return name;
            },
            onchange: function() {
                if (this.last_variable !== this.getFieldValue('VAR')) {
                    var name = this.getFieldValue('VAR');
                    name = this.validName(name);
                    try {
                        this.setFieldValue(name, 'VAR');
                    } catch (e) {}
                    this.last_variable = name;
                }
            }
        };

        // Source: src/blocks/wifi_client/wifi_client.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * wifi_client code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.wifi_client = function() {
            var ip_address = Blockly.Arduino.valueToCode(this, 'IP', Blockly.Arduino.ORDER_ATOMIC);
            var port = Blockly.Arduino.valueToCode(this, 'PORT', Blockly.Arduino.ORDER_ATOMIC);
            var code = JST['wifi_client']({
                'ip_address': ip_address,
                'port': port
            });
            Blockly.Arduino.setups_['setup_wifi_client'] = JST['wifi_client_setups']({});
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        /**
         * wifi_client block definition
         * @type {Object}
         */
        Blockly.Blocks.wifi_client = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            tags: ['wifi'],
            helpUrl: RoboBlocks.URL_US,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendValueInput('IP', String).setCheck(String).appendField(RoboBlocks.locales.getKey('LANG_WIFI_CLIENT')).appendField(RoboBlocks.locales.getKey('LANG_WIFI_CLIENT_IP')).setAlign(Blockly.ALIGN_RIGHT);
                this.appendValueInput('PORT').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_WIFI_CLIENT_PORT')).setAlign(Blockly.ALIGN_RIGHT);
                this.setInputsInline(false);
                this.setOutput(true, Boolean);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_WIFI_CLIENT_TOOLTIP'));
            }
        };

        // Source: src/blocks/wifi_close_client/wifi_close_client.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * wifi_close_client code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.wifi_close_client = function() {
            var code = JST['wifi_close_client']({});
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        /**
         * wifi_close_client block definition
         * @type {Object}
         */
        Blockly.Blocks.wifi_close_client = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            tags: ['wifi'],
            helpUrl: RoboBlocks.URL_US,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_WIFI_CLOSE_CLIENT'));
                this.setInputsInline(false);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_WIFI_CLOSE_CLIENT_TOOLTIP'));
            }
        };

        // Source: src/blocks/wifi_close_server/wifi_close_server.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * wifi_close_server code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.wifi_close_server = function() {
            var code = JST['wifi_close_server']({});
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        /**
         * wifi_close_server block definition
         * @type {Object}
         */
        Blockly.Blocks.wifi_close_server = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            tags: ['wifi'],
            helpUrl: RoboBlocks.URL_US,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_WIFI_CLOSE_SERVER'));
                this.setInputsInline(false);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_WIFI_CLOSE_SERVER_TOOLTIP'));
            }
        };

        // Source: src/blocks/wifi_connect/wifi_connect.js
        /* global Blockly, JST, options, RoboBlocks */
        /* jshint sub:true */
        /**
         * wifi_connect code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.wifi_connect = function() {
            var conn_type = this.getFieldValue('CONN_TYPE');
            var ssid = Blockly.Arduino.valueToCode(this, 'SSID', Blockly.Arduino.ORDER_ATOMIC);
            var password = Blockly.Arduino.valueToCode(this, 'PASSWORD', Blockly.Arduino.ORDER_ATOMIC);
            var channel = Blockly.Arduino.valueToCode(this, 'CHANNEL', Blockly.Arduino.ORDER_ATOMIC);
            var rx_pin = Blockly.Arduino.valueToCode(this, 'RX_PIN', Blockly.Arduino.ORDER_ATOMIC);
            var tx_pin = Blockly.Arduino.valueToCode(this, 'TX_PIN', Blockly.Arduino.ORDER_ATOMIC);
            var baud_rate = Blockly.Arduino.valueToCode(this, 'BAUD', Blockly.Arduino.ORDER_ATOMIC);
            var serial_port = 'serialwifi';
            if (rx_pin === '0' && tx_pin === '1') {
                serial_port = 'Serial';
            }
            if (rx_pin === '19' && tx_pin === '18') {
                serial_port = 'Serial1';
            }
            if (rx_pin === '17' && tx_pin === '16') {
                serial_port = 'Serial2';
            }
            if (rx_pin === '15' && tx_pin === '14') {
                serial_port = 'Serial3';
            }
            var connection_type = serial_port === 'serialwifi' ? '_software' : '_hardware';
            var code = '';
            if (conn_type === '1') {
                code = JST['wifi_connect']({
                    'ssid': ssid,
                    'password': password
                });
            } else {
                code = JST['wifi_create']({
                    'ssid': ssid,
                    'password': password,
                    'channel': channel
                });
            }
            Blockly.Arduino.definitions_['define_wifi_connect'] = JST['wifi_connect_definitions']({
                'connection_type': connection_type
            });
            if (serial_port === 'serialwifi') {
                Blockly.Arduino.definitions_['declare_var_serialwifi'] = JST['wifi_connect_declare_software']({
                    'rx_pin': rx_pin,
                    'tx_pin': tx_pin
                });
            }
            Blockly.Arduino.definitions_['declare_var_esp8266'] = JST['wifi_connect_declare']({
                'serial_port': serial_port,
                'baud_rate': baud_rate
            });
            if (conn_type === '1') {
                Blockly.Arduino.setups_['setup_wifi_connect'] = JST['wifi_connect_setups']({
                    'serial_port': serial_port,
                    'baud_rate': baud_rate
                });
            } else {
                Blockly.Arduino.setups_['setup_wifi_connect'] = JST['wifi_create_setups']({
                    'serial_port': serial_port,
                    'baud_rate': baud_rate
                });
            }
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        /**
         * wifi_connect block definition
         * @type {Object}
         */
        Blockly.Blocks.wifi_connect = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            tags: ['wifi'],
            helpUrl: RoboBlocks.URL_US,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput('').appendField(RoboBlocks.locales.getKey('LANG_WIFI_CONNECT')).appendField(new Blockly.FieldImage('img/blocks/esp01.png', 208 * options.zoom, 140 * options.zoom))
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.locales.getKey('LANG_WIFI_CONNECT_STATION') || 'STATION', '1'],
                        [RoboBlocks.locales.getKey('LANG_WIFI_CONNECT_SOFTAP') || 'SOFTAP', '2']
                    ]), 'CONN_TYPE');
                this.appendValueInput('SSID', String).setCheck(String).appendField(RoboBlocks.locales.getKey('LANG_WIFI_CONNECT_SSID')).setAlign(Blockly.ALIGN_RIGHT);
                this.appendValueInput('PASSWORD', String).setCheck(String).appendField(RoboBlocks.locales.getKey('LANG_WIFI_CONNECT_PASSWORD')).setAlign(Blockly.ALIGN_RIGHT);
                this.appendValueInput('RX_PIN').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_WIFI_CONNECT_RX_PIN')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
                this.appendValueInput('TX_PIN').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_WIFI_CONNECT_TX_PIN')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
                this.appendValueInput('BAUD').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_WIFI_CONNECT_BAUD')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
                this.last_conn_type = this.getFieldValue('CONN_TYPE');
                this.check_conn_type();
                this.setInputsInline(false);
                this.setOutput(true, Boolean);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_WIFI_CONNECT_TOOLTIP'));
            },
            check_conn_type: function() {
                if (this.getInput('CHANNEL')) {
                    this.removeInput('CHANNEL');
                }
                if (this.getInput('RX_PIN')) {
                    this.removeInput('RX_PIN');
                }
                if (this.getInput('TX_PIN')) {
                    this.removeInput('TX_PIN');
                }
                if (this.getInput('BAUD')) {
                    this.removeInput('BAUD');
                }
                if (this.last_conn_type === '1') {
                    this.appendValueInput('RX_PIN').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_WIFI_CONNECT_RX_PIN')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
                    this.appendValueInput('TX_PIN').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_WIFI_CONNECT_TX_PIN')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
                    this.appendValueInput('BAUD').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_WIFI_CONNECT_BAUD')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
                } else {
                    this.appendValueInput('CHANNEL').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_WIFI_CONNECT_CHANNEL')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
                    this.appendValueInput('RX_PIN').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_WIFI_CONNECT_RX_PIN')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
                    this.appendValueInput('TX_PIN').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_WIFI_CONNECT_TX_PIN')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
                    this.appendValueInput('BAUD').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_WIFI_CONNECT_BAUD')).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT);
                }
            },
            onchange: function() {
                if (this.getFieldValue('CONN_TYPE') !== this.last_conn_type) {
                    this.check_conn_type();
                    this.last_conn_type = this.getFieldValue('CONN_TYPE');
                }
            },
            mutationToDom: function() {
                var container = document.createElement('mutation');
                container.setAttribute('connection_type', this.last_conn_type);
                return container;
            },
            domToMutation: function(xmlElement) {
                var connectionType = xmlElement.getAttribute('connection_type');
                if (connectionType && connectionType !== 'undefined') {
                    this.last_conn_type = connectionType;
                }
                this.check_conn_type();
            }
        };

        // Source: src/blocks/wifi_disconnect/wifi_disconnect.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * wifi_disconnect code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.wifi_disconnect = function() {
            var code = JST['wifi_disconnect']({});
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        /**
         * wifi_disconnect block definition
         * @type {Object}
         */
        Blockly.Blocks.wifi_disconnect = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            tags: ['wifi'],
            helpUrl: RoboBlocks.URL_US,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_WIFI_DISCONNECT'));
                this.setInputsInline(false);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_WIFI_DISCONNECT_TOOLTIP'));
            }
        };

        // Source: src/blocks/wifi_getip/wifi_getip.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * wifi_getip code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.wifi_getip = function() {
            var code = JST['wifi_getip']({});
            Blockly.Arduino.definitions_['define_wifi_getip_function'] = JST['wifi_getip_definitions_getipaddress']({});
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        /**
         * wifi_getip block definition
         * @type {Object}
         */
        Blockly.Blocks.wifi_getip = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            tags: ['wifi'],
            helpUrl: RoboBlocks.URL_US,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_WIFI_GETIP'));
                this.setInputsInline(false);
                this.setOutput(true, Boolean);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_WIFI_GETIP_TOOLTIP'));
            }
        };

        // Source: src/blocks/wifi_receive_client/wifi_receive_client.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * wifi_receive_client code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.wifi_receive_client = function() {
            var timeout = this.getFieldValue('TIMEOUT');
            var code = JST['wifi_receive_client']({});
            Blockly.Arduino.definitions_['declare_function_receive_client'] = JST['wifi_receive_client_declare']({
                'timeout': timeout
            });
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        /**
         * wifi_receive_client block definition
         * @type {Object}
         */
        Blockly.Blocks.wifi_receive_client = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            tags: ['wifi'],
            helpUrl: RoboBlocks.URL_US,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_WIFI_RECEIVE_CLIENT')).appendField(RoboBlocks.locales.getKey('LANG_WIFI_RECEIVE_SERVER_TIMEOUT')).appendField(new Blockly.FieldTextInput('1000', Blockly.Blocks.math_number.validator), 'TIMEOUT');
                this.setInputsInline(false);
                this.setOutput(true, String);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_WIFI_RECEIVE_CLIENT_TOOLTIP'));
            }
        };

        // Source: src/blocks/wifi_receive_server/wifi_receive_server.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * wifi_receive_server code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.wifi_receive_server = function() {
            var timeout = this.getFieldValue('TIMEOUT');
            var code = JST['wifi_receive_server']({});
            Blockly.Arduino.definitions_['declare_function_receive_server'] = JST['wifi_receive_server_declare']({
                'timeout': timeout
            });
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        /**
         * wifi_receive_server block definition
         * @type {Object}
         */
        Blockly.Blocks.wifi_receive_server = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            tags: ['wifi'],
            helpUrl: RoboBlocks.URL_US,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_WIFI_RECEIVE_SERVER')).appendField(RoboBlocks.locales.getKey('LANG_WIFI_RECEIVE_SERVER_TIMEOUT')).appendField(new Blockly.FieldTextInput('1000', Blockly.Blocks.math_number.validator), 'TIMEOUT');
                this.setInputsInline(false);
                this.setOutput(true, String);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_WIFI_RECEIVE_SERVER_TOOLTIP'));
            }
        };

        // Source: src/blocks/wifi_send_client/wifi_send_client.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * wifi_send_client code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.wifi_send_client = function() {
            var id_client = Blockly.Arduino.valueToCode(this, 'ID', Blockly.Arduino.ORDER_ATOMIC);
            var data = Blockly.Arduino.valueToCode(this, 'DATA', Blockly.Arduino.ORDER_ATOMIC);
            var code = JST['wifi_send_client']({
                'id_client': id_client,
                'data': data
            });
            Blockly.Arduino.definitions_['declare_wifi_send_client'] = JST['wifi_send_client_declare']({});
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        /**
         * wifi_send_client block definition
         * @type {Object}
         */
        Blockly.Blocks.wifi_send_client = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            tags: ['wifi'],
            helpUrl: RoboBlocks.URL_US,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendValueInput('ID').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_WIFI_SEND_CLIENT')).appendField(RoboBlocks.locales.getKey('LANG_WIFI_SEND_CLIENT_ID')).setAlign(Blockly.ALIGN_RIGHT);
                this.appendValueInput('DATA', String).setCheck(String).appendField(RoboBlocks.locales.getKey('LANG_WIFI_SEND_CLIENT_DATA')).setAlign(Blockly.ALIGN_RIGHT);
                this.setInputsInline(false);
                this.setOutput(true, Boolean);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_WIFI_SEND_CLIENT_TOOLTIP'));
            }
        };

        // Source: src/blocks/wifi_send_server/wifi_send_server.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * wifi_send_server code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.wifi_send_server = function() {
            var data = Blockly.Arduino.valueToCode(this, 'DATA', Blockly.Arduino.ORDER_ATOMIC);
            var code = JST['wifi_send_server']({
                'data': data
            });
            Blockly.Arduino.definitions_['declare_wifi_send_function'] = JST['wifi_send_server_declare_function']({});

            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        /**
         * wifi_send_server block definition
         * @type {Object}
         */
        Blockly.Blocks.wifi_send_server = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            tags: ['wifi'],
            helpUrl: RoboBlocks.URL_US,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendValueInput('DATA').setCheck(String).appendField(RoboBlocks.locales.getKey('LANG_WIFI_SEND_SERVER')).appendField(RoboBlocks.locales.getKey('LANG_WIFI_SEND_SERVER_DATA')).setAlign(Blockly.ALIGN_RIGHT);
                this.setInputsInline(false);
                this.setOutput(true, Boolean);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_WIFI_SEND_SERVER_TOOLTIP'));
            }
        };

        // Source: src/blocks/wifi_server/wifi_server.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * wifi_server code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.wifi_server = function() {
            var port = Blockly.Arduino.valueToCode(this, 'PORT', Blockly.Arduino.ORDER_ATOMIC);
            var code = JST['wifi_server']({
                'port': port
            });
            Blockly.Arduino.setups_['setup_wifi_server'] = JST['wifi_server_setups']({});
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        /**
         * wifi_server block definition
         * @type {Object}
         */
        Blockly.Blocks.wifi_server = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            tags: ['wifi'],
            helpUrl: RoboBlocks.URL_US,
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendValueInput('PORT', String).setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_WIFI_SERVER')).appendField(RoboBlocks.locales.getKey('LANG_WIFI_SERVER_PORT')).setAlign(Blockly.ALIGN_RIGHT);
                this.setInputsInline(false);
                this.setOutput(true, Boolean);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_WIFI_SERVER_TOOLTIP'));
            }
        };

        // Source: src/blocks/zum_dht11/zum_dht11.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * zum_dht11 code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.zum_dht11 = function() {
            var sensor_type = this.getFieldValue('SENSOR_TYPE');
            var value_type = this.getFieldValue('VALUE_TYPE');
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
            var code = '';
            var a = RoboBlocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];
            Blockly.Arduino.definitions_['define_dht11'] = JST['zum_dht11_definitions']({});
            Blockly.Arduino.definitions_['declare_var_dht11_' + dropdown_pin] = JST['zum_dht11_declare']({
                'dropdown_pin': dropdown_pin,
                'sensor_type': sensor_type
            });
            Blockly.Arduino.setups_['setup_dht11_' + dropdown_pin] = JST['zum_dht11_setups']({
                'dropdown_pin': dropdown_pin
            });
            code += JST['zum_dht11']({
                'dropdown_pin': dropdown_pin,
                'value_type': value_type
            });
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * zum_dht11 block definition
         * @type {Object}
         */
        Blockly.Blocks.zum_dht11 = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_SENSOR'),
            tags: ['dht11'],
            helpUrl: RoboBlocks.URL_SENSOR,

            /**
             * zum_dht11 initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_SENSOR);
                this.appendDummyInput().appendField(new Blockly.FieldImage('img/blocks/dht11.png', 208 * options.zoom, 140 * options.zoom))
                    .appendField(new Blockly.FieldDropdown([
                        ['DHT11', 'DHT11'],
                        ['DHT21 (AM2301)', 'DHT21'],
                        ['DHT22 (AM2302/AM2321)', 'DHT22']
                    ]), 'SENSOR_TYPE').setAlign(Blockly.ALIGN_RIGHT);
                this.appendDummyInput('').appendField(RoboBlocks.locales.getKey('LANG_ZUM_DHT11_VALUE'))
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.locales.getKey('LANG_ZUM_DHT11_VALUE1') || 'Temperature', 'Temperature'],
                        [RoboBlocks.locales.getKey('LANG_ZUM_DHT11_VALUE2') || 'Humidity', 'Humidity']
                    ]), 'VALUE_TYPE').setAlign(Blockly.ALIGN_RIGHT);
                this.appendValueInput('PIN').setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_ZUM_DHT11_PIN')).setAlign(Blockly.ALIGN_RIGHT);
                this.setInputsInline(false);
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ZUM_DHT11_TOOLTIP'));
            }
        };

        // Source: src/blocks/zum_piezo_buzzer/zum_piezo_buzzer.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * zum_piezo_buzzer code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.zum_piezo_buzzer = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '';
            var dropdown_stat = this.getFieldValue('STAT');
            var delay_time = Blockly.Arduino.valueToCode(this, 'DURA', Blockly.Arduino.ORDER_ATOMIC);

            var code = '';
            var a = RoboBlocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];

            a = RoboBlocks.findPinMode(delay_time);
            code += a['code'];
            delay_time = a['pin'];

            code += JST['zum_piezo_buzzer']({
                'dropdown_pin': dropdown_pin,
                'dropdown_stat': dropdown_stat,
                'delay_time': delay_time
            });

            return code;
        };


        /**
         * zum_piezo_buzzer block definition
         * @type {Object}
         */
        Blockly.Blocks.zum_piezo_buzzer = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ZUM'),
            tags: ['buzzer'],
            helpUrl: RoboBlocks.URL_BUZZER,
            /**
             * zum_piezo_buzzer initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER'))
                    .appendField(new Blockly.FieldImage('img/blocks/zum01.png', 208 * options.zoom, 140 * options.zoom))
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER_PIN'));
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER_TONE'))
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER_DO') || 'DO', '261'],
                        [RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER_RE') || 'RE', '293'],
                        [RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER_MI') || 'MI', '329'],
                        [RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER_FA') || 'FA', '349'],
                        [RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER_SOL') || 'SOL', '392'],
                        [RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER_LA') || 'LA', '440'],
                        [RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER_SI') || 'SI', '494']
                    ]), 'STAT'); //523
                this.appendValueInput('DURA', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER_DURATION'));

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZER_TOOLTIP'));
            }
        };

        // Source: src/blocks/zum_piezo_buzzerav/zum_piezo_buzzerav.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * zum_piezo_buzzerav code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.zum_piezo_buzzerav = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '';
            var Buzztone = Blockly.Arduino.valueToCode(this, 'TONE', Blockly.Arduino.ORDER_ATOMIC);
            var delay_time = Blockly.Arduino.valueToCode(this, 'DURA', Blockly.Arduino.ORDER_ATOMIC);

            var code = '';
            var a = RoboBlocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];

            a = RoboBlocks.findPinMode(Buzztone);
            code += a['code'];
            Buzztone = a['pin'];

            a = RoboBlocks.findPinMode(delay_time);
            code += a['code'];
            delay_time = a['pin'];

            code += JST['zum_piezo_buzzerav']({
                'dropdown_pin': dropdown_pin,
                'Buzztone': Buzztone,
                'delay_time': delay_time
            });

            return code;
        };


        /**
         * zum_piezo_buzzerav block definition
         * @type {Object}
         */
        Blockly.Blocks.zum_piezo_buzzerav = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ZUM'),
            tags: ['buzzer'],
            helpUrl: RoboBlocks.URL_BUZZER,
            /**
             * zum_piezo_buzzerav initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZERAV'))
                    .appendField(new Blockly.FieldImage('img/blocks/zum01.png', 208 * options.zoom, 140 * options.zoom))
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZERAV_PIN'));
                this.appendValueInput('TONE', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZERAV_TONE'));

                this.appendValueInput('DURA', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZERAV_DURATION'));

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP'));
            }
        };
        return Blockly.Blocks;
    }
    var RoboBlocks = {
        load: load
    };
    if (typeof define === 'function' && define.amd) {
        return RoboBlocks;
    } else {
        window.RoboBlocks = RoboBlocks;
    }
}));
