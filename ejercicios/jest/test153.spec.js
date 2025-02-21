import { aritmetica } from "../js/ej153";

const log = jest.spyOn(console, "log").mockImplementation(() => {});
afterEach(() => log.mockReset());

describe("métodos del objeto aritmetica", () => {
    test("método suma", () => {
        aritmetica.suma(8, 9)
        expect(log).toHaveBeenCalledWith("8 + 9 =", 17);

        aritmetica.suma("7", 3);
        expect(log).toHaveBeenCalledWith("Por favor ingrese ambos datos del tipo númerico");
    })

    test("método resta", () => {
        aritmetica.resta(8, 9)
        expect(log).toHaveBeenCalledWith("8 - 9 =", -1);

        aritmetica.resta("7", 3);
        expect(log).toHaveBeenCalledWith("Por favor ingrese ambos datos del tipo númerico");
    })

    test("método multiplicar", () => {
        aritmetica.multiplicar(8, 9)
        expect(log).toHaveBeenCalledWith("8 * 9 =", 72);

        aritmetica.multiplicar("7", 3);
        expect(log).toHaveBeenCalledWith("Por favor ingrese ambos datos del tipo númerico");
    })

    test("método dividir", () => {
        aritmetica.dividir(10, 2)
        expect(log).toHaveBeenCalledWith("10 / 2 =", 5);

        aritmetica.dividir("7", 3);
        expect(log).toHaveBeenCalledWith("Por favor ingrese ambos datos del tipo númerico");
    })

    test("método modulo", () => {
        aritmetica.modulo(10, 2)
        expect(log).toHaveBeenCalledWith("10 % 2 =", 0);

        aritmetica.modulo("7", 3);
        expect(log).toHaveBeenCalledWith("Por favor ingrese ambos datos del tipo númerico");
    })
})