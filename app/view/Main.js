Ext.define('app.view.Main', {
    extend:'Ext.TabPanel',
    xtype: 'maincard',
    requires: [
        'app.view.HomeMainCard',
        'app.view.PersoonMainCard',
        'app.view.TodoMainCard',
        'Ext.Anim'
    ],

    config: {
        id:'Main',
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },
        items: [
            { xtype: 'homemaincard'},
            { xtype: 'persoonmaincard'},
            { xtype: 'todomaincard'}
        ]
    }
});
