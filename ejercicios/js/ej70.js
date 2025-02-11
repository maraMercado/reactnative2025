let contador = 0;
let resultado = 0;

while (contador <= 1000) {
    if (contador % 2 != 0) {
        resultado += contador;
    }
    contador++
}

console.log(resultado);