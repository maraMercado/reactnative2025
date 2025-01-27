/* Copiar la lista de mutantes del ejercicio 130
Listar los mutantes uno a uno (forEach)
Mostrar en consola la posición y nombre de cada mutante */

const mutantes = ["Prof. Charles Francis Xavier", "Scott Summers", "Dr. Henry Philip \"Hank\" McCoy", "Jean Elaine Grey", "Calvin Montgomery Rankin", "Kevin Sydney", "Lorna Sally Dane", "Alexander Summers", "Suzanne Chan", "James \"Logan\" Howlett", "Ororo Monroe"];

mutantes.forEach (function (mutante, indice) {
    console.log(`Índice ${indice}:`, mutante);
})