noseX=""
noseY=""
function setup()
{
canvas=createCanvas(300,300);
canvas.center()
video=createCapture(VIDEO);
video.size(300,300);
video.hide()

posenet=ml5.poseNet(video,modelLoaded)
posenet.on("pose",gotposes)

}
function gotposes(results)
{

if(results.length>0)
{
    console.log(results);
    noseX=results[0].pose.nose.x-25;
    noseY=results[0].pose.nose.y-10;
    console.log("nose_x= "+noseX);
    console.log("nose_y= "+noseY);

}
}
function modelLoaded()
{
    console.log("model is loaded")
}

function preload()
{
clown_nose=loadImage("https://i.postimg.cc/k40NGMdY/4326ec1ca9b628cd3f9b116444c891c1-grey-hipster-mustache-2.png")
}

function draw()
{
    
    image(video,0,0,300,300);
    //fill("red");
    //stroke("red")
    //circle(noseX,noseY,20)
image(clown_nose,noseX,noseY,50,50)

}

function take_snapshot()
{
    save("My filter image.png")
}

