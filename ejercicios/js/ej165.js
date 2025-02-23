/* Crear una colección de números del 1 al 10
Crear una función con el nombre map que acepte dos parámetros:
Una colección
Una función como parámetro
Llamar a la función map pasando la colección numeros y una función que multiplique por 2 los valores de la coleccion.
La idea es crear nuestro propio map sin utilizar el método del Array.
Mostrar la nueva colección en pantalla */

export const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function map (array, funcion) {
    
    var nuevoArray = [];
    
    for (let i = 0; i < array.length; i++) {
        nuevoArray.push(funcion(array[i]));
    }

    return nuevoArray;
}

export function multiplicarPorDos (numero) {
    return numero * 2;
}

// console.log(map(numeros, multiplicarPorDos));
// console.log(numeros);