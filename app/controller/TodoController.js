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
                alleTodosButtonCommand: "onAlleTodosButtonCommand",
                onderhandenTodosButtonCommand: "onOnderhandenTodosButtonCommand",
                afgehandeldTodosButtonCommand: "onAfgehandeldTodosButtonCommand"
            },
            todoEditCard: {
                backToTodoHomeCommand: "onBackToTodoHomeCommand",
                opslaanTodoCommand: "onOpslaanTodoCommand"
            },
            todoLijstAlleCard:{
                backToTodoHomeCommand: "onBackToTodoHomeCommand",
                nieuweTodoButtonCommand: "onNieuweTodoButtonCommand"
            },
            todoLijstOnderhandenCard:{
                backToTodoHomeCommand: "onBackToTodoHomeCommand",
                nieuweTodoButtonCommand: "onNieuweTodoButtonCommand"
            },
            todoLijstAfgehandeldCard:{
                backToTodoHomeCommand: "onBackToTodoHomeCommand",
                nieuweTodoButtonCommand: "onNieuweTodoButtonCommand"
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
            status: "Onderhanden"

        });
        this.activateTodoEditorCard(nieuweTodo);
    },

    getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },


    onAlleTodosButtonCommand: function(){
        console.log("ALLE TODO's weergeven");

        var store = Ext.getStore('TodoStore');
        store.clearFilter();
        Ext.getCmp('todomain_card').animateActiveItem(2,{type: 'slide', direction: 'left'});
    },


    onOnderhandenTodosButtonCommand: function(){
        console.log("ALLE TODO's weergeven");

        var store = Ext.getStore('TodoStore');
        store.clearFilter();
        var queryString = "Onderhanden";

        if(queryString){
            var thisRegEx = new RegExp(queryString, "i");
            store.filterBy(function(record) {
                if (thisRegEx.test(record.get('status'))) {
                    return true;
                };
                return false;
            });
        }
        Ext.getCmp('todomain_card').animateActiveItem(3,{type: 'slide', direction: 'left'});
    },


    onAfgehandeldTodosButtonCommand: function(){
        console.log("ALLE TODO's weergeven");

        var store = Ext.getStore('TodoStore');
        store.clearFilter();
        var queryString = "Afgehandeld";

        if(queryString){
            var thisRegEx = new RegExp(queryString, "i");
            store.filterBy(function(record) {
                if (thisRegEx.test(record.get('status'))) {
                    return true;
                };
                return false;
            });
        }
        Ext.getCmp('todomain_card').animateActiveItem(4,{type: 'slide', direction: 'left'});
    },




    activateTodoEditorCard: function (record) {
        var todoEditorCard = this.getTodoEditCard();

        todoEditorCard.setRecord(record); // load() is deprecated.
        Ext.getCmp('todomain_card').animateActiveItem(1,{type: 'slide', direction: 'left'});
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
            this.onOnderhandenTodosButtonCommand();
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

