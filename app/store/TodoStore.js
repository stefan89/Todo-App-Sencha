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
            sortProperty: "datum",
            direction: "ASC",
            groupFn: function (record) {
                if (record && record.data.datum) {
                    var datum = record.data.datum;
                    var jaar = datum.getFullYear();
                    var maand = datum.getMonth() + 1;
                    var dag = datum.getDate();
                    var datumNotatie = (dag + "-" + maand + "-" + jaar);

                    return datumNotatie;
                }
                else {
                    return '';
                }
            }
        }
    }
});