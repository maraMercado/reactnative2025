import { crearPromesa } from "../js/ej186";

test("Primera promesa testeada, pasará?", () => {
    
    const promesa = crearPromesa("Helado");
    
    return promesa.then((msg) => {
        expect(msg).toBe("Helado");
    })
})