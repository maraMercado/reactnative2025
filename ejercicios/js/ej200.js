/* Sin mirar el contenido del curso y con tus propias palabras intenta enteder a quién hace referencia this en este contexto:

Qué diferencia hay si utilizamos arrow function en lugar de functions?
Escribir utilizando los comentarios de JavaScript lo que creas que hace referencia this. */

const persona = {
    nombre: "Nicolas",
    saludar: function () {
      console.log(this); // va a mostrar el objeto persona.
      console.log(this.nombre); // va a mostrar la propiedad nombre del objeto persona
    },
    saludar2: () => {
      console.log(this); // hace referencia al contexto global, xq es una arrow function que no está envuelta en otra función.
    },
};

persona.saludar();
persona.saludar2(); // {} --> this = contexto global