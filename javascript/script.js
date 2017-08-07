/**
 * Created by Rokas on 2017.07.18.
 */
var divs = ["Pizza", "Salad", "Starter"];
var visibleDivId = null;

function toggleVisibility(divId) {
    if(visibleDivId === divId) {
    } else {
        visibleDivId = divId;
    }
    hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
    var i, divId, div;
    for(i = 0; i < divs.length; i++) {
        divId = divs[i];
        div = document.getElementById(divId);
        if(visibleDivId === divId) {
            div.style.display = "block";
            document.getElementById("link" + divId).classList.add("selected");
        } else {
            div.style.display = "none";
            document.getElementById("link" + divId).classList.remove("selected");
        }
    }
}
function initMap() {
    var uluru = {lat: 41.878110, lng: -87.632785};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: uluru,
        scrollwheel: false
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}