let dia = 1;
let nombreDelDia;

switch (dia) {
    case 1:
        nombreDelDia = "Lunes";
        break;
    case 2:
        nombreDelDia = "Martes";
        break;
    case 3:
        nombreDelDia = "Miércoles";
        break;
    case 4:
        nombreDelDia = "Jueves";
        break;
    case 5:
        nombreDelDia = "Viernes";
        break;
    case 6:
        nombreDelDia = "Sábado";
        break;
    case 7:
        nombreDelDia = "Domingo";
        break;
    default:
        nombreDelDia = null;
}

switch (nombreDelDia) {
    case null:
        console.log("Por favor seleccionar un número de 1 a 7");
        break;
    default:
        console.log(`El día seleccionado es ${nombreDelDia}`);
}

