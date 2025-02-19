let cantidadDeUsuarios = 100;
cantidadDeUsuarios += 5;
export function m1() {
    console.log(`Cantidad de usuarios: ${cantidadDeUsuarios}`);
}

export function m2() {
    cantidadDeUsuarios -= 3;
    console.log(`Cantidad de usuarios: ${cantidadDeUsuarios}`);
}

export function m3(){
    cantidadDeUsuarios *= 2;
    console.log(`Cantidad de usuarios: ${cantidadDeUsuarios}`);
}

export function m4() {
    const varones = cantidadDeUsuarios / 2;
    const mujeres = cantidadDeUsuarios / 2;
    console.log(`Cantidad de usuarios: ${cantidadDeUsuarios}, mujeres ${mujeres} y varones ${varones}`);
}