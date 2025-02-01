/* Completa el código para que al llamar a la función crearMultiplicador retorne 15.
Muestra en pantalla el resultado de ejecutar la función crearMultiplicador.

TIP: es una función que retoran otra función ;) */

/* Forma 1 ? Rara. Mi forma...
function crearMultiplicador(numero1) {
  return function (numero2) {
    return 15;
  };
}

console.log(crearMultiplicador(5)(1));
*/

// Forma 2: del profe !

function crearMultiplicador (numero1) {
  return function soyLaOtraFuncion(numero2) {
    return numero1 * numero2;
  }
}

const laOtra = crearMultiplicador(3) // la func me retorna otra funcion, que la guardo en "laOtra"

const resultado = laOtra(5) // "laOtra" es una func con el param numero2. Y retorna numero1 (3) * numero2 (5). Entonces resultado = 15.

console.log(resultado);

const resultado2 = laOtra(2);
console.log(resultado2); // 6! Se me guardó el 3, así que hace numero1 = 3 * numero2 = 2 = 6.

// O bien hago todo de una:
console.log(crearMultiplicador(3)(5));
console.log(crearMultiplicador(1)(15));