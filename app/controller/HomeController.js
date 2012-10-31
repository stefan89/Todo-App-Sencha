Ext.define("app.controller.HomeController", {
    extend: "Ext.app.Controller",
    xtype: 'homeController',

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
    transition: null,

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Home handlers/functions                                                                                     //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    changeScreenToOverPage: function () {
        this.checkOS();
        Ext.getCmp('homemain_card').animateActiveItem(1, this.transition);
    },

    changeScreenToResetPage: function () {
        this.checkOS();
        Ext.getCmp('homemain_card').animateActiveItem(2,this.transition);
    },



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Home Reset handlers/functions                                                                               //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    resetAllData: function() {
        controller = this;

        Ext.Msg.confirm("Zeker?", "Weet u het zeker?", function(msg) {
            if (msg == "yes"){
                var todoStore = Ext.getStore("TodoStore");
                var persoonStore = Ext.getStore("PersoonStore");
                todoStore.removeAll();
                todoStore.sync();
                persoonStore.removeAll();
                persoonStore.sync();
                controller.checkOS('right');
                Ext.getCmp('homemain_card').animateActiveItem(0, controller.transition);
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
        this.checkOS('right');
        Ext.getCmp('homemain_card').animateActiveItem(0, this.transition);
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
        console.log("launch Home controller");
    },
    init: function () {
        this.callParent(arguments);
        console.log("init");
    }
});