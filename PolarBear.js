var paddleHeight = 10;
var paddleWidth = 75;
var rightPressed = false;
var leftPressed = false;
var ctx;
var bear;
var pbImage = false;



//starting functions
var strings = [
  "The polar bear is the Arctic's top predator.",
  "The scientific name of the polar bear is Ursus maritimus.",
  "The polar bear is an endangered species.",
  "Two third of all polar bears live in Canadian land.",
  "Polar bears rely on sea ice that allows them to have access to seals, their main food source. Sea ice is melting due to climate change, which is a major threat to the bears."
]

//the animate bear function
 function bearAnimation(){
      ctx = document.getElementById("myCanvas").getContext('2d');
      var myImage = new Image();
      myImage.src = "polarbearREALSS.png";
      myImage.addEventListener("load", loadImage, false);
      function loadImage(e) {
        animate();
      }
      var shift = 0;
      // change these variables to edit the frame of the bear
      var frameWidth = 104.2;
      //for the movement

      var frameHeight = 116;
      var totalFrames = 7;
      var currentFrame = 0;
      // added lines that keep track of the frames passed
      // counts the number of ticks
      var tickCount = 0;
      // number of frames to skip, increase to go slower decrease to go faster
      var ticksPerFrame = 5;
      function animate() {
        ctx.clearRect(30, 400, frameWidth, frameHeight);
        ctx.drawImage(myImage, shift, 0, frameWidth, frameHeight,
                          30, 400, frameWidth, frameHeight);
        // if we are over the number of ticks to skip
        if (tickCount > ticksPerFrame){
          // shift to the next frame
          shift += frameWidth + 1;
          //  if we are at the end of the sprite sheet
          if (currentFrame == totalFrames){
            // shift to the beginning
            shift = 0;
            currentFrame = 0;
          }
        // increase the current frame number
        currentFrame++;
        // reset the tick count if we reached the max ticks per second
        tickCount =0;
      }
        // increment the tick counter
        tickCount += 1;
        requestAnimationFrame(animate);
///used for bear movement. frame height and width above also used
        var jumping = true;
        var x = 144;
        var xVelocity = 0;
        var yVelocity = 0;
        var y = 0;
        //
        //making the bear move around with keyboard, DOES NOT WORK YET
        window.addEventListener("keydown", controller.keyListener);
        window.addEventListener("keyup", controller.keyListener);
        controller = {
          left: false,
          right: false,
          up: false,
          keyListener: function(event) {
            var key_state = (event.type == "keydown")?true:false;
            switch(event.keyCode){
              case 37:
                controller.left = key_state;
              break;
              case 38:
                controller.up = key_state;
              break;
              case 39:
                controller.right = key_state;
              break;
            }
          }
        };


        var context, controller, rectangle, loop;
        context = document.getElementById("myCanvas").getContext("2d");
        loop = function() {
          if (controller.up && myImage.jumping == false) {
            myImage.yVelocity -= 20;
            myImage.jumping = true;
          }
          if (controller.left) {
            myImage.xVelocity -=0.5;
          }
          if (controller.right) {
            myImage.xVelocity += 0.5;

          }
          //math and physics stuff for jumping and moving
          myImage.yVelocity += 1.5;
          myImage.x += myImage.xVelocity;
          myImage.y += myImage.yVelocity;
          myImage.xVelocity *=0.9;
          myImage.yVelocity*=0.9;

        }
        if (myImage.x < -32){
          myImage.x =30;
        } else if (myImage.x > 768) {// if rectangle goes past right boundary
          myImage.x = 30;
        }
        // call update when the browser is ready to draw again
        window.requestAnimationFrame(loop);
    }
}

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
/*function Bear(x, y){
  this.x = x;
  this.y = y;
  this.image = new Image ();
  this.image.src = "PolarBearDraw1.png";
  this.drawBear = function(){
    var img = document.getElementById("bearwalk1");
    ctx.drawImage(img, this.x, this.y,194.12,150);
    this.moveBearUp = function() {
      this.y = this.y - 100;
    }
    this.moveBearDown = function(){
      this.y = this.y + 100;
    }
  }
}
function startBear(){
  bear = new Bear(30,300);
  bear.drawBear();

}
//function animateBear(){
//  document.getElementById("bearwalk1").style.backgroundPosition = `-96px 0px`;
//}*/
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
    bearAnimation();
    startIcebergg();
    }

  }

var notif=setInterval(function(){
      $('blink').each(function() {
        $(this).toggle();
      });
    }, 350);
