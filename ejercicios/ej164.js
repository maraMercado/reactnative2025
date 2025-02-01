/* Crear una colección de números del 1 al 10
Crear una función con el nombre forEach que acepte dos parámetros:
Una colección
Una función como parámetro
Llamar a la función forEach pasando la colección numeros y una función que imprima en pantalla cada uno de los valores como parametros
La idea es crear nuestro propio forEach sin utilizar el método del Array. */

const numeros = [];

for (let i = 1; i <= 10; i++) {
    numeros.push(i);
}

function forEach (array, funcion) {
    for (let i = 0; i < array.length; i++) {
        funcion(array[i]);
    }
}

forEach(numeros, console.log);