"use strict"
//escuchar el teclado 
window.addEventListener("keydown",function(event){
    console.log('Pulsando el teclado');
    console.log(String.fromCharCode(event.keyCode))
});

window.addEventListener("keyup",function(event){
    console.log('Tecla Liberada');
});

window.addEventListener("keypress",function(event){
    console.log('Tecla Pulsada');
});


//carga de documeto 

window.addEventListener('load',function(){
    console.log('el contenido de la pagina se ha cargado exitosamente');
})

window.addEventListener('play', function(){
    console.log('el video ha iniciado');
})
window.addEventListener('ended', function(){
    console.log('el video ha finalizado', this.currentTime);
})
window.addEventListener('seeking', function(){
    console.log('el video se esta buscando')
})

var temporizador = setInterval(function(){
    setColor();
}, 10)

function setColor(){
    var pagina = document.body;
    pagina.style.background = pagina.style.backgroundColor == "yellow" ? "red": "yellow";
}

function stopChabgeColor(){
    clearInterval(temporizador);
}