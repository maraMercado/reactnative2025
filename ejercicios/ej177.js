/* Crear una función con el nombre de saludar.
Esta función no acepta ningún parámetro.
Al ejecutar la función debe saludar a todos los nombres que sean pasados.
Llamar a la función saludar con los siguientes parámetros "Nicolas", "Natalia", "Javier", "Ana". */

function saludar () {
    console.log(`Hola ${arguments[0]}`);
}

saludar("Nicolas");
saludar("Natalia");
saludar("Javier");
saludar("Ana");