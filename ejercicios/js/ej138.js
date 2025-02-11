/* Copiar la lista de mutantes del ejercicio 130
Crear una copa de la colección de mutantes que nos gustan modificando los siguientes valores:
Prof. Charles Francis Xavier
James "Logan" Howlett
Jean Elaine Grey
Agregar <3 a cada mutante que nos gusta
Ejemeplo: <3 Jean Elaine Grey
Mostrar en consola usando console.table(valor):
Lista original de mutantes
Lista modificada de mutantes */

const mutantes = ["Prof. Charles Francis Xavier", "Scott Summers", "Dr. Henry Philip \"Hank\" McCoy", "Jean Elaine Grey", "Calvin Montgomery Rankin", "Kevin Sydney", "Lorna Sally Dane", "Alexander Summers", "Suzanne Chan", "James \"Logan\" Howlett", "Ororo Monroe"];

/* Mi forma:

let mutantesNuevos = Array.from(mutantes);

mutantesNuevos[0] += " <3";
mutantesNuevos[9] += " <3";
mutantesNuevos[3] += " <3";

console.table(mutantes);
console.table(mutantesNuevos); 

*/

// Forma del profe:

const listaModificada = mutantes.map(function(mutante) {
    if (
        mutante === "Prof. Charles Francis Xavier" || 
        mutante === "James \"Logan\" Howlett" ||
        mutante === "Jean Elaine Grey"
    ) {
        return `<3 ${mutante}`;
    }

    return mutante;
});

console.table(listaModificada);