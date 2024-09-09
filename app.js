
let iconos
//llamado para que se cargfue desde un principio
generarTablero()

//poner los demas iconos
function cargarIconos() {
    //cadena de texto separado con '','' (representa cada uno de los elementos)
    //se declaran con comillas simples ' '
iconos= [
    '<img class="imagen" src="./imagenes/durazno.webp">',
    '<img class="imagen" src="./imagenes/kiwi.jpg">',
    '<img class="imagen" src="./imagenes/lechuga.png">',
    '<img class="imagen" src="./imagenes/limon.png">',
    '<img class="imagen" src="./imagenes/manzana.png">',
    '<img class="imagen" src="./imagenes/melon.png">',
    '<img class="imagen" src="./imagenes/naranja.png">',
    '<img class="imagen" src="./imagenes/platano.png">',
    '<img class="imagen" src="./imagenes/sandia.png">',
    '<img class="imagen" src="./imagenes/tomate.png">',
    '<img class="imagen" src="./imagenes/uvas.png">',
    '<img class="imagen" src="./imagenes/cebolla.jpg">',
  
]
}


//hacer el tablero y poner todas las cartas
function generarTablero() {
    cargarIconos()

    //llamar a la variable tablero y ponerle el id del html
    let tablero = document.getElementById("tablero")
    let tarjetas = []

    //preparar un arreglo para desordenar las cartas
    for (let i = 0; i < 24; i++) {

        //la cadena se pone con la comilla inclinada(alt 96 )
        tarjetas.push ( `
            <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">

                <div class="tarjeta" id="tarjeta${i}">
                    <div class="trasera" id="trasera${i}"> ${iconos[0]} </div>
                    <div class="superior"><img class="imagen" src="./imagenes/signo.jpg"> </div>

                </div>

            </div>
        `)
//si el contador 'i' no es multiplo de 2 es igual a 1 se eliminara el primer elemento de icono
//0 es l pocion del primer elemento y 1 es la cantidad de elemntos que se eliminara de esa posicion
if(i%2==1){
    iconos.splice(0,1)
}
//para desorganizar usaremos un sort con un math random
tarjetas.sort(()=>Math.random()-0.5)
    }
    tablero.innerHTML = tarjetas.join("")
}

let selecciones = []

function seleccionarTarjeta(i){
    let tarjeta = document.getElementById("tarjeta"+i)
    //si su trasnformacion es diferente a 180 grados se girara 180 grados
if(tarjeta.style.transform !="rotateY(180deg)"){
    tarjeta.style.transform = "rotateY(180deg)" 
 selecciones.push(i)
}
if(selecciones.length==2){
    deseleccionar(selecciones)
    selecciones = []
}
}

function deseleccionar(selecciones){
    setTimeout(() => {
        
        let trasera1 = document.getElementById("trasera" + selecciones[0])
        let trasera2 = document.getElementById("trasera" + selecciones[1])
    if(trasera1.innerHTML != trasera2.innerHTML){
        let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
        let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
        tarjeta1.style.transform = "rotateY(0deg)"
        tarjeta2.style.transform = "rotateY(0deg)"
    } else{
        trasera1.style.background = "plum"
        trasera2.style.background = "plum"

    }
    }, 1000);

}




//darle a todos los cuadros un evento de click y un evento cuando el cursor este arriba de cada uno
//hacer que el evento de click cambie la imagen existente por otra
//hacer que podamos escoger dos imagenes con el evento de click

//hacer que si las dos iamgenes coinciden se queden boca arriba si no que se volten de nuevo(booleano)


//poner un efecto (promise) cundo las dos coicidan
//hacer que se desordenen las imgenes


//darle eventos al boton
//hacer que el boton boltee las cartas
//hacer que el boton se encargue de desordenar las cartas en algo diferente cada que se preciona