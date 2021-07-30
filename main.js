nose_x = 0;
nose_y = 0;
left_wristX = 0;
right_wristX = 0;
difference = 0 ; 


function setup(){

video = createCapture(VIDEO);
video.size (500, 500);

canvas  = createCanvas(550,550); 
canvas.position(560,150);

poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on('pose' , gotPoses);
}


function draw(){

background('#FFD700');

fill('#F90093');
stroke('#F90093');
square( nose_x , nose_y , difference);

document.getElementById("square_side").innerHTML = "The width and hieght of the square is  ="   + difference +  "  px"
}

function modelLoaded(){

    console.log ('poseNet is initialized');
}

function gotPoses(results ){

    if (results.length > 0 ){

        console.log (results);
        nose_x = results[0].pose.nose.x ; 
        nose_y = results[0].pose.nose.y ; 
        console.log ("nose x = "  +  nose_x   +  "  nose y =  "  +  nose_y);
        left_wristX = results[0].pose.leftWrist.x ; 
        right_wristX = results[0].pose.rightWrist.x ; 
        difference = floor( left_wristX - right_wristX) ; 
        console.log ("left wrist x coordinate  = " + left_wristX);
        console.log ("right wrist x coordinate  = " + right_wristX);
        console.log ("difference  = " +  difference);

    }
    
}



