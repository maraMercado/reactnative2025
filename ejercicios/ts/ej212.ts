/* Copiar el código del ejercicio ej211.ts y pegarlo en el nuevo archivo del ejercicio ej212.ts
Modificar el código para utilizar una interface Mascota en lugar de un alias type Mascota
El resto del ejercicio debe funcionar de la misma manera */

interface Mascota {
    nombre: string;
    edad: number;
    fechaDeNacimiento?: string;
};

const miMascota: Mascota = {
    nombre: "Blacky",
    edad: 9,
    fechaDeNacimiento: "25/06/2015"
}

const tuMascota: Mascota = {
    nombre: "Pepito",
    edad: 5
}

function mostrarDatosMascota(mascota: Mascota) {
    console.log(`La mascota se llama ${mascota.nombre} y tiene ${mascota.edad} años`);

    if (mascota.fechaDeNacimiento) { // validamos que tenga fecha de nacimiento.
        console.log(`${mascota.nombre} nació el ${mascota.fechaDeNacimiento}`);
    }
}

mostrarDatosMascota(miMascota);
mostrarDatosMascota(tuMascota);

export {};