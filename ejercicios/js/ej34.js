let ingresos = 1000;
let ganancias = 600;
let impuestos = 500;

export function bool() {
    console.log(`Objetivo de ingresos: ${ingresos >= 800}`);
    console.log(`Objetivo de gastos: ${impuestos < 400}`);
    console.log(`Bono de ganancias: ${ganancias == 600}`);
}
