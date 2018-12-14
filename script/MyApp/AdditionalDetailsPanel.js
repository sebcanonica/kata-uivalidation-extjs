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
                    xtype: 'container',
                    defaults: {
                        xtype: 'radiofield',
                        name: 'type',
                        listeners : {
                            check: '_actionPerformed'
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
                        tap: '_actionPerformed'
                    }
                }
            ]
        }               
    ],

    _errorMessage: '',

    _actionPerformed: function(field) {
        if (field.getReference() == "submit") {
            if (this._handleSumbit()) {
                alert('Additional Information Stored');
                location.href = 'about:blank';
            } else {
                alert(this._errorMessage);
            }
        } else {
            this._handleRadio();
        }
    },

    _handleRadio: function() {
        this.lookupReference('textArea').setValue('');        
    },

    _handleSumbit: function() {
        if (this.lookupReference('text').isChecked())
            return this._validateText();
        if (this.lookupReference('url').isChecked())
            return this._validateUrl();
        if (this.lookupReference('html').isChecked())
            return this._validateHtml();
        this._errorMessage = 'No type selected';
        return false;
    },

    _validateHtml: function() {
        var body = this.lookupReference('textArea').getValue();

        if (body.length < 10) {
            this._errorMessage = 'Html is not valid';
            return false;
        }

        return true;
    },

    _validateUrl: function() {
        var body = this.lookupReference('textArea').getValue();
        try {        
            new URL(body);
        } catch (exception) {
            this._errorMessage = exception.message;
            return false;
        }
        return false;
    },

    _validateText: function() {
        var body = this.lookupReference('textArea').getValue();

        if (body.length < 10) {
            this._errorMessage = 'Text description too short';
            return false;
        }

        return true;
    }
    
});