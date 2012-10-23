Ext.define("app.controller.TodoController", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
            todoHomeCard : "todohomecard",
            todoEditCard : "todoeditcard",
            todoLijstAlleCard: "todolijstallecard",
            todoLijstOnderhandenCard: "todolijstonderhandencard",
            todoLijstAfgehandeldCard: "todolijstafgehandeldcard",
            todoDetailsCard: "tododetailscard"
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
                zakelijkTodoCommand: "onAlleZakelijkTodoCommand",
                detailsTodoCommand: "onDetailsTodoCommand"

            },
            todoLijstOnderhandenCard:{
                backToTodoHomeCommand: "onBackToTodoHomeCommand",
                nieuweTodoButtonCommand: "onNieuweTodoButtonCommand",
                //zoekCommand: "onZoekCommand",
                //stopZoekCommand: "onStopZoekCommand"
                alleTodoCommand: "onOnderhandenAlleTodosButtonCommand",
                priveTodoCommand: "onOnderhandenPriveTodoCommand",
                zakelijkTodoCommand: "onOnderhandenZakelijkTodoCommand",
                detailsTodoCommand: "onDetailsTodoCommand"
            },
            todoLijstAfgehandeldCard:{
                backToTodoHomeCommand: "onBackToTodoHomeCommand",
                nieuweTodoButtonCommand: "onNieuweTodoButtonCommand",
                //zoekCommand: "onZoekCommand",
                //stopZoekCommand: "onStopZoekCommand"
                alleTodoCommand: "onAfgehandeldAlleTodosButtonCommand",
                priveTodoCommand: "onAfgehandeldPriveTodoCommand",
                zakelijkTodoCommand: "onAfgehandeldZakelijkTodoCommand",
                detailsTodoCommand: "onDetailsTodoCommand"
            },
            todoDetailsCard: {
                backToTodoHomeCommand: "onBackToTodoOnderhandenCommand"
            }
        }
    },



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //todoHomeCard handlers/functions                                                                             //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    onNieuweTodoButtonCommand: function(){
        var store = Ext.getStore('PersoonStore');
        var aantalPersoonRecords = store.getCount();

        if (aantalPersoonRecords > 0){
            var dataFirstPersoonRow = store.first().getData();
            var mail = dataFirstPersoonRow.email;
            var now = new Date();
            var id = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

            var nieuweTodo = Ext.create("app.model.TodoModel", {
                todoId: id,
                email: "mail",
                korteOmschrijving: "",
                langeOmschrijving: "",
                datum: now,
                urgentie: "1",
                plaatsOplevering: "",
                status: "Onderhanden",
                type: "Prive"
        });
            this.activateTodoEditorCard(nieuweTodo);
        }
        else{
            Ext.Msg.alert('Wacht!', 'Er is nog geen persoon toegevoegd. Dit dient eerst te gebeuren', Ext.emptyFn);
        }
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
        var store = Ext.getStore('TodoStore');
        store.clearFilter();
        Ext.getCmp('todomain_card').animateActiveItem(2,{type: 'slide', direction: 'left'});
    },

    onAllePriveTodoCommand: function() {
        var queryType = "Prive";
        var store = Ext.getStore('TodoStore');
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
        var queryType = "Zakelijk";
        var store = Ext.getStore('TodoStore');
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
        var todoEditorCard = this.getTodoEditCard();
        var currentTodo = todoEditorCard.getRecord();
        var newValues = todoEditorCard.getValues();

        currentTodo.set("email", newValues.email);
        currentTodo.set("korteOmschrijving", newValues.korteOmschrijving);
        currentTodo.set("langeOmschrijving", newValues.langeOmschrijving);
        currentTodo.set("datum", newValues.datum);
        currentTodo.set("urgentie", newValues.urgentie);
        currentTodo.set("plaatsOplevering", newValues.plaatsOplevering);
        currentTodo.set("type", newValues.type);

        var errors = currentTodo.validate();

        if (!errors.isValid()) {
            console.log('Aantal errors: ' + errors.length);
            errors.each(function (item, index, length) {
                Ext.Msg.alert('Mislukt!',item.getMessage(), Ext.emptyFn);
            });
            currentTodo.reject();
            return;
        }

        var todoStore = Ext.getStore("TodoStore");
        if (null == todoStore.findRecord('todoId', currentTodo.todoId)){
            todoStore.add(currentTodo);
            todoStore.sync();
            todoStore.sort([{ property: 'korteOmschrijving', direction: 'ASC'}]);

            Ext.Msg.alert('Gelukt!', 'Todo succesvol opgeslagen.', function() {});
            this.onOnderhandenAlleTodosButtonCommand();
        }
        else if (null != persoonStore.findRecord('todoId', currentTodo.todoId)){
            Ext.Msg.alert('Mistlukt!', 'TodoID bestaat al.', Ext.emptyFn);
        }
    },




    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //persoonDetailsCard handlers/functions                                                                       //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onBackToTodoOnderhandenCommand: function(){
        this.onBackToTodoHomeCommand();
    },




    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Algemene handlers/functions                                                                                 //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onBackToTodoHomeCommand: function(){
        Ext.getCmp('todomain_card').animateActiveItem(0,{type: 'slide', direction: 'right'});
    },


    onDetailsTodoCommand: function (list, record) {
        this.activateTodoDetailsCard(record);
    },

    activateTodoDetailsCard: function (record) {
        var todoDetailsCard = this.getTodoDetailsCard();
        todoDetailsCard.setRecord(record); // load() is deprecated.
        Ext.getCmp('todomain_card').animateActiveItem(5,{type: 'slide', direction: 'left'});
    },


    // Base Class functions.
    launch: function () {
        this.callParent(arguments);
        var todoStore = Ext.getStore("TodoStore");
        todoStore.load();
        console.log("launch Todo controller");
    },
    init: function () {
        this.callParent(arguments);
        console.log("init");
    }
});

