function startTests(cb, baseUrl = '') {    
    Ext.onReady(function () {
        Ext.Loader.setPath('MyApp', `${baseUrl}script/MyApp`);
        cb();
    });
}