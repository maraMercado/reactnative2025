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
   1
*/

let counter = 14;
let cantAsteriscos = 14;
let i = 1;
let mensaje = "";

while (i <= counter) {
   do {
      mensaje +="*";
      cantAsteriscos--;
   } while (cantAsteriscos > 0);
   console.log(mensaje);
   mensaje = "";
   cantAsteriscos = counter - i; // cantAst = 13.
   i++;
}
