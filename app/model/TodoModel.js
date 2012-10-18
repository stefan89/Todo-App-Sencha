Ext.define("app.model.TodoModel", {
    extend: 'Ext.data.Model',
    config: {
        idProperty: 'todoId',
        fields: [
            { name: 'todoId', type: 'int' },
            { name: 'email', type: 'string' },
            { name: 'korteOmschrijving', type: 'string' },
            { name: 'status', type: 'string' }
        ],
        validations: [
            { type: 'presence', field: 'todoId', message: 'Blabla' },
            { type: 'presence', field: 'email', message: 'Blabla' },
            { type: 'presence', field: 'korteOmschrijving', message: 'Blabla' },
            { type: 'presence', field: 'status', message: 'Blabla' }
        ]
    }
});








// type: 'email', field: 'email', message: 'Voer een geldig e-mailadres in' }

//primaryKey: 'todoId',
//model: 'app.model.PersoonModel',
   // associationKey: 'email'