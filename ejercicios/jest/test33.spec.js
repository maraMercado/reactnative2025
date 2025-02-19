import { m1, m2, m3, m4} from "../js/ej33";

const log = jest.spyOn(console, "log").mockImplementation(() => {});
afterEach(() => log.mockReset());

describe("modifs en cant usuarios valor inicial = 100", () => {

    test("+5 usuarios", () => {
        m1();
        expect(console.log).toHaveBeenCalledWith("Cantidad de usuarios: 105");
    });

    test("-3 usuarios", () => {
        m2();
        expect(console.log).toHaveBeenCalledWith("Cantidad de usuarios: 102");
    });

    test("*2 usuarios", () => {
        m3();
        expect(console.log).toHaveBeenCalledWith("Cantidad de usuarios: 204");
    });

    test("cant s/ genero (divido al medio)", () => {
        m4();
        expect(console.log).toHaveBeenCalledWith("Cantidad de usuarios: 204, mujeres 102 y varones 102");
    });
})