window.onload = function() {


    //initializing the map and setyting its view to the specified geographical coordinates and zoom level

    const map = L.map('map').setView([0, 0], 2);


    //add a tile layer to the map (using openstreetmap tiles)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',  {
        attribution:'&copy;<a href="https://www.openstreetmaps.org/copyright">OpenStreetMaps </a> contributors'
        }).addTo(map);

}