/* Sumar los números pares del 0 al 10000
Cortar la ejecución al encontrar 10 números pares
Mostrar en consola el resultado de los números hasta el momento del corte */

let resultado = 0;

for (let i = 0; i <= 10000; i++) {
    if (i % 2 === 0) {
        resultado += i;
        if (i === 10) {
            console.log(resultado);
            break;
        }
    } 
}