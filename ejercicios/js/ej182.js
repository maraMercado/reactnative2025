/* Crear un array con el nombre animales con los siguientes items perro, gato, delfin, elefante.
Utilizar el método map de los array para crear una colección con todos los items de la colección animales en mayúscula.
Utilizar una arrow function como callback del map.
Mostrar el siguiente resultado
Animales:
- PERRO
- GATO
- DELDFIN
- ELEFANTE */

const animales = ["perro", "gato", "delfin", "elefante"];

const animalesEnMayus = animales.map(animal => animal.toUpperCase());

console.log("Animales:");

for (let i = 0; i < animalesEnMayus.length; i++) {
    console.log("- ", animalesEnMayus[i]);
}