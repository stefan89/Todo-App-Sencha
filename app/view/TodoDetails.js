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
                title: "Todo details",
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
                html: '<p>Hieronder vind u detailinformatie van de geselecteerde Todo.</p>'
                //fontSize: '15px'
            },
            {
                xtype: "fieldset",
                items: [
                    {
                        xtype: 'textfield',
                        name: 'email',
                        label: 'E-mail persoon',
                        style: 'background-color: #FFF7D5',
                        labelAlign: 'top',
                        readOnly:true,
                        clearIcon: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'korteOmschrijving',
                        label: 'Korte omschrijving',
                        style: 'background-color: #FFF7D5',
                        labelAlign: 'top',
                        readOnly:true,
                        clearIcon: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'langeOmschrijving',
                        label: 'Lange omschrijving',
                        style: 'background-color: #FFF7D5',
                        labelAlign: 'top',
                        readOnly:true,
                        clearIcon: true
                    },
                    {
                        xtype: 'datepickerfield',
                        name: 'datum',
                        label: 'Datum',
                        style: 'background-color: #FFF7D5',
                        labelAlign: 'top',
                        dateFormat:'d-m-Y',
                        readOnly:true,
                        clearIcon: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'urgentie',
                        label: 'Urgentie',
                        style: 'background-color: #FFF7D5',
                        labelAlign: 'top',
                        readOnly:true,
                        clearIcon: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'plaatsOplevering',
                        label: 'Plaats',
                        style: 'background-color: #FFF7D5',
                        labelAlign: 'top',
                        readOnly:true,
                        clearIcon: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'type',
                        label: 'Type',
                        style: 'background-color: #FFF7D5',
                        labelAlign: 'top',
                        readOnly:true,
                        clearIcon: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'status',
                        label: 'Status',
                        style: 'background-color: #FFF7D5',
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
                text: "Todo afgehandeld",
                itemId: "afhandelButton"
            }
        ],
        listeners: [
            {
                delegate: "#backButton",
                event: "tap",
                fn: "onBackButtonTap"
            },
            {
                delegate: "#verwijderButton",
                event: "tap",
                fn: "onVerwijderButtonTap"
            }
        ]
    },

    onBackButtonTap: function () {
        this.fireEvent("backToTodoHomeCommand", this);
    },

    onVerwijderButtonTap: function () {
        this.fireEvent("verwijderTodoCommand", this);
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
 // this.fireEvent("verwijderTodoCommand", this);
 },*/