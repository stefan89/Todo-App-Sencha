Ext.define("app.controller.TodoController", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
            todoHomeCard : "todohomecard",
            todoEditCard : "todoeditcard",
            todoLijstAlleCard: "todolijstallecard",
            todoLijstOnderhandenCard: "todolijstonderhandencard",
            todoLijstAfgehandeldCard: "todolijstafgehandeldcard",
            todoDetailsCard: "tododetailscard",
            todoMapsCard: "todomapscard",
            todoGoogleMapsCard: "googlemapscard",
            todoDetailsCardVerwijderButton:  '#verwijderButton',
            todoDetailsCardWijzigButton: '#wijzigButton',
            todoDetailsCardAfhandelButton: '#afhandelButton',
            todoSearchfieldOnderhanden: '#searchfieldOnderhanden',
            todoPlaatsOplevering: '#plaatsOplevering'
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
                detailsTodoCommand: "onDetailsTodoCommand"
            },
            todoLijstOnderhandenCard:{
                backToTodoHomeCommand: "onBackToTodoHomeCommand",
                nieuweTodoButtonCommand: "onNieuweTodoButtonCommand",
                detailsTodoCommand: "onDetailsTodoCommand"
            },
            todoLijstAfgehandeldCard:{
                backToTodoHomeCommand: "onBackToTodoHomeCommand",
                nieuweTodoButtonCommand: "onNieuweTodoButtonCommand",
                detailsTodoCommand: "onDetailsTodoCommand"
            },
            todoDetailsCard: {
                backToTodoHomeCommand: "onBackToTodoLijstCommand",
                verwijderTodoCommand: "onVerwijderTodoCommand",
                mapsTodoCommand: "onMapsTodoCommand",
                wijzigTodoCommand: "onWijzigTodoCommand",
                afhandelTodoCommand: "onAfhandelTodoCommand"
            },
            todoMapsCard: {
                backToTodoHomeCommand: "onBackToTodoDetailsCommand"
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



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //todoLijstOnderhanden handlers/functions                                                                             //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onOnderhandenAlleTodosButtonCommand: function(direction){
        var slideDirection = 'left';
        if (direction === "right"){
            slideDirection = "right";
        }
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
        Ext.getCmp('todomain_card').animateActiveItem(3,{type: 'slide', direction: slideDirection});
    },


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //todoLijstAfgehandeld handlers/functions                                                                             //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onAfgehandeldAlleTodosButtonCommand: function(direction){
        var slideDirection = 'left';
        if (direction === "right"){
            slideDirection = "right";
        }
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
        Ext.getCmp('todomain_card').animateActiveItem(4,{type: 'slide', direction: slideDirection});
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
    //todoDetailsCard handlers/functions                                                                       //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    onBackToTodoLijstCommand: function(){
        var status = this.getTodoDetailsCard().getValues().status;
        if (status === "Onderhanden"){
            this.onOnderhandenAlleTodosButtonCommand("right");
        }
        else{
            this.onAfgehandeldAlleTodosButtonCommand("right");
        }
    },

    onVerwijderTodoCommand: function () {
        var todoDetailsCard = this.getTodoDetailsCard();
        var currentTodo = todoDetailsCard.getRecord();
        var todoStore = Ext.getStore("TodoStore");

        Ext.Msg.confirm("Zeker?", "Weet u het zeker?", function(msg) {
            if (msg == "yes"){
                todoStore.remove(currentTodo);
                todoStore.sync();
                todoStore.clearFilter();
                Ext.Msg.alert('Informatie', 'Todo succesvol afgehandeld.');
                Ext.getCmp('todomain_card').animateActiveItem(2,{type: 'slide', direction: 'left'});
            }
            else{
                Ext.Msg.alert('Informatie', 'Todo verwijderd.');
            }
        });
    },



    onMapsTodoCommand: function(){
        var plaatsOplevering = this.getTodoDetailsCard().getValues().plaatsOplevering;
        var me = this.getTodoGoogleMapsCard();
        var addrLookup = plaatsOplevering;
        var geoCoder = new google.maps.Geocoder();
        var geoRequest = { address: addrLookup };
        geoCoder.geocode(geoRequest, function(geoResult, geoStatus) {
            lat = geoResult[0].geometry.location.lat();
            lng = geoResult[0].geometry.location.lng();
            //addr = geoResult[0].formatted_address; console.log(addr);
            // center the map to the new possition
            me.setMapOptions({ center: new google.maps.LatLng(lat, lng) });
        })
        Ext.getCmp('todomain_card').animateActiveItem(6,{type: 'slide', direction: 'left'});
    },

    onWijzigTodoCommand: function(){
        var todoDetailsCard = this.getTodoDetailsCard();
        var record = todoDetailsCard.getRecord();
        this.activateTodoEditorCard(record);
    },

    onAfhandelTodoCommand: function(){
        var todoDetailsCard = this.getTodoDetailsCard();
        var currentTodo = todoDetailsCard.getRecord();
        var todoStore = Ext.getStore("TodoStore");

        Ext.Msg.confirm("Zeker?", "Weet u het zeker?", function(msg) {
            if (msg == "yes"){
                currentTodo.set("status", "Afgehandeld");
                if (null == todoStore.findRecord('todoId', currentTodo.todoId)){
                    todoStore.add(currentTodo);
                    todoStore.sync();
                    todoStore.sort([{ property: 'korteOmschrijving', direction: 'ASC'}]);
                    Ext.Msg.alert('Gelukt!', 'Todo afgehandeld.', function() {
                        //TODO
                    });
                }
                else if (null != persoonStore.findRecord('todoId', currentTodo.todoId)){
                    Ext.Msg.alert('Mistlukt!', 'TodoID bestaat al.');
                }
            }
            else{
                Ext.Msg.alert('Informatie', 'Todo niet afgehandeld.');
            }
        });
        this.onAfgehandeldAlleTodosButtonCommand();
    },



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //todoMapsCard handlers/functions                                                                                 //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    onBackToTodoDetailsCommand: function(){
        Ext.getCmp('todomain_card').animateActiveItem(5,{type: 'slide', direction: 'right'});
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
        var verwijderButton = this.getTodoDetailsCardVerwijderButton();
        var wijzigButton = this.getTodoDetailsCardWijzigButton();
        var afhandelButton = this.getTodoDetailsCardAfhandelButton();
        todoDetailsCard.setRecord(record); // load() is deprecated.
        if(record.get("status") === "Afgehandeld"){ //knoppen verbergen
            verwijderButton.hide();
            wijzigButton.hide();
            afhandelButton.hide();
        }
        else { //knoppen weergeven
            verwijderButton.show();
            wijzigButton.show();
            afhandelButton.show();
        }
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

