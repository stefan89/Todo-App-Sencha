Ext.define("app.controller.HomeController", {
    extend: "Ext.app.Controller",

    config: {
        refs: {
            // We're going to lookup our views by xtype.
            overButton: "button[action=ButtonHomeOverClicked]",
            resetButton: "button[action=ButtonHomeResetClicked]",
            backButton: "button[action=ButtonBackToHomeClicked]"

        },
        control: {
            overButton: {
                tap: "onOverCommand"
            },

            resetButton: {
                // The commands fired by the notes list container.
                tap: "onResetCommand"
            },
            backButton: {
                // The commands fired by the notes list container.
                tap: "onBackCommand"
            }
        }
    },

    onOverCommand: function () {
        console.log("Op home over knop gedrukt");
        this.changeScreenToOverPage();
    },


    onResetCommand: function () {
        console.log("Op home reset knop gedrukt");
        this.changeScreenToResetPage();
    },

    onBackCommand: function () {
        console.log("Op back knop gedrukt");
        this.changeScreenToHomePage();
    },

    changeScreenToOverPage: function () {
        console.log("Verander screen!");
        Ext.getCmp('homemain_card').animateActiveItem(1,{type: 'slide', direction: 'left'});
    },

    changeScreenToResetPage: function () {
        console.log("Verander screen!");
        Ext.getCmp('homemain_card').animateActiveItem(2,{type: 'slide', direction: 'left'});
    },

    changeScreenToHomePage: function () {
        console.log("Verander screen!");
        Ext.getCmp('homemain_card').animateActiveItem(0,{type: 'slide', direction: 'right'});
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