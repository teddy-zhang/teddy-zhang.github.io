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
//function to reset text opacity
function sett(words) {
  text.style.display = "block";
  text.style.opacity = 0;
  text.innerHTML = words;
  this.words = words;
}
function cleart(){
  text.style.display = "none";
}
function setc(caps) {
  caption.style.display = "block";
  caption.style.opacity = 0;
  caption.innerHTML = caps;
  this.caps = caps;
}
function clearc(){
  caption.style.display = "none";
}
function clearp(){
  imgs1.style.display = "none";
  imgs2.style.display = "none";
  imgs3.style.display = "none";
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

var img1src = "img/year/walkingruby.jpeg";
var img2src = "img/year/friendsoffelines.jpeg";
var img3src = "img/year/walkingruby.jpeg";
function setimgs1(url1){
  img1src = url1;
  imgs1.style.opacity = 0;
  imgs2.style.display = "none";
  imgs3.style.display = "none";
}
function setimgs2(url1, url2){
  img1src = url1;
  img2src = url2;
  imgs1.style.display = "none";
  imgs2.style.opacity = 0;
  imgs3.style.display = "none";
}
function setimgs3(url1, url2, url3){
  img1src = url1;
  img2src = url2;
  img3src = url3;
  imgs1.style.display = "none";
  imgs2.style.display = "none";
  imgs3.style.opacity = 0;
}

//driver function
async function main() {
  setc("Loading");
  c();

  img1x1.src = "img/year/braid.jpeg";
  img1x1.src = "img/year/dance1.jpeg";
  img1x1.src = "img/year/dance2.jpeg";
  img1x1.src = "img/year/dance3.jpeg";
  img1x1.src = "img/year/dance4.jpeg";
  img1x1.src = "img/year/dance5.jpeg";
  img1x1.src = "img/year/dance6.jpeg";
  img1x1.src = "img/year/dance7.jpeg";
  img1x1.src = "img/year/dance8.jpeg";
  await sleep(1000);
  setc("Loading.");
  caption.style.opacity = 1;
  caption.innerHTML = caps;
  img1x1.src = "img/year/dance9.jpeg";
  img1x1.src = "img/year/dance10.jpeg";
  img1x1.src = "img/year/dance11.jpeg";
  img1x1.src = "img/year/dating.jpeg";
  img1x1.src = "img/year/driving.jpeg";
  img1x1.src = "img/year/fav.jpeg";
  img1x1.src = "img/year/fb1.jpeg";
  img1x1.src = "img/year/fb2.jpeg";
  img1x1.src = "img/year/friendsoffelines.jpeg";
  await sleep(500);
  setc("Loading..");
  caption.style.opacity = 1;
  caption.innerHTML = caps;
  img1x1.src = "img/year/hanging.jpeg";
  img1x1.src = "img/year/minnie1.jpeg";
  img1x1.src = "img/year/minnie2.jpeg";
  img1x1.src = "img/year/minnie3.jpeg";
  img1x1.src = "img/year/minnie4.jpeg";
  img1x1.src = "img/year/minnie5.jpeg";
  img1x1.src = "img/year/nutcracker.jpeg";
  img1x1.src = "img/year/us.jpeg";
  img1x1.src = "img/year/hoco.jpeg";
  await sleep(500);
  setc("Loading...");
  caption.style.opacity = 1;
  caption.innerHTML = caps;
  await sleep(2000);

  clearc();

  await sleep(1000);

  sett("Hi");
  t();

  await sleep(sleeptime);
  sett("I really like you");
  t();

  await sleep(sleeptime);
  sett("We've been dating\nfor a year");
  t();

  await sleep(sleeptime);
  sett("We've made\nlots of memories");
  t();

  await sleep(sleeptime);
  sett("Thanks for a year of...");
  t();

  sleepttime = 3000;

  await sleep(sleeptime);
  cleart();
  setc("of flirting");
  c();
  setimgs2("img/year/walkingruby.jpeg", "img/year/friendsoffelines.jpeg");
  p2();

  await sleep(sleeptime);
  setc("of football games");
  c();
  setimgs2("img/year/fb1.jpeg", "img/year/fb2.jpeg");
  p2();

  await sleep(sleeptime);
  setc("of homecoming");
  c();
  setimgs1("img/year/hoco.jpeg");
  p1();

  await sleep(sleeptime);
  setc("of dating");
  c();
  setimgs1("img/year/dating.jpeg");
  p1();

  await sleep(sleeptime);
  setc("of learning to braid");
  c();
  setimgs1("img/year/braid.jpeg");
  p1();

  await sleep(sleeptime);
  setc("of nutcracker");
  c();
  setimgs1("img/year/nutcracker.jpeg");
  p1();

  await sleep(sleeptime);
  setc("of my favorite picture");
  c();
  setimgs1("img/year/fav.jpeg");
  p1();

  await sleep(sleeptime);
  setc("of my not favorite picture");
  c();
  setimgs1("img/year/us.jpeg");
  p1();

  await sleep(sleeptime);
  setc("of driving around");
  c();
  setimgs1("img/year/driving.jpeg");
  p1();

  await sleep(sleeptime);
  setc("of getting ready for dance");
  c();
  setimgs3("img/year/dance1.jpeg", "img/year/dance2.jpeg", "img/year/dance3.jpeg");
  p3();
  await sleep(sleeptime);
  setimgs3("img/year/dance4.jpeg", "img/year/dance5.jpeg", "img/year/dance6.jpeg");
  p3();
  await sleep(sleeptime);
  setimgs3("img/year/dance7.jpeg", "img/year/dance8.jpeg", "img/year/dance9.jpeg");
  p3();
  await sleep(sleeptime);
  setimgs2("img/year/dance10.jpeg", "img/year/dance11.jpeg");
  p2();

  await sleep(sleeptime);
  setc("of hanging out");
  c();
  setimgs1("img/year/hanging.jpeg");
  p1();


  await sleep(sleeptime);
  setc("of Minnie");
  c();
  setimgs3("img/year/minnie1.jpeg", "img/year/minnie2.jpeg", "img/year/minnie3.jpeg");
  p3();
  await sleep(sleeptime);
  setimgs2("img/year/minnie4.jpeg", "img/year/minnie5.jpeg");
  p2();

  await sleep(sleeptime);
  setc("of Ruby, of course");
  c();
  setimgs1("img/year/ruby1.jpeg");
  p1();

  await sleep(sleeptime);
  clearc();
  clearp();

  await sleep(2000);
  sett("Happy one year anniversary");
  t();

  await sleep(2000);
  date();

}

//functions

function t(){
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

function c(){
    console.log(caps);
    // caption.style.opacity = 1;
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

function p1(){
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

function p2(){
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

function p3(){
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
