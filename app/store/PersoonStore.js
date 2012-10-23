Ext.define("app.store.PersoonStore", {
    extend: "Ext.data.Store",
    requires: "Ext.data.proxy.LocalStorage",
    config: {
        model: "app.model.PersoonModel",
        proxy: {
            type: 'localstorage',
            id: 'todo-app-persoonstore'
        },
        sorters: [{ property: 'achterNaam', direction: 'ASC'}],
        grouper: {
            sortProperty: "achterNaam",
            direction: "ASC",
            groupFn: function (record) {
            }
        }
    }
});