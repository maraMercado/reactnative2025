import { concat } from "../js/ej16";

console.log = jest.fn();

test("testing concat con nombre 'Mara'", () => {
    concat();
    expect(console.log).toHaveBeenCalledWith("El mejor alumno es: Mara");
})