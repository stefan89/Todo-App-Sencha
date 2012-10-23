Ext.define('app.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'homecard',

    config: {
        iconCls: 'home',
        title: 'Home',
        html: 'Dit is een mobiele app om een todo (taken) lijst bij te houden voor meerdere personen.',
        styleHtmlContent: true,
        layout:'card',
        id:'Home',
        items: [
        {
            docked: 'top',
            xtype: 'toolbar',
            ui: "light",
            title: 'Home',
            items: [
                {
                    xtype: "button",
                    text:    'Info',
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