let num1 = 0;
let num2 = 1;
let rdo;

console.log(num1);

while (num1 <= 1000) {
    rdo = num1 + num2;
    console.log(rdo);

    num1 = rdo + num2;
    console.log(num1);

    num2 = rdo + num1;
    console.log(num2);
}

/*

   0    1     1     2     3     5     8     13     21
 num1+num2 = rdo
           +     = num1
                +      = num2
                      +      = rdo
                            +     = num1
                                 +      = num2
                                     +           = rdo  
                                                             ................
                                                             
*/