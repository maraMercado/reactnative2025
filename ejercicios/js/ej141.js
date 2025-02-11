/* Crear una array de gastos para un viaje, por ejemplo 100 pesos de hotel, 1000 de viaje y 200 de comida
Sumar todos los valores de los gastos utilizando reduce
Mostrar en consola cuanto vamos a gastar en el viaje */

const gastos = [100, 200, 1000, 500, 350];

const gastoTotal = gastos.reduce(function(total, precio) {
    return total + precio;
})

console.log(`Para viajar necesitaremos $${gastoTotal} ARS`);
