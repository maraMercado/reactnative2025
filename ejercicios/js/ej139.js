/* Crear un array números con valores entre 1 y 100
Crear un nuevo array filtando los números pares
Crear un nuevo array filtando los números impares
Mostrar en consola sólo los últimos 10 números pares e impares */

const numeros = [];

for (let i = 1; i <= 100; i++) {
    numeros.push(i);
}

const numerosPares = numeros.filter (function (nro) {
    return nro % 2 === 0;
})

const numerosImpares = numeros.filter (function (nro) {
    return nro % 2 !== 0;
})

for (let i = numerosPares.length - 1; i > numerosPares.length -11; i--) {
    console.log(numerosPares[i]);
}

for (let i = numerosImpares.length - 1; i > numerosImpares.length -11; i--) {
    console.log(numerosImpares[i]);
}