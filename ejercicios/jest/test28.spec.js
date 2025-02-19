import { tablaDelNueve } from "../js/ej28";

const log = jest.spyOn(console, "log").mockImplementation(() => {});

afterEach(() => {
    log.mockReset();
})

test("la tabla del 9 del 0 al 10", () => {
    tablaDelNueve();

    expect(console.log).toHaveBeenCalledTimes(10);
    expect(console.log).toHaveBeenCalledWith("9 * 1 = 9");
    expect(console.log).toHaveBeenCalledWith("9 * 2 = 18");
    expect(console.log).toHaveBeenCalledWith("9 * 3 = 27");
    expect(console.log).toHaveBeenCalledWith("9 * 4 = 36");
    expect(console.log).toHaveBeenCalledWith("9 * 5 = 45");
    expect(console.log).toHaveBeenCalledWith("9 * 6 = 54");
    expect(console.log).toHaveBeenCalledWith("9 * 7 = 63");
    expect(console.log).toHaveBeenCalledWith("9 * 8 = 72");
    expect(console.log).toHaveBeenCalledWith("9 * 9 = 81");
    expect(console.log).toHaveBeenCalledWith("9 * 10 = 90");
})