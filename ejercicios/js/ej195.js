/* Dado el siguiente código:
Crear un objeto con el nombre estadoAlumno con las propiedades nombre, apellido y amigos.
Asignar a cada propiedad tus datos.
No sobrescribir la propiedad leGustaJavaScript.
Crear una nuevo objeto con el nombre nuevoEstado donde usando destructuring primero poner los datos del profesor, luego sobrescribir con tus datos haciendo destructuring de tus datos.
Finalmente imprimir el contenido de la variable nuevoEstado.
El resultado final debería ser tus datos más la propiedad leGustaJavaScript inicial. */

const estadoProfesor = {
    nombre: "Nicolas",
    apellido: "Isnardi",
    amigos: ["Juan", "Pablo", "Char"],
    leGustaJavaScript: true,
};

const estadoAlumno = {
    nombre: "Mara",
    apellido: "Mercado",
    amigos: ["Valentina", "Lucía", "Isabella"]
}

let nuevoEstado = { 
    ...estadoProfesor, // primero le pasamos todas las propiedades y valores de estadoProfesor.
    ...estadoAlumno    // ahora le pasamos las de estadoAlumno, como muchas coinciden se sobreescriben, las que no coinciden pues se quedan (como la de leGustaJavascript: true).
};

console.log(nuevoEstado);