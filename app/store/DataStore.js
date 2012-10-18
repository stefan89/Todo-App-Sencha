Ext.define("app.store.DataStore", {
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


//groupFn: function (record) {
//if (record && record.data.dateCreated) {
//    return record.data.dateCreated.toDateString();
//} else {
//    return '';
//}
//}