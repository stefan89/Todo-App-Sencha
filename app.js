Ext.application({
    name: 'app',

    models: ['PersoonModel', 'TodoModel'],
    stores: ['PersoonStore', 'TodoStore'],
    controllers: ['HomeController', 'PersoonController', 'TodoController'],
    views: ['Main'],
    icon: "resources/icons/todoIcon300x300.png",
    launch: function() {
        console.log("app launch")
        Ext.Viewport.add({
             xclass: 'app.view.Main'
        });
    }
});