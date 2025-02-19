import { usandoSlice } from "../js/ej45";

test("muestra 'Juan Roman Riquelme es el mejor 10 de la historia' haciendo Slice de otra cadena", () => {
    console.log = jest.fn();

    usandoSlice();
    expect(console.log).toHaveBeenCalledWith("Juan Roman Riquelme es el mejor 10 de la historia!!");

})