Ext.define('MyApp.AdditionalDetailsPanel', {
    extend: 'Ext.Panel',
    defaultListenerScope: true,
    referenceHolder: true,

    fullscreen: true,
    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            items: [
                {
                    xtype: 'fieldset',
                    defaults: {
                        xtype: 'radiofield',
                        name: 'type',
                        listeners : {
                            check: '_handleRadio'
                        }
                    },
                    minWidth: '100px',
                    layout: 'vbox',
                    items: [
                        {
                            label: 'Text',
                            reference: 'text',
                            checked: true
                        }, {
                            label: 'Url',
                            reference: 'url'
                        }, {
                            label: 'Html',
                            reference: 'html'
                        }
                    ]
                }, {
                    xtype: 'textareafield',
                    value: '',
                    reference: 'textArea',
                    flex: 1
                }, {
                    xtype: 'button',
                    text: 'Submit',
                    reference: 'submit',
                    listeners: {
                        tap: '_submitPerformed'
                    }
                }
            ]
        }
    ],

    _errorMessage: '',

    _submitPerformed: function(field) {
        if (this._validateInput()) {
            alert('Additional Information Stored');
            this._redirectToBlank();
        } else {
            alert(this._errorMessage);
        }
    },

    _redirectToBlank: function() {
        location.href = 'about:blank';
    },

    _handleRadio: function() {
        this.lookupReference('textArea').setValue('');
    },

    _validateInput: function() {
        var body = this.lookupReference('textArea').getValue();
        if (this.lookupReference('text').isChecked())
            return this._validateText(body);
        if (this.lookupReference('url').isChecked())
            return this._validateUrl(body);
        if (this.lookupReference('html').isChecked())
            return this._validateHtml(body);
    },

    _validateHtml: function(body) {
        if (body.length < 10) {
            this._errorMessage = 'Html is not valid';
            return false;
        }

        return true;
    },

    _validateUrl: function(body) {
        try {
            new URL(body);
        } catch (exception) {
            this._errorMessage = exception.message;
            return false;
        }
        return true;
    },

    _validateText: function(body) {
        if (body.length < 10) {
            this._errorMessage = 'Text description too short';
            return false;
        }

        return true;
    }

});


