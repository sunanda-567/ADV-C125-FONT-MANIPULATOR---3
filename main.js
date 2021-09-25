leftWristX=0;
rightWristX=0;

function setup()
{
video= createCapture(VIDEO);
video.size(500, 500);

canvas=createCanvas(550, 500);
canvas.position(550, 140);

posenet=ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotPoses);
}
 function modelLoaded()
 {
     console.log("Posenet is initialize!");
 }

 function gotPoses(results)
 {
     if(results.length > 0)
     {
         console.log(results);
     
         leftWristX= results[0].pose.leftWrist.x;
         rightWristX= results[0].pose.rightWrist.x;
         diiference=floor( leftWristX-rightWristX);
        }  
   
    }

function draw()
{
background("#ff57a0");
textSize(difference);
fill("#000000");
text(Sunanda, 50, 400);
}