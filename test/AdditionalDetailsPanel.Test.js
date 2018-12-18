describe( 'AdditionalDetailsPanel', () => {

    let panel;
    beforeEach( () => {
        spyOn(window, 'alert');
        panel = Ext.create('MyApp.AdditionalDetailsPanel');
        spyOn(panel, '_redirectToBlank');
    });

    describe('Text type', ()=> {
        beforeEach( () => {
            checkRadio('text');
        })

        it( 'should alert text description too short when input text is less than 10 characters', () => {
            submit();
            expect(window.alert).toHaveBeenCalledWith('Text description too short');
        });

        it('should store a text with a length greater or equal than 10', () => {
            setText('1234567890');
            submit();
            expect(window.alert).toHaveBeenCalledWith('Additional Information Stored');
            expect(panel._redirectToBlank).toHaveBeenCalled();
        });
    });

    describe('Url type', ()=> {
        beforeEach( () => {
            checkRadio('url');
        })

        it( 'should store a valid url', () => {
            setText('http://example.com');
            submit();
            expect(window.alert).toHaveBeenCalledWith('Additional Information Stored');
            expect(panel._redirectToBlank).toHaveBeenCalled();
        });

        it( 'should not store an invalid url', () => {
            setText('://example');
            submit();
            expect(window.alert).toHaveBeenCalledWith('Failed to construct \'URL\': Invalid URL');
            expect(panel._redirectToBlank).not.toHaveBeenCalled();
        });
    });

    describe('Html type', ()=> {
        beforeEach( () => {
            checkRadio('html');
        })

        it( 'should store a valid html', () => {
            setText('1234567890');
            submit();
            expect(window.alert).toHaveBeenCalledWith('Additional Information Stored');
            expect(panel._redirectToBlank).toHaveBeenCalled();
        });

        it( 'should not store an invalid html', () => {
            setText('example');
            submit();
            expect(window.alert).toHaveBeenCalledWith('Html is not valid');
            expect(panel._redirectToBlank).not.toHaveBeenCalled();
        });
    });

    function submit() {
        var submitButton = panel.lookup('submit');
        submitButton.fireEvent('tap', submitButton);
    }

    function setText(value) {
        var textArea = panel.lookup('textArea');
        textArea.setValue(value);
    }

    function checkRadio(reference) {
        var radioButton = panel.lookup(reference);
        radioButton.setChecked(true);
    }
});


