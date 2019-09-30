var canvas=document.getElementById('ProyectoEnduro'),
contexto=contexto.getContext('2d');

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

var spritSheet = new Image();
spritSheet.onload = function(){
    contexto.drawImage(spritSheet,0,0);
  }
spritSheet.src= "PersonajeMoto.png";

var fondo = new Image();
fondo.onload = function(){
  contexto.drawImage(fondo,0,0);
}
fondo.src='Bosque.jpg';
