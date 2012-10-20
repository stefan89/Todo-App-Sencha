Ext.define("app.view.TodoEditor", {
    extend: "Ext.form.Panel",
    requires: 'Ext.form.FieldSet',
    alias: "widget.todoeditcard",
    config: {
        scrollable: 'vertical',
        items: [
            {
                xtype: "toolbar",
                docked: "top",
                title: "Nieuwe todo",
                items: [
                    {
                        xtype: "button",
                        ui: "back",
                        text: "Terug",
                        itemId: "backTodoHomeButton"
                    },
                    { xtype: "spacer" }
                ]
            },
            { xtype: "fieldset",
                items: [
                    {
                        xtype: 'selectfield',
                        label: 'Persoon',
                        labelAlign: 'top',
                        name: 'email',
                        store: 'DataStore',
                        displayField: 'displayNaam',
                        valueField: 'email',
                        required: true,
                        placeHolder: 'Selecteer een persoon voor deze todo..'
                    },
                    {
                        xtype: 'textfield',
                        name: 'korteOmschrijving',
                        label: 'Korte omschrijving',
                        labelAlign: 'top',
                        required: true,
                        placeHolder: 'Vul hier de korte omschrijving in..'
                    },
                    {
                        xtype: 'textfield', //moet textarea worden
                        name: 'langeOmschrijving',
                        label: 'Lange omschrijving',
                        labelAlign: 'top',
                        placeHolder: 'Vul hier de lange omschrijving in..'
                    },
                    {
                        xtype: 'datepickerfield',
                        picker:{xtype:'datepicker', slotOrder:["day", "month", "year"], value: new Date(), yearFrom: 2012, yearTo: 2020},
                        dateFormat:'d-m-Y',
                        name: 'datum',
                        label: 'Datum oplevering',
                        labelAlign: 'top',
                        required: true,
                        placeHolder: 'Vul hier de datum in..',
                        listeners:{
                        change:function(picker){
                            var datumVandaag = new Date();
                            var minimumdatum = new Date(datumVandaag.getFullYear(), datumVandaag.getMonth(), datumVandaag.getDate());

                            var selecteddatum = this.getValue();
                            if (selecteddatum < minimumdatum){
                                console.log("Datum afgekeurd");
                                Ext.Msg.alert('Oops!', 'Datum afgekeurd', Ext.emptyFn);
                                picker.reset();
                            }
                            else if (selecteddatum >= minimumdatum){
                                console.log("Datum is gelijk of later dan vandaag");
                            }
                        }
                    }
                    },

                    {
                        xtype: 'sliderfieldextended',
                        name: 'urgentie',
                        //labelText: 'Integer',
                        label: 'Urgentie',
                        labelAlign: 'top',
                        value: 1,
                        minValue: 0,
                        maxValue: 2
                    },
                    {
                        xtype: 'textfield',
                        name: 'plaatsOplevering',
                        label: 'Plaats oplevering',
                        labelAlign: 'top',
                        required: true,
                        placeHolder: 'Vul hier de plaats in..'
                    },
                    {
                        xtype: 'selectfield',
                        name: 'type',
                        label: 'Type',
                        labelAlign: 'top',
                        required: true,
                        placeHolder: 'Selecteer het type',
                        options: [
                            {
                                text: 'Prive',
                                value: 'Prive'
                            },
                            {
                                text: 'Zakelijk',
                                value: 'Zakelijk'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: "button",
                ui: "action",
                text: "Todo toevoegen",
                itemId: "todoOpslaanButton"
            }
        ],
        listeners: [
            {
                delegate: "#backTodoHomeButton",
                event: "tap",
                fn: "onBackToTodoHomeButtonTap"
            },
            {
                delegate: "#todoOpslaanButton",
                event: "tap",
                fn: "onTodoOpslaanButtonTap"
            }
        ]
    },
    onTodoOpslaanButtonTap: function () {
        console.log("opslaanTodoCommand");
        this.fireEvent("opslaanTodoCommand", this);
    },

    onBackToTodoHomeButtonTap: function () {
        console.log("backToTodoHomeCommand");
        this.fireEvent("backToTodoHomeCommand", this);
    }
});