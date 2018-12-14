describe( 'AdditionalDetailsPanel', () => {

    it( 'should do something', () => {
        var panel = Ext.create('MyApp.AdditionalDetailsPanel');        
        var submitButton = panel.lookup('submit');
        submitButton.fireEvent('tap', submitButton);
        expect(false).toBe(true);
    });


});