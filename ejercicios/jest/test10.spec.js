import { saludo } from "../js/ej10";

const log = jest.spyOn(console, "log").mockImplementation(() => {});

test("que el texto adecuado se muestre en pantalla", () => {
    log(saludo);
    expect(log).toHaveBeenCalledWith("ECMAScript rocks!!");
})