/* Crear una función con el nombre sumarNumeros
La función sumarNumeros acepta dos parámetros con el nombre de inicio y fin
Agregar el tipo de dato para cada parámetro
La función sumarNumeros tiene que sumar todos los números entre inicio y fin
La función retorna el resultado final con tipo de dato string
Declarar el valor de retorno de la función
Mostrar en pantalla el resultado final retornado por la función sumarNumeros
Llamar a la función con los siguientes parámetros:
sumarNumeros(0, 10);
sumarNumeros(20, 30);
sumarNumeros(5, 50);
*/

function sumarNumeros(inicio: number, fin: number): string {
    let resultado: number = 0;

    for(inicio; inicio <= fin; inicio++) {
        resultado += inicio;
    }

    return resultado.toString();

}

console.log(sumarNumeros(0, 10));
console.log(sumarNumeros(20, 30));
console.log(sumarNumeros(5, 50));

export {};