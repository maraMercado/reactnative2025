/* Crear una interfaz con el nombre Mascota con las siguientes propiedades:
nombre es un string
edad es un number
Crear un Alias con el nombre TipoDeMascota con la Union de los siguientes valores literales:
perro como string
gato como string
mono como string
Crear una función con el nombre mostrarMascota y que acepte los siguientes parámetros:
mascota del tipo Mascota
tipo del tipo TipoDeMascota
La función debe mostrar los siguientes mensajes dependiendo del tipoDeMascota que se le pase:
Si es Perro: La mascota es un Canino y se llama ${mascota.nombre} y tiene ${mascota.edad} años
Si es Gato: La mascota es un Felino y se llama ${mascota.nombre} y tiene ${mascota.edad} años
Si es Mono: La mascota es un Monito y se llama ${mascota.nombre} y tiene ${mascota.edad} años
Crear 3 objetos del tipo Mascota con las siguientes propiedades
Llamar a la función mostrarMascota con cada uno de los objetos creados y pasando un tipoDeMascota como segundo parámetro
mostrarMascota(mono, "mono");
mostrarMascota(gato, "gato");
mostrarMascota(perro, "perro"); */

type TipoDeMascota = "Perro" | "Mono" | "Gato";

interface Mascota {
    nombre: string;
    edad: number;
}

function mostrarMascota (mascota: Mascota, tipo: TipoDeMascota) {
     if (tipo === "Perro") {
        console.log(`La mascota es un Canino y se llama ${mascota.nombre} y tiene ${mascota.edad} años`);
     } else if (tipo === "Gato") {
        console.log(`La mascota es un Felino y se llama ${mascota.nombre} y tiene ${mascota.edad} años`);
     } else if (tipo === "Mono") {
        console.log(`La mascota es un Monito y se llama ${mascota.nombre} y tiene ${mascota.edad} años`);
     };
};

const mascota1: Mascota = {
    nombre: "Guau",
    edad: 7
};

const mascota2: Mascota = {
    nombre: "Firulais",
    edad: 9
};

const mascota3: Mascota = {
    nombre: "Azúcar",
    edad: 1
};

mostrarMascota(mascota1, "Mono");
mostrarMascota(mascota2, "Gato");
mostrarMascota(mascota3, "Perro");