/* Crear una función con el nombre de saludar que acepte los siguientes parámetros:
Un string con el nombre mensaje
Una función con el nombre despedida
La función saludar debe mostrar el mensaje en pantalla y luego llamar a la función pasada por parámetro
Llamar a la función saludar con el valor Bienvenidos a JavaScript */

function saludar (mensaje, despedida) {
    console.log(mensaje);
    despedida();
}

function chau () {
    console.log("Chau");
}

saludar("Bienvenidos a Javascript", chau);