/* En un iterador, utilizarías function o arrow functions?
Podes explicarlo con tus propias palabras?
Escribir utilizando los comentarios de JavaScript.

Utilizaría arrow functions, ya que al usar this no crean su propio contexto.

Por ejemplo, si uso this en un método definido con 'function', como el método está contextualizado dentro del objeto, entiende que this es ahora una referencia al objeto. Pero si yo dentro de ese método donde utilizo this, uso además un iterador donde llamo nuevamente a this, ahora como la palabra ya no está directamente metida dentro del método principal, pasa a hacer referencia al contexto global. Por eso se dice que es una palabra dinámica. Cuanto más la anides más pierde el significado que seguramente quieras darle.

En cambio, en una arrow function el this hereda el contexto de donde fue creada. Si se creó como parte de un método dentro de un objeto, pasa a hacer referencia al objeto. Incluso si dentro del método se usa un iterador y comienza a anidarse, el significado se mantiene.
*/

const animales = ["leon", "delfin", "mono"];

animales.forEach((animal) => {
  console.log(this);
});