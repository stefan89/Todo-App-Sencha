Ext.define('app.view.TodoMainCard', {
    extend: 'Ext.Panel',
    xtype: 'todomaincard',
    requires: [
        'app.view.TodoHome',
        'app.view.TodoEditor',
        'app.view.TodoLijstAlle',
        'app.view.TodoLijstOnderhanden',
        'app.view.TodoLijstAfgehandeld',
        'app.view.TodoDetails'
    ],

    config: {
        iconCls: 'bookmarks',
        title: 'Todo',
        html: '...',
        styleHtmlContent: true,
        layout:{
            type:'card',
            animation:'slide'
        },
        id:'todomain_card',
        items: [
            {xtype: 'todohomecard'},
            {xtype: 'todoeditcard'},
            {xtype: 'todolijstallecard'},
            {xtype: 'todolijstonderhandencard'},
            {xtype: 'todolijstafgehandeldcard'},
            {xtype: 'tododetailscard'}
        ]
    }
});