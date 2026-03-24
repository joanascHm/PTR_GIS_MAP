var wms_layers = [];

var format_Landmass_0 = new ol.format.GeoJSON();
var features_Landmass_0 = format_Landmass_0.readFeatures(json_Landmass_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landmass_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landmass_0.addFeatures(features_Landmass_0);
var lyr_Landmass_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Landmass_0, 
                style: style_Landmass_0,
                popuplayertitle: 'Landmass',
                interactive: false,
                title: '<img src="styles/legend/Landmass_0.png" /> Landmass'
            });
var lyr_hf_cellexport_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'hf_cellexport<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/hf_cellexport_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2337967.715603, -2392666.156862, 2738616.985357, -2037291.238283]
        })
    });
var lyr_sky_cellexport_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'sky_cellexport<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/sky_cellexport_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2672058.901635, -1781753.342890, 3606948.043092, -602216.966743]
        })
    });
var lyr_hr_cellexport_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'hr_cellexport<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/hr_cellexport_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2449517.801155, -1368562.142795, 2850149.722717, -714205.196643]
        })
    });
var lyr_tr_cellexport_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'tr_cellexport<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/tr_cellexport_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [4453052.550529, -2865503.243683, 6634768.760872, -653007.286353]
        })
    });
var lyr_pc_cellexport_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'pc_cellexport<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/pc_cellexport_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2248914.027857, -2826753.771526, 3406666.935789, -2084753.178471]
        })
    });
var format_Claims_6 = new ol.format.GeoJSON();
var features_Claims_6 = format_Claims_6.readFeatures(json_Claims_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Claims_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Claims_6.addFeatures(features_Claims_6);
var lyr_Claims_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Claims_6, 
                style: style_Claims_6,
                popuplayertitle: 'Claims',
                interactive: true,
                title: '<img src="styles/legend/Claims_6.png" /> Claims'
            });
var format_Roadmaps_7 = new ol.format.GeoJSON();
var features_Roadmaps_7 = format_Roadmaps_7.readFeatures(json_Roadmaps_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roadmaps_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roadmaps_7.addFeatures(features_Roadmaps_7);
var lyr_Roadmaps_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roadmaps_7, 
                style: style_Roadmaps_7,
                popuplayertitle: 'Roadmaps',
                interactive: true,
    title: 'Roadmaps<br />\
    <img src="styles/legend/Roadmaps_7_0.png" /> <br />\
    <img src="styles/legend/Roadmaps_7_1.png" /> <br />\
    <img src="styles/legend/Roadmaps_7_2.png" /> <br />\
    <img src="styles/legend/Roadmaps_7_3.png" /> <br />' });
var format_ProjectMaps_8 = new ol.format.GeoJSON();
var features_ProjectMaps_8 = format_ProjectMaps_8.readFeatures(json_ProjectMaps_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjectMaps_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjectMaps_8.addFeatures(features_ProjectMaps_8);
var lyr_ProjectMaps_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjectMaps_8, 
                style: style_ProjectMaps_8,
                popuplayertitle: 'ProjectMaps',
                interactive: true,
    title: 'ProjectMaps<br />\
    <img src="styles/legend/ProjectMaps_8_0.png" /> Map 0<br />\
    <img src="styles/legend/ProjectMaps_8_1.png" /> Map 1<br />\
    <img src="styles/legend/ProjectMaps_8_2.png" /> Map 3<br />\
    <img src="styles/legend/ProjectMaps_8_3.png" /> <br />\
    <img src="styles/legend/ProjectMaps_8_4.png" /> Map 2<br />\
    <img src="styles/legend/ProjectMaps_8_5.png" /> Map 4<br />\
    <img src="styles/legend/ProjectMaps_8_6.png" /> Map 5<br />\
    <img src="styles/legend/ProjectMaps_8_7.png" /> Map 6<br />\
    <img src="styles/legend/ProjectMaps_8_8.png" /> Map 7<br />' });
var format_Regions_9 = new ol.format.GeoJSON();
var features_Regions_9 = format_Regions_9.readFeatures(json_Regions_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regions_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regions_9.addFeatures(features_Regions_9);
var lyr_Regions_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regions_9, 
                style: style_Regions_9,
                popuplayertitle: 'Regions',
                interactive: true,
    title: 'Regions<br />\
    <img src="styles/legend/Regions_9_0.png" /> GoldMoor<br />\
    <img src="styles/legend/Regions_9_1.png" /> <br />\
    <img src="styles/legend/Regions_9_2.png" /> Brennan Bluffs<br />\
    <img src="styles/legend/Regions_9_3.png" /> Tava\'s Cradle<br />\
    <img src="styles/legend/Regions_9_4.png" /> Helkori Wastes<br />\
    <img src="styles/legend/Regions_9_5.png" /> Riddle-Lands<br />\
    <img src="styles/legend/Regions_9_6.png" /> Strident Coast<br />\
    <img src="styles/legend/Regions_9_7.png" /> Dak\'Fron<br />\
    <img src="styles/legend/Regions_9_8.png" /> Tark Basin<br />\
    <img src="styles/legend/Regions_9_9.png" /> The Bend\'r-Mahk<br />\
    <img src="styles/legend/Regions_9_10.png" /> Alik\'r Dunes\'<br />\
    <img src="styles/legend/Regions_9_11.png" /> Bantha<br />\
    <img src="styles/legend/Regions_9_12.png" /> Colovian Highlands<br />\
    <img src="styles/legend/Regions_9_13.png" /> Devil\'s Den<br />\
    <img src="styles/legend/Regions_9_14.png" /> Dragontail Mountains<br />\
    <img src="styles/legend/Regions_9_15.png" /> Hew\'s Bane<br />\
    <img src="styles/legend/Regions_9_16.png" /> Kvetchi Pass<br />\
    <img src="styles/legend/Regions_9_17.png" /> Starfall<br />\
    <img src="styles/legend/Regions_9_18.png" /> Barrowlands<br />\
    <img src="styles/legend/Regions_9_19.png" /> Dasek Marsh<br />\
    <img src="styles/legend/Regions_9_20.png" /> Massiqueran Forest<br />\
    <img src="styles/legend/Regions_9_21.png" /> Mor\'s Ambit<br />\
    <img src="styles/legend/Regions_9_22.png" /> Ruma Floodlands<br />\
    <img src="styles/legend/Regions_9_23.png" /> West Weald<br />\
    <img src="styles/legend/Regions_9_24.png" /> Demergatur<br />\
    <img src="styles/legend/Regions_9_25.png" /> Heatlands<br />\
    <img src="styles/legend/Regions_9_26.png" /> Jerrall Mountains<br />\
    <img src="styles/legend/Regions_9_27.png" /> Bjoulsae Basin<br />\
    <img src="styles/legend/Regions_9_28.png" /> Dragonfields<br />\
    <img src="styles/legend/Regions_9_29.png" /> Ostheldir<br />\
    <img src="styles/legend/Regions_9_30.png" /> Abecean Sea<br />\
    <img src="styles/legend/Regions_9_31.png" /> Druadach Highlands<br />\
    <img src="styles/legend/Regions_9_32.png" /> Ogre\'s Tooth Mountains<br />\
    <img src="styles/legend/Regions_9_33.png" /> Raha\'s Landing<br />\
    <img src="styles/legend/Regions_9_34.png" /> Titan\'s Death<br />\
    <img src="styles/legend/Regions_9_35.png" /> Creag Coast<br />\
    <img src="styles/legend/Regions_9_36.png" /> Malekna Wood<br />\
    <img src="styles/legend/Regions_9_37.png" /> Wrothgarian Mountains<br />\
    <img src="styles/legend/Regions_9_38.png" /> Dellese Isles<br />\
    <img src="styles/legend/Regions_9_39.png" /> Glenumbra Moors<br />\
    <img src="styles/legend/Regions_9_40.png" /> Ilessan Hills<br />\
    <img src="styles/legend/Regions_9_41.png" /> Lesser Bretony<br />\
    <img src="styles/legend/Regions_9_42.png" /> Ravennia<br />\
    <img src="styles/legend/Regions_9_43.png" /> Skeffington Wood<br />\
    <img src="styles/legend/Regions_9_44.png" /> Balothian Bay<br />\
    <img src="styles/legend/Regions_9_45.png" /> Eltheric Ocean<br />\
    <img src="styles/legend/Regions_9_46.png" /> Gedalan<br />\
    <img src="styles/legend/Regions_9_47.png" /> Iliac Bay<br />\
    <img src="styles/legend/Regions_9_48.png" /> Kurallian Mountains<br />\
    <img src="styles/legend/Regions_9_49.png" /> Norcambria<br />\
    <img src="styles/legend/Regions_9_50.png" /> Caspar Isle<br />\
    <img src="styles/legend/Regions_9_51.png" /> Chain Isles<br />\
    <img src="styles/legend/Regions_9_52.png" /> Herne Isle<br />\
    <img src="styles/legend/Regions_9_53.png" /> Broken Cape<br />\
    <img src="styles/legend/Regions_9_54.png" /> Drajkmyr Marsh<br />\
    <img src="styles/legend/Regions_9_55.png" /> Eastmarch<br />\
    <img src="styles/legend/Regions_9_56.png" /> Gjerde Hills<br />\
    <img src="styles/legend/Regions_9_57.png" /> Gorvigh Ridge<br />\
    <img src="styles/legend/Regions_9_58.png" /> Grey Plains<br />\
    <img src="styles/legend/Regions_9_59.png" /> Hirsing Mountains<br />\
    <img src="styles/legend/Regions_9_60.png" /> Ivory Steppe<br />\
    <img src="styles/legend/Regions_9_61.png" /> Kilkreath Mountains<br />\
    <img src="styles/legend/Regions_9_62.png" /> Kreathi Dale<br />\
    <img src="styles/legend/Regions_9_63.png" /> Lorchwuir Heath<br />\
    <img src="styles/legend/Regions_9_64.png" /> Midkarth<br />\
    <img src="styles/legend/Regions_9_65.png" /> Njorvela<br />\
    <img src="styles/legend/Regions_9_66.png" /> Northshore<br />\
    <img src="styles/legend/Regions_9_67.png" /> Reaver\'s Shore<br />\
    <img src="styles/legend/Regions_9_68.png" /> Rift Valley<br />\
    <img src="styles/legend/Regions_9_69.png" /> Sea of Ghosts<br />\
    <img src="styles/legend/Regions_9_70.png" /> Skaldring Mountains<br />\
    <img src="styles/legend/Regions_9_71.png" /> Solitude Forest<br />\
    <img src="styles/legend/Regions_9_72.png" /> Sundered Hills<br />\
    <img src="styles/legend/Regions_9_73.png" /> Throat of the World<br />\
    <img src="styles/legend/Regions_9_74.png" /> Troll\'s Teeth<br />\
    <img src="styles/legend/Regions_9_75.png" /> Vaalstag Highlands<br />\
    <img src="styles/legend/Regions_9_76.png" /> Vorndgad Forest<br />\
    <img src="styles/legend/Regions_9_77.png" /> Wuurthal Plains<br />\
    <img src="styles/legend/Regions_9_78.png" /> Ysheim<br />\
    <img src="styles/legend/Regions_9_79.png" /> Cape Black<br />\
    <img src="styles/legend/Regions_9_80.png" /> Hrimbald Plateau<br />\
    <img src="styles/legend/Regions_9_81.png" /> Thorig Glacier<br />\
    <img src="styles/legend/Regions_9_82.png" /> Velothi Mountains<br />\
    <img src="styles/legend/Regions_9_83.png" /> Vromburh Waste<br />\
    <img src="styles/legend/Regions_9_84.png" /> Whaler\'s Coast<br />\
    <img src="styles/legend/Regions_9_85.png" /> Arenth-Arla<br />\
    <img src="styles/legend/Regions_9_86.png" /> Barrens<br />\
    <img src="styles/legend/Regions_9_87.png" /> Etiolatum<br />\
    <img src="styles/legend/Regions_9_88.png" /> Kavas Rim<br />\
    <img src="styles/legend/Regions_9_89.png" /> Molaquin Ren<br />\
    <img src="styles/legend/Regions_9_90.png" /> Niben Destra<br />\
    <img src="styles/legend/Regions_9_91.png" /> Niben Sester<br />\
    <img src="styles/legend/Regions_9_92.png" /> Serican Jungle<br />\
    <img src="styles/legend/Regions_9_93.png" /> The Rim<br />\
    <img src="styles/legend/Regions_9_94.png" /> Titan\'s Birth<br />\
    <img src="styles/legend/Regions_9_95.png" /> Valley of Altars<br />\
    <img src="styles/legend/Regions_9_96.png" /> Xarxen Mora<br />\
    <img src="styles/legend/Regions_9_97.png" /> Alkosh-Kuza<br />\
    <img src="styles/legend/Regions_9_98.png" /> Arata Ceyglynn<br />\
    <img src="styles/legend/Regions_9_99.png" /> Azurah\'s Bounty<br />\
    <img src="styles/legend/Regions_9_100.png" /> Blue Divide<br />\
    <img src="styles/legend/Regions_9_101.png" /> Cerulean Coast<br />\
    <img src="styles/legend/Regions_9_102.png" /> Dragon\'s Teeth<br />\
    <img src="styles/legend/Regions_9_103.png" /> Elden Grove<br />\
    <img src="styles/legend/Regions_9_104.png" /> Fyresent Coast<br />\
    <img src="styles/legend/Regions_9_105.png" /> Haset Hyarnai<br />\
    <img src="styles/legend/Regions_9_106.png" /> Iyamarr Coast<br />\
    <img src="styles/legend/Regions_9_107.png" /> Khenarthi\'s Roost<br />\
    <img src="styles/legend/Regions_9_108.png" /> Khras\'jur Canyon<br />\
    <img src="styles/legend/Regions_9_109.png" /> Lypan Floodlands<br />\
    <img src="styles/legend/Regions_9_110.png" /> Meditea<br />\
    <img src="styles/legend/Regions_9_111.png" /> Ne Quin-Al Desert<br />\
    <img src="styles/legend/Regions_9_112.png" /> Quin-Rawl<br />\
    <img src="styles/legend/Regions_9_113.png" /> Quinonda<br />\
    <img src="styles/legend/Regions_9_114.png" /> Riaskyl Morth<br />\
    <img src="styles/legend/Regions_9_115.png" /> Saimisil Steppes<br />\
    <img src="styles/legend/Regions_9_116.png" /> Sea of Mistis<br />\
    <img src="styles/legend/Regions_9_117.png" /> Shijoh Scrublands<br />\
    <img src="styles/legend/Regions_9_118.png" /> Silvenar Grove<br />\
    <img src="styles/legend/Regions_9_119.png" /> Tenmar Forest<br />\
    <img src="styles/legend/Regions_9_120.png" /> Topal Bay<br />\
    <img src="styles/legend/Regions_9_121.png" /> Topal Shores<br />\
    <img src="styles/legend/Regions_9_122.png" /> Ulunedai<br />\
    <img src="styles/legend/Regions_9_123.png" /> Vauriaval Isles<br />\
    <img src="styles/legend/Regions_9_124.png" /> Xyllo Basin<br />\
    <img src="styles/legend/Regions_9_125.png" /> Aanthirin<br />\
    <img src="styles/legend/Regions_9_126.png" /> Armun Ashlands<br />\
    <img src="styles/legend/Regions_9_127.png" /> Boethiiah\'s Spine<br />\
    <img src="styles/legend/Regions_9_128.png" /> Clambering Moor<br />\
    <img src="styles/legend/Regions_9_129.png" /> Coronati Basin`<br />\
    <img src="styles/legend/Regions_9_130.png" /> Dagon Urul<br />\
    <img src="styles/legend/Regions_9_131.png" /> Deshaan Plains<br />\
    <img src="styles/legend/Regions_9_132.png" /> Great Valley<br />\
    <img src="styles/legend/Regions_9_133.png" /> Grey Meadows<br />\
    <img src="styles/legend/Regions_9_134.png" /> Ilumat Highlands<br />\
    <img src="styles/legend/Regions_9_135.png" /> Julan-Shar<br />\
    <img src="styles/legend/Regions_9_136.png" /> Kartur Dale<br />\
    <img src="styles/legend/Regions_9_137.png" /> Mephalan Vales<br />\
    <img src="styles/legend/Regions_9_138.png" /> Molag Ruhn<br />\
    <img src="styles/legend/Regions_9_139.png" /> Mudflats<br />\
    <img src="styles/legend/Regions_9_140.png" /> Nedothril<br />\
    <img src="styles/legend/Regions_9_141.png" /> Orethan<br />\
    <img src="styles/legend/Regions_9_142.png" /> Othreleth Woods<br />\
    <img src="styles/legend/Regions_9_143.png" /> Padomaic Ocean<br />\
    <img src="styles/legend/Regions_9_144.png" /> Roth Roryn<br />\
    <img src="styles/legend/Regions_9_145.png" /> Sacred Lands<br />\
    <img src="styles/legend/Regions_9_146.png" /> Scath Anud<br />\
    <img src="styles/legend/Regions_9_147.png" /> Shipal Shin<br />\
    <img src="styles/legend/Regions_9_148.png" /> Stirk Isle<br />\
    <img src="styles/legend/Regions_9_149.png" /> Sunad Mora<br />\
    <img src="styles/legend/Regions_9_150.png" /> Sundered Scar<br />\
    <img src="styles/legend/Regions_9_151.png" /> Telvanni Isles<br />\
    <img src="styles/legend/Regions_9_152.png" /> Urush-Nal<br />\
    <img src="styles/legend/Regions_9_153.png" /> Valus Mountains<br />' });
