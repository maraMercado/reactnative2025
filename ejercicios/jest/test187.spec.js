import { crearPromesa } from "../js/ej187";

describe("función creadora de promesa exitosa y promesa con error", () => {
    test("promesa exitosa devuelve 'Cumplió'", () => {
        let promesaExitosa = crearPromesa();

        return promesaExitosa.then((msgExito) => {
            expect(msgExito).toBe("Cumplió");
        })
    })

    test("promesa fallida devuelve 'No cumplió'", () => {
        let promesaFallida = crearPromesa(true);

        return promesaFallida.catch((msgError) => {
            expect(msgError).toBe("No cumplió");
        })
    })
})