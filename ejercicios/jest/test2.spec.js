import Variables from "../js/ej2";

const { nombre, apellido, fechaDeNacimiento, direccion } = Variables;

describe("Test ej 2", () => {
    test("Las variables tienen cierto valor", () => {
       
        expect(nombre).toBe("Mara");
        expect(apellido).toBe("Mercado");
        expect(fechaDeNacimiento).toBe("07/08/2006");
        expect(direccion).toBe("Bulnes 860");
      });
});