var format_Polities_10 = new ol.format.GeoJSON();
var features_Polities_10 = format_Polities_10.readFeatures(json_Polities_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polities_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polities_10.addFeatures(features_Polities_10);
var lyr_Polities_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Polities_10, 
                style: style_Polities_10,
                popuplayertitle: 'Polities',
                interactive: false,
    title: 'Polities<br />\
    <img src="styles/legend/Polities_10_0.png" /> Barony of Verkath<br />\
    <img src="styles/legend/Polities_10_1.png" /> Crownlands<br />\
    <img src="styles/legend/Polities_10_2.png" /> Elinhir<br />\
    <img src="styles/legend/Polities_10_3.png" /> Heldorn<br />\
    <img src="styles/legend/Polities_10_4.png" /> Host of Volen-ij<br />\
    <img src="styles/legend/Polities_10_5.png" /> Kingdom of Anvil<br />\
    <img src="styles/legend/Polities_10_6.png" /> Kingdom of Taneth<br />\
    <img src="styles/legend/Polities_10_7.png" /> Kingom of Dragonstar (Redguard)<br />\
    <img src="styles/legend/Polities_10_8.png" /> Nomad Land<br />\
    <img src="styles/legend/Polities_10_9.png" /> Republic of Rihad<br />\
    <img src="styles/legend/Polities_10_10.png" /> Sentinel<br />\
    <img src="styles/legend/Polities_10_11.png" /> Skaven<br />\
    <img src="styles/legend/Polities_10_12.png" /> Toa-Korom Host<br />\
    <img src="styles/legend/Polities_10_13.png" /> Totambu<br />' });
var format_Roads_11 = new ol.format.GeoJSON();
var features_Roads_11 = format_Roads_11.readFeatures(json_Roads_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_11.addFeatures(features_Roads_11);
var lyr_Roads_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_11, 
                style: style_Roads_11,
                popuplayertitle: 'Roads',
                interactive: false,
    title: 'Roads<br />\
    <img src="styles/legend/Roads_11_0.png" /> Main<br />\
    <img src="styles/legend/Roads_11_1.png" /> Golden Road<br />\
    <img src="styles/legend/Roads_11_2.png" /> Dirt Road<br />' });
var format_Dungeons_12 = new ol.format.GeoJSON();
var features_Dungeons_12 = format_Dungeons_12.readFeatures(json_Dungeons_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dungeons_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dungeons_12.addFeatures(features_Dungeons_12);
var lyr_Dungeons_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dungeons_12,
maxResolution:1431.4550084447467,
 
                style: style_Dungeons_12,
                popuplayertitle: 'Dungeons',
                interactive: true,
    title: 'Dungeons<br />\
    <img src="styles/legend/Dungeons_12_0.png" /> <br />\
    <img src="styles/legend/Dungeons_12_1.png" /> Breton Castle Ruin<br />\
    <img src="styles/legend/Dungeons_12_2.png" /> Breton Crypt<br />\
    <img src="styles/legend/Dungeons_12_3.png" /> Camp<br />\
    <img src="styles/legend/Dungeons_12_4.png" /> Cave<br />\
    <img src="styles/legend/Dungeons_12_5.png" /> Direnni Ruin<br />\
    <img src="styles/legend/Dungeons_12_6.png" /> Dreugh Hive<br />\
    <img src="styles/legend/Dungeons_12_7.png" /> Grotto<br />\
    <img src="styles/legend/Dungeons_12_8.png" /> Landmark<br />\
    <img src="styles/legend/Dungeons_12_9.png" /> Mines<br />\
    <img src="styles/legend/Dungeons_12_10.png" /> Nedic Ruin<br />\
    <img src="styles/legend/Dungeons_12_11.png" /> Nord Barrow<br />\
    <img src="styles/legend/Dungeons_12_12.png" /> Nord Fortress Ruin<br />\
    <img src="styles/legend/Dungeons_12_13.png" /> Other Ruin<br />\
    <img src="styles/legend/Dungeons_12_14.png" /> Ra Gada Ruin<br />\
    <img src="styles/legend/Dungeons_12_15.png" /> Reachfolk Ruin<br />\
    <img src="styles/legend/Dungeons_12_16.png" /> Redguard Crypt<br />\
    <img src="styles/legend/Dungeons_12_17.png" /> Rourken Dwemer Ruin<br />\
    <img src="styles/legend/Dungeons_12_18.png" /> Shipwreck<br />\
    <img src="styles/legend/Dungeons_12_19.png" /> Thrid Empire Ruin<br />\
    <img src="styles/legend/Dungeons_12_20.png" /> Warp Ruin<br />' });
