 import { crearPromesa } from "../js/ej188";

 describe("función crearPromesa muestra los segundos que pasaron", () => {
    test("pasó 1 segundo con exito", () => {
        const promesa1exito = crearPromesa(1);

        return promesa1exito.then(msg => {
            expect(msg).toBe("Pasó 1 segundo y la promesa fue exitosa.");
        })
    })

    test("pasó 1 segundo con error", () => {
        const promesa1error = crearPromesa(1, true);
        
        return promesa1error.catch(msg => {
            expect(msg).toBe("Pasó 1 segundo y la promesa no fue exitosa.");
            expect.assertions(1);
        })
    })

    test("pasaron 5 segundos con éxito", () => {
        const promesa5exito = crearPromesa(5);
  
        return promesa5exito.then(msg => {
            expect(msg).toBe("Pasaron 5 segundos y la promesa fue exitosa.");
        })
    }, 10000);

    test("pasaron 10 segundos y hubo error", () => {
        const promesa10error = crearPromesa(10, true);

        return promesa10error.catch(msg => {
            expect(msg).toBe("Pasaron 10 segundos y la promesa no fue exitosa.");
        })
    }, 15000);
 })