import { un } from "../js/ej23";

test("que devuelva undefined", () => {
    console.log = jest.fn();

    un();
    expect(console.log).toHaveBeenCalledWith("nombre", undefined);
})