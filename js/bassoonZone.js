var andrewBrady = document.getElementById("andrewBrady");
var andrewBradyVid = document.getElementById("andrewBradyVid");
var andrewBradyCaption = document.getElementById("andrewBradyCaption");
var onAndrewBradyHover = function(){
  console.log("hover detected");
  andrewBrady.style.backgroundColor = "#89b8d5";
  andrewBradyVid.style.width = "560px";
  andrewBradyVid.style.height = "315px";
  andrewBradyCaption.style.visibility = "visible";
};
var onAndrewBradyHoverOff = function(){
  console.log("unhovered");
  andrewBrady.style.backgroundColor = "#C1DAE9";
  andrewBradyVid.style.width = "200px";
  andrewBradyVid.style.height = "112.5px";
  andrewBradyCaption.style.visibility = "hidden";
};
andrewBrady.addEventListener("mouseover", onAndrewBradyHover);
andrewBrady.addEventListener("mouseout", onAndrewBradyHoverOff);

var billyShort = document.getElementById("billyShort");
var billyShortVid = document.getElementById("billyShortVid");
var billyShortCaption = document.getElementById("billyShortCaption");
var onBillyShortHover = function(){
  console.log("hover detected");
  billyShort.style.backgroundColor = "#89b8d5";
  billyShortVid.style.width = "560px";
  billyShortVid.style.height = "315px";
  billyShortCaption.style.visibility = "visible";
};
var onBillyShortHoverOff = function(){
  console.log("unhovered");
  billyShort.style.backgroundColor = "#C1DAE9";
  billyShortVid.style.width = "200px";
  billyShortVid.style.height = "112.5px";
  billyShortCaption.style.visibility = "hidden";
};
billyShort.addEventListener("mouseover", onBillyShortHover);
billyShort.addEventListener("mouseout", onBillyShortHoverOff);
