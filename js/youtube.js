var ompWeber = document.getElementById("ompWeber");
var ompWeberVid = document.getElementById("ompWeberVid");
var caption = document.getElementById("ompWeberCaption");
var onOMPHover = function(){
  console.log("hover detected");
  //var startTime = new Date().getTime();
  ompWeber.style.backgroundColor = "#89b8d5";
  ompWeberVid.style.width = "560px";
  ompWeberVid.style.height = "315px";
  ompWeberCaption.style.visibility = "visible";
  // ompWeber.insertAdjacentHTML("afterend", "<p>hi</p>");
  //UNECESSARY BC OF CSS TRANSITION
  // var enlarge = function() {
  //   console.log("enlarging");
  //   var currTime = new Date().getTime();
  //   var newWidth = (200 + ((currTime - startTime)/1000) * 900); //(curr-start)/1000 gives seconds
  //   var newHeight = (112.5 + ((currTime - startTime)/1000) * 675);
  //   ompWeberVid.style.width = newWidth + "px";
  //   ompWeberVid.style.height = newHeight + "px";
  //
  //   if (newWidth < 560) {
  //     console.log("reqanimationframe, width = " + newWidth + "height = " + newHeight);
  //     window.requestAnimationFrame(enlarge);
  //   }
  //   else {
  //     window.cancelAnimationFrame(enlarge);
  //   }
  //
  // };
  // enlarge();
};
var onOMPHoverOff = function(){
  console.log("unhovered");
  ompWeber.style.backgroundColor = "#C1DAE9";
  ompWeberVid.style.width = "200px";
  ompWeberVid.style.height = "112.5px";
  ompWeberCaption.style.visibility = "hidden";
};
ompWeber.addEventListener("mouseover", onOMPHover);
ompWeber.addEventListener("mouseout", onOMPHoverOff);



var bozza = document.getElementById("bozza");
var bozzaVid = document.getElementById("bozzaVid");
var caption = document.getElementById("bozzaCaption");
var onBozzaHover = function(){
  console.log("hover detected");
  //var startTime = new Date().getTime();
  bozza.style.backgroundColor = "#89b8d5";
  bozzaVid.style.width = "560px";
  bozzaVid.style.height = "315px";
  bozzaCaption.style.visibility = "visible";
  //UNECESSARY BC OF CSS TRANSITION
  // var enlarge = function() {
  //   var currTime = new Date().getTime();
  //   var newWidth = (200 + ((currTime - startTime)/1000) * 900); //(curr-start)/1000 gives seconds
  //   var newHeight = (112.5 + ((currTime - startTime)/1000) * 675);
  //   bozzaVid.style.width = newWidth + "px";
  //   bozzaVid.style.height = newHeight + "px";
  //
  //   if (newWidth < 560) {
  //     window.requestAnimationFrame(enlarge);
  //   }
  //   else {
  //     window.cancelAnimationFrame(enlarge);
  //   }
  //
  // };
  // enlarge();
};
var onBozzaHoverOff = function(){
  console.log("unhovered");
  bozza.style.backgroundColor = "#C1DAE9";
  bozzaVid.style.width = "200px";
  bozzaVid.style.height = "112.5px";
  bozzaCaption.style.visibility = "hidden";
};
bozza.addEventListener("mouseover", onBozzaHover);
bozza.addEventListener("mouseout", onBozzaHoverOff);
