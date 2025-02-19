import { mayus } from "../js/ej42";

test("muestra 'hola mundo' en mayus", () => {
    console.log = jest.fn();

    mayus();
    expect(console.log).toHaveBeenCalledWith("HOLA MUNDO");

})