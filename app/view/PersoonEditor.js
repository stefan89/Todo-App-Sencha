Ext.define("app.view.PersoonEditor", {
    extend: "Ext.form.Panel",
    requires: "Ext.form.FieldSet",
    alias: "widget.persooneditcard",
    config: {
        scrollable: 'vertical',
        items: [
            {
                xtype: "toolbar",
                docked: "top",
                title: "Wijzig",
                items: [
                    {
                        xtype: "button",
                        ui: "back",
                        text: "Terug",
                        itemId: "backButton"
                    },
                    { xtype: "spacer" },
                    {
                        xtype: "button",
                        iconCls: "trash",
                        iconMask: true,
                        itemId: "verwijderButton"
                    },
                    {
                        xtype: "button",
                        ui: "action",
                        text: "Opslaan",
                        itemId: "opslaanButton"
                    }
                ]
            },
            { xtype: "fieldset",
                items: [
                    {
                        xtype: 'textfield',
                        name: 'voorNaam',
                        label: 'Voornaam',
                        required: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'achterNaam',
                        label: 'Achternaam',
                        required: true
                    }
                ]
            }
        ],
        listeners: [
            {
                delegate: "#backButton",
                event: "tap",
                fn: "onBackButtonTap"
            },
            {
                delegate: "#opslaanButton",
                event: "tap",
                fn: "onOpslaanButtonTap"
            },
            {
                delegate: "#verwijderButton",
                event: "tap",
                fn: "onVerwijderButtonTap"
            }
        ]
    },
    onOpslaanButtonTap: function () {
        console.log("opslaanPersoonCommand");
        this.fireEvent("opslaanPersoonCommand", this);
    },
    onVerwijderButtonTap: function () {
        console.log("verwijderPersoonCommand");
        this.fireEvent("verwijderPersoonCommand", this);
    },
    onBackButtonTap: function () {
        console.log("backToHomeCommand");
        this.fireEvent("backToPersoonHomeCommand", this);
    }

});

