Ext.define("app.view.TodoLijstOnderhanden", {
    extend: "Ext.Panel",
    requires: "Ext.dataview.List",
    alias: "widget.todolijstonderhandencard",

    config: {
        layout: {
            type: 'fit'
        },
        items: [{
            xtype: "toolbar",
            ui: "light",
            title: "Onderhanden..",
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
                    itemId: "nieuwTodoButton"
                }
            ]
        },
            {
                xtype: 'toolbar',
                ui: 'light',
                docked: 'top',
                items: [
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'segmentedbutton',
                        itemId: 'segmentedButtonOnderhanden',
                        allowDepress: false,
                        items: [
                            {
                                text: 'Alle',
                                pressed: true,
                                itemId: "alleTodoButton"

                            },
                            {
                                text: 'Prive',
                                itemId: "priveTodoButton"
                            },
                            {
                                text: 'Zakelijk',
                                itemId: "zakelijkTodoButton"
                            }
                        ]
                    },
                    {
                        xtype: 'spacer'
                    }
                ]
            },
        {
            xtype: 'toolbar',
            ui: 'light',
            docked: 'top',
            align: 'center',
            items: [
                {
                    xtype: 'searchfield',
                    placeHolder: "Zoek todo's...",
                    name: 'searchfieldOnderhanden',
                    itemId: 'searchfieldOnderhanden'
                }
            ]
        },
            {
                xtype: "list",
                store: "TodoStore",
                itemId:"todoOnderhandenLijst",
                loadingText: "Todo's laden...",
                emptyText: "<div class=\"todo-list-empty-text\">Geen todo's gevonden met deze status en type</div>",
                onItemDisclosure: true,
                grouped: true,
                itemTpl:    "<div class=\"list-item-title\"><b>{korteOmschrijving}</b></div>" +
                            "<div class=\"list-item-narrative\">E-mail persoon: <b>{email}</b> - urgentie: <b>{urgentie}</b></div>"
            }],
        listeners: [
            {
                delegate: "#nieuwTodoButton",
                event: "tap",
                fn: "onNieuwButtonTap"
            },
            {
                delegate: "#todoOnderhandenLijst",
                event: "disclose",
                fn: "onTodoLijstDisclose"
            },
            {
                delegate: "#searchfieldOnderhanden",
                event: "keyup",
                fn: "onZoeken"
            },
            {
                delegate: "#searchfieldOnderhanden",
                event: "clearicontap",
                fn: "onStopZoeken"
            },
            {
                delegate: "#terugButton",
                event: "tap",
                fn: "onTerugToTodoHome"

            },
            {
                delegate: "#alleTodoButton",
                event: "tap",
                fn: "onAlleTodoButton"
            },
            {
                delegate: "#priveTodoButton",
                event: "tap",
                fn: "onPriveTodoButton"
            },
            {
                delegate: "#zakelijkTodoButton",
                event: "tap",
                fn: "onZakelijkTodoButton"
            }
        ]
    },
    onNieuwButtonTap: function () {
        this.fireEvent("nieuweTodoButtonCommand", this);
    },
    onTodoLijstDisclose: function (list, record, target, index, evt, options) {
        this.fireEvent("detailsTodoCommand", this, record);
    },
    onZoeken: function (field) {
        this.fireEvent("zoekCommand", this, field);
    },
    onStopZoeken: function(){
           this.fireEvent("stopZoekCommand", this);
    },
    onTerugToTodoHome: function(){
        this.fireEvent("backToTodoHomeCommand", this);
    },
    //////FILTERS
    onAlleTodoButton: function(){
        this.fireEvent("alleTodoCommand", this);
    },
    onPriveTodoButton: function(){
        this.fireEvent("priveTodoCommand", this);
    },
    onZakelijkTodoButton: function(){
        this.fireEvent("zakelijkTodoCommand", this);
    }
});