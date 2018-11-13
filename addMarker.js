function addMarker(props) {
    // Add marker
    var marker = new google.maps.Marker({
        position: props.coords,
        map: props.map,
        title: 'My First Google Map'
    });

    // chekc for custom icon
    if(props.iconImage) {
        // set icon image
        marker.setIcon(props.iconImage);
    }

    // check content 
    if(props.content) {
        var infoWindow = new google.maps.InfoWindow({
            content: props.content
        });
    
        marker.addListener('click',function(){
            infoWindow.open(map,marker);
        });
    }

}