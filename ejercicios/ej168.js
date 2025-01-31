/* Lee el siguiente código e intenta desifrar qué resultado da al ejecutar esta función.
Como parte del ejercicio escribe lo que pasa. */

function test() {
  if (true) {
    let numero1 = 5;
    const numero2 = 10;
  }
  console.log(numero1); // Error! Estoy llamando de afuera para dentro.
  console.log(numero2); // Error por lo mismo.
}

test(); 