// function changeColor() {
//     document.getElementById('colorizedID').style.filter = "sepia(100%) saturate(200%)";
// }
// function changeBlackandWhite() {
//     document.getElementById('colorizedID').style.filter = "grayscale(100%)";
// }
// function changeDefault() {
//     document.getElementById('colorizedID').style.filter = "none";
// }
// function changeInvert() {
//     document.getElementById('colorizedID').style.filter = "brightness(200%) grayscale(100%) sepia(100%) invert(100%)";
// }
// function changeBlur() {
//     document.getElementById('colorizedID').style.filter = "blur(20px)";
// }

function changeColorfun(c1){
    if( c1 == "c5"){
        document.getElementById("colorizedID").style.filter = "blur(12px)";
    }else if(c1 == "c4"){
        document.getElementById('colorizedID').style.filter = "brightness(200%) grayscale(100%) sepia(100%) invert(100%)";
    }else if(c1 == "c3"){
        document.getElementById('colorizedID').style.filter = "grayscale(100%)";
    }else if(c1 == "c2"){
        document.getElementById('colorizedID').style.filter = "sepia(100%) saturate(200%)";
    }else if(c1 == "c1"){
        document.getElementById('colorizedID').style.filter = "none";
    } 
}

var button = document.getElementById("downloadbtn");
//console.log(button);
var canvas = document.getElementById("colorizedID");
//var ctx = canvas.getContext("2d");

button.addEventListener('click',function(){
    var downloadimage = document.getElementById('colorizedID');
    //console.log(downloadimage);
    var linkVar = document.createElement('a');
    //linkVar.href = downloadimage.src;
    linkVar.download = 'new_image.jpg';
    //linkVar.target = '_blank';
    linkVar.href = downloadimage.toDataURL();
    linkVar.click();
    console.log(linkVar);
});

var imgUploadVar = document.getElementById('imgUpload');
var uplButtonVar = document.getElementById('uplButton');
var preImageVar = document.getElementById('colorizedID');

uplButtonVar.addEventListener('click',function(){
    var reader = new FileReader();
    //console.log(reader);
    reader.onload = function(){
        preImageVar.src = reader.result;
        preImageVar.style.display = "block";
    };
   reader.readAsDataURL(imgUploadVar.files[0]);
});
