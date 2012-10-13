Ext.define('app.view.Main', {
    extend:'Ext.TabPanel',
    xtype: 'maincard',

    requires: [
        'app.view.HomeMainCard'
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
            { xtype: 'homemaincard'}
        ]
    }
});