var format_Cyr_Delodiil_13 = new ol.format.GeoJSON();
var features_Cyr_Delodiil_13 = format_Cyr_Delodiil_13.readFeatures(json_Cyr_Delodiil_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cyr_Delodiil_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cyr_Delodiil_13.addFeatures(features_Cyr_Delodiil_13);
var lyr_Cyr_Delodiil_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cyr_Delodiil_13,
maxResolution:2279.916121022981,
 
                style: style_Cyr_Delodiil_13,
                popuplayertitle: 'Cyr_Delodiil',
                interactive: true,
    title: 'Cyr_Delodiil<br />\
    <img src="styles/legend/Cyr_Delodiil_13_0.png" /> 0<br />\
    <img src="styles/legend/Cyr_Delodiil_13_1.png" /> 0 (Capital)<br />\
    <img src="styles/legend/Cyr_Delodiil_13_2.png" /> 00<br />\
    <img src="styles/legend/Cyr_Delodiil_13_3.png" /> 00 (Capital)<br />\
    <img src="styles/legend/Cyr_Delodiil_13_4.png" /> 1<br />\
    <img src="styles/legend/Cyr_Delodiil_13_5.png" /> 1 (Capital)<br />\
    <img src="styles/legend/Cyr_Delodiil_13_6.png" /> 2<br />\
    <img src="styles/legend/Cyr_Delodiil_13_7.png" /> 2 (Capital)<br />\
    <img src="styles/legend/Cyr_Delodiil_13_8.png" /> 3<br />\
    <img src="styles/legend/Cyr_Delodiil_13_9.png" /> 3 (Capital)<br />\
    <img src="styles/legend/Cyr_Delodiil_13_10.png" /> 4<br />\
    <img src="styles/legend/Cyr_Delodiil_13_11.png" /> 5<br />\
    <img src="styles/legend/Cyr_Delodiil_13_12.png" /> 5 (Capital)<br />\
    <img src="styles/legend/Cyr_Delodiil_13_13.png" /> 6 <br />' });
var format_Cyr_Skingrad_14 = new ol.format.GeoJSON();
var features_Cyr_Skingrad_14 = format_Cyr_Skingrad_14.readFeatures(json_Cyr_Skingrad_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cyr_Skingrad_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cyr_Skingrad_14.addFeatures(features_Cyr_Skingrad_14);
var lyr_Cyr_Skingrad_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cyr_Skingrad_14,
maxResolution:2279.916121022981,
 
                style: style_Cyr_Skingrad_14,
                popuplayertitle: 'Cyr_Skingrad',
                interactive: true,
    title: 'Cyr_Skingrad<br />\
    <img src="styles/legend/Cyr_Skingrad_14_0.png" /> 0<br />\
    <img src="styles/legend/Cyr_Skingrad_14_1.png" /> 0 (Capital)<br />\
    <img src="styles/legend/Cyr_Skingrad_14_2.png" /> 00<br />\
    <img src="styles/legend/Cyr_Skingrad_14_3.png" /> 00 (Capital)<br />\
    <img src="styles/legend/Cyr_Skingrad_14_4.png" /> 1<br />\
    <img src="styles/legend/Cyr_Skingrad_14_5.png" /> 1 (Capital)<br />\
    <img src="styles/legend/Cyr_Skingrad_14_6.png" /> 2<br />\
    <img src="styles/legend/Cyr_Skingrad_14_7.png" /> 2 (Capital)<br />\
    <img src="styles/legend/Cyr_Skingrad_14_8.png" /> 3<br />\
    <img src="styles/legend/Cyr_Skingrad_14_9.png" /> 3 (Capital)<br />\
    <img src="styles/legend/Cyr_Skingrad_14_10.png" /> 4<br />\
    <img src="styles/legend/Cyr_Skingrad_14_11.png" /> 5<br />\
    <img src="styles/legend/Cyr_Skingrad_14_12.png" /> 5 (Capital)<br />\
    <img src="styles/legend/Cyr_Skingrad_14_13.png" /> 6 <br />' });
var format_Cyr_Artemon_15 = new ol.format.GeoJSON();
var features_Cyr_Artemon_15 = format_Cyr_Artemon_15.readFeatures(json_Cyr_Artemon_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cyr_Artemon_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cyr_Artemon_15.addFeatures(features_Cyr_Artemon_15);
var lyr_Cyr_Artemon_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cyr_Artemon_15,
maxResolution:2279.916121022981,
 
                style: style_Cyr_Artemon_15,
                popuplayertitle: 'Cyr_Artemon',
                interactive: true,
    title: 'Cyr_Artemon<br />\
    <img src="styles/legend/Cyr_Artemon_15_0.png" /> 0<br />\
    <img src="styles/legend/Cyr_Artemon_15_1.png" /> 0 (Capital)<br />\
    <img src="styles/legend/Cyr_Artemon_15_2.png" /> 00<br />\
    <img src="styles/legend/Cyr_Artemon_15_3.png" /> 00 (Capital)<br />\
    <img src="styles/legend/Cyr_Artemon_15_4.png" /> 1<br />\
    <img src="styles/legend/Cyr_Artemon_15_5.png" /> 1 (Capital)<br />\
    <img src="styles/legend/Cyr_Artemon_15_6.png" /> 2<br />\
    <img src="styles/legend/Cyr_Artemon_15_7.png" /> 2 (Capital)<br />\
    <img src="styles/legend/Cyr_Artemon_15_8.png" /> 3<br />\
    <img src="styles/legend/Cyr_Artemon_15_9.png" /> 3 (Capital)<br />\
    <img src="styles/legend/Cyr_Artemon_15_10.png" /> 4<br />\
    <img src="styles/legend/Cyr_Artemon_15_11.png" /> 5<br />\
    <img src="styles/legend/Cyr_Artemon_15_12.png" /> 5 (Capital)<br />\
    <img src="styles/legend/Cyr_Artemon_15_13.png" /> 6 <br />' });
var format_Cyr_Chorrol_16 = new ol.format.GeoJSON();
var features_Cyr_Chorrol_16 = format_Cyr_Chorrol_16.readFeatures(json_Cyr_Chorrol_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cyr_Chorrol_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cyr_Chorrol_16.addFeatures(features_Cyr_Chorrol_16);
var lyr_Cyr_Chorrol_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cyr_Chorrol_16,
maxResolution:2279.916121022981,
 
                style: style_Cyr_Chorrol_16,
                popuplayertitle: 'Cyr_Chorrol',
                interactive: true,
    title: 'Cyr_Chorrol<br />\
    <img src="styles/legend/Cyr_Chorrol_16_0.png" /> 0<br />\
    <img src="styles/legend/Cyr_Chorrol_16_1.png" /> 0 (Capital)<br />\
    <img src="styles/legend/Cyr_Chorrol_16_2.png" /> 00<br />\
    <img src="styles/legend/Cyr_Chorrol_16_3.png" /> 00 (Capital)<br />\
    <img src="styles/legend/Cyr_Chorrol_16_4.png" /> 1<br />\
    <img src="styles/legend/Cyr_Chorrol_16_5.png" /> 1 (Capital)<br />\
    <img src="styles/legend/Cyr_Chorrol_16_6.png" /> 2<br />\
    <img src="styles/legend/Cyr_Chorrol_16_7.png" /> 2 (Capital)<br />\
    <img src="styles/legend/Cyr_Chorrol_16_8.png" /> 3<br />\
    <img src="styles/legend/Cyr_Chorrol_16_9.png" /> 3 (Capital)<br />\
    <img src="styles/legend/Cyr_Chorrol_16_10.png" /> 4<br />\
    <img src="styles/legend/Cyr_Chorrol_16_11.png" /> 5<br />\
    <img src="styles/legend/Cyr_Chorrol_16_12.png" /> 5 (Capital)<br />\
    <img src="styles/legend/Cyr_Chorrol_16_13.png" /> 6 <br />' });
var format_Cyr_Sutch_17 = new ol.format.GeoJSON();
var features_Cyr_Sutch_17 = format_Cyr_Sutch_17.readFeatures(json_Cyr_Sutch_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cyr_Sutch_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cyr_Sutch_17.addFeatures(features_Cyr_Sutch_17);
var lyr_Cyr_Sutch_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cyr_Sutch_17,
maxResolution:2279.916121022981,
 
                style: style_Cyr_Sutch_17,
                popuplayertitle: 'Cyr_Sutch',
                interactive: true,
    title: 'Cyr_Sutch<br />\
    <img src="styles/legend/Cyr_Sutch_17_0.png" /> 0<br />\
    <img src="styles/legend/Cyr_Sutch_17_1.png" /> 0 (Capital)<br />\
    <img src="styles/legend/Cyr_Sutch_17_2.png" /> 00<br />\
    <img src="styles/legend/Cyr_Sutch_17_3.png" /> 00 (Capital)<br />\
    <img src="styles/legend/Cyr_Sutch_17_4.png" /> 1<br />\
    <img src="styles/legend/Cyr_Sutch_17_5.png" /> 1 (Capital)<br />\
    <img src="styles/legend/Cyr_Sutch_17_6.png" /> 2<br />\
    <img src="styles/legend/Cyr_Sutch_17_7.png" /> 2 (Capital)<br />\
    <img src="styles/legend/Cyr_Sutch_17_8.png" /> 3<br />\
    <img src="styles/legend/Cyr_Sutch_17_9.png" /> 3 (Capital)<br />\
    <img src="styles/legend/Cyr_Sutch_17_10.png" /> 4<br />\
    <img src="styles/legend/Cyr_Sutch_17_11.png" /> 5<br />\
    <img src="styles/legend/Cyr_Sutch_17_12.png" /> 5 (Capital)<br />\
    <img src="styles/legend/Cyr_Sutch_17_13.png" /> 6 <br />' });
var format_Cyr_Kvatch_18 = new ol.format.GeoJSON();
var features_Cyr_Kvatch_18 = format_Cyr_Kvatch_18.readFeatures(json_Cyr_Kvatch_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cyr_Kvatch_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cyr_Kvatch_18.addFeatures(features_Cyr_Kvatch_18);
var lyr_Cyr_Kvatch_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cyr_Kvatch_18,
maxResolution:2279.916121022981,
 
                style: style_Cyr_Kvatch_18,
                popuplayertitle: 'Cyr_Kvatch',
                interactive: true,
    title: 'Cyr_Kvatch<br />\
    <img src="styles/legend/Cyr_Kvatch_18_0.png" /> 0<br />\
    <img src="styles/legend/Cyr_Kvatch_18_1.png" /> 0 (Capital)<br />\
    <img src="styles/legend/Cyr_Kvatch_18_2.png" /> 00<br />\
    <img src="styles/legend/Cyr_Kvatch_18_3.png" /> 00 (Capital)<br />\
    <img src="styles/legend/Cyr_Kvatch_18_4.png" /> 1<br />\
    <img src="styles/legend/Cyr_Kvatch_18_5.png" /> 1 (Capital)<br />\
    <img src="styles/legend/Cyr_Kvatch_18_6.png" /> 2<br />\
    <img src="styles/legend/Cyr_Kvatch_18_7.png" /> 2 (Capital)<br />\
    <img src="styles/legend/Cyr_Kvatch_18_8.png" /> 3<br />\
    <img src="styles/legend/Cyr_Kvatch_18_9.png" /> 3 (Capital)<br />\
    <img src="styles/legend/Cyr_Kvatch_18_10.png" /> 4<br />\
    <img src="styles/legend/Cyr_Kvatch_18_11.png" /> 5<br />\
    <img src="styles/legend/Cyr_Kvatch_18_12.png" /> 5 (Capital)<br />\
    <img src="styles/legend/Cyr_Kvatch_18_13.png" /> 6 <br />' });
