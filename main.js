import {todasLasTarjetas} from './data.js';

function agregartitulos(){
    //DOM
    let root = document.querySelector("#root");

    todasLasTarjetas.forEach( function(fruta){
        //CREAR UN ELEMENTO DENTRO DEL DOM
        let titulo = document.createElement("div");

        //SE AGREGA CONTENIDO AL ELEMENTO
        titulo.innerHTML = 
        '<div class="tarjetas">' +
            fruta +
        '</div>';

        //SE AGREGA AL DOM
        root.appendChild(titulo);
} );

}

agregartitulos();

var bounceIn = anime({
    targets: '.letter__part',
    translateY: {
                  value: [-30, 0],
                  duration: 900,
          delay: 1000,
                  elasticity: 600,
                  easing: 'easeOutElastic'
              },
              opacity: {
                  value: [0, 1],
                  duration: 300,
                  easing: 'linear',
          delay: 1000
              }
    });
  
  var lineDrawing = anime({
    targets: '.color-1',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeOutElastic',
    duration: 4000,
    delay: 1000,
    loop: false,
    direction: 'alternate',
  });
  
  var lineDrawing = anime({
    targets: '.color-3',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeOutElastic',
    duration: 4000,
    delay: 1200,
    loop: false,
    direction: 'alternate',
  });
  
  var lineDrawing = anime({
    targets: '.color-2',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeOutElastic',
    duration: 4000,
    delay: 1400,
    loop: false,
    direction: 'alternate',
  });
  
  