var paddleHeight = 10;
var paddleWidth = 75;
var rightPressed = false;
var leftPressed = false;
var gamestart = false;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var notif=setInterval(function(){
      $('blink').each(function() {
        $(this).toggle();
      });
    }, 350);

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("keydown", firstDisplay, false);
document.addEventListener("keydown",clear,false);
function titlechange(word){
  word.style.display='block';
}
function appear(word){
  setTimeout(titlechange(word),1000);
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
function startgame(){
  firstDisplay();
}
function firstDisplay(x){
  if (x.keyCode == 13){
    document.getElementById('myCanvas').style.backgroundImage="url('ice.jpg')"
    document.getElementById("polartitle").style.display = "none";
    document.getElementById("polartitle2").style.display = "none";
    clearInterval(notif);
    document.getElementById("startnotif").style.display = "none";
    document.getElementById("bgstory").style.display="block";
    document.getElementById("instruct").style.display="block";
    document.getElementById("spacecontinue").style.display="block";
    startgame = true;
    drawDial();
}
}
function drawDial(){
  ctx.globalAlpha=0.5;
  var dialoguebox = ctx.fillRect((canvas.width/2)-(250),(canvas.height/2)-(200),500,400);
  clear();
}
function clear(x){
  if (x.keyCode == 32){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("bgstory").style.display="none";
    document.getElementById("instruct").style.display="none";
    document.getElementById("spacecontinue").style.display="none";
  }
}
function bounce(){

}
