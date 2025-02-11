/* Crear una función con el nombre de saludar.
Esta función no acepta ningún parámetro.
Al ejecutar la función debe saludar a todos los nombres que sean pasados.
Llamar a la función saludar con los siguientes parámetros "Nicolas", "Natalia", "Javier", "Ana". */

function saludar () {
    
    const propiedades = Object.keys(arguments);

    propiedades.forEach((propiedad) => console.log("Hola", arguments[propiedad]))
    
}

saludar("Nicolas", "Natalia", "Javier", "Ana");