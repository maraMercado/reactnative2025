/* Crear una función autenticarUsuario que acepte 2 parámetros usuario y password
La función retorna un valor verdadero sólo si se cumple con las siguiente validaciones:
Usuarios y passwords válidos:
nacho, Nerd1979
pedro, Batman0217
marta, Madre2312
El programa debe mostrar el siguiente mensaje si el usuario y password son válidos:
Bienvenido ${usuario}, te estabamos esperando
Sino
Por favor ingrese credenciales válidas
Utilizar la función autenticarUsuario para validar el usuario, intentar con distintos usuarios y passwords incluídos los que deberían funcionar bien */

/* --------------- Forma 1: switch --------------------

function autenticarUsuario (usuario, password) {

        switch (true) {

            case usuario === "nacho" && password === "Nerd1979":
            console.log(`Bienvenido ${usuario}, te estábamos esperando`);
            break;

            case usuario === "pedro" && password === "Batman0217":
            console.log(`Bienvenido ${usuario}, te estábamos esperando`);
            break;

            case usuario === "marta" && password === "Madre2312":
            console.log(`Bienvenida ${usuario}, te estábamos esperando`);
            break;
            
            default: 
            console.log("Por favor ingrese credenciales válidas");
            break;

        }
} */

// ------------------ Forma 2: if ------------------

function autenticarUsuario (usuario, password) {

    if (usuario === "nacho" && password === "Nerd1979" || usuario === "pedro" && password === "Batman0217" || usuario === "marta" && password === "Madre2312") {
        console.log(`Bienvenid@ ${usuario}, te estábamos esperando`);
        return true;
    } else { 
        console.log("Por favor ingrese credenciales válidas");
        return false;
    }
}

autenticarUsuario("marta", "Madre2312");