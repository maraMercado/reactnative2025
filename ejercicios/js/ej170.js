/* Lee el siguiente código eintenta desifrar qué resultado da al ejecutar esta función.
Como parte del ejercicio escribe lo que pasa. */

function contar() {
  let contador = 0;
  return function () {
    contador++;
    console.log(contador);
  };
}

const incrementar = contar();
incrementar();
incrementar();
incrementar();
incrementar(); // Tmb funciona porque dentro de la return function () llamada a contador desde dentro hacia afuera.