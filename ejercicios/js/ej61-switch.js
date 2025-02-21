let dia = 1;
export let nombreDelDia;

export function diasSemana(dia) {
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
}

export function imprimirDia(stringDia) {
    switch (stringDia) {
    case null:
        console.log("Por favor seleccionar un número de 1 a 7");
        break;
    default:
        console.log(`El día seleccionado es ${stringDia}`);
}}

