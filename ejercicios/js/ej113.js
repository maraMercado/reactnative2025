/* Crear la función obtenerPerimetroRectangulo que acepta 2 parámetros base y altura
Si la base y altura son iguales calcular el perímetro de un cuadrado
Si la base y altura son distintas calcular el perímetro de un rectángulo
La función retorna el perímetro
Mostrar en consola un mensaje del tipo: El perímetro es ${perimetro}
Si el perímetro es mayor a 100 entonces:
Mostrar el siguiente mensaje en consola: El perímetro es muy grande
Sino
Mostrar el siguiente mensaje en consola: Este perímetro no es muy grande
Ejecutar y validar esta función con distintos valores numéricos */

function obtenerPerimetroRectangulo (b, h) {
    
    const perimetro = b * h;
    console.log(`El perímetro es: ${perimetro}`);

    if (perimetro > 100) {
        console.log("El perímetro es muy grande.");
    } else {
        console.log("El perímetro no es muy grande.");
    }

    return perimetro
    
}

obtenerPerimetroRectangulo(100, 2);