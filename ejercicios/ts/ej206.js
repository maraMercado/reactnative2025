"use strict";
/* Crea las siguientes variables y asigna el tipo de dato y valor que corresponde utilizando type annotation.
altura
colorDePelo
edad
tieneTrabajo
Ahora intenta asignar a la variable colorDePelo un valor que no corresponda. */
Object.defineProperty(exports, "__esModule", { value: true });
var altura = 1.67;
var colorDePelo = "castaño";
var edad = 18;
var tieneTrabajo = false;

edad = "pepito";
console.log(edad); // me dejó, pero si hago mouse hover sobre edad me sigue diciendo que es tipo number (una hint de que no debería valer ahora string, si bien por ser javascript no tira error)
