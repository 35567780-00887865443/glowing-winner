<body onload="add();">
<canvas id="myCanvas" width="800" height="600"></canvas>
<br></br>
<h4>
   < b class="text-danger">NOTE:</b> IF ROVER NOT VISIBLE PRESS ANY ARROW KEY
</h4>
function add() {
    background_imgTag=new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag= new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}
function uploadBackground() {
  ctx.drawImage(background_imgTag, 0, 0,canvas.width, canvas.height)
}
function uploadrover() {
  ctx.drawImage(rover_imgTag, rover_x, rover_y, rover.width, rover.height)
}
    window.addEventListener("keydown" my_keydown);
    function my_keydown(e)
    {
        keyPressed = e.keyCode;
        console.log(keyPressed);

        if(keyPressed == '38')
        up();
        console.log("up")

        if(keyPressed == '40')
        down();
        console.log("down")

        if(keyPressed == '37')
        left();
        console.log("left")

        if(keyPressed == '39')
        right();
        console.log("right")
    }
    function up(){
      if(rover_y >= 10){
        rovery_y =  rover_y - 10;
      console.log("When up arrow is pressed , x =" + rover_x + "| y = " + rover_y) ;
      uploadBackground();
      uploadrover();
      }

    }
    function down(){
      if(rover_y >= 500)
      {
        rovery_y =  rover_y + 10;
      console.log("When down arrow is pressed , x =" + rover_x + "| y = " + rover_y) ;
      uploadBackground();
      uploadrover();
      }

    }
    function left(){
      if(rover_x >= 0){
        rovery_x =  rover_x - 10;
      console.log("When left arrow is pressed , x =" + rover_x + "| y = " + rover_y) ;
      uploadBackground();
      uploadrover();
      }
    }
    function right(){
      if(rover_x >= 700){
        rovery_x =  rover_x + 10;
      console.log("When right arrow is pressed , x =" + rover_x + "| y = " + rover_y) ;
      uploadBackground();
      uploadrover();
      }
    }
