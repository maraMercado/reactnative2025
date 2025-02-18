import { mostrarEnPantalla } from "../js/ej11";

console.log = jest.fn();

test("Que la función muestre el texto indicado en pantalla", () => {
    mostrarEnPantalla();
    expect(console.log).toHaveBeenCalledWith("Me gusta mucho ECMAScript");
})