/* Copiar el código del ejercicio ej189.js
Intentar modificar la función crearPromesa para que tarde 5 segundos en resolver la promesa (como vimos con setTimeout)
Un cambio necesario va a ser que al llamar onSuccess tenemos que pasar el mensaje obtenido como parámetro en la función crearPromesa.
Para eso podemos utilizar el siguiente código:

En lugar de llamar a onSuccess directamente, pasamos una arrow función que al ejecutarse llame a onSuccess pasando el mensaje como parámetro.

setTimeout(() => onSuccess(mensaje), 5000);*/

function crearPromesa (mensaje) {
    return new Promise ((onSuccess) => { // onSuccess = resolve.
        
        setTimeout(() => {
            onSuccess(mensaje); // A los 5 segundos, resolvé la promesa con el mensaje que se haya pasado.
        }, 5000);
    });
}

async function mostrarPromesa(msg) {
    
    const promesa = await crearPromesa(msg); // Creamos la promesa con el mensaje X. Espera 5 segundos, y si le fue bien, la guarda en la constante y la retorna.
    return promesa;
}

mostrarPromesa("Wow, estamos usando async / await. ").then((msj) => console.log(msj));

// Llamamos a la función mostrarPromesa con el parámetro "Wow...". Entonces va a crearPromesa y le pasa el mismo parámetro de "Wow..." y la resuelve a los 5 segundos, entonces se guarda en la const promesa. Como esa const promesa tiene el estado fulfilled, procede al then: dice, lo que sea que guarde el OnSuccess(), mostralo en consola.