var navBarEl = document.getElementById("navBar");
var ompWeber = document.getElementById("ompWeber");
var andrewBrady = document.getElementById("andrewBrady");

var menuIconEl = document.getElementById("menuicon");
var onMenuIconClick = function(){
  menuIconEl.style.visibility = "hidden";
  // navBarEl.style.visibility = "visible";
  navBarEl.style.left = "0%";
  if(ompWeber){
    ompWeber.style.marginTop = "5%";
  }
  if(andrewBrady){
    andrewBrady.style.marginTop = "5%";
  }
  console.log("movedown");

  // var startTime = new Date().getTime();

  // var moveInFromRight = function() {
  //   var currTime = new Date().getTime();
  //   var newLeft = (100 - ((currTime - startTime)/1000) * 100);
  //   navBarEl.style.left = newLeft + "%";
  //   if (newLeft > 0.745) {
  //     window.requestAnimationFrame(moveInFromRight);
  //   }
  //   else {
  //     window.cancelAnimationFrame(moveInFromRight);
  //   }
  // };
  // moveInFromRight();
};

//add function for unhover
var menuIconLiEl = document.getElementById("menuIconLi");
var onMenuIconClickOff = function(){
  menuIconEl.style.visibility = "visible";
  // navBarEl.style.visibility = "hidden";
  navBarEl.style.left = "100%";
  if(ompWeber){
    ompWeber.style.marginTop = "2%";
  }
  if(andrewBrady){
    andrewBrady.style.marginTop = "2%";
  }
};

var onMenuIconLiHover = function(){
  document.getElementById("menuiconWhite").src = "img/menuicon.png";
}
var onMenuIconLiHoverOff = function(){
  document.getElementById("menuiconWhite").src = "img/menuiconwhite.png";
}


menuIconEl.addEventListener("mousedown", onMenuIconClick);
menuIconLiEl.addEventListener("mousedown", onMenuIconClickOff);

menuIconLiEl.addEventListener("mouseover", onMenuIconLiHover);
menuIconLiEl.addEventListener("mouseout", onMenuIconLiHoverOff);
