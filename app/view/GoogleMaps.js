Ext.define("app.view.GoogleMaps", {
    extend: 'Ext.Map',
    alias: "widget.googlemapscard",

    config: {
        mapOptions:{
            zoom: 13,
            disableDefaultUI: true,
            panControl: false,
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: true,
            streetViewControl: true,
            overviewMapControl: true,
            navigationControl : true
        }
    }
});