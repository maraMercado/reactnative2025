/* Declarar una variable con el nombre de superheroe y asignar un objeto vacío
Crear las siguientes propiedades y asignarle los valores correspondientes:
propiedad: nombre, valor: Batman
propiedad: nombreSecreto, valor: Bruce
propiedad: ayudantes, valor: ['Robin', 'Alfred', 'Gordon']
propiedad: fuerza, valor: 70
Mostrar en consola cada una de las propiedades del objeto superheroe
Mostrar en consola el valor de la propiedad intelecto del objeto superheroe */

const superheroe = {};

superheroe.nombre = "Batman";
superheroe.nombreSecreto = "Bruce";
superheroe.ayudantes = ["Robin", "Alfred", "Gordon"];
superheroe.fuerza = 70;

/* 
1- entrar al objeto superheroe
2- ciclo: por cada propiedad, mostrar su valor.
*/

const propiedades = Object.keys(superheroe);

propiedades.forEach (function (valor) {
    console.log(superheroe[valor]);
})

console.log(superheroe.intelecto);