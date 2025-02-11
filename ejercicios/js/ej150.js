/*
Declarar la variable pensamientoProfundo y asignarle un objeto con las siguiente propiedades:
propiedad: nombre, valor: Pensamiento Profundo
propiedad: significadoDeLaVida, valor: una función que muestre en consola el siguiente valor: 42
La propiedad significadoDeLaVida es un método
Ejecutar el método significadoDeLaVida del objeto pensamientoProfundo y obtener la respuesta que nos cambia la vida!
*/

const pensamientoProfundo = {
    nombre: "Pensamiento Profundo",
    significadoDeLaVida: () => console.log(42),
}

pensamientoProfundo.significadoDeLaVida();