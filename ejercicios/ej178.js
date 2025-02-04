/* Crear una función con el nombre cantidadDeCaracteres.
Esta función acepta un parámetro con el nombre de texto.
Al ejecutar la función cantidadDeCaracteres imprime en pantalla la cantidad de caracteres que tiene texto.
Esta función no debe tirar ningún error.
Llamar esta función con los siguientes valores:
"perro"
""
undefined */

function cantidadDeCaracteres (texto = []) {
    console.log(texto.length);
}

cantidadDeCaracteres("perro");
cantidadDeCaracteres("");
cantidadDeCaracteres(undefined);