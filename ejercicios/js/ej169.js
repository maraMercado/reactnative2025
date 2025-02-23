/* Lee el siguiente código eintenta desifrar qué resultado da al ejecutar esta función.
Como parte del ejercicio escribe lo que pasa. */


export function obtenerFuncion() {
  const nombre = "JavaScript";

  function mostrarMensaje() {
    console.log("Yo <3 " + nombre);
  }

  mostrarMensaje();
}

// obtenerFuncion();  Podemos acceder, porque mostrarMensaje() accede a una variable superior, de adentro hacia afuera.