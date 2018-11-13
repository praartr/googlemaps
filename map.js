function initMap() {

    // latitude and longitude
    var myLatLong = {
        lat: 35.7796, 
        lng: -78.6382
    };

    var dumboLatLong = {
        lat: 41.4993,
        lng: -81.6944
    };

     //Map options
     var options = {
        zoom: 8,
        center: myLatLong
    };
    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);


    // listen for click on map

    google.maps.event.addListener(map, 'click', 
        function(event) {
        // add marker
        addMarker({coords: event.latLng, map:map});
        }
    );

    // array of markers
    var markers = [ 
        {
            coords: myLatLong,
            map: map,
            iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
        },
        {
            coords: dumboLatLong,
            map: map,
            content: '<h2> Hey, This is Gautham\'s home city</h2>'
        }
    ];
    
    // Loop through markers
    for(var i=0; i< markers.length;i++){
        addMarker(markers[i]);
    }

   
}