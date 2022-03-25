function setup()
{
Video = createCapture(VIDEO);
Video.size(550,550);
Canvas = createCanvas(550,550);
Canvas.position(560,150);
Posenet = ml5.poseNet(Video,modelLoaded);
Posenet.on('pose',gotposes);
}
function preload()
{

}
function draw()
{
background('#ededed');
}
function modelLoaded()
{
console.log('modelLoaded');
}
function gotposes(results)
{
if(results.length>0){
    console.log(results);
}
}