Ext.define('app.view.PersoonMainCard', {
    extend: 'Ext.Panel',
    xtype: 'persoonmaincard',
    requires: [
        'app.view.Persoon',
        'app.view.PersoonToevoeg'
    ],

    config: {
        iconCls: 'user',
        title: 'Persoon',
        html: 'Dit is de persoon main pagina',
        styleHtmlContent: true,
        layout:{
            type:'card',
            animation:'slide'
        },
        id:'persoonmain_card',
        items: [
            {xtype: 'persooncard'},
            {xtype: 'persoontoevoegcard'}
        ]
    }
});