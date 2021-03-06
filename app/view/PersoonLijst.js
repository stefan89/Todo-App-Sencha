﻿Ext.define("app.view.PersoonLijst", {
    extend: "Ext.Panel",
    requires: "Ext.dataview.List",
    alias: "widget.persoonlijstcard",

    config: {
        layout: {
            type: 'fit'
        },
        items: [{
            xtype: "toolbar",
            ui: "light",
            title: "Personen",
            docked: "top",
            items: [
                { xtype: 'spacer' },
                {
                    xtype: "button",
                    text: 'Nieuw',
                    itemId: "nieuwPersoonButton"
                }
            ]
        },
        {
            docked: 'top',
            ui: 'light',
            xtype: 'toolbar',
            items: [
                {
                    xtype: 'searchfield',
                    placeHolder: 'Zoek persoon...',
                    name: 'searchfield',
                    itemId: 'zoekVeld'
                }
            ]
        },
        {
            xtype: "list",
            store: "PersoonStore",
            itemId:"persoonLijst",
            loadingText: "Personen laden...",
            emptyText: "<div class=\"persoon-list-empty-text\">Geen personen gevonden.</div>",
            onItemDisclosure: true,
            grouped: true,
            itemTpl: "<div class=\"list-item-title\"><b>{voorNaam} {achterNaam}</b></div>" +
                     "<div class=\"list-item-narrative\">{email}</div>"
        }],
        listeners: [
            {
                delegate: "#nieuwPersoonButton",
                event: "tap",
                fn: "onNieuwButtonTap"
            },
            {
                delegate: "#persoonLijst",
                event: "disclose",
                fn: "onPersoonLijstDisclose"
            },
            {
                delegate: "#zoekVeld",
                event: "keyup",
                fn: "onZoeken"
            },
            {
                delegate: "#zoekVeld",
                event: "clearicontap",
                fn: "onStopZoeken"
            }
        ]
    },
    onNieuwButtonTap: function () {
        this.fireEvent("nieuwPersoonCommand", this);
    },
    onPersoonLijstDisclose: function (list, record, target, index, evt, options) {
        this.fireEvent('detailsPersoonCommand', this, record);
    },
    onZoeken: function (field) {
        this.fireEvent("zoekCommand", this, field);
    },
    onStopZoeken: function(){
        this.fireEvent("stopZoekCommand", this);
    }
});