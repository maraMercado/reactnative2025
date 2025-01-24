/* Crear una función esPar que retorna un valor boolean
Esta función debe validar si un número es par o no
Ejecutar esta función con los siguientes números: 2, 5, 3, 24, 12
En caso de que el número sea par mostrar un mensaje que diga: ${numero} es par
Caso contrario mostrar en consola el siguiente mensaje: ${numero} no es par */

function esPar (numero) {
    if (numero % 2 === 0) {
        console.log(`${numero} es par`);
        return true;
    } else {
        console.log(`${numero} no es par`);
        return false;
    }
}

esPar(2);
esPar(5);
esPar(3);
esPar(24);
esPar(12);