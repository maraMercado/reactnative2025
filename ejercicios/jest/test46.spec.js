import { sub } from "../js/ej46";

test("Que ande bien substring", () => {
    console.log = jest.fn();

    sub();
    expect(console.log).toHaveBeenCalledWith("El usuario pepito2017 tiene 12345 como password")
})