export const inicio = 0;
export const fin = 100;

export function mostrarNumeros (inicio, fin) {

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