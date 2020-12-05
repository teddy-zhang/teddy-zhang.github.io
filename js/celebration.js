//sleep function and fade in speed
function sleep(ms) {
  console.log("sleeping...");
  return new Promise(resolve => setTimeout(resolve, ms));
}

var sleeptime = 4000;
var speed = 0.007;
//getting the text elements
var text = document.getElementById("text");
var caption = document.getElementById("caption");
var words = "Hi";
var caps = "how it all started";

//setting/clearing text
function sett(words) {
  text.style.display = "block";
  text.style.opacity = 0;
  text.innerHTML = words;
  this.words = words;
  console.log(words);
  var op = 0;
  var id = setInterval(frame, 1);
  function frame() {
    if (op >= 1) {
      clearInterval(id);
    } else {
      op += speed;
      text.style.opacity = op;
    }
  }
}
function cleart(){
  text.style.display = "none";
}
function setc(caps) {
  caption.style.display = "block";
  caption.style.opacity = 0;
  caption.innerHTML = caps;
  this.caps = caps;
  console.log(caps);
  var op = 0;
  var id = setInterval(frame, 1);
  function frame() {
    if (op >= 1) {
      clearInterval(id);
    } else {
      op += speed;
      caption.style.opacity = op;
    }
  }
}
function clearc(){
  caption.style.display = "none";
}

//functions for images
var imgs1 = document.getElementById("imgs1");
var imgs2 = document.getElementById("imgs2");
var imgs3 = document.getElementById("imgs3");

var imgs1x1 = document.getElementById("imgs1x1");
var imgs2x1 = document.getElementById("imgs2x1");
var imgs2x2 = document.getElementById("imgs2x2");
var imgs3x1 = document.getElementById("imgs3x1");
var imgs3x2 = document.getElementById("imgs3x2");
var imgs3x3 = document.getElementById("imgs3x3");


var urls = ["img/year/walkingruby.jpeg", "img/year/friendsoffelines.jpeg", //0-1
            "img/year/fb1.jpeg", "img/year/fb2.jpeg", //2-3
            "img/year/hoco.jpeg", //4
            "img/year/dating.jpeg", //5
            "img/year/braid.jpeg", //6
            "img/year/nutcracker.jpeg", //7
            "img/year/fav.jpeg", //8
            "img/year/us.jpeg", //9
            "img/year/driving.jpeg", //10
            "img/year/dance1.jpeg", "img/year/dance2.jpeg", "img/year/dance3.jpeg", //11-13
            "img/year/dance4.jpeg", "img/year/dance5.jpeg", "img/year/dance6.jpeg", //14-16
            "img/year/dance7.jpeg", "img/year/dance8.jpeg", "img/year/dance9.jpeg", //17-19
            "img/year/dance10.jpeg", "img/year/dance11.jpeg", //20-21
            "img/year/hanging.jpeg", //22
            "img/year/minnie1.jpeg", "img/year/minnie2.jpeg", "img/year/minnie3.jpeg", //23-25
            "img/year/minnie4.jpeg", "img/year/minnie5.jpeg", "img/year/minnie6.jpeg",//26-28
            "img/year/ruby1.jpeg"]  //29


var img1src;
var img2src;
var img3src;

function setimgs1(url1){
  img1src = url1;
  imgs1.style.opacity = 0;
  imgs2.style.display = "none";
  imgs3.style.display = "none";
  console.log(img1src);
  img1x1.src = img1src;
  imgs1.style.display = "inline-block";
  var op = 0;
  var id = setInterval(frame, 1);
  function frame() {
    if (op >= 1) {
      clearInterval(id);
    } else {
      op += speed;
      imgs1.style.opacity = op;
    }
  }
}
function setimgs2(url1, url2){
  img1src = url1;
  img2src = url2;
  imgs1.style.display = "none";
  imgs2.style.opacity = 0;
  imgs3.style.display = "none";
  console.log(img1src + " " + img2src);
  img2x1.src = img1src;
  img2x2.src = img2src;
  imgs2.style.display = "inline-block";
  var op = 0;
  var id = setInterval(frame, 1);
  function frame() {
    if (op >= 1) {
      clearInterval(id);
    } else {
      op += speed;
      imgs2.style.opacity = op;
    }
  }
}
function setimgs3(url1, url2, url3){
  img1src = url1;
  img2src = url2;
  img3src = url3;
  imgs1.style.display = "none";
  imgs2.style.display = "none";
  imgs3.style.opacity = 0;
  console.log(img1src + " " + img2src + " " + img3src);
  img3x1.src = img1src;
  img3x2.src = img2src;
  img3x3.src = img3src;
  imgs3.style.display = "inline-block";
  var op = 0;
  var id = setInterval(frame, 1);
  function frame() {
    if (op >= 1) {
      clearInterval(id);
    } else {
      op += speed;
      imgs3.style.opacity = op;
    }
  }
}
function clearp(){
  imgs1.style.display = "none";
  imgs2.style.display = "none";
  imgs3.style.display = "none";
}
function loadimgs(load){
  caption.style.display = "block";
  caption.style.opacity = 0;
  caption.innerHTML = load;
  this.caps = load;
}






