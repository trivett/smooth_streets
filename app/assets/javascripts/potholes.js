window.onload = getMyLocation;



function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation, handleError);
    } else {
        document.getElementById("location").innerHTML = "GeoLocation not supported";
    }
}

function displayLocation(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var accuracy = position.coords.accuracy;
    var div = document.getElementById("location");

    div.innerHTML = "You're at Longitude: " + longitude + " Latitude " + latitude;
    //div.innerHTML += " (with accuracy: " + accuracy +" meters)";

  // Put lat and long in hidden v
    document.getElementById('hidden_lat').value = latitude;
    document.getElementById('hidden_long').value = longitude;

    showMap(position);
}


var map;

function showMap(pos){
    var googleLoc = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
    var mapOptions = {
        zoom: 14,
        center: googleLoc,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var mapDiv = document.getElementById("map");
    map = new google.maps.Map(mapDiv, mapOptions);

    var title = "Your location";
    var content = "You are here: " + pos.coords.latitude +", " + pos.coords.longitude;
    addMarker(map, googleLoc, title, content);
    for(var i = 0; i < potholes.length; i++){

        var potholeLoc = new google.maps.LatLng(potholes[i][0] * 1, potholes[i][1] * 1);
        console.log(potholeLoc);
        addMarker(map, potholeLoc,"pothole", "#" + i);
    }
}

////////////////////////////
//// adding info window////
//////////////////////////

//

/*
var contentString = "<p> HTML HERE </p>";

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });


  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}

*/
/////////////////////////////////////////

function addMarker(map, latLong, title, content){
    var markerOptions = {
        map: map,
        position: latLong,
        title: title,
        clickable: true
    };

    var marker = new google.maps.Marker(markerOptions);

    var infoWindowOptions = {
        content: content,
        position: latLong
    };

    var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

    google.maps.event.addListener(marker, "click", function(){
        infoWindow.open(map);
    });
}


function handleError(error){
    var errorTypes = {
        0: "Unknown error",
        1: "Permission denied by user",
        2: "Position is not available",
        3: "Request timed out"
    };

    var errorMessage = errorTypes[error.code];
    if (error.code == 0 || error.code == 2) {
        errorMessage += error.code;
    }

    document.getElementById("location").innerHTML = errorMessage;
}



// File Picker Button

var wrapper = $('<div/>').css({height:0,width:0,'overflow':'hidden'});
var fileInput = $(':file').wrap(wrapper);

fileInput.change(function(){
    $this = $(this);
    $('#file').text($this.val());
})

$('#file').click(function(){
    fileInput.click();
}).show();

