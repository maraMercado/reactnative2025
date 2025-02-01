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

/* Mostrar las propiedades con forEach

const propiedades = Object.keys(superheroe);

propiedades.forEach (function (valor) {
    console.log(superheroe[valor]);
}) */


// Mostrar propiedades con for
const propiedades = Object.keys(superheroe);

for (let i = 0; i < propiedades.length; i++) {
    prop = propiedades[i]; // iteracion 1: nombre - iteracion 2: nombreSecreto
    console.log(`Propiedad ${prop}:`, superheroe[prop]); // iteracion 1: superheroe.nombre - iteracion 2: superheroe.nombreSecreto
}

console.log(superheroe.intelecto); // undefined xq esa prop no existe