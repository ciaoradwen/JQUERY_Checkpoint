function changeBold(){
 var text = document.getElementById("message");
 if (text.style.fontWeight != "bold") {
     text.style.fontWeight="bold"
 } 
  else {
      text.style.fontWeight="normal"
    } 
 }

function changeItalic(){
    var text= document.getElementById("message");
if(text.style.fontStyle !="italic"){
    text.style.fontStyle="italic"
}
else{
    text.style.fontStyle="normal"
}
 }
 function changeUnderline(){
     var text =document.getElementById("message");
     if(text.style.textDecoration != "underline"){
         text.style.textDecoration="underline"
     } 
     else{
         text.style.textDecoration="none"
 }  
}


function changeSize(event){
    var text = document.getElementById("message");
    text.style.fontSize=event.value;
}
function changestyle(event){
    var text=document.getElementById("message");
    text.style.fontFamily=event.value;
}

$('#bouton0').on('click', function () {
    $('#Track0').modal();
    
})

$('#bouton1').on('click', function () {
    $('#Track1').modal();
    
})

$('#bouton2').on('click', function () {
    $('#Track2').modal();
    
})
$('#bouton3').on('click', function () {
    $('#Track3').modal();
    
})
$('#bouton4').on('click', function () {
    $('#Track4').modal();
    
})
$('#bouton5').on('click', function () {
    $('#Track5').modal();
    
})
$('#bouton6').on('click', function () {
    $('#Track6').modal();
    
})
$('#bouton7').on('click', function () {
    $('#Track7').modal();
    
})
$('#bouton8').on('click', function () {
    $('#Track8').modal();
    
})