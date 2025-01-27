/* Crear una función que se llame mostrarNumeros que acepte 2 parámetros numéricos inicio y fin
Mostrar en consola los números que van desde el inicio hasta el fin
Si el primer parámetro es más grande que el segundo la secuencia tiene que ser ascendente
En caso que el primer número sea más chico que el primero la secuencia tiene que ser descendente
Ejecutar la función utilizando los siguientes números:
inicio = 0, fin = 1000
inicio = 1000, fin = 0
inicio = 100, fin = 100
inicio = "100", fin = 300
Resolver de alguna forma los siguientes inconvenientes
Los números sean iguales
Algunos de los parámetros no son números */

function mostrarNumeros (inicio, fin) {

    if (typeof inicio === "number" && typeof fin === "number") {

        switch (true) {

            case inicio < fin:
                for (let i = inicio; i <= fin; i++) {
                    console.log(i);
                }
                break;
            
            case inicio > fin:
                for (let i = inicio; i >= fin; i--) {
                    console.log(i);
                }
                break;
            
            default: 
                    console.log("Los números son iguales");
    
        }
        
    } else {
        console.log("Por favor ingrese números");
    }
}

mostrarNumeros(0, 10);
mostrarNumeros(10, 0);
mostrarNumeros(100, 100);
mostrarNumeros("100", 300);