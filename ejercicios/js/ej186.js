/* Crear una función con el nombre crearPromesa que acepte un parámetro con el nombre mensaje.
La función crearPromesa retorna una nueva Promise que como parámetro toma una arrow function y el primer parámetro se llama onSuccess que es la función que se va a ejecutar cuando la promesa sea exitosa en el método then.
Crear una nuva variable con el nombre promesa y asignar el resultado de ejecutar la función crearPromesa.
Llamar al método then de la variable promesa y pasar como parámetro una arrow function que acepte como parámetro un mensaje.
Mostrar en pantalla el mensaje obtenido luego que la promise fué exitosa. */

function crearPromesa (mensaje) {
    return new Promise ((onSuccess) => { // onSuccess = resolve.
        onSuccess(mensaje); // Resolvé la promesa con un mensaje que se designa al crear la promesa.
    });
}

const promesa = crearPromesa("Hola"); // Creamos la promesa con el mensaje "Hola".

promesa.then((msg) => console.log(msg)); // Con el then le decimos: si salió bien, ejecutame lo que sea que tenías en el onSuccess() (Le puse msg para entender mejor que no necesariamente debe respetar el nombre del parámetro de la función crearPromesa).