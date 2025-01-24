/* Declarar la variable fibonacci y asignar una función como valor
La función fibonacci tiene que mostrar los primeros 10 números de la secuencia en consola
Ejecutar esta función 3 veces */

const fibonacci = function () {
    let f1 = -1;
    let f2 = 1;
    
    for (let f = 0; f <= 21;) {
        f = f1 + f2;
        f1 = f2;
        f2 = f;
        console.log(f);
    }
}

fibonacci();
fibonacci();
fibonacci();