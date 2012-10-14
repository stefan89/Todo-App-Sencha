Ext.define("app.controller.PersoonController", {
    extend: "Ext.app.Controller",

    config: {
        refs: {
            nieuwButton: "button[action=ButtonOpenToevoegPaginaClicked]",
            backButton: "button[action=ButtonBackToPersoonClicked]"

        },
        control: {
            nieuwButton: {
                tap: "changeScreenToPersoonToevoegPage"
            },
            backButton: {
                tap: "changeScreenToPersoonMainPage"
            }
        }
    },

    changeScreenToPersoonToevoegPage: function () {
        console.log("Op nieuw persoon knop gedrukt - verander scherm naar persoon toevoeg");
        Ext.getCmp('persoonmain_card').animateActiveItem(1,{type: 'slide', direction: 'left'});
    },


    changeScreenToPersoonMainPage: function () {
        console.log("Op back knop gedrukt - verander scherm naar persoon hoofd");
        Ext.getCmp('persoonmain_card').animateActiveItem(0,{type: 'slide', direction: 'right'});
    },


// Base Class functions.
    launch: function () {
        this.callParent(arguments);
        console.log("launch");
    },
    init: function () {
        this.callParent(arguments);
        console.log("init");
    }
});