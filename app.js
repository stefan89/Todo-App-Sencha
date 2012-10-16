Ext.application({
    name: 'app',

    models: ['PersoonModel', 'TodoModel'],
    stores: ['DataStore'],
    controllers: ['HomeController', 'PersoonController'],
    views: ['Main'],


    launch: function() {
        console.log("app launch")
        Ext.Viewport.add({
             xclass: 'app.view.Main'
        });
    }
});