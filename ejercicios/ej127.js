/* Copiar y pegar el código del último ejercicio 126
A la lista final que mostramos en consola eliminarle los 2 primeros gustos
Asignar los gustos eliminados en un nuevo array de gustos que no tienen stock
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