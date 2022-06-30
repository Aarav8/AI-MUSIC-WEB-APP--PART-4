song1="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreleftWrist=0;
status_of_song1="";

function setup()
{
    canvas=createCanvas(600,500);
    canvas.position(450,160);

    video=createCapture(VIDEO);
    video.hide();

    posenet=ml5.poseNet(video,modelLoaded());
    posenet.on('pose',gotPoses);
}
function preload()
{
    song1=loadSound("music.mp3");
    song2=loadSound("Peter Pan Song.mp3");
}
function draw()
{
    image(video,0,0,600,500);
    status_of_song1= song1.isPlaying();
    if(scoreleftWrist>0.2)
    {
    fill("#ff0000");
    stroke("#ff0000");
    circle(leftWristX,leftWristY,20);
    console.log("Circle Drawn");
    song2.stop()
        if(status_of_song1="false")
        {
            song1.play();
            document.getElementById("song").innerHTML="Harry Poter Theme Song is playing";
        }
    }
}
function start()
{
    song2.play();
    song2.rate(1);
    song2.setVolume(1);
}
function modelLoaded()
{
    console.log("Posenet is on!");
}
function gotPoses(results)
{
    if (results.length>0)
    {
        console.log(results);

        scoreleftWrist=results[0].pose.keypoints[9].score;

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log(leftWristX,leftWristY);

        righhtWristX=results[0].pose.leftWrist.x;
        rightWristY=results[0].pose.leftWrist.y;
        console.log(rightWristX,rightWristY);
    }
}
