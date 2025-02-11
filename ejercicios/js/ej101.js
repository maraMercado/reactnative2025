/* Declarar una función que muestre los siguientes datos en consola:
Tu Nombre
Edad
Teléfono
Calle
Altura
Código postal
Casado true/false */

function misDatos(nombre, edad, tel, calle, alt, cp, casado) {
    console.log(`Mi nombre es ${nombre}\nTengo ${edad} años\nMi teléfono es ${tel}\nVivo en la calle ${calle} al ${alt}, con el código postal ${cp}\nY mi estado civil de casad@ es: ${casado}`);
}

misDatos("Mara", 18, 1127318597, "Bulnes", 860, 1704, false);