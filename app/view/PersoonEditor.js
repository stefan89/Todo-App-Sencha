﻿Ext.define("app.view.PersoonEditor", {
    extend: "Ext.form.Panel",
    requires: 'Ext.form.FieldSet',
    alias: "widget.persooneditcard",
    config: {
        scrollable: 'vertical',
        items: [
            {
                xtype: "toolbar",
                ui: "light",
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
                        labelAlign: 'top',
                        required: true,
                        placeHolder: 'Vul hier de voornaam in..'
                    },
                    {
                        xtype: 'textfield',
                        name: 'achterNaam',
                        label: 'Achternaam',
                        labelAlign: 'top',
                        required: true,
                        placeHolder: 'Vul hier de achternaam in..'
                    },
                    {
                        xtype: 'selectfield',
                        name: 'geslacht',
                        label: 'Geslacht',
                        labelAlign: 'top',
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
                        picker:{xtype:'datepicker', slotOrder:["day", "month", "year"], value: new Date(1970, 0, 1), yearFrom: 1920},
                        dateFormat:'d-m-Y',
                        name: 'geboorteDatum',
                        label: 'Geboortedatum',
                        labelAlign: 'top',
                        required: true,
                        placeHolder: 'Vul hier de geboortedatum in..',
                        listeners:{
                            change:function(picker){
                                var datumVandaag = new Date();
                                var minimumdatum = new Date(datumVandaag.getFullYear()-18, datumVandaag.getMonth(), datumVandaag.getDate());
                                var selecteddatum = this.getValue();
                                if (selecteddatum > minimumdatum){
                                    console.log("Jonger dan 18");
                                    Ext.Msg.alert('Oops!', 'Minimum leeftijd is 18 jaar', Ext.emptyFn);
                                    picker.reset();
                                }
                                else if (selecteddatum <= minimumdatum){
                                    console.log("Ouder of gelijk aan 18");
                                }
                            }
                        }
                    },
                    {
                        xtype: 'emailfield',
                        name: 'email',
                        label: 'Email',
                        labelAlign: 'top',
                        required: true,
                        placeHolder: 'Vul hier het e-mailadres in..'
                    },
                    {
                        xtype: 'textfield',
                        name: 'telefoonNummer',
                        label: 'Telefoonnummer',
                        labelAlign: 'top',
                        required: false,
                        placeHolder: 'Vul hier het telefoonnummer in..',
                        listeners:{
                            change:function(field){
                                var x = this.getValue();
                               // console.log(textfield);
                                console.log(x);
                                //(Number(d))
                                //if (Ext.isNumeric(x)){
                                //    console.log("AAABCD");
                                //}
                               // else{
                                //    console.log("Geen number");
                                //    Ext.Msg.alert('Oops!', 'Minimum leeftijd is 18 jaar', Ext.emptyFn);
                                //    field.reset();
                               // }
                            }
                        }
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