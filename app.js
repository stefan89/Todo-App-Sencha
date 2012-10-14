Ext.application({
    name: 'app',

    controllers: ['HomeController', 'PersoonController'],
    views: ['Main'],

    launch: function() {
        Ext.Viewport.add({
             xclass: 'app.view.Main'
        });
    }
});