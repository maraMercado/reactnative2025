import { megaTemplate } from "../js/ej17";

test("Que imprima el template bien", () => {
    console.log = jest.fn();

    megaTemplate();
    expect(console.log).toHaveBeenCalledWith("Los tres dragones de Game of Thrones se llaman: Drogon, Rhaegal y Viserion");
})