let contador = 0;
let resultado = 0;

do {
    if (contador % 2 != 0) {
        resultado += contador;
    }
    contador++
} while (contador <= 1000);

console.log(resultado);