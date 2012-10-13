Ext.define('app.view.HomeMainCard', {
    extend: 'Ext.Panel',
    //alias: "widget.homePage",
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
//        {
//            docked: 'top',
//            xtype: 'toolbar',
//            title: 'Home',
//            items: [
//                {
//                    xtype: "spacer"
//                },
//                {
//                    xtype: "button",
//                    text:    'Reset',
//                    action: 'ButtonHomeResetClicked'
//                }
//            ]
//        }
            {xtype: 'homecard'},
            {xtype: 'homeovercard'},
            {xtype: 'homeresetcard'}


        ]
    }

});