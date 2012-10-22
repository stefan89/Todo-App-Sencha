Ext.define("app.view.TodoLijstAlle", {
    extend: "Ext.Panel",
    requires: "Ext.dataview.List",
    alias: "widget.todolijstallecard",

    config: {
        layout: {
            type: 'fit'
        },
        items: [{
            xtype: "toolbar",
            ui: "light",
            title: "Alle todo's",
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
            {
                xtype: 'toolbar',
                ui: 'light',
                docked: 'top',
                //align: 'center',
                items: [
                    {
                        xtype: 'segmentedbutton',
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
                        placeHolder: "Zoek to-do's...",
                        name: 'searchfieldAlle'
                        //: 'zoekVeld'
                    }


                ]
            },
            {
                xtype: "list",
                store: "TodoStore",
                itemId:"todoAlleLijst",
                loadingText: "Todo's laden...",
                emptyText: "<div class=\"todo-list-empty-text\">Geen todo's gevonden met deze status en type</div>",
                onItemDisclosure: true,
                grouped: true,
                itemTpl:    "<div class=\"list-item-title\"><b>{korteOmschrijving}</b></div>" +
                            "<div class=\"list-item-narrative\">E-mail persoon: <b>{email}</b> - urgentie: <b>{urgentie}</b></div>"
            }],
        listeners: [{
                delegate: "#nieuwTodoButton",
                event: "tap",
                fn: "onNieuwButtonTap"
            },
            {
                delegate: "#todoAlleLijst",
                event: "disclose",
                fn: "onTodoLijstDisclose"
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
      //  console.log("detailsPersoonCommand");
        this.fireEvent('detailsTodoCommand', this, record);
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