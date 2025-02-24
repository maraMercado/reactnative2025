import { mascota, mostrarDatosMascota } from "../ts/ej210";

const log = jest.spyOn(console, "log").mockImplementation(() => {});
afterEach(() => log.mockReset());

describe("funcion mostrarDatosMascota imprime propiedades en consola", () => {
    test("caso: input objeto mascota (tiene fecha de nac.)", () => {
        mostrarDatosMascota(mascota);
        expect(log).toHaveBeenCalledTimes(2);
        expect(log).toHaveBeenNthCalledWith(1, "La mascota se llama Blacky y tiene 9 años");
        expect(log).toHaveBeenNthCalledWith(2, "Blacky nació el 25/06/2015");
    })

    test("caso: input objeto SIN fecha de nac.", () => {
        mostrarDatosMascota({nombre: "Pepito", edad: 10});
        expect(log).toHaveBeenCalledTimes(1);
        expect(log).toHaveBeenCalledWith("La mascota se llama Pepito y tiene 10 años");
    })
})