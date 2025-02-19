import { interpolacion } from "../js/ej27";

const log = jest.spyOn(console, "log").mockImplementation(() => {});

afterEach(() => {
    log.mockReset();
});

test("que funcione la interpolación", () => {
    interpolacion();

    expect(console.log).toHaveBeenCalledTimes(5);
    expect(console.log).toHaveBeenCalledWith("Sumo 7 + 4 y el resultado es 11");
    expect(console.log).toHaveBeenCalledWith("Resto 7 - 4 y el resultado es 3");
    expect(console.log).toHaveBeenCalledWith("Multiplico 7 * 4 y el resultado es 28");
    expect(console.log).toHaveBeenCalledWith(`Divido 7 / 4 y el resultado es ${7/4}`);
    expect(console.log).toHaveBeenCalledWith("Hago el mòdulo de 7 % 4 y el resultado es 3");
})