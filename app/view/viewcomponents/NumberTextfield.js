Ext.define('app.view.viewcomponents.NumberTextfield', {
        extend : 'Ext.field.Text',
        xtype  : 'numtextfield',

        initialize: function() {
            var me    = this,
                input = me.getInput().element.down('input');

            input.set({
                pattern : '[0-9]*'
            });

            me.callParent(arguments);
        }
    });