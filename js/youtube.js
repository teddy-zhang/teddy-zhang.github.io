var ompWeber = document.getElementById("ompWeber");
var ompWeberVid = document.getElementById("ompWeberVid");

var onOMPHover = function(){
  var startTime = new Date().getTime();
  ompWeber.style.backgroundColor = "#89b8d5";

  var enlarge = function() {
    var currTime = new Date().getTime();
    var newWidth = (200 + ((currTime - startTime)/1000) * 90); //(curr-start)/1000 gives seconds
    var newHeight = (112.5 + ((currTime - startTime)/1000) * 67.5);
    ompWeberVid.style.width = newWidth;
    ompWeberVid.style.height = newHeight;

    if (newWidth < 560) {
      window.requestAnimationFrame(enlarge);
    }
    else {
      window.cancelAnimationFrame(enlarge);
    }

}


var bozza = document.getElementById("bozza");
var bozzaVid = document.getElementById("bozzaVid");

var onBozzaHover = function(){
  var startTime = new Date().getTime();
  bozza.style.backgroundColor = "#89b8d5";

  var enlarge = function() {
    var currTime = new Date().getTime();
    var newWidth = (200 + ((currTime - startTime)/1000) * 90); //(curr-start)/1000 gives seconds
    var newHeight = (112.5 + ((currTime - startTime)/1000) * 67.5);
    bozzaVid.style.width = newWidth;
    bozzaVid.style.height = newHeight;

    if (newWidth < 560) {
      window.requestAnimationFrame(enlarge);
    }
    else {
      window.cancelAnimationFrame(enlarge);
    }

}


ompWeber.addEventListener(mouseover, "onOMPHover");
bozza.addEventListener(mouseover, "onBozzaHover");
