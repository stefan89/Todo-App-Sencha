Ext.define('app.view.HomeOver', {
    extend: 'Ext.Panel',
    //alias: "widget.homereset",
    xtype: 'homeovercard',

    config: {
        iconCls: 'home',
        title: 'Home',
        html: 'Dit is de home over pagina',
        style: 'background-color: gray',
        id:'homeover',
        styleHtmlContent: true,
        items: [{
            docked: 'top',
            xtype: 'toolbar',
            title: 'Over pagina',
            items: [
                {
                    xtype: "button",
                    ui: "back",
                    text: "Terug",
                     action: "ButtonBackToHomeClicked"
                    //handler:function(){
                     //   Ext.getCmp('homemain_card').animateActiveItem(0,{type: 'slide', direction: 'right'});
                    //}
                }
            ]
        }
        ]
    }
});