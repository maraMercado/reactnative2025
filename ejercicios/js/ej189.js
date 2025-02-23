/* Copiar el código del ejercicio ej186.js
Modifica la función crearPromesa para que la Promise retornada ahora use setTimeout para esperar 5 segundos en resolverse.
Crear una función con el nombre mostrarPromesa que acepta un mensaje como parámetro.
La función mostrarPromesa es una función async y nos permite usar await adentro para esperar el resultado de llamar a la función crearPromesa.
Ejecutar la función mostrarPromesa pasando como parámetro Wow, estamos usando async / await. */

export function crearPromesa (mensaje) {
    return new Promise ((onSuccess) => { // onSuccess = resolve.
        
        const onSuccessHandler = () => onSuccess(mensaje); // es la función que resuelve la promesa.

        setTimeout(onSuccessHandler, 5000); // A los 5 segundos, llamá a la función que resuelve la promesa.
    });
}

export async function mostrarPromesa(msg) {
    
    const promesa = await crearPromesa(msg); // Creamos la promesa con el mensaje X. Espera 5 segundos, y si le fue bien, la guarda en la constante y la retorna.
    return promesa;
}

mostrarPromesa("Wow, estamos usando async / await. ").then((msj) => console.log(msj));

// Llamamos a la función mostrarPromesa con el parámetro "Wow...". Entonces va a crearPromesa y le pasa el mismo parámetro de "Wow..." y la resuelve a los 5 segundos, entonces se guarda en la const promesa. Como esa const promesa tiene el estado fulfilled, procede al then: dice, lo que sea que guarde el OnSuccess(), mostralo en consola.