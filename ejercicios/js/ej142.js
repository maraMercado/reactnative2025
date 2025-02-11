/* Copiar la lista de mutantes del ejercicio 130
Crear un string con los nombres de todos los mutantes utilizando reduce y unidos con coma
Mostrar en consola el nuevo string creado
Buscar como conseguir el ínidice en reduce como para saber si el último valor necesita coma o no */

const mutantes = ["Prof. Charles Francis Xavier", "Scott Summers", "Dr. Henry Philip \"Hank\" McCoy", "Jean Elaine Grey", "Calvin Montgomery Rankin", "Kevin Sydney", "Lorna Sally Dane", "Alexander Summers", "Suzanne Chan", "James \"Logan\" Howlett", "Ororo Monroe"];

const mutantesStr = mutantes.reduce (function (str, mutante) {
    return str = str + ", " + mutante.toString();
})

console.log(mutantesStr);