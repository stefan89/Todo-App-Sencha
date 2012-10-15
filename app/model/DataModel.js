Ext.define("app.model.DataModel", {
    extend: "Ext.data.Model",
    config: {
        idProperty: 'id',
        fields: [
            { name: 'id', type: 'int' },
            { name: 'dateCreated', type: 'date', dateFormat: 'c' },
            { name: 'voorNaam', type: 'string' },
            { name: 'achterNaam', type: 'string' }
        ],
        validations: [
            { type: 'presence', field: 'id' },
            { type: 'presence', field: 'dateCreated' },
            { type: 'presence', field: 'voorNaam', message: 'Voeg een voornaam toe voor deze persoon' },
            { type: 'presence', field: 'achterNaam', message: 'Voeg een achternaam toe voor deze persoon' }
        ]
    }
});

