let nota = 2;

export function cond3(mark) { 
    if (mark >= 9) {
        console.log("El alumno aprobó y es muy bueno");
    } else if (mark < 9 && mark >= 6) {
        console.log("El alumno aprobó");
    } else {
        console.log("El alumno no aprobó y debe hacer los ejercicios de nuevo");
    }
}