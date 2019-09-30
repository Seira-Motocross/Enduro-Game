var canvas=document.getElementById('ProyectoEnduro'); //Se conecta con el html
var contexto=canvas.getContext('2d');//Contexto 2d de canvas
var score=0

window.addEventListener("keydown",controles, true)//Si apretas una tecla, llama a la funcion y le coloca verdadero.

function controles(evento){
  if (evento.keyCode==68){ //Si la tecla es la d, avanza
    x+=10;
  }
  if (evento.keyCode==65){//Si la tecla es la a, retrocede 
    x-=10;
  }
  if (evento.keyCode==87){ //si la tecla es la w, salta 
    if(!saltando)y -= 70;
    saltando = true;
    score += 2;

 }
}
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

var fondo = new Image(); //cargo imagen del fondo
fondo.onload = function(){
  contexto.drawImage(fondo,0,0);
}
fondo.src='Desierto.jpeg'; // termino de cargar la imagen 

var arbol = new Image(); //cargo imagen obstaculo
  arbol.onload = function(){
    contexto.drawImage(arbol,0,0);
  }
  arbol.src= './Imagenes/arboles.jpg' //termino imagen arbol

var moto = new Image(); //Cargo imagen personaje
saltando = false;
x=10, y=232;
moto.onload = function(){//Moto va a tener una funcion
    setInterval(actualizarJuego,1000/55);//actualiza la pantalla en  imagenes por segundo
}
function actualizarJuego(){
  
  contexto.fillStyle="white";
  y += 7;//gravedad
  console.log(saltando);
  if(y >= 232){ //Si esta en el piso, puede saltar
    y = 232;
    saltando = false;
  } 
  if(x >= 540){//el personaje no se vaya de pantalla derecha
    x = 540;
  } 
  if(x <= 0){ //el personaje no se vaya de pantalla 
    x = 0;
  } 
  contexto.drawImage(fondo,0,0,640,380); //dibuja la imagen del fondo en dichas posiciones
  contexto.drawImage(moto, x,y,95,95);//dibuja la imagen del personaje en dichas posiciones
  contexto.fillText("Puntos: "+score, 5, 20);
}
moto.src='./Imagenes/PersonajeMoto.png' //termino de cargar la imagen del personaje




//Git Computadoras
//git init (se crea el proyecto)(se usa una sola vez)
//git status(vemos que modificamos)
//git add(agregar cambios para guardarlos)
//git add.(guarda todo)
//git add por archivo( guardas uno por uno)
//git commit -m(atomico: personaje/hice esto.)
//git commit(nano o vin(explico detalladamente lo que realice))
//git reset --hard HEAD ~ 1(Cantidad de lineas para volver)
//branch (rama)
//git checkout -b develop(Nombre rama) o git branch develop git chekout develop

//Puntuacion 
//https://technet.microsoft.com

