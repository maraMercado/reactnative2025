const numero1 = 7;
const numero2 = 4;

const rdoSum = numero1 + numero2;
const rdoRes = numero1 - numero2;
const rdoMul = numero1 * numero2;
const rdoDiv = numero1 / numero2;
const rdoMod = numero1 % numero2;

export function interpolacion() {
    console.log(`Sumo ${numero1} + ${numero2} y el resultado es ${rdoSum}`);
    console.log(`Resto ${numero1} - ${numero2} y el resultado es ${rdoRes}`);
    console.log(`Multiplico ${numero1} * ${numero2} y el resultado es ${rdoMul}`);
    console.log(`Divido ${numero1} / ${numero2} y el resultado es ${rdoDiv}`);
    console.log(`Hago el mòdulo de ${numero1} % ${numero2} y el resultado es ${rdoMod}`);
}

