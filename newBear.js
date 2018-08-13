var ctx = document.getElementById("myCanvas").getContext('2d');
var speedBear = 10;
var speedUp = 10;
var speedScreen = 6;
var winning = false;
var bear = new Bear(30,300);
var ground;

function Bear(x, y){
  this.x = x;
  this.y = y;
  this.image = new Image ();
  this.image.src = "PolarBearDraw1.png";
  this.drawBear = function(){
    var img = document.getElementById("bearwalk1");
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
    if (bear.y < 350 && bear.y > 220){
      if(e.keyCode === 39) {
          bear.moveBearRight();
          ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
          bear.drawBear();
      }
      else if(e.keyCode === 37) {
          bear.moveBearLeft();
          ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
          bear.drawBear();
      }
      else if(e.keyCode === 38){
            bear.moveBearUp();
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            bear.drawBear();
          }
      else if(e.keyCode === 40){
            bear.moveBearDown();
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            bear.drawBear();
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


function startgame(){
  ctx = document.getElementById('myCanvas').getContext('2d');
  document.getElementById('myCanvas').style.backgroundImage="url('ice.jpg')"
  document.getElementById("polartitle").style.display = "none";
  clearInterval(notif);
  document.getElementById("startnotif").style.display = "none";
  //bearAnimation();
  //startIcebergg();
  winning = true;
  bear.drawBear();//goes in startgame
//this is our attempt at gravity even though it doesn't work right now
  //while(bear.y < 350){
  //bear.moveBearDown();
  //ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  //bear.drawBear();
//}

}
