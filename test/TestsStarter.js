window.__karma__.loaded = function() {};

Ext.onReady(function () {
    Ext.Loader.setPath('MyApp', 'base/script/MyApp');
    window.__karma__.start();
});