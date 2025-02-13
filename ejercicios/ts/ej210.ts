/* Crear un objeto con el nombre de mascota con las siguientes propiedades:
nombre es un string con el nombre de una mascota
edad es un number con la edad de una mascota
fechaDeNacimiento es un string opcional
Crear una función con el nombre de mostrarDatosMascota que acepta como parámetro una mascota
La función debe validar si la mascota tiene fecha de nacimiento y mostrar el siguiente mensaje La mascota nació en ${mascota.fechaDeNacimiento} si el valor está establecido.
También la función debe mostrar siempre el siguiente mensaje La mascota se llama ${mascota.nombre} y tiene ${mascota.edad}
Llamar a la función pasando al objeto mascota como parámetro pero sin la fecha de nacimiento
Modificar el objeto y agregar una fecha de nacimiento y volver a compilar / ejecutar el programa */

const mascota: {
    nombre: string;
    edad: number;
    fechaDeNacimiento?: string;
} = {
    nombre: "Blacky",
    edad: 9,
    fechaDeNacimiento: "25/06/2015"
}

function mostrarDatosMascota(mascota: {nombre: string; edad: number; fechaDeNacimiento?: string;}) { // el nombre del objeto no necesariamente tiene que coincidir con el parametro. en la ejecución el objeto puede ser cualquiera siempre y cuando cumpla los requisitos de tener propiedad nombre de tipo string, edad number y opc fecha de nac.
    if (mascota.fechaDeNacimiento) {
        console.log(`${mascota.nombre} nació el ${mascota.fechaDeNacimiento}`);
    }

    console.log(`La mascota se llama ${mascota.nombre} y tiene ${mascota.edad} años`);
}

mostrarDatosMascota(mascota);

export {};