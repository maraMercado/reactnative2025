"use strict";
/* Copiar el código del ejercicio ej211.ts y pegarlo en el nuevo archivo del ejercicio ej212.ts
Modificar el código para utilizar una interface Mascota en lugar de un alias type Mascota
El resto del ejercicio debe funcionar de la misma manera */
Object.defineProperty(exports, "__esModule", { value: true });
exports.miMascota = void 0;
;
exports.miMascota = {
    nombre: "Blacky",
    edad: 9,
    fechaDeNacimiento: "25/06/2015"
};
var tuMascota = {
    nombre: "Pepito",
    edad: 5
};
function mostrarDatosMascota(mascota) {
    console.log("La mascota se llama ".concat(mascota.nombre, " y tiene ").concat(mascota.edad, " a\u00F1os"));
    if (mascota.fechaDeNacimiento) { // validamos que tenga fecha de nacimiento.
        console.log("".concat(mascota.nombre, " naci\u00F3 el ").concat(mascota.fechaDeNacimiento));
    }
}
//mostrarDatosMascota(miMascota);
//mostrarDatosMascota(tuMascota);
