Ext.define('app.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'homecard',

    config: {
        iconCls: 'home',
        title: 'Home',
        html: 'Dit is de home pagina',
        styleHtmlContent: true,
        layout:'card',
        id:'Home',
        items: [
        {
            docked: 'top',
            xtype: 'toolbar',
            title: 'Home',
            items: [
                {
                    xtype: "button",
                    text:    'Extra info',
                    action: 'ButtonHomeOverClicked'
                },
                {
                    xtype: "spacer"
                },
                {
                    xtype: "button",
                    text:    'Reset',
                    action: 'ButtonHomeResetClicked'
                }
            ]
        }
        ]
    }
});