/* Copiar y pegar el código del ejercicio 146
Mmodificar la función autenticarUsuario:
Sólo acepta un parámetro que se llama usuario
En lugar de utilizar los parámetros anteriores, ahora vamos a usar las propiedades username y password del objeto usuario
El resto del código debería funcionar igual que en el ejercicio anterior */

const usuario = {

    username: "batman",
    password: "Alfred1960KPO!"

};

function autenticarUsuario(nombreDeUsuario) {
    if (nombreDeUsuario === usuario.username) {
        console.log(`Usuario: ${usuario.username}`);
        console.log(`Password: ${usuario.password}`);
        return true;
    } else {
        console.log ("Usuario no autenticado");
        return false;
    }
};

autenticarUsuario("batman");