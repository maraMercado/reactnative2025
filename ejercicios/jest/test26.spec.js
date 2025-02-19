import { mostrarTipos, mostrarValores } from "../js/ej26";

const log = jest.spyOn(console, "log").mockImplementation(() => {});

afterEach(() => {
    log.mockReset();
})

describe("Testeamos que se muestren en pantalla valor y tipo", () => {

    test("Valor", () => {
        mostrarValores();

        expect(console.log).toHaveBeenCalledTimes(11);
        expect(console.log).toHaveBeenCalledWith("curso", "React Native");
        expect(console.log).toHaveBeenCalledWith("anio", 2025);
        expect(console.log).toHaveBeenCalledWith("aula", "Google Meet");
        expect(console.log).toHaveBeenCalledWith("cantAlumnos", 27);
        expect(console.log).toHaveBeenCalledWith("profesor", "Nicolas");
        expect(console.log).toHaveBeenCalledWith("habilidad", "Programación");
        expect(console.log).toHaveBeenCalledWith("esPresencial", false);
        expect(console.log).toHaveBeenCalledWith("limiteEdad", null);
        expect(console.log).toHaveBeenCalledWith("camaraEncendida", true);
        expect(console.log).toHaveBeenCalledWith("turnoMañana", false);
        expect(console.log).toHaveBeenCalledWith("aprobado", undefined);
    })

    test("Tipo", () => {
        mostrarTipos();

        expect(console.log).toHaveBeenCalledTimes(11);
        expect(console.log).toHaveBeenCalledWith("curso", "string");
        expect(console.log).toHaveBeenCalledWith("anio", "number");
        expect(console.log).toHaveBeenCalledWith("aula", "string");
        expect(console.log).toHaveBeenCalledWith("cantAlumnos", "number");
        expect(console.log).toHaveBeenCalledWith("profesor", "string");
        expect(console.log).toHaveBeenCalledWith("habilidad", "string");
        expect(console.log).toHaveBeenCalledWith("esPresencial", "boolean");
        expect(console.log).toHaveBeenCalledWith("limiteEdad", "object");
        expect(console.log).toHaveBeenCalledWith("camaraEncendida", "boolean");
        expect(console.log).toHaveBeenCalledWith("turnoMañana", "boolean");
        expect(console.log).toHaveBeenCalledWith("aprobado", "undefined");
    })
})