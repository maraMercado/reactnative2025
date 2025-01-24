/* 
Crear una función con el nombre esElMasGrande que acepte un nombre como parámetro
Si el parámetro es Roman entonces:
Mostrar el siguiente mensaje en mayúscula: El mejor de la historia es Román
Sino
Mostrar el siguiente mensaje en minuscula: Por favor ingrese el nombre de un gran jugador
*/ 

function esElMasGrande (nombre) {

    if (nombre == "Roman") {

        const nombreMayus = nombre.toUpperCase();
        console.log(`EL MEJOR DE LA HISTORIA ES ${nombreMayus}`);

    } else {
        console.log("Por favor ingrese el nombre de un gran jugador");
    }

}

esElMasGrande("Roman");
esElMasGrande("Messi");