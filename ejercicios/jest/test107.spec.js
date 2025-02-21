import { numeroMasGrande } from "../js/ej107";

const log = jest.spyOn(console, "log").mockImplementation(() => {});
afterEach(() => log.mockReset());

describe("La función retorna el número más grande", () => {
    test("input 1 > input 2", () => {
        let numeros = [[2000, 100], [3000, 0], [7895, 1], [3.5, 3.4]];

        for (let i = 0; i < numeros.length; i++) {
            numeroMasGrande(numeros[i][0], numeros[i][1]);
            expect(log).toHaveBeenCalledWith(`El número ${numeros[i][0]} es más grande que ${numeros[i][1]}`);
        }
    })

    test("input 2 > input 1", () => {
        let numeros = [[0, 56], [4, 8], [-1, 0], [8.9, 9], [2, 3]];

        for (let i = 0; i < numeros.length; i++) {
            numeroMasGrande(numeros[i][0], numeros[i][1]);
            expect(log).toHaveBeenCalledWith(`El número ${numeros[i][1]} es más grande que ${numeros[i][0]}`);
        }
    })

    test("son iguales", () => {
        let numeros = [[1, 1], [0, 0], [8, 8]];

        for (let i = 0; i < numeros.length; i++) {
            numeroMasGrande(numeros[i][0], numeros[i][1]);
            expect(log).toHaveBeenCalledWith(`Los dos números son ${numeros[i][0]}`);
        }
    })

    test("valores no number", () => {
        let inputs = [[1, null], ["a", 3], ["", true]];

        for (let i = 0; i < inputs.length; i++) {
            numeroMasGrande(inputs[i][0], inputs[i][1]);
            expect(log).toHaveBeenCalledWith("Esta función espera valores del tipo number");
        }
    })
})