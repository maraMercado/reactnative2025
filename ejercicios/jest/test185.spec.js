import { intervalo, contador } from "../js/ej185";

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

const log = jest.spyOn(console, "log").mockImplementation(() => {});
afterEach(() => log.mockReset());

describe("se imprime un * por cada segundo, formando un patron", () => {
    test("valor inicial del contador = *", () => {
        expect(contador).toBe("*");
    })

    test("pasó 1 segundo", () => {
        intervalo(); // iniciamos el intervalo
        jest.advanceTimersByTime(1000); // simulamos que pasó 1 segundo

        expect(contador).toBe("**");
        expect(log).toHaveBeenCalledTimes(1);
        expect(log).toHaveBeenCalledWith("*");

        jest.clearAllTimers(); // limpiamos el intervalo
    })

    test("pasaron 5 segundos", () => {
        intervalo();
        jest.advanceTimersByTime(5000);
        expect(contador).toBe("*******");

        expect(log).toHaveBeenCalledTimes(5);

        // for (let i = 0; i < 5; i++) {
        //     expect(log).toHaveBeenNthCalledWith(i, "*".repeat(i));
        // }
        expect(log).toHaveBeenNthCalledWith(1, "**");

        jest.clearAllTimers();
    })
})