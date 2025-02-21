export let usuario = "pepe2017";
export let password = "12345";

export function condic(usuario, password) {
    if (usuario === "pepe2017" && password === "12345") {
        console.log("El usuario está autenticado y puede ver el contenido del sitio");
    } else {
        console.log("Error, no se pudo autenticar al usuario, puede intentarlo más tarde");
    }
}
