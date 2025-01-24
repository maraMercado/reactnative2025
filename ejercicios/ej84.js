// 1  *
// 3  ***
// 5  *****
// 7  *******
// 9  *********
// 11 ***********
// 13 *************

let counter = 1;
let cantAsteriscos = 13;
let mensaje = "";


do {
    mensaje += "*";
    if(counter % 2 != 0) {
        console.log(mensaje);
    }
    counter++;
} while(counter <= cantAsteriscos);