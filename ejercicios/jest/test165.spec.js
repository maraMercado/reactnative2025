import { numeros, map, multiplicarPorDos } from "../js/ej165";

describe("creamos nuestro propio metodo map", () => {
    test("que ande la funcion multiplicar por dos", () => {
        let array = [8, 0, -3, 6];

        for (let i = 0; i < array.length; i++) {
            expect(multiplicarPorDos(array[i])).toBe(array[i] * 2);
        }
    })

    test("que ande la funcion map con parametro numeros del 1 al 10 y funcion multip x 2", () => {
        let resultado = map(numeros, multiplicarPorDos);
        expect(resultado).toStrictEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
    })
})