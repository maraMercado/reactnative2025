import { condic, usuario, password } from "../js/ej54";

describe("Condicionales para autenticación", () => {

    const log = jest.spyOn(console, "log").mockImplementation(() => {});
    afterEach(() => log.mockReset);

    test("El usuario y contraseña son correctos", () => {
        condic(usuario, password);

        expect(console.log).toHaveBeenCalledWith("El usuario está autenticado y puede ver el contenido del sitio");
    })

    test("Mensaje de error, datos incorrectos", () => {
        condic("Marta", 35);

        expect(console.log).toHaveBeenCalledWith("Error, no se pudo autenticar al usuario, puede intentarlo más tarde");
    })
})