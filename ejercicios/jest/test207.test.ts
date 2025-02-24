import { Vehiculo } from "../ts/ej207";

test("Clase vehiculo", () => {
    const vehiculo1 = new Vehiculo("Ford", "Ecosport", 2013, "negro");
    expect(vehiculo1).toBeInstanceOf(Vehiculo);
})