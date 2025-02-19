import { n } from "../js/ej24";

test("que devuelva null", () => {
    console.log = jest.fn();

    n();
    expect(console.log).toHaveBeenCalledWith("nombre", null);
})