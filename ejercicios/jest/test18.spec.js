import { probandoComas } from "../js/ej18";

test("Que las comillas se impriman bien", () => {
    console.log = jest.fn();

    probandoComas();
    expect(console.log).toHaveBeenCalledWith("Gianu's es el \"mejor\" local");
})