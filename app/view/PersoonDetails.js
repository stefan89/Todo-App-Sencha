Ext.define("app.view.PersoonDetails", {
    extend: "Ext.form.Panel",
    requires: "Ext.form.FieldSet",
    alias: "widget.persoondetailscard",
    config: {
        scrollable: 'vertical',
        items: [
            {
                xtype: "toolbar",
                docked: "top",
                title: "Persoon details",
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
            {
                html: '<p>Hieronder vind u detailinformatie van de geselecteerde persoon.</p>'
                //fontSize: '15px'
            },
            {
                xtype: "fieldset",
                items: [
                    {
                        xtype: 'textfield',
                        name: 'voorNaam',
                        label: 'Voornaam',
                        readOnly:true,
                        clearIcon: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'achterNaam',
                        label: 'Achternaam',
                        readOnly:true,
                        clearIcon: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'geslacht',
                        label: 'Geslacht',
                        readOnly:true,
                        clearIcon: true
                    },
                    {
                        xtype: 'datepickerfield',
                        name: 'geboorteDatum',
                        label: 'Geboortedatum',
                        dateFormat:'d-m-Y',
                        readOnly:true,
                        clearIcon: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'email',
                        label: 'Email',
                        readOnly:true,
                        clearIcon: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'telefoonNummer',
                        label: 'Telefoonnummer',
                        readOnly:true,
                        clearIcon: true
                    }
                ]
            }
        ],
        listeners: [
            {
                delegate: "#backButton",
                event: "tap",
                fn: "onBackButtonTap"
            }
        ]
    },

    onBackButtonTap: function () {
        console.log("backToHomeCommand");
        this.fireEvent("backToPersoonHomeCommand", this);
    }
});


//{
//    xtype: "button",
//    iconCls: "trash",
//   iconMask: true,
//    itemId: "verwijderButton"
//}//,
//{
// xtype: "button",
// ui: "action",
//  text: "Opslaan",
// itemId: "opslaanButton"
//}


//{
    // delegate: "#opslaanButton",
    //event: "tap"//,
    //  fn: "onOpslaanButtonTap"
//},
//{
    //  delegate: "#verwijderButton",
    //  event: "tap"//,
    //   fn: "onVerwijderButtonTap"
//}

/*
 onOpslaanButtonTap: function () {
 console.log("opslaanPersoonCommand");
 // this.fireEvent("opslaanPersoonCommand", this);
 },
 onVerwijderButtonTap: function () {
 console.log("verwijderPersoonCommand");
 // this.fireEvent("verwijderPersoonCommand", this);
 },*/