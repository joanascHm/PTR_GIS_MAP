var size = 0;
var placement = 'point';

var style_Claims_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 3000.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Name") !== null) {
        labelText = String(feature.get("Name"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(228,26,28,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.6479999999999997}),fill: new ol.style.Fill({color: 'rgba(255,21,0,0.03137254901960784)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