var format_Cyr_Sarchal_19 = new ol.format.GeoJSON();
var features_Cyr_Sarchal_19 = format_Cyr_Sarchal_19.readFeatures(json_Cyr_Sarchal_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cyr_Sarchal_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cyr_Sarchal_19.addFeatures(features_Cyr_Sarchal_19);
var lyr_Cyr_Sarchal_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cyr_Sarchal_19,
maxResolution:2279.916121022981,
 
                style: style_Cyr_Sarchal_19,
                popuplayertitle: 'Cyr_Sarchal',
                interactive: true,
    title: 'Cyr_Sarchal<br />\
    <img src="styles/legend/Cyr_Sarchal_19_0.png" /> 0<br />\
    <img src="styles/legend/Cyr_Sarchal_19_1.png" /> 0 (Capital)<br />\
    <img src="styles/legend/Cyr_Sarchal_19_2.png" /> 00<br />\
    <img src="styles/legend/Cyr_Sarchal_19_3.png" /> 00 (Capital)<br />\
    <img src="styles/legend/Cyr_Sarchal_19_4.png" /> 1<br />\
    <img src="styles/legend/Cyr_Sarchal_19_5.png" /> 1 (Capital)<br />\
    <img src="styles/legend/Cyr_Sarchal_19_6.png" /> 2<br />\
    <img src="styles/legend/Cyr_Sarchal_19_7.png" /> 2 (Capital)<br />\
    <img src="styles/legend/Cyr_Sarchal_19_8.png" /> 3<br />\
    <img src="styles/legend/Cyr_Sarchal_19_9.png" /> 3 (Capital)<br />\
    <img src="styles/legend/Cyr_Sarchal_19_10.png" /> 4<br />\
    <img src="styles/legend/Cyr_Sarchal_19_11.png" /> 5<br />\
    <img src="styles/legend/Cyr_Sarchal_19_12.png" /> 5 (Capital)<br />\
    <img src="styles/legend/Cyr_Sarchal_19_13.png" /> 6 <br />' });
var format_Cyr_Empire_of_Tamriel_20 = new ol.format.GeoJSON();
var features_Cyr_Empire_of_Tamriel_20 = format_Cyr_Empire_of_Tamriel_20.readFeatures(json_Cyr_Empire_of_Tamriel_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cyr_Empire_of_Tamriel_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cyr_Empire_of_Tamriel_20.addFeatures(features_Cyr_Empire_of_Tamriel_20);
var lyr_Cyr_Empire_of_Tamriel_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cyr_Empire_of_Tamriel_20,
maxResolution:2279.916121022981,
 
                style: style_Cyr_Empire_of_Tamriel_20,
                popuplayertitle: 'Cyr_Empire_of_Tamriel',
                interactive: true,
    title: 'Cyr_Empire_of_Tamriel<br />\
    <img src="styles/legend/Cyr_Empire_of_Tamriel_20_0.png" /> 0<br />\
    <img src="styles/legend/Cyr_Empire_of_Tamriel_20_1.png" /> 0 (Capital)<br />\
    <img src="styles/legend/Cyr_Empire_of_Tamriel_20_2.png" /> 00<br />\
    <img src="styles/legend/Cyr_Empire_of_Tamriel_20_3.png" /> 00 (Capital)<br />\
    <img src="styles/legend/Cyr_Empire_of_Tamriel_20_4.png" /> 1<br />\
    <img src="styles/legend/Cyr_Empire_of_Tamriel_20_5.png" /> 1 (Capital)<br />\
    <img src="styles/legend/Cyr_Empire_of_Tamriel_20_6.png" /> 2<br />\
    <img src="styles/legend/Cyr_Empire_of_Tamriel_20_7.png" /> 2 (Capital)<br />\
    <img src="styles/legend/Cyr_Empire_of_Tamriel_20_8.png" /> 3<br />\
    <img src="styles/legend/Cyr_Empire_of_Tamriel_20_9.png" /> 3 (Capital)<br />\
    <img src="styles/legend/Cyr_Empire_of_Tamriel_20_10.png" /> 4<br />\
    <img src="styles/legend/Cyr_Empire_of_Tamriel_20_11.png" /> 5<br />\
    <img src="styles/legend/Cyr_Empire_of_Tamriel_20_12.png" /> 5 (Capital)<br />\
    <img src="styles/legend/Cyr_Empire_of_Tamriel_20_13.png" /> 6 <br />' });
var format_Cyr_Anvil_21 = new ol.format.GeoJSON();
var features_Cyr_Anvil_21 = format_Cyr_Anvil_21.readFeatures(json_Cyr_Anvil_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cyr_Anvil_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cyr_Anvil_21.addFeatures(features_Cyr_Anvil_21);
var lyr_Cyr_Anvil_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cyr_Anvil_21,
maxResolution:2279.916121022981,
 
                style: style_Cyr_Anvil_21,
                popuplayertitle: 'Cyr_Anvil',
                interactive: true,
    title: 'Cyr_Anvil<br />\
    <img src="styles/legend/Cyr_Anvil_21_0.png" /> 0<br />\
    <img src="styles/legend/Cyr_Anvil_21_1.png" /> 0 (Capital)<br />\
    <img src="styles/legend/Cyr_Anvil_21_2.png" /> 00<br />\
    <img src="styles/legend/Cyr_Anvil_21_3.png" /> 00 (Capital)<br />\
    <img src="styles/legend/Cyr_Anvil_21_4.png" /> 1<br />\
    <img src="styles/legend/Cyr_Anvil_21_5.png" /> 1 (Capital)<br />\
    <img src="styles/legend/Cyr_Anvil_21_6.png" /> 2<br />\
    <img src="styles/legend/Cyr_Anvil_21_7.png" /> 2 (Capital)<br />\
    <img src="styles/legend/Cyr_Anvil_21_8.png" /> 3<br />\
    <img src="styles/legend/Cyr_Anvil_21_9.png" /> 3 (Capital)<br />\
    <img src="styles/legend/Cyr_Anvil_21_10.png" /> 4<br />\
    <img src="styles/legend/Cyr_Anvil_21_11.png" /> 5<br />\
    <img src="styles/legend/Cyr_Anvil_21_12.png" /> 5 (Capital)<br />\
    <img src="styles/legend/Cyr_Anvil_21_13.png" /> 6 <br />' });
var format_HF_Rihad_22 = new ol.format.GeoJSON();
var features_HF_Rihad_22 = format_HF_Rihad_22.readFeatures(json_HF_Rihad_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HF_Rihad_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HF_Rihad_22.addFeatures(features_HF_Rihad_22);
var lyr_HF_Rihad_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HF_Rihad_22,
maxResolution:2279.916121022981,
 
                style: style_HF_Rihad_22,
                popuplayertitle: 'HF_Rihad',
                interactive: true,
    title: 'HF_Rihad<br />\
    <img src="styles/legend/HF_Rihad_22_0.png" /> 0<br />\
    <img src="styles/legend/HF_Rihad_22_1.png" /> 0 (Capital)<br />\
    <img src="styles/legend/HF_Rihad_22_2.png" /> 00<br />\
    <img src="styles/legend/HF_Rihad_22_3.png" /> 00 (Capital)<br />\
    <img src="styles/legend/HF_Rihad_22_4.png" /> 1<br />\
    <img src="styles/legend/HF_Rihad_22_5.png" /> 1 (Capital)<br />\
    <img src="styles/legend/HF_Rihad_22_6.png" /> 2<br />\
    <img src="styles/legend/HF_Rihad_22_7.png" /> 2 (Capital)<br />\
    <img src="styles/legend/HF_Rihad_22_8.png" /> 3<br />\
    <img src="styles/legend/HF_Rihad_22_9.png" /> 3 (Capital)<br />\
    <img src="styles/legend/HF_Rihad_22_10.png" /> 4<br />\
    <img src="styles/legend/HF_Rihad_22_11.png" /> 5<br />\
    <img src="styles/legend/HF_Rihad_22_12.png" /> 5 (Capital)<br />\
    <img src="styles/legend/HF_Rihad_22_13.png" /> 6 <br />' });
var format_HF_WasteDwellers_23 = new ol.format.GeoJSON();
var features_HF_WasteDwellers_23 = format_HF_WasteDwellers_23.readFeatures(json_HF_WasteDwellers_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HF_WasteDwellers_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HF_WasteDwellers_23.addFeatures(features_HF_WasteDwellers_23);
var lyr_HF_WasteDwellers_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HF_WasteDwellers_23,
maxResolution:2279.916121022981,
 
                style: style_HF_WasteDwellers_23,
                popuplayertitle: 'HF_WasteDwellers',
                interactive: true,
    title: 'HF_WasteDwellers<br />\
    <img src="styles/legend/HF_WasteDwellers_23_0.png" /> 0<br />\
    <img src="styles/legend/HF_WasteDwellers_23_1.png" /> 0 (Capital)<br />\
    <img src="styles/legend/HF_WasteDwellers_23_2.png" /> 00<br />\
    <img src="styles/legend/HF_WasteDwellers_23_3.png" /> 00 (Capital)<br />\
    <img src="styles/legend/HF_WasteDwellers_23_4.png" /> 1<br />\
    <img src="styles/legend/HF_WasteDwellers_23_5.png" /> 1 (Capital)<br />\
    <img src="styles/legend/HF_WasteDwellers_23_6.png" /> 2<br />\
    <img src="styles/legend/HF_WasteDwellers_23_7.png" /> 2 (Capital)<br />\
    <img src="styles/legend/HF_WasteDwellers_23_8.png" /> 3<br />\
    <img src="styles/legend/HF_WasteDwellers_23_9.png" /> 3 (Capital)<br />\
    <img src="styles/legend/HF_WasteDwellers_23_10.png" /> 4<br />\
    <img src="styles/legend/HF_WasteDwellers_23_11.png" /> 5<br />\
    <img src="styles/legend/HF_WasteDwellers_23_12.png" /> 5 (Capital)<br />\
    <img src="styles/legend/HF_WasteDwellers_23_13.png" /> 6 <br />' });
