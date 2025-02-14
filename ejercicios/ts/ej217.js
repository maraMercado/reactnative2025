"use strict";
/* Crear una función con el nombre mostrarDatosDeLaColeccion que acepte un parámetro del tipo de datos unknown
Crear un interfaz con el nombre de Animal con las siguientes propiedades:
raza del tipo string
muerde del tipo boolean
colores del tipo array de colores literales marron, negro, blanco, gris
Crea una colección con el nombre animales del tipo colección de Animal con los siguientes items:
const perro = {
  raza: "Cocker",
  muerde: true,
  color: ["negro"],
};

const gato = {
  raza: "Persa",
  muerde: false,
  color: ["marron", "blanco"],
};

const leon = {
  raza: "León Africano",
  muerde: true,
  color: ["marron", "negro"],
};
Dentro de la función necesitamos recorrer la colección y mostrar sus valores
Dado que el parámetro es desconocido debemos decirle a TypeScript que estamos seguros que este parámetro es una colección del tipo Animal
Llamar a la función mostrarDatosDeLaColeccion pasando la colección animales */
Object.defineProperty(exports, "__esModule", { value: true });
function mostrarDatosDeLaColeccion(input) {
    input.forEach(function (animal) { return console.log(animal); });
}
;
var perro = {
    raza: "Cocker",
    muerde: true,
    color: ["negro"],
};
var gato = {
    raza: "Persa",
    muerde: false,
    color: ["marron", "blanco"]
};
var leon = {
    raza: "León Africano",
    muerde: true,
    color: ["marron", "negro"],
};
var animales = [perro, leon, gato];
mostrarDatosDeLaColeccion(animales);
