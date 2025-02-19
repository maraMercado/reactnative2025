import { mostrarTipos, mostrarValores } from "../js/ej25";

const log = jest.spyOn(console, "log").mockImplementation(() => {});

afterEach(() => {
    log.mockReset();
})

describe("Testeamos que se muestren en pantalla valor y tipo", () => {

    test("Valor", () => {
        mostrarValores();

        expect(console.log).toHaveBeenCalledTimes(7);
        expect(console.log).toHaveBeenCalledWith("nombreDeSuperHeroe", "Batman");
        expect(console.log).toHaveBeenCalledWith("nombre", "Bruce Wayne");
        expect(console.log).toHaveBeenCalledWith("vuela", false);
        expect(console.log).toHaveBeenCalledWith("maneja", true);
        expect(console.log).toHaveBeenCalledWith("vida", 78);
        expect(console.log).toHaveBeenCalledWith("trabajo", undefined);
        expect(console.log).toHaveBeenCalledWith("tiempoLibre", null);
    })

    test("Tipo", () => {
        mostrarTipos();

        expect(console.log).toHaveBeenCalledTimes(7);
        expect(console.log).toHaveBeenCalledWith("nombreDeSuperHeroe", "string");
        expect(console.log).toHaveBeenCalledWith("nombre", "string");
        expect(console.log).toHaveBeenCalledWith("vuela", "boolean");
        expect(console.log).toHaveBeenCalledWith("maneja", "boolean");
        expect(console.log).toHaveBeenCalledWith("vida", "number");
        expect(console.log).toHaveBeenCalledWith("trabajo", "undefined");
        expect(console.log).toHaveBeenCalledWith("tiempoLibre", "object");
    })
})