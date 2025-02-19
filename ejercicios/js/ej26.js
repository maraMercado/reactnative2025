let curso = "React Native";
let anio = 2025;
let aula = "Google Meet";
let cantAlumnos = 27;
let profesor = "Nicolas";
let habilidad = "Programación";
let esPresencial = false;
let limiteEdad = null;
let camaraEncendida = true;
let turnoMañana = false;
let aprobado;

export function mostrarValores() {
    console.log("curso", curso);
    console.log("anio", anio);
    console.log("aula", aula);
    console.log("cantAlumnos", cantAlumnos);
    console.log("profesor", profesor);
    console.log("habilidad", habilidad);
    console.log("esPresencial", esPresencial);
    console.log("limiteEdad", limiteEdad);
    console.log("camaraEncendida", camaraEncendida);
    console.log("turnoMañana", turnoMañana);
    console.log("aprobado", aprobado);
}

export function mostrarTipos() {
    console.log("curso", typeof curso);
    console.log("anio", typeof anio);
    console.log("aula", typeof aula);
    console.log("cantAlumnos", typeof cantAlumnos);
    console.log("profesor", typeof profesor);
    console.log("habilidad", typeof habilidad);
    console.log("esPresencial", typeof esPresencial);
    console.log("limiteEdad", typeof limiteEdad);
    console.log("camaraEncendida", typeof camaraEncendida);
    console.log("turnoMañana", typeof turnoMañana);
    console.log("aprobado", typeof aprobado);
}
