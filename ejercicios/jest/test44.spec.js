import { usandoCharAt } from "../js/ej44";

test("muestra 'HOLA' en minus y revertido usando CharAt", () => {
    console.log = jest.fn();

    usandoCharAt();
    expect(console.log).toHaveBeenCalledWith("aloh");

})