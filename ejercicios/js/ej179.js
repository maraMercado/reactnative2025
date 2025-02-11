/* Crear una función con el nombre calcularPromedio que acepte un sólo parámetro numeros.
No se puede utilizar arguments y se tiene que usar el concepto de rest.
La función calcularPromedio calcula el promedio entre todos los números pasados como parámetros.
Calcular y mostrar los promedios de los siguientes números:
console.log(calcularPromedio(10, 20, 30));
console.log(calcularPromedio(5, 15, 25, 35, 45));
console.log(calcularPromedio(100, 200));
console.log(calcularPromedio());
20
25
150
0 */

function calcularPromedio (...numeros) {
    
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i]
    }

    if (suma === 0) {
        return "Por favor ingrese al menos un número";
    } else {
        return suma / numeros.length;
    }

}

console.log(calcularPromedio(1,2));

console.log(calcularPromedio(10, 20, 30));
console.log(calcularPromedio(5, 15, 25, 35, 45));
console.log(calcularPromedio(100, 200));
console.log(calcularPromedio());