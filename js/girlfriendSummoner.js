var girlfriend = document.getElementById("girlfriend");
var button = document.getElementById("summoner");

var summonGirlfriend = function(){
  console.log("visible");
  girlfriend.style.visibility = "visible";
  girlfriend.style.width = "75vw";
  girlfriend.style.display = "block";
  girlfriend.style.margin = "auto";
}

button.addEventListener("click", summonGirlfriend);
