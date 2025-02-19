import { perim } from "../js/ej29";

test("perimetro", () => {
    console.log = jest.fn();

    perim();
    expect(console.log).toHaveBeenCalledWith("El perímetro de un cuadrado cuyo lado mide 10 cm es igual a 40 cm");
})