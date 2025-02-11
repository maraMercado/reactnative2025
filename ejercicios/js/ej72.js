/*

1        *
2        **
3        ***
4        ****
5        *****
6        ******
7        *******
8        ********
9        *********
10       **********
11       ***********
12       ************
13       *************
14       **************
               14
*/

let counter = 1;
let cantAsteriscos = 14;
let ast = "";

while (counter <= cantAsteriscos) {
    ast += "*";
    console.log(ast)
    counter++;
}