// Seting Up Initial Map Center and Zoom Level
const map = L.map('map', {
    center: [36.7378, -119.7871],
    zoom: 7, 
    scrollWheelZoom: false,
    tap: false
  });

// Control panel to display map layers
const controlLayers = L.control.layers( null, null, {
position: "topright",
collapsed: false
}).addTo(map);

// Display Carto Basemap Tiles with Light Features and Labels
// This will be the Default Map
const light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
}).addTo(map); 

controlLayers.addBaseLayer(light, 'Carto Light basemap');

// Stamen Colored Terrain Basemap Tiles with Labels //
const terrain = L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png', {
attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
}); 

controlLayers.addBaseLayer(terrain, 'Stamen Terrain basemap');


// Read markers data from data.csv
$.get('../Data/currentAQIData.csv', function(csvString) {

    // Using PapaParse to Parse CSV
    const data = Papa.parse(csvString, {header: true, dynamicTyping: true}).data; // Using Header: true to Key Data by Field Name
    // For each row in data, create a marker and add it to the map
    for (let i in data) {
        let row = data[i];
        console.log(row)
        CurrentAQIValue = row.CurrentAQIValue.toString()
        let marker = L.circle([row.Latitude, row.Longitude], {
        radius: 7500,
        opacity: 1
        }).bindPopup(row.CurrentPollutant + ":" + CurrentAQIValue);
        
        marker.addTo(map);
    }

});

map.attributionControl.setPrefix(
'View <a href="https://github.com/HandsOnDataViz/leaflet-map-csv" target="_blank">code on GitHub</a>'
);