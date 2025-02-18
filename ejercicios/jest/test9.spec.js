import { mostrarNombre } from "../js/ej9";

const log = jest.spyOn(console, "log").mockImplementation(() => {});

describe("Test ej 9", () => {
    test.failing("Que muestre 'Pepita'", () => {
        mostrarNombre();

        expect(log).toHaveBeenCalledWith("Pepita");
    })
})