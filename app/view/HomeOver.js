Ext.define('app.view.HomeOver', {
    extend : 'Ext.Carousel',
    xtype  : 'homeovercard',

    config: {
        iconCls: 'home',
        title: 'Home',
        style: 'background-color: #ffaf40',
        id:'homeover',
        styleHtmlContent: true,
        fullscreen: true,
        direction: 'vertical',
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                ui: "light",
                title: 'Over app',
                items: [
                    {
                        xtype: "button",
                        ui: "back",
                        text: "Terug",
                        action: "ButtonBackToHomeClicked"
                    }
                ]
            },
            {
                html :  '<h3><b>Wat is dit?</h3></b>' +
                        'Een todo lijst app ontwikkeld met Sencha Touch 2.0.1.'
            },
            {
                html :  '<h3><b>Waarom?</h3></b>' +
                    'Om uit te zoeken wat de beste Javascript libraries/frameworks zijn voor mobile software development.'
            },
            {
                html :  '<h3><b>Hoe werkt de app?</h3></b>' +
                    "Allereerst dient er een persoon te worden toegevoegd. Voor deze persoon kunnen vervolgens todo's " +
                    "aangemaakt worden. Het is mogelijk om meerdere personen toe te voegen. Elke persoon kan meerdere todo's op " +
                    "zijn naam hebben staan. Er kunnen geen todo's toegevoegd worden als er nog geen persoon is aangemaakt.."
            },
            {
                html :  '<h3><b>Door wie is de app ontwikkeld?</h3></b>' +
                    "De app is ontwikkeld door Stefan Collette en fungeert als proof of concept applicatie voor een onderzoek."
            }
        ]
    }
});