Ext.define("app.store.TodoStore", {
    extend: "Ext.data.Store",
    requires: "Ext.data.proxy.LocalStorage",
    config: {
        model: "app.model.TodoModel",
        proxy: {
            type: 'localstorage',
            id: 'todo-app-todostore'
        },
        sorters: [{ property: 'korteOmschrijving', direction: 'ASC'}],
        grouper: {
            sortProperty: "korteOmschrijving",
            direction: "ASC",
            groupFn: function (record) {
                if (record && record.data.datum) {
                    return record.data.datum.toDateString();
                } else {
                    return '';
                }
            }
        }
    }
});

