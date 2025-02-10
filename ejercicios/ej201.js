/* Explica con tus propias palabras como funciona this dentro de las funciones.

Escribir utilizando los comentarios de JavaScript lo que creas que hace referencia this.
También explicar cómo funcionan las funciones call, apply y bind y que diferencias tienen. */

const array = [123];

function saludar() {
    console.log(this);
  }
  
saludar(); // hace referencia al contexto global. 

// Call: el método call acepta como parámetro un valor que va a ser sustituido en el 'this' de la función a ejecutar.
saludar.call(array) // hace console.log de [ 123 ], porque el valor del array se sustituye en el this.

// Apply: el método apply acepta como primer parámetro el valor que va a ser sustuido por this, como en el call, pero además acepta como segundo parámetro un array cuyos valores van a ser sustituidos en los parámetros de la función (sería como una especie de spread). Se puede combinar con rest.

// Bind: el método bind acepta como parámetro el valor que va a ser sustituido en el this de la función a ejecutar, como en los otros métodos. Pero al aplicarlo, no se ejecuta esa función, sino que retorna una nueva función la cual recuerda que el this se sustituyó por el valor pasado. 
