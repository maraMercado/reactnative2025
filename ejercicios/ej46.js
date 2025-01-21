let usuarioYPassword = "pepito2017,12345";

let nombreDeUsuario = usuarioYPassword.substring(0, 10);
let password = usuarioYPassword.substring(11, usuarioYPassword.length);

console.log(`El usuario ${nombreDeUsuario} tiene ${password} como password`);