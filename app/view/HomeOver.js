Ext.define('app.view.HomeOver', {
    extend: 'Ext.Panel',
    xtype: 'homeovercard',

    config: {
        iconCls: 'home',
        title: 'Home',
        //style: 'background-color: gray',
        id:'homeover',
        styleHtmlContent: true,
        items: [{
            docked: 'top',
            xtype: 'toolbar',
            ui: "light",
            title: 'Over app',
            items: [
                {
                    xtype: "button",
                    ui: "back",
                    text: "Terug",
                     action: "ButtonBackToHomeClicked"
                }
            ]
            },
            {
                html: 'Dit is de home over pagina'
            }
        ]
    }
});