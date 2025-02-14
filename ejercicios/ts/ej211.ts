/* Copiar el código del ejercicio ej210.ts y pegarlo en el nuevo archivo del ejercicio ej211.ts
Declarar una Alias con el nombre de Mascota con las mismas propiedades que tiene el objeto mascota definido en el ejercicio anterior.
Modificar la función mostrarDatosMascota para que ahora acepte un parámetro del tipo Mascota.
Crear 2 objetos con los nombre mascota1 y otro con el nombre mascota2 y asignarle valores a las propiedades.
mascota1 no tiene fechaDeNacimiento
mascota2 tiene una fechaDeNacimiento
Llamar a la función mostrarDatosMascota una vez con cada objeto mascota */

type Mascota = {
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