/* Copiar y pegar el código del último ejercicio 127
Eliminar los 2 últimos gustos de la lista de helados
Asignar los gustos eliminados en el array de gustos que no tienen stock
Mostrar la lista de gustos que quedó
Mostrar la lista de gustos sin stock */

const sabores = [];

sabores.unshift("Banana split", "Limón al agua", "Chocolate tentación");
sabores.push("Chocolate con almendras", "Dulce de leche granizado", "Tramontana");

const sabores2 = ["Chocolate blanco", "Súper dulce de leche", "Vainilla", "Crema americana"];

const saboresCompletos = sabores.concat(sabores2);

console.log(saboresCompletos);


const listaModificada = saboresCompletos;

function modificarSabores () {

    primerGusto = listaModificada[0];
    ultimoGusto = listaModificada[listaModificada.length - 1];

    listaModificada.pop();
    listaModificada.push(primerGusto);

    listaModificada.shift();
    listaModificada.unshift(ultimoGusto);
    
    console.log(listaModificada);
    return listaModificada;

}

modificarSabores();


let saboresOut = listaModificada.shift() + ", ";
saboresOut += listaModificada.shift();

console.log(saboresOut);
console.log(listaModificada);

saboresOut = saboresOut + ", " + listaModificada.pop() + ", " + listaModificada.pop();

console.log(saboresOut);
console.log(listaModificada);