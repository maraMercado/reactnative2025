// Declarar una función que muestre en consola los números pares del 0 al 100

function pares() {
    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

pares();