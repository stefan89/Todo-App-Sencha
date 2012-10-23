Ext.define('app.view.TodoHome', {
    extend: 'Ext.Panel',
    xtype: 'todohomecard',

    config: {
        iconCls: 'star',
        title: 'Todo',

        layout:'card',
        id:'TodoHome',
        scrollable: 'vertical',
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                ui: "light",
                title: "Todo's",
                items: [
                    {
                        xtype: "spacer"
                    },
                    {
                        xtype: "button",
                        text:    'Nieuw',
                        itemId: "nieuweTodoButtonToolbar"
                    }
                ]
            },
            {
                html: ' ',
                styleHtmlContent: true,
                items: [
                    {
                        html: " "
                    },
                    {
                        xtype: "button",
                        height: '50px',
                        margin: '15 15 10 15',
                        ui: "knoplijst",
                        text:    "Onderhanden todo's",
                        itemId: "onderhandenTodoButton"
                    },
                    {
                        xtype: "button",
                        height: '50px',
                        margin: '15 15 0 15',
                        ui: "knoplijst",
                        text:    "Afgehandelde todo's",
                        itemId: "afgehandeldTodoButton"
                    },
                    {
                        xtype: "button",
                        height: '50px',
                        margin: '15 15 0 15',
                        ui: "knoplijst",
                        text:    "Alle todo's",
                        itemId: "alleTodoButton"
                    }
                ]
            }
        ],
        listeners: [
            {
                delegate: "#nieuweTodoButtonToolbar",
                event: "tap",
                fn: "onNieuweTodoButtonTap"
            },
            {
             //   delegate: "#nieuweTodoButton",
             //   event: "tap",
             //   fn: "onNieuweTodoButtonTap"
            },
            {
                delegate: "#alleTodoButton",
                event: "tap",
                fn: "onAlleTodosButtonTap"
            },
            {
                delegate: "#onderhandenTodoButton",
                event: "tap",
                fn: "onOnderhandenTodosButtonTap"
            },
            {
                delegate: "#afgehandeldTodoButton",
                event: "tap",
                fn: "onAfgehandeldTodosButtonTap"
            }

        ]
    },

    onNieuweTodoButtonTap: function () {
        console.log("nieuweTodoButtonCommand");
        this.fireEvent("nieuweTodoButtonCommand", this);
    },
    onAlleTodosButtonTap: function(){
        console.log("alleTodosButtonCommand");
        this.fireEvent("alleTodosButtonCommand", this);
    },
    onOnderhandenTodosButtonTap: function(){
        console.log("onderhandenTodosButtonCommand");
        this.fireEvent("onderhandenTodosButtonCommand", this);
    },
    onAfgehandeldTodosButtonTap: function(){
        console.log("afgehandeldTodosButtonCommand");
        this.fireEvent("afgehandeldTodosButtonCommand", this);
    }

});