var format_HF_Elinhir_24 = new ol.format.GeoJSON();
var features_HF_Elinhir_24 = format_HF_Elinhir_24.readFeatures(json_HF_Elinhir_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HF_Elinhir_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HF_Elinhir_24.addFeatures(features_HF_Elinhir_24);
var lyr_HF_Elinhir_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HF_Elinhir_24,
maxResolution:2279.916121022981,
 
                style: style_HF_Elinhir_24,
                popuplayertitle: 'HF_Elinhir',
                interactive: true,
    title: 'HF_Elinhir<br />\
    <img src="styles/legend/HF_Elinhir_24_0.png" /> 0<br />\
    <img src="styles/legend/HF_Elinhir_24_1.png" /> 0 (Capital)<br />\
    <img src="styles/legend/HF_Elinhir_24_2.png" /> 00<br />\
    <img src="styles/legend/HF_Elinhir_24_3.png" /> 00 (Capital)<br />\
    <img src="styles/legend/HF_Elinhir_24_4.png" /> 1<br />\
    <img src="styles/legend/HF_Elinhir_24_5.png" /> 1 (Capital)<br />\
    <img src="styles/legend/HF_Elinhir_24_6.png" /> 2<br />\
    <img src="styles/legend/HF_Elinhir_24_7.png" /> 2 (Capital)<br />\
    <img src="styles/legend/HF_Elinhir_24_8.png" /> 3<br />\
    <img src="styles/legend/HF_Elinhir_24_9.png" /> 3 (Capital)<br />\
    <img src="styles/legend/HF_Elinhir_24_10.png" /> 4<br />\
    <img src="styles/legend/HF_Elinhir_24_11.png" /> 5<br />\
    <img src="styles/legend/HF_Elinhir_24_12.png" /> 5 (Capital)<br />\
    <img src="styles/legend/HF_Elinhir_24_13.png" /> 6 <br />' });
var format_HF_RaHabi_Company_25 = new ol.format.GeoJSON();
var features_HF_RaHabi_Company_25 = format_HF_RaHabi_Company_25.readFeatures(json_HF_RaHabi_Company_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HF_RaHabi_Company_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HF_RaHabi_Company_25.addFeatures(features_HF_RaHabi_Company_25);
var lyr_HF_RaHabi_Company_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HF_RaHabi_Company_25,
maxResolution:2279.916121022981,
 
                style: style_HF_RaHabi_Company_25,
                popuplayertitle: 'HF_Ra-Habi_Company',
                interactive: true,
    title: 'HF_Ra-Habi_Company<br />\
    <img src="styles/legend/HF_RaHabi_Company_25_0.png" /> 0<br />\
    <img src="styles/legend/HF_RaHabi_Company_25_1.png" /> 0 (Capital)<br />\
    <img src="styles/legend/HF_RaHabi_Company_25_2.png" /> 00<br />\
    <img src="styles/legend/HF_RaHabi_Company_25_3.png" /> 00 (Capital)<br />\
    <img src="styles/legend/HF_RaHabi_Company_25_4.png" /> 1<br />\
    <img src="styles/legend/HF_RaHabi_Company_25_5.png" /> 1 (Capital)<br />\
    <img src="styles/legend/HF_RaHabi_Company_25_6.png" /> 2<br />\
    <img src="styles/legend/HF_RaHabi_Company_25_7.png" /> 2 (Capital)<br />\
    <img src="styles/legend/HF_RaHabi_Company_25_8.png" /> 3<br />\
    <img src="styles/legend/HF_RaHabi_Company_25_9.png" /> 3 (Capital)<br />\
    <img src="styles/legend/HF_RaHabi_Company_25_10.png" /> 4<br />\
    <img src="styles/legend/HF_RaHabi_Company_25_11.png" /> 5<br />\
    <img src="styles/legend/HF_RaHabi_Company_25_12.png" /> 5 (Capital)<br />\
    <img src="styles/legend/HF_RaHabi_Company_25_13.png" /> 6 <br />' });
var format_HF_ToaKorom_Host_26 = new ol.format.GeoJSON();
var features_HF_ToaKorom_Host_26 = format_HF_ToaKorom_Host_26.readFeatures(json_HF_ToaKorom_Host_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HF_ToaKorom_Host_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HF_ToaKorom_Host_26.addFeatures(features_HF_ToaKorom_Host_26);
var lyr_HF_ToaKorom_Host_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HF_ToaKorom_Host_26,
maxResolution:2279.916121022981,
 
                style: style_HF_ToaKorom_Host_26,
                popuplayertitle: 'HF_Toa-Korom_Host',
                interactive: true,
    title: 'HF_Toa-Korom_Host<br />\
    <img src="styles/legend/HF_ToaKorom_Host_26_0.png" /> 0<br />\
    <img src="styles/legend/HF_ToaKorom_Host_26_1.png" /> 0 (Capital)<br />\
    <img src="styles/legend/HF_ToaKorom_Host_26_2.png" /> 00<br />\
    <img src="styles/legend/HF_ToaKorom_Host_26_3.png" /> 00 (Capital)<br />\
    <img src="styles/legend/HF_ToaKorom_Host_26_4.png" /> 1<br />\
    <img src="styles/legend/HF_ToaKorom_Host_26_5.png" /> 1 (Capital)<br />\
    <img src="styles/legend/HF_ToaKorom_Host_26_6.png" /> 2<br />\
    <img src="styles/legend/HF_ToaKorom_Host_26_7.png" /> 2 (Capital)<br />\
    <img src="styles/legend/HF_ToaKorom_Host_26_8.png" /> 3<br />\
    <img src="styles/legend/HF_ToaKorom_Host_26_9.png" /> 3 (Capital)<br />\
    <img src="styles/legend/HF_ToaKorom_Host_26_10.png" /> 4<br />\
    <img src="styles/legend/HF_ToaKorom_Host_26_11.png" /> 5<br />\
    <img src="styles/legend/HF_ToaKorom_Host_26_12.png" /> 5 (Capital)<br />\
    <img src="styles/legend/HF_ToaKorom_Host_26_13.png" /> 6 <br />' });
var format_hf_Dragonstar_27 = new ol.format.GeoJSON();
var features_hf_Dragonstar_27 = format_hf_Dragonstar_27.readFeatures(json_hf_Dragonstar_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hf_Dragonstar_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hf_Dragonstar_27.addFeatures(features_hf_Dragonstar_27);
var lyr_hf_Dragonstar_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hf_Dragonstar_27,
maxResolution:2279.916121022981,
 
                style: style_hf_Dragonstar_27,
                popuplayertitle: 'hf_Dragonstar',
                interactive: true,
    title: 'hf_Dragonstar<br />\
    <img src="styles/legend/hf_Dragonstar_27_0.png" /> 0<br />\
    <img src="styles/legend/hf_Dragonstar_27_1.png" /> 0 (Capital)<br />\
    <img src="styles/legend/hf_Dragonstar_27_2.png" /> 00<br />\
    <img src="styles/legend/hf_Dragonstar_27_3.png" /> 00 (Capital)<br />\
    <img src="styles/legend/hf_Dragonstar_27_4.png" /> 1<br />\
    <img src="styles/legend/hf_Dragonstar_27_5.png" /> 1 (Capital)<br />\
    <img src="styles/legend/hf_Dragonstar_27_6.png" /> 2<br />\
    <img src="styles/legend/hf_Dragonstar_27_7.png" /> 2 (Capital)<br />\
    <img src="styles/legend/hf_Dragonstar_27_8.png" /> 3<br />\
    <img src="styles/legend/hf_Dragonstar_27_9.png" /> 3 (Capital)<br />\
    <img src="styles/legend/hf_Dragonstar_27_10.png" /> 4<br />\
    <img src="styles/legend/hf_Dragonstar_27_11.png" /> 5<br />\
    <img src="styles/legend/hf_Dragonstar_27_12.png" /> 5 (Capital)<br />\
    <img src="styles/legend/hf_Dragonstar_27_13.png" /> 6 <br />' });
var format_HF_DragontailOrcs_28 = new ol.format.GeoJSON();
var features_HF_DragontailOrcs_28 = format_HF_DragontailOrcs_28.readFeatures(json_HF_DragontailOrcs_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HF_DragontailOrcs_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HF_DragontailOrcs_28.addFeatures(features_HF_DragontailOrcs_28);
var lyr_HF_DragontailOrcs_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HF_DragontailOrcs_28,
maxResolution:2279.916121022981,
 
                style: style_HF_DragontailOrcs_28,
                popuplayertitle: 'HF_Dragontail Orcs',
                interactive: true,
    title: 'HF_Dragontail Orcs<br />\
    <img src="styles/legend/HF_DragontailOrcs_28_0.png" /> 0<br />\
    <img src="styles/legend/HF_DragontailOrcs_28_1.png" /> 0 (Capital)<br />\
    <img src="styles/legend/HF_DragontailOrcs_28_2.png" /> 00<br />\
    <img src="styles/legend/HF_DragontailOrcs_28_3.png" /> 00 (Capital)<br />\
    <img src="styles/legend/HF_DragontailOrcs_28_4.png" /> 1<br />\
    <img src="styles/legend/HF_DragontailOrcs_28_5.png" /> 1 (Capital)<br />\
    <img src="styles/legend/HF_DragontailOrcs_28_6.png" /> 2<br />\
    <img src="styles/legend/HF_DragontailOrcs_28_7.png" /> 2 (Capital)<br />\
    <img src="styles/legend/HF_DragontailOrcs_28_8.png" /> 3<br />\
    <img src="styles/legend/HF_DragontailOrcs_28_9.png" /> 3 (Capital)<br />\
    <img src="styles/legend/HF_DragontailOrcs_28_10.png" /> 4<br />\
    <img src="styles/legend/HF_DragontailOrcs_28_11.png" /> 5<br />\
    <img src="styles/legend/HF_DragontailOrcs_28_12.png" /> 5 (Capital)<br />\
    <img src="styles/legend/HF_DragontailOrcs_28_13.png" /> 6 <br />' });
var format_HF_Skaven_29 = new ol.format.GeoJSON();
var features_HF_Skaven_29 = format_HF_Skaven_29.readFeatures(json_HF_Skaven_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HF_Skaven_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HF_Skaven_29.addFeatures(features_HF_Skaven_29);
var lyr_HF_Skaven_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HF_Skaven_29,
maxResolution:2279.916121022981,
 
                style: style_HF_Skaven_29,
                popuplayertitle: 'HF_Skaven',
                interactive: true,
    title: 'HF_Skaven<br />\
    <img src="styles/legend/HF_Skaven_29_0.png" /> 0<br />\
    <img src="styles/legend/HF_Skaven_29_1.png" /> 0 (Capital)<br />\
    <img src="styles/legend/HF_Skaven_29_2.png" /> 00<br />\
    <img src="styles/legend/HF_Skaven_29_3.png" /> 00 (Capital)<br />\
    <img src="styles/legend/HF_Skaven_29_4.png" /> 1<br />\
    <img src="styles/legend/HF_Skaven_29_5.png" /> 1 (Capital)<br />\
    <img src="styles/legend/HF_Skaven_29_6.png" /> 2<br />\
    <img src="styles/legend/HF_Skaven_29_7.png" /> 2 (Capital)<br />\
    <img src="styles/legend/HF_Skaven_29_8.png" /> 3<br />\
    <img src="styles/legend/HF_Skaven_29_9.png" /> 3 (Capital)<br />\
    <img src="styles/legend/HF_Skaven_29_10.png" /> 4<br />\
    <img src="styles/legend/HF_Skaven_29_11.png" /> 5<br />\
    <img src="styles/legend/HF_Skaven_29_12.png" /> 5 (Capital)<br />\
    <img src="styles/legend/HF_Skaven_29_13.png" /> 6 <br />' });
