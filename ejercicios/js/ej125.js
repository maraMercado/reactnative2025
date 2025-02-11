/* Crear una lista de gustos de helados vacia
Asignar 10 gustos que te gusten utilizando algún método del Array
No se puede utilizar índices numéricos
Los elementos tienen que estar en el orden que fueron ingresados, primero el primero, segundo el segundo y así sigue
Mostrar en consola la lista de gustos de helados */

const sabores = [];

sabores.unshift("Banana split", "Limón al agua", "Chocolate tentación");
sabores.push("Chocolate con almendras", "Dulce de leche granizado", "Tramontana");

const sabores2 = ["Chocolate blanco", "Súper dulce de leche", "Vainilla", "Crema americana"];

const saboresCompletos = sabores.concat(sabores2);

console.log(saboresCompletos);