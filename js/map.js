const vworld_key = 'B17FC8C5-917F-331F-A238-56953FE01824';
const Cesium = window.Cesium;
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyYjk1Y2I4Yy00OGI1LTQ4MmEtYmRiNC01NzBjM2Y0YWQwZmMiLCJpZCI6NTg5MCwic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0NDU1MzYwMH0.nLVv5ntXYrv6mggY91ypJioVR7QmGOZ6t1db0UBnNe8'


var layers = [{layer : 'Base', tileType : 'png'}, 
			{layer : 'gray', tileType : 'png'},
			{layer : 'midnight', tileType : 'png'},
			{layer : 'Hybrid', tileType : 'png'},
			{layer : 'Satellite', tileType : 'jpeg'} ]
var selLayer = layers[4];

var wms = new Cesium.WebMapTileServiceImageryProvider({
	  url : `http://api.vworld.kr/req/wmts/1.0.0/${vworld_key}/${selLayer.layer}/{TileMatrix}/{TileRow}/{TileCol}.${selLayer.tileType}`,
	  layer : 'Base',
	  style : 'default',
	  maximumLevel: 19,
	  credit : new Cesium.Credit('VWorld Korea')
});

var viewer = new Cesium.Viewer("nb-map",{
	imageryProvider: wms,              
	//imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
	//	url: "https://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/",
	//})
	
	timeline : false,
	animation : false,
	navigationHelpButton : false,
	navigationInstructionsInitiallyVisible : false,
	geocoder : false,
	homeButton : false,
	
	selectionIndicator : false,
	infoBox : false,
	
	baseLayerPicker : false,
	sceneModePicker : false,
	shadows : false,
	terrainExaggeration : false,
	shouldAnimate : false,
	
	vrButton : false,
	fullscreenButton : false,

});	  

viewer.camera.setView({
	destination: new Cesium.Cartesian3(-3756512.992115552, 5003744.628566555, 4786760.616010258)
});      






