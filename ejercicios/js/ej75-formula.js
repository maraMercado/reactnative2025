let f = 0;
let f1 = -1;
let f2 = 1;

export function fibonacci() { 
    while (f < 100) {
    f = f1 + f2;
    f1 = f2;
    f2 = f;
    console.log(f);
}}