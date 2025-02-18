import { mostrarValores } from "../js/ej8";

const log = jest.spyOn(console, "log").mockImplementation(() => {});

describe("Test ej 8", () => {
    
    afterEach(() => {
        log.mockReset();
    })

    test("que muestre algo en pantalla", () => {
        mostrarValores();

        expect(log).toHaveBeenCalledTimes(1);
        expect(log).toHaveBeenCalledWith("Nombre y apellido:", "Mara", "Mercado", ". Mi fecha de nacimiento es:", "07/08/2006", "y mi edad es:", 18, ". Vivo en la calle:", "Bulnes 860");
    })
})