var format_HF_Verkath_30 = new ol.format.GeoJSON();
var features_HF_Verkath_30 = format_HF_Verkath_30.readFeatures(json_HF_Verkath_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HF_Verkath_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HF_Verkath_30.addFeatures(features_HF_Verkath_30);
var lyr_HF_Verkath_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HF_Verkath_30,
maxResolution:2279.916121022981,
 
                style: style_HF_Verkath_30,
                popuplayertitle: 'HF_Verkath',
                interactive: true,
    title: 'HF_Verkath<br />\
    <img src="styles/legend/HF_Verkath_30_0.png" /> 0<br />\
    <img src="styles/legend/HF_Verkath_30_1.png" /> 0 (Capital)<br />\
    <img src="styles/legend/HF_Verkath_30_2.png" /> 00<br />\
    <img src="styles/legend/HF_Verkath_30_3.png" /> 00 (Capital)<br />\
    <img src="styles/legend/HF_Verkath_30_4.png" /> 1<br />\
    <img src="styles/legend/HF_Verkath_30_5.png" /> 1 (Capital)<br />\
    <img src="styles/legend/HF_Verkath_30_6.png" /> 2<br />\
    <img src="styles/legend/HF_Verkath_30_7.png" /> 2 (Capital)<br />\
    <img src="styles/legend/HF_Verkath_30_8.png" /> 3<br />\
    <img src="styles/legend/HF_Verkath_30_9.png" /> 3 (Capital)<br />\
    <img src="styles/legend/HF_Verkath_30_10.png" /> 4<br />\
    <img src="styles/legend/HF_Verkath_30_11.png" /> 5<br />\
    <img src="styles/legend/HF_Verkath_30_12.png" /> 5 (Capital)<br />\
    <img src="styles/legend/HF_Verkath_30_13.png" /> 6 <br />' });
var format_HF_Totambu_31 = new ol.format.GeoJSON();
var features_HF_Totambu_31 = format_HF_Totambu_31.readFeatures(json_HF_Totambu_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HF_Totambu_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HF_Totambu_31.addFeatures(features_HF_Totambu_31);
var lyr_HF_Totambu_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HF_Totambu_31,
maxResolution:2279.916121022981,
 
                style: style_HF_Totambu_31,
                popuplayertitle: 'HF_Totambu',
                interactive: true,
    title: 'HF_Totambu<br />\
    <img src="styles/legend/HF_Totambu_31_0.png" /> 0<br />\
    <img src="styles/legend/HF_Totambu_31_1.png" /> 0 (Capital)<br />\
    <img src="styles/legend/HF_Totambu_31_2.png" /> 00<br />\
    <img src="styles/legend/HF_Totambu_31_3.png" /> 00 (Capital)<br />\
    <img src="styles/legend/HF_Totambu_31_4.png" /> 1<br />\
    <img src="styles/legend/HF_Totambu_31_5.png" /> 1 (Capital)<br />\
    <img src="styles/legend/HF_Totambu_31_6.png" /> 2<br />\
    <img src="styles/legend/HF_Totambu_31_7.png" /> 2 (Capital)<br />\
    <img src="styles/legend/HF_Totambu_31_8.png" /> 3<br />\
    <img src="styles/legend/HF_Totambu_31_9.png" /> 3 (Capital)<br />\
    <img src="styles/legend/HF_Totambu_31_10.png" /> 4<br />\
    <img src="styles/legend/HF_Totambu_31_11.png" /> 5<br />\
    <img src="styles/legend/HF_Totambu_31_12.png" /> 5 (Capital)<br />\
    <img src="styles/legend/HF_Totambu_31_13.png" /> 6 <br />' });
var format_HF_Sentinel_32 = new ol.format.GeoJSON();
var features_HF_Sentinel_32 = format_HF_Sentinel_32.readFeatures(json_HF_Sentinel_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HF_Sentinel_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HF_Sentinel_32.addFeatures(features_HF_Sentinel_32);
var lyr_HF_Sentinel_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HF_Sentinel_32,
maxResolution:2279.916121022981,
 
                style: style_HF_Sentinel_32,
                popuplayertitle: 'HF_Sentinel',
                interactive: true,
    title: 'HF_Sentinel<br />\
    <img src="styles/legend/HF_Sentinel_32_0.png" /> 0<br />\
    <img src="styles/legend/HF_Sentinel_32_1.png" /> 0 (Capital)<br />\
    <img src="styles/legend/HF_Sentinel_32_2.png" /> 00<br />\
    <img src="styles/legend/HF_Sentinel_32_3.png" /> 00 (Capital)<br />\
    <img src="styles/legend/HF_Sentinel_32_4.png" /> 1<br />\
    <img src="styles/legend/HF_Sentinel_32_5.png" /> 1 (Capital)<br />\
    <img src="styles/legend/HF_Sentinel_32_6.png" /> 2<br />\
    <img src="styles/legend/HF_Sentinel_32_7.png" /> 2 (Capital)<br />\
    <img src="styles/legend/HF_Sentinel_32_8.png" /> 3<br />\
    <img src="styles/legend/HF_Sentinel_32_9.png" /> 3 (Capital)<br />\
    <img src="styles/legend/HF_Sentinel_32_10.png" /> 4<br />\
    <img src="styles/legend/HF_Sentinel_32_11.png" /> 5<br />\
    <img src="styles/legend/HF_Sentinel_32_12.png" /> 5 (Capital)<br />\
    <img src="styles/legend/HF_Sentinel_32_13.png" /> 6 <br />' });
var format_HF_DuneDwellers_33 = new ol.format.GeoJSON();
var features_HF_DuneDwellers_33 = format_HF_DuneDwellers_33.readFeatures(json_HF_DuneDwellers_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HF_DuneDwellers_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HF_DuneDwellers_33.addFeatures(features_HF_DuneDwellers_33);
var lyr_HF_DuneDwellers_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HF_DuneDwellers_33,
maxResolution:2279.916121022981,
 
                style: style_HF_DuneDwellers_33,
                popuplayertitle: 'HF_DuneDwellers',
                interactive: true,
    title: 'HF_DuneDwellers<br />\
    <img src="styles/legend/HF_DuneDwellers_33_0.png" /> 0<br />\
    <img src="styles/legend/HF_DuneDwellers_33_1.png" /> 0 (Capital)<br />\
    <img src="styles/legend/HF_DuneDwellers_33_2.png" /> 00<br />\
    <img src="styles/legend/HF_DuneDwellers_33_3.png" /> 00 (Capital)<br />\
    <img src="styles/legend/HF_DuneDwellers_33_4.png" /> 1<br />\
    <img src="styles/legend/HF_DuneDwellers_33_5.png" /> 1 (Capital)<br />\
    <img src="styles/legend/HF_DuneDwellers_33_6.png" /> 2<br />\
    <img src="styles/legend/HF_DuneDwellers_33_7.png" /> 2 (Capital)<br />\
    <img src="styles/legend/HF_DuneDwellers_33_8.png" /> 3<br />\
    <img src="styles/legend/HF_DuneDwellers_33_9.png" /> 3 (Capital)<br />\
    <img src="styles/legend/HF_DuneDwellers_33_10.png" /> 4<br />\
    <img src="styles/legend/HF_DuneDwellers_33_11.png" /> 5<br />\
    <img src="styles/legend/HF_DuneDwellers_33_12.png" /> 5 (Capital)<br />\
    <img src="styles/legend/HF_DuneDwellers_33_13.png" /> 6 <br />' });
var format_HF_SwampDwellers_34 = new ol.format.GeoJSON();
var features_HF_SwampDwellers_34 = format_HF_SwampDwellers_34.readFeatures(json_HF_SwampDwellers_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HF_SwampDwellers_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HF_SwampDwellers_34.addFeatures(features_HF_SwampDwellers_34);
var lyr_HF_SwampDwellers_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HF_SwampDwellers_34,
maxResolution:2279.916121022981,
 
                style: style_HF_SwampDwellers_34,
                popuplayertitle: 'HF_SwampDwellers',
                interactive: true,
    title: 'HF_SwampDwellers<br />\
    <img src="styles/legend/HF_SwampDwellers_34_0.png" /> 0<br />\
    <img src="styles/legend/HF_SwampDwellers_34_1.png" /> 0 (Capital)<br />\
    <img src="styles/legend/HF_SwampDwellers_34_2.png" /> 00<br />\
    <img src="styles/legend/HF_SwampDwellers_34_3.png" /> 00 (Capital)<br />\
    <img src="styles/legend/HF_SwampDwellers_34_4.png" /> 1<br />\
    <img src="styles/legend/HF_SwampDwellers_34_5.png" /> 1 (Capital)<br />\
    <img src="styles/legend/HF_SwampDwellers_34_6.png" /> 2<br />\
    <img src="styles/legend/HF_SwampDwellers_34_7.png" /> 2 (Capital)<br />\
    <img src="styles/legend/HF_SwampDwellers_34_8.png" /> 3<br />\
    <img src="styles/legend/HF_SwampDwellers_34_9.png" /> 3 (Capital)<br />\
    <img src="styles/legend/HF_SwampDwellers_34_10.png" /> 4<br />\
    <img src="styles/legend/HF_SwampDwellers_34_11.png" /> 5<br />\
    <img src="styles/legend/HF_SwampDwellers_34_12.png" /> 5 (Capital)<br />\
    <img src="styles/legend/HF_SwampDwellers_34_13.png" /> 6 <br />' });
var format_HF_DustDwellers_35 = new ol.format.GeoJSON();
var features_HF_DustDwellers_35 = format_HF_DustDwellers_35.readFeatures(json_HF_DustDwellers_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HF_DustDwellers_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HF_DustDwellers_35.addFeatures(features_HF_DustDwellers_35);
var lyr_HF_DustDwellers_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HF_DustDwellers_35,
maxResolution:2279.916121022981,
 
                style: style_HF_DustDwellers_35,
                popuplayertitle: 'HF_DustDwellers',
                interactive: true,
    title: 'HF_DustDwellers<br />\
    <img src="styles/legend/HF_DustDwellers_35_0.png" /> 0<br />\
    <img src="styles/legend/HF_DustDwellers_35_1.png" /> 0 (Capital)<br />\
    <img src="styles/legend/HF_DustDwellers_35_2.png" /> 00<br />\
    <img src="styles/legend/HF_DustDwellers_35_3.png" /> 00 (Capital)<br />\
    <img src="styles/legend/HF_DustDwellers_35_4.png" /> 1<br />\
    <img src="styles/legend/HF_DustDwellers_35_5.png" /> 1 (Capital)<br />\
    <img src="styles/legend/HF_DustDwellers_35_6.png" /> 2<br />\
    <img src="styles/legend/HF_DustDwellers_35_7.png" /> 2 (Capital)<br />\
    <img src="styles/legend/HF_DustDwellers_35_8.png" /> 3<br />\
    <img src="styles/legend/HF_DustDwellers_35_9.png" /> 3 (Capital)<br />\
    <img src="styles/legend/HF_DustDwellers_35_10.png" /> 4<br />\
    <img src="styles/legend/HF_DustDwellers_35_11.png" /> 5<br />\
    <img src="styles/legend/HF_DustDwellers_35_12.png" /> 5 (Capital)<br />\
    <img src="styles/legend/HF_DustDwellers_35_13.png" /> 6 <br />' });
