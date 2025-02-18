import { mostrarVariablesConcatenadas } from "../js/ej12";

console.log = jest.fn();

test("Que la función devuelva los valores declarados", () => {
    mostrarVariablesConcatenadas();
    expect(console.log).toHaveBeenCalledWith("Bienvenido/a Mara");
})

