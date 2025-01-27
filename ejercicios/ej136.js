/* Copiar la lista de mutantes del ejercicio 130
Recorrer la lista de mutantes uno a uno (forEach)
Crear a mano un string y concatenar los nombres de Jean Elaine Grey y James "Logan" Howlett ' / ' (no usar join)
Mostrar en consola el string creado */

const mutantes = ["Prof. Charles Francis Xavier", "Scott Summers", "Dr. Henry Philip \"Hank\" McCoy", "Jean Elaine Grey", "Calvin Montgomery Rankin", "Kevin Sydney", "Lorna Sally Dane", "Alexander Summers", "Suzanne Chan", "James \"Logan\" Howlett", "Ororo Monroe"];

mutantes.forEach (function (mutante) {
    console.log(mutante)
})

const union = mutantes[3] + " / " + mutantes[mutantes.length-2];
console.log(union)