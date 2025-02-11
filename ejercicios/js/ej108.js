/* Crear una función con el nombre ordenarNúmeros que acepte tres parámetros numéricos llamados numero1, numero2 y numero3
Dentro de la función ordenar los números de menor a mayor
Ejecutar la función con los siguientes parámetros: 10, 8, 25
Mostrar en consola el siguiente resultado: 8, 10, 25
Agregar un último parámetro que acepte un tipo de dato boolean llamado descendente
En caso de que el parámetro descendente sea verdadero mostrar en consola el siguiente mensaje: 25, 10, 8
Ejecutar la función agregando true cómo último parámetro en el llamado de la función, ejemplo: ordenarNúmeros(10, 8, 25, true) */

function ordenarNumeros (numero1, numero2, numero3, descendente) {
    let arrayNum = [numero1, numero2, numero3]; // debo hacerlo array para usar sort.
    
    if (descendente) {
        arrayNum.sort(function (a,b) {return b - a}); 
    } else {
        arrayNum.sort(function (a,b) {return a - b}); // compare numbers devuelve a - b = 1 - 5 = -4. Es decir que 'a' (1) debe ir primero. luego pasa al 5 (b) y 3 (c) y compara. devuelve positivo, es decir c va a antes.
    }
    
    return arrayNum;
}

console.log(ordenarNumeros(10,8,25,true));