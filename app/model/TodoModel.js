Ext.define("app.model.TodoModel", {
    extend: 'Ext.data.Model',
    config: {
        idProperty: 'Id',
        fields: [
            { name: 'Id', type: 'int' },
            { name: 'korteOmschrijving', type: 'string' },
            { name: 'langeOmschrijving', type: 'string' },
            { name: 'datum', type: 'date', dateFormat: 'c' },
            { name: 'urgentie', type: 'int' },
            { name: 'plaatsOplevering', type: 'string' },
            { name: 'type', type: 'string' },
            { name: 'status', type: 'string' },
            { name: 'email', type: 'string' }
        ],
        belongsTo: [{ model: 'app.model.Persoon', associationKey: 'email' }]
    }
});