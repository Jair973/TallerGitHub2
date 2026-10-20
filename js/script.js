

const boton = document.getElementById("boton");
const mensaje = document.getElementById("mensaje");

let contador = 0;

boton.addEventListener("click", function() {

    contador = contador + 1;

    if (contador == 1) {
        mensaje.textContent = "Bienvenido a mi pagina web";
    } else {
        mensaje.textContent = "Has hecho clic " + contador + " veces";
    }

});

const botonColor = document.createElement("button");

botonColor.textContent = "Cambiar color";
document.body.appendChild(botonColor);

botonColor.addEventListener("click", function() {

    document.body.style.backgroundColor = "lightblue";

});
