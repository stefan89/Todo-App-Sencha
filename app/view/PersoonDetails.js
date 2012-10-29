Ext.define("app.view.PersoonDetails", {
    extend: "Ext.form.Panel",
    requires: "Ext.form.FieldSet",
    alias: "widget.persoondetailscard",

    config: {
        scrollable: 'vertical',
        items: [
            {
                xtype: "toolbar",
                ui: "light",
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
            },
            {
                xtype: "fieldset",

                items: [
                    {
                        xtype: 'textfield',
                        name: 'voorNaam',
                        label: 'Voornaam',
                        style: 'background-color: #FFF7D5',
                        labelAlign: 'top',
                        readOnly:true,
                        clearIcon: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'achterNaam',
                        label: 'Achternaam',
                        style: 'background-color: #FFF7D5',
                        labelAlign: 'top',
                        readOnly:true,
                        clearIcon: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'geslacht',
                        label: 'Geslacht',
                        style: 'background-color: #FFF7D5',
                        labelAlign: 'top',
                        readOnly:true,
                        clearIcon: true
                    },
                    {
                        xtype: 'datepickerfield',
                        name: 'geboorteDatum',
                        label: 'Geboortedatum',
                        style: 'background-color: #FFF7D5',
                        labelAlign: 'top',
                        dateFormat:'d-m-Y',
                        readOnly:true,
                        clearIcon: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'email',
                        label: 'Email',
                        style: 'background-color: #FFF7D5',
                        labelAlign: 'top',
                        readOnly:true,
                        clearIcon: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'telefoonNummer',
                        label: 'Telefoonnummer',
                        style: 'background-color: #FFF7D5',
                        labelAlign: 'top',
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
        this.fireEvent("backToPersoonHomeCommand", this);
    }
});