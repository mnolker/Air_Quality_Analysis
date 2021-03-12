// // Loading Data From CSV
// d3.csv("../Data/currentAQIData.csv").then(function (aqiData) {
//     aqiData.forEach(function (data) {
//         data.Latitude = +data.Latitude;
//         data.Longitude = +data.Longitude;
//         console.log('Latitude', data.Latitude)
//         console.log('Longitude', data.Longitude)

//     })
    
// });

const myMap = L.map("map", {
    center: [45.52, -122.67],
    zoom: 13
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: "pk.eyJ1Ijoia3N0Z2VybWFpbjA1MTMiLCJhIjoiY2tsbGs4OWtwMDAyNjJub2N5ZnozODY5ciJ9.W-Lu6Xyx2GfKZCOhd0fJTg"
}).addTo(myMap);

// var marker = L.marker([data.Latitude, data.Longitude], {
//     draggable: true,
//     title: "My First Marker"
//   }).addTo(myMap);
  
