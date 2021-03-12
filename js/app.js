// Loading Data From CSV
const filePath = "../Data/currentAQIData.csv"

d3.csv(filePath).then(function (csvData) {
  csvData.forEach(function (data) {
    latitude = +data.Latitude;
    longitude = +data.Longitude;
    const locations = [latitude, longitude]
    createFeatures(locations); // The Parameter is not right
  });
});

function createFeatures()
d3.csv("../Data/currentAQIData.csv").then(function (aqiData) {
    aqiData.forEach(function (data) {
        latitude = +data.Latitude;
        longitude = +data.Longitude;
        // console.log('Latitude', data.Latitude)
        // console.log('Longitude', data.Longitude)
        const locations = [latitude, longitude]
        console.log(locations)

        const markers = [];
        // for (let i = 0; i < locations.length; i++) {
        markers.push(
          L.circle(locations, {
            stroke: false,
            fillOpacity: 0.75,
            color: "white",
            fillColor: "white",
            radius: 100
          })
        );
        // }
        console.log("Hello", markers)
    

    var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: "pk.eyJ1Ijoia3N0Z2VybWFpbjA1MTMiLCJhIjoiY2tsbGs4OWtwMDAyNjJub2N5ZnozODY5ciJ9.W-Lu6Xyx2GfKZCOhd0fJTg"
    });

  const mark = L.layerGroup(markers);
  
  var baseMaps = {
    "Street Map": streetmap
  };
  const overlayMaps = {
    "AQI Markers": mark
  }
  
  const myMap = L.map("map", {
    center: [36.7378, -119.7871],
    zoom: 7,
    layers: [streetmap, mark]
  });

  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
});
});

