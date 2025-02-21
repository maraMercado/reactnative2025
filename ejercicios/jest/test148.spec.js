import { recorrerObj } from "../js/ej148";

const log = jest.spyOn(console, "log").mockImplementation(() => {});
afterEach(() => log.mockReset());

test("Que se muestren todas las props", () => {
    recorrerObj();
    expect(log).toHaveBeenCalledTimes(4);
    expect(log).toHaveBeenNthCalledWith(1, "Propiedad nombre: Batman");
    expect(log).toHaveBeenNthCalledWith(2, "Propiedad nombreSecreto: Bruce");
    expect(log).toHaveBeenNthCalledWith(3, "Propiedad ayudantes: Robin,Alfred,Gordon");
    expect(log).toHaveBeenNthCalledWith(4, "Propiedad fuerza: 70");
})