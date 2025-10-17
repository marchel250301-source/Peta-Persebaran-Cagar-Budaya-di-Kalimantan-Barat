var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_PersebaranCBKALBARFIX_1 = new ol.format.GeoJSON();
var features_PersebaranCBKALBARFIX_1 = format_PersebaranCBKALBARFIX_1.readFeatures(json_PersebaranCBKALBARFIX_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PersebaranCBKALBARFIX_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PersebaranCBKALBARFIX_1.addFeatures(features_PersebaranCBKALBARFIX_1);
var lyr_PersebaranCBKALBARFIX_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PersebaranCBKALBARFIX_1, 
                style: style_PersebaranCBKALBARFIX_1,
                popuplayertitle: 'Persebaran CB KALBAR FIX',
                interactive: true,
                title: '<img src="styles/legend/PersebaranCBKALBARFIX_1.png" /> Persebaran CB KALBAR FIX'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_PersebaranCBKALBARFIX_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_PersebaranCBKALBARFIX_1];
lyr_PersebaranCBKALBARFIX_1.set('fieldAliases', {'LATITUDE_N': 'LATITUDE_N', 'LONGITUDE_': 'LONGITUDE_', 'NAMA': 'NAMA', 'ALAMAT': 'ALAMAT', 'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'JENIS': 'JENIS', 'DESKRIPSI': 'DESKRIPSI', 'SK': 'SK', });
lyr_PersebaranCBKALBARFIX_1.set('fieldImages', {'LATITUDE_N': 'TextEdit', 'LONGITUDE_': 'TextEdit', 'NAMA': 'TextEdit', 'ALAMAT': 'TextEdit', 'DESA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'JENIS': 'TextEdit', 'DESKRIPSI': 'TextEdit', 'SK': 'TextEdit', });
lyr_PersebaranCBKALBARFIX_1.set('fieldLabels', {'LATITUDE_N': 'inline label - always visible', 'LONGITUDE_': 'inline label - always visible', 'NAMA': 'inline label - always visible', 'ALAMAT': 'inline label - always visible', 'DESA': 'inline label - always visible', 'KECAMATAN': 'inline label - always visible', 'KABUPATEN': 'inline label - always visible', 'JENIS': 'inline label - always visible', 'DESKRIPSI': 'inline label - always visible', 'SK': 'inline label - always visible', });
lyr_PersebaranCBKALBARFIX_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});