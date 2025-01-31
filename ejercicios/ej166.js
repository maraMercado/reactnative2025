/* Definir una variable usuario y asigne el siguiente objeto { nombre: valor} donde valor sea tu nombre.
Crear una función isUserValid que utilize el scope global para acceder a la variable usuario.
Si el nombre del usuario es el mismo que tu nombre muestra un mensaje de éxito en pantall.
Si no muestra un mensaje de error.
Llama a la función para que se ejecute tu código.
Prueba cambiar la definción de la variable usuario con var, let & const */

var usuario = {
    nombre: "Mara"
}

function isUserValid () {
    if (usuario.nombre === "Mara") {
        console.log("Éxito");
    } else {
        console.log("Error");
    }
}

isUserValid(); // Como estoy accediendo a la propiedad dentro de un objeto, no importa si el objeto se declaró con let, var o const, siempre me deja.