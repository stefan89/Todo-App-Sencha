Ext.define("app.view.TodoDetails", {
    extend: "Ext.form.Panel",
    requires: "Ext.form.FieldSet",
    alias: "widget.tododetailscard",
    config: {
        scrollable: 'vertical',
        items: [
            {
                xtype: "toolbar",
                ui: "light",
                docked: "top",
                title: "To-do details",
                items: [
                    {
                        xtype: "button",
                        ui: "back",
                        text: "Terug",
                        itemId: "backButton"
                    },
                    {
                        xtype: "spacer" },
                    {
                        xtype: "button",
                        iconCls: "trash",
                        iconMask: true,
                        itemId: "verwijderButton"
                    },
                    {
                        xtype: "button",
                        iconCls: "compose",
                        ui: "action",
                        iconMask: true,
                        itemId: "wijzigButton"
                    }
                ]
            },
            {
                html: '<p>Hieronder vind u detailinformatie van de geselecteerde To-do.</p>'
                //fontSize: '15px'
            },
            {
                xtype: "fieldset",
                items: [
                    {
                        xtype: 'textfield',
                        name: 'email',
                        label: 'E-mail persoon',
                        labelAlign: 'top',
                        readOnly:true,
                        clearIcon: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'korteOmschrijving',
                        label: 'Korte omschrijving',
                        labelAlign: 'top',
                        readOnly:true,
                        clearIcon: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'langeOmschrijving',
                        label: 'Lange omschrijving',
                        labelAlign: 'top',
                        readOnly:true,
                        clearIcon: true
                    },
                    {
                        xtype: 'datepickerfield',
                        name: 'datum',
                        label: 'Datum',
                        labelAlign: 'top',
                        dateFormat:'d-m-Y',
                        readOnly:true,
                        clearIcon: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'urgentie',
                        label: 'Urgentie',
                        labelAlign: 'top',
                        readOnly:true,
                        clearIcon: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'plaatsOplevering',
                        label: 'Plaats',
                        labelAlign: 'top',
                        readOnly:true,
                        clearIcon: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'type',
                        label: 'Type',
                        labelAlign: 'top',
                        readOnly:true,
                        clearIcon: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'status',
                        label: 'Status',
                        labelAlign: 'top',
                        readOnly:true,
                        clearIcon: true
                    }
                ]
            },
            {
                xtype: "button",
                ui: "action",
                text: "Open plaats van oplevering"
            },
            {
                xtype: "button",
                ui: "action",
                text: "To-do afgehandeld"
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
        console.log("backToTodoHomeCommand");
        this.fireEvent("backToTodoHomeCommand", this);
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