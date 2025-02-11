/* Copiar la lista de mutantes del ejercicio 130
Si James "Logan" Howlett Y Prof. Charles Francis Xavier están en la lista de mutantes entonces:
Mostrar: Amamos a los X-men
Sino
Mostrar: Los X-men apestan
Comentar James "Logan" Howlett de la lista de mutantes y volver a ejecturar */

const mutantes = ["Prof. Charles Francis Xavier", "Scott Summers", "Dr. Henry Philip \"Hank\" McCoy", "Jean Elaine Grey", "Calvin Montgomery Rankin", "Kevin Sydney", "Lorna Sally Dane", "Alexander Summers", "Suzanne Chan", "James \"Logan\" Howlett", "Ororo Monroe"];

if (mutantes.indexOf("James \"Logan\" Howlett") !== -1 && mutantes.indexOf("Prof. Charles Francis Xavier") !== -1) {
    console.log("Amamos a los X-men");
} else {
    console.log("Los X-men apestan");
}