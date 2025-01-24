/* Crear una función con el nombre invertirTexto que acepta un texto como parámetro
Mostrar en consola el texto invertido
Casos de uso:
Si se ejecuta la función con el valor hola se espera que la función retorne aloh */

function invertirTexto (texto) {

    const cantChars = texto.length+1;
    let textoInvertido = "";

    for (let i = cantChars; i >= 0; i--) {
       textoInvertido += texto.charAt(i);
    }

    console.log(textoInvertido);

}

invertirTexto("hola");
invertirTexto("blacky");