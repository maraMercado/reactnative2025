import { bool4 } from "../js/ej37";

const log = jest.spyOn(console, "log").mockImplementation(() => {});

afterEach(() => log.mockReset());

test("Se muestra false, 2 en pantalla", () => {
        bool4();

        expect(console.log).toHaveBeenCalledTimes(2);
        expect(console.log).toHaveBeenCalledWith("El alumno tiene un promedio mayor o igual que el requerido: false");
        expect(console.log).toHaveBeenCalledWith("Al alumno le faltaron 2 puntos para aprobar");

})