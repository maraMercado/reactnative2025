/* Definir y declarar un objeto persona con tus datos y valores

Este objeto tiene que tener al menos 10 propiedades y al menos un tipo de dato de: string, number, boolean, array y object (si un objeto puede tener otros objetos como propiedades)

Algunas propiedades definirlas utilizando el objeto literal al asignarlo:

Algunas propiedades definirlas utilizando la forma más dinámica:

Mostrar en consola el objeto persona
*/

const yo = {
    nombre: "Mara",
    apellido: "Mercado",
    edad: 18,
    esEstudiante: true,
    tecnologias: ["HTML", "CSS", "Bootstrap", "Sass", "JavaScript"],
    perro: {
        nombre: "Blacky",
        raza: "Schnauzer mini",
        color: "negro",
        edad: 9,
        esPreciosa: true
    }
}

yo.pais = "Argentina";
yo.sabeReact = false;
yo.club = "Independiente";
yo.coloresFavoritos = ["Violeta", "Blanco", "Rosa", "Celeste"];

console.log(yo);