


Ext.application({
    name: 'app',

    models: ['PersoonModel', 'TodoModel'],
    stores: ['PersoonStore', 'TodoStore'],
    controllers: ['HomeController', 'PersoonController', 'TodoController', 'TodoLijstFilterController'],
    views: ['Main'],
    icon: "resources/icons/todoIcon300x300.png",
    requires: ['Ext.Anim'],

    launch: function() {
        if (Ext.os.is.Android) {
            Ext.Msg.alert("Android detected");

            Ext.Anim.override({
                disableAnimations:true
            });
        }
        else{
            Ext.Msg.alert("Another OS detected");
        }

        console.log("app launch");
        Ext.Viewport.add({
             xclass: 'app.view.Main'
        });
    }
});

