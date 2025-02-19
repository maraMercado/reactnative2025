import { concatenando } from "../js/ej40";

test("muestra 'usando el método concat'", () => {
    console.log = jest.fn();

    concatenando();
    expect(console.log).toHaveBeenCalledWith("Usando el método concat");

})