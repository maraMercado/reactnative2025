"use strict";
/* Crear un objeto con el nombre de mascota con las siguientes propiedades:
nombre es un string con el nombre de una mascota
edad es un number con la edad de una mascota
fechaDeNacimiento es un string opcional
Crear una función con el nombre de mostrarDatosMascota que acepta como parámetro una mascota
La función debe validar si la mascota tiene fecha de nacimiento y mostrar el siguiente mensaje La mascota nació en ${mascota.fechaDeNacimiento} si el valor está establecido.
También la función debe mostrar siempre el siguiente mensaje La mascota se llama ${mascota.nombre} y tiene ${mascota.edad}
Llamar a la función pasando al objeto mascota como parámetro pero sin la fecha de nacimiento
Modificar el objeto y agregar una fecha de nacimiento y volver a compilar / ejecutar el programa */
Object.defineProperty(exports, "__esModule", { value: true });
var mascota = {
    nombre: "Blacky",
    edad: 9,
    fechaDeNacimiento: "25/06/2015"
};
function mostrarDatosMascota(mascota) {
    
    console.log("La mascota se llama ".concat(mascota.nombre, " y tiene ").concat(mascota.edad, " a\u00F1os"));

    if (mascota.fechaDeNacimiento) {
        console.log("".concat(mascota.nombre, " naci\u00F3 el ").concat(mascota.fechaDeNacimiento));
    }
}
mostrarDatosMascota(mascota);
