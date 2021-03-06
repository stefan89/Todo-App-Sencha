Ext.define('app.view.HomeReset', {
    extend: 'Ext.Panel',
    xtype: 'homeresetcard',

    config: {
        iconCls: 'home',
        title: 'Home',
        id:'homereset',
        styleHtmlContent: true,
        items: [{
            docked: 'top',
            xtype: 'toolbar',
            ui: "light",
            title: 'Reset data',
            items: [
                {
                    xtype: "button",
                    ui: "back",
                    text: "Terug",
                    action: 'ButtonBackToHomeClicked'
                }]
            },
            {
                html:   '<p>Hier kunt u de app resetten naar de default instellingen.' +
                        '<p><b>Let op:</b> alle data zal worden verwijderd.</p>' +
                        '<p>'
            },
            {
                xtype: "button",
                height: '35px',
                ui: "action",
                text: "Reset app",
                action: "ButtonResetDataClicked"
            }
        ]
    }
});