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
        Ext.getCmp('homemain_card').animateActiveItem(1,{type: 'slide', direction: 'left'});
    },

    changeScreenToResetPage: function () {
        Ext.getCmp('homemain_card').animateActiveItem(2,{type: 'slide', direction: 'left'});
    },



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Home Reset handlers/functions                                                                               //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    resetAllData: function() {

        Ext.Msg.confirm("Zeker?", "Weet u het zeker?", function(msg) {
            if (msg == "yes"){
                var persoonStore = Ext.getStore("PersoonStore");
                persoonStore.removeAll();
                persoonStore.sync();
                Ext.getCmp('homemain_card').animateActiveItem(0,{type: 'slide', direction: 'right'});
                Ext.Msg.alert('Informatie', 'Data succesvol reset.');
            }
            else{
                Ext.Msg.alert('Informatie', 'Data niet reset.');
            }
        });
    },



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Algemene handlers/functions                                                                                 //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    changeScreenToHomePage: function () {
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