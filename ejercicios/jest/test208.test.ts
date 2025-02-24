import { sumarNumeros } from "../ts/ej208";

describe("función sumarNumeros, suma entre el rango ingresado y devuelve string", () => {
    
    const cases = [
        {
            input: {inicio: 0, fin: 10},
            expected: "55"
        },
        {
            input: {inicio: 0, fin: 0},
            expected: "0"
        },
        {
            input: {inicio: 8, fin: 9},
            expected: "17"
        }
    ];

    for (let individualCases of cases) {
        test(`caso: inicio ${individualCases.input.inicio}, fin: ${individualCases.input.fin}`, () => {
            let resultado = sumarNumeros(individualCases.input.inicio, individualCases.input.fin);
            expect(resultado).toBe(individualCases.expected);
        })
    }
})