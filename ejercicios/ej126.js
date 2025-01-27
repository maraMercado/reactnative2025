/* Copiar y pegar el código del ejercicio 125
Ahora los gustos de helado se piden en otro orden del que fueron ingresados
El primer elemento tiene que ser el último y el último el primero
Para agregar los gustos utilizar una función que acepte 2 parámetros, la colección de gustos de helados y el nuevo gusto
Esta función retorna la lista modificada
Mostrar en consola los gustos de helados */

const sabores = [];

sabores.unshift("Banana split", "Limón al agua", "Chocolate tentación");
sabores.push("Chocolate con almendras", "Dulce de leche granizado", "Tramontana");

const sabores2 = ["Chocolate blanco", "Súper dulce de leche", "Vainilla", "Crema americana"];

const saboresCompletos = sabores.concat(sabores2);

console.log(saboresCompletos);

function modificarSabores () {

    const listaModificada = saboresCompletos;

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
modificarSabores(); // se intercambian como estaban al principio