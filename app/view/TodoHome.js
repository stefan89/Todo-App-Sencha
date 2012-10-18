Ext.define('app.view.TodoHome', {
    extend: 'Ext.Panel',
    xtype: 'todohomecard',

    config: {
        iconCls: 'star',
        title: 'Todo',

        layout:'card',
        id:'TodoHome',
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
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
                    //{
                    //    xtype: "button",
                    //    text:    'Nieuwe xtodo',
                    //    itemId: "nieuweTodoButton"
                    //},
                    {
                        xtype: "button",
                        text:    "Onderhanden todo's",
                        itemId: "onderhandenTodoButton"
                    },
                    {
                        xtype: "button",
                        text:    "Afgehandelde todo's",
                        itemId: "afgehandeldTodoButton"
                    },
                    {
                        xtype: "button",
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