"use strict";
/* Crear un enum con el nombre de IconsSize y tenga los valores SMALL, MEDIUM, LARGE y XL
Asignar a cada uno de los valores del enum los siguientes valores: 8, 12, 24, 48
Crear un objeto con el nombre icono con las propiedades nombre y tamanio
nombre es del tipo string y tamanio del tipo IconSize y valor 48
Crear una función con el nombre showIcon que acepta dos parámetros
El primer parámetro se llama nombre y es un string
El segundo parámetro se llama tamanio y es del tipo IconSize
La función imprime en pantalla el siguiente mensaje El nombre del icono es ${nombre} y su tamaño es de ${tamanio} puntos
Llamar a la función showIcon utilizando el objeto icono
Llamar a la función showIcon con los valores "muscle" y el IconSize small
El nombre del icono es wave y su tamaño es de 48 puntos
El nombre del icono es muscle y su tamaño es de 8 puntos */
Object.defineProperty(exports, "__esModule", { value: true });
var IconSize;
(function (IconSize) {
    IconSize[IconSize["SMALL"] = 8] = "SMALL";
    IconSize[IconSize["MEDIUM"] = 12] = "MEDIUM";
    IconSize[IconSize["LARGE"] = 24] = "LARGE";
    IconSize[IconSize["XL"] = 48] = "XL";
})(IconSize || (IconSize = {}));
var icono = {
    nombre: "wave",
    tamanio: IconSize.XL // como ya declaramos el tipo de la constante icono (objeto) y de sus props, asignamos valores 
};
function showIcon(nombre, tamanio) {
    console.log("El nombre del icono es ".concat(nombre, " y su tama\u00F1o es de ").concat(tamanio, " puntos"));
}
showIcon(icono.nombre, icono.tamanio);
showIcon("muscle", IconSize.SMALL);
