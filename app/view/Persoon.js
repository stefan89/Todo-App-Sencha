Ext.define('app.view.Persoon', {
    extend: 'Ext.Panel',
    xtype: 'persooncard',

    config: {
        iconCls: 'user',
        title: 'Personen',
        html: 'Dit is de persoon pagina',
        styleHtmlContent: true,
        layout:'card',
        id:'Persoon',
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                title: 'Personen',
                items: [
                   {
                        xtype: "spacer"
                    },
                    {
                        xtype: "button",
                        ui: "action",
                        text:    'Nieuw',
                        action: 'ButtonOpenToevoegPaginaClicked'
                    }
                ]
            }
        ]
    }
});