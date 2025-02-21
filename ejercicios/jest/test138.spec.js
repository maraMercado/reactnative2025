import { listaModificada } from "../js/ej138";

describe("agregar corazones a 3 mutantes", () => {
    test("prof. charles francis wavier", () => {
        expect(listaModificada[0][0]).toBe("<");
        expect(listaModificada[0][1]).toBe("3");
    })

    test("jean elaine grey", () => {
        expect(listaModificada[3][0]).toBe("<");
        expect(listaModificada[3][1]).toBe("3");
    })

    test("james \"logan\" howlett", () => {
        expect(listaModificada[9][0]).toBe("<");
        expect(listaModificada[9][1]).toBe("3");
    })
})
