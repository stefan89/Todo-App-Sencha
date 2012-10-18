Ext.define("app.view.TodoLijstAfgehandeld", {
    extend: "Ext.Panel",
    requires: "Ext.dataview.List",
    alias: "widget.todolijstafgehandeldcard",

    config: {
        layout: {
            type: 'fit'
        },
        items: [{
            xtype: "toolbar",
            title: "Afgehandelde todo's",
            docked: "top",
            items: [
                {
                    xtype: "button",
                    text: 'Terug',
                    ui: 'back',
                    itemId: "terugButton"
                },
                { xtype: 'spacer' },
                {
                    xtype: "button",
                    text: 'Nieuw',
                    ui: 'action',
                    itemId: "nieuwTodoButton"
                }
            ]
        },
            //{
            //   docked: 'top',
            //   ui: 'light',
            //   xtype: 'toolbar',
            //   items: [
            //       {
            //           xtype: 'searchfield',
            //            placeHolder: "Zoek xtodo's...",
            //            name: 'searchfield2'
            //            //: 'zoekVeld'
            //        }
            //    ]
            //},
            {
                xtype: "list",
                store: "TodoStore",
                itemId:"todoAlleLijst",
                loadingText: "Todo's laden...",
                emptyText: "<div class=\"todo-list-empty-text\">Geen todos gevonden.</div>",
                onItemDisclosure: true,
                grouped: true,
                itemTpl:    "<div class=\"list-item-title\"><b>{korteOmschrijving}</b></div>" +
                    "<div class=\"list-item-narrative\">{email}</div>"
            }],
        listeners: [{
            delegate: "#nieuwTodoButton",
            event: "tap",
            fn: "onNieuwButtonTap"
        },
            {
                delegate: "#todoAlleLijst",
                event: "disclose",
                fn: "onPersoonLijstDisclose"
            },
            {
                //delegate: "#zoekVeld",
                //event: "keyup",
                //fn: "onZoeken"
            },
            {
                //delegate: "#zoekVeld",
                //event: "clearicontap",
                //fn: "onStopZoeken"
            },
            {
                delegate: "#terugButton",
                event: "tap",
                fn: "onTerugToTodoHome"

            }

        ]
    },
    onNieuwButtonTap: function () {
        console.log("nieuwTodoCommand");
        this.fireEvent("nieuweTodoButtonCommand", this);
    },
    onPersoonLijstDisclose: function (list, record, target, index, evt, options) {
        //  console.log("detailsPersoonCommand");
        //  this.fireEvent('detailsPersoonCommand', this, record);
    },
    onZoeken: function (field) {
        // console.log("typennnnn");
        //console.log(field.getValue());
        // this.fireEvent("zoekCommand", this, field);
    },
    onStopZoeken: function(){
        //   this.fireEvent("stopZoekCommand", this);
    },
    onTerugToTodoHome: function(){
        console.log("onTerugToTodoHomeCommand");
        this.fireEvent("backToTodoHomeCommand", this);
    }

});