var format_HF_Taneth_36 = new ol.format.GeoJSON();
var features_HF_Taneth_36 = format_HF_Taneth_36.readFeatures(json_HF_Taneth_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HF_Taneth_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HF_Taneth_36.addFeatures(features_HF_Taneth_36);
var lyr_HF_Taneth_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HF_Taneth_36,
maxResolution:2279.916121022981,
 
                style: style_HF_Taneth_36,
                popuplayertitle: 'HF_Taneth',
                interactive: true,
    title: 'HF_Taneth<br />\
    <img src="styles/legend/HF_Taneth_36_0.png" /> 0<br />\
    <img src="styles/legend/HF_Taneth_36_1.png" /> 0 (Capital)<br />\
    <img src="styles/legend/HF_Taneth_36_2.png" /> 00<br />\
    <img src="styles/legend/HF_Taneth_36_3.png" /> 00 (Capital)<br />\
    <img src="styles/legend/HF_Taneth_36_4.png" /> 1<br />\
    <img src="styles/legend/HF_Taneth_36_5.png" /> 1 (Capital)<br />\
    <img src="styles/legend/HF_Taneth_36_6.png" /> 2<br />\
    <img src="styles/legend/HF_Taneth_36_7.png" /> 2 (Capital)<br />\
    <img src="styles/legend/HF_Taneth_36_8.png" /> 3<br />\
    <img src="styles/legend/HF_Taneth_36_9.png" /> 3 (Capital)<br />\
    <img src="styles/legend/HF_Taneth_36_10.png" /> 4<br />\
    <img src="styles/legend/HF_Taneth_36_11.png" /> 5<br />\
    <img src="styles/legend/HF_Taneth_36_12.png" /> 5 (Capital)<br />\
    <img src="styles/legend/HF_Taneth_36_13.png" /> 6 <br />' });
var format_HF_VolenIjHost_37 = new ol.format.GeoJSON();
var features_HF_VolenIjHost_37 = format_HF_VolenIjHost_37.readFeatures(json_HF_VolenIjHost_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HF_VolenIjHost_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HF_VolenIjHost_37.addFeatures(features_HF_VolenIjHost_37);
var lyr_HF_VolenIjHost_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HF_VolenIjHost_37,
maxResolution:2279.916121022981,
 
                style: style_HF_VolenIjHost_37,
                popuplayertitle: 'HF_Volen-Ij Host',
                interactive: true,
    title: 'HF_Volen-Ij Host<br />\
    <img src="styles/legend/HF_VolenIjHost_37_0.png" /> 0<br />\
    <img src="styles/legend/HF_VolenIjHost_37_1.png" /> 0 (Capital)<br />\
    <img src="styles/legend/HF_VolenIjHost_37_2.png" /> 00<br />\
    <img src="styles/legend/HF_VolenIjHost_37_3.png" /> 00 (Capital)<br />\
    <img src="styles/legend/HF_VolenIjHost_37_4.png" /> 1<br />\
    <img src="styles/legend/HF_VolenIjHost_37_5.png" /> 1 (Capital)<br />\
    <img src="styles/legend/HF_VolenIjHost_37_6.png" /> 2<br />\
    <img src="styles/legend/HF_VolenIjHost_37_7.png" /> 2 (Capital)<br />\
    <img src="styles/legend/HF_VolenIjHost_37_8.png" /> 3<br />\
    <img src="styles/legend/HF_VolenIjHost_37_9.png" /> 3 (Capital)<br />\
    <img src="styles/legend/HF_VolenIjHost_37_10.png" /> 4<br />\
    <img src="styles/legend/HF_VolenIjHost_37_11.png" /> 5<br />\
    <img src="styles/legend/HF_VolenIjHost_37_12.png" /> 5 (Capital)<br />\
    <img src="styles/legend/HF_VolenIjHost_37_13.png" /> 6 <br />' });
var format_HF_Crownlands_38 = new ol.format.GeoJSON();
var features_HF_Crownlands_38 = format_HF_Crownlands_38.readFeatures(json_HF_Crownlands_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HF_Crownlands_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HF_Crownlands_38.addFeatures(features_HF_Crownlands_38);
var lyr_HF_Crownlands_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HF_Crownlands_38,
maxResolution:2279.916121022981,
 
                style: style_HF_Crownlands_38,
                popuplayertitle: 'HF_Crownlands',
                interactive: true,
    title: 'HF_Crownlands<br />\
    <img src="styles/legend/HF_Crownlands_38_0.png" /> 0<br />\
    <img src="styles/legend/HF_Crownlands_38_1.png" /> 0 (Capital)<br />\
    <img src="styles/legend/HF_Crownlands_38_2.png" /> 00<br />\
    <img src="styles/legend/HF_Crownlands_38_3.png" /> 00 (Capital)<br />\
    <img src="styles/legend/HF_Crownlands_38_4.png" /> 1<br />\
    <img src="styles/legend/HF_Crownlands_38_5.png" /> 1 (Capital)<br />\
    <img src="styles/legend/HF_Crownlands_38_6.png" /> 2<br />\
    <img src="styles/legend/HF_Crownlands_38_7.png" /> 2 (Capital)<br />\
    <img src="styles/legend/HF_Crownlands_38_8.png" /> 3<br />\
    <img src="styles/legend/HF_Crownlands_38_9.png" /> 3 (Capital)<br />\
    <img src="styles/legend/HF_Crownlands_38_10.png" /> 4<br />\
    <img src="styles/legend/HF_Crownlands_38_11.png" /> 5<br />\
    <img src="styles/legend/HF_Crownlands_38_12.png" /> 5 (Capital)<br />\
    <img src="styles/legend/HF_Crownlands_38_13.png" /> 6 <br />' });
var group_Settlements = new ol.layer.Group({
                                layers: [lyr_Cyr_Delodiil_13,lyr_Cyr_Skingrad_14,lyr_Cyr_Artemon_15,lyr_Cyr_Chorrol_16,lyr_Cyr_Sutch_17,lyr_Cyr_Kvatch_18,lyr_Cyr_Sarchal_19,lyr_Cyr_Empire_of_Tamriel_20,lyr_Cyr_Anvil_21,lyr_HF_Rihad_22,lyr_HF_WasteDwellers_23,lyr_HF_Elinhir_24,lyr_HF_RaHabi_Company_25,lyr_HF_ToaKorom_Host_26,lyr_hf_Dragonstar_27,lyr_HF_DragontailOrcs_28,lyr_HF_Skaven_29,lyr_HF_Verkath_30,lyr_HF_Totambu_31,lyr_HF_Sentinel_32,lyr_HF_DuneDwellers_33,lyr_HF_SwampDwellers_34,lyr_HF_DustDwellers_35,lyr_HF_Taneth_36,lyr_HF_VolenIjHost_37,lyr_HF_Crownlands_38,],
                                fold: 'close',
                                title: 'Settlements'});
var group_Dungeons = new ol.layer.Group({
                                layers: [lyr_Dungeons_12,],
                                fold: 'close',
                                title: 'Dungeons'});
var group_Roads = new ol.layer.Group({
                                layers: [lyr_Roads_11,],
                                fold: 'close',
                                title: 'Roads'});
var group_Polities = new ol.layer.Group({
                                layers: [lyr_Polities_10,],
                                fold: 'close',
                                title: 'Polities'});
var group_Regions = new ol.layer.Group({
                                layers: [lyr_Regions_9,],
                                fold: 'close',
                                title: 'Regions'});
var group_DevLayers = new ol.layer.Group({
                                layers: [lyr_Claims_6,lyr_Roadmaps_7,lyr_ProjectMaps_8,],
                                fold: 'close',
                                title: 'Dev Layers'});
var group_CellExports = new ol.layer.Group({
                                layers: [lyr_hf_cellexport_1,lyr_sky_cellexport_2,lyr_hr_cellexport_3,lyr_tr_cellexport_4,lyr_pc_cellexport_5,],
                                fold: 'close',
                                title: 'CellExports'});

