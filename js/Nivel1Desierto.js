var canvas=document.getElementById('ProyectoEnduro'); //Conecta el html con el js
var contexto=canvas.getContext('2d'); // Canvas cn el contexto en 2d
var score=0;

window.addEventListener("keydown", controles, false); // Cuando la tecla se mantiene apretada, llama a la función avanzar y le asigna verdadero

function controles(evento){ //controles tiene evento como parametro
    //  if (evento.keyCode==68){ //Si la tecla apretada es 68, avanza en x 
    //      x-=9;   
    // }
    //  if (evento.keyCode==65){ //Si la tecla apretada es 65, retrocede en x 
    //      x+=10;
    //  }
    if (evento.keyCode==87){ //Si la tecla apretada es 87, avanza en y
        if(!saltando) y-=130; //Si saltando es verdadero sube 50 en y
        saltando=true; //Es para que al mantener apretada la tecla no siga subiendo y se pase del límite dado para saltar.
        score+=2;
    }
}

/////////////////////////////
//PARA VALIDAR EL EXLORADOR//
/////////////////////////////
listenKeyright = function (e) {
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

var moto = new Image(); //A la variable moto se le asignará una imagen
saltando= false;

x=10, y=255, xc=0; //moto se inicializa en esa posición

moto.src='../css/imagenes/PersonajeMoto.png' //A moto se le asigna la foto PersonajeMoto
function dibujarMoto(){
    contexto.drawImage(moto, 40,y,70,70);
}

var fondo = new Image(); //A la variable fondo se le asignará una imágen
fondo.src='../css/imagenes/fondo.jpg'; //La foto asignada en fondo es Desierto
function dibujarFondo(){//La variable tendrá una función
    contexto.drawImage(fondo, x, 0, 640, 380); //El fondo se dibujará en la posición 00
}

var cactus = new Image(); //A la variable fondo se le asignará una imágen
cactus.src='../css/imagenes/cactus.png';
function dibujarCactus(){//La variable tendrá una función
    contexto.drawImage(cactus, xc, 264,38,60); //El fondo se dibujará en la posición 00
}

function MovCactus(){
    if(xc <-5){
        xc = ancho+100;
    }
    else{
        xc -= 4;
    }
}
var ancho=640;
var alto= 380;

function borrarCanvas(){
    canvas.width= ancho;
    canvas.height= alto;
}
setInterval(actualizarJuego,1000/100);

function actualizarJuego(){ //La función actualizarJuego hará:
    borrarCanvas();
    y +=2; //Velocidad en que cae el personaje
    if (y>255){ //Para que vuelva al piso
        y=255;
        saltando=false;
    }
    //if (x>=575){ //Para que no se ppase del límite de la pantalla
    //    x=575;
    //}
    //if (x<=0){//Para que no se ppase del límite de la pantalla
    //    x=0;
    //}
    dibujarFondo(); // Dibuja el fondo en la posicio 00 con un ancho de 640 y un largo de 380
    MovCactus();
    dibujarCactus();
    dibujarMoto();//Dibuja la moto en laposición en la que esté x, y=255 y el ancho y largo=70
    contexto.fillText("Puntos: "+score, 5, 20);
    
}