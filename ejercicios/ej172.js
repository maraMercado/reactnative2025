/* Completa el código para que al llamar a la función crearMultiplicador retorne 15.
Muestra en pantalla el resultado de ejecutar la función crearMultiplicador.

TIP: es una función que retoran otra función ;) */

function crearMultiplicador(numero1) {
  return function (numero2) {
    return 15;
  };
}

console.log(crearMultiplicador(5)(1));