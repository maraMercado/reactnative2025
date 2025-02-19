import { bool } from "../js/ej34";

const log = jest.spyOn(console, "log").mockImplementation(() => {});

afterEach(() => log.mockReset());

test("Se muestra true, false, true en pantalla", () => {
        bool();

        expect(console.log).toHaveBeenCalledTimes(3);
        expect(console.log).toHaveBeenCalledWith("Objetivo de ingresos: true");
        expect(console.log).toHaveBeenCalledWith("Objetivo de gastos: false");
        expect(console.log).toHaveBeenCalledWith("Bono de ganancias: true");

})
