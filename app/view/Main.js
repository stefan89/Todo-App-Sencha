Ext.define('app.view.Main', {
    extend:'Ext.TabPanel',
    xtype: 'maincard',

    requires: [
        'app.view.HomeMainCard',
        'app.view.PersoonMainCard'
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
            { xtype: 'persoonmaincard'}
        ]
    }
});
