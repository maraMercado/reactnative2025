/* Copiar y pegar el código del ejercicio 157
Refactorizar el código:
Crear una función para ordenar los juegos según precio
Esta función tiene acepta un parámetro que es un string con los siguientes posibles valores: 'ASC' o 'DESC'
Si el parámetro es 'ASC' ordena los productos de manera ascendente
Si el parámetro es 'DESC' ordena los productos de manera descendente
Por defecto mostramos los productos de manera descendente
Listar los productos de la siguiente manera:
Ordenados por precio ascendente
Ordenados por precio descendente
Filtrar por la localidad Capitál Federal ordenados de manera descendente
AYUDA: SORT ASC & DESC */

const juegos = [
    {
        nombre: "Crash Bandicoot N. Sane Trilogy Juego Ps4 Fisico Sellado",
        precio: 1060,
        cantidadVendida: 276,
        localidad: "Capital Federal",
    },
    {
        nombre: "Lego Marvel Super Heroes",
        precio: 700,
        cantidadVendida: 48,
        localidad: "Capital Federal"
    },
    {
        nombre: "Gta V Ps4 Físico",
        precio: 1449,
        cantidadVendida: 82,
        localidad: "Santa Fe"
    },
    {
        nombre: "Mortal Kombat Xl Ps4 Original Fisico Sellado Nuevo",
        precio: 1190,
        cantidadVendida: 348,
        localidad: "Capital Federal"
    },
    {
        nombre: "Gta V Ps4 Fisico Grand Theft Auto V Gta5 Nuevo Sellado",
        precio: 1250,
        cantidadVendida: 445,
        localidad: "Buenos Aires"
    },
    {
        nombre: "Fifa 2017 Juego Físico Play 4 Nuevo!!!!!!",
        precio: 890,
        cantidadVendida: 182,
        localidad: "Capital Federal"
    },
    {
        nombre: "Uncharted 4 Ps4 Fisico El Desenlace Del Ladrón Playstation 4",
        precio: 950,
        cantidadVendida: 517,
        localidad: "Capital Federal"
    },
    {
        nombre: "Mortal Kombat Xl Ps4 Cd Fisico Sellado Original !!!",
        precio: 940,
        cantidadVendida: 275,
        localidad: "Capital Federal"
    },
    {
        nombre: "Need For Speed Ps4 Físico Nuevo Sellado Playstation",
        precio: 790,
        cantidadVendida: 89,
        localidad: "Capital Federal"
    },
    {
        nombre: "Lego Batman",
        precio: 1000,
        cantidadVendida: 39,
        localidad: "Capital Federal"
    },
    {
        nombre: "Fifa 17 Ps4 Original Fisico 2017",
        precio: 1290,
        cantidadVendida: 310,
        localidad: "Capital Federal"
    },
    {
        nombre: "Resident Evil 7 Ps4 Biohazard Físico",
        precio: 1390,
        cantidadVendida: 154,
        localidad: "Capital Federal"
    },
    {
        nombre: "Dragon Ball Xv Xenoverse 2 Ps4 Fisico Nuevo Dbxv2 Alclick",
        precio: 1390,
        cantidadVendida: 241,
        localidad: "Capital Federal"
    }
]

const zona = 1;
let localidadFiltrada;

switch (zona) {
    case 1: 
    default:
        localidadFiltrada = "Capital Federal";
        break;
    case 2:
        localidadFiltrada = "Santa Fe";
        break;
    case 3:
        localidadFiltrada = "Buenos Aires";
        break;
}

function agregarPunto (precio) {
    precio = precio.toString();
    let precioConPunto = precio.charAt(0) + "." + precio.slice(1);
    return precioConPunto;
}

function ordenarPorPrecio (sortBy) {
    if (sortBy === "ASC") {
        juegos.sort(function (a, b) {
            return parseFloat(a.precio) - parseFloat(b.precio);
        })
    } else if (sortBy === "DESC" || typeof sortBy === "undefined") {
        juegos.sort(function (a, b) {
            return parseFloat(b.precio) - parseFloat(a.precio);
        })
    }
}

ordenarPorPrecio();

for (let i = 0; i < juegos.length; i++) {
    juegos[i].imprimirEnPantalla = function () {
        console.log(`${this.nombre}`);
        if (juegos[i].precio >= 1000) {
            console.log("$", agregarPunto(juegos[i].precio));
        } else {
            console.log("$", juegos[i].precio);
        }
        console.log(`${this.cantidadVendida} vendidos`);
        console.log(`${this.localidad} \n`);
    }
}

for (let i = 0; i < juegos.length; i++) {
    if (juegos[i].localidad === localidadFiltrada) {
        juegos[i].imprimirEnPantalla();
    }
}