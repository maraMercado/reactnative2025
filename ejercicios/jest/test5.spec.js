import { mostrarValores } from "../js/ej5";

const log = jest.spyOn(console, "log").mockImplementation(() => {});

describe("Test ej 5", () => {
    afterEach(() => {
        log.mockReset();
    });

    test ("se muestran los valores en pantalla", () => {

        mostrarValores();

        expect(log).toHaveBeenCalledTimes(1);
        expect(log).toHaveBeenCalledWith("Mara", "Mercado", 18, "7/8/2006", "Bulnes 860");
    })
})