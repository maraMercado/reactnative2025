/* Copiar y pegar el código del ejercicio 125
Recorrer la lista de gustos de helados y mostrarlos en consola uno a uno utilizando console.log()
De inicio a fin
De fin a inicio */

const sabores = [];

sabores.unshift("Banana split", "Limón al agua", "Chocolate tentación");
sabores.push("Chocolate con almendras", "Dulce de leche granizado", "Tramontana");

const sabores2 = ["Chocolate blanco", "Súper dulce de leche", "Vainilla", "Crema americana"];

const saboresCompletos = sabores.concat(sabores2);

console.log(saboresCompletos);

for (let i = 0; i < saboresCompletos.length; i++) {
    console.log(saboresCompletos[i]);
}

for (let i = saboresCompletos.length - 1; i >= 0; i--) {
    console.log(saboresCompletos[i]);
}