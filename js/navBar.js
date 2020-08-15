var menuIconEl = document.getElementById("menuicon");
var navBarEl = document.getElementById("navBar");
var onMenuIconHover = function(){
  menuIconEl.style.visibility = "hidden";
  navBarEl.style.visibility = "visible";
  var startTime = new Date().getTime();

  var moveInFromRight = function() {
    console.log("goingonce");
    var currTime = new Date().getTime();
    var newLeft = (100 - ((currTime - startTime)/1000) * 100);
    navBarEl.style.left = newLeft + "%";
    if (newLeft > 0.745) {
      window.requestAnimationFrame(moveInFromRight);
    }
    else {
      window.cancelAnimationFrame(moveInFromRight);
    }
  };
  moveInFromRight();
};
menuIconEl.addEventListener("mousedown", onMenuIconHover);