lyr_Landmass_0.setVisible(true);lyr_hf_cellexport_1.setVisible(false);lyr_sky_cellexport_2.setVisible(false);lyr_hr_cellexport_3.setVisible(false);lyr_tr_cellexport_4.setVisible(false);lyr_pc_cellexport_5.setVisible(false);lyr_Claims_6.setVisible(false);lyr_Roadmaps_7.setVisible(false);lyr_ProjectMaps_8.setVisible(false);lyr_Regions_9.setVisible(false);lyr_Polities_10.setVisible(false);lyr_Roads_11.setVisible(true);lyr_Dungeons_12.setVisible(true);lyr_Cyr_Delodiil_13.setVisible(true);lyr_Cyr_Skingrad_14.setVisible(true);lyr_Cyr_Artemon_15.setVisible(true);lyr_Cyr_Chorrol_16.setVisible(true);lyr_Cyr_Sutch_17.setVisible(true);lyr_Cyr_Kvatch_18.setVisible(true);lyr_Cyr_Sarchal_19.setVisible(true);lyr_Cyr_Empire_of_Tamriel_20.setVisible(true);lyr_Cyr_Anvil_21.setVisible(true);lyr_HF_Rihad_22.setVisible(true);lyr_HF_WasteDwellers_23.setVisible(true);lyr_HF_Elinhir_24.setVisible(true);lyr_HF_RaHabi_Company_25.setVisible(true);lyr_HF_ToaKorom_Host_26.setVisible(true);lyr_hf_Dragonstar_27.setVisible(true);lyr_HF_DragontailOrcs_28.setVisible(true);lyr_HF_Skaven_29.setVisible(true);lyr_HF_Verkath_30.setVisible(true);lyr_HF_Totambu_31.setVisible(true);lyr_HF_Sentinel_32.setVisible(true);lyr_HF_DuneDwellers_33.setVisible(true);lyr_HF_SwampDwellers_34.setVisible(true);lyr_HF_DustDwellers_35.setVisible(true);lyr_HF_Taneth_36.setVisible(true);lyr_HF_VolenIjHost_37.setVisible(true);lyr_HF_Crownlands_38.setVisible(true);
var layersList = [lyr_Landmass_0,group_CellExports,group_DevLayers,group_Regions,group_Polities,group_Roads,group_Dungeons,group_Settlements];
lyr_Landmass_0.set('fieldAliases', {'fid': 'fid', 'Land': 'Land', });
lyr_Claims_6.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Status': 'Status', 'Claimant': 'Claimant', 'Reviewer': 'Reviewer', });
lyr_Roadmaps_7.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Release Date': 'Release Date', 'Project': 'Project', 'Status': 'Status', });
lyr_ProjectMaps_8.set('fieldAliases', {'fid': 'fid', 'Map': 'Map', 'Project': 'Project', });
lyr_Regions_9.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Province': 'Province', });
lyr_Polities_10.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_Roads_11.set('fieldAliases', {'fid': 'fid', 'Type of Road': 'Type of Road', });
lyr_Dungeons_12.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Status': 'Status', 'Claimant': 'Claimant', 'Size': 'Size', });
lyr_Cyr_Delodiil_13.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Tier (Capital)': 'Tier (Capital)', });
lyr_Cyr_Skingrad_14.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Tier (Capital)': 'Tier (Capital)', });
lyr_Cyr_Artemon_15.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Tier (Capital)': 'Tier (Capital)', });
lyr_Cyr_Chorrol_16.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Tier (Capital)': 'Tier (Capital)', });
lyr_Cyr_Sutch_17.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Tier (Capital)': 'Tier (Capital)', });
lyr_Cyr_Kvatch_18.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Tier (Capital)': 'Tier (Capital)', });
lyr_Cyr_Sarchal_19.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Tier (Capital)': 'Tier (Capital)', });
lyr_Cyr_Empire_of_Tamriel_20.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Tier (Capital)': 'Tier (Capital)', });
lyr_Cyr_Anvil_21.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Tier (Capital)': 'Tier (Capital)', });
lyr_HF_Rihad_22.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Tier (Capital)': 'Tier (Capital)', });
lyr_HF_WasteDwellers_23.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Tier (Capital)': 'Tier (Capital)', });
lyr_HF_Elinhir_24.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Tier (Capital)': 'Tier (Capital)', });
lyr_HF_RaHabi_Company_25.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Tier (Capital)': 'Tier (Capital)', });
lyr_HF_ToaKorom_Host_26.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Tier (Capital)': 'Tier (Capital)', });
lyr_hf_Dragonstar_27.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Tier (Capital)': 'Tier (Capital)', });
lyr_HF_DragontailOrcs_28.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Tier (Capital)': 'Tier (Capital)', });
lyr_HF_Skaven_29.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Tier (Capital)': 'Tier (Capital)', });
lyr_HF_Verkath_30.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Tier (Capital)': 'Tier (Capital)', });
lyr_HF_Totambu_31.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Tier (Capital)': 'Tier (Capital)', });
lyr_HF_Sentinel_32.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Tier (Capital)': 'Tier (Capital)', });
lyr_HF_DuneDwellers_33.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Tier (Capital)': 'Tier (Capital)', });
lyr_HF_SwampDwellers_34.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Tier (Capital)': 'Tier (Capital)', });
lyr_HF_DustDwellers_35.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Tier (Capital)': 'Tier (Capital)', });
lyr_HF_Taneth_36.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Tier (Capital)': 'Tier (Capital)', });
lyr_HF_VolenIjHost_37.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Tier (Capital)': 'Tier (Capital)', });
lyr_HF_Crownlands_38.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Tier (Capital)': 'Tier (Capital)', });
lyr_Landmass_0.set('fieldImages', {'fid': 'Hidden', 'Land': 'Range', });
lyr_Claims_6.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'Status': 'TextEdit', 'Claimant': 'TextEdit', 'Reviewer': 'TextEdit', });
lyr_Roadmaps_7.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'Release Date': 'DateTime', 'Project': 'TextEdit', 'Status': 'TextEdit', });
lyr_ProjectMaps_8.set('fieldImages', {'fid': 'TextEdit', 'Map': 'TextEdit', 'Project': 'TextEdit', });
lyr_Regions_9.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'Province': 'TextEdit', });
lyr_Polities_10.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_Roads_11.set('fieldImages', {'fid': 'TextEdit', 'Type of Road': 'TextEdit', });
lyr_Dungeons_12.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'Type': 'TextEdit', 'Status': 'TextEdit', 'Claimant': 'TextEdit', 'Size': 'TextEdit', });
lyr_Cyr_Delodiil_13.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Tier (Capital)': 'TextEdit', });
lyr_Cyr_Skingrad_14.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Tier (Capital)': 'TextEdit', });
lyr_Cyr_Artemon_15.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Tier (Capital)': 'TextEdit', });
lyr_Cyr_Chorrol_16.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Tier (Capital)': 'TextEdit', });
lyr_Cyr_Sutch_17.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Tier (Capital)': 'TextEdit', });
lyr_Cyr_Kvatch_18.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Tier (Capital)': 'TextEdit', });
lyr_Cyr_Sarchal_19.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Tier (Capital)': 'TextEdit', });
lyr_Cyr_Empire_of_Tamriel_20.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Tier (Capital)': 'TextEdit', });
lyr_Cyr_Anvil_21.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Tier (Capital)': 'TextEdit', });
lyr_HF_Rihad_22.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Tier (Capital)': 'TextEdit', });
lyr_HF_WasteDwellers_23.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Tier (Capital)': 'TextEdit', });
lyr_HF_Elinhir_24.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Tier (Capital)': 'TextEdit', });
lyr_HF_RaHabi_Company_25.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Tier (Capital)': 'TextEdit', });
lyr_HF_ToaKorom_Host_26.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Tier (Capital)': 'TextEdit', });
lyr_hf_Dragonstar_27.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Tier (Capital)': 'TextEdit', });
lyr_HF_DragontailOrcs_28.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Tier (Capital)': 'TextEdit', });
lyr_HF_Skaven_29.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Tier (Capital)': 'TextEdit', });
lyr_HF_Verkath_30.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Tier (Capital)': 'TextEdit', });
lyr_HF_Totambu_31.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Tier (Capital)': 'TextEdit', });
lyr_HF_Sentinel_32.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Tier (Capital)': 'TextEdit', });
lyr_HF_DuneDwellers_33.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Tier (Capital)': 'TextEdit', });
lyr_HF_SwampDwellers_34.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Tier (Capital)': 'TextEdit', });
lyr_HF_DustDwellers_35.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Tier (Capital)': 'TextEdit', });
lyr_HF_Taneth_36.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Tier (Capital)': 'TextEdit', });
lyr_HF_VolenIjHost_37.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Tier (Capital)': 'TextEdit', });
lyr_HF_Crownlands_38.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Tier (Capital)': 'TextEdit', });
lyr_Landmass_0.set('fieldLabels', {'Land': 'no label', });
lyr_Claims_6.set('fieldLabels', {'Name': 'header label - always visible', 'Status': 'header label - always visible', 'Claimant': 'header label - visible with data', 'Reviewer': 'header label - visible with data', });
lyr_Roadmaps_7.set('fieldLabels', {'Name': 'inline label - always visible', 'Release Date': 'inline label - always visible', 'Project': 'inline label - always visible', 'Status': 'inline label - always visible', });
lyr_ProjectMaps_8.set('fieldLabels', {'fid': 'no label', 'Map': 'no label', 'Project': 'no label', });
lyr_Regions_9.set('fieldLabels', {'Name': 'header label - always visible', 'Province': 'hidden field', });
lyr_Polities_10.set('fieldLabels', {'fid': 'no label', 'Name': 'header label - always visible', });
lyr_Roads_11.set('fieldLabels', {'fid': 'no label', 'Type of Road': 'no label', });
lyr_Dungeons_12.set('fieldLabels', {'Name': 'inline label - always visible', 'Type': 'inline label - always visible', 'Status': 'inline label - visible with data', 'Claimant': 'inline label - visible with data', 'Size': 'no label', });
lyr_Cyr_Delodiil_13.set('fieldLabels', {'fid': 'no label', 'Name': 'header label - always visible', 'Tier (Capital)': 'header label - always visible', });
lyr_Cyr_Skingrad_14.set('fieldLabels', {'fid': 'no label', 'Name': 'header label - always visible', 'Tier (Capital)': 'header label - always visible', });
lyr_Cyr_Artemon_15.set('fieldLabels', {'fid': 'no label', 'Name': 'header label - always visible', 'Tier (Capital)': 'header label - always visible', });
lyr_Cyr_Chorrol_16.set('fieldLabels', {'fid': 'no label', 'Name': 'header label - always visible', 'Tier (Capital)': 'header label - always visible', });
lyr_Cyr_Sutch_17.set('fieldLabels', {'fid': 'no label', 'Name': 'header label - always visible', 'Tier (Capital)': 'header label - always visible', });
lyr_Cyr_Kvatch_18.set('fieldLabels', {'fid': 'no label', 'Name': 'header label - always visible', 'Tier (Capital)': 'header label - always visible', });
lyr_Cyr_Sarchal_19.set('fieldLabels', {'fid': 'no label', 'Name': 'header label - always visible', 'Tier (Capital)': 'header label - always visible', });
lyr_Cyr_Empire_of_Tamriel_20.set('fieldLabels', {'fid': 'no label', 'Name': 'header label - always visible', 'Tier (Capital)': 'header label - always visible', });
lyr_Cyr_Anvil_21.set('fieldLabels', {'fid': 'no label', 'Name': 'header label - always visible', 'Tier (Capital)': 'header label - always visible', });
lyr_HF_Rihad_22.set('fieldLabels', {'fid': 'no label', 'Name': 'header label - always visible', 'Tier (Capital)': 'header label - always visible', });
lyr_HF_WasteDwellers_23.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'Tier (Capital)': 'inline label - always visible', });
lyr_HF_Elinhir_24.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'Tier (Capital)': 'inline label - always visible', });
lyr_HF_RaHabi_Company_25.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'Tier (Capital)': 'inline label - always visible', });
lyr_HF_ToaKorom_Host_26.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'Tier (Capital)': 'inline label - always visible', });
lyr_hf_Dragonstar_27.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'Tier (Capital)': 'inline label - always visible', });
lyr_HF_DragontailOrcs_28.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'Tier (Capital)': 'inline label - always visible', });
lyr_HF_Skaven_29.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'Tier (Capital)': 'inline label - always visible', });
lyr_HF_Verkath_30.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'Tier (Capital)': 'inline label - always visible', });
lyr_HF_Totambu_31.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'Tier (Capital)': 'inline label - always visible', });
lyr_HF_Sentinel_32.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'Tier (Capital)': 'inline label - always visible', });
lyr_HF_DuneDwellers_33.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'Tier (Capital)': 'inline label - always visible', });
lyr_HF_SwampDwellers_34.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'Tier (Capital)': 'inline label - always visible', });
lyr_HF_DustDwellers_35.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'Tier (Capital)': 'inline label - always visible', });
lyr_HF_Taneth_36.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'Tier (Capital)': 'inline label - always visible', });
lyr_HF_VolenIjHost_37.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'Tier (Capital)': 'inline label - always visible', });
lyr_HF_Crownlands_38.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'Tier (Capital)': 'inline label - always visible', });
lyr_HF_Crownlands_38.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});