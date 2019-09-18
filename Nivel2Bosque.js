var canvas=document.getElementById('ProyectoEnduro'); //Conecta el html con el js
var contexto=canvas.getContext('2d'); // Canvas cn el contexto en 2d


window.addEventListener("keydown", controles, true); // Cuando la tecla se mantiene apretada, llama a la función avanzar y le asigna verdadero

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

function controles(evento){ //controles tiene evento como parametro
    if (evento.keyCode==68){ //Si la tecla apretada es 68, avanza en x 
        x+=9;   
    }
    if (evento.keyCode==65){ //Si la tecla apretada es 65, retrocede en x 
        x-=10;
    }
    if (evento.keyCode==87){ //Si la tecla apretada es 87, avanza en y
        if(!saltando) y-=50; //Si saltando es verdadero sube 50 en y
    }
}

var moto = new Image(); //A la variable moto se le asignará una imagen
saltando= false;
x=10, y=255; //moto se inicializa en esa posición

moto.onload = function(){ //A moto se le asignará una función
    setInterval(actualizarJuego,1000/100); // La función es actualizar la pantalla metiendo 100 imagenes por segundo
  }
moto.src='PersonajeMoto.png' //A moto se le asigna la foto PersonajeMoto

var fondo = new Image(); //A la variable fondo se le asignará una imágen
fondo.onload = function(){//La variable tendrá una función
  contexto.drawImage(fondo,0,0); //El fondo se dibujará en la posición 00
}
fondo.src='Bosque.jpg'; //La foto asignada en fondo es Desierto

function actualizarJuego(){ //La función actualizarJuego hará:
    y +=5; //Velocidad en que cae el personaje
    if (y>255){ //Para que vuelva al piso
        y=255;
        saltando=false;
    }
    if (x>=575){ //Para que no se ppase del límite de la pantalla
        x=575;
    }
    if (x<=0){//Para que no se ppase del límite de la pantalla
        x=0;
    }
  contexto.drawImage(fondo, 0, 0, 640, 380); // Dibuja el fondo en la posicio 00 con un ancho de 640 y un largo de 380
  contexto.drawImage(moto, x,y,70,70); //Dibuja la moto en laposición en la que esté x, y=255 y el ancho y largo=70
  //contexto.drawImage(arbol, 30, 40, 80, 150, x, y, 90, 180); //Código para que aparezca cierta parte de la imágen arbol
}





