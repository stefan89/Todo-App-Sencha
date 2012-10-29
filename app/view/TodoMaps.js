Ext.define("app.view.TodoMaps", {
    extend: 'Ext.Panel',
    requires: "app.view.GoogleMaps",
    alias: "widget.todomapscard",

    config: {
        styleHtmlContent: true,
        layout: 'fit',
        items: [{
            docked: 'top',
            xtype: 'toolbar',
            ui: "light",
            title: 'Maps page',
            items: [
                {
                    xtype: "button",
                    ui: "back",
                    text: "Terug",
                    itemId: "backButton"
                }]
        },
            {
                xtype: "googlemapscard"
            }
        ],
        listeners: [
            {
                delegate: "#backButton",
                event: "tap",
                fn: "onBackButtonTap"
            }
        ]
    },
    onBackButtonTap: function () {
        this.fireEvent("backToTodoHomeCommand", this);
    }
});



