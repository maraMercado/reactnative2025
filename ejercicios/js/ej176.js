/* Analiza los siguientes casos y escribe cuál crees que es el resultado final en un comentario.
Para correr el código en el archivo puede ir comentando los ejemplos anteriores. */

// Ejemplo 1: 
console.log(numero1); // al ser var, numero1 = undefined.
var numero1 = 10;


// Ejemplo 2: 
saludar(); // va a funcionar sin problemas, ya que el hoisting lleva la function arriba de todo.

function saludar() {
  console.log("Hola Mundo!");
}


/* Ejemplo 3:
console.log(numero2); siendo numero2 let, va a decir 'cannot access numero2 before initialization'
let numero2 = 20; */


// Ejemplo 4:
function prueba() {
    console.log(numero3);
    var numero3 = 5;
    console.log(numero3);
  }
  
prueba(); // va a ejecutar la función, pero dentro de la función el numero 3 primero da undefined, luego sigue el codigo sin error y muestra el 5.


// Ejemplo 5: 
saludar(); // saludar es una function guardada dentro de una variable 'var'. La coloca arriba de todo y sale todo bien (no tira error ni nada, loguea el Hola Mundo).

var saludar = function () {
  console.log("Hola Mundo!");
};

// Ejemplo 6:
{
    console.log(numero4); // cannot access before initialization
    let numero4 = 15;
}