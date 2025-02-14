/* Definir un Alias (type) con el nombre de Alumno y asignar un tuple donde el primer valor es un number y el segundo un string
Crear una colección de strings con el nombre de alumnos con los siguites valores: "Nicolas", "Clara", "Manuel", "Alejandra"
Crear una función con el nombre de mostrarAlumno y que acepte un parámetro del tipo Alumno
Recorrer la colección alumnos utilizando un forEach
El callback del forEach tiene que obtener el alumno y su indice
Llamar dentro del callback a la función mostrarAlumno y pasarle el tuple con el indice y el nombre del alumno
Se debe mostrar en pantalla los siguientes datos:
ID: 0 Alumno: Nicolas
ID: 1 Alumno: Clara
ID: 2 Alumno: Manuel
ID: 3 Alumno: Alejandra */

type Alumno = [number, string];

const alumnos: Array<string> = ["Nicolas", "Clara", "Manuel", "Alejandra"];

function mostrarAlumno (input: Alumno) {
    const [id, nombre] = input; // destructuring: te va a ver un array con un index en la posic input[0] y una string en la posic input[1], hacemelo id y nombre para que sea mas legible.
    console.log(`ID: ${id} Alumno: ${nombre}`);
}

alumnos.forEach((alumno, index) => mostrarAlumno([index, alumno]));

export {};