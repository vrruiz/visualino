/*! roboblocks - v0.1.12 - 2015-02-28
 * https://github.com/bq/roboblocks
 * Copyright (c) 2015 bq; Licensed  */

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
                LANG_VARIABLES_SET_ITEM: 'element',
                LANG_RESERVED_WORDS: 'Paraula reservada: aquest nom no està permès.',
                //logic blocks:
                LANG_CATEGORY_LOGIC: 'Lògica',
                LANG_LOGIC_OPERATION_AND: 'i',
                LANG_LOGIC_OPERATION_OR: 'o',
                LANG_LOGIC_COMPARE_TOOLTIP_EQ: 'Compara si les dues entrades són iguals.',
                LANG_LOGIC_COMPARE_TOOLTIP_NEQ: 'Compara si les dues entrades no són iguals entre si.',
                LANG_LOGIC_COMPARE_TOOLTIP_LT: 'Compara si la primera entrada és menor que la segona entrada.',
                LANG_LOGIC_COMPARE_TOOLTIP_LTE: 'Compara si la primera entrada és menor o igual que la segona entrada.',
                LANG_LOGIC_COMPARE_TOOLTIP_GT: 'Compara si la primera entrada és més gran que la segona entrada.',
                LANG_LOGIC_COMPARE_TOOLTIP_GTE: 'Compara si la primera entrada és més gran o igual que la segona entrada.',
                LANG_LOGIC_OPERATION_TOOLTIP_AND: 'Compara si les dues entrades són verdaderes.',
                LANG_LOGIC_OPERATION_TOOLTIP_OR: 'Compara si alguna de les entrades són verdaderes.',
                LANG_LOGIC_NEGATE_INPUT_NOT: 'no',
                LANG_LOGIC_NEGATE_TOOLTIP: 'Retorna el contrari de l\'entrada.',
                LANG_LOGIC_NEGATE_HELPURL: '',
                LANG_LOGIC_BOOLEAN_TRUE: 'verdader',
                LANG_LOGIC_BOOLEAN_FALSE: 'fals',
                LANG_LOGIC_BOOLEAN_TOOLTIP: 'Retorna verdader o fals en funció del que hem seleccionat.',
                //communication blocks:
                LANG_CATEGORY_COMMUNICATION: 'Comunicació',
                LANG_BQ_BLUETOOTH_RECEIVE: 'Bluetooth: rebre ',
                LANG_BQ_BLUETOOTH_RECEIVE_BLUETOOTH: 'Bluetooth',
                LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP: 'Retorna les dades rebudes pel mòdul Bluetooth',
                LANG_BQ_BLUETOOTH_SEND: 'Bluetooth: Enviar',
                LANG_BQ_BLUETOOTH_SEND_SEND: 'Enviar dades',
                LANG_BQ_BLUETOOTH_SEND_TOOLTIP: 'Pren les dades de l\'entrada i les envia usant el mòdul Bluetooth',
                LANG_BQ_BLUETOOTH_DEF: 'Bluetooth',
                LANG_BQ_BLUETOOTH_DEF_BAUD_RATE: 'Taxa de bauds',
                LANG_BQ_BLUETOOTH_DEF_PIN1: 'RX',
                LANG_BQ_BLUETOOTH_DEF_PIN2: 'TX',
                LANG_BQ_BLUETOOTH_DEF_NAME: 'Nom',
                LANG_BQ_BLUETOOTH_DEF_PINCODE: 'Codi PIN',
                LANG_BQ_BLUETOOTH_DEF_RECEIVE: 'Recibir',
                LANG_BQ_BLUETOOTH_DEF_SEND: 'Rebre',
                LANG_BQ_BLUETOOTH_DEF_TOOLTIP: 'Definició del mòdul Bluetooth',
                LANG_ADVANCED_BT_SERIAL_AVAILABLE: 'Bluetooth: Port Sèrie Disponible',
                LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP: 'Comprova si el mòdul Bluetooth està disponible o no',
                LANG_ADVANCED_SERIAL_AVAILABLE: 'Port Sèrie Disponible',
                LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP: 'Comprova si el port sèrie està disponible o no',
                LANG_ADVANCED_SERIAL_PRINT: 'Imprimir per port sèrie',
                LANG_ADVANCED_SERIAL_PRINT_TOOLTIP: 'Imprimeix les dades com text ASCII.',
                LANG_ADVANCED_SERIAL_PRINTLN: 'Imprimir per port sèrie amb salt de línia',
                LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP: 'Imprimeix les dades com text ASCII i amb retorn de carro (RC).',
                LANG_ADVANCED_SERIAL_READ: 'Llegir des del port sèrie',
                LANG_ADVANCED_SERIAL_READ_TOOLTIP: 'Llegeix les dades que es reben pel port sèrie com a text ASCII.',
                LANG_ADVANCED_SERIAL_SPECIAL: 'Caràcters especials',
                LANG_ADVANCED_SERIAL_SPECIAL_TAB: 'Tabulador',
                LANG_ADVANCED_SERIAL_SPECIAL_CARRIAGE_RETURN: 'Retorn de carro',
                LANG_ADVANCED_SERIAL_SPECIAL_LINE_FEED: 'Salt de línia',
                LANG_ADVANCED_SERIAL_SPECIAL_TOOLTIP: 'Escriu caràcters especials.',
                //bq blocks :
                LANG_CATEGORY_BQ: 'Blocs octopus',
                LANG_BQ_BAT: 'BAT - Sensor d\'Ultrasons',
                LANG_BQ_BAT_RED_PIN: 'ECHO PIN#',
                LANG_BQ_BAT_BLUE_PIN: 'TRIGGER PIN#',
                LANG_BQ_BAT_TOOLTIP: 'Retorna la distància mesurada pel sensor.',
                LANG_BQ_BUTTON: 'Botó',
                LANG_BQ_BUTTON_PIN: 'PIN#',
                LANG_BQ_BUTTON_TOOLTIP: 'Botó',
                LANG_BQ_BUTTONS: 'Botonera',
                LANG_BQ_BUTTONS_PIN: 'PIN#',
                LANG_BQ_BUTTONS_BUTTON_A: 'Botó #A',
                LANG_BQ_BUTTONS_BUTTON_B: 'Botó #B',
                LANG_BQ_BUTTONS_BUTTON_C: 'Botó #C',
                LANG_BQ_BUTTONS_BUTTON_D: 'Botó #D',
                LANG_BQ_BUTTONS_BUTTON_E: 'Botó #E',
                LANG_BQ_BUTTONS_TOOLTIP: 'Botonera',
                LANG_BQ_INFRARED: 'Sensor infraroig',
                LANG_BQ_INFRARED_PIN: 'PIN#',
                LANG_BQ_INFRARED_TOOLTIP: 'Retorna el valor digital mesurat pel sensor infraroig',
                LANG_BQ_JOYSTICK: 'Joystick',
                LANG_BQ_JOYSTICK_PIN_X: 'Eix X PIN#',
                LANG_BQ_JOYSTICK_PIN_Y: 'Eix Y PIN#',
                LANG_BQ_JOYSTICK_POSITION: 'Posició Joystick',
                LANG_BQ_JOYSTICK_PIN_BUTTON: 'Polsador PIN#',
                LANG_BQ_JOYSTICK_TOOLTIP: 'Joystick',
                LANG_BQ_LED: 'LED',
                LANG_BQ_LED_PIN: 'PIN#',
                LANG_BQ_LED_STATE: '',
                LANG_BQ_LED_ON: 'ENCENDRE',
                LANG_BQ_LED_OFF: 'APAGAR',
                LANG_BQ_LED_TOOLTIP: 'LED',
                LANG_BQ_PHOTORESISTOR: 'Sensor de Llum',
                LANG_BQ_PHOTORESISTOR_PIN: 'PIN#',
                LANG_BQ_PHOTORESISTOR_TOOLTIP: 'Retorna el valor analògic mesurat per la fotorresistencia.',
                LANG_BQ_PIEZO_BUZZER: 'Brunzidor',
                LANG_BQ_PIEZO_BUZZER_PIN: 'PIN#',
                LANG_BQ_PIEZO_BUZZER_TONE: 'TO',
                LANG_BQ_PIEZO_BUZZER_DO: 'DO',
                LANG_BQ_PIEZO_BUZZER_RE: 'RE',
                LANG_BQ_PIEZO_BUZZER_MI: 'MI',
                LANG_BQ_PIEZO_BUZZER_FA: 'FA',
                LANG_BQ_PIEZO_BUZZER_SOL: 'SOL',
                LANG_BQ_PIEZO_BUZZER_LA: 'LA',
                LANG_BQ_PIEZO_BUZZER_SI: 'SI',
                LANG_BQ_PIEZO_BUZZER_DURATION: 'Durada',
                LANG_BQ_PIEZO_BUZZER_TOOLTIP: 'Brunzidor Piezoelèctric',
                LANG_BQ_PIEZO_BUZZERAV: 'Brunzidor avançat',
                LANG_BQ_PIEZO_BUZZERAV_PIN: 'PIN#',
                LANG_BQ_PIEZO_BUZZERAV_TONE: 'TON',
                LANG_BQ_PIEZO_BUZZERAV_DURATION: 'Durada',
                LANG_BQ_PIEZO_BUZZERAV_TOOLTIP: 'Brunzidor avançat',
                LANG_BQ_POTENTIOMETER: 'Potenciòmetre',
                LANG_BQ_POTENTIOMETER_PIN: 'PIN#',
                LANG_BQ_POTENTIOMETER_TOOLTIP: 'Retorna el valor analògic mesurat pel potenciòmetre',
                //LCD blocks:
                LANG_CATEGORY_LCD: 'Blocs LCD',
                LANG_LCD_DEF: 'LCD',
                LANG_LCD_PINS: 'Connecta el pin SCL al pin A5 i el pin SDA al pin A4',
                LANG_LCD_DEF_TOOLTIP: 'Defineix el LCD',
                LANG_LCD_SETBACKLIGHT: 'LCD: ajustar la retroiluminació',
                LANG_LCD_SETBACKLIGHT_CLOSE: '',
                LANG_LCD_SETBACKLIGHT_TOOLTIP: 'Ajusta la retroiluminació de la pantalla LCD',
                LANG_LCD_PRINT: 'LCD: Imprimir ',
                LANG_LCD_PRINT_POSITION: 'Fixar posició del text?',
                LANG_LCD_PRINT_TOOLTIP: 'Imprimeix un string a la pantalla LCD en la posició especificada o en la següent disponible.',
                LANG_LCD_CLEAR: 'LCD esborrar',
                LANG_LCD_CLEAR_TOOLTIP: 'LCD: Esborrar',
                //controls blocks :
                LANG_CATEGORY_CONTROLS: 'Control',
                LANG_CONTROLS_BASE_DELAY_WAIT: 'Esperar (ms)',
                LANG_CONTROLS_BASE_DELAY_TOOLTIP: 'Espera el temps especificat en mil·lisegons (ms)',
                LANG_CONTROLS_IF_TOOLTIP_1: 'Si la condició és verdadera, executa les accions dins del bloc.',
                LANG_CONTROLS_IF_TOOLTIP_2: 'Si la condició és verdadera, s\'executa el primer bloc d\'ordres. Si no ho és, s\'executa el segon bloc d\'ordres.',
                LANG_CONTROLS_IF_TOOLTIP_3: 'Si el primer valor és verdader, s\'executa el primer bloc d\'ordres. Sinó, si el segon valor és verdader, s\'executa el segon bloc d\'ordres.',
                LANG_CONTROLS_IF_TOOLTIP_4: 'Si el primer valor és verdader, s\'executa el primer bloc d\'ordres. Sinó, si el segon valor és verdader, s\'executa el segon bloc d\'ordres. Si cap dels valors és verdader, s\'executa l\'últim bloc d\'ordres',
                LANG_CONTROLS_IF_MSG_IF: 'si',
                LANG_CONTROLS_IF_MSG_ELSEIF: 'en canvi, si',
                LANG_CONTROLS_IF_MSG_ELSE: 'en cas contrari',
                LANG_CONTROLS_IF_MSG_THEN: 'executar',
                LANG_CONTROLS_IF_IF_Field_IF: 'si',
                LANG_CONTROLS_IF_IF_TOOLTIP: 'Afegir, eliminar o reordenar seccions per reconfigurar aquest bloc "si".',
                LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF: 'en canvi, si',
                LANG_CONTROLS_IF_ELSEIF_TOOLTIP: 'Afegeix a condició del bloc "si".',
                LANG_CONTROLS_IF_ELSE_Field_ELSE: 'en cas contrari',
                LANG_CONTROLS_IF_ELSE_TOOLTIP: 'Afegeix una condició final al bloc "si" per a capturar la resta d\'opcions.',
                LANG_CONTROLS_FOR_FROM_WARNING: 'It is not possible to set a variable as the initial value of the for block.',
                LANG_CONTROLS_FOR_TO_WARNING: 'It is not possible to set a variable as the final value of the for block.',
                LANG_CONTROLS_FOR_INPUT_WITH: 'comptar amb',
                LANG_CONTROLS_FOR_INPUT_VAR: 'x',
                LANG_CONTROLS_FOR_INPUT_FROM: 'des de',
                LANG_CONTROLS_FOR_INPUT_TO: 'fins',
                LANG_CONTROLS_FOR_INPUT_DO: 'executar',
                LANG_CONTROLS_FOR_TOOLTIP: 'Comptar des d\'un nombre d\'inici fins un de final. Cada vegada que s\'incrementa en un el compte, la variable pren aquest valor i s\'executen les accions.',
                LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE: 'mentre',
                LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL: 'fins',
                LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE: 'Mentre la condició sigui verdadera, executar les instruccions.',
                LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL: 'Mentre la condició sigui falsa, executar les instruccions.',
                LANG_CONTROLS_REPEAT_TITLE_REPEAT: 'Repetir',
                LANG_CONTROLS_REPEAT_TITLE_TIMES: 'vegades',
                LANG_CONTROLS_REPEAT_INPUT_DO: 'executar',
                LANG_CONTROLS_REPEAT_TOOLTIP: 'Executar les instruccions un nombre concret de vegades.',
                LANG_CONTROLS_FLOW_STATEMENTS_HELPURL: '',
                LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP: 'el bucle',
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: 'interrompre',
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: 'continuar amb la següent iteració',
                LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK: 'Interrompre el bucle que conté aquesta instrucció.',
                LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE: 'Saltar-se la resta d\'accions d\'aquesta iteració i continuar amb la següent iteració.',
                LANG_CONTROLS_FLOW_STATEMENTS_WARNING: 'Atenció: Aquest bloc només pot ser usat dins d\'un bucle.',
                LANG_CONTROLS_SWITCH: 'si ',
                LANG_CONTROLS_SWITCH_TOOLTIP_1: 'Executa les accions del cas que es compleixi.',
                LANG_CONTROLS_SWITCH_TOOLTIP_2: 'Executa les accions del cas que es compleixi.',
                LANG_CONTROLS_SWITCH_TOOLTIP_3: 'Executa les accions del cas que es compleixi',
                LANG_CONTROLS_SWITCH_TOOLTIP_4: 'Executa les accions del cas que es compleixi',
                LANG_CONTROLS_SWITCH_SWITCH_TOOLTIP: 'Aquest bloc compara d\'un en un si es compleixen els diferents casos.',
                LANG_CONTROLS_SWITCH_CASE_TOOLTIP: 'cas ',
                LANG_CONTROLS_SWITCH_DEFAULT_TOOLTIP: 'El bloc "default" especifica l\'acció que es va a executar si no s\'han complert cap dels casos anteriors.',
                LANG_CONTROLS_SWITCH_IS: 'és: ',
                LANG_CONTROLS_SWITCH_CASE: 'cas ',
                LANG_CONTROLS_SWITCH_COLON: ': ',
                LANG_CONTROLS_SWITCH_DEFAULT: 'en un altre cas',
                LANG_CONTROLS_SWITCH_DO: 'executar',
                //math blocks :
                LANG_CATEGORY_MATH: 'Matemàtiques',
                LANG_MATH_ADVANCED_MAP_MAP: 'Mapejar ',
                LANG_MATH_ADVANCED_MAP_FROM: 'De [',
                LANG_MATH_ADVANCED_MAP_HYPHEN: '-',
                LANG_MATH_ADVANCED_MAP_BRACKET: ']',
                LANG_MATH_ADVANCED_MAP_TO: 'a [',
                LANG_MATH_ADVANCED_MAP_TOOLTIP: 'Mapeja l\'entrada des d\'un rang de valors inicials a un altre rang diferent.',
                LANG_MATH_NUMBER_TOOLTIP: 'Nombre sencer',
                LANG_MATH_ARRAY_ARRAY3: '[3]',
                LANG_MATH_ARRAY_BRACKET3: '{',
                LANG_MATH_ARRAY_BRACKET4: '}',
                LANG_MATH_ARRAY_COMMA: ',',
                LANG_MATH_ARRAY_TOOLTIP: 'Vector de tres enters',
                LANG_ARRAY_GET_BRACKET1: '[',
                LANG_ARRAY_GET_BRACKET2: ']',
                LANG_ARRAY_GET_TOOLTIP: 'Retorna el valor d\'un element concret del vector.',
                LANG_MATH_MODULO_TOOLTIP: 'Retorna la resta de la divisió de les dues entrades.',
                LANG_MATH_BASE_MAP: 'Mapejar ',
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
                //text blocks:
                LANG_CATEGORY_TEXT: 'Text',
                LANG_TEXT_TEXT_HELPURL: '',
                LANG_TEXT_TEXT_TOOLTIP: 'Una lletra, una paraula o una línia de text.',
                LANG_TEXT_JOIN_HELPURL: '',
                LANG_TEXT_JOIN_Field_CREATEWITH: 'crear text amb',
                LANG_TEXT_JOIN_TOOLTIP: 'Crea text ajuntant qualsevol nombre d\'elements.',
                LANG_TEXT_CREATE_JOIN_Field_JOIN: 'unir',
                LANG_TEXT_CREATE_JOIN_TOOLTIP: 'Afegir, eliminar o reordenar seccions per a reconfigurar aquest bloc de text.',
                LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM: 'element',
                LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP: 'Afegir un element al text.',
                LANG_TEXT_CREATE_JOIN_TITLE_JOIN: 'unir',
                LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM: 'element',
                LANG_TEXT_APPEND_HELPURL: '',
                LANG_TEXT_APPEND_TO: 'a',
                LANG_TEXT_APPEND_APPENDTEXT: 'afegir-hi text',
                LANG_TEXT_APPEND_VARIABLE: 'element',
                LANG_TEXT_APPEND_TOOLTIP: 'Afegir text a la variable %1.',
                LANG_TEXT_LENGTH_HELPURL: '',
                LANG_TEXT_LENGTH_INPUT_LENGTH: 'longitud',
                LANG_TEXT_LENGTH_TOOLTIP: 'Retorna el nombre de lletres (incloent-hi els espais) en el text introduït.',
                LANG_TEXT_EQUALSIGNORECASE_IS: '',
                LANG_TEXT_EQUALSIGNORECASE_EQUAL: ' =',
                LANG_TEXT_EQUALSIGNORECASE_QUESTION: '',
                LANG_TEXT_EQUALSIGNORECASE_TOOLTIP: 'Compara si els dos textos introduïts són iguals, independentment que tinguin lletres majúscules o minúscules.',
                LANG_TEXT_SUBSTRING: 'Retallar ',
                LANG_TEXT_SUBSTRING_FROM: 'des de',
                LANG_TEXT_SUBSTRING_TO: 'fins',
                LANG_TEXT_SUBSTRING_TOOLTIP: 'Retalla els caràcters del text introduït que es trobin entre els dos índexs i crea amb ells un nou text.',
                //advanced blocks :
                LANG_CATEGORY_ADVANCED: 'Funcions PIN',
                LANG_ADVANCED_CONVERSION_CONVERT: 'Convertir',
                LANG_ADVANCED_CONVERSION_DECIMAL: 'Decimal',
                LANG_ADVANCED_CONVERSION_HEXADECIMAL: 'Hexadecimal',
                LANG_ADVANCED_CONVERSION_OCTAL: 'Octal',
                LANG_ADVANCED_CONVERSION_BINARY: 'Binari',
                LANG_ADVANCED_CONVERSION_VALUE: 'valor',
                LANG_ADVANCED_CONVERSION_TOOLTIP: 'Convertir la base d\'un nombre.',
                LANG_ADVANCED_INOUT_ANALOG_READ: 'Llegir el pin analògic PIN#',
                LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP: 'Llegeix el valor d\'un pin analògic específic.',
                LANG_ADVANCED_INOUT_ANALOG_WRITE: 'Escriure en el pin analògic PIN#',
                LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE: 'valor',
                LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP: 'Escriu un valor entre 0 i 255 en un PIN analògic específic.',
                LANG_ADVANCED_BUILTIN_LED: 'LED A LA PLACA',
                LANG_ADVANCED_BUILTIN_LED_STATE: 'estat',
                LANG_ADVANCED_BUILTIN_LED_ON: 'ENCÈS',
                LANG_ADVANCED_BUILTIN_LED_OFF: 'APAGAT',
                LANG_ADVANCED_BUILTIN_LED_TOOLTIP: 'LED integrat a la placa que està internament connectat al PIN 13.',
                LANG_ADVANCED_INOUT_DIGITAL_READ: 'Llegir el pin digital PIN#',
                LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP: 'Llegeix el valor des d\'un pin digital específic.',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE: 'Escriure en el pin digital',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN: 'PIN#',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE: 'estat',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH: 'ALT',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW: 'BAIX',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP: 'Escriu un valor al pin digital específic.',
                LANG_ADVANCED_HIGHLOW_HIGH: 'ALT',
                LANG_ADVANCED_HIGHLOW_LOW: 'BAIX',
                LANG_ADVANCED_HIGHLOW_TOOLTIP: 'Escriu "ALT" o "BAIX" en funció del seleccionat.',
                LANG_ADVANCED_MATH_RANDOM: 'Aleatori entre',
                LANG_ADVANCED_MATH_RANDOM_AND: ' I ',
                LANG_ADVANCED_MATH_RANDOM_TOOLTIP: 'Crea un nombre aleatori entre els dos límits introduïts.',
                //procedures blocks
                LANG_CATEGORY_PROCEDURES: 'Funcions',
                LANG_PROCEDURES_CALL_WITHOUT_DEFINITION: 'Crida a una funció sense definició prèvia.',
                LANG_PROCEDURES_DEFNORETURN_HELPURL: '',
                LANG_PROCEDURES_DEFNORETURN_PROCEDURE: 'func_sin_retorno',
                LANG_PROCEDURES_DEFNORETURN_DO: 'executar',
                LANG_PROCEDURES_DEFNORETURN_TOOLTIP: 'Funció que s\'executarà sense retornar res.',
                LANG_PROCEDURES_DEFRETURN_HELPURL: '',
                LANG_PROCEDURES_DEFRETURN_PROCEDURE: 'func_con_retorno',
                LANG_PROCEDURES_DEFRETURN_DO: 'executar',
                LANG_PROCEDURES_DEFRETURN_RETURN: 'retorna',
                LANG_PROCEDURES_DEFRETURN_TOOLTIP: 'Funció amb valor de retorn.',
                LANG_PROCEDURES_DEF_DUPLICATE_WARNING: 'Atenció: Aquesta funció té paràmetres duplicats.',
                LANG_PROCEDURES_CALLNORETURN_HELPURL: '',
                LANG_PROCEDURES_CALLNORETURN_CALL: 'executar',
                LANG_PROCEDURES_CALLNORETURN_PROCEDURE: 'func_sin_retorno',
                LANG_PROCEDURES_CALLNORETURN_TOOLTIP: 'Executa aquesta funció.',
                LANG_PROCEDURES_CALLRETURN_HELPURL: '',
                LANG_PROCEDURES_CALLRETURN_CALL: 'executar',
                LANG_PROCEDURES_CALLRETURN_PROCEDURE: 'func_con_retorno',
                LANG_PROCEDURES_CALLRETURN_TOOLTIP: 'Executa aquesta funció que té valor de retorn.',
                LANG_PROCEDURES_MUTATORCONTAINER_Field: 'paràmetres',
                LANG_PROCEDURES_MUTATORARG_Field: 'variable:',
                LANG_PROCEDURES_HIGHLIGHT_DEF: 'Subratlla la funció',
                LANG_PROCEDURES_IFRETURN_TOOLTIP: 'Si la condició és verdadera, la funció retornarà aquest valor.',
                LANG_PROCEDURES_IFRETURN_WARNING: 'Atenció: Aquest bloc només pot ser usat dins d\'una funció que tingui valor de retorn.',
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
                LANG_VARIABLES_DEFINE: 'Definir variable ',
                LANG_VARIABLES_DEFINE_AS: 'com',
                LANG_VARIABLES_DEFINE_TOOLTIP: 'Definir el valor d\'una variable.',
                LANG_VARIABLES_SET: 'Var ',
                LANG_VARIABLES_SET_AS: '=',
                LANG_VARIABLES_SET_TOOLTIP: 'Canvia el valor d\'una variable.',
                LANG_VARIABLES_GET: 'Var ',
                LANG_VARIABLES_GET_TOOLTIP: 'Retorna el valor d\'una variable',
                LANG_VARIABLES_PIN_ANALOG: 'Pin analògic',
                LANG_VARIABLES_PIN_DIGITAL: 'Pin digital',
                LANG_VARIABLES_PIN_DIGITAL0: 'WARNING: digital pin 0 (RX pin) is used when uploading a sketch. Using it to connect electronic components may cause problems when uploading a new sketch.',
                LANG_VARIABLES_PIN_TOOLTIP: 'Selecciona el PIN desitjat.',
                //zum blocks :
                LANG_CATEGORY_ZUM: 'zum bloqs',
                LANG_ZUM_BUTTON: 'Botó',
                LANG_ZUM_BUTTON_PIN: 'PIN#',
                LANG_ZUM_BUTTON_TOOLTIP: 'Botó zum',
                LANG_ZUM_FOLLOWER: 'Sensor infraroig',
                LANG_ZUM_FOLLOWER_PIN_LEFT: 'PIN IZQUIERDA#',
                LANG_ZUM_FOLLOWER_PIN_RIGHT: 'PIN DERECHA#',
                LANG_ZUM_FOLLOWER_LEFT: 'Esquerra',
                LANG_ZUM_FOLLOWER_RIGHT: 'Dreta',
                LANG_ZUM_FOLLOWER_TOOLTIP: 'Retorna el valor digital del sensor infraroig zum',
                LANG_ZUM_INFRARED: 'Sensor infraroig',
                LANG_ZUM_INFRARED_PIN: 'PIN#',
                LANG_ZUM_INFRARED_TOOLTIP: 'Retorna el valor digital del sensor infraroig zum',
                LANG_ZUM_LED: 'LED',
                LANG_ZUM_LED_PIN: 'PIN#',
                LANG_ZUM_LED_ON: 'ENCENDRE',
                LANG_ZUM_LED_OFF: 'APAGAR',
                LANG_ZUM_LED_TOOLTIP: 'LED zum',
                LANG_ZUM_PHOTORESISTOR: 'Sensor de LLum',
                LANG_ZUM_PHOTORESISTOR_PIN: 'PIN#',
                LANG_ZUM_PHOTORESISTOR_TOOLTIP: 'Retorna el valor analògic del sensor de llum fotorresistència).',
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
                LANG_ZUM_POTENTIOMETER: 'Potenciòmetre',
                LANG_ZUM_POTENTIOMETER_PIN: 'PIN#',
                LANG_ZUM_POTENTIOMETER_TOOLTIP: 'Potenciòmetre zum.',
                //servo blocks :
                LANG_CATEGORY_SERVO: 'Servo',
                LANG_SERVO_CONT: 'Servo',
                LANG_SERVO_CONT_PIN: 'PIN#',
                LANG_SERVO_CONT_ROT: 'ROT',
                LANG_SERVO_CONT_TURN_CLOCKWISE: 'GIRAR EN SENTIT HORARIO',
                LANG_SERVO_CONT_TURN_COUNTERCLOCKWISE: 'GIRAR EN SENTIT ANTIHORARI',
                LANG_SERVO_CONT_STOPPED: 'ATURAR',
                LANG_SERVO_CONT_DELAY: 'Pausa',
                LANG_SERVO_CONT_TOOLTIP: 'Servo de rotació contínua.',
                LANG_SERVO_MOVE: 'Servo',
                LANG_SERVO_MOVE_PIN: 'PIN#',
                LANG_SERVO_MOVE_DEGREES: 'Graus (0~180)',
                LANG_SERVO_MOVE_DELAY: 'Pausa',
                LANG_SERVO_MOVE_TOOLTIP: 'Moure el servo entre 0 i 180 graus.',
                LANG_SERVO_WARNING: 'It is not possible to set the servo pin using a variable'
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
                LANG_ADVANCED_SERIAL_PRINT: 'Serial Print',
                LANG_ADVANCED_SERIAL_PRINT_TOOLTIP: 'Prints data as ASCII text.',
                LANG_ADVANCED_SERIAL_PRINTLN: 'Serial Println',
                LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP: 'Prints data as ASCII text and adds a Carriage Return (CR).',
                LANG_ADVANCED_SERIAL_READ: 'Serial Read',
                LANG_ADVANCED_SERIAL_READ_TOOLTIP: 'Reads incoming serial data from serial port as ASCII text.',
                LANG_ADVANCED_SERIAL_SPECIAL: 'Special Chars',
                LANG_ADVANCED_SERIAL_SPECIAL_TAB: 'Tab',
                LANG_ADVANCED_SERIAL_SPECIAL_CARRIAGE_RETURN: 'Carriage Return',
                LANG_ADVANCED_SERIAL_SPECIAL_LINE_FEED: 'Line Feed',
                LANG_ADVANCED_SERIAL_SPECIAL_TOOLTIP: 'Writes special Chars.',
                //bq blocks :
                LANG_CATEGORY_BQ: 'octopus bloqs',
                LANG_BQ_BAT: 'BAT - Ultrasonic Sensor',
                LANG_BQ_BAT_RED_PIN: 'ECHO PIN#',
                LANG_BQ_BAT_BLUE_PIN: 'TRIGGER PIN#',
                LANG_BQ_BAT_TOOLTIP: 'Returns the distance measured by the ultrasonic sensor.',
                LANG_BQ_BUTTON: 'Button',
                LANG_BQ_BUTTON_PIN: 'PIN#',
                LANG_BQ_BUTTON_TOOLTIP: 'Button',
                LANG_BQ_BUTTONS: 'Button Pad',
                LANG_BQ_BUTTONS_PIN: 'PIN#',
                LANG_BQ_BUTTONS_BUTTON_A: 'Button #A',
                LANG_BQ_BUTTONS_BUTTON_B: 'Button #B',
                LANG_BQ_BUTTONS_BUTTON_C: 'Button #C',
                LANG_BQ_BUTTONS_BUTTON_D: 'Button #D',
                LANG_BQ_BUTTONS_BUTTON_E: 'Button #E',
                LANG_BQ_BUTTONS_TOOLTIP: 'Button Pad',
                LANG_BQ_INFRARED: 'Infrared Sensor',
                LANG_BQ_INFRARED_PIN: 'PIN#',
                LANG_BQ_INFRARED_TOOLTIP: 'Returns the digital value read by the infrared sensor.',
                LANG_BQ_JOYSTICK: 'Joystick',
                LANG_BQ_JOYSTICK_PIN_X: 'X axis PIN#',
                LANG_BQ_JOYSTICK_PIN_Y: 'Y axis PIN#',
                LANG_BQ_JOYSTICK_PIN_BUTTON: 'Button PIN#',
                LANG_BQ_JOYSTICK_POSITION: 'Joystick Position',
                LANG_BQ_JOYSTICK_TOOLTIP: 'Joystick',
                LANG_BQ_LED: 'LED',
                LANG_BQ_LED_PIN: 'PIN#',
                LANG_BQ_LED_STATE: '',
                LANG_BQ_LED_ON: 'ON',
                LANG_BQ_LED_OFF: 'OFF',
                LANG_BQ_LED_TOOLTIP: 'LED',
                LANG_BQ_PHOTORESISTOR: 'Light Sensor',
                LANG_BQ_PHOTORESISTOR_PIN: 'PIN#',
                LANG_BQ_PHOTORESISTOR_TOOLTIP: 'Returns the analog value measured by the light sensor.',
                LANG_BQ_PIEZO_BUZZER: 'Buzzer',
                LANG_BQ_PIEZO_BUZZER_PIN: 'PIN#',
                LANG_BQ_PIEZO_BUZZER_TONE: 'TONE',
                LANG_BQ_PIEZO_BUZZER_DO: 'DO',
                LANG_BQ_PIEZO_BUZZER_RE: 'RE',
                LANG_BQ_PIEZO_BUZZER_MI: 'MI',
                LANG_BQ_PIEZO_BUZZER_FA: 'FA',
                LANG_BQ_PIEZO_BUZZER_SOL: 'SOL',
                LANG_BQ_PIEZO_BUZZER_LA: 'LA',
                LANG_BQ_PIEZO_BUZZER_SI: 'SI',
                LANG_BQ_PIEZO_BUZZER_DURATION: 'Duration [ms]',
                LANG_BQ_PIEZO_BUZZER_TOOLTIP: 'Piezo Buzzer',
                LANG_BQ_PIEZO_BUZZERAV: 'Advanced Buzzer',
                LANG_BQ_PIEZO_BUZZERAV_PIN: 'PIN#',
                LANG_BQ_PIEZO_BUZZERAV_TONE: 'TONE',
                LANG_BQ_PIEZO_BUZZERAV_DURATION: 'Duration [ms]',
                LANG_BQ_PIEZO_BUZZERAV_TOOLTIP: 'Piezo Buzzer Advanced',
                LANG_BQ_POTENTIOMETER: 'Potentiometer',
                LANG_BQ_POTENTIOMETER_PIN: 'PIN#',
                LANG_BQ_POTENTIOMETER_TOOLTIP: 'Returns the analog value measured by the potentiometer.',
                //LCD blocks:
                LANG_CATEGORY_LCD: 'LCD blocks',
                LANG_LCD_DEF: 'LCD',
                LANG_LCD_PINS: 'Connect LCD pin SCL to A5, and pin SDA to A4',
                LANG_LCD_DEF_TOOLTIP: 'Block that defines the LCD',
                LANG_LCD_SETBACKLIGHT: 'LCD: setBacklight(',
                LANG_LCD_SETBACKLIGHT_CLOSE: ')',
                LANG_LCD_SETBACKLIGHT_TOOLTIP: 'Sets the backlight of the LCD screen.',
                LANG_LCD_PRINT: 'LCD: print ',
                LANG_LCD_PRINT_POSITION: 'Set text position?',
                LANG_LCD_PRINT_TOOLTIP: 'Prints a String in the LCD at the specified position or the next available one.',
                LANG_LCD_CLEAR: 'LCD clear',
                LANG_LCD_CLEAR_TOOLTIP: 'LCD clear',
                //controls blocks :
                LANG_CATEGORY_CONTROLS: 'Control',
                LANG_CONTROLS_BASE_DELAY_WAIT: 'Wait (ms)',
                LANG_CONTROLS_BASE_DELAY_TOOLTIP: 'Waits the specified time in milliseconds (ms)',
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
                LANG_CONTROLS_FOR_INPUT_WITH: 'count with',
                LANG_CONTROLS_FOR_INPUT_VAR: 'x',
                LANG_CONTROLS_FOR_INPUT_FROM: 'from',
                LANG_CONTROLS_FOR_INPUT_TO: 'to',
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
                //text blocks:
                LANG_CATEGORY_TEXT: 'Text',
                LANG_TEXT_TEXT_HELPURL: '',
                LANG_TEXT_TEXT_TOOLTIP: 'A letter, word, or line of text.',
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
                //advanced blocks :
                LANG_CATEGORY_ADVANCED: 'Pin functions',
                LANG_ADVANCED_CONVERSION_CONVERT: 'Convert',
                LANG_ADVANCED_CONVERSION_DECIMAL: 'Decimal',
                LANG_ADVANCED_CONVERSION_HEXADECIMAL: 'Hexadecimal',
                LANG_ADVANCED_CONVERSION_OCTAL: 'Octal',
                LANG_ADVANCED_CONVERSION_BINARY: 'Binary',
                LANG_ADVANCED_CONVERSION_VALUE: 'value',
                LANG_ADVANCED_CONVERSION_TOOLTIP: 'Convert a number from one base to another.',
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
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN: 'PIN#',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE: 'state',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH: 'HIGH',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW: 'LOW',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP: 'Write a value in a specified digital pin',
                LANG_ADVANCED_HIGHLOW_HIGH: 'HIGH',
                LANG_ADVANCED_HIGHLOW_LOW: 'LOW',
                LANG_ADVANCED_HIGHLOW_TOOLTIP: 'HIGH OR LOW',
                LANG_ADVANCED_MATH_RANDOM: 'Random between',
                LANG_ADVANCED_MATH_RANDOM_AND: ' and ',
                LANG_ADVANCED_MATH_RANDOM_TOOLTIP: 'Returns a random number between the two limits.',
                //procedures blocks
                LANG_CATEGORY_PROCEDURES: 'Functions',
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
                //zum blocks :
                LANG_CATEGORY_ZUM: 'zum bloqs',
                LANG_ZUM_BUTTON: 'Button',
                LANG_ZUM_BUTTON_PIN: 'PIN#',
                LANG_ZUM_BUTTON_TOOLTIP: 'zum Button',
                LANG_ZUM_FOLLOWER: 'Infrared Sensor',
                LANG_ZUM_FOLLOWER_PIN_LEFT: 'PIN LEFT#',
                LANG_ZUM_FOLLOWER_PIN_RIGHT: 'PIN RIGHT#',
                LANG_ZUM_FOLLOWER_LEFT: 'Left',
                LANG_ZUM_FOLLOWER_RIGHT: 'Right',
                LANG_ZUM_FOLLOWER_TOOLTIP: 'Returns the digital value read by the infrared sensor',
                LANG_ZUM_INFRARED: 'Infrared Sensor',
                LANG_ZUM_INFRARED_PIN: 'PIN#',
                LANG_ZUM_INFRARED_TOOLTIP: 'Returns the digital value read by the infrared sensor',
                LANG_ZUM_LED: 'LED',
                LANG_ZUM_LED_PIN: 'PIN#',
                LANG_ZUM_LED_ON: 'ON',
                LANG_ZUM_LED_OFF: 'OFF',
                LANG_ZUM_LED_TOOLTIP: 'zum LED',
                LANG_ZUM_PHOTORESISTOR: 'Light Sensor',
                LANG_ZUM_PHOTORESISTOR_PIN: 'PIN#',
                LANG_ZUM_PHOTORESISTOR_TOOLTIP: 'Returns the analog value measured by the light sensor.',
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
                LANG_ZUM_POTENTIOMETER: 'Potentiometer',
                LANG_ZUM_POTENTIOMETER_PIN: 'PIN#',
                LANG_ZUM_POTENTIOMETER_TOOLTIP: 'Returns the analog value measured by the potentiometer.',
                //servo blocks :
                LANG_CATEGORY_SERVO: 'Servo',
                LANG_SERVO_CONT: 'Servo',
                LANG_SERVO_CONT_PIN: 'PIN#',
                LANG_SERVO_CONT_ROT: 'ROT',
                LANG_SERVO_CONT_TURN_CLOCKWISE: 'TURN CLOCKWISE',
                LANG_SERVO_CONT_TURN_COUNTERCLOCKWISE: 'TURN COUNTERCLOCKWISE',
                LANG_SERVO_CONT_STOPPED: 'STOPPED',
                LANG_SERVO_CONT_DELAY: 'Delay [ms]',
                LANG_SERVO_CONT_TOOLTIP: 'Continuous rotation servo.',
                LANG_SERVO_MOVE: 'Servo',
                LANG_SERVO_MOVE_PIN: 'PIN#',
                LANG_SERVO_MOVE_DEGREES: 'Degrees (0~180)',
                LANG_SERVO_MOVE_DELAY: 'Delay [ms]',
                LANG_SERVO_MOVE_TOOLTIP: 'Move between 0~180 degree',
                LANG_SERVO_WARNING: 'It is not possible to set the servo pin using a variable'
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
                LANG_ADVANCED_SERIAL_PRINT: 'Imprimir por puerto serie',
                LANG_ADVANCED_SERIAL_PRINT_TOOLTIP: 'Imprime los datos como texto ASCII.',
                LANG_ADVANCED_SERIAL_PRINTLN: 'Imprimir por puerto serie con salto de línea',
                LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP: 'Imprime los datos como texto ASCII y con retorno de carro (RC).',
                LANG_ADVANCED_SERIAL_READ: 'Leer desde el puerto serie',
                LANG_ADVANCED_SERIAL_READ_TOOLTIP: 'Lee los datos que se reciben por el puerto serie como texto ASCII.',
                LANG_ADVANCED_SERIAL_SPECIAL: 'Caracteres especiales',
                LANG_ADVANCED_SERIAL_SPECIAL_TAB: 'Tabulador',
                LANG_ADVANCED_SERIAL_SPECIAL_CARRIAGE_RETURN: 'Retorno de carro',
                LANG_ADVANCED_SERIAL_SPECIAL_LINE_FEED: 'Salto de línea',
                LANG_ADVANCED_SERIAL_SPECIAL_TOOLTIP: 'Escribe caracteres especiales.',
                //bq blocks :
                LANG_CATEGORY_BQ: 'Bloques octopus',
                LANG_BQ_BAT: 'BAT - Sensor de Ultrasonidos',
                LANG_BQ_BAT_RED_PIN: 'ECHO PIN#',
                LANG_BQ_BAT_BLUE_PIN: 'TRIGGER PIN#',
                LANG_BQ_BAT_TOOLTIP: 'Devuelve la distancia medida por el sensor.',
                LANG_BQ_BUTTON: 'Botón',
                LANG_BQ_BUTTON_PIN: 'PIN#',
                LANG_BQ_BUTTON_TOOLTIP: 'Botón',
                LANG_BQ_BUTTONS: 'Botonera',
                LANG_BQ_BUTTONS_PIN: 'PIN#',
                LANG_BQ_BUTTONS_BUTTON_A: 'Botón #A',
                LANG_BQ_BUTTONS_BUTTON_B: 'Botón #B',
                LANG_BQ_BUTTONS_BUTTON_C: 'Botón #C',
                LANG_BQ_BUTTONS_BUTTON_D: 'Botón #D',
                LANG_BQ_BUTTONS_BUTTON_E: 'Botón #E',
                LANG_BQ_BUTTONS_TOOLTIP: 'Botonera',
                LANG_BQ_INFRARED: 'Sensor infrarrojo',
                LANG_BQ_INFRARED_PIN: 'PIN#',
                LANG_BQ_INFRARED_TOOLTIP: 'Devuelve el valor digital medido por el sensor infrarrojo',
                LANG_BQ_JOYSTICK: 'Joystick',
                LANG_BQ_JOYSTICK_PIN_X: 'Eje X PIN#',
                LANG_BQ_JOYSTICK_PIN_Y: 'Eje Y PIN#',
                LANG_BQ_JOYSTICK_POSITION: 'Posición Joystick',
                LANG_BQ_JOYSTICK_PIN_BUTTON: 'Pulsador PIN#',
                LANG_BQ_JOYSTICK_TOOLTIP: 'Joystick',
                LANG_BQ_LED: 'LED',
                LANG_BQ_LED_PIN: 'PIN#',
                LANG_BQ_LED_STATE: '',
                LANG_BQ_LED_ON: 'ENCENDER',
                LANG_BQ_LED_OFF: 'APAGAR',
                LANG_BQ_LED_TOOLTIP: 'LED',
                LANG_BQ_PHOTORESISTOR: 'Sensor de Luz',
                LANG_BQ_PHOTORESISTOR_PIN: 'PIN#',
                LANG_BQ_PHOTORESISTOR_TOOLTIP: 'Devuelve el valor analógico medido por la fotorresistencia.',
                LANG_BQ_PIEZO_BUZZER: 'Zumbador',
                LANG_BQ_PIEZO_BUZZER_PIN: 'PIN#',
                LANG_BQ_PIEZO_BUZZER_TONE: 'TONO',
                LANG_BQ_PIEZO_BUZZER_DO: 'DO',
                LANG_BQ_PIEZO_BUZZER_RE: 'RE',
                LANG_BQ_PIEZO_BUZZER_MI: 'MI',
                LANG_BQ_PIEZO_BUZZER_FA: 'FA',
                LANG_BQ_PIEZO_BUZZER_SOL: 'SOL',
                LANG_BQ_PIEZO_BUZZER_LA: 'LA',
                LANG_BQ_PIEZO_BUZZER_SI: 'SI',
                LANG_BQ_PIEZO_BUZZER_DURATION: 'Duración [ms]',
                LANG_BQ_PIEZO_BUZZER_TOOLTIP: 'Zumbador piezoeléctrico',
                LANG_BQ_PIEZO_BUZZERAV: 'Zumbador avanzado',
                LANG_BQ_PIEZO_BUZZERAV_PIN: 'PIN#',
                LANG_BQ_PIEZO_BUZZERAV_TONE: 'TONO',
                LANG_BQ_PIEZO_BUZZERAV_DURATION: 'Duración [ms]',
                LANG_BQ_PIEZO_BUZZERAV_TOOLTIP: 'Zumbador avanzado',
                LANG_BQ_POTENTIOMETER: 'Potenciómetro',
                LANG_BQ_POTENTIOMETER_PIN: 'PIN#',
                LANG_BQ_POTENTIOMETER_TOOLTIP: 'Devuelve el valor analógico medido por el potenciómetro',
                //LCD blocks:
                LANG_CATEGORY_LCD: 'Bloques LCD',
                LANG_LCD_DEF: 'LCD',
                LANG_LCD_PINS: 'Conecta el pin SCL al pin A5 y el pin SDA al pin A4',
                LANG_LCD_DEF_TOOLTIP: 'Define el LCD',
                LANG_LCD_SETBACKLIGHT: 'LCD: ajustar la retroiluminación',
                LANG_LCD_SETBACKLIGHT_CLOSE: '',
                LANG_LCD_SETBACKLIGHT_TOOLTIP: 'Ajusta la retroiluminación de la pantalla LCD',
                LANG_LCD_PRINT: 'LCD: Imprimir ',
                LANG_LCD_PRINT_POSITION: '¿Fijar posición del texto?',
                LANG_LCD_PRINT_TOOLTIP: 'Imprime un string en la pantalla LCD en la posición específicada o en la siguiente disponible.',
                LANG_LCD_CLEAR: 'LCD borrar',
                LANG_LCD_CLEAR_TOOLTIP: 'LCD: Borrar',
                //controls blocks :
                LANG_CATEGORY_CONTROLS: 'Control',
                LANG_CONTROLS_BASE_DELAY_WAIT: 'Esperar [ms]',
                LANG_CONTROLS_BASE_DELAY_TOOLTIP: 'Espera el tiempo especificado en milisegundos (ms)',
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
                LANG_CONTROLS_FOR_INPUT_WITH: 'Contar con',
                LANG_CONTROLS_FOR_INPUT_VAR: 'x',
                LANG_CONTROLS_FOR_INPUT_FROM: 'desde',
                LANG_CONTROLS_FOR_INPUT_TO: 'hasta',
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
                //text blocks:
                LANG_CATEGORY_TEXT: 'Texto',
                LANG_TEXT_TEXT_HELPURL: '',
                LANG_TEXT_TEXT_TOOLTIP: 'Una letra, una palabra o una línea de texto.',
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
                //advanced blocks :
                LANG_CATEGORY_ADVANCED: 'Funciones PIN',
                LANG_ADVANCED_CONVERSION_CONVERT: 'Convertir',
                LANG_ADVANCED_CONVERSION_DECIMAL: 'Decimal',
                LANG_ADVANCED_CONVERSION_HEXADECIMAL: 'Hexadecimal',
                LANG_ADVANCED_CONVERSION_OCTAL: 'Octal',
                LANG_ADVANCED_CONVERSION_BINARY: 'Binario',
                LANG_ADVANCED_CONVERSION_VALUE: 'valor',
                LANG_ADVANCED_CONVERSION_TOOLTIP: 'Convertir la base de un número.',
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
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN: 'PIN#',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE: 'estado',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH: 'ALTO',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW: 'BAJO',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP: 'Escribe un valor en el pin digital específico.',
                LANG_ADVANCED_HIGHLOW_HIGH: 'ALTO',
                LANG_ADVANCED_HIGHLOW_LOW: 'BAJO',
                LANG_ADVANCED_HIGHLOW_TOOLTIP: 'Escribe "ALTO" o "BAJO" en función de lo seleccionado.',
                LANG_ADVANCED_MATH_RANDOM: 'Aleatorio entre',
                LANG_ADVANCED_MATH_RANDOM_AND: ' y ',
                LANG_ADVANCED_MATH_RANDOM_TOOLTIP: 'Crea un número aleatorio entre los dos límites introducidos.',
                //procedures blocks
                LANG_CATEGORY_PROCEDURES: 'Funciones',
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
                //zum blocks :
                LANG_CATEGORY_ZUM: 'zum bloqs',
                LANG_ZUM_BUTTON: 'Botón',
                LANG_ZUM_BUTTON_PIN: 'PIN#',
                LANG_ZUM_BUTTON_TOOLTIP: 'Botón zum',
                LANG_ZUM_FOLLOWER: 'Sensor infrarrojo',
                LANG_ZUM_FOLLOWER_PIN_LEFT: 'PIN IZQUIERDA#',
                LANG_ZUM_FOLLOWER_PIN_RIGHT: 'PIN DERECHA#',
                LANG_ZUM_FOLLOWER_LEFT: 'Izquierda',
                LANG_ZUM_FOLLOWER_RIGHT: 'Derecha',
                LANG_ZUM_FOLLOWER_TOOLTIP: 'Devuelve el valor digital del sensor infrarrojo zum',
                LANG_ZUM_INFRARED: 'Sensor infrarrojo',
                LANG_ZUM_INFRARED_PIN: 'PIN#',
                LANG_ZUM_INFRARED_TOOLTIP: 'Devuelve el valor digital del sensor infrarrojo zum',
                LANG_ZUM_LED: 'LED',
                LANG_ZUM_LED_PIN: 'PIN#',
                LANG_ZUM_LED_ON: 'ENCENDER',
                LANG_ZUM_LED_OFF: 'APAGAR',
                LANG_ZUM_LED_TOOLTIP: 'LED zum',
                LANG_ZUM_PHOTORESISTOR: 'Sensor de Luz',
                LANG_ZUM_PHOTORESISTOR_PIN: 'PIN#',
                LANG_ZUM_PHOTORESISTOR_TOOLTIP: 'Devuelve el valor analógico del sensor de luz (fotorresistencia).',
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
                LANG_ZUM_POTENTIOMETER: 'Potenciómetro',
                LANG_ZUM_POTENTIOMETER_PIN: 'PIN#',
                LANG_ZUM_POTENTIOMETER_TOOLTIP: 'Potenciómetro zum.',
                //servo blocks :
                LANG_CATEGORY_SERVO: 'Servo',
                LANG_SERVO_CONT: 'Servo',
                LANG_SERVO_CONT_PIN: 'PIN#',
                LANG_SERVO_CONT_ROT: 'ROT',
                LANG_SERVO_CONT_TURN_CLOCKWISE: 'GIRAR EN SENTIDO HORARIO',
                LANG_SERVO_CONT_TURN_COUNTERCLOCKWISE: 'GIRAR EN SENTIDO ANTIHORARIO',
                LANG_SERVO_CONT_STOPPED: 'DETENER',
                LANG_SERVO_CONT_DELAY: 'Pausa [ms]',
                LANG_SERVO_CONT_TOOLTIP: 'Servo de rotación continua.',
                LANG_SERVO_MOVE: 'Servo',
                LANG_SERVO_MOVE_PIN: 'PIN#',
                LANG_SERVO_MOVE_DEGREES: 'Grados (0~180)',
                LANG_SERVO_MOVE_DELAY: 'Pausa [ms]',
                LANG_SERVO_MOVE_TOOLTIP: 'Mover el servo entre 0 y 180 grados.',
                LANG_SERVO_WARNING: 'No puedes asignar una variable al pin del servo'
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
        // Source: lang/it_IT.js
        (function() {
            var language = {
                //random :
                LANG_VARIABLES_SET_ITEM: 'oggetto',
                LANG_RESERVED_WORDS: 'Parola riservata: questo nome non è permesso.',
                //logic blocks:
                LANG_CATEGORY_LOGIC: 'Logica',
                LANG_LOGIC_OPERATION_AND: 'and',
                LANG_LOGIC_OPERATION_OR: 'or',
                LANG_LOGIC_COMPARE_TOOLTIP_EQ: 'Controlla se entrambi i valori siano uguali .',
                LANG_LOGIC_COMPARE_TOOLTIP_NEQ: 'Controlla se i valori siano differenti.',
                LANG_LOGIC_COMPARE_TOOLTIP_LT: 'Controlla se il primo valore sia più piccolo del scecondo.',
                LANG_LOGIC_COMPARE_TOOLTIP_LTE: 'Controlla se il primo valore sia più piccolo o uguale al secondo.',
                LANG_LOGIC_COMPARE_TOOLTIP_GT: 'Controlla se il primo valore sia più grande del secondo.',
                LANG_LOGIC_COMPARE_TOOLTIP_GTE: 'Controlla se il prim valore sia più grande o uguale al secondo.',
                LANG_LOGIC_OPERATION_TOOLTIP_AND: 'Controlla se entrambi i valori siano Veri.',
                LANG_LOGIC_OPERATION_TOOLTIP_OR: 'Controlla se almeno uno dei due valori sia Vero.',
                LANG_LOGIC_NEGATE_INPUT_NOT: 'not',
                LANG_LOGIC_NEGATE_TOOLTIP: 'Restituisce il valore opposto.',
                LANG_LOGIC_NEGATE_HELPURL: '',
                LANG_LOGIC_BOOLEAN_TRUE: 'Vero',
                LANG_LOGIC_BOOLEAN_FALSE: 'Falso',
                LANG_LOGIC_BOOLEAN_TOOLTIP: 'Restituisce il valore vero o falso della funzione selezionata.',
                //communication blocks:
                LANG_CATEGORY_COMMUNICATION: 'Comunicazione',
                LANG_BQ_BLUETOOTH_RECEIVE: 'Bluetooth ricevere dati',
                LANG_BQ_BLUETOOTH_RECEIVE_BLUETOOTH: 'Bluetooth',
                LANG_BQ_BLUETOOTH_RECEIVE_TOOLTIP: 'Restituisce i dati ricevuti dal modulo Bluetooth',
                LANG_BQ_BLUETOOTH_SEND: 'Bluetooth inviare dati',
                LANG_BQ_BLUETOOTH_SEND_SEND: 'Invia',
                LANG_BQ_BLUETOOTH_SEND_TOOLTIP: 'Invia dati usando il modulo bluetooth',
                LANG_BQ_BLUETOOTH_DEF: 'Bluetooth definition',
                LANG_BQ_BLUETOOTH_DEF_BAUD_RATE: 'Velocità di trasmissione',
                LANG_BQ_BLUETOOTH_DEF_PIN1: 'RX',
                LANG_BQ_BLUETOOTH_DEF_PIN2: 'TX',
                LANG_BQ_BLUETOOTH_DEF_NAME: 'Nome',
                LANG_BQ_BLUETOOTH_DEF_PINCODE: 'PinCode',
                LANG_BQ_BLUETOOTH_DEF_RECEIVE: 'Ricevere',
                LANG_BQ_BLUETOOTH_DEF_SEND: 'Inviare',
                LANG_BQ_BLUETOOTH_DEF_TOOLTIP: 'Definizione del modulo Bluetooth',
                LANG_ADVANCED_BT_SERIAL_AVAILABLE: 'Bluetooth Seriale disponibile',
                LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP: 'Controlla se il bluetooth è disponibile o meno.',
                LANG_ADVANCED_SERIAL_AVAILABLE: 'Serial Available',
                LANG_ADVANCED_SERIAL_AVAILABLE_TOOLTIP: 'Controlla se la porta seriale è disponibile o meno.',
                LANG_ADVANCED_SERIAL_PRINT: 'Visualizza porta Seriale',
                LANG_ADVANCED_SERIAL_PRINT_TOOLTIP: 'Visualizza dati come testo ASCII.',
                LANG_ADVANCED_SERIAL_PRINTLN: 'Visualizza in linea porta Seriale',
                LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP: 'Visualizza i dati come testo ASCII aggiungendo l\'accapo (CR).',
                LANG_ADVANCED_SERIAL_READ: 'Lettura porta Seriale',
                LANG_ADVANCED_SERIAL_READ_TOOLTIP: 'Legge come testo ASCII i dati dalla porta seriale.',
                LANG_ADVANCED_SERIAL_SPECIAL: 'Caratteri Speciali',
                LANG_ADVANCED_SERIAL_SPECIAL_TAB: 'Tab',
                LANG_ADVANCED_SERIAL_SPECIAL_CARRIAGE_RETURN: 'Carriage Return',
                LANG_ADVANCED_SERIAL_SPECIAL_LINE_FEED: 'Line Feed',
                LANG_ADVANCED_SERIAL_SPECIAL_TOOLTIP: 'Writes special Chars.',
                //bq blocks :
                LANG_CATEGORY_BQ: 'octopus bloqs',
                LANG_BQ_BAT: 'BAT - Sensore ad Ultrasuoni',
                LANG_BQ_BAT_RED_PIN: 'ECHO PIN#',
                LANG_BQ_BAT_BLUE_PIN: 'TRIGGER PIN#',
                LANG_BQ_BAT_TOOLTIP: 'Restituisce la distanza misurata dal sensore a ultrasuoni.',
                LANG_BQ_BUTTON: 'Pulsante',
                LANG_BQ_BUTTON_PIN: 'PIN#',
                LANG_BQ_BUTTON_TOOLTIP: 'Pulsante',
                LANG_BQ_BUTTONS: 'Pad dei pulsanti',
                LANG_BQ_BUTTONS_PIN: 'PIN#',
                LANG_BQ_BUTTONS_BUTTON_A: 'Pulsante #A',
                LANG_BQ_BUTTONS_BUTTON_B: 'Pulsante #B',
                LANG_BQ_BUTTONS_BUTTON_C: 'Pulsante #C',
                LANG_BQ_BUTTONS_BUTTON_D: 'Pulsante #D',
                LANG_BQ_BUTTONS_BUTTON_E: 'Pulsante #E',
                LANG_BQ_BUTTONS_TOOLTIP: 'Pulsante Pad',
                LANG_BQ_INFRARED: 'Sensore infrarosso',
                LANG_BQ_INFRARED_PIN: 'PIN#',
                LANG_BQ_INFRARED_TOOLTIP: 'Restituisci valore digitale letto dal sensore infrarosso.',
                LANG_BQ_JOYSTICK: 'Joystick',
                LANG_BQ_JOYSTICK_PIN_X: 'Asse X PIN#',
                LANG_BQ_JOYSTICK_PIN_Y: 'Asse Y PIN#',
                LANG_BQ_JOYSTICK_PIN_BUTTON: 'Pulsante PIN#',
                LANG_BQ_JOYSTICK_POSITION: 'Joystick Posizione',
                LANG_BQ_JOYSTICK_TOOLTIP: 'Joystick',
                LANG_BQ_LED: 'LED',
                LANG_BQ_LED_PIN: 'PIN#',
                LANG_BQ_LED_STATE: '',
                LANG_BQ_LED_ON: 'Accesso',
                LANG_BQ_LED_OFF: 'Spento',
                LANG_BQ_LED_TOOLTIP: 'LED',
                LANG_BQ_PHOTORESISTOR: 'Sensore di Luce',
                LANG_BQ_PHOTORESISTOR_PIN: 'PIN#',
                LANG_BQ_PHOTORESISTOR_TOOLTIP: 'Restituisce il valore analogico misurato dal sensore di luce.',
                LANG_BQ_PIEZO_BUZZER: 'Cicalino',
                LANG_BQ_PIEZO_BUZZER_PIN: 'PIN#',
                LANG_BQ_PIEZO_BUZZER_TONE: 'TONO',
                LANG_BQ_PIEZO_BUZZER_DO: 'DO',
                LANG_BQ_PIEZO_BUZZER_RE: 'RE',
                LANG_BQ_PIEZO_BUZZER_MI: 'MI',
                LANG_BQ_PIEZO_BUZZER_FA: 'FA',
                LANG_BQ_PIEZO_BUZZER_SOL: 'SOL',
                LANG_BQ_PIEZO_BUZZER_LA: 'LA',
                LANG_BQ_PIEZO_BUZZER_SI: 'SI',
                LANG_BQ_PIEZO_BUZZER_DURATION: 'Durata',
                LANG_BQ_PIEZO_BUZZER_TOOLTIP: 'Cicalino Piezo',
                LANG_BQ_PIEZO_BUZZERAV: 'Cicalino Avanzato',
                LANG_BQ_PIEZO_BUZZERAV_PIN: 'PIN#',
                LANG_BQ_PIEZO_BUZZERAV_TONE: 'TONE',
                LANG_BQ_PIEZO_BUZZERAV_DURATION: 'Durata',
                LANG_BQ_PIEZO_BUZZERAV_TOOLTIP: 'Cicalino Piezo Avanzato',
                LANG_BQ_POTENTIOMETER: 'Potenziometro',
                LANG_BQ_POTENTIOMETER_PIN: 'PIN#',
                LANG_BQ_POTENTIOMETER_TOOLTIP: 'Restituisce il valore analogico del potenziometro.',
                //LCD blocks:
                LANG_CATEGORY_LCD: 'Blocco LCD',
                LANG_LCD_DEF: 'LCD',
                LANG_LCD_PINS: 'Connetti LCD con pin SCL a A5, ed il pin SDA a A4',
                LANG_LCD_DEF_TOOLTIP: 'Questo blocco definisce LCD',
                LANG_LCD_SETBACKLIGHT: 'LCD: imposta Retroilluminazione(',
                LANG_LCD_SETBACKLIGHT_CLOSE: ')',
                LANG_LCD_SETBACKLIGHT_TOOLTIP: 'Imposta la retroilluminazione del schermo LCD.',
                LANG_LCD_PRINT: 'LCD: Visualizza ',
                LANG_LCD_PRINT_POSITION: 'Imposta POsizione del testo?',
                LANG_LCD_PRINT_TOOLTIP: 'visualizza una stringa sul LCD a una determinata posizione o alla prossima disponibile.',
                LANG_LCD_CLEAR: 'Pulisci LCD',
                LANG_LCD_CLEAR_TOOLTIP: 'Pulisci LCD',
                //controls blocks :
                LANG_CATEGORY_CONTROLS: 'Controllo',
                LANG_CONTROLS_BASE_DELAY_WAIT: 'Aspetta (ms)',
                LANG_CONTROLS_BASE_DELAY_TOOLTIP: 'Aspetta un determinato tempo in millisecondi (ms)',
                LANG_CONTROLS_IF_TOOLTIP_1: 'se la condizione e\' vera ,esegue il blocco.',
                LANG_CONTROLS_IF_TOOLTIP_2: 'se la condizione e\' vera, esegue il primo blocco. altrimenti esegue il secondo blocco.',
                LANG_CONTROLS_IF_TOOLTIP_3: 'se la prima condizione e\' vera esegue il primo blocco di codice,altrimenti se il secondo valore è Vero, viene eseguito il secondo blocco di codice.',
                LANG_CONTROLS_IF_TOOLTIP_4: 'Se la prima condizione e\' vera, si esegue il primo blocco. Altrimenti, se il secondo valore è Vero, viene eseguito il secondo blocco.',
                LANG_CONTROLS_IF_MSG_IF: 'if',
                LANG_CONTROLS_IF_MSG_ELSEIF: 'else if',
                LANG_CONTROLS_IF_MSG_ELSE: 'else',
                LANG_CONTROLS_IF_MSG_THEN: 'do',
                LANG_CONTROLS_IF_IF_Field_IF: 'if',
                LANG_CONTROLS_IF_IF_TOOLTIP: 'Aggiunge, rimuove, o riordina la sezione per riconfigurare il blocco IF.',
                LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF: 'else if',
                LANG_CONTROLS_IF_ELSEIF_TOOLTIP: 'aggiunge una condizione al blocco IF.',
                LANG_CONTROLS_IF_ELSE_Field_ELSE: 'else',
                LANG_CONTROLS_IF_ELSE_TOOLTIP: 'aggiunge una fine, prende tutte le altre condizioni del blocco IF.',
                LANG_CONTROLS_FOR_FROM_WARNING: 'It is not possible to set a variable as the initial value of the for block.',
                LANG_CONTROLS_FOR_TO_WARNING: 'It is not possible to set a variable as the final value of the for block.',
                LANG_CONTROLS_FOR_INPUT_WITH: 'count with',
                LANG_CONTROLS_FOR_INPUT_VAR: 'x',
                LANG_CONTROLS_FOR_INPUT_FROM: 'from',
                LANG_CONTROLS_FOR_INPUT_TO: 'to',
                LANG_CONTROLS_FOR_INPUT_DO: 'do',
                LANG_CONTROLS_FOR_TOOLTIP: 'Conta dal numero iniziale al numero finale.Ogni volta il valore si incrementa di uno, la variabile prende il valore di questo stato.',
                LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE: 'while',
                LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL: 'until',
                LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE: 'Finchè la condizione è vera, esegue il blocco.',
                LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL: 'Finche la codinzione è falsa, esegue il blocco.',
                LANG_CONTROLS_REPEAT_TITLE_REPEAT: 'Ripetizione',
                LANG_CONTROLS_REPEAT_TITLE_TIMES: 'Volte',
                LANG_CONTROLS_REPEAT_INPUT_DO: 'do',
                LANG_CONTROLS_REPEAT_TOOLTIP: 'Ripeti il blocco per un certo numero di volte',
                LANG_CONTROLS_FLOW_STATEMENTS_HELPURL: '',
                LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP: 'of loop',
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: 'break out',
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: 'continua con la prossima interazione',
                LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK: 'Condizione d\'uscita dal loop.',
                LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE: 'Saltare il resto del loop, e continuare con la prossima interazione.',
                LANG_CONTROLS_FLOW_STATEMENTS_WARNING: 'Attenzione: Questo blocco può essere usato solo insieme ad un LOOP.',
                LANG_CONTROLS_SWITCH: 'switch ',
                LANG_CONTROLS_SWITCH_TOOLTIP_1: 'Esegue il codice in un determinato caso.',
                LANG_CONTROLS_SWITCH_TOOLTIP_2: 'Usa il comando switch per selezionare uno o più blocchi di codice da eseguire.',
                LANG_CONTROLS_SWITCH_TOOLTIP_3: 'Usa il comando switch per selezionare uno o più blocchi di codice da eseguire.',
                LANG_CONTROLS_SWITCH_TOOLTIP_4: 'Usa il comando switch per selezionare uno o più blocchi di codice da eseguire.',
                LANG_CONTROLS_SWITCH_SWITCH_TOOLTIP: 'La espressione che deve valutare lo switch un sola volta',
                LANG_CONTROLS_SWITCH_CASE_TOOLTIP: 'case',
                LANG_CONTROLS_SWITCH_DEFAULT_TOOLTIP: 'la parola chiave di defaulo in caso da restiure in caso non sia stato riscontrata ugualianza',
                LANG_CONTROLS_SWITCH_IS: 'case: ',
                LANG_CONTROLS_SWITCH_CASE: 'case',
                LANG_CONTROLS_SWITCH_COLON: ': ',
                LANG_CONTROLS_SWITCH_DEFAULT: 'default',
                LANG_CONTROLS_SWITCH_DO: 'do',
                //math blocks :
                LANG_CATEGORY_MATH: 'Math',
                LANG_MATH_ADVANCED_MAP_MAP: 'Map ',
                LANG_MATH_ADVANCED_MAP_FROM: 'da [',
                LANG_MATH_ADVANCED_MAP_HYPHEN: '-',
                LANG_MATH_ADVANCED_MAP_BRACKET: ']',
                LANG_MATH_ADVANCED_MAP_TO: 'a [',
                LANG_MATH_ADVANCED_MAP_TOOLTIP: 'cambia l\'input in determinato range di valori in un altro.',
                LANG_MATH_NUMBER_TOOLTIP: 'Numero',
                LANG_MATH_ARRAY_ARRAY3: '[3]',
                LANG_MATH_ARRAY_BRACKET3: '{',
                LANG_MATH_ARRAY_BRACKET4: '}',
                LANG_MATH_ARRAY_COMMA: ',',
                LANG_MATH_ARRAY_TOOLTIP: 'Array',
                LANG_ARRAY_GET_BRACKET1: '[',
                LANG_ARRAY_GET_BRACKET2: ']',
                LANG_ARRAY_GET_TOOLTIP: 'Restituisce il valore di uno specifico elemento di un array.',
                LANG_MATH_MODULO_TOOLTIP: 'Restituisce il valore di una divisione in due numeri.',
                LANG_MATH_BASE_MAP: 'Map ',
                LANG_MATH_BASE_MAP_VALUE_TO: 'Valore da [0-',
                LANG_MATH_BASE_MAP_BRACKET: ']',
                LANG_MATH_BASE_MAP_TOOLTIP: 'Cambia l\'input da [0-1023] ad altro.',
                LANG_MATH_SINGLE_OP_ROOT: 'radice quadrata',
                LANG_MATH_SINGLE_OP_ABSOLUTE: 'assoluto',
                LANG_MATH_SINGLE_TOOLTIP_ROOT: 'restituisce la radice quadrata di un numero.',
                LANG_MATH_SINGLE_TOOLTIP_ABS: 'restituisce il valore assoluto di un numero.',
                LANG_MATH_SINGLE_TOOLTIP_NEG: 'Restituisce il valore negativo di un numero.',
                LANG_MATH_SINGLE_TOOLTIP_LN: 'Restituisce il logaritmo naturale di un numero.',
                LANG_MATH_SINGLE_TOOLTIP_LOG10: 'Restituisce il logaritmo a base 10 di un numero.',
                LANG_MATH_SINGLE_TOOLTIP_EXP: 'Restituisce la potenza di un numero',
                LANG_MATH_SINGLE_TOOLTIP_POW10: 'Restituisce la potenza di 10 di un numero.',
                //text blocks:
                LANG_CATEGORY_TEXT: 'Testo',
                LANG_TEXT_TEXT_HELPURL: '',
                LANG_TEXT_TEXT_TOOLTIP: 'A lettera, parola, o linea di testo.',
                LANG_TEXT_JOIN_HELPURL: '',
                LANG_TEXT_JOIN_Field_CREATEWITH: 'Crea un stest con',
                LANG_TEXT_JOIN_TOOLTIP: 'Crea un pezzo di testo unendo qualsiaso numero dei oggetti.',
                LANG_TEXT_CREATE_JOIN_Field_JOIN: 'Unisci',
                LANG_TEXT_CREATE_JOIN_TOOLTIP: 'aggiungi, rimuovi , o riordina la selezione per riconfigurare il blocco di testo.',
                LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM: 'Oggetto',
                LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP: 'Aggiungi un oggetto al testo.',
                LANG_TEXT_CREATE_JOIN_TITLE_JOIN: 'Join',
                LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM: 'elemento',
                LANG_TEXT_APPEND_HELPURL: '',
                LANG_TEXT_APPEND_TO: 'a',
                LANG_TEXT_APPEND_APPENDTEXT: 'accoda testo',
                LANG_TEXT_APPEND_VARIABLE: 'oggetto',
                LANG_TEXT_APPEND_TOOLTIP: 'Accoda del testo alla variabile %1.',
                LANG_TEXT_LENGTH_HELPURL: '',
                LANG_TEXT_LENGTH_INPUT_LENGTH: 'lunghezza',
                LANG_TEXT_LENGTH_TOOLTIP: 'Restituisce il numero di lettere(inclusi gli spazi)presenti nel testo.',
                LANG_TEXT_EQUALSIGNORECASE_IS: '',
                LANG_TEXT_EQUALSIGNORECASE_EQUAL: ' =',
                LANG_TEXT_EQUALSIGNORECASE_QUESTION: '?',
                LANG_TEXT_EQUALSIGNORECASE_TOOLTIP: 'Controlla se in entrambi gli input le stringhe siano uguali, a seconda della regola.',
                LANG_TEXT_SUBSTRING: 'Crop ',
                LANG_TEXT_SUBSTRING_FROM: 'da',
                LANG_TEXT_SUBSTRING_TO: 'a',
                LANG_TEXT_SUBSTRING_TOOLTIP: 'ottieni una sotto stringa del valore d\'ingresso con i caratterei tra i due numeri inseriti.',
                //advanced blocks :
                LANG_CATEGORY_ADVANCED: 'Pin functions',
                LANG_ADVANCED_CONVERSION_CONVERT: 'Conversione',
                LANG_ADVANCED_CONVERSION_DECIMAL: 'Decimale',
                LANG_ADVANCED_CONVERSION_HEXADECIMAL: 'esadecimale',
                LANG_ADVANCED_CONVERSION_OCTAL: 'Octal',
                LANG_ADVANCED_CONVERSION_BINARY: 'Binario',
                LANG_ADVANCED_CONVERSION_VALUE: 'valore',
                LANG_ADVANCED_CONVERSION_TOOLTIP: 'Converti un numero dalla base di un altro.',
                LANG_ADVANCED_INOUT_ANALOG_READ: 'AnalogRead PIN#',
                LANG_ADVANCED_INOUT_ANALOG_READ_TOOLTIP: 'Legge il valore di uno specifico pin analogico',
                LANG_ADVANCED_INOUT_ANALOG_WRITE: 'AnalogWrite PIN#',
                LANG_ADVANCED_INOUT_ANALOG_WRITE_VALUE: 'valore',
                LANG_ADVANCED_INOUT_ANALOG_WRITE_TOOLTIP: 'scrivi un valore da 0 a 255 da inserire in uscita a un pin analogico',
                LANG_ADVANCED_BUILTIN_LED: 'LED integrato',
                LANG_ADVANCED_BUILTIN_LED_STATE: 'stato',
                LANG_ADVANCED_BUILTIN_LED_ON: 'Acceso',
                LANG_ADVANCED_BUILTIN_LED_OFF: 'Spento',
                LANG_ADVANCED_BUILTIN_LED_TOOLTIP: 'il Led integrato e\' collegato al PIN 13',
                LANG_ADVANCED_INOUT_DIGITAL_READ: 'DigitalRead PIN#',
                LANG_ADVANCED_INOUT_DIGITAL_READ_TOOLTIP: 'Legge il valore da uno specifico Pin Digitale',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE: 'DigitalWrite',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN: 'PIN#',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE: 'stato',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH: 'HIGH',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW: 'LOW',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP: 'Scrive lo stato specifico a un Pin Digitale',
                LANG_ADVANCED_HIGHLOW_HIGH: 'HIGH',
                LANG_ADVANCED_HIGHLOW_LOW: 'LOW',
                LANG_ADVANCED_HIGHLOW_TOOLTIP: 'HIGH O LOW',
                LANG_ADVANCED_MATH_RANDOM: 'Numero casuale tra',
                LANG_ADVANCED_MATH_RANDOM_AND: ' e ',
                LANG_ADVANCED_MATH_RANDOM_TOOLTIP: 'Restituisce un valore casuale tra i due limiti.',
                //procedures blocks
                LANG_CATEGORY_PROCEDURES: 'Functioni',
                LANG_PROCEDURES_CALL_WITHOUT_DEFINITION: 'La funzione è ricamata senza corrisponenti definizioni',
                LANG_PROCEDURES_DEFNORETURN_HELPURL: '',
                LANG_PROCEDURES_DEFNORETURN_PROCEDURE: 'Funzione_senza_valore_d_uscita',
                LANG_PROCEDURES_DEFNORETURN_DO: 'fai',
                LANG_PROCEDURES_DEFNORETURN_TOOLTIP: 'La funzione non restiusce nessun valore in uscita da essa.',
                LANG_PROCEDURES_DEFRETURN_HELPURL: '',
                LANG_PROCEDURES_DEFRETURN_PROCEDURE: 'Funzione_con_valore_uscita',
                LANG_PROCEDURES_DEFRETURN_DO: 'fai',
                LANG_PROCEDURES_DEFRETURN_RETURN: 'uscita',
                LANG_PROCEDURES_DEFRETURN_TOOLTIP: 'La funzione restiusce un valore in uscita.',
                LANG_PROCEDURES_DEF_DUPLICATE_WARNING: 'Attenzione: questa funziona ha un parametro duplicato.',
                LANG_PROCEDURES_CALLNORETURN_HELPURL: '',
                LANG_PROCEDURES_CALLNORETURN_CALL: 'fai',
                LANG_PROCEDURES_CALLNORETURN_PROCEDURE: 'Funzione_senza_valore_d_uscita',
                LANG_PROCEDURES_CALLNORETURN_TOOLTIP: 'richiama una funzione senza valore in uscita.',
                LANG_PROCEDURES_CALLRETURN_HELPURL: '',
                LANG_PROCEDURES_CALLRETURN_CALL: 'fai',
                LANG_PROCEDURES_CALLRETURN_PROCEDURE: 'Funzione_con_valore_uscita',
                LANG_PROCEDURES_CALLRETURN_TOOLTIP: 'Richiama una funzione con valore in uscita.',
                LANG_PROCEDURES_MUTATORCONTAINER_Field: 'parametri',
                LANG_PROCEDURES_MUTATORARG_Field: 'variabili:',
                LANG_PROCEDURES_HIGHLIGHT_DEF: 'Funzione sottolineata',
                LANG_PROCEDURES_IFRETURN_TOOLTIP: 'se la condizione e vera , restituisce il valore.',
                LANG_PROCEDURES_IFRETURN_WARNING: 'Attenzione: Questo blocco può essere usato solo con un funzione che restiusce un valore.',
                //variables blocks :
                LANG_CATEGORY_VARIABLES: 'Variabli',
                LANG_VARIABLES_CALL_WITHOUT_DEFINITION: 'Qusta variable non e\' dichiarata.',
                LANG_VARIABLES_GLOBAL: 'Variable ',
                LANG_VARIABLES_GLOBAL_TYPE: 'tipo di ',
                LANG_VARIABLES_GLOBAL_EQUALS: 'uguale',
                LANG_VARIABLES_GLOBAL_TOOLTIP: 'Dichiara e definisci una Varibile Globale di tipo intero o stringa.',
                LANG_VARIABLES_LOCAL: 'Variabile locale ',
                LANG_VARIABLES_LOCAL_TYPE: 'tipo di ',
                LANG_VARIABLES_LOCAL_EQUALS: 'uguale',
                LANG_VARIABLES_LOCAL_TOOLTIP: 'Dichiarazione e definisci una varibile LOCALE di tipo intero o stringa.',
                LANG_VARIABLES_DEFINE: 'Definizione variable ',
                LANG_VARIABLES_DEFINE_AS: 'come',
                LANG_VARIABLES_DEFINE_TOOLTIP: 'Definisi il valore della variable.',
                LANG_VARIABLES_SET: 'Var ',
                LANG_VARIABLES_SET_AS: '=',
                LANG_VARIABLES_SET_TOOLTIP: 'Definisci valore della variabile.',
                LANG_VARIABLES_GET: 'Var ',
                LANG_VARIABLES_GET_TOOLTIP: 'Restituisce il valore della stampante.',
                LANG_VARIABLES_PIN_ANALOG: 'PIN analogico',
                LANG_VARIABLES_PIN_DIGITAL: 'PIN digitale',
                LANG_VARIABLES_PIN_DIGITAL0: 'WARNING: digital pin 0 (RX pin) is used when uploading a sketch. Using it to connect electronic components may cause problems when uploading a new sketch.',
                LANG_VARIABLES_PIN_TOOLTIP: 'Seleziona il PIN.',
                //zum blocks :
                LANG_CATEGORY_ZUM: 'zum bloqs',
                LANG_ZUM_BUTTON: 'Pulsante',
                LANG_ZUM_BUTTON_PIN: 'PIN#',
                LANG_ZUM_BUTTON_TOOLTIP: 'zum Pulsante',
                LANG_ZUM_FOLLOWER: 'Sensore infrarosso',
                LANG_ZUM_FOLLOWER_PIN_LEFT: 'PIN SINISTRO#',
                LANG_ZUM_FOLLOWER_PIN_RIGHT: 'PIN DESTRO#',
                LANG_ZUM_FOLLOWER_LEFT: 'Sinistra',
                LANG_ZUM_FOLLOWER_RIGHT: 'Destra',
                LANG_ZUM_FOLLOWER_TOOLTIP: 'Restituisce il valore digitale letto dal sensore infrarosso',
                LANG_ZUM_INFRARED: 'Sensora Infrarosso',
                LANG_ZUM_INFRARED_PIN: 'PIN#',
                LANG_ZUM_INFRARED_TOOLTIP: 'Restituisce il valore digiale letto dal Sensore Infrarosso',
                LANG_ZUM_LED: 'LED',
                LANG_ZUM_LED_PIN: 'PIN#',
                LANG_ZUM_LED_ON: 'ACCESO',
                LANG_ZUM_LED_OFF: 'SPENTO',
                LANG_ZUM_LED_TOOLTIP: 'zum LED',
                LANG_ZUM_PHOTORESISTOR: 'Sensore di Luce',
                LANG_ZUM_PHOTORESISTOR_PIN: 'PIN#',
                LANG_ZUM_PHOTORESISTOR_TOOLTIP: 'Restituisce il valore analogico misurato dal sensore di luce.',
                LANG_ZUM_PIEZO_BUZZER: 'Cicalino',
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
                LANG_ZUM_PIEZO_BUZZER_TOOLTIP: 'Cicalino Piezo',
                LANG_ZUM_PIEZO_BUZZERAV: 'Cicalino Avanzato',
                LANG_ZUM_PIEZO_BUZZERAV_PIN: 'PIN#',
                LANG_ZUM_PIEZO_BUZZERAV_TONE: 'TONO',
                LANG_ZUM_PIEZO_BUZZERAV_DURATION: 'Durata',
                LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP: 'Cicalino Piezo Avanzato',
                LANG_ZUM_POTENTIOMETER: 'Potenziometro',
                LANG_ZUM_POTENTIOMETER_PIN: 'PIN#',
                LANG_ZUM_POTENTIOMETER_TOOLTIP: 'Restituisce il valore analogico del potenziometro.',
                //servo blocks :
                LANG_CATEGORY_SERVO: 'Servo',
                LANG_SERVO_CONT: 'Servo',
                LANG_SERVO_CONT_PIN: 'PIN#',
                LANG_SERVO_CONT_ROT: 'ROTAZiONE',
                LANG_SERVO_CONT_TURN_CLOCKWISE: 'GIRA IN SENSO ORARIO',
                LANG_SERVO_CONT_TURN_COUNTERCLOCKWISE: 'GIRA IN SENSo ANTI-ORARIO',
                LANG_SERVO_CONT_STOPPED: 'FERMA',
                LANG_SERVO_CONT_DELAY: 'Pausa',
                LANG_SERVO_CONT_TOOLTIP: 'Continuous rotation servo.',
                LANG_SERVO_MOVE: 'Servo',
                LANG_SERVO_MOVE_PIN: 'PIN#',
                LANG_SERVO_MOVE_DEGREES: 'Gradi (0~180)',
                LANG_SERVO_MOVE_DELAY: 'Pausa',
                LANG_SERVO_MOVE_TOOLTIP: 'Muove dai 0~180 gradi',
                LANG_SERVO_WARNING: 'It is not possible to set the servo pin using a variable'
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
        // Source: lang/pt-PT.js
        (function() {
            var language = {
                //random :
                LANG_VARIABLES_SET_ITEM: 'elemento',
                LANG_RESERVED_WORDS: 'Palavra reservada: este nome não é permitido.',
                //logic blocks:
                LANG_CATEGORY_LOGIC: 'Lógica',
                LANG_LOGIC_OPERATION_AND: 'e',
                LANG_LOGIC_OPERATION_OR: 'ou',
                LANG_LOGIC_COMPARE_TOOLTIP_EQ: 'Compara se as duas entradas são iguais.',
                LANG_LOGIC_COMPARE_TOOLTIP_NEQ: 'Compara se as duas entradas não são iguais entre sí.',
                LANG_LOGIC_COMPARE_TOOLTIP_LT: 'Compara se a primera entrada é menor do que a segunda entrada.',
                LANG_LOGIC_COMPARE_TOOLTIP_LTE: 'Compara se a primera entrada é menor ou igual a segunda entrada.',
                LANG_LOGIC_COMPARE_TOOLTIP_GT: 'Compara se a primera entrada é maior do que a segunda entrada.',
                LANG_LOGIC_COMPARE_TOOLTIP_GTE: 'Compara se a primera entrada é maior ou igual a segunda entrada.',
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
                LANG_ADVANCED_SERIAL_PRINT: 'Imprimir pela porta série',
                LANG_ADVANCED_SERIAL_PRINT_TOOLTIP: 'Imprime os dados como texto ASCII.',
                LANG_ADVANCED_SERIAL_PRINTLN: 'Imprimir pela porta série com salto de linha',
                LANG_ADVANCED_SERIAL_PRINTLN_TOOLTIP: 'Imprime os dados como texto ASCII e con retorno de carro (RC).',
                LANG_ADVANCED_SERIAL_READ: 'Ler a porta série',
                LANG_ADVANCED_SERIAL_READ_TOOLTIP: 'Lê os dados recebidos pela porta série como texto ASCII.',
                LANG_ADVANCED_SERIAL_SPECIAL: 'Caracteres especiais',
                LANG_ADVANCED_SERIAL_SPECIAL_TAB: 'Tabulador',
                LANG_ADVANCED_SERIAL_SPECIAL_CARRIAGE_RETURN: 'Retorno de carro',
                LANG_ADVANCED_SERIAL_SPECIAL_LINE_FEED: 'Salto de linha',
                LANG_ADVANCED_SERIAL_SPECIAL_TOOLTIP: 'Escreve caracteres especiais.',
                //bq blocks :
                LANG_CATEGORY_BQ: 'Blocos octopus',
                LANG_BQ_BAT: 'BAT - Sensor de Ultrasons',
                LANG_BQ_BAT_RED_PIN: 'ECHO PIN#',
                LANG_BQ_BAT_BLUE_PIN: 'TRIGGER PIN#',
                LANG_BQ_BAT_TOOLTIP: 'Devolve a distância medida pelo sensor.',
                LANG_BQ_BUTTON: 'Botão',
                LANG_BQ_BUTTON_PIN: 'PIN#',
                LANG_BQ_BUTTON_TOOLTIP: 'Botão',
                LANG_BQ_BUTTONS: 'Botoneira',
                LANG_BQ_BUTTONS_PIN: 'PIN#',
                LANG_BQ_BUTTONS_BUTTON_A: 'Botão #A',
                LANG_BQ_BUTTONS_BUTTON_B: 'Botão #B',
                LANG_BQ_BUTTONS_BUTTON_C: 'Botão #C',
                LANG_BQ_BUTTONS_BUTTON_D: 'Botão #D',
                LANG_BQ_BUTTONS_BUTTON_E: 'Botão #E',
                LANG_BQ_BUTTONS_TOOLTIP: 'Botoneira',
                LANG_BQ_INFRARED: 'Sensor infravermelhos',
                LANG_BQ_INFRARED_PIN: 'PIN#',
                LANG_BQ_INFRARED_TOOLTIP: 'Devolve o valor digital medido pelo sensor infravermelhos',
                LANG_BQ_JOYSTICK: 'Joystick',
                LANG_BQ_JOYSTICK_PIN_X: 'Eixo X PIN#',
                LANG_BQ_JOYSTICK_PIN_Y: 'Eixo Y PIN#',
                LANG_BQ_JOYSTICK_POSITION: 'Posição Joystick',
                LANG_BQ_JOYSTICK_PIN_BUTTON: 'Botão PIN#',
                LANG_BQ_JOYSTICK_TOOLTIP: 'Joystick',
                LANG_BQ_LED: 'LED',
                LANG_BQ_LED_PIN: 'PIN#',
                LANG_BQ_LED_STATE: '',
                LANG_BQ_LED_ON: 'ACENDER',
                LANG_BQ_LED_OFF: 'APAGAR',
                LANG_BQ_LED_TOOLTIP: 'LED',
                LANG_BQ_PHOTORESISTOR: 'Sensor de Luz',
                LANG_BQ_PHOTORESISTOR_PIN: 'PIN#',
                LANG_BQ_PHOTORESISTOR_TOOLTIP: 'Devolve o valor analógico medido pela foto-resistência.',
                LANG_BQ_PIEZO_BUZZER: 'Cigarra',
                LANG_BQ_PIEZO_BUZZER_PIN: 'PIN#',
                LANG_BQ_PIEZO_BUZZER_TONE: 'TOM',
                LANG_BQ_PIEZO_BUZZER_DO: 'DO',
                LANG_BQ_PIEZO_BUZZER_RE: 'RÉ',
                LANG_BQ_PIEZO_BUZZER_MI: 'MI',
                LANG_BQ_PIEZO_BUZZER_FA: 'FA',
                LANG_BQ_PIEZO_BUZZER_SOL: 'SOL',
                LANG_BQ_PIEZO_BUZZER_LA: 'LA',
                LANG_BQ_PIEZO_BUZZER_SI: 'SI',
                LANG_BQ_PIEZO_BUZZER_DURATION: 'Duração',
                LANG_BQ_PIEZO_BUZZER_TOOLTIP: 'Cigarra - Elemento piezoeléctrico',
                LANG_BQ_PIEZO_BUZZERAV: 'Cigarra avançado',
                LANG_BQ_PIEZO_BUZZERAV_PIN: 'PIN#',
                LANG_BQ_PIEZO_BUZZERAV_TONE: 'TOM',
                LANG_BQ_PIEZO_BUZZERAV_DURATION: 'Duração',
                LANG_BQ_PIEZO_BUZZERAV_TOOLTIP: 'Cigarra avançado',
                LANG_BQ_POTENTIOMETER: 'Potenciómetro',
                LANG_BQ_POTENTIOMETER_PIN: 'PIN#',
                LANG_BQ_POTENTIOMETER_TOOLTIP: 'Devolve o valor analógico medido pelo potenciómetro',
                //LCD blocks:
                LANG_CATEGORY_LCD: 'Blocos LCD',
                LANG_LCD_DEF: 'LCD',
                LANG_LCD_PINS: 'Conecta o pino SCL ao pino A5 e o pino SDA ao pino A4',
                LANG_LCD_DEF_TOOLTIP: 'Define o LCD',
                LANG_LCD_SETBACKLIGHT: 'LCD: ajustar a retroiluminação',
                LANG_LCD_SETBACKLIGHT_CLOSE: '',
                LANG_LCD_SETBACKLIGHT_TOOLTIP: 'Ajusta a retroiluminação do LCD',
                LANG_LCD_PRINT: 'LCD: Imprimir ',
                LANG_LCD_PRINT_POSITION: 'Definir a posição do texto?',
                LANG_LCD_PRINT_TOOLTIP: 'Imprime uma frase no LCD na posição específicada ou na seguinte disponível.',
                LANG_LCD_CLEAR: 'LCD apagar',
                LANG_LCD_CLEAR_TOOLTIP: 'LCD: Apagar',
                //controls blocks :
                LANG_CATEGORY_CONTROLS: 'Controle',
                LANG_CONTROLS_BASE_DELAY_WAIT: 'Esperar (ms)',
                LANG_CONTROLS_BASE_DELAY_TOOLTIP: 'Espera o tempo especificado em milisegundos (ms)',
                LANG_CONTROLS_IF_TOOLTIP_1: 'Se a condição é verdadeira, executa as acções dentro do bloco.',
                LANG_CONTROLS_IF_TOOLTIP_2: 'Se a condição é verdadeira, executa o primero bloco de comandos. Se não é, executa o segundo bloco de comandos.',
                LANG_CONTROLS_IF_TOOLTIP_3: 'Se o primeiro valor é verdadeiro, executa o primero bloco de comandos. Senão, se o segundo valor é verdadeiro, executa o segundo bloco de comandos.',
                LANG_CONTROLS_IF_TOOLTIP_4: 'Se o primeiro valor é verdadeiro, executa o primero bloco de comandos. Senão, se o segundo valor é verdadeiro, executa o segundo bloco de comandos. Se nengum dos valores é verdadeiro, executa o último bloco de comandos',
                LANG_CONTROLS_IF_MSG_IF: 'se',
                LANG_CONTROLS_IF_MSG_ELSEIF: 'senão, se',
                LANG_CONTROLS_IF_MSG_ELSE: 'senão',
                LANG_CONTROLS_IF_MSG_THEN: 'executar',
                LANG_CONTROLS_IF_IF_Field_IF: 'se',
                LANG_CONTROLS_IF_IF_TOOLTIP: 'Adicionar, eliminar o reordenar secções para reconfigurar este bloco "se".',
                LANG_CONTROLS_IF_ELSEIF_Field_ELSEIF: 'senão, se',
                LANG_CONTROLS_IF_ELSEIF_TOOLTIP: 'Adiciona uma condição ao bloco "se".',
                LANG_CONTROLS_IF_ELSE_Field_ELSE: 'senão',
                LANG_CONTROLS_IF_ELSE_TOOLTIP: 'Adiciona uma condição final ao bloco "se" para capturar o resto das opções.',
                LANG_CONTROLS_FOR_FROM_WARNING: 'It is not possible to set a variable as the initial value of the for block.',
                LANG_CONTROLS_FOR_TO_WARNING: 'It is not possible to set a variable as the final value of the for block.',
                LANG_CONTROLS_FOR_INPUT_WITH: 'Contar com',
                LANG_CONTROLS_FOR_INPUT_VAR: 'x',
                LANG_CONTROLS_FOR_INPUT_FROM: 'desde',
                LANG_CONTROLS_FOR_INPUT_TO: 'até',
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
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: 'interrumper',
                LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: 'seguir para o próximo valor do "loop"',
                LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK: 'Sair do "loop" nesta instrução.',
                LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE: 'Saltar o resto das accões desta volta e continuar com para a próxima volta.',
                LANG_CONTROLS_FLOW_STATEMENTS_WARNING: 'Atenção: Este bloco só pode ser usado dentro de um "loop".',
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
                //text blocks:
                LANG_CATEGORY_TEXT: 'Texto',
                LANG_TEXT_TEXT_HELPURL: '',
                LANG_TEXT_TEXT_TOOLTIP: 'Uma letra, uma palabra ou uma linha de texto.',
                LANG_TEXT_JOIN_HELPURL: '',
                LANG_TEXT_JOIN_Field_CREATEWITH: 'criar texto com',
                LANG_TEXT_JOIN_TOOLTIP: 'Cria texto juntando qualquier número de elementos.',
                LANG_TEXT_CREATE_JOIN_Field_JOIN: 'unir',
                LANG_TEXT_CREATE_JOIN_TOOLTIP: 'Adicionar, eliminar o reordenar secções para reconfigurar este bloco de texto.',
                LANG_TEXT_CREATE_JOIN_ITEM_Field_ITEM: 'elemento',
                LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP: 'Adicionar um elemento ao texto.',
                LANG_TEXT_CREATE_JOIN_TITLE_JOIN: 'unir',
                LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM: 'elemento',
                LANG_TEXT_APPEND_HELPURL: '',
                LANG_TEXT_APPEND_TO: 'para',
                LANG_TEXT_APPEND_APPENDTEXT: 'acrescentando texto',
                LANG_TEXT_APPEND_VARIABLE: 'elemento',
                LANG_TEXT_APPEND_TOOLTIP: 'Adicionar texto a variávele %1.',
                LANG_TEXT_LENGTH_HELPURL: '',
                LANG_TEXT_LENGTH_INPUT_LENGTH: 'longitude',
                LANG_TEXT_LENGTH_TOOLTIP: 'Devolve o número de letras (incluindo os espaços) no texto introduzido.',
                LANG_TEXT_EQUALSIGNORECASE_IS: '',
                LANG_TEXT_EQUALSIGNORECASE_EQUAL: ' =',
                LANG_TEXT_EQUALSIGNORECASE_QUESTION: '',
                LANG_TEXT_EQUALSIGNORECASE_TOOLTIP: 'Compara se os dois textos introduzidos são iguais, independentemente de que tenhan letras maiúsculas ou minúsculas.',
                LANG_TEXT_SUBSTRING: 'Recortar ',
                LANG_TEXT_SUBSTRING_FROM: 'de',
                LANG_TEXT_SUBSTRING_TO: 'até',
                LANG_TEXT_SUBSTRING_TOOLTIP: 'Recorta os caracteres do texto introduzido que se encontrem entre os dois índices e cria com eles um novo texto.',
                //advanced blocks :
                LANG_CATEGORY_ADVANCED: 'Funções PIN',
                LANG_ADVANCED_CONVERSION_CONVERT: 'Converter',
                LANG_ADVANCED_CONVERSION_DECIMAL: 'Decimal',
                LANG_ADVANCED_CONVERSION_HEXADECIMAL: 'Hexadecimal',
                LANG_ADVANCED_CONVERSION_OCTAL: 'Octal',
                LANG_ADVANCED_CONVERSION_BINARY: 'Binario',
                LANG_ADVANCED_CONVERSION_VALUE: 'valor',
                LANG_ADVANCED_CONVERSION_TOOLTIP: 'Converter a base de um número.',
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
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_PIN: 'PIN#',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_STATE: 'estado',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_HIGH: 'ALTO',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_LOW: 'BAIXO',
                LANG_ADVANCED_INOUT_DIGITAL_WRITE_TOOLTIP: 'Escreve um valor num pino digital específico.',
                LANG_ADVANCED_HIGHLOW_HIGH: 'ALTO',
                LANG_ADVANCED_HIGHLOW_LOW: 'BAIXO',
                LANG_ADVANCED_HIGHLOW_TOOLTIP: 'Escreve "ALTO" o "BAIXO" em função do seleccionado.',
                LANG_ADVANCED_MATH_RANDOM: 'Aleatório entre',
                LANG_ADVANCED_MATH_RANDOM_AND: ' e ',
                LANG_ADVANCED_MATH_RANDOM_TOOLTIP: 'Cria um número aleatório entre os dois limites introduzidos.',
                //procedures blocks
                LANG_CATEGORY_PROCEDURES: 'Funções',
                LANG_PROCEDURES_CALL_WITHOUT_DEFINITION: 'Chamada de uma função não definida.',
                LANG_PROCEDURES_DEFNORETURN_HELPURL: '',
                LANG_PROCEDURES_DEFNORETURN_PROCEDURE: 'func_sem_retorno',
                LANG_PROCEDURES_DEFNORETURN_DO: 'executar',
                LANG_PROCEDURES_DEFNORETURN_TOOLTIP: 'função que se executa sem devolver nada.',
                LANG_PROCEDURES_DEFRETURN_HELPURL: '',
                LANG_PROCEDURES_DEFRETURN_PROCEDURE: 'func_com_retorno',
                LANG_PROCEDURES_DEFRETURN_DO: 'executar',
                LANG_PROCEDURES_DEFRETURN_RETURN: 'Devolve',
                LANG_PROCEDURES_DEFRETURN_TOOLTIP: 'função com valor de retorno.',
                LANG_PROCEDURES_DEF_DUPLICATE_WARNING: 'Atenção: Esta função tem parâmetros duplicados.',
                LANG_PROCEDURES_CALLNORETURN_HELPURL: '',
                LANG_PROCEDURES_CALLNORETURN_CALL: 'executar',
                LANG_PROCEDURES_CALLNORETURN_PROCEDURE: 'func_sem_retorno',
                LANG_PROCEDURES_CALLNORETURN_TOOLTIP: 'executa esta função.',
                LANG_PROCEDURES_CALLRETURN_HELPURL: '',
                LANG_PROCEDURES_CALLRETURN_CALL: 'executar',
                LANG_PROCEDURES_CALLRETURN_PROCEDURE: 'func_com_retorno',
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
                LANG_VARIABLES_PIN_DIGITAL0: 'WARNING: digital pin 0 (RX pin) is used when uploading a sketch. Using it to connect electronic components may cause problems when uploading a new sketch.',
                LANG_VARIABLES_PIN_TOOLTIP: 'Selecciona o pino desejado.',
                //zum blocks :
                LANG_CATEGORY_ZUM: 'zum bloqs',
                LANG_ZUM_BUTTON: 'Botão',
                LANG_ZUM_BUTTON_PIN: 'PIN#',
                LANG_ZUM_BUTTON_TOOLTIP: 'Botão zum',
                LANG_ZUM_FOLLOWER: 'Sensor infravermelhos',
                LANG_ZUM_FOLLOWER_PIN_LEFT: 'PINO ESQUERDA#',
                LANG_ZUM_FOLLOWER_PIN_RIGHT: 'PINO DIREITA#',
                LANG_ZUM_FOLLOWER_LEFT: 'Esquerda',
                LANG_ZUM_FOLLOWER_RIGHT: 'Direita',
                LANG_ZUM_FOLLOWER_TOOLTIP: 'Devolve o valor digital do sensor infravermelhos zum',
                LANG_ZUM_INFRARED: 'Sensor infravermelhos',
                LANG_ZUM_INFRARED_PIN: 'PIN#',
                LANG_ZUM_INFRARED_TOOLTIP: 'Devolve o valor digital do sensor infravermelhos zum',
                LANG_ZUM_LED: 'LED',
                LANG_ZUM_LED_PIN: 'PIN#',
                LANG_ZUM_LED_ON: 'ACENDER',
                LANG_ZUM_LED_OFF: 'APAGAR',
                LANG_ZUM_LED_TOOLTIP: 'LED zum',
                LANG_ZUM_PHOTORESISTOR: 'Sensor de Luz',
                LANG_ZUM_PHOTORESISTOR_PIN: 'PIN#',
                LANG_ZUM_PHOTORESISTOR_TOOLTIP: 'Devolve o valor analógico do sensor de luz (foto-resistência).',
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
                LANG_ZUM_PIEZO_BUZZERAV: 'Cigarra avançaado',
                LANG_ZUM_PIEZO_BUZZERAV_PIN: 'PIN#',
                LANG_ZUM_PIEZO_BUZZERAV_TONE: 'TOM',
                LANG_ZUM_PIEZO_BUZZERAV_DURATION: 'Duração',
                LANG_ZUM_PIEZO_BUZZERAV_TOOLTIP: 'Cigarra - Elemento piezoeléctrico avançado.',
                LANG_ZUM_POTENTIOMETER: 'Potenciómetro',
                LANG_ZUM_POTENTIOMETER_PIN: 'PIN#',
                LANG_ZUM_POTENTIOMETER_TOOLTIP: 'Potenciómetro zum.',
                //servo blocks :
                LANG_CATEGORY_SERVO: 'Servo',
                LANG_SERVO_CONT: 'Servo',
                LANG_SERVO_CONT_PIN: 'PIN#',
                LANG_SERVO_CONT_ROT: 'ROT',
                LANG_SERVO_CONT_TURN_CLOCKWISE: 'GIRAR no SENTIDO HORÁRIO',
                LANG_SERVO_CONT_TURN_COUNTERCLOCKWISE: 'GIRAR no SENTIDO ANTI-HORÁRIO',
                LANG_SERVO_CONT_STOPPED: 'PARAR',
                LANG_SERVO_CONT_DELAY: 'Pausa',
                LANG_SERVO_CONT_TOOLTIP: 'Servo de rotación continua.',
                LANG_SERVO_MOVE: 'Servo',
                LANG_SERVO_MOVE_PIN: 'PIN#',
                LANG_SERVO_MOVE_DEGREES: 'Graus (0~180)',
                LANG_SERVO_MOVE_DELAY: 'Pausa',
                LANG_SERVO_MOVE_TOOLTIP: 'Mover o servo entre 0 e 180 graus.',
                LANG_SERVO_WARNING: 'It is not possible to set the servo pin using a variable'
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
        // Source: src/profiles.js
        /*
         * Arduino Board profiles
         */
        var profiles = {
            arduino: {
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
            },
        };


        // Set default profile to arduino standard-compatible board
        profiles['default'] = profiles.arduino;

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

        this["JST"]["advanced_conversion"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    __e(value_num) +
                    ',' +
                    __e(convertion);

            }
            return __p
        };

        this["JST"]["advanced_map"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'map(' +
                    __e(num) +
                    ',' +
                    __e(from_min) +
                    ',' +
                    __e(from_max) +
                    ',' +
                    __e(to_min) +
                    ',' +
                    __e(to_max) +
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
                    __e(delay_time) +
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
                    __e(value_num) +
                    ',0,1023,0,' +
                    __e(value_dmax) +
                    ')';

            }
            return __p
        };

        this["JST"]["bq_bat"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Distance_' +
                    __e(name) +
                    '()';

            }
            return __p
        };

        this["JST"]["bq_bat_definitions_distance"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'long Distance_' +
                    __e(name) +
                    '()\n{\n  long microseconds = TP_init_' +
                    __e(name) +
                    '();\n  long distance;\n  distance = microseconds/29/2;\n  return distance;\n}\n';

            }
            return __p
        };

        this["JST"]["bq_bat_definitions_tp_init"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '//bqBAT\nlong TP_init_' +
                    __e(name) +
                    '()\n{\n  digitalWrite( ' +
                    __e(trigger_pin) +
                    ' , LOW);\n  delayMicroseconds(2);\n  digitalWrite( ' +
                    __e(trigger_pin) +
                    ' , HIGH);\n  delayMicroseconds(10);\n  digitalWrite( ' +
                    __e(trigger_pin) +
                    ' , LOW);\n  long microseconds = pulseIn( ' +
                    __e(echo_pin) +
                    ' ,HIGH);\n  return microseconds;\n}\n';

            }
            return __p
        };

        this["JST"]["bq_bat_setups_echo"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode( ' +
                    __e(echo_pin) +
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
                    __e(trigger_pin) +
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
                    __e(dropdown_pin) +
                    ',INPUT);\n  pinMode(' +
                    __e(NextPIN) +
                    ', OUTPUT);\n  blueToothSerial.begin(' +
                    __e(baud_rate) +
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
                    __e(statement_send) +
                    ' );\n';

            }
            return __p
        };

        this["JST"]["bq_button"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'digitalRead(' +
                    __e(dropdown_pin) +
                    ')';

            }
            return __p
        };

        this["JST"]["bq_button_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(' +
                    __e(dropdown_pin) +
                    ',INPUT_PULLUP);\n';

            }
            return __p
        };

        this["JST"]["bq_buttons"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '  adc_key_in =analogRead(' +
                    __e(dropdown_pin) +
                    ');\n  key = get_key(adc_key_in);\n  if (key != oldkey)\n  {\n    delay(50);\n    adc_key_in = analogRead(' +
                    __e(dropdown_pin) +
                    ');\n    key = get_key(adc_key_in);\n    if (key != oldkey)\n    {\n      oldkey = key;\n      if (key >=0){\n        switch(key)\n        {\n          case 0:\n           ' +
                    __e(code_btn1) +
                    '\n          break;\n          case 1:\n           ' +
                    __e(code_btn2) +
                    '\n          break;\n          case 2:\n           ' +
                    __e(code_btn3) +
                    '\n          break;\n          case 3:\n           ' +
                    __e(code_btn4) +
                    '\n          break;  \n          case 4:\n           ' +
                    __e(code_btn5) +
                    '\n          break;\n        }      \n      }\n    }\n  }\n';

            }
            return __p
        };

        this["JST"]["bq_buttons_definitions"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'int get_key(unsigned int input)\n  {\n    int k;\n    for (k = 0; k < NUM_KEYS; k++)\n    {\n      if (input < adc_key_val[k])\n      {\n        return k;\n      }\n    }\n    if (k >= NUM_KEYS)k = -1;\n      return k;\n}\n';

            }
            return __p
        };

        this["JST"]["bq_buttons_definitions_variables"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '//bqButtons\nint adc_key_val[5] ={20,50, 100, 200, 600 };\nint NUM_KEYS = 5;\nint adc_key_in;\nint key=-1;\nint oldkey=-1;\n';

            }
            return __p
        };

        this["JST"]["bq_infrared"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'digitalRead(' +
                    __e(dropdown_pin) +
                    ')';

            }
            return __p
        };

        this["JST"]["bq_infrared_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode( ' +
                    __e(dropdown_pin) +
                    ' , INPUT);\n';

            }
            return __p
        };

        this["JST"]["bq_joystick"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'readJoystick_' +
                    __e(name) +
                    '()';

            }
            return __p
        };

        this["JST"]["bq_joystick_definitions"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'int * readJoystick_' +
                    __e(name) +
                    '(){\n  _internal_readJoystick_array_' +
                    __e(name) +
                    '[0]=analogRead(' +
                    __e(pinx) +
                    ');\n  _internal_readJoystick_array_' +
                    __e(name) +
                    '[1]=analogRead(' +
                    __e(piny) +
                    ');\n  _internal_readJoystick_array_' +
                    __e(name) +
                    '[2]=digitalRead(' +
                    __e(pinbutton) +
                    ');\n  return _internal_readJoystick_array_' +
                    __e(name) +
                    ';\n}';

            }
            return __p
        };

        this["JST"]["bq_joystick_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(' +
                    __e(pinbutton) +
                    ',INPUT_PULLUP);\n';

            }
            return __p
        };

        this["JST"]["bq_led"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'digitalWrite(' +
                    __e(dropdown_pin) +
                    ',' +
                    __e(dropdown_stat) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["bq_led_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(' +
                    __e(dropdown_pin) +
                    ',OUTPUT);\n';

            }
            return __p
        };

        this["JST"]["bq_photoresistor"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'analogRead(' +
                    __e(dropdown_pin) +
                    ')';

            }
            return __p
        };

        this["JST"]["bq_piezo_buzzer"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'tone(' +
                    __e(dropdown_pin) +
                    ',' +
                    __e(dropdown_stat) +
                    ',' +
                    __e(delay_time) +
                    ');\ndelay(' +
                    __e(delay_time) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["bq_piezo_buzzerav"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'tone(' +
                    __e(dropdown_pin) +
                    ',' +
                    __e(Buzztone) +
                    ',' +
                    __e(delay_time) +
                    ');\ndelay(' +
                    __e(delay_time) +
                    ');\n\n';

            }
            return __p
        };

        this["JST"]["bq_potentiometer"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'analogRead(' +
                    __e(dropdown_pin) +
                    ')';

            }
            return __p
        };

        this["JST"]["bt_serial_available"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'if (blueToothSerial.available()>0){\n' +
                    __e(branch) +
                    '\n}\n';

            }
            return __p
        };

        this["JST"]["controls_else"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'else {\n' +
                    __e(branch) +
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
                    __e(argument) +
                    ') {\n' +
                    __e(branch) +
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
                    __e(argument) +
                    ') {\n' +
                    __e(branch) +
                    ' }';

            }
            return __p
        };

        this["JST"]["controls_whileUntil"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'while (' +
                    __e(argument0) +
                    ') {\n' +
                    __e(branch) +
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
                    __e(dropdown_pin) +
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
                    __e(dropdown_pin) +
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
                    __e(dropdown_pin) +
                    ',' +
                    __e(value_num) +
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
                    __e(dropdown_pin) +
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
                    __e(dropdown_stat) +
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
                    __e(dropdown_pin) +
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
                    __e(dropdown_pin) +
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
                    __e(dropdown_pin) +
                    ',' +
                    __e(dropdown_stat) +
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
                    __e(dropdown_pin) +
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
                    __e(bool_value);

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

        this["JST"]["lcd_def_definitions"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '#include <Wire.h>\n#include <LiquidCrystal.h>';

            }
            return __p
        };

        this["JST"]["lcd_def_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'lcd.begin(20, 4);\n  lcd.clear();\n';

            }
            return __p
        };

        this["JST"]["lcd_print"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'lcd.print(' +
                    __e(val) +
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
                    __e(ycoor) +
                    ',' +
                    __e(xcoor) +
                    ');\nlcd.print(' +
                    __e(val) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["lcd_setBacklight"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'lcd.setBacklight(' +
                    __e(state) +
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
                    __e(argument0) +
                    ' ' +
                    __e(operator) +
                    ' ' +
                    __e(argument1);

            }
            return __p
        };

        this["JST"]["logic_negate"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += '!' +
                    __e(argument0);

            }
            return __p
        };

        this["JST"]["logic_operation"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    __e(argument0) +
                    ' ' +
                    __e(operator) +
                    ' ' +
                    __e(argument1);

            }
            return __p
        };

        this["JST"]["math_arithmetic"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    __e(argument0) +
                    '' +
                    __e(operator) +
                    '' +
                    __e(argument1);

            }
            return __p
        };

        this["JST"]["math_arithmetic_pow"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pow(' +
                    __e(argument0) +
                    ',' +
                    __e(argument1) +
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
                    __e(argument0) +
                    '%' +
                    __e(argument1);

            }
            return __p
        };

        this["JST"]["math_random"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'random(' +
                    __e(value_num) +
                    ',' +
                    __e(value_dmax) +
                    ')';

            }
            return __p
        };

        this["JST"]["procedures_callnoreturn"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    __e(funcName) +
                    '(' +
                    __e(funcArgs) +
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
                    __e(funcName) +
                    '(' +
                    __e(funcArgs) +
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
                    __e(returnType) +
                    ' ' +
                    __e(funcName) +
                    ' (' +
                    __e(args) +
                    ') {\n' +
                    __e(branch) +
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
                    __e(returnType) +
                    ' ' +
                    __e(funcName) +
                    ' (' +
                    __e(args) +
                    ') {\n' +
                    __e(branch) +
                    '\n' +
                    __e(returnValue) +
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
                    __e(branch) +
                    '\n}\n';

            }
            return __p
        };

        this["JST"]["serial_print"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'Serial.print(' +
                    __e(content) +
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
                    __e(bitrate) +
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
                    __e(content) +
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
                    __e(bitrate) +
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
                    __e(bitrate) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["serial_special"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    __e(char);

            }
            return __p
        };

        this["JST"]["servo_cont"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'servos[' +
                    __e(dropdown_pin) +
                    '].write(' +
                    __e(value_degree) +
                    ');\ndelay(' +
                    __e(delay_time) +
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
                    __e(dropdown_pin) +
                    '].attach(' +
                    __e(dropdown_pin) +
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
                    __e(dropdown_pin) +
                    '].write(' +
                    __e(value_degree) +
                    ');\ndelay(' +
                    __e(delay_time) +
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
                    __e(dropdown_pin) +
                    '].attach(' +
                    __e(dropdown_pin) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["text_equalsIgnoreCase"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p +=
                    __e(string1) +
                    '.equalsIgnoreCase(' +
                    __e(string2) +
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
                    __e(argument0) +
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
                    __e(string1) +
                    '.substring(' +
                    __e(from) +
                    ',' +
                    __e(to) +
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
                    __e(varName) +
                    '=' +
                    __e(varValue) +
                    ';\n';

            }
            return __p
        };

        this["JST"]["zum_button"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'digitalRead(' +
                    __e(dropdown_pin) +
                    ')';

            }
            return __p
        };

        this["JST"]["zum_button_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(' +
                    __e(dropdown_pin) +
                    ',INPUT_PULLUP);\n';

            }
            return __p
        };

        this["JST"]["zum_follower"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'if(digitalRead(' +
                    __e(dropdown_pin) +
                    ')==HIGH)\n{\n  ' +
                    __e(code_btn1) +
                    '\n}\nif(digitalRead(' +
                    __e(NextPIN) +
                    ')==HIGH)\n{\n  ' +
                    __e(code_btn2) +
                    '\n}\n';

            }
            return __p
        };

        this["JST"]["zum_follower_setups_nextpin"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode( ' +
                    __e(NextPIN) +
                    ' , INPUT);\n';

            }
            return __p
        };

        this["JST"]["zum_follower_setups_pin"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode( ' +
                    __e(dropdown_pin) +
                    ' , INPUT);\n';

            }
            return __p
        };

        this["JST"]["zum_infrared"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'digitalRead(' +
                    __e(dropdown_pin) +
                    ')';

            }
            return __p
        };

        this["JST"]["zum_infrared_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode( ' +
                    __e(dropdown_pin) +
                    ' , INPUT);\n';

            }
            return __p
        };

        this["JST"]["zum_led"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'digitalWrite(' +
                    __e(dropdown_pin) +
                    ',' +
                    __e(dropdown_stat) +
                    ');\n';

            }
            return __p
        };

        this["JST"]["zum_led_setups"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'pinMode(' +
                    __e(dropdown_pin) +
                    ',OUTPUT);\n';

            }
            return __p
        };

        this["JST"]["zum_photoresistor"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'analogRead(' +
                    __e(dropdown_pin) +
                    ')';

            }
            return __p
        };

        this["JST"]["zum_piezo_buzzer"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'tone(' +
                    __e(dropdown_pin) +
                    ',' +
                    __e(dropdown_stat) +
                    ',' +
                    __e(delay_time) +
                    ');\ndelay(' +
                    __e(delay_time) +
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
                    __e(dropdown_pin) +
                    ',' +
                    __e(Buzztone) +
                    ',' +
                    __e(delay_time) +
                    ');\ndelay(' +
                    __e(delay_time) +
                    ');\n\n';

            }
            return __p
        };

        this["JST"]["zum_potentiometer"] = function(obj) {
            obj || (obj = {});
            var __t, __p = '',
                __e = _.escape;
            with(obj) {
                __p += 'analogRead(' +
                    __e(dropdown_pin) +
                    ')';

            }
            return __p
        };
        var JST = this.JST;

        // Source: src/blocks/advanced_conversion/advanced_conversion.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * advanced_conversion code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.advanced_conversion = function() {
            var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_NONE);
            var code = '';
            var a = RoboBlocks.findPinMode(value_num);
            code += a['code'];
            value_num = a['pin'];


            var convertion = this.getFieldValue('CONV');
            code += JST['advanced_conversion']({
                'value_num': value_num,
                'convertion': convertion
            });
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * advanced_conversion block definition
         * @type {Object}
         */
        Blockly.Blocks.advanced_conversion = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/advanced_conversion',
            /**
             * advanced_conversion initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_CONVERSION_CONVERT'))
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.locales.getKey('LANG_ADVANCED_CONVERSION_DECIMAL') || 'DEC', 'DEC'],
                        [RoboBlocks.locales.getKey('LANG_ADVANCED_CONVERSION_HEXADECIMAL') || 'HEX', 'HEX'],
                        [RoboBlocks.locales.getKey('LANG_ADVANCED_CONVERSION_OCTAL') || 'OCT', 'OCT'],
                        [RoboBlocks.locales.getKey('LANG_ADVANCED_CONVERSION_BINARY') || 'BIN', 'BIN']
                    ]), 'CONV');
                this.appendValueInput('NUM', Number)
                    .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_CONVERSION_VALUE'))
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .setCheck(Number);
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_CONVERSION_TOOLTIP'));
            }
        };

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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/advanced_map',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/array_get',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/base_delay',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/base_map',
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
            var name = trigger_pin.substring(0, 3) + '_' + echo_pin.substring(0, 3);
            var a = RoboBlocks.findPinMode(echo_pin);
            code += a['code'];
            echo_pin = a['pin'];

            a = RoboBlocks.findPinMode(trigger_pin);
            code += a['code'];
            trigger_pin = a['pin'];

            Blockly.Arduino.definitions_['define_bq_bat_' + echo_pin + 'tp_init'] = JST['bq_bat_definitions_tp_init']({
                'name': name,
                'echo_pin': echo_pin,
                'trigger_pin': trigger_pin
            });
            Blockly.Arduino.definitions_['define_bq_bat_' + echo_pin + 'distance'] = JST['bq_bat_definitions_distance']({
                'name': name,
                'echo_pin': echo_pin,
                'trigger_pin': trigger_pin
            });
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
                'name': name,
                'echo_pin': echo_pin
            });

            RoboBlocks.variables[JST['bq_bat']({
                'name': name,
                'echo_pin': echo_pin
            })] = ['int', 'global'];

            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        /**
         * bq_bat block definition
         * @type {Object}
         */
        Blockly.Blocks.bq_bat = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ZUM'),
            tags: ['bq', 'bat'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_bat',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
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
            tags: ['bq', 'bluetooth'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_bluetooth_def',
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
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
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
            tags: ['bq', 'bluetooth'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_bluetooth_receive',
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
            tags: ['bq', 'bluetooth'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_bluetooth_send',
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

        // Source: src/blocks/bq_button/bq_button.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * bq_button code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.bq_button = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
            var code = '';
            var a = RoboBlocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];

            if (RoboBlocks.isVariable(dropdown_pin)) {
                code += JST['bq_button_setups']({
                    'dropdown_pin': dropdown_pin,
                });
            } else {
                Blockly.Arduino.setups_['setup_button_' + dropdown_pin] = JST['bq_button_setups']({
                    'dropdown_pin': dropdown_pin,
                });
            }
            code += JST['bq_button']({
                'dropdown_pin': dropdown_pin,
            });
            // console.log('code',code);
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        /**
         * bq_button block definition
         * @type {Object}
         */
        Blockly.Blocks.bq_button = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_BQ'),
            tags: ['bq', 'botón'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_button',
            /**
             * bq_button initialization
             **/
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_BQ);
                this.appendValueInput('PIN').appendField(RoboBlocks.locales.getKey('LANG_BQ_BUTTON')).appendField(new Blockly.FieldImage('img/blocks/bqmod05.png', 212 * options.zoom, 139 * options.zoom)).setCheck(Number).appendField(RoboBlocks.locales.getKey('LANG_BQ_BUTTON_PIN')).setAlign(Blockly.ALIGN_RIGHT);
                this.setOutput(true, Boolean);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_BUTTON_TOOLTIP'));
            }
        };
        // Source: src/blocks/bq_buttons/bq_buttons.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * bq_buttons code generation
         * @return {String} Code generated with block parameters
         */


        Blockly.Arduino.bq_buttons = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
            var code_btn1 = Blockly.Arduino.statementToCode(this, 'BUTN1');
            var code_btn2 = Blockly.Arduino.statementToCode(this, 'BUTN2');
            var code_btn3 = Blockly.Arduino.statementToCode(this, 'BUTN3');
            var code_btn4 = Blockly.Arduino.statementToCode(this, 'BUTN4');
            var code_btn5 = Blockly.Arduino.statementToCode(this, 'BUTN5');

            var code = '';
            var a = RoboBlocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];


            code_btn1 = code_btn1.replace(/&quot;/g, '"');
            code_btn2 = code_btn2.replace(/&quot;/g, '"');
            code_btn3 = code_btn3.replace(/&quot;/g, '"');
            code_btn4 = code_btn4.replace(/&quot;/g, '"');
            code_btn5 = code_btn5.replace(/&quot;/g, '"');

            // code_btn1=code_btn1.replace(/&amp;/g,'');
            // code_btn2=code_btn2.replace(/&amp;/g,'');
            // code_btn3=code_btn3.replace(/&amp;/g,'');
            // code_btn4=code_btn4.replace(/&amp;/g,'');
            // code_btn5=code_btn5.replace(/&amp;/g,'');

            Blockly.Arduino.definitions_['declare_var_define_buttons' + dropdown_pin] = JST['bq_buttons_definitions_variables']({});
            Blockly.Arduino.definitions_['define_buttons' + dropdown_pin] = JST['bq_buttons_definitions']({
                'dropdown_pin': dropdown_pin
            });


            code += JST['bq_buttons']({
                'dropdown_pin': dropdown_pin,
                'code_btn1': code_btn1,
                'code_btn2': code_btn2,
                'code_btn3': code_btn3,
                'code_btn4': code_btn4,
                'code_btn5': code_btn5
            });

            return code;
        };

        /**
         * bq_buttons block definition
         * @type {Object}
         */
        Blockly.Blocks.bq_buttons = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_BQ'),
            tags: ['bq', 'botones'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_buttons',
            /**
             * bq_buttons initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_BQ);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_BUTTONS'))
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod10.png', 336 * options.zoom, 176 * options.zoom))
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_BUTTONS_PIN'))
                    .setCheck(Number);
                this.appendStatementInput('BUTN1')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_BUTTONS_BUTTON_A'));
                this.appendStatementInput('BUTN2')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_BUTTONS_BUTTON_B'));
                this.appendStatementInput('BUTN3')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_BUTTONS_BUTTON_C'));
                this.appendStatementInput('BUTN4')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_BUTTONS_BUTTON_D'));
                this.appendStatementInput('BUTN5')
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_BUTTONS_BUTTON_E'));
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_BUTTONS_TOOLTIP'));
            }
        };

        // Source: src/blocks/bq_infrared/bq_infrared.js
        /* global Blockly, options,  JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * bq_infrared code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.bq_infrared = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
            var code = '';
            var a = RoboBlocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];

            if (RoboBlocks.isVariable(dropdown_pin)) {
                code += JST['bq_infrared_setups']({
                    'dropdown_pin': dropdown_pin
                });
            } else {
                Blockly.Arduino.setups_['setup_infrared_' + dropdown_pin] = JST['bq_infrared_setups']({
                    'dropdown_pin': dropdown_pin
                });
            }
            code += JST['bq_infrared']({
                'dropdown_pin': dropdown_pin
            });
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        /**
         * bq_infrared block definition
         * @type {Object}
         */
        Blockly.Blocks.bq_infrared = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_BQ'),
            tags: ['bq', 'sensor infrarrojo'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_infrared',
            /**
             * bq_infrared initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_BQ);
                this.appendValueInput('PIN').appendField(RoboBlocks.locales.getKey('LANG_BQ_INFRARED')).appendField(new Blockly.FieldImage('img/blocks/bqmod04.png', 208 * options.zoom, 126 * options.zoom)).appendField(RoboBlocks.locales.getKey('LANG_BQ_INFRARED_PIN')).setCheck(Number);
                this.setOutput(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_INFRARED_TOOLTIP'));
            }
        };
        // Source: src/blocks/bq_joystick/bq_joystick.js
        /* global Blockly, options,JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * bq_joystick code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.bq_joystick = function() {
            var pinx = Blockly.Arduino.valueToCode(this, 'PINX', Blockly.Arduino.ORDER_ATOMIC);
            var piny = Blockly.Arduino.valueToCode(this, 'PINY', Blockly.Arduino.ORDER_ATOMIC);
            var pinbutton = Blockly.Arduino.valueToCode(this, 'PINBUTTON', Blockly.Arduino.ORDER_ATOMIC);
            var code = '';

            var a = RoboBlocks.findPinMode(pinx);
            code += a['code'];
            pinx = a['pin'];

            a = RoboBlocks.findPinMode(piny);
            code += a['code'];
            piny = a['pin'];

            a = RoboBlocks.findPinMode(pinbutton);
            code += a['code'];
            pinbutton = a['pin'];


            var name = pinx.substring(0, 3) + '_' + piny.substring(0, 3);

            Blockly.Arduino.definitions_['declare_var_internal_readJoystick_array_' + pinx] = 'int _internal_readJoystick_array_' + name + '[3];\n';
            Blockly.Arduino.definitions_['define_joystick' + pinx] = JST['bq_joystick_definitions']({
                'name': name,
                'pinx': pinx,
                'piny': piny,
                'pinbutton': pinbutton
            });
            if (RoboBlocks.isVariable(pinbutton)) {
                code += JST['bq_joystick_setups']({
                    'pinbutton': pinbutton
                });
            } else {
                Blockly.Arduino.setups_['setup_joystick_' + pinbutton] = JST['bq_joystick_setups']({
                    'pinbutton': pinbutton
                });
            }
            var array = Blockly.Arduino.valueToCode(this, 'POS', Blockly.Arduino.ORDER_ATOMIC);
            code += JST['bq_joystick']({
                'name': name,
                'pinx': pinx,
                'array': array
            });
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        /**
         * bq_joystick block definition
         * @type {Object}
         */
        Blockly.Blocks.bq_joystick = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_BQ'),
            tags: ['bq', 'joystick'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_joystick',
            /**
             * bq_joystick initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_BQ);
                this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_BQ_JOYSTICK')).appendField(new Blockly.FieldImage('img/blocks/bqmod11.png', 209 * options.zoom, 277 * options.zoom));
                // this.appendValueInput('POS')
                //     .appendField(RoboBlocks.locales.getKey('LANG_BQ_JOYSTICK_POSITION'))
                //     .setAlign(Blockly.ALIGN_RIGHT)
                //     .setCheck(Number);
                this.appendValueInput('PINX').appendField(RoboBlocks.locales.getKey('LANG_BQ_JOYSTICK_PIN_X')).setAlign(Blockly.ALIGN_RIGHT).setCheck(Number);
                this.appendValueInput('PINY').appendField(RoboBlocks.locales.getKey('LANG_BQ_JOYSTICK_PIN_Y')).setAlign(Blockly.ALIGN_RIGHT).setCheck(Number);
                this.appendValueInput('PINBUTTON').appendField(RoboBlocks.locales.getKey('LANG_BQ_JOYSTICK_PIN_BUTTON')).setAlign(Blockly.ALIGN_RIGHT).setCheck(Number);
                this.setOutput(true, Number);
                // this.setPreviousStatement(true, null);
                // this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_JOYSTICK_TOOLTIP'));
            }
        };
        // Source: src/blocks/bq_led/bq_led.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * bq_led code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.bq_led = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
            var dropdown_stat = this.getFieldValue('STAT');
            var code = '';

            var a = RoboBlocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];

            if (RoboBlocks.isVariable(dropdown_pin)) {
                code += JST['bq_led_setups']({
                    'dropdown_pin': dropdown_pin,
                    'dropdown_stat': dropdown_stat
                });
            } else {
                Blockly.Arduino.setups_['setup_green_led_' + dropdown_pin] = JST['bq_led_setups']({
                    'dropdown_pin': dropdown_pin,
                    'dropdown_stat': dropdown_stat
                });
            }
            code += JST['bq_led']({
                'dropdown_pin': dropdown_pin,
                'dropdown_stat': dropdown_stat
            });
            return code;
        };
        /**
         * bq_led block definition
         * @type {Object}
         */
        Blockly.Blocks.bq_led = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_BQ'),
            tags: ['bq', 'led'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_led',
            /**
             * bq_led initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_BQ);
                this.appendValueInput('PIN').appendField(RoboBlocks.locales.getKey('LANG_BQ_LED')).appendField(new Blockly.FieldImage('img/blocks/bqmod02.png', 208 * options.zoom, 140 * options.zoom)).appendField(RoboBlocks.locales.getKey('LANG_BQ_LED_PIN')).setCheck(Number);
                this.appendDummyInput('').appendField(RoboBlocks.locales.getKey('LANG_BQ_LED_STATE')).appendField(new Blockly.FieldDropdown([
                    [RoboBlocks.locales.getKey('LANG_BQ_LED_ON') || 'ON', 'HIGH'],
                    [RoboBlocks.locales.getKey('LANG_BQ_LED_OFF') || 'OFF', 'LOW']
                ]), 'STAT').setAlign(Blockly.ALIGN_RIGHT);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_LED_TOOLTIP'));
            }
        };
        // Source: src/blocks/bq_photoresistor/bq_photoresistor.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * bq_photoresistor code generation
         * @return {String} Code generated with block parameters
         */
        //        var code = 'analogRead(' + dropdown_pin + ')';
        Blockly.Arduino.bq_photoresistor = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
            var code = '';
            var a = RoboBlocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];

            code += JST['bq_photoresistor']({
                'dropdown_pin': dropdown_pin
            });

            //  code=code.substring(0,code.length-1);
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };


        /**
         * bq_photoresistor block definition
         * @type {Object}
         */
        Blockly.Blocks.bq_photoresistor = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_BQ'),
            tags: ['bq', 'fotorresistencia'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_photoresistor',
            /**
             * bq_photoresistor initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_BQ);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_PHOTORESISTOR'))
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod01.png', 208 * options.zoom, 140 * options.zoom))
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_PHOTORESISTOR_PIN'))
                    .setCheck(Number);
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_PHOTORESISTOR_TOOLTIP'));
            }
        };

        // Source: src/blocks/bq_piezo_buzzer/bq_piezo_buzzer.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * bq_piezo_buzzer code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.bq_piezo_buzzer = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '';
            var dropdown_stat = this.getFieldValue('STAT') || '';
            var delay_time = Blockly.Arduino.valueToCode(this, 'DURA', Blockly.Arduino.ORDER_ATOMIC) || '';
            var code = '';
            var a = RoboBlocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];

            a = RoboBlocks.findPinMode(delay_time);
            code += a['code'];
            delay_time = a['pin'];


            code += JST['bq_piezo_buzzer']({
                'dropdown_pin': dropdown_pin,
                'dropdown_stat': dropdown_stat,
                'delay_time': delay_time
            });

            return code;
        };


        /**
         * bq_piezo_buzzer block definition
         * @type {Object}
         */
        Blockly.Blocks.bq_piezo_buzzer = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_BQ'),
            tags: ['bq', 'zumbador'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_piezo_buzzer',
            /**
             * bq_piezo_buzzer initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_BQ);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER'))
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod07.png', 208 * options.zoom, 140 * options.zoom));
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER_PIN'))
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT);

                this.appendDummyInput('')
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER_TONE'))
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER_DO') || 'DO', '261'],
                        [RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER_RE') || 'RE', '293'],
                        [RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER_MI') || 'MI', '329'],
                        [RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER_FA') || 'FA', '349'],
                        [RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER_SOL') || 'SOL', '392'],
                        [RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER_LA') || 'LA', '440'],
                        [RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER_SI') || 'SI', '494']
                    ]), 'STAT') //523
                    .setAlign(Blockly.ALIGN_RIGHT);

                this.appendValueInput('DURA', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER_DURATION'));

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZER_TOOLTIP'));
            }
        };


        // Source: src/blocks/bq_piezo_buzzerav/bq_piezo_buzzerav.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * bq_piezo_buzzerav code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.bq_piezo_buzzerav = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
            var Buzztone = Blockly.Arduino.valueToCode(this, 'TONE', Blockly.Arduino.ORDER_ATOMIC);
            var delay_time = Blockly.Arduino.valueToCode(this, 'DURA', Blockly.Arduino.ORDER_ATOMIC);
            var code = '';
            var a = RoboBlocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];

            a = RoboBlocks.findPinMode(delay_time);
            code += a['code'];
            delay_time = a['pin'];

            a = RoboBlocks.findPinMode(Buzztone);
            code += a['code'];
            Buzztone = a['pin'];


            code += JST['bq_piezo_buzzerav']({
                'dropdown_pin': dropdown_pin,
                'Buzztone': Buzztone,
                'delay_time': delay_time
            });

            return code;
        };


        /**
         * bq_piezo_buzzerav block definition
         * @type {Object}
         */
        Blockly.Blocks.bq_piezo_buzzerav = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_BQ'),
            tags: ['bq', 'zumbador avanzado'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_piezo_buzzerav',
            /**
             * bq_piezo_buzzerav initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_BQ);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZERAV'))
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod08.png', 208 * options.zoom, 140 * options.zoom))
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZERAV_PIN'))
                    .setCheck(Number);

                this.appendValueInput('TONE', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZERAV_TONE'));

                this.appendValueInput('DURA', Number)
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZERAV_DURATION'));

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_PIEZO_BUZZERAV_TOOLTIP'));
            }
        };

        // Source: src/blocks/bq_potentiometer/bq_potentiometer.js
        /* global Blockly, options,JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * bq_potentiometer code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.bq_potentiometer = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
            var code = '';
            var a = RoboBlocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];

            code += JST['bq_potentiometer']({
                'dropdown_pin': dropdown_pin
            });

            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * bq_potentiometer block definition
         * @type {Object}
         */
        Blockly.Blocks.bq_potentiometer = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_BQ'),
            tags: ['bq', 'potenciómetro'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bq_potentiometer',
            /**
             * bq_potentiometer initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_BQ);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_POTENTIOMETER'))
                    .appendField(new Blockly.FieldImage('img/blocks/bqmod06.png', 208 * options.zoom, 139 * options.zoom))
                    .appendField(RoboBlocks.locales.getKey('LANG_BQ_POTENTIOMETER_PIN'))
                    .setCheck(Number);
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_POTENTIOMETER_TOOLTIP'));
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/bt_serial_available',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/controls_flow_statements',
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

            var up = parseFloat(argument0) <= parseFloat(argument1);
            code += 'for (' + variable0 + ' = ' + argument0 + '; ' + variable0 + (up ? ' <= ' : ' >= ') + argument1 + '; ' + variable0 + (up ? '++' : '--') + ') {\n' + branch + '}\n';
            return code;
        };
        Blockly.Blocks.controls_for = {
            // For loop.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_CONTROLS'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/controls_for',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_CONTROL);
                this.appendValueInput('VAR').appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_WITH'));
                // .appendField(new Blockly.FieldVariable(' '), 'VAR');
                this.appendValueInput('FROM').setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_FROM'));
                this.appendValueInput('TO').setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_INPUT_TO'));
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
                    if (this.isVariable(Blockly.Arduino.valueToCode(this, 'FROM', Blockly.Arduino.ORDER_ATOMIC))) {
                        this.setWarningText(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_FROM_WARNING'));
                    } else if (this.isVariable(Blockly.Arduino.valueToCode(this, 'TO', Blockly.Arduino.ORDER_ATOMIC))) {
                        this.setWarningText(RoboBlocks.locales.getKey('LANG_CONTROLS_FOR_TO_WARNING'));
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
            tags: ['bq'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/controls_if',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/controls_switch',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/controls_whileUntil',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/inout_analog_read',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/inout_analog_write',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/inout_builtin_led',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/inout_digital_read',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/inout_digital_write',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/inout_highlow',
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
            tags: ['bq', 'bluetooth'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/lcd_clear',
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
        /* global Blockly, JST, options, RoboBlocks */
        /* jshint sub:true */

        /**
         * lcd_def code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.lcd_def = function() {
            Blockly.Arduino.definitions_['define_lcd'] = JST['lcd_def_definitions']({});
            Blockly.Arduino.definitions_['declare_var_LCD'] = 'LiquidCrystal lcd(0);\n';

            Blockly.Arduino.setups_['setup_lcd_'] = JST['lcd_def_setups']({});
            return '';
        };

        /**
         * lcd_def block definition
         * @type {Object}
         */
        Blockly.Blocks.lcd_def = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_LCD'),
            tags: ['bq', 'lcd'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/lcd_def',
            /**
             * lcd_slave initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_LCD);
                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_LCD_DEF'))
                    .appendField(new Blockly.FieldImage('img/blocks/lcd.png', 208 * options.zoom, 100 * options.zoom));

                this.appendDummyInput()
                    .appendField(RoboBlocks.locales.getKey('LANG_LCD_PINS'));


                this.setInputsInline(false);

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_LCD_DEF_TOOLTIP'));
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
            tags: ['bq', 'bluetooth'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/lcd_print',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/lcd_setBacklight',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/logic_boolean',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/logic_compare',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/logic_negate',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/logic_operation',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/math_arithmetic',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/math_array',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/math_modulo',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/math_number',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/math_random',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/math_single',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/pin',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/pin',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/procedures_callnoreturn',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/procedures_callreturn',
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
            code = Blockly.Arduino.scrub_(this, code);
            Blockly.Arduino.definitions_[funcName] = code;
            return null;
        };
        Blockly.Blocks.procedures_defnoreturn = {
            // Define a procedure with no return value.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_PROCEDURES'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/procedures_defnoreturn',
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
                    ['int', 'int'],
                    ['String', 'String']
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
            // branch=branch.replace(/&amp;/g, '');

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
            code = Blockly.Arduino.scrub_(this, code);
            Blockly.Arduino.definitions_[funcName] = code;
            return null;
        };
        Blockly.Blocks.procedures_defreturn = {
            // Define a procedure with a return value.
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_PROCEDURES'), // Procedures are handled specially.
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/procedures_defreturn',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/procedures_ifreturn',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/serial_available',
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
            Blockly.Arduino.setups_['setup_serial_print'] = JST['serial_print_setups']({
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/serial_print',
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
            Blockly.Arduino.setups_['setup_serial_println'] = JST['serial_println_setups']({
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/serial_println',
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
        // Source: src/blocks/serial_read/serial_read.js
        /* global Blockly, profiles, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * serial_read code generation
         * @return {String} Code generated with block parameters
         */

        Blockly.Arduino.serial_read = function() {

            Blockly.Arduino.setups_['setup_serial_read'] = JST['serial_read_setups']({
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/serial_read',
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

        // Source: src/blocks/serial_special/serial_special.js
        /* global Blockly, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * serial_special code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.serial_special = function() {
            var char = this.getFieldValue('CHAR');
            var code = JST['serial_special']({
                'char': char
            });
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * serial_special block definition
         * @type {Object}
         */
        Blockly.Blocks.serial_special = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_COMMUNICATION'),
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/serial_special',
            /**
             * serial_special initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
                this.appendDummyInput('')
                    .appendField(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_SPECIAL'))
                    .appendField(new Blockly.FieldDropdown([
                        [RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_SPECIAL_TAB') || 'TAB', '\\t'],
                        [RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_SPECIAL_CARRIAGE_RETURN') || 'CARRIAGE RETURN', '\\r'],
                        [RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_SPECIAL_LINE_FEED') || 'LINE FEED', '\\n']
                    ]), 'CHAR');
                this.setOutput(true, String);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ADVANCED_SERIAL_SPECIAL_TOOLTIP'));
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
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_SERVO'),
            tags: ['servo'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/servo_cont',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_SERVO);
                this.appendValueInput('PIN').appendField(RoboBlocks.locales.getKey('LANG_SERVO_CONT')).appendField(new Blockly.FieldImage('img/blocks/bqservo03.png', 208 * options.zoom, 126 * options.zoom)).appendField(RoboBlocks.locales.getKey('LANG_SERVO_CONT_PIN')).setCheck(Number);
                this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_SERVO_CONT_ROT')).setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown([
                    [RoboBlocks.locales.getKey('LANG_SERVO_CONT_TURN_CLOCKWISE') || 'CLOCKWISE', '0'],
                    [RoboBlocks.locales.getKey('LANG_SERVO_CONT_TURN_COUNTERCLOCKWISE') || 'ANTICLOCKWISE', '180'],
                    [RoboBlocks.locales.getKey('LANG_SERVO_CONT_STOPPED') || 'STOPPED', '90']
                ]), 'ROT');
                this.appendValueInput('DELAY_TIME', Number).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(RoboBlocks.locales.getKey('LANG_SERVO_CONT_DELAY'));
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_SERVO_CONT_TOOLTIP'));
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
                //         this.setWarningText(RoboBlocks.locales.getKey('LANG_SERVO_WARNING'));
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
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_SERVO'),
            tags: ['servo'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/servo_move',
            /**
             * servo_move initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_SERVO);
                this.appendValueInput('PIN').appendField(RoboBlocks.locales.getKey('LANG_SERVO_MOVE')).appendField(new Blockly.FieldImage('img/blocks/bqservo01.png', 208 * options.zoom, 126 * options.zoom)).appendField(RoboBlocks.locales.getKey('LANG_SERVO_MOVE_PIN')).setCheck(Number);
                this.appendValueInput('DEGREE', Number).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(RoboBlocks.locales.getKey('LANG_SERVO_MOVE_DEGREES'));
                this.appendValueInput('DELAY_TIME', Number).setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(RoboBlocks.locales.getKey('LANG_SERVO_MOVE_DELAY'));
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_SERVO_MOVE_TOOLTIP'));
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
                //         this.setWarningText(RoboBlocks.locales.getKey('LANG_SERVO_WARNING'));
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/text',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/text_append',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_TEXT);
                this.appendValueInput('VAR')
                    // .appendField(new Blockly.FieldVariable(' '), 'VAR')
                    .appendField(RoboBlocks.locales.getKey('LANG_TEXT_APPEND_TO'));
                this.appendValueInput('TEXT').appendField(RoboBlocks.locales.getKey('LANG_TEXT_APPEND_APPENDTEXT'));
                this.setPreviousStatement(true);
                this.setNextStatement(true);
                this.setInputsInline(true);
                // Assign 'this' to a variable for use in the tooltip closure below.
                var thisBlock = this;
                this.setTooltip(function() {
                    return RoboBlocks.LANG_TEXT_APPEND_TOOLTIP.replace('%1', thisBlock.getFieldValue('VAR'));
                });
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/text_equalsIgnoreCase',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/text_join',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/text_length',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/text_substring',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/variables_get',
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
                Blockly.Arduino.definitions_['declare_var' + varName] = varType + varName + ';\n';
                Blockly.Arduino.setups_['define_var' + varName] = varName + '[0]=' + varValue[0] + ';\n  ' + varName + '[1]=' + varValue[1] + ';\n  ' + varName + '[2]=' + varValue[2] + ';\n';
            } else if (this.isVariable(varValue)) {
                varType = RoboBlocks.variables[varValue][0];
                Blockly.Arduino.definitions_['declare_var' + varName] = varType + ' ' + varName + ';\n';
                Blockly.Arduino.setups_['define_var' + varName] = varName + '=' + varValue + ';\n';
            } else if (varValue.search('readJoystick') >= 0) {
                varType = 'int *';
                Blockly.Arduino.definitions_['declare_var' + varName] = varType + varName + ';\n';
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/variables_global',
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_VARIABLES);
                this.appendValueInput('VALUE').appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_GLOBAL')).appendField(new Blockly.FieldTextInput(''), 'VAR').appendField(RoboBlocks.locales.getKey('LANG_VARIABLES_GLOBAL_EQUALS'));
                this.setInputsInline(false);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
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
                code += varType + varName + ';\n';
                code += varName + '[0]=' + varValue[0] + ';\n' + varName + '[1]=' + varValue[1] + ';\n' + varName + '[2]=' + varValue[2] + ';\n';
            } else if (this.isVariable(varValue)) {
                varType = RoboBlocks.variables[varValue][0];
                code += varType + ' ' + varName + '=' + varValue + ';\n';
            } else if (varValue.search('readJoystick') >= 0) {
                varType = 'int *';
                code += varType + varName + ';\n';
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/variable',
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
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/variables_set',
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
        // Source: src/blocks/zum_button/zum_button.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * zum_button code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.zum_button = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
            var code = '';
            var a = RoboBlocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];
            if (RoboBlocks.isVariable(dropdown_pin)) {
                code += JST['zum_button_setups']({
                    'dropdown_pin': dropdown_pin,
                });
            } else {
                Blockly.Arduino.setups_['setup_button_' + dropdown_pin] = JST['zum_button_setups']({
                    'dropdown_pin': dropdown_pin,
                });
            }
            code += JST['zum_button']({
                'dropdown_pin': dropdown_pin,
            });
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        /**
         * zum_button block definition
         * @type {Object}
         */
        Blockly.Blocks.zum_button = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ZUM'),
            tags: ['bq', 'botón'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/zum_button',
            /**
             * zum_button initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
                this.appendValueInput('PIN').appendField(RoboBlocks.locales.getKey('LANG_ZUM_BUTTON')).appendField(new Blockly.FieldImage('img/blocks/zum02.png', 212 * options.zoom, 139 * options.zoom)).appendField(RoboBlocks.locales.getKey('LANG_ZUM_BUTTON_PIN'));
                this.setOutput(true, Boolean);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ZUM_BUTTON_TOOLTIP'));
            }
        };
        // Source: src/blocks/zum_follower/zum_follower.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * zum_follower code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.zum_follower = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '';
            var NextPIN = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC) || '';
            var code_btn1 = Blockly.Arduino.statementToCode(this, 'SENS1');
            code_btn1 = code_btn1.replace(/&quot;/g, '"');
            // code_btn1=code_btn1.replace(/&amp;/g,'');
            var code_btn2 = Blockly.Arduino.statementToCode(this, 'SENS2');
            code_btn2 = code_btn2.replace(/&quot;/g, '"');
            // code_btn2=code_btn2.replace(/&amp;/g,'');
            var code = '';
            var a = RoboBlocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];
            var b = RoboBlocks.findPinMode(NextPIN);
            code += b['code'];
            NextPIN = b['pin'];
            if (RoboBlocks.isVariable(dropdown_pin)) {
                code += JST['zum_follower_setups_pin']({
                    'dropdown_pin': dropdown_pin
                });
            } else {
                Blockly.Arduino.setups_['setup_follower_1_' + dropdown_pin] = JST['zum_follower_setups_pin']({
                    'dropdown_pin': dropdown_pin
                });
            }
            if (RoboBlocks.isVariable(NextPIN)) {
                code += JST['zum_follower_setups_nextpin']({
                    'NextPIN': NextPIN
                });
            } else {
                Blockly.Arduino.setups_['setup_follower_2_' + NextPIN] = JST['zum_follower_setups_nextpin']({
                    'NextPIN': NextPIN
                });
            }
            code += JST['zum_follower']({
                'dropdown_pin': dropdown_pin,
                'NextPIN': NextPIN,
                'code_btn1': code_btn1,
                'code_btn2': code_btn2
            });
            return code;
        };
        /**
         * zum_follower block definition
         * @type {Object}
         */
        Blockly.Blocks.zum_follower = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ZUM'),
            tags: ['bq', 'sensor infrarrojo'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/zum_follower',
            /**
             * zum_follower initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
                this.appendDummyInput('').appendField(RoboBlocks.locales.getKey('LANG_ZUM_FOLLOWER')).appendField(new Blockly.FieldImage('img/blocks/zum06.png', 203 * options.zoom, 165 * options.zoom));
                this.appendValueInput('PIN').setAlign(Blockly.ALIGN_RIGHT).appendField(RoboBlocks.locales.getKey('LANG_ZUM_FOLLOWER_PIN_LEFT'));
                this.appendValueInput('PIN2').setAlign(Blockly.ALIGN_RIGHT).appendField(RoboBlocks.locales.getKey('LANG_ZUM_FOLLOWER_PIN_RIGHT'));
                this.appendStatementInput('SENS1').setAlign(Blockly.ALIGN_RIGHT).appendField(RoboBlocks.locales.getKey('LANG_ZUM_FOLLOWER_LEFT'));
                this.appendStatementInput('SENS2').setAlign(Blockly.ALIGN_RIGHT).appendField(RoboBlocks.locales.getKey('LANG_ZUM_FOLLOWER_RIGHT'));
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ZUM_FOLLOWER_TOOLTIP'));
            }
        };
        // Source: src/blocks/zum_infrared/zum_infrared.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * zum_infrared code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.zum_infrared = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '';
            var code = '';
            var a = RoboBlocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];
            if (RoboBlocks.isVariable(dropdown_pin)) {
                code += JST['zum_infrared_setups']({
                    'dropdown_pin': dropdown_pin
                });
            } else {
                Blockly.Arduino.setups_['setup_infrared_' + dropdown_pin] = JST['zum_infrared_setups']({
                    'dropdown_pin': dropdown_pin
                });
            }
            code += JST['zum_infrared']({
                'dropdown_pin': dropdown_pin
            });
            //  code=code.substring(0,code.length-1);
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };
        /**
         * zum_infrared block definition
         * @type {Object}
         */
        Blockly.Blocks.zum_infrared = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ZUM'),
            tags: ['bq', 'sensor infrarrojo'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/zum_infrared',
            /**
             * zum_infrared initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
                this.appendValueInput('PIN').appendField(RoboBlocks.locales.getKey('LANG_ZUM_INFRARED')).appendField(new Blockly.FieldImage('img/blocks/zum07.png', 208 * options.zoom, 126 * options.zoom)).appendField(RoboBlocks.locales.getKey('LANG_ZUM_INFRARED_PIN'));
                this.setOutput(true);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ZUM_INFRARED_TOOLTIP'));
            }
        };
        // Source: src/blocks/zum_led/zum_led.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */
        /**
         * zum_led code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.zum_led = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '';
            var dropdown_stat = this.getFieldValue('STAT');
            var code = '';
            var a = RoboBlocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];
            if (RoboBlocks.isVariable(dropdown_pin)) {
                code += JST['zum_led_setups']({
                    'dropdown_pin': dropdown_pin,
                    'dropdown_stat': dropdown_stat
                });
            } else {
                Blockly.Arduino.setups_['setup_green_led_' + dropdown_pin] = JST['zum_led_setups']({
                    'dropdown_pin': dropdown_pin,
                    'dropdown_stat': dropdown_stat
                });
            }
            code += JST['zum_led']({
                'dropdown_pin': dropdown_pin,
                'dropdown_stat': dropdown_stat
            });
            return code;
        };
        /**
         * zum_led block definition
         * @type {Object}
         */
        Blockly.Blocks.zum_led = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ZUM'),
            tags: ['bq', 'led'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/zum_led',
            /**
             * zum_led initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
                this.appendValueInput('PIN').appendField(RoboBlocks.locales.getKey('LANG_ZUM_LED')).appendField(new Blockly.FieldImage('img/blocks/zum04.png', 208 * options.zoom, 140 * options.zoom)).appendField(RoboBlocks.locales.getKey('LANG_ZUM_LED_PIN'));
                this.appendDummyInput().appendField(RoboBlocks.locales.getKey('LANG_ZUM_LED_STATE')).setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown([
                    [RoboBlocks.locales.getKey('LANG_ZUM_LED_ON') || 'ON', 'HIGH'],
                    [RoboBlocks.locales.getKey('LANG_ZUM_LED_OFF') || 'OFF', 'LOW']
                ]), 'STAT');
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ZUM_LED_TOOLTIP'));
            }
        };
        // Source: src/blocks/zum_photoresistor/zum_photoresistor.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * zum_photoresistor code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.zum_photoresistor = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '';
            var code = '';
            var a = RoboBlocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];


            code += JST['zum_photoresistor']({
                'dropdown_pin': dropdown_pin
            });

            //  code=code.substring(0,code.length-1);
            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };


        /**
         * zum_photoresistor block definition
         * @type {Object}
         */
        Blockly.Blocks.zum_photoresistor = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ZUM'),
            tags: ['bq', 'fotorresistencia'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/zum_photoresistor',
            /**
             * zum_photoresistor initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_PHOTORESISTOR'))
                    .appendField(new Blockly.FieldImage('img/blocks/zum05.png', 208 * options.zoom, 126 * options.zoom))
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_PHOTORESISTOR_PIN'));
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ZUM_PHOTORESISTOR_TOOLTIP'));
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
            tags: ['bq', 'zumbador'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/zum_piezo_buzzer',
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
            tags: ['bq', 'zumbador avanzado'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/zum_piezo_buzzerav',
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

        // Source: src/blocks/zum_potentiometer/zum_potentiometer.js
        /* global Blockly, options, JST, RoboBlocks */
        /* jshint sub:true */

        /**
         * zum_potentiometer code generation
         * @return {String} Code generated with block parameters
         */
        Blockly.Arduino.zum_potentiometer = function() {
            var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '';
            var code = '';
            var a = RoboBlocks.findPinMode(dropdown_pin);
            code += a['code'];
            dropdown_pin = a['pin'];

            code += JST['zum_potentiometer']({
                'dropdown_pin': dropdown_pin
            });

            return [code, Blockly.Arduino.ORDER_ATOMIC];
        };

        /**
         * zum_potentiometer block definition
         * @type {Object}
         */
        Blockly.Blocks.zum_potentiometer = {
            category: RoboBlocks.locales.getKey('LANG_CATEGORY_ZUM'),
            tags: ['bq', 'potenciómetro'],
            helpUrl: RoboBlocks.GITHUB_SRC_URL + 'blocks/zum_potentiometer',
            /**
             * zum_potentiometer initialization
             */
            init: function() {
                this.setColour(RoboBlocks.LANG_COLOUR_ZUM);
                this.appendValueInput('PIN')
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_POTENTIOMETER'))
                    .appendField(new Blockly.FieldImage('img/blocks/zum03.png', 208 * options.zoom, 139 * options.zoom))
                    .appendField(RoboBlocks.locales.getKey('LANG_ZUM_POTENTIOMETER_PIN'));
                this.setOutput(true, Number);
                this.setTooltip(RoboBlocks.locales.getKey('LANG_ZUM_POTENTIOMETER_TOOLTIP'));
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
