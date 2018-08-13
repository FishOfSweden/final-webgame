var paddleHeight = 10;
var paddleWidth = 75;
var rightPressed = false;
var leftPressed = false;
var ctx = document.getElementById("myCanvas").getContext('2d');
var bear;
var pbImage = false;
var speedBear = 10;
var speedScreen = 6;
var winning = false;
var speedBear = 10;
var speedUp = 10;
var speedScreen = 6;
var winning = false;
var bear = new Bear(30,300);
var number = 1;

//starting functions
var strings = [
  "The polar bear is the Arctic's top predator.",
  "The scientific name of the polar bear is Ursus maritimus.",
  "The polar bear is an endangered species.",
  "Two thirds of all polar bears live in Canadian land.",
  "Polar bears rely on sea ice that allows them to have access to seals, their main food source. Sea ice is melting due to climate change, which is a major threat to the bears."
]


function Bear(x, y){
  this.x = x;
  this.y = y;
  this.image = new Image ();
  this.image.src = "PolarBearDraw1.png";
  this.drawBear = function(id){
    var img = document.getElementById(id);// put parameter, instead bear.draw bear do bear animate
    ctx.drawImage(img, this.x, this.y,194.12,150);
  }
    this.moveBearRight = function() {
      this.x = this.x + speedBear;
      //bearAnimation()
    }
    this.moveBearLeft = function(){
      this.x = this.x - speedBear;
      //bearAnimation()
   }
   this.moveBearUp = function(){
     this.y = this.y - speedUp;
   }
   this.moveBearDown = function(){
     this.y = this.y + speedUp;
   }
}

function keyCheck(e){
  if(winning == true){
    if (bear.y < 350){
      if(e.keyCode === 39) {
          bear.moveBearRight();
          ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
          bearAnimate();
      }
      else if(e.keyCode === 37) {
          bear.moveBearLeft();
          ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
          bearAnimate();
      }
      else if(e.keyCode === 38){
            bear.moveBearUp();
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            bearAnimate();
          }
      else if(e.keyCode === 40){
            bear.moveBearDown();
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            bearAnimate();
          }
  }
}
      else{
        if(e.keyCode === 13){
          startgame();
        }
      }
  //  }//closes the else
}

function bearAnimate(){
  var number1;
  if (number==1){
    number1 = "bearwalk2";
    bear.drawBear(number1);
    number +=1;
  }
  else if (number ==2){
    number1 = "bearwalk3";
    bear.drawBear(number1);
    number +=1;
  }
  else if (number ==3){
    number1 = "bearwalk4";
    bear.drawBear(number1);
    number +=1;
  }
  else if (number ==4){
    number1 = "bearwalk5";
    bear.drawBear(number1);
    number +=1;
  }
  else if (number ==5){
    number1 = "bearwalk6";
    bear.drawBear(number1);
    number +=1;
  }
  else if (number ==6){
    number1 = "bearwalk7";
    bear.drawBear(number1);
    number +=1;
  }
  else{
    number1 = "bearwalk8";
    bear.drawBear(number1);
    number=1;
  }
}


//the animate bear function
 /*function bearAnimation(){
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


    }
}*/
///used for bear movement. frame height and width above also used
/*
  var jumping = true;
  var x = 144;
  var xVelocity = 0;
  var yVelocity = 0;
  var y = 0;*/
//making the bear move around with keyboard, DOES NOT WORK YET

/*var context, controller, loop;
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
function movementBear(){
    var shift = 0;
    var frameWidth = 130;
    var frameHeight = 116;
    ctx = document.getElementById("myCanvas").getContext('2d');
    var newMyImage = new Image();
    newMyImage.src = "PolarBearDraw1.png";
    var img = document.getElementById("bearwalk1");
    ctx.drawImage(newMyImage, shift, 0, frameWidth, frameHeight, 30, 400, frameWidth, frameHeight);
    while(winning){
      if (rightPressed){
        newMyImage.x = newMyImage.x + speedBear;
      }
    }*/
    /*loop = function() {
      if (controller.up && myImage.jumping == false) {
        newMyImage.yVelocity -= 20;
        newMyImage.jumping = true;
      }
      if (controller.left) {
        newMyImage.xVelocity -=0.5;
      }
      if (controller.right) {
        newMyImage.xVelocity += 0.5;
      }
      //math and physics stuff for jumping and moving
      newMyImage.yVelocity += 1.5;
      newMyImage.x += newMyImage.xVelocity;
      newMyImage.y += newMyImage.yVelocity;
      newMyImage.xVelocity *=0.9;
      newMyImage.yVelocity*=0.9;
    }
    if (newMyImage.x < -32){
      newMyImage.x =30;
    } else if (newMyImage.x > 768) {// if rectangle goes past right boundary
      newMyImage.x = 30;
    }
    // call update when the browser is ready to draw again
    window.requestAnimationFrame(loop);*/


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
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
    //if(e.keyCode == 39) {
        //rightPressed = true;

    //}
    //else if(e.keyCode == 37) {
      //  leftPressed = true;

    //}
    if(e.keyCode == 13) {
      startgame();
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
/*
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
}*/

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
    ctx = document.getElementById('myCanvas').getContext('2d');
    document.getElementById('myCanvas').style.backgroundImage="url('ice.jpg')"
    document.getElementById("polartitle").style.display = "none";
    document.getElementById("polartitle2").style.display = "none";
    clearInterval(notif);
    document.getElementById("startnotif").style.display = "none";
    //bearAnimation();
    //startIcebergg();
    winning = true;
    bearAnimate();
    }
var notif=setInterval(function(){
      $('blink').each(function() {
        $(this).toggle();
      });
    }, 350);
