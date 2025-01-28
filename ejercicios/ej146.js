/* 
Copiar y pegar el código del ejercicio 145
Vamos a refactorizar el código
Crear una función que se llame autenticarUsuario
Esta función acepta 2 parámetros nombreDeUsuario y clave
Retorna un valor true si el nombreDeUsuario es batman y clave es Alfred1960KPO!
Retorna false si el nombreDeUsuario o clave son incorrectos
Si el usuario es válido usando la función autenticarUsuario entonces
Mostrar los datos del usuario
Sino
Mostrar en consola el siguiente error: Usuario no autenticado
*/

const usuario = {

    username: "batman",
    password: "Alfred1960KPO!"

};

function autenticarUsuario(nombreDeUsuario, clave) {
    if (nombreDeUsuario === usuario.username && usuario.password === clave) {
        console.log(`Usuario: ${usuario.username}`);
        console.log(`Password: ${usuario.password}`);
        return true;
    } else {
        console.log ("Usuario no autenticado");
        return false;
    }
};

autenticarUsuario("batman", "Alfred1960KPO!");