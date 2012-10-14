Ext.define('app.view.PersoonToevoeg', {
    extend: 'Ext.Panel',
    xtype: 'persoontoevoegcard',

    config: {
        iconCls: 'user',
        title: 'Persoon toevoegen',
        html: 'Dit is de persoon toevoeg pagina',
        styleHtmlContent: true,
        style: 'background-color: orange',
        id:'PersoonToevoeg',
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                title: 'Personen',
                items: [
                    {
                        xtype: "button",
                        ui: "back",
                        text: "Terug",
                        action: "ButtonBackToPersoonClicked"
                    },
                    {
                        xtype: "spacer"
                    }
                ]
            }
        ]
    }
});