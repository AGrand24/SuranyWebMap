var wms_layers = [];


        var lyr_GoogleSat_0 = new ol.layer.Tile({
            'title': 'GoogleSat',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_Res3_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Res3",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Res3_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2020443.214977, 6115635.423821, 2022687.906016, 6117658.098242]
                            })
                        });
var lyr_Res2_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Res2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Res2_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2020443.214977, 6115635.423821, 2022687.906016, 6117658.098242]
                            })
                        });
var lyr_Res1_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Res1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Res1_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2020443.214977, 6115635.423821, 2022687.906016, 6117658.098242]
                            })
                        });
var format_CMD_SubAreas_4 = new ol.format.GeoJSON();
var features_CMD_SubAreas_4 = format_CMD_SubAreas_4.readFeatures(json_CMD_SubAreas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CMD_SubAreas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CMD_SubAreas_4.addFeatures(features_CMD_SubAreas_4);
var lyr_CMD_SubAreas_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CMD_SubAreas_4, 
                style: style_CMD_SubAreas_4,
                interactive: true,
                title: '<img src="styles/legend/CMD_SubAreas_4.png" /> CMD_SubAreas'
            });
var lyr_MagDrone_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "MagDrone",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MagDrone_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2020925.547761, 6115696.872514, 2022673.090352, 6116708.897027]
                            })
                        });
var format_RnPlochy_6 = new ol.format.GeoJSON();
var features_RnPlochy_6 = format_RnPlochy_6.readFeatures(json_RnPlochy_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RnPlochy_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RnPlochy_6.addFeatures(features_RnPlochy_6);
var lyr_RnPlochy_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RnPlochy_6, 
                style: style_RnPlochy_6,
                interactive: true,
                title: 'RnPlochy'
            });

lyr_GoogleSat_0.setVisible(true);lyr_Res3_1.setVisible(true);lyr_Res2_2.setVisible(true);lyr_Res1_3.setVisible(true);lyr_CMD_SubAreas_4.setVisible(true);lyr_MagDrone_5.setVisible(true);lyr_RnPlochy_6.setVisible(true);
var layersList = [lyr_GoogleSat_0,lyr_Res3_1,lyr_Res2_2,lyr_Res1_3,lyr_CMD_SubAreas_4,lyr_MagDrone_5,lyr_RnPlochy_6];
lyr_CMD_SubAreas_4.set('fieldAliases', {'fid': 'fid', 'AreaId': 'AreaId', });
lyr_RnPlochy_6.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'OAR': 'OAR', });
lyr_CMD_SubAreas_4.set('fieldImages', {'fid': '', 'AreaId': '', });
lyr_RnPlochy_6.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'OAR': '', });
lyr_CMD_SubAreas_4.set('fieldLabels', {'fid': 'no label', 'AreaId': 'header label', });
lyr_RnPlochy_6.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'OAR': 'no label', });
lyr_RnPlochy_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});