// triangulo rectangulo invertido con ciclo for

const counter = 14;
let cantAst = 14;
let mensaje = "";

for (let i = 1; i <= counter; i++) { // 1. 1 <= 14 = true. 2 <= 14 = true.
    for (cantAst; cantAst > 0; cantAst--) { // 14. 14 < 0 = true. -> 13...
        mensaje += "*";
    }
    console.log(mensaje); // **************
    mensaje = "";
    cantAst = counter - i; // 13.
}