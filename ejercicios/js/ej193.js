/* Crear la colección dias con los siguientes valores Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo.
Usando destructuring definir las variables lunes, miercoles y viernes y asignarle los valores que le corresponde a la colección dias.
Utizar console.log en las variables lunes, miercoles y viernes.
console.log(lunes);
console.log(miercoles);
console.log(viernes);
Mostrar en pantalla los valores de las variables.
Lunes
Miercoles
Viernes */

const DIAS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

const [ lunes, , miercoles, , viernes ] = DIAS;

console.log(lunes);
console.log(miercoles);
console.log(viernes);