import { a } from "../js/ej20";

test("que imprima bien", () => {
    console.log = jest.fn();

    a();
    expect(console.log).toHaveBeenCalledWith("17/1/2025");
})