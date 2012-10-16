Ext.define("app.model.PersoonModel", {
    extend: "Ext.data.Model",
    config: {
        idProperty: 'email',
        fields: [

            { name: 'voorNaam', type: 'string' },
            { name: 'achterNaam', type: 'string' },
            { name: 'email', type: 'string' },
            { name: 'geslacht', type: 'string' },
            { name: 'geboorteDatum', type: 'date' },
            { name: 'telefoonNummer', type: 'string' }
        ],
        validations: [

            { type: 'presence', field: 'email' },
            { type: 'presence', field: 'voorNaam', message: 'Voer een voornaam in voor deze persoon' },
            { type: 'presence', field: 'achterNaam', message: 'Voer een achternaam in voor deze persoon' },
            { type: 'presence', field: 'geslacht', message: 'Selecteer een geslacht voor deze persoon' },
            { type: 'presence', field: 'geboorteDatum', message: 'Voer een geboortedatum in voor deze persoon' },

            { type: 'email', field: 'email', message: 'Voer een geldig e-mailadres in' },
            { type: 'length', field: 'voorNaam', min: 2, max: 50, message: 'Voornaam is minimaal 2 en maximaal 5 tekens'},
            { type: 'length', field: 'achterNaam', min: 2, max: 50, message: 'Achternaam is minimaal 2 en maximaal 5 tekens'},
            { type: 'inclusion', list: ['Man', 'Vrouw'], field: 'geslacht', message: 'Voer een geldig geslacht in' },
            { type: 'format', field: 'telefoonNummer', matcher: /[0-9]*/}
        ],
        hasMany: [{ model: 'app.model.TodoModel' }]
    }
});

//{ name: 'id', type: 'int' },
//{ name: 'dateCreated', type: 'date', dateFormat: 'c' },

//{ type: 'presence', field: 'id' },
//{ type: 'presence', field: 'dateCreated' },