const promedioParaAprobar = 6;
let promedioDelAlumno;

promedioDelAlumno = 4;

export function bool4() {
    console.log(`El alumno tiene un promedio mayor o igual que el requerido: ${promedioDelAlumno >= promedioParaAprobar}`);

    console.log(`Al alumno le faltaron ${promedioParaAprobar - promedioDelAlumno} puntos para aprobar`);
}
