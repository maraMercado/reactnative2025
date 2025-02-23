import { Vehiculo } from "../js/ej196";

describe("Función constructora de Vehículos", () => {
    const vehiculo1 = new Vehiculo("Peugeot", "Partner", 5, 2015, "gris");

    test("Creación de instancia Vehículo", () => {
        expect(vehiculo1).toBeInstanceOf(Vehiculo);
    })

    test("Contener todas las propiedades y métodos", () => {
        expect(Object.keys(vehiculo1)).toHaveLength(7);
        expect(vehiculo1).toHaveProperty("marca", "Peugeot");
        expect(vehiculo1).toHaveProperty("modelo", "Partner");
        expect(vehiculo1).toHaveProperty("cantidadDePuertas", 5);
        expect(vehiculo1).toHaveProperty("anio", 2015);
        expect(vehiculo1).toHaveProperty("color", "gris");
        expect(vehiculo1).toHaveProperty("toString");
        expect(vehiculo1).toHaveProperty("getColor");
    })

    test("Método toString imprime marca, modelo y año", () => {
        console.log = jest.fn();
        vehiculo1.toString();

        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith("Peugeot Partner 2015");
    })

    test("Método getColor retorna el color", () => {
        expect(vehiculo1.getColor()).toBe("gris");
    })
})