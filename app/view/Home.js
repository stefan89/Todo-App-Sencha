Ext.define('app.view.Home', {
    extend: 'Ext.Panel',
    //alias: "widget.homePage",
    xtype: 'homecard',
    requires: [
       // 'app.view.HomeReset'
    ],

    config: {
        iconCls: 'home',
        title: 'Home',
        html: 'Dit is de home pagina',
        styleHtmlContent: true,
        layout:'card',
        id:'Home',
        items: [
        {
            docked: 'top',
            xtype: 'toolbar',
            title: 'Home',
            items: [
                {
                    xtype: "button",
                    text:    'Over',
                    //handler:function(e){
                    //    console.log("huh");
                    //    Ext.getCmp('homemain_card').animateActiveItem(1,{type: 'slide', direction: 'left'});
                    //}
                    action: 'ButtonHomeOverClicked'

                },
                {
                    xtype: "spacer"
                },
                {
                    xtype: "button",
                    text:    'Reset',
                //    handler:function(e){
                 //        Ext.getCmp('homemain_card').animateActiveItem(2,{type: 'slide', direction: 'left'});
                  //  }
                   action: 'ButtonHomeResetClicked'
                }
            ]
        }
            //{xtype: 'homecard'},
            //{xtype: 'homeovercard'}

        ]
    }

});