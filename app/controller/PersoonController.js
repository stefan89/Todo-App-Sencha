Ext.define("app.controller.PersoonController", {
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



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //persoonLijstCard handlers/functions                                                                         //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onNieuwPersoonCommand: function () {
        console.log("onNieuwPersoonCommand");

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
                            console.log("onDetailsPersoonCommand");
                            this.activatePersoonDetailsCard(record);
    },


    onZoekCommand: function(input, field) {
        queryString = field.getValue();

        var store = Ext.getStore('DataStore');
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
        var store = Ext.getStore('DataStore');
        store.clearFilter();
    },


    activatePersoonDetailsCard: function (record) {
        var persoonDetailsCard = this.getPersoonDetailsCard();
        persoonDetailsCard.setRecord(record); // load() is deprecated.
        Ext.getCmp('persoonmain_card').animateActiveItem(2,{type: 'slide', direction: 'left'});
    },


    activatePersoonEditorCard: function (record) {
        var persoonEditorCard = this.getPersoonEditCard();

        persoonEditorCard.setRecord(record); // load() is deprecated.
        Ext.getCmp('persoonmain_card').animateActiveItem(1,{type: 'slide', direction: 'left'});
    },




    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //persoonEditCard handlers/functions                                                                          //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onOpslaanPersoonCommand: function () {
        console.log("onPersoonOpslaanCommand");

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

        var errors = currentPersoon.validate();

        if (!errors.isValid()) {
            Ext.Msg.alert('Wacht!', errors.getByField("voorNaam")[0].getMessage(), Ext.emptyFn);
            currentPersoon.reject();
            return;
        }

        var persoonStore = Ext.getStore("DataStore");

        if (null == persoonStore.findRecord('email', newValues.email)){
                persoonStore.add(currentPersoon);
                persoonStore.sync();
                persoonStore.sort([{ property: 'achterNaam', direction: 'ASC'}]);

                Ext.Msg.alert('Gelukt!', 'Persoon succesvol opgeslagen', function() {});
                this.activatePersoonLijstCard();
        }

        else if (null != persoonStore.findRecord('email', newValues.email)){
            Ext.Msg.alert('Mistlukt!', 'E-mailadres al in gebruik', Ext.emptyFn);
        }
    },


    activatePersoonLijstCard: function () {
        Ext.getCmp('persoonmain_card').animateActiveItem(0,{type: 'slide', direction: 'right'});
    },


    onBackToPersoonHomeCommand: function () {
        console.log("onBackToPersoonHomeCommand");
        this.activatePersoonLijstCard();
    },



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //persoonDetailsCard handlers/functions                                                                       //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onBackToPersoonHomeCommand: function () {
        console.log("onBackToPersoonHomeCommand");
        this.activatePersoonLijstCard();
    },


    // Base Class functions.
    launch: function () {
        this.callParent(arguments);
        var dataStore = Ext.getStore("DataStore");
        dataStore.load();
        console.log("launch Persoon controller");
    },
    init: function () {
        this.callParent(arguments);
        console.log("init");
    }
});





//var persoonId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

//id: persoonId,
//dateCreated: now,

//onVerwijderPersoonCommand: function () {
//    console.log("onVerwijderPersoonCommand");

//    var persoonEditorCard = this.getPersoonEditCard();
//    var currentPersoon = persoonEditorCard.getRecord();
//    var persoonStore = Ext.getStore("DataStore");

//    persoonStore.remove(currentPersoon);
//    persoonStore.sync();
//    this.activatePersoonLijstCard();
//},





//if (null == persoonStore.findRecord('email', currentPersoon.data.email)) {
//    persoonStore.add(currentPersoon);
//    Ext.Msg.alert('Gelukt!', 'Persoon succesvol opgeslagen', Ext.emptyFn);
//    persoonStore.sync();
//   persoonStore.sort([{ property: 'achterNaam', direction: 'ASC'}]);

//}






// if (null != persoonStore.findRecord('email', currentPersoon.data.email)) {
//persoonStore.add(currentPersoon);
//     Ext.Msg.alert('Foutje!', 'Emailadres bestaat al', Ext.emptyFn);
//  persoonStore.sync();
//  persoonStore.sort([{ property: 'achterNaam', direction: 'ASC'}]);
//this.activatePersoonLijstCard();
// }
//}
// else{
//    Ext.Msg.alert('Foutje!', 'Emailadres bestaat al', Ext.emptyFn);
//}
//this.activatePersoonLijstCard();