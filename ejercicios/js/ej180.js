/* Crear una función mostrarNumeros que acepte un parámetro numero.
La función mostrarNumeros debe imprimir en pantalla los números del 0 al 10.
Al llamar la función mostrarNumeros pasarle 0 como parámetro inicial.
Utiliza la recursividad para poder imprimir en pantalla los diferentes números.
Llamar a la función con otro valor inicial de 4 para mostrar de 4 a 10 en pantalla. */

function mostrarNumeros (numero) {
    
    console.log(numero);
    
    if (numero === 10) {
        return;
    } else {
        mostrarNumeros(numero+1);
    }
}

mostrarNumeros(0);
mostrarNumeros(4);