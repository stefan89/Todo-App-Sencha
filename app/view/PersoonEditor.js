Ext.define("app.view.PersoonEditor", {
    extend: "Ext.form.Panel",
    requires: 'Ext.form.FieldSet',
       // [
            //'app.view.viewcomponents.NumberTextfield'
       // ],


    alias: "widget.persooneditcard",
    config: {
        scrollable: 'vertical',
        items: [
            {
                xtype: "toolbar",
                docked: "top",
                title: "Nieuw persoon",
                items: [
                    {
                        xtype: "button",
                        ui: "back",
                        text: "Terug",
                        itemId: "backButton"
                    },
                    { xtype: "spacer" }
                ]
            },
            { xtype: "fieldset",
                items: [
                    {
                        xtype: 'textfield',
                        name: 'voorNaam',
                        label: 'Voornaam',
                        required: true,
                        placeHolder: 'Vul hier de voornaam in..'
                    },
                    {
                        xtype: 'textfield',
                        name: 'achterNaam',
                        label: 'Achternaam',
                        required: true,
                        placeHolder: 'Vul hier de achternaam in..'
                    },
                    {
                        xtype: 'selectfield',
                        name: 'geslacht',
                        label: 'Geslacht',
                        required: true,
                        placeHolder: 'Vul hier het geslacht in..',
                        options: [
                            {
                                text: 'Man',
                                value: 'Man'
                            },
                            {
                                text: 'Vrouw',
                                value: 'Vrouw'
                            }
                        ]
                    },
                    {
                        xtype: 'datepickerfield',
                        name: 'geboorteDatum',
                        label: 'Geboortedatum',
                        required: true,
                        placeHolder: 'Vul hier de geboortedatum in..'
                    },
                    {
                        xtype: 'emailfield',
                        name: 'email',
                        label: 'Email',
                        required: true,
                        placeHolder: 'Vul hier het e-mailadres in..'
                    },
                    {
                        //xtype: 'numtextfield',
                        xtype: 'textfield',
                        name: 'telefoonNummer',
                        label: 'Telefoonnummer',
                        placeHolder: 'Vul hier het telefoonnummer in..'
                    }
                ]
            },
            {
                xtype: "button",
                ui: "action",
                text: "Persoon toevoegen",
                itemId: "opslaanButton"
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
            }
        ]
    },
    onOpslaanButtonTap: function () {
        console.log("opslaanPersoonCommand");
        this.fireEvent("opslaanPersoonCommand", this);
    },

    onBackButtonTap: function () {
        console.log("backToHomeCommand");
        this.fireEvent("backToPersoonHomeCommand", this);
    }
});






//{
//    xtype: "button",
//        iconCls: "trash",
//    iconMask: true,
//    itemId: "verwijderButton"
//},

//{
//    delegate: "#verwijderButton",
//        event: "tap",
//    fn: "onVerwijderButtonTap"
//}

//onVerwijderButtonTap: function () {
//    console.log("verwijderPersoonCommand");
//    this.fireEvent("verwijderPersoonCommand", this);
//},