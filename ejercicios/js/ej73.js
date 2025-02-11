/*

14 **************
13 *************
12 ************
11 ***********
10 **********
9  *********
8  ********
7  *******
6  ******
5  *****
4  ****
3  ***
2  **
1  *

*/

let counter = 14;
let cantAsteriscos = 14;
let ast = "";
let i = 1;

while (i <= counter) { // 1 <= 14 = true. 2 <= 14 = true. 3 <= 14 = true.
    while (cantAsteriscos > 0) { // 14,13,12,11,10,9,8,7,6,5,4,3,2,1,!0
        ast += "*"; 
        cantAsteriscos--;
    }
    console.log(ast); // ************** - *************
    ast = "";
    cantAsteriscos = counter - i; // cantAst = 14 - 1 -> 13. cantAst = 14 - 2 -> 12.
    i++; // i = 2. i = 3.
}


/* Con función recursiva + for...
function piramideInvertida (cantAst) { // Ingreso 1: number 14. Ingreso 2: number 13.
    if (cantAst < 0) {                 // false, pasa al else.  false, pasa al else.
        return mensaje;
    } else  {
        for (let i = cantAst; i >= 0; i--) {
            mensaje += "*";           // imprime 14 veces.      imprime 13 veces.
        }
        if (cantAst > 0) {
            mensaje +="\n";          // sale del ciclo y manda linea hasta que llegue la ultima
        }
        return piramideInvertida(cantAst-1); // almacena en memoria la primera linea de 14. manda parametro number 13.
    }
}

console.log(piramideInvertida(14));
*/