var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Emobility_grouped_1 = new ol.format.GeoJSON();
var features_Emobility_grouped_1 = format_Emobility_grouped_1.readFeatures(json_Emobility_grouped_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Emobility_grouped_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Emobility_grouped_1.addFeatures(features_Emobility_grouped_1);
var lyr_Emobility_grouped_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Emobility_grouped_1, 
                style: style_Emobility_grouped_1,
                interactive: true,
                title: '<img src="styles/legend/Emobility_grouped_1.png" /> Emobility_grouped'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Emobility_grouped_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Emobility_grouped_1];
lyr_Emobility_grouped_1.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'standort': 'standort', 'anzahl_ladepunkte': 'anzahl_ladepunkte', 'ladesaeule_status': 'ladesaeule_status', 'adresse': 'adresse', 'koordinaten': 'koordinaten', 'typ': 'typ', 'ladepunkt': 'ladepunkt', 'stecker': 'stecker', 'status': 'status', 'authmethod_1': 'authmethod_1', 'authmethod_2': 'authmethod_2', 'aggregated_fids': 'aggregated_fids', 'aggregation_fids_2': 'aggregation_fids_2', 'aggregation_stecker': 'aggregation_stecker', 'aggregation_ladepunkte': 'aggregation_ladepunkte', });
lyr_Emobility_grouped_1.set('fieldImages', {'fid': 'TextEdit', 'gml_id': 'TextEdit', 'standort': 'TextEdit', 'anzahl_ladepunkte': 'Range', 'ladesaeule_status': 'TextEdit', 'adresse': 'TextEdit', 'koordinaten': 'TextEdit', 'typ': 'Hidden', 'ladepunkt': 'TextEdit', 'stecker': 'Hidden', 'status': 'Hidden', 'authmethod_1': 'Hidden', 'authmethod_2': 'Hidden', 'aggregated_fids': 'Hidden', 'aggregation_fids_2': 'Hidden', 'aggregation_stecker': 'Hidden', 'aggregation_ladepunkte': 'Hidden', });
lyr_Emobility_grouped_1.set('fieldLabels', {'fid': 'no label', 'gml_id': 'no label', 'standort': 'inline label', 'anzahl_ladepunkte': 'inline label', 'ladesaeule_status': 'inline label', 'adresse': 'inline label', 'koordinaten': 'inline label', 'ladepunkt': 'inline label', });
lyr_Emobility_grouped_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});