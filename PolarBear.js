var paddleHeight = 10;
var paddleWidth = 75;
var rightPressed = false;
var leftPressed = false;
var ctx;

var bear;

//starting functions
var strings = [
  "The polar bear is the Arctic's top predator.",
  "The scientific name of the polar bear is Ursus maritimus.",
  "The polar bear is an endangered species.",
  "Two third of all polar bears live in Canadian land.",
  "Polar bears rely on sea ice that allows them to have access to seals, their main food source. Sea ice is melting due to climate change, which is a major threat to the bears."
]

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("keydown", startgame, false);
function titlechange(word){
  word.style.display='block';
}
function appear(word){
  setTimeout(titlechange(word),1000);
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}
//draws the bear initially when the game starts
function Bear(x, y){
  this.x = x;
  this.y = y;
  this.image = new Image ();
  this.image.src = "PolarBearDraw.png";
  this.drawBear = function(){
    var img = document.getElementById("bearwalk1");
    ctx.drawImage(img, this.x, this.y,194.12,150);
  }
}
function startBear(){
  bear = new Bear(30,300);
  bear.drawBear();

}

function Icebergg(x, y){
  this.x = x;
  this.y = y;
  this.image = new Image ();
  this.image.src = "Iceberg.png";
  this.drawBerg = function(){
    var img = document.getElementById("iceberg1");
    ctx.drawImage(img, this.x, this.y,337.46,200);
  }
}
function startIcebergg(){
  iceB = new Icebergg(400,300);
  iceB.drawBerg();

}





function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPaddle();


    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
}
function startgame(x){

  if (x.keyCode == 13){
    ctx = document.getElementById('myCanvas').getContext('2d');
    document.getElementById('myCanvas').style.backgroundImage="url('ice.jpg')"
    document.getElementById("polartitle").style.display = "none";
    clearInterval(notif);
    document.getElementById("startnotif").style.display = "none";
    startBear();
    startIcebergg();
  }
}
var notif=setInterval(function(){
      $('blink').each(function() {
        $(this).toggle();
      });
    }, 350);
