//sleep function and fade in speed
function sleep(ms) {
  console.log("sleeping...");
  return new Promise(resolve => setTimeout(resolve, ms));
}
var sleeptime = 4000;
var imgsleeptime = 2000;
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
  // sett("Hi");
  // t();
  //
  // await sleep(sleeptime);
  // sett("We've been dating\nfor a year");
  // t();
  //
  // await sleep(sleeptime);
  // sett("I really like you");
  // t();
  //
  // await sleep(sleeptime);
  // sett("We've made a whole\nyear of memories...");
  // t();
  //
  // sleepttime = 3000;
  //
  // await sleep(sleeptime);
  cleart();
  // setc("how it all started");
  // c();
  // setimgs2("img/year/walkingruby.jpeg", "img/year/friendsoffelines.jpeg");
  // p2();
  //
  // await sleep(sleeptime);
  // setc("football games");
  // c();
  // setimgs2("img/year/fb1.jpeg", "img/year/fb2.jpeg");
  // p2();
  //
  // await sleep(sleeptime);
  // setc("homecoming");
  // c();
  // setimgs1("img/year/hoco.jpeg");
  // p1();
  //
  // await sleep(sleeptime);
  // setc("learning to braid");
  // c();
  // setimgs1("img/year/braid.jpeg");
  // p1();
  //
  // await sleep(sleeptime);
  // setc("when we started dating");
  // c();
  // setimgs1("img/year/dating.jpeg");
  // p1();
  //
  // await sleep(sleeptime);
  // setc("nutcracker");
  // c();
  // setimgs1("img/year/nutcracker.jpeg");
  // p1();
  //
  // await sleep(sleeptime);
  // setc("my favorite picture");
  // c();
  // setimgs1("img/year/fav.jpeg");
  // p1();
  //
  // await sleep(sleeptime);
  // setc("I don't like this one but you do");
  // c();
  // setimgs1("img/year/us.jpeg");
  // p1();
  //
  // await sleep(sleeptime);
  setc("getting ready for dance");
  c();
  setimgs3("img/year/dance1.jpeg", "img/year/dance2.jpeg", "img/year/dance3.jpeg");
  p3();
  await sleep(imgsleeptime);
  setimgs3("img/year/dance4.jpeg", "img/year/dance5.jpeg", "img/year/dance6.jpeg");
  p3();
  await sleep(imgsleeptime);
  setimgs3("img/year/dance7.jpeg", "img/year/dance8.jpeg", "img/year/dance9.jpeg");
  p3();
  await sleep(imgsleeptime);
  setimgs2("img/year/dance10.jpeg", "img/year/dance11.jpeg");
  p2();

  await sleep(sleeptime);
  setc("hanging out");
  c();
  setimgs1("img/year/hanging.jpeg");
  p1();


  await sleep(sleeptime);
  setc("minnie, of course");
  c();
  setimgs3("img/year/minnie1.jpeg", "img/year/minnie2.jpeg", "img/year/minnie3.jpeg");
  p3();
  await sleep(imgsleeptime);
  setimgs2("img/year/minnie4.jpeg", "img/year/minnie5.jpeg");
  p2();

  sleeptime = (4000);

  await sleep(sleeptime);
  clearc();
  clearp();
  sett("Time flies when you're having fun ;)");
  t();

  await sleep(sleeptime);
  sett("Happy one year anniversary baby");
  t();

  await sleep(sleeptime);
  clicktoreplay();

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

function clicktoreplay(){
  console.log("click to replay");
  var clicktoreplay = document.getElementById("clicktoreplay");
  var op = 0;
  var id = setInterval(frame, 1);
  function frame() {
    if (op >= 1) {
      clearInterval(id);
    } else {
      op += 0.002;
      clicktoreplay.style.opacity = op;
      clicktoreplay.style.opacity = op;
    }
  }
}
