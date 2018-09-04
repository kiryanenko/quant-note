module.exports = new (require('i18n-2'))({
    // setup some locales - other locales default to the first locale
    locales: ['en', 'ru'],
    extension: '.json'
});
