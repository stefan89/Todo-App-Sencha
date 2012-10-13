Ext.define('app.view.HomeReset', {
    extend: 'Ext.Panel',
    //alias: "widget.homereset",
    xtype: 'homeresetcard',

    config: {
        iconCls: 'home',
        title: 'Home',
        html: 'Dit is de home reset pagina',
        style: 'background-color: lightblue',
        //layout:'card',
        id:'homereset',
        styleHtmlContent: true,
        items: [{
            docked: 'top',
            xtype: 'toolbar',
            title: 'Reset pagina',
            items: [
                {
                    xtype: "button",
                    ui: "back",
                    text: "Terug",
                  // action: "ButtonBackHome"
                    action: 'ButtonBackToHomeClicked'
                    //handler:function(){
                    //    Ext.getCmp('homemain_card').animateActiveItem(0,{type: 'slide', direction: 'right'});
                    //}
                }
            ]
            }//,
              // {
               //     docked: 'bottom',
               //     xtype: 'maincard'
              //  }
        ]
    }
});