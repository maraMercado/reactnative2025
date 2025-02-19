import { area } from "../js/ej30";

test("area", () => {
    console.log = jest.fn();

    area();
    expect(console.log).toHaveBeenCalledWith("El área de un cuadrado cuyo lado mide 5 cm es de 25 cm");
})