import { diasSemana, nombreDelDia, imprimirDia } from "../js/ej61-switch";

describe("Dos switches de los dias de semana", () => {

    let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo", null];

    const log = jest.spyOn(console, "log").mockImplementation(() => {});
    afterEach(() => log.mockReset);

    test("Por cada número se asigna una string a nombreDelDia", () => {

        let numeros = [1, 2, 3, 4, 5, 6, 7, 10];
    
        for (let i = 0; i < numeros.length; i++) {
            diasSemana(numeros[i]);
            expect(nombreDelDia).toBe(dias[i]);
        }
    
    })

    test("Que imprima el valor de nombreDelDia", () => {

        for (let i = 0; i < dias.length-1; i++) {
            imprimirDia(dias[i]);
            expect(log).toHaveBeenCalledWith(`El día seleccionado es ${dias[i]}`);
        }

        imprimirDia(null);
        expect(log).toHaveBeenCalledWith("Por favor seleccionar un número de 1 a 7");
    })

})