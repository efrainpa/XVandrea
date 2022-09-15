//Resto las fechas para saber los dias
const fechaPrueba = new Date();
const fechaBoda = new Date('10/14/2022'); //mes-dia-año
const diaP = fechaPrueba.getDate();
const mesP = fechaPrueba.getMonth() + 1;
const anioP = fechaPrueba.getFullYear();
const diaB = fechaBoda.getDate();
const mesB = fechaBoda.getMonth() + 1;
const anioB = fechaBoda.getFullYear();
const horaP = fechaPrueba.getHours();
const minP = fechaPrueba.getMinutes();
var fFecha1 = Date.UTC(anioP, mesP, diaP);
var fFecha2 = Date.UTC(anioB, mesB, diaB);
var dif = fFecha2 - fFecha1;
var D = Math.floor(dif / (1000 * 60 * 60 * 24));
/*************************** */
let dias = D;
let horas = horaP;
let minutos = minP;
let segundos = 0;
cargarSegundo();


/*
document.getElementById('muestraDia').innerHTML = diaP;
document.getElementById('muestraMes').innerHTML = mesP;
document.getElementById('muestraAnio').innerHTML = anioP;

document.getElementById('muestraDiaB').innerHTML = diaB;
document.getElementById('muestraMesB').innerHTML = mesB;
document.getElementById('muestraAnioB').innerHTML = anioB;

*/
//funcion para restar las fechas;

//definimos y ejecutamos los segundos
function cargarSegundo() {
    let txtSegundos;
    if (segundos < 0) {
        segundos = 59;
    }
    //mostrar segundos en pantalla
    if (segundos < 10) {
        txtSegundos = `0${segundos}`;
    } else {
        txtSegundos = segundos;
    }
    document.getElementById('segundos').innerHTML = txtSegundos;
    segundos--;

    cargarMinutos(segundos);
}

//definimos y ejecutamos minutos
function cargarMinutos(segundos) {
    let txtMinutos;

    if (segundos == -1 && minutos !== 0) {
        setTimeout(() => {
            minutos--;
        }, 500)
    } else if (segundos == -1 && minutos == 0) {
        setTimeout(() => { minutos = 59 }, 500)
    }
    //mostrar minutos en pantalla
    if (minutos < 10) {
        txtMinutos = `0${minutos}`;
    } else {
        txtMinutos = minutos;
    }
    document.getElementById('minutos').innerHTML = txtMinutos;
    cargarHoras(segundos, minutos);
}

//definimos y ejecutamos las horas
function cargarHoras(segundos, minutos) {
    let txtHora;

    if (segundos == -1 && minutos == 0 && horas !== 0) {
        setTimeout(() => { horas--; }, 500)
    } else if (segundos == -1 && minutos == 0 && horas == 0) {
        setTimeout(() => { horas = 24 }, 500)
    }
    //mostrar horas en pantalla
    if (horas < 10) {
        txtHora = `0${horas}`;
    } else {
        txtHora = horas;
    }
    document.getElementById('horas').innerHTML = txtHora;
    cargaDias(segundos, minutos, horas);
}

//definimos y ejecutamos los dias
function cargaDias(segundos, minutos, horas) {
    let txtDias;

    if (segundos == -1 && minutos == 0 && horas == 0 && dias !== 0) {
        setTimeout(() => { dias--; }, 500)
    }

    //mostramos los dias en pamntalla
    if (dias < 10) {
        txtDias = `0${dias}`;
    } else {
        txtDias = dias;
    }
    document.getElementById('dias').innerHTML = txtDias;
}

//ejecutamos cada segundo
setInterval(cargarSegundo, 1000);

function play() {
    var audio = new Audio('musica/evangeline.m4a');
    audio.play();
    var boton = document.getElementById('btn-play');
    boton.disabled = true;
}

function play2() {
    var audio = new Audio('musica/evangeline.m4a');
    audio.pause();

}