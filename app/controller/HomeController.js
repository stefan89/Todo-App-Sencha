Ext.define("app.controller.HomeController", {
    extend: "Ext.app.Controller",

    config: {
        refs: {
            overPageButton: "button[action=ButtonHomeOverClicked]",
            resetPageButton: "button[action=ButtonHomeResetClicked]",
            backButton: "button[action=ButtonBackToHomeClicked]",
            resetDataButton: "button[action=ButtonResetDataClicked]"
        },
        control: {
            overPageButton: {
                tap: "changeScreenToOverPage"
            },

            resetPageButton: {
                tap: "changeScreenToResetPage"
            },
            backButton: {
                tap: "changeScreenToHomePage"
            },
            resetDataButton: {
                tap: "resetAllData"
            }

        }
    },

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Home handlers/functions                                                                                     //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    changeScreenToOverPage: function () {
        console.log("Op home over knop gedrukt - verander scherm naar over pagina");
        Ext.getCmp('homemain_card').animateActiveItem(1,{type: 'slide', direction: 'left'});
    },

    changeScreenToResetPage: function () {
        console.log("Op home reset knop gedrukt - verander scherm naar reset pagina");
        Ext.getCmp('homemain_card').animateActiveItem(2,{type: 'slide', direction: 'left'});
    },




    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Home Reset handlers/functions                                                                               //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    resetAllData: function() {

        Ext.Msg.confirm("Zeker?", "Weet u het zeker?", function(msg) {
            if (msg == "yes"){
                console.log("Data reset");
                var persoonStore = Ext.getStore("PersoonStore");
                persoonStore.removeAll();
                persoonStore.sync();
            }
            else{
                console.log("Data niet reset");
            }
        });
    },






    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Algemene handlers/functions                                                                                 //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    changeScreenToHomePage: function () {
        console.log("Op back knop gedrukt - verander scherm naar Home hoofd");
        Ext.getCmp('homemain_card').animateActiveItem(0,{type: 'slide', direction: 'right'});
    },






// Base Class functions.
    launch: function () {
        this.callParent(arguments);
        console.log("launch Home controller");
    },
    init: function () {
        this.callParent(arguments);
        console.log("init");
    }
});