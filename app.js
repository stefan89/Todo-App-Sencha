Ext.application({
    name: 'app',

    models: ['DataModel'],
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