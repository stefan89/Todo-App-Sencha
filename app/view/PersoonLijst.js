Ext.define("app.view.PersoonLijst", {
    extend: "Ext.Panel",
    requires:"Ext.dataview.List",
    alias: "widget.persoonlijstcard",

    config: {
        layout: {
            type: 'fit'
        },
        items: [{
            xtype: "toolbar",
            title: "Personen",
            docked: "top",
            items: [
                { xtype: 'spacer' },
                {
                    xtype: "button",
                    text: 'Nieuw',
                    ui: 'action',
                    itemId: "nieuwPersoonButton"
                }
            ]
        },
        {
            xtype: "list",
            store: "DataStore",
            itemId:"persoonLijst",
            loadingText: "Personen laden...",
            emptyText: "<div class=\"persoon-list-empty-text\">Geen personen gevonden.</div>",
            onItemDisclosure: true,
            grouped: true,
            itemTpl: "<div class=\"list-item-title\">{voorNaam}</div>" +
                     "<div class=\"list-item-narrative\">{achterNaam}</div>"
        }],
        listeners: [{
            delegate: "#nieuwPersoonButton",
            event: "tap",
            fn: "onNieuwButtonTap"
        }, {
            delegate: "#persoonLijst",
            event: "disclose",
            fn: "onPersoonLijstDisclose"
        }]
    },    
    onNieuwButtonTap: function () {
        console.log("nieuwPersoonCommand");
        this.fireEvent("nieuwPersoonCommand", this);
    },
    onPersoonLijstDisclose: function (list, record, target, index, evt, options) {
        console.log("wijzigPersoonCommand");
        this.fireEvent('wijzigPersoonCommand', this, record);
    }
});