import Variables from "../js/ej4";

const { nombre, apellido, edad, fechaDeNacimiento, direccion } = Variables;

describe("Test ej 4", () => {
    test("las variables tienen cierto valor", () => {

        expect(nombre).toBe("Mara");
        expect(apellido).toBe("Mercado");
        expect(edad).toBe(18);
        expect(fechaDeNacimiento).toBe("7/8/2006");
        expect(direccion).toBe("Bulnes 860");
    })
})