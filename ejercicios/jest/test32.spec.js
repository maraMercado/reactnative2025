import { areaR } from "../js/ej32";

test("area rectangulo altura 10 base 4 cm", () => {
    console.log = jest.fn();

    areaR();
    expect(console.log).toHaveBeenCalledWith("El área de un rectángulo cuya altura es de 10 cm y la base mide 4 cm es de 40 cm; y su perímetro es de 28 cm");
})