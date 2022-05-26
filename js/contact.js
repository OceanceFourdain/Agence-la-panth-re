"Use strict";
let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 45.7484600, lng: 4.8467100 },
        zoom: 8,
    });
}

window.initMap = initMap;