//for tbe final date at te end
function date(){
  console.log("date");
  var date = document.getElementById("date");
  var op = 0;
  var id = setInterval(frame, 1);
  function frame() {
    if (op >= 1) {
      clearInterval(id);
    } else {
      op += 0.002;
      date.style.opacity = op;
      date.style.opacity = op;
    }
  }
}









//driver function
async function main() {

  setc("Loading");
  for (var i = 29; i > 19; i--){
    img1x1.src = urls[i];
    console.log("loaded img" + i  + ": " + urls[i]);
  }
  await sleep(1000);
  loadimgs("Loading.");
  caption.style.opacity = 1;
  caption.innerHTML = caps;
  for (var i = 19; i > 9; i--){
    img1x1.src = urls[i];
    console.log("loaded img" + i  + ": " + urls[i]);
  }
  await sleep(500);
  loadimgs("Loading..");
  caption.style.opacity = 1;
  caption.innerHTML = caps;
  for (var i = 9; i > -1; i--){
    img1x1.src = urls[i];
    console.log("loaded img" + i  + ": " + urls[i]);
  }
  await sleep(500);
  loadimgs("Loading...");
  caption.style.opacity = 1;
  caption.innerHTML = caps;
  await sleep(2000);

  clearc();

  await sleep(1000);

  sett("Hi");

  await sleep(sleeptime);
  sett("I really like you");

  await sleep(sleeptime);
  sett("We've been dating\nfor a year");

  await sleep(sleeptime);
  sett("We've made\nlots of memories");

  await sleep(sleeptime);
  cleart();
  await sleep(2000);
  sett("Thanks for a year of...");

  sleepttime = 3000;

  await sleep(sleeptime);
  cleart();
  setc("of flirting");
  setimgs2(urls[0], urls[1]);

  await sleep(sleeptime);
  setc("of football games");
  setimgs2(urls[2], urls[3]);

  await sleep(sleeptime);
  setc("of homecoming");
  setimgs1(urls[4]);

  await sleep(sleeptime);
  setc("of dating");
  setimgs1(urls[5]);

  await sleep(sleeptime);
  setc("of learning to braid");
  setimgs1(urls[6]);

  await sleep(sleeptime);
  setc("of nutcracker");
  setimgs1(urls[7]);

  await sleep(sleeptime);
  setc("of my favorite picture");
  setimgs1(urls[8]);

  await sleep(sleeptime);
  setc("of my not favorite picture");
  setimgs1(urls[9]);

  await sleep(sleeptime);
  setc("of driving around");
  setimgs1(urls[10]);

  await sleep(sleeptime);
  setc("of getting ready for dance");
  setimgs3(urls[11], urls[12], urls[13]);
  await sleep(sleeptime);
  setimgs3(urls[14], urls[15], urls[16]);
  await sleep(sleeptime);
  setimgs3(urls[17], urls[18], urls[19]);
  await sleep(sleeptime);
  setimgs2(urls[20], urls[21]);

  await sleep(sleeptime);
  setc("of hanging out");
  setimgs1(urls[22]);

  await sleep(sleeptime);
  setc("of Minnie");
  setimgs3(urls[23], urls[24], urls[25]);
  await sleep(sleeptime);
  setimgs3(urls[26], urls[27], urls[28]);

  await sleep(sleeptime);
  setc("of Ruby, of course");
  setimgs1(urls[29]);

  await sleep(sleeptime);
  clearc();
  clearp();

  await sleep(2000);
  sett("Happy one year anniversary");

  await sleep(2000);
  date();

}
