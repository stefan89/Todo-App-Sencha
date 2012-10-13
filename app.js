Ext.application({
    name: 'app',

    controllers: ['HomeController'],
    views: ['Main'],

    launch: function() {
        Ext.Viewport.add({
             xclass: 'app.view.Main'
        });
    }
});