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
                        label: 'Email',
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
                        required: true,
                        placeHolder: 'Vul hier de korte omschrijving in..'
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