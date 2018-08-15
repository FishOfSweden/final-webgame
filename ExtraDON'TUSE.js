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



//went in KEYDOWNHANDLER
    //if(e.keyCode == 39) {
        //rightPressed = true;

    //}
    //else if(e.keyCode == 37) {
      //  leftPressed = true;

    //}





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

    //this.hideSeal = function() {
      //console.log("running hide seal");
      //console.log(this.x, sealDraw1.x, this.y, sealDraw1.y);
      //if(90<=sealDraw1.x<=155 && 90<=this.x<=155 && 450<=sealDraw1.y<=543.7 && 450<=this.y<=543.7){
              //document.getElementById("seal1").style.display="none";
            //}
         // }





   // }




   ///going through the backgrounds


   /*function background(x, y){
     this.x = x;
     this.y = y;
     this.image = new Image ();
     this.image.src = "bg1.jpg";
     this.drawbg1 = function(id){
       var img = document.getElementById(id);
       ctx.drawImage(img, this.x, this.y,768,576);
     }
   }

   function background1ShowUp(){
     var number1;
     if (backgroundNum==1){
       number1 = "bg1";
       bgDraw1.drawbg1(number1);
       backgroundNum=1;
     }
   }

   function background2(x, y){
     this.x = x;
     this.y = y;
     this.image = new Image ();
     this.image.src = "bg2.jpg";
     this.drawbg2 = function(id){
       var img = document.getElementById(id);
       ctx.drawImage(img, this.x, this.y,768,576);
     }
   }

   function background2ShowUp(){
     var number1;
     if (backgroundNum==1){
       number1 = "bg1";
       bgDraw2.drawbg2(number1);
       backgroundNum=1;
     }
   }


   function background3(x, y){
     this.x = x;
     this.y = y;
     this.image = new Image ();
     this.image.src = "bg3.jpg";
     this.drawbg3 = function(id){
       var img = document.getElementById(id);
       ctx.drawImage(img, this.x, this.y,768,576);
     }
   }

   function background1ShowUp(){
     var number1;
     if (backgroundNum==1){
       number1 = "bg1";
       bgDraw3.drawbg3(number1);
       backgroundNum=1;
     }
   }*/
