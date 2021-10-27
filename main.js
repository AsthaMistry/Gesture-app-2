prediction_1 = "";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

Camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    }
        );
}
console.log('ml5version:',ml5.version);
Classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2-ty4yYfV/model.json', modelLoaded);

function modelLoaded(){
    console.log('modelLoaded!');
}

function speak(){
    var synth = window.speechSynthesis;
    speak_1 = "The first prediction is"+prediction_1;
    var uttterthis = new SpeechSynthesisUtterance(speak_1);
    synth.speak(uttterthis);
}