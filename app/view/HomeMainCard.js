Ext.define('app.view.HomeMainCard', {
    extend: 'Ext.Panel',
    xtype: 'homemaincard',
    requires: [
        'app.view.Home',
        'app.view.HomeReset',
        'app.view.HomeOver'
    ],

    config: {
        iconCls: 'home',
        title: 'Home',
        html: 'Dit is de home main pagina',
        styleHtmlContent: true,
        layout:{
            type:'card',
            animation:'slide'
        },
        id:'homemain_card',
        items: [
            {xtype: 'homecard'},
            {xtype: 'homeovercard'},
            {xtype: 'homeresetcard'}
        ]
    }

});