﻿Ext.define("app.controller.PersoonController", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
            persoonLijstCard : "persoonlijstcard",
            persoonEditCard: "persooneditcard",
            persoonDetailsCard: "persoondetailscard"
        },
        control: {
            persoonLijstCard: {
                nieuwPersoonCommand: "onNieuwPersoonCommand",
                detailsPersoonCommand: "onDetailsPersoonCommand",
                zoekCommand: "onZoekCommand",
                stopZoekCommand: "onStopZoekCommand"
            },
            persoonEditCard: {
                opslaanPersoonCommand: "onOpslaanPersoonCommand",
                backToPersoonHomeCommand: "onBackToPersoonHomeCommand"
            },
            persoonDetailsCard: {
                backToPersoonHomeCommand: "onBackToPersoonHomeCommand"
            }
        }
    },
    transition: null,

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //persoonLijstCard handlers/functions                                                                         //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onNieuwPersoonCommand: function () {
        var now = new Date();
        var id = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();
        var nieuwPersoon = Ext.create("app.model.PersoonModel", {
            persoonId: id,
            email: "",
            voorNaam: "",
            achterNaam: "",
            geslacht: "Man",
            geboorteDatum: "",
            telefoonNummer: "",
            displayNaam: ""
        });
        this.activatePersoonEditorCard(nieuwPersoon);
    },


    getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },


    onDetailsPersoonCommand: function (list, record) {
                            this.activatePersoonDetailsCard(record);
    },


    onZoekCommand: function(input, field) {
        queryString = field.getValue();
        var store = Ext.getStore('PersoonStore');
        store.clearFilter();

        if(queryString){
            var thisRegEx = new RegExp(queryString, "i");
            store.filterBy(function(record) {
                if (thisRegEx.test(record.get('voorNaam')) ||
                    thisRegEx.test(record.get('achterNaam')) ||
                    thisRegEx.test(record.get('email'))) {
                    return true;
                };
                return false;
            });
        }
    },


    onStopZoekCommand: function() {
        var store = Ext.getStore('PersoonStore');
        store.clearFilter();
    },


    activatePersoonDetailsCard: function (record) {
        var persoonDetailsCard = this.getPersoonDetailsCard();
        persoonDetailsCard.setRecord(record);
        this.checkOS();
        Ext.getCmp('persoonmain_card').animateActiveItem(2, this.transition);
    },


    activatePersoonEditorCard: function (record) {
        var persoonEditorCard = this.getPersoonEditCard();
        persoonEditorCard.setRecord(record);
        this.checkOS();
        Ext.getCmp('persoonmain_card').animateActiveItem(1, this.transition);
    },




    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //persoonEditCard handlers/functions                                                                          //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onOpslaanPersoonCommand: function () {
        var persoonEditorCard = this.getPersoonEditCard();
        var currentPersoon = persoonEditorCard.getRecord();
        var newValues = persoonEditorCard.getValues();

        //fill displaynaam
        var voorN = newValues.voorNaam;
        var achterN = newValues.achterNaam;
        var displayNaamNieuw = (voorN + " " + achterN);

        // Update the current persoon fields with form values.
        currentPersoon.set("voorNaam", newValues.voorNaam);
        currentPersoon.set("achterNaam", newValues.achterNaam);
        currentPersoon.set("email", newValues.email);
        currentPersoon.set("geboorteDatum", newValues.geboorteDatum);
        currentPersoon.set("geslacht", newValues.geslacht);
        currentPersoon.set("telefoonNummer", newValues.telefoonNummer);
        currentPersoon.set("displayNaam", displayNaamNieuw);

        if(Ext.isNumeric(newValues.telefoonNummer) || (newValues.telefoonNummer == "")){ //telefoonnummer correct
            var errors = currentPersoon.validate();

            if (!errors.isValid()) {
                errors.each(function (item, index, length) {
                    Ext.Msg.alert('Mislukt!',item.getMessage(), Ext.emptyFn);
                });
                currentPersoon.reject();
                return;
            }

            var persoonStore = Ext.getStore("PersoonStore");

            if (null == persoonStore.findRecord('email', newValues.email)){
                    persoonStore.add(currentPersoon);
                    persoonStore.sync();
                    persoonStore.sort([{ property: 'achterNaam', direction: 'ASC'}]);

                    Ext.Msg.alert('Gelukt!', 'Persoon succesvol opgeslagen.', function() {});
                    this.activatePersoonLijstCard();
            }

            else if (null != persoonStore.findRecord('email', newValues.email)){
                Ext.Msg.alert('Mistlukt!', 'E-mailadres al in gebruik.', Ext.emptyFn);
            }
        }
        else{
            Ext.Msg.alert('Mistlukt!', 'Vul een geldig telefoonnummer in. Let op: dit veld is niet vereist.', Ext.emptyFn);
        }
    },


    activatePersoonLijstCard: function (direction) {
        var slideDirection = 'left';
        if (direction === "right"){
            slideDirection = "right";
        }
        this.checkOS(slideDirection);
        Ext.getCmp('persoonmain_card').animateActiveItem(0, this.transition);
    },


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //persoonDetailsCard handlers/functions                                                                       //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onBackToPersoonHomeCommand: function () {
        this.activatePersoonLijstCard("right");
    },

    checkOS: function(direction){
        var slideDirection = direction;

        if (Ext.os.is.Android) {
            this.transition = { duration: 0, easing: null, type: null, direction: null}
        }
        else if (slideDirection === "right" && !Ext.os.is.Android){
            this.transition = {type: 'slide', direction: 'right'}
        }
        else {
            this.transition = {type: 'slide', direction: 'left'}
        }
    },


    // Base Class functions.
    launch: function () {
        this.callParent(arguments);
        var persoonStore = Ext.getStore("PersoonStore");
        persoonStore.load();
        console.log("launch Persoon controller");
    },
    init: function () {
        this.callParent(arguments);
        console.log("init");
    }
});
