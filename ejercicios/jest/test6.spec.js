import { mostrarValores } from "../js/ej6";

const log = jest.spyOn(console, "log").mockImplementation(() => {});

describe("Test ej 6", () => {

    afterEach(() => {
        log.mockReset();
    })

    test("que muestre en pantalla", () => {
        mostrarValores();

        expect(log).toHaveBeenCalledTimes(1);
        expect(log).toHaveBeenCalledWith("Nombre: ", "Mara", " Apellido: ", "Mercado", " Edad: ", 18, " Fecha de nacimiento: ", "07/08/2006", " Dirección: ", "Bulnes 860")
    })
})