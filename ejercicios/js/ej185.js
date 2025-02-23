/* Crear una variable con el nombre contador y asignar 1 como valor incial.
Crear un timer que se llame cada 1 segundo y muestre en pantalla un mensaje.
A los 10 segundos cortar la ejecución del timer.
Inicio
Paso 1 segundo.
Pasaron 2 segundos.
Pasaron 3 segundos.
Pasaron 4 segundos.
Pasaron 5 segundos.
Pasaron 6 segundos.
Pasaron 7 segundos.
Pasaron 8 segundos.
Pasaron 9 segundos.
Fin del contador, pasaron 10 segundos
Challenge:
Podes mostar el tiempo que pasó utilizando *?
Asteriscos!!
*
**
***
****
*****
******
*******
********
*********
**********
*/

/* let contador = 1;

const intervalo = setInterval(() => {
    console.log(`Pas${contador === 1 ? "ó": "aron"} ${contador} segundo${contador === 1 ? "" : "s"}.`);
    
    contador++;

    if (contador === 10) {
        console.log(`Fin del contador, pasaron ${contador} segundos.`);
    }},

    1000);

setTimeout(() => clearInterval(intervalo), 10000); */

// Challenge

export let contador = "*";

export const intervalo = () => setInterval(() => {
    console.log(contador);
    contador += "*";

}, 1000);

// setTimeout(() => clearInterval(intervalo), 5000);