Ext.define("app.model.TodoModel", {
    extend: 'Ext.data.Model',
    config: {
        idProperty: 'todoId',
        fields: [
            { name: 'todoId', type: 'int' },
            { name: 'email', type: 'string' },
            { name: 'korteOmschrijving', type: 'string' },
            { name: 'langeOmschrijving', type: 'string' },
            { name: 'datum', type: 'date' },
            { name: 'urgentie', type: 'int' },
            { name: 'plaatsOplevering', type: 'string' },
            { name: 'status', type: 'string' },
            { name: 'type', type: 'string' }
        ],
        belongsTo: {
            model: 'app.model.PersoonModel',
            foreignKey: 'email'
        },
        validations: [
            { type: 'presence', field: 'todoId'},
            { type: 'presence', field: 'email', message: 'Persoon is vereist.' },
            { type: 'presence', field: 'korteOmschrijving', message: 'Korte omschrijving is vereist.' },
            { type: 'presence', field: 'datum', message: 'Datum is vereist.' },
            { type: 'presence', field: 'urgentie', message: 'Urgentie is vereist.' },
            { type: 'presence', field: 'plaatsOplevering', message: 'Plaats oplevering is vereist.' },
            { type: 'presence', field: 'status', message: 'Status is vereist.' },
            { type: 'presence', field: 'type', message: 'Type is vereist.' },

            { type: 'length', field: 'korteOmschrijving', min: 2, max: 100, message: 'Korte omschrijving is minimaal 2 en maximaal 100 karakters lang.'},
            { type: 'length', field: 'langeOmschrijving', max: 2000, message: 'Lange omschrijving is maximaal 2000 karakters lang.'},
            { type: 'inclusion', list: ['Onderhanden', 'Afgehandeld'], field: 'status', message: 'Vul een geldige status in.' },
            { type: 'inclusion', list: ['Prive', 'Zakelijk'], field: 'type', message: 'Vul een geldig type in.' }
        ]
    }
});