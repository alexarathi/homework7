// document.addEventListener("DOMContentLoaded", function(){
// window.addEventListener("load", function(){

// Variables!
var color ="red";
var radius = 10;
var canvas = document.querySelector("canvas");
var width = canvas.width = window.innerWidth * 0.75;
var height = canvas.height = window.innerHeight * 0.75;

var ctx = canvas.getContext("2d");
var x = 100;
var y = 100;
var penIsDown = true;

canvas.addEventListener('mousemove', function(e) {
  x = e.x;
  console.log(x);
  y = e.y;
  console.log(y);
  draw(e.pageX - radius, e.pageY - radius);
});

canvas.addEventListener('touchmove', function(e){
  x = e.touches[0].x; // array looking for the first finger
  console.log(x);
  y = e.touches[0].y;
  console.log(y);
  draw(e.pageX - radius, e.pageY - radius);

});

window.addEventListener('keydown', function(e){
  console.log(e.keyCode);
  if (e.keyCode == 66){
    color = "rgb(0, 0, 255)";
    console.log("I hit Blue");
  }

  if(e.keyCode == 89){
    color = "rgb(255, 255, 0)";
    console.log("I hit Yellow");
  }

  if (e.keyCode == 71){
    color = "rgb(0, 255, 0)";
    console.log("I hit Green");
  }

  if(e.keyCode == 82){
    color = "rgb(255, 0, 0)";
    console.log("Back to Red");

  }

  if (e.keyCode == 32){
	ctx.clearRect(0, 0, width, height); // need to do width then height
    console.log("cleared canvas");
  }

  if (e.keyCode === 38){ //up arrow
  	penIsDown = false;
  	console.log("pen is down")
  }
  
  if (e.keyCode === 40){ //down arrow
  	penIsDown = true;
  	console.log("pen is up")
  }

});


var colorPicker = document.querySelector("#clr");
colorPicker.addEventListener("change", function(e){
	color = colorPicker.value;
	colorPicker.blur(); //takes focus off of the color input so space bar doesn't reactivate it

});

//Add a listener for loading the window
// I would add a function for draw
function draw(){
  if (!penIsDown) return; 
  console.log("I am going to draw a circle");
  ctx.beginPath();
  ctx.arc(x,y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

// }