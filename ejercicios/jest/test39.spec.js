import { masLength } from "../js/ej39";

const log = jest.spyOn(console, "log").mockImplementation(() => {});

afterEach(() => log.mockReset());

test("Se muestra Mara, 4 (length) y Mercado, (7) en pantalla", () => {
        masLength();

        expect(console.log).toHaveBeenCalledTimes(2);
        expect(console.log).toHaveBeenCalledWith("Mi nombre es Mara y tiene 4 letras.");
        expect(console.log).toHaveBeenCalledWith("Mi apellido es Mercado y tiene 7 letras.");

})