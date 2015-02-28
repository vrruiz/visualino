'use strict';
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
            this.defaultLanguage.lngCode=langCode;
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
