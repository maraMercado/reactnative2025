/* Crear un objeto literal persona con las siguientes propiedades: nombre, apellido.
Asignar a las propiedades tus datos.
Utilizar for in para recorrer las propiedades y mostrarlas en pantalla.
Una vez que el código corre y hace lo pedido agregar un método saludar que muestre el siguiente mensaje Hola ${tu nombre} ${tu apellido}.
Dentro del iterador comprobar el tipo de dato y ejecutarlo en caso de que sea una función.
Agregar otras propiedades que creas describen a una persona y al menos 2 métodos más. */

const persona = {
    nombre: "Mara",
    apellido: "Mercado",
    edad: 18,
    pais: "Argentina",
    estudiante: true,
    idioma: ["español", "inglés"],
    colorFavorito: "violeta",
    mascota: {tipo: "perra", nombre: "Blacky", edad: 9, raza: "Schnauzer miniatura", color: "negro"},

    saludar() {
        console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
    },

    greet() {
        console.log(`Hi, my name is ${this.nombre} ${this.apellido}`);
    },

    infoMascota() {
        console.log(`Mi mascota es una ${this.mascota.tipo} de ${this.mascota.edad} años, su nombre es ${this.mascota.nombre} y su raza es ${this.mascota.raza}. Es muy activa a pesar de su edad, y súper amorosa.`);
    },

    cumplirAños() {
        this.edad++;
    },

    mascotaCumplirAños() {
        this.mascota.edad++;
    }
}

for (propiedad in persona) {

    if (typeof persona[propiedad] === "function") {
        persona[propiedad]();
    } else if (persona[propiedad] == "[object Object]") {
        for (prop in persona[propiedad]) {
            console.log("Propiedad: " + propiedad + " | Valor: " + persona[propiedad][prop]);
        }
    } else {
        console.log("Propiedad: " + propiedad + " | Valor: " + persona[propiedad]);
    }
}