/* La idea de este ejercicio es crear un código done una variable acumulador sea privada y no se pueda acceder más que dentro de una función IIFE.
La variable acumulador debe ser inicializada en 0.
Completar el siguiente código con la restricción que el objeto retornado no puede tener más propiedades que las establecidas.
const contador = (function () {
  return {
    increment: function () {},
    getCount: function () {},
  };
})();

contador.increment(); // Incrementa en 1
contador.getCount(); // Muestra 1 en pantalla
contador.increment(); // Incrementa en 1
contador.getCount(); // Muestra 2 en pantalla
Salida esperada:
1
2
Agregar los métodos decrement y reset al objeto retornado.
decrement resta en 1 el valor.
reset vuelve el valor inicial a 0.
Utilizar estos métodos en tu código:
// Parte anterior del ejercicio
contador.increment();
contador.getCount();
contador.increment();
contador.getCount();

// Nuevo código
contador.decrement();
contador.getCount();
contador.reset();
contador.getCount();
La salida esperada es:
1
2
1
0
Qué pasa si tratamos de acceder la variable acumulador desde afuera de la función IIFE?. */

const contador = (function () {
    let acumulador = 0;
    return {
        increment: () => acumulador++,
        getCount: () => console.log(acumulador),
        decrement: () => acumulador--,
        reset: () => acumulador = 0
    }
})();

contador.increment();
contador.getCount();
contador.increment();
contador.getCount();

contador.decrement();
contador.getCount();
contador.reset();
contador.getCount();

console.log(acumulador); // acumulador is not defined (tiene alcance local, existe sólo dentro de la función IIFE)