import { patronAst } from "../js/ej72";

const log = jest.spyOn(console, "log").mockImplementation(() => {});
afterEach(() => log.mockReset);

test("Que imprima un patrón con ciclo while", () => {
    patronAst();

    expect(log).toHaveBeenCalledTimes(14);

    for (let i = 1; i <= 14; i++) {
        expect(log).toHaveBeenCalledWith("*".repeat(i));
    }
})