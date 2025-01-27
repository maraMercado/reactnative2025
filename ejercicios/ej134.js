/* Crear un array números
Ingresar números de 0 a 10000
Sumar los valores de todos los números del array
Mostrar en consola los resultados parciales
Mostrar en consola el resultado final
Si el número es igual a 50005000 Entonces
Mostrar en pantalla: El ejercicio es correcto
Sino
Verificar el ejercicio para obtener el resultado esperado!!! pero */

let numeros = [];

for (let i = 0; i <= 10000; i++) {
    numeros[i] = i;
}

let resultado = 0;

for (let index = 0; index < numeros.length; index++) {
    resultado += index;
}

console.log(resultado);

if (resultado === 50005000) {
    console.log("El ejercicio es correcto");
} else {
    console.log("Sigue intentando...");
}