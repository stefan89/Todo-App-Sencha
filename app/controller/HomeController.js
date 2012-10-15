Ext.define("app.controller.HomeController", {
    extend: "Ext.app.Controller",

    config: {
        refs: {
            overButton: "button[action=ButtonHomeOverClicked]",
            resetButton: "button[action=ButtonHomeResetClicked]",
            backButton: "button[action=ButtonBackToHomeClicked]"
        },
        control: {
            overButton: {
                tap: "changeScreenToOverPage"
            },

            resetButton: {
                tap: "changeScreenToResetPage"
            },
            backButton: {
                tap: "changeScreenToHomePage"
            }
        }
    },

    changeScreenToOverPage: function () {
        console.log("Op home over knop gedrukt - verander scherm naar over pagina");
        Ext.getCmp('homemain_card').animateActiveItem(1,{type: 'slide', direction: 'left'});
    },

    changeScreenToResetPage: function () {
        console.log("Op home reset knop gedrukt - verander scherm naar reset pagina");
        Ext.getCmp('homemain_card').animateActiveItem(2,{type: 'slide', direction: 'left'});
    },

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