Ext.define("app.controller.TodoLijstFilterController", {
    extend: "Ext.app.Controller",
    config: {
        refs: {

            todoLijstAlleCard: "todolijstallecard",
            todoLijstOnderhandenCard: "todolijstonderhandencard",
            todoLijstAfgehandeldCard: "todolijstafgehandeldcard",

            todoSearchfieldOnderhanden: '#searchfieldOnderhanden',
            todoSegmentedButtonOnderhanden: '#segmentedButtonOnderhanden',

            todoSearchfieldAlle: '#searchfieldAlle',
            todoSegmentedButtonAlle: '#segmentedButtonAlle',

            todoSearchfieldAfgehandeld: '#searchfieldAfgehandeld',
            todoSegmentedButtonAfgehandeld: '#segmentedButtonAfgehandeld'
        },

        control: {
            todoLijstAlleCard:{
                zoekCommand: "onZoekAlleCommand",
                stopZoekCommand: "onStopZoekAlleCommand",
                alleTodoCommand: "onAlleAlleTodosButtonCommand",
                priveTodoCommand: "onAllePriveTodoCommand",
                zakelijkTodoCommand: "onAlleZakelijkTodoCommand"
            },
            todoLijstOnderhandenCard:{
                zoekCommand: "onZoekOnderhandenCommand",
                stopZoekCommand: "onStopZoekOnderhandenCommand",
                alleTodoCommand: "onOnderhandenAlleTodosButtonCommand",
                priveTodoCommand: "onOnderhandenPriveTodoCommand",
                zakelijkTodoCommand: "onOnderhandenZakelijkTodoCommand"
            },
            todoLijstAfgehandeldCard:{
                zoekCommand: "onZoekAfgehandeldCommand",
                stopZoekCommand: "onStopZoekAfgehandeldCommand",
                alleTodoCommand: "onAfgehandeldAlleTodosButtonCommand",
                priveTodoCommand: "onAfgehandeldPriveTodoCommand",
                zakelijkTodoCommand: "onAfgehandeldZakelijkTodoCommand"
            }
        }
    },


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //todoLijstAlle handlers/functions                                                                             //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onAlleAlleTodosButtonCommand: function(){
        var searchfield = this.getTodoSearchfieldAlle();
        var store = Ext.getStore('TodoStore');
        searchfield.reset();
        store.clearFilter();
        Ext.getCmp('todomain_card').animateActiveItem(2,{type: 'slide', direction: 'left'});
    },


    onAllePriveTodoCommand: function() {
        var searchfield = this.getTodoSearchfieldAlle();
        var queryType = "Prive";
        var store = Ext.getStore('TodoStore');
        searchfield.reset();
        store.clearFilter();

        if(queryType){
            var thisRegExType = new RegExp(queryType, "i");
            store.filterBy(function(record) {
                if (thisRegExType.test(record.get('type'))
                    ) {
                    return true;
                };
                return false;
            });
        }
    },


    onAlleZakelijkTodoCommand: function() {
        var searchfield = this.getTodoSearchfieldAlle();
        var queryType = "Zakelijk";
        var store = Ext.getStore('TodoStore');
        searchfield.reset();
        store.clearFilter();

        if(queryType){
            var thisRegExType = new RegExp(queryType, "i");
            store.filterBy(function(record) {
                if (thisRegExType.test(record.get('type'))
                    ) {
                    return true;
                };
                return false;
            });
        }
    },


    onStopZoekAlleCommand: function(){
        var segmentButton = this.getTodoSegmentedButtonAlle();
        segmentButton.setPressedButtons([0]);
        this.onAlleAlleTodosButtonCommand();
    },


    onZoekAlleCommand: function(input, field){
        queryString = field.getValue();
        var segmentButton = this.getTodoSegmentedButtonAlle();
        var knopIngedrukt = segmentButton.getPressedButtons()[0].getText();
        var store = Ext.getStore('TodoStore');

        if(knopIngedrukt === "Alle"){
            store.clearFilter();
            if(queryString){
                var thisRegExZoekveld = new RegExp(queryString, "i");
                store.filterBy(function(record) {
                    if (thisRegExZoekveld.test(record.get('korteOmschrijving')) ||
                        thisRegExZoekveld.test(record.get('urgentie')) ||
                        thisRegExZoekveld.test(record.get('email'))
                        ) {
                        return true;
                    };
                    return false;
                });
            }
        }
        else if (knopIngedrukt === "Prive"){
            var queryType = "Prive";
            var thisRegExType = new RegExp(queryType, "i");
            store.clearFilter();
            store.filterBy(function(record) {
                if (thisRegExType.test(record.get('type'))){
                    return true;
                };
                return false;
            });
            if(queryString){
                var thisRegExType = new RegExp(queryType, "i");
                var thisRegExZoekveld = new RegExp(queryString, "i");
                store.filterBy(function(record) {
                    if (thisRegExType.test(record.get('type')) &&
                        thisRegExZoekveld.test(record.get('korteOmschrijving')) ||
                        thisRegExZoekveld.test(record.get('urgentie')) ||
                        thisRegExZoekveld.test(record.get('email'))
                        ) {
                        return true;
                    };
                    return false;
                });
            }
        }
        else if (knopIngedrukt === "Zakelijk"){
            var queryType = "Zakelijk";
            var thisRegExType = new RegExp(queryType, "i");
            store.clearFilter();
            store.filterBy(function(record) {
                if (thisRegExType.test(record.get('type'))){
                    return true;
                };
                return false;
            });
            if(queryString){
                    thisRegExType = new RegExp(queryType, "i");
                var thisRegExZoekveld = new RegExp(queryString, "i");
                store.filterBy(function(record) {
                    if (thisRegExType.test(record.get('type')) &&
                        thisRegExZoekveld.test(record.get('korteOmschrijving')) ||
                        thisRegExZoekveld.test(record.get('urgentie')) ||
                        thisRegExZoekveld.test(record.get('email'))
                        ) {
                        return true;
                    };
                    return false;
                });
            }
        }
    },




    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //todoLijstOnderhanden handlers/functions                                                                             //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onOnderhandenAlleTodosButtonCommand: function(){
        var searchfield = this.getTodoSearchfieldOnderhanden();
        searchfield.reset();
        var queryStatus = "Onderhanden";
        var store = Ext.getStore('TodoStore');
        store.clearFilter();

        if(queryStatus){
            var thisRegExStatus = new RegExp(queryStatus, "i");
            store.filterBy(function(record) {
                if (thisRegExStatus.test(record.get('status'))) {
                    return true;
                };
                return false;
            });
        }
        Ext.getCmp('todomain_card').animateActiveItem(3,{type: 'slide', direction: 'left'});
    },

    onOnderhandenPriveTodoCommand: function() {
        var searchfield = this.getTodoSearchfieldOnderhanden();
        var queryStatus = "Onderhanden";
        var queryType = "Prive";
        var store = Ext.getStore('TodoStore');
        searchfield.reset();
        store.clearFilter();

        if(queryType){
            var thisRegExType = new RegExp(queryType, "i");
            var thisRegExStatus = new RegExp(queryStatus, "i");
            store.filterBy(function(record) {
                if (thisRegExType.test(record.get('type'))
                    &&
                    thisRegExStatus.test(record.get('status'))
                    ) {
                    return true;
                };
                return false;
            });
        }
    },


    onOnderhandenZakelijkTodoCommand: function() {
        var searchfield = this.getTodoSearchfieldOnderhanden();
        var queryStatus = "Onderhanden";
        var queryType = "Zakelijk";
        var store = Ext.getStore('TodoStore');
        searchfield.reset();
        store.clearFilter();

        if(queryType){
            var thisRegExType = new RegExp(queryType, "i");
            var thisRegExStatus = new RegExp(queryStatus, "i");
            store.filterBy(function(record) {
                if (thisRegExType.test(record.get('type')) &&
                    thisRegExStatus.test(record.get('status'))
                    ) {
                    return true;
                };
                return false;
            });
        }
    },


    onStopZoekOnderhandenCommand: function(){
        var segmentButton = this.getTodoSegmentedButtonOnderhanden();
        segmentButton.setPressedButtons([0]);
        this.onOnderhandenAlleTodosButtonCommand();
    },


    onZoekOnderhandenCommand: function(input, field){
        queryString = field.getValue();
        var segmentButton = this.getTodoSegmentedButtonOnderhanden();
        var knopIngedrukt = segmentButton.getPressedButtons()[0].getText();
        var store = Ext.getStore('TodoStore');
        var queryStatus = "Onderhanden";

        if(knopIngedrukt === "Alle"){
            var queryStatus = "Onderhanden";
            var thisRegExStatus = new RegExp(queryStatus, "i");
            store.clearFilter();
            store.filterBy(function(record) {
                if (thisRegExStatus.test(record.get('status'))) {
                    return true;
                };
                return false;
            });
            if(queryString){
                    thisRegExStatus = new RegExp(queryStatus, "i");
                var thisRegExZoekveld = new RegExp(queryString, "i");
                store.filterBy(function(record) {
                    if (thisRegExStatus.test(record.get('status'))&&
                        thisRegExZoekveld.test(record.get('korteOmschrijving')) ||
                        thisRegExZoekveld.test(record.get('urgentie')) ||
                        thisRegExZoekveld.test(record.get('email'))
                        ) {
                        return true;
                    };
                    return false;
                });
            }
        }
        else if (knopIngedrukt === "Prive"){
            var queryType = "Prive";
            var queryStatus = "Onderhanden";
            var thisRegExType = new RegExp(queryType, "i");
            var thisRegExStatus = new RegExp(queryStatus, "i");
            store.clearFilter();
            store.filterBy(function(record) {
                if (thisRegExType.test(record.get('type')) &&
                    thisRegExStatus.test(record.get('status'))) {
                    return true;
                };
                return false;
            });
            if(queryString){
                    thisRegExType = new RegExp(queryType, "i");
                    thisRegExStatus = new RegExp(queryStatus, "i");
                var thisRegExZoekveld = new RegExp(queryString, "i");
                store.filterBy(function(record) {
                    if (thisRegExType.test(record.get('type')) &&
                        thisRegExStatus.test(record.get('status')) &&
                        thisRegExZoekveld.test(record.get('korteOmschrijving')) ||
                        thisRegExZoekveld.test(record.get('urgentie')) ||
                        thisRegExZoekveld.test(record.get('email'))
                        ) {
                        return true;
                    };
                    return false;
                });
            }
        }
        else if (knopIngedrukt === "Zakelijk"){
            var queryType = "Zakelijk";
            var queryStatus = "Onderhanden";
            var thisRegExType = new RegExp(queryType, "i");
            var thisRegExStatus = new RegExp(queryStatus, "i");
            store.clearFilter();
            store.filterBy(function(record) {
                if (thisRegExType.test(record.get('type')) &&
                    thisRegExStatus.test(record.get('status'))) {
                    return true;
                };
                return false;
            });
            if(queryString){
                    thisRegExType = new RegExp(queryType, "i");
                    thisRegExStatus = new RegExp(queryStatus, "i");
                var thisRegExZoekveld = new RegExp(queryString, "i");
                store.filterBy(function(record) {
                    if (thisRegExType.test(record.get('type')) &&
                        thisRegExStatus.test(record.get('status')) &&
                        thisRegExZoekveld.test(record.get('korteOmschrijving')) ||
                        thisRegExZoekveld.test(record.get('urgentie')) ||
                        thisRegExZoekveld.test(record.get('email'))
                        ) {
                        return true;
                    };
                    return false;
                });
            }
        }
    },





    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //todoLijstAfgehandeld handlers/functions                                                                     //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onAfgehandeldAlleTodosButtonCommand: function(){
        var searchfield = this.getTodoSearchfieldAfgehandeld();
        var queryString = "Afgehandeld";
        var store = Ext.getStore('TodoStore');
        searchfield.reset();
        store.clearFilter();

        if(queryString){
            var thisRegExStatus = new RegExp(queryString, "i");
            store.filterBy(function(record) {
                if (thisRegExStatus.test(record.get('status'))) {
                    return true;
                };
                return false;
            });
        }
        Ext.getCmp('todomain_card').animateActiveItem(4,{type: 'slide', direction: 'left'});
    },

    onAfgehandeldPriveTodoCommand: function() {
        var searchfield = this.getTodoSearchfieldAfgehandeld();
        var queryStatus = "Afgehandeld";
        var queryType = "Prive";
        var store = Ext.getStore('TodoStore');
        searchfield.reset();
        store.clearFilter();

        if(queryType){
            var thisRegExType = new RegExp(queryType, "i");
            var thisRegExStatus = new RegExp(queryStatus, "i");
            store.filterBy(function(record) {
                if (thisRegExType.test(record.get('type')) &&
                    thisRegExStatus.test(record.get('status'))
                    ) {
                    return true;
                };
                return false;
            });
        }
    },

    onAfgehandeldZakelijkTodoCommand: function() {
        var searchfield = this.getTodoSearchfieldAfgehandeld();
        var queryStatus = "Afgehandeld";
        var queryType = "Zakelijk";
        var store = Ext.getStore('TodoStore');
        searchfield.reset();
        store.clearFilter();

        if(queryType){
            var thisRegExType = new RegExp(queryType, "i");
            var thisRegExStatus = new RegExp(queryStatus, "i");
            store.filterBy(function(record) {
                if (thisRegExType.test(record.get('type')) &&
                    thisRegExStatus.test(record.get('status'))
                    ) {
                    return true;
                };
                return false;
            });
        }
    },



    onStopZoekAfgehandeldCommand: function(){
        var segmentButton = this.getTodoSegmentedButtonAfgehandeld();
        segmentButton.setPressedButtons([0]);
        this.onAfgehandeldAlleTodosButtonCommand();
    },



    onZoekAfgehandeldCommand: function(input, field){
        queryString = field.getValue();
        var segmentButton = this.getTodoSegmentedButtonAfgehandeld();
        var knopIngedrukt = segmentButton.getPressedButtons()[0].getText();
        var store = Ext.getStore('TodoStore');
        var queryStatus = "Afgehandeld";

        if(knopIngedrukt === "Alle"){
            var thisRegExStatus = new RegExp(queryStatus, "i");
            store.clearFilter();
            store.filterBy(function(record) {
                if (thisRegExStatus.test(record.get('status'))) {
                    return true;
                };
                return false;
            });
            if(queryString){
                    thisRegExStatus = new RegExp(queryStatus, "i");
                var thisRegExZoekveld = new RegExp(queryString, "i");
                store.filterBy(function(record) {
                    if (thisRegExStatus.test(record.get('status'))&&
                        thisRegExZoekveld.test(record.get('korteOmschrijving')) ||
                        thisRegExZoekveld.test(record.get('urgentie')) ||
                        thisRegExZoekveld.test(record.get('email'))
                        ) {
                        return true;
                    };
                    return false;
                });
            }
        }
        else if (knopIngedrukt === "Prive"){
            var queryType = "Prive";
            var thisRegExType = new RegExp(queryType, "i");
            var thisRegExStatus = new RegExp(queryStatus, "i");
            store.clearFilter();
            store.filterBy(function(record) {
                if (thisRegExType.test(record.get('type')) &&
                    thisRegExStatus.test(record.get('status'))) {
                    return true;
                };
                return false;
            });
            if(queryString){
                thisRegExType = new RegExp(queryType, "i");
                thisRegExStatus = new RegExp(queryStatus, "i");
                var thisRegExZoekveld = new RegExp(queryString, "i");
                store.filterBy(function(record) {
                    if (thisRegExType.test(record.get('type')) &&
                        thisRegExStatus.test(record.get('status')) &&
                        thisRegExZoekveld.test(record.get('korteOmschrijving')) ||
                        thisRegExZoekveld.test(record.get('urgentie')) ||
                        thisRegExZoekveld.test(record.get('email'))
                        ) {
                        return true;
                    };
                    return false;
                });
            }
        }
        else if (knopIngedrukt === "Zakelijk"){
            var queryType = "Zakelijk";
            var thisRegExType = new RegExp(queryType, "i");
            var thisRegExStatus = new RegExp(queryStatus, "i");
            store.clearFilter();
            store.filterBy(function(record) {
                if (thisRegExType.test(record.get('type')) &&
                    thisRegExStatus.test(record.get('status'))) {
                    return true;
                };
                return false;
            });
            if(queryString){
                thisRegExType = new RegExp(queryType, "i");
                thisRegExStatus = new RegExp(queryStatus, "i");
                thisRegExZoekveld = new RegExp(queryString, "i");
                store.filterBy(function(record) {
                    if (thisRegExType.test(record.get('type')) &&
                        thisRegExStatus.test(record.get('status')) &&
                        thisRegExZoekveld.test(record.get('korteOmschrijving')) ||
                        thisRegExZoekveld.test(record.get('urgentie')) ||
                        thisRegExZoekveld.test(record.get('email'))
                        ) {
                        return true;
                    };
                    return false;
                });
            }
        }
    },


    // Base Class functions.
    launch: function () {
        this.callParent(arguments);
        var todoStore = Ext.getStore("TodoStore");
        todoStore.load();
        console.log("launch TodoLijstFilter controller");
    },
    init: function () {
        this.callParent(arguments);
        console.log("init");
    }
});

