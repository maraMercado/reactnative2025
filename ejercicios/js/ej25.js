let nombreDeSuperHeroe = "Batman";
let nombre = "Bruce Wayne";
let vuela = false;
let maneja = true;
let vida = 78;
let trabajo;
let tiempoLibre = null;

export function mostrarValores() {
    console.log("nombreDeSuperHeroe", nombreDeSuperHeroe);
    console.log("nombre", nombre);
    console.log("vuela", vuela);
    console.log("maneja", maneja);
    console.log("vida", vida);
    console.log("trabajo", trabajo);
    console.log("tiempoLibre", tiempoLibre);
}


export function mostrarTipos() {
    console.log("nombreDeSuperHeroe", typeof nombreDeSuperHeroe);
    console.log("nombre", typeof nombre);
    console.log("vuela", typeof vuela);
    console.log("maneja", typeof maneja);
    console.log("vida", typeof vida);
    console.log("trabajo", typeof trabajo);
    console.log("tiempoLibre", typeof tiempoLibre);
}