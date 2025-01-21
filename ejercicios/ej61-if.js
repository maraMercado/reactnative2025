let dia = 3;
let nombreDelDia;

if (dia === 1) {
    nombreDelDia = "Lunes";
} else if (dia === 2) {
    nombreDelDia = "Martes";
} else if (dia === 3) {
    nombreDelDia = "Miércoles";
} else if (dia === 4) {
    nombreDelDia = "Jueves";
} else if (dia === 5) {
    nombreDelDia = "Viernes";
} else if (dia === 6) {
    nombreDelDia = "Sábado";
} else if (dia === 7) {
    nombreDelDia = "Domingo";
} else {
    nombreDelDia = null;
}

if (nombreDelDia === null) {
    console.log("Por favor seleccionar un número del 1 a 7");
} else {
    console.log(`El día seleccionado es ${nombreDelDia}`);
}