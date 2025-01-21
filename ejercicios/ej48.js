let mensaje = "3.14 es un gran número, pero mejor es 42 que le da significado a la vida";

let pi = parseFloat(mensaje.slice(0, 3));

let significadoDeLaVida = parseInt(mensaje.slice(38, 40));

let resultado = pi + significadoDeLaVida;

console.log(resultado);
console.log(`${resultado} es el resultado de sumar las variables pi y significadoDeLaVida, concatenando los valores. Utilizar el método toString para convertir los numbers a strings.`);