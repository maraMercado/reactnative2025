import { bool3 } from "../js/ej36";

const log = jest.spyOn(console, "log").mockImplementation(() => {});

afterEach(() => log.mockReset());

test("Se muestra false, true en pantalla", () => {
        bool3();

        expect(console.log).toHaveBeenCalledTimes(2);
        expect(console.log).toHaveBeenCalledWith("La variable numero1 y numero2 tienen el mismo valor: false");
        expect(console.log).toHaveBeenCalledWith("La variable numero1 y numero2 son distintas: true");

})