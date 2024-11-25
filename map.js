function initMap() {
    const portDickson = { lat: 2.5333, lng: 101.8000 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: portDickson,
    });

    const attractions = [
        { name: "Blue Lagoon", location: { lat: 2.4536, lng: 101.8590 } },
        { name: "Army Museum", location: { lat: 2.5335, lng: 101.7963 } },
    ];

    attractions.forEach((attraction) => {
        const marker = new google.maps.Marker({
            position: attraction.location,
            map: map,
            title: attraction.name,
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `<h3>${attraction.name}</h3><p>A must-visit spot!</p>`,
        });

        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });
    });
}
