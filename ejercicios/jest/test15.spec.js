import { interpolacion } from "../js/ej15";

console.log = jest.fn();

test("testing interpolacion con nombre 'Mara'", () => {
    interpolacion();
    expect(console.log).toHaveBeenCalledWith("El mejor alumno es: Mara");
})