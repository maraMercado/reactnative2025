import { minus } from "../js/ej41";

test("muestra 'HOLA MUNDO' en minus", () => {
    console.log = jest.fn();

    minus();
    expect(console.log).toHaveBeenCalledWith("hola mundo");

})