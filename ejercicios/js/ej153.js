/* Declarar un objeto con el nombre aritmetica y declarar los siguientes métodos
suma
resta
multiplicar
dividir
mostrarModulo
Cada método acepta 2 parámetros numéricos y muestra en consola el resultado de la operación correspondiente
Validar en cada método que los valores pasados como parámetro sean números
Mostrar en consola los siguientes resultados utilizando los métodos del objeto aritmetica:
suma(2, 10)
resta(10, 5)
multiplicar(3, 100)
dividir(40, 2)
mostrarModulo(20, 2) */

export const aritmetica = {
    suma: (num1, num2) => 
        typeof num1 === "number" && typeof num2 === "number" 
        ? console.log(`${num1} + ${num2} =`, num1 + num2) 
        : console.log("Por favor ingrese ambos datos del tipo númerico"),

    resta: (num1, num2) => 
        typeof num1 === "number" && typeof num2 === "number" 
        ? console.log(`${num1} - ${num2} =`, num1 - num2) 
        : console.log("Por favor ingrese ambos datos del tipo númerico"),

    multiplicar: (num1, num2) => 
        typeof num1 === "number" && typeof num2 === "number" 
        ? console.log(`${num1} * ${num2} =`, num1 * num2) 
        : console.log("Por favor ingrese ambos datos del tipo númerico"),

    dividir: (num1, num2) => 
        typeof num1 === "number" && typeof num2 === "number" 
        ? console.log(`${num1} / ${num2} =`, num1 / num2) 
        : console.log("Por favor ingrese ambos datos del tipo númerico"),

    modulo: (num1, num2) => 
        typeof num1 === "number" && typeof num2 === "number" 
        ? console.log(`${num1} % ${num2} =`, num1 % num2) 
        : console.log("Por favor ingrese ambos datos del tipo númerico"),
}

aritmetica.suma(10,2);
aritmetica.resta(3,7);
aritmetica.multiplicar(9,8);
aritmetica.dividir(3,4);
aritmetica.modulo(10,2)