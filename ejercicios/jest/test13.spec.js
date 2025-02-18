import { masConcatenaciones } from "../js/ej13";

console.log = jest.fn();

test("Que la función devuelva los valores declarados", () => {
    masConcatenaciones();
    expect(console.log).toHaveBeenCalledWith("Bienvenido/a Mara al curso de ECMAScript!!");
})