camera=document.getElementById("camera");
result=document.getElementById("result");

Webcam.set({
    height: 270,
    width: 430,
    image_format: "png",
    png_quality: 100,

    constraints:{
      facingMode:"environment"
    }
});

Webcam.attach(camera);
function take_snapshot() {
   
    
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="my_image" style="width: 370;height: 268;" src="' + data_uri + '"/>'
    });
}

console.log('ml5',ml5.version);

classifier=ml5.imageClassifier('MobileNet',model_loaded);

function model_loaded(){
    console.log('Model_Loaded');
}

function check(){
    img=document.getElementById("my_image");
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    } else{
        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label;
    }
}