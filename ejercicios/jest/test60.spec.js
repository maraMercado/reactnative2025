import { cond3 } from "../js/ej60";

describe("Mensaje según nota", () => {

    let notas = [1, 2, 3, 4];

    const log = jest.spyOn(console, "log").mockImplementation(() => {});
    afterEach(() => log.mockReset);

    test("Desaprobado", () => {
        
        notas.forEach(mark => {
            cond3(mark);
            expect(log).toHaveBeenCalledWith("El alumno no aprobó y debe hacer los ejercicios de nuevo");
        })

    })

    test("Aprobado", () => {
        notas = [6, 7, 8];

        notas.forEach(mark => {
            cond3(mark);
            expect(log).toHaveBeenCalledWith("El alumno aprobó");
        })
    })

    test("Aprobado muy bueno", () => {
        notas = [9, 10];

        notas.forEach(mark => {
            cond3(mark);
            expect(log).toHaveBeenCalledWith("El alumno aprobó y es muy bueno");
        })
    })

})