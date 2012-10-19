Ext.define("app.controller.TodoController", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
            todoHomeCard : "todohomecard",
            todoEditCard : "todoeditcard",
            todoLijstAlleCard: "todolijstallecard",
            todoLijstOnderhandenCard: "todolijstonderhandencard",
            todoLijstAfgehandeldCard: "todolijstafgehandeldcard"
        },

        control: {
            todoHomeCard: {
                nieuweTodoButtonCommand: "onNieuweTodoButtonCommand",
                alleTodosButtonCommand: "onAlleAlleTodosButtonCommand",
                onderhandenTodosButtonCommand: "onOnderhandenAlleTodosButtonCommand",
                afgehandeldTodosButtonCommand: "onAfgehandeldAlleTodosButtonCommand"
            },
            todoEditCard: {
                backToTodoHomeCommand: "onBackToTodoHomeCommand",
                opslaanTodoCommand: "onOpslaanTodoCommand"
            },
            todoLijstAlleCard:{
                backToTodoHomeCommand: "onBackToTodoHomeCommand",
                nieuweTodoButtonCommand: "onNieuweTodoButtonCommand",
                //zoekCommand: "onZoekCommand"//,
                //stopZoekCommand: "onStopZoekCommand"
                alleTodoCommand: "onAlleAlleTodosButtonCommand",
                priveTodoCommand: "onAllePriveTodoCommand",
                zakelijkTodoCommand: "onAlleZakelijkTodoCommand"

            },
            todoLijstOnderhandenCard:{
                backToTodoHomeCommand: "onBackToTodoHomeCommand",
                nieuweTodoButtonCommand: "onNieuweTodoButtonCommand",
                //zoekCommand: "onZoekCommand",
                //stopZoekCommand: "onStopZoekCommand"
                alleTodoCommand: "onOnderhandenAlleTodosButtonCommand",
                priveTodoCommand: "onOnderhandenPriveTodoCommand",
                zakelijkTodoCommand: "onOnderhandenZakelijkTodoCommand"
            },
            todoLijstAfgehandeldCard:{
                backToTodoHomeCommand: "onBackToTodoHomeCommand",
                nieuweTodoButtonCommand: "onNieuweTodoButtonCommand",
                //zoekCommand: "onZoekCommand",
                //stopZoekCommand: "onStopZoekCommand"
                alleTodoCommand: "onAfgehandeldAlleTodosButtonCommand",
                priveTodoCommand: "onAfgehandeldPriveTodoCommand",
                zakelijkTodoCommand: "onAfgehandeldZakelijkTodoCommand"

            }
        }
    },



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //todoHomeCard handlers/functions                                                                             //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    onNieuweTodoButtonCommand: function(){
        console.log("NIEUWE TODO PAGINA OPENEN");

        var now = new Date();
        var id = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

        var nieuweTodo = Ext.create("app.model.TodoModel", {
            todoId: id,
            email: "",
            korteOmschrijving: "",
            langeOmschrijving: "",
            datum: now,
            urgentie: "1",
            plaatsOplevering: "",
            status: "Onderhanden",
            type: "Prive"

        });
        this.activateTodoEditorCard(nieuweTodo);
    },

    getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },



    activateTodoEditorCard: function (record) {
        var todoEditorCard = this.getTodoEditCard();

        todoEditorCard.setRecord(record); // load() is deprecated.
        Ext.getCmp('todomain_card').animateActiveItem(1,{type: 'slide', direction: 'left'});
    },






    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //todoLijstAlle handlers/functions                                                                             //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onAlleAlleTodosButtonCommand: function(){
        console.log("ALLE TODO's weergeven");

        var store = Ext.getStore('TodoStore');
        store.clearFilter();
        Ext.getCmp('todomain_card').animateActiveItem(2,{type: 'slide', direction: 'left'});
    },

    onAllePriveTodoCommand: function() {
        //var queryStatus = "Onderhanden";
        var queryType = "Prive";

        var store = Ext.getStore('TodoStore');
        store.clearFilter();

        if(queryType){
            var thisRegExType = new RegExp(queryType, "i");
            //var thisRegExStatus = new RegExp(queryStatus, "i");
            store.filterBy(function(record) {
                if (thisRegExType.test(record.get('type'))
                  //  &&
                  //  thisRegExStatus.test(record.get('status'))
                    ) {
                    return true;
                };
                return false;
            });
        }
    },

    onAlleZakelijkTodoCommand: function() {
        //var queryStatus = "Onderhanden";
        var queryType = "Zakelijk";

        var store = Ext.getStore('TodoStore');
        store.clearFilter();

        if(queryType){
            var thisRegExType = new RegExp(queryType, "i");
           // var thisRegExStatus = new RegExp(queryStatus, "i");
            store.filterBy(function(record) {
                if (thisRegExType.test(record.get('type'))
                   // &&
                 //   thisRegExStatus.test(record.get('status'))
                    ) {
                    return true;
                };
                return false;
            });
        }
    },


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //todoLijstOnderhanden handlers/functions                                                                             //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onOnderhandenAlleTodosButtonCommand: function(){
        var store = Ext.getStore('TodoStore');
        store.clearFilter();
        var queryStatus = "Onderhanden";

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
        var queryStatus = "Onderhanden";
        var queryType = "Prive";

        var store = Ext.getStore('TodoStore');
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
        var queryStatus = "Onderhanden";
        var queryType = "Zakelijk";

        var store = Ext.getStore('TodoStore');
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


    //onStopZoekCommand: function() {
    //    var store = Ext.getStore('TodoStore');
    //    store.clearFilter();
    //},




    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //todoLijstAfgehandeld handlers/functions                                                                             //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onAfgehandeldAlleTodosButtonCommand: function(){
        console.log("ALLE TODO's weergeven");

        var store = Ext.getStore('TodoStore');
        store.clearFilter();
        var queryString = "Afgehandeld";

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
        var queryStatus = "Afgehandeld";
        var queryType = "Prive";

        var store = Ext.getStore('TodoStore');
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

    onAfgehandeldZakelijkTodoCommand: function() {
        var queryStatus = "Afgehandeld";
        var queryType = "Zakelijk";

        var store = Ext.getStore('TodoStore');
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







    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //todoEditorCard handlers/functions                                                                           //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    onOpslaanTodoCommand: function(){
        console.log("Todo opslaan");

        var todoEditorCard = this.getTodoEditCard();
        var currentTodo = todoEditorCard.getRecord();
        var newValues = todoEditorCard.getValues();

       // Update the current persoon fields with form values.
        currentTodo.set("email", newValues.email);
        currentTodo.set("korteOmschrijving", newValues.korteOmschrijving);
        currentTodo.set("langeOmschrijving", newValues.langeOmschrijving);
        currentTodo.set("datum", newValues.datum);
        currentTodo.set("urgentie", newValues.urgentie);
        currentTodo.set("plaatsOplevering", newValues.plaatsOplevering);
        currentTodo.set("type", newValues.type);

        var errors = currentTodo.validate();

        if (!errors.isValid()) {
            Ext.Msg.alert('Wacht!', 'foutje', Ext.emptyFn); //errors.getByField("email")[1].getMessage()
            currentTodo.reject();
            return;
        }

        var todoStore = Ext.getStore("TodoStore");

        if (null == todoStore.findRecord('todoId', currentTodo.todoId)){
            todoStore.add(currentTodo);
            todoStore.sync();
            todoStore.sort([{ property: 'korteOmschrijving', direction: 'ASC'}]);

            Ext.Msg.alert('Gelukt!', 'Todo succesvol opgeslagen', function() {});
            this.onOnderhandenAlleTodosButtonCommand();
        }

        else if (null != persoonStore.findRecord('todoId', currentTodo.todoId)){
            Ext.Msg.alert('Mistlukt!', 'TodoID bestaat al', Ext.emptyFn);
        }

    },





    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Algemene handlers/functions                                                                                 //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onBackToTodoHomeCommand: function(){
        console.log("TERUGGG");
        Ext.getCmp('todomain_card').animateActiveItem(0,{type: 'slide', direction: 'right'});
    },


    // Base Class functions.
    launch: function () {
        this.callParent(arguments);
        var todoStore = Ext.getStore("TodoStore");
        todoStore.load();
        console.log("launch");
    },
    init: function () {
        this.callParent(arguments);
        console.log("init");
    }
});

