/* testear que crearpromesa cree una promesa con async o then, hacerlo mismo con la otra function, hacemos un spy en console log. probar mostrarpromesa!!! */

import { crearPromesa, mostrarPromesa } from "../js/ej189"

describe("funciones de promesas", () => {
    test("promesa que tarda 5 seg en resolver", () => {
        const resultado = crearPromesa("hola");
        return resultado.then(msg => {
            expect(msg).toBe("hola");
        })
    }, 7000)

    test("funcion mostrar promesa", () => {
        const mensaje = mostrarPromesa("Wow!! Hola");
        return mensaje.then(msg => {
            expect(msg).toBe("Wow!! Hola");
        })
    }, 7000)
})