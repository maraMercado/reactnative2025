/* Crear un array con el nombre de 5 alumnas del curso
Crear un array con el nombre de 5 alumnos del curso
Crear un array con el nombre de los alumnos y alumnas del curso
Mostrar en consola los siguiente nombres de forma individual (uno por linea):
Nombres de las alumnas (a mano utilizando índices)
Nombres de los alumnos (utilizando while)
Nombres de todos los alumnos del curso (utilizando for) */

const alumnas = ["Mara", "Catalina", "Sofía", "Stef", "Carla"];
const alumnos = ["Juan", "Carlos", "Johalvi", "Johan", "Pipe"];

const alumnosTotal = alumnas.concat(alumnos);

console.log(alumnas[0]);
console.log(alumnas[1]);
console.log(alumnas[2]);
console.log(alumnas[3]);
console.log(alumnas[4]);

let i = 0;
while (i < alumnos.length) {
    console.log(alumnos[i]);
    i++;
}

for (let c = 0; c < alumnosTotal.length; c++) {
    console.log(alumnosTotal[c]);
}

