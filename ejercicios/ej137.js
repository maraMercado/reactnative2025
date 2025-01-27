/* Crear un array con números de 0 a 100
Crear un nuevo array incrementando cada valor del array en 10
Mostrar en consola el ínidice, valor original y valor incrementado de cada uno de los primeros 10 valores */

let numeros = [];

for (let i = 0; i <= 100; i++) {
    numeros[i] = i;
}

let nuevoArray = numeros.map (function (valor) {
    return valor + 10;
})

for (let i = 0; i <= 10; i++) {
    console.log("Índice:", i, "/ Valor original: ", numeros[i], "/ Valor incrementado en 10:", nuevoArray[i]);
}