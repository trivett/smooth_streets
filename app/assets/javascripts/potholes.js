window.onload = getMyLocation;

var potholes =  [["4    0.6781102782094", "-73.97836478497"], ["40.6690566475226", "-73.987761775656"], ["40.6670402518604", "-73.9765984826786"], ["40.6793140872466", "-73.9899843839697"], ["40.6797287353086", "-73.9924359636201"], ["40.6771268797876", "-74.0036737141829"], ["40.6879989558518", "-73.997562477225"], ["40.6883365799264", "-73.9986009413826"], ["40.671299532715", "-73.9924441293727"], ["40.6841779952114", "-73.9921902783835"], ["40.6867006908826", "-73.9981899221759"], ["40.6789163296568", "-74.0068068287473"], ["40.6820043666637", "-73.9972021484625"], ["40.6797700539569", "-73.9951652149368"], ["40.6744673811076", "-73.9754674892667"], ["40.6690490108899", "-73.9964997601055"], ["40.6851965258592", "-73.9967945759204"], ["40.6901865632754", "-74.0002019315885"], ["40.6753613966865", "-73.9877534084824"], ["40.6677332300194", "-73.984193358147"], ["40.6839554599534", "-73.9895582279094"], ["40.6692454218551", "-73.9829313235775"], ["40.683310684988", "-73.9927672678665"], ["40.6893026300762", "-73.9948003305245"], ["40.6761439693944", "-73.973357852698"], ["40.6798249483591", "-73.9951399734303"], ["40.6895825910109", "-73.9946777084815"], ["40.6747417077023", "-73.9977684516665"], ["40.6713852858443", "-73.9768565113073"], ["40.6847381546497", "-73.9970037242969"], ["40.6737013742599", "-74.0044305817812"], ["40.6741459563919", "-74.0060060198978"], ["40.6695636470003", "-73.981828171396"], ["40.680550243865", "-73.9776429133215"], ["40.6850620767015", "-73.9999891830677"], ["40.681677763292", "-74.0014746336008"], ["40.6861599745853", "-73.9984351246902"], ["40.6853474858443", "-73.9967080328346"], ["40.6755706134684", "-73.9746955853889"], ["40.670006367559", "-73.9880211491722"], ["40.6781220495054", "-74.0169051059458"], ["40.6857317767574", "-74.0023581149325"], ["40.6734869331799", "-73.9729551520206"], ["40.6737034045385", "-73.971440951549"], ["40.666646570729", "-73.9863203583831"], ["40.6766025589607", "-73.9945814043096"], ["40.679863475994", "-73.9993510346532"], ["40.6805947449622", "-73.9808877608092"], ["40.6749365982571", "-73.9984750440979"], ["40.669592456664", "-73.9958941238685"], ["40.6813868185069", "-73.9986155089677"], ["40.6812530624928", "-73.9784647176248"], ["40.6742642991813", "-73.9756153714483"], ["40.6833465428168", "-73.9965566984568"], ["40.6704966194118", "-73.9802994579265"], ["40.6719117064761", "-73.993943712233"], ["40.6777418800234", "-73.9753869692496"], ["40.6730077672292", "-73.9784998249016"], ["40.6730077672292", "-73.9784998249016"], ["40.6813381974044", "-73.9787170711332"], ["40.68096705686", "-73.9757066615235"], ["40.6825585698182", "-74.0079537523111"], ["40.6788918169009", "-73.9983992421345"], ["40.6785684873428", "-73.977488550085"], ["40.6877545026996", "-73.9933112600961"], ["40.6694620628043", "-73.9816551686306"], ["40.6775632415301", "-74.0051663070375"], ["40.6666787731235", "-73.9811260505008"], ["40.6835112510486", "-74.0026104256278"], ["40.6764712862234", "-73.9765194646271"], ["40.6760703233641", "-73.9754380583614"], ["40.669484531491", "-73.9851986828876"], ["40.6756297170886", "-73.9825763864794"]]


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
    div.innerHTML += " (with accuracy: " + accuracy +" meters)";

  // Put lat and long in hidden v
    document.getElementById('hidden_lat').value = latitude;
    document.getElementById('hidden_long').value = longitude;

    showMap(position);
}


var map;

function showMap(pos){
    var googleLoc = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
    var mapOptions = {
        zoom: 10,
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
