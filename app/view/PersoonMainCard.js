Ext.define('app.view.PersoonMainCard', {
    extend: 'Ext.Panel',
    xtype: 'persoonmaincard',
    requires: [
        'app.view.PersoonEditor',
        'app.view.PersoonLijst',
        'app.view.PersoonDetails'
    ],

    config: {
        iconCls: 'user',
        title: 'Personen',
        html: '...',
        styleHtmlContent: true,
        layout:{
            type:'card',
            animation:'slide'
        },
        id:'persoonmain_card',
        items: [
            {xtype: 'persoonlijstcard'},
            {xtype: 'persooneditcard'},
            {xtype: 'persoondetailscard'}
        ]
    }
});