import { perimT } from "../js/ej31";

test("perimetro triangulo lados 10, 20 y 5 cm", () => {
    console.log = jest.fn();

    perimT();
    expect(console.log).toHaveBeenCalledWith("El perímetro de un triángulo cuyos lados miden 10 cm, 20 cm y 5 cm es de 35 cm");
})