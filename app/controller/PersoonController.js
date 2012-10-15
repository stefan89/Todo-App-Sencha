Ext.define("app.controller.PersoonController", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
            persoonLijstCard : "persoonlijstcard",
            persoonEditCard: "persooneditcard"
        },
        control: {
            persoonLijstCard: {
                nieuwPersoonCommand: "onNieuwPersoonCommand",
                wijzigPersoonCommand: "onWijzigPersoonCommand"
            },
            persoonEditCard: {
                opslaanPersoonCommand: "onOpslaanPersoonCommand",
                verwijderPersoonCommand: "onVerwijderPersoonCommand",
                backToPersoonHomeCommand: "onBackToPersoonHomeCommand"
            }
        }
    },


    onNieuwPersoonCommand: function () {
        console.log("onNieuwPersoonCommand");

        var now = new Date();
        var persoonId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

        var nieuwPersoon = Ext.create("app.model.DataModel", {
            id: persoonId,
            dateCreated: now,
            voorNaam: "",
            achterNaam: ""
        });
        this.activatePersoonEditorCard(nieuwPersoon);
    },


    onWijzigPersoonCommand: function (list, record) {
        console.log("onWijzigPersoonCommand");
        this.activatePersoonEditorCard(record);
    },


    onOpslaanPersoonCommand: function () {
        console.log("onPersoonOpslaanCommand");

        var persoonEditorCard = this.getPersoonEditCard();
        var currentPersoon = persoonEditorCard.getRecord();
        var newValues = persoonEditorCard.getValues();

        // Update the current persoon fields with form values.
        currentPersoon.set("voorNaam", newValues.voorNaam);
        currentPersoon.set("achterNaam", newValues.achterNaam);

        var errors = currentPersoon.validate();

        if (!errors.isValid()) {
            Ext.Msg.alert('Wacht!', errors.getByField("voorNaam")[0].getMessage(), Ext.emptyFn);
            //Ext.Msg.alert('Wacht!', errors.getByField("achterNaam")[1].getMessage(), Ext.emptyFn);
            currentPersoon.reject();
            return;
        }

        var persoonStore = Ext.getStore("DataStore");

        if (null == persoonStore.findRecord('id', currentPersoon.data.id)) {
            persoonStore.add(currentPersoon);
        }

        persoonStore.sync();
        persoonStore.sort([{ property: 'dateCreated', direction: 'DESC'}]);
        this.activatePersoonLijstCard();
    },


    onVerwijderPersoonCommand: function () {
        console.log("onVerwijderPersoonCommand");

        var persoonEditorCard = this.getPersoonEditCard();
        var currentPersoon = persoonEditorCard.getRecord();
        var persoonStore = Ext.getStore("DataStore");

        persoonStore.remove(currentPersoon);
        persoonStore.sync();
        this.activatePersoonLijstCard();
    },


    onBackToPersoonHomeCommand: function () {
        console.log("onBackToPersoonHomeCommand");
        this.activatePersoonLijstCard();
    },





    // Helper functions
    getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },


    activatePersoonEditorCard: function (record) {

        var persoonEditorCard = this.getPersoonEditCard();
        persoonEditorCard.setRecord(record); // load() is deprecated.
        Ext.getCmp('persoonmain_card').animateActiveItem(1,{type: 'slide', direction: 'left'});
    },


    activatePersoonLijstCard: function () {
        Ext.getCmp('persoonmain_card').animateActiveItem(0,{type: 'slide', direction: 'right'});
    },



    // Base Class functions.
    launch: function () {
        this.callParent(arguments);
        var dataStore = Ext.getStore("DataStore");
        dataStore.load();
        console.log("launch");
    },
    init: function () {
        this.callParent(arguments);
        console.log("init");
    }
});