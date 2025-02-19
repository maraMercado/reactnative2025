import { bool2 } from "../js/ej35";

const log = jest.spyOn(console, "log").mockImplementation(() => {});

afterEach(() => log.mockReset());

test("Se muestra true, false en pantalla", () => {
        bool2();

        expect(console.log).toHaveBeenCalledTimes(2);
        expect(console.log).toHaveBeenCalledWith("El número ingresado por el cliente es correcto: true");
        expect(console.log).toHaveBeenCalledWith("El cliente ingresó un número de cliente válido: false");

})