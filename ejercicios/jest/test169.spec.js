import { obtenerFuncion } from "../js/ej169";

test("se declara una funcion dentro de otra y se ejecuta al llamar a la func padre", () => {
    console.log = jest.fn();
    obtenerFuncion();
    expect(console.log).toHaveBeenCalledWith("Yo <3 JavaScript");
})