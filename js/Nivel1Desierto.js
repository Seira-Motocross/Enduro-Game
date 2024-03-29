var canvas=document.getElementById('ProyectoEnduro'); //Conecta el html con el js
var contexto=canvas.getContext('2d'); // Canvas cn el contexto en 2d
var score=0; //Acumulador puntos
var stop= false;
var varPausa=0

window.addEventListener("keydown", controles, false); // Cuando la tecla se mantiene apretada, llama a la función avanzar y le asigna verdadero

function controles(evento){ //controles tiene evento como parametro
    if (evento.keyCode == 80 && muerto==false){
        stop=true;
        varPausa+=1;
    }
    if (evento.keyCode==87 || evento.keyCode==32 && muerto==false){ //Si la tecla apretada es 87, avanza en y
        saltar();
    }
    else{
        if (evento.keyCode==32 && muerto==true){
            muerto= false;
            xc= ancho+100;
            score= 0;
        }
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

x=10, yMoto=255, xc=0, muerto= false; //x general, y moto, x cactus

moto.src='../css/imagenes/PersonajeMoto.png' //A moto se le asigna la foto PersonajeMoto
function dibujarMoto(){
    contexto.drawImage(moto, 40,yMoto,70,70);
}

var fondo = new Image(); //A la variable fondo se le asignará una imágen
fondo.src='../css/imagenes/Desierto3.jpg'; //La foto asignada en fondo es Desierto
function dibujarFondo(){//La variable tendrá una función
    contexto.drawImage(fondo, x, 0, 640, 380); //El fondo se dibujará en la posición 00
}

var cactus = new Image(); //A la variable fondo se le asignará una imágen
cactus.src='../css/imagenes/cactus.png';
function dibujarCactus(){//La variable tendrá una función
    contexto.drawImage(cactus, xc, 264,38,60); //El fondo se dibujará en la posición 00
}

function saltar(){
    if(!saltando) yMoto-=130; //Si saltando es verdadero sube 50 en y
    saltando=true;  //Es para que al mantener apretada la tecla no siga subiendo y se pase del límite dado para saltar.

}
function gravedad(){
    if (saltando==true){
        yMoto +=2; //Velocidad en que cae el personaje
    if (yMoto>255){ //Para que vuelva al piso
        yMoto=255;
        saltando=false;
        }
    }
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

function cartelesDentroBucle(){
    if (muerto!=true){
        contexto.font = "bold 30px Courier Nuevo";
        contexto.fillStyle = "#A52A2A";
        contexto.fillText("Puntos: "+score, 15, 45);
        contexto.font ="bold 30px Courier Nuevo";
        contexto.fillStyle = "#A52A2A";
        contexto.fillText("Seira Motocross",225,30);
    }
    if (muerto==true){
        contexto.font ="bold 30px Courier Nuevo";
        contexto.fillStyle = "#A52A2A";
        contexto.fillText("¡Perdiste!",254,170);
        contexto.font ="bold 15px Courier Nuevo";
        contexto.fillStyle = "#A52A2A";
        contexto.fillText("Presione la barra espaciadora para volver a comenzar.",150,200);
        contexto.fillText("Puntaje total: "+score,270, 220 );
    }
}
function cartelesFueraBucle(){
    if (stop==true && muerto==false && varPausa==1){
        contexto.font ="bold 30px Courier Nuevo";
        contexto.fillStyle = "#A52A2A";
        contexto.fillText("Pausa.",270,200);
    }
    if (score==30){
        contexto.font ="bold 40px Courier Nuevo";
        contexto.fillStyle = "#A52A2A";
        contexto.fillText("¡Ganaste!",234,200);
    }
}
function pararJuego(){
    if (varPausa>1){
        stop= false;
        varPausa=0;
    }
    if (score==30){
        stop=true;
    }
}

function choque(){
    if (xc>=40 && xc<=70){
        if (yMoto>= 225){
            muerto= true;
        }
    }
}

function sumarPuntos(){
    if (xc==40){
        if (yMoto<225){
           score +=2;
        }
    }
}

function borrarCanvas(){
    canvas.width= ancho;
    canvas.height= alto;
}


///////////////////////////
//////BUCLE PRINCIPAL//////
//////////////////////////

setInterval(actualizarJuego,1000/100);

function actualizarJuego(){ //La función actualizarJuego hará:
    pararJuego();
    cartelesFueraBucle();
    if (muerto!=true && score<30 && stop==false){
        borrarCanvas();
        dibujarFondo(); // Dibuja el fondo en la posicion 00 con un ancho de 640 y un largo de 380
        gravedad();
        choque();
        sumarPuntos();
        MovCactus();
        dibujarCactus();
        dibujarMoto();//Dibuja la moto en la posición en la que esté x, y=255 y el ancho y largo=70
        cartelesDentroBucle();
    }
}