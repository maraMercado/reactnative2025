/* Declarar una variable numerosPares y asignar una función
La función numerosPares muestra en consola los números pares del 0 al 100
Ejecutar esta función 5 veces */

const numerosPares = function () {
    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

for (let k = 1; k <= 5; k++) {
    numerosPares();
}
