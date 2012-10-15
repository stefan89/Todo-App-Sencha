Ext.define('app.view.PersoonMainCard', {
    extend: 'Ext.Panel',
    xtype: 'persoonmaincard',
    requires: [
        //'app.view.NotesList',
        'app.view.PersoonEditor',
        'app.view.PersoonLijst'
    ],

    config: {
        iconCls: 'user',
        title: 'Persoon',
        html: '...',
        styleHtmlContent: true,
        layout:{
            type:'card',
            animation:'slide'
        },
        id:'persoonmain_card',
        items: [
            {xtype: 'persoonlijstcard'},
            {xtype: 'persooneditcard'}


            //{xtype: 'noteeditor'}
           // {xtype: 'persoontoevoegcard'}
        ]
    }
});