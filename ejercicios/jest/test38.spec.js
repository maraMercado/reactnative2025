import { strLength } from "../js/ej38";

test("la length de la string 'Mara' es de 4", () => {
    console.log = jest.fn();

    strLength();
    expect(console.log).toHaveBeenCalledWith(4);

})