nose_x = 0;
nose_y = 0;

mouth_x = 0;
mouth_y = 0;

function preload() {
     clown_nose = loadImage("https://i.postimg.cc/XJ4VF9c1/clown-nose.png");
     mustache = loadImage("https://i.postimg.cc/G2NVb31q/mustache.png")
}

function setup() {
    canvas = createCanvas(400, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 3500);
    video.hide();

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose', gotPoses);
}

function modalLoaded(){
    console.log('POSENET IS INITIALIZED')
}

function gotPoses(results){
    console.log(results.length);
    if(results.length > 0){
        console.log(results);
        mouth_x = results[0].pose.mouth.x;
        mouth_y = results[0].pose.mouth.y;
        console.log("mouth X = " + mouth_x);
        console.log("mouth y = " + mouth_y);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose X = " + nose_x);
        console.log("nose Y = " + nose_y);
    }
}

function draw() {
    image(video, 0, 0, 400, 350);
    fill(0, 0, 255);
    stroke(0, 0, 255);
    circle(nose_x, nose_y, 10);
    circle(mouth_x, mouth_y, 10)
    image(mustache, (mouth_x), (mouth_y), 30, 30);
    image(clown_nose, (nose_x-15), (nose_y-15), 30, 30);

}

function take_snapshot(){
    setTimeout(function() {save('JOKERNOSE+MUSTACHA.png')},500);}