import { iniciales } from "../js/ej43";

test("muestra las iniciales de game of thrones en mayus", () => {
    console.log = jest.fn();

    iniciales();
    expect(console.log).toHaveBeenCalledWith("GOT");

})