/* Crear una función con el nombre crearMultiplicador que acepta un parámetro factor y retorna una función.
La función retornada tiene un parámetro con el nombre input y retorna el resultado de multiplicar input y factor.
Crear una variable con el nombre doble y asignarle el valor retornado por la función crearMultiplicador pasando 2 como parámetro.
Ejecutar la función doble pasando como parámetro el número 10.
Mostrar en pantalla el resultado de multiplicar 2 * 10 utilizando las funciones creadas.
Repetir este proceso para un función con el nombre triple a la cual se le asigne el valor retornado al ejecutar la función crearMultiplicador pasando como parámetro el número 3.
Mostrar el resultado en pantalla de ejecutar la función triple pasando el parámetro 4 y el resultado debe ser 12. */

function crearMultiplicador (factor) {
    return function estoyAnidada (input) {
        return factor * input;
    }
}

const doble = crearMultiplicador(2); // doble = function estoyAnidada
console.log(doble(10)); // estoyAnidada (10) -> 2 * 10 = 20

const triple = crearMultiplicador(3); // recuerda que en triple le pasamos 3.
console.log(triple(4));

console.log(doble(6)); // todavía recuerda que doble está asociada a crearMultiplicador con el parámetro 2