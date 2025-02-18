import { extraConcat } from "../js/ej14";

console.log = jest.fn();

test("Que la función devuelva los valores declarados", () => {
    extraConcat();
    expect(console.log).toHaveBeenCalledWith("Bienvenido/a Mara al curso de ECMAScript!!");
})