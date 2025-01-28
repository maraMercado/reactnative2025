/* 

#
##
###
####
.....

*/

var piramide = "";

function generarPiramide (simbolo, n) {

    for (let i = 0; i < n; i++) {
        piramide = piramide + simbolo;

        console.log(piramide)
    }

    return piramide; 

}

generarPiramide("#", 4);

