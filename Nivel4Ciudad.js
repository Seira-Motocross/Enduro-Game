var canvas=document.getElementById('ProyectoEnduro'),
contexto=contexto.getContext('2d');
  
//Class KeyboardListener.
function KeyboardListener() {
 // Properties.
 this.keychar = null;
 this.getPressed = function () {
  return this.keychar;
 };
 this.kBrake = function () { //Frenar
  return String.fromCharCode(132);//a
 };
 this.kSkip = function () {   //Saltar 
  return String.fromCharCode(119); //w
 };
 this.kRight = function () { //Derecha
  return String.fromCharCode(100);//d
 };

   this.listenKeyright = function (e) {
    this.keychar = null;
    return true;
   };
   this.listenKeybrake = function (e) {
    var keynum;
  
    if(e.which) keynum = e.which; // IE9/Firefox/Chrome/Opera/Safari.
    else window.alert("Error, juego no válido en éste explorador.");
  
    this.keychar = String.fromCharCode(keynum);
  
    return true;
   };
   this.listenKeyskip = function (e) {
    var keynum;
  
    if(e.which) keynum = e.which; // IE9/Firefox/Chrome/Opera/Safari.
    else window.alert("Error, juego no válido en éste explorador.");
  
    this.keychar = String.fromCharCode(keynum);
  
    return true;
   };
  }

// Class Character.
//function Character() {
  // Properties
 // this.image = new Image(); this.image.src = "Personaje.jpeg";
  //this.xPos = 00;
  //this.died = false;
   // player = new Image();
    //player.src = 'Personaje.jpeg';
    //player.posX = (canvas.width / 2) - (player.width / 2);
    //player.life = life;
    //player.dead = false;
    //player.speed = playerSpeed;
  
  //}
 // load1= function (){
   // let image = new image();
    //image.addEventListener("load", function(event){
     // images [1] = this;
     // render();
     // alert(image.width + "after load");            
  //});
  //image.src = "Personaje.jpeg";
  //alert (image.width);
//};


var spritSheet = new Image();
spritSheet.onload = function(){
    contexto.drawImage(spritSheet,0,0);
  }
spritSheet.src= "PersonajeMoto.png";

var fondo = new Image();
fondo.onload = function(){
  contexto.drawImage(fondo,0,0);
}
fondo.src='Ciudad.jpg';
