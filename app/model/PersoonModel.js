Ext.define("app.model.PersoonModel", {
    extend: "Ext.data.Model",
    config: {
        idProperty: 'persoonId',
        fields: [
            { name: 'persoonId', type: 'int' },
            { name: 'voorNaam', type: 'string' },
            { name: 'achterNaam', type: 'string' },
            { name: 'email', type: 'string' },
            { name: 'geslacht', type: 'string' },
            { name: 'geboorteDatum', type: 'date' },
            { name: 'telefoonNummer', type: 'string' },
            { name: 'displayNaam', type: 'string' }
        ],
        hasMany: {
                model: 'app.model.TodoModel',
                name:'todos'
        },
        validations: [
            { type: 'presence', field: 'persoonId' },
            { type: 'presence', field: 'email', message: 'Blablabla'  },
            { type: 'presence', field: 'voorNaam', message: 'Voer een voornaam in voor deze persoon' },
            { type: 'presence', field: 'achterNaam', message: 'Voer een achternaam in voor deze persoon' },
            { type: 'presence', field: 'geslacht', message: 'Selecteer een geslacht voor deze persoon' },
            { type: 'presence', field: 'geboorteDatum', message: 'Voer een geboortedatum in voor deze persoon' },
            { type: 'presence', field: 'displayNaam' },

            { type: 'email', field: 'email', message: 'Voer een geldig e-mailadres in' },
            { type: 'length', field: 'voorNaam', min: 2, max: 50, message: 'Voornaam is minimaal 2 en maximaal 5 tekens'},
            { type: 'length', field: 'achterNaam', min: 2, max: 50, message: 'Achternaam is minimaal 2 en maximaal 5 tekens'},
            { type: 'inclusion', list: ['Man', 'Vrouw'], field: 'geslacht', message: 'Voer een geldig geslacht in' },
            { type: 'length', field: 'telefoonNummer', max: 20, message: 'Blablabla' }
        ]
    }
});





//^[0-9]*$
//[0-9]{0,20}
//{ name: 'id', type: 'int' },
//{ name: 'dateCreated', type: 'date', dateFormat: 'c' },
//{ type: 'presence', field: 'id' },
//{ type: 'presence', field: 'dateCreated' },
//{ type: 'length', field: 'telefoonNummer',ming: 0, max: 20, message: 'Telefoonnummer is te lang'}

/*
 {
 model: 'app.model.TodoModel' ,
 // model: 'MyApp.model.Task',
 autoLoad: true,
 foreignKey: 'email',
 name: 'todos',
 store: {storeId: 'xtodo-app-todostore'}
 }
    */