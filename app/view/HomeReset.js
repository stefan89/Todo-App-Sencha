Ext.define('app.view.HomeReset', {
    extend: 'Ext.Panel',
    xtype: 'homeresetcard',

    config: {
        iconCls: 'home',
        title: 'Home',
        html: 'Dit is de home reset pagina',
        style: 'background-color: lightblue',
        id:'homereset',
        styleHtmlContent: true,
        items: [{
            docked: 'top',
            xtype: 'toolbar',
            title: 'Reset pagina',
            items: [
                {
                    xtype: "button",
                    ui: "back",
                    text: "Terug",
                    action: 'ButtonBackToHomeClicked'
                }
            ]
            }
        ]
    }
});