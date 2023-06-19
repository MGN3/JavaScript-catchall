
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";

  for (var i = 0; i < 6; i++) {
    color = color + letters[Math.floor(Math.random() * 16)];
    //alternativa: color+= letters[...]
  }

  return color;
}


window.onload = function abc () {
  var divUno = document.getElementById("uno");

  setInterval(function () {
    var randomColor = getRandomColor(); // Obtener un color aleatorio

    divUno.style.backgroundColor = randomColor; // Establecer el color de fondo

    divUno.style.height = (Math.random() * 100)+50 +"px"; //Este codigo se añade después, por lo que aplica una propiedad al div "uno" cada 600 ms además del cambio de color de fondo.

  }, 600); // Cambiar cada 1 segundo (1000 milisegundos)
};

window.navigator
window.onclick = function () {
  var divDos;


  divDos = document.getElementById("dos");

  divDos.style.backgroundColor = getRandomColor();
  divDos.style.fontSize = (Math.random() * 10) + 50 + "px";

};

//contador de clicks
//Comentada para no anular el anterio codigo ejecutado por el evento window.onload
//puesto que se sobrescribe.
/*
window.onload = function def () {
  var contador = 0;
  var contadorElemento = document.getElementById("contador");
  var boton2 = document.getElementById("boton2");

  boton2.addEventListener("click", function () {
    contador++;
    contadorElemento.textContent = contador
    
    if(contador>=10){
      contador=0;
    }
  });
};
*/

/*
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

window.onload = function () {
  var divUno = document.getElementById("uno");

  setInterval(function () {
    var randomColor = getRandomColor(); // Obtener un color aleatorio
    var randomSize = Math.floor(Math.random() * 100) + 50 + "px"; // Obtener un tamaño aleatorio entre 50px y 150px

    divUno.style.backgroundColor = randomColor; // Establecer el color de fondo
    divUno.style.width = randomSize; // Establecer el tamaño del ancho
    divUno.style.height = randomSize; // Establecer el tamaño de la altura

  }, 600); // Cambiar cada 0.6 segundos (600 milisegundos)
};
*/