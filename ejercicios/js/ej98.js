/* Sumar los números del 0 al 1000
Cortar la ejecución si la suma es superior a 100
Mostrar el resultado final en consola */

let resultado = 0;

for (let i = 0; i <= 1000; i++) {
    if (resultado < 100) {
        resultado += i;
    } else {
        console.log(resultado);
        break;
    }
}