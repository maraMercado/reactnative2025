import { b } from "../js/ej22";

const log = jest.spyOn(console, "log").mockImplementation(() => {});

afterEach(() => {
    log.mockReset();
})

test("que interpole bien", () => {
    b();

    expect(log).toHaveBeenCalledTimes(4);
    expect(log).toHaveBeenCalledWith("salir", true);
    expect(log).toHaveBeenCalledWith("casado", false);
    expect(log).toHaveBeenCalledWith("usuarioRegistrado", false);
    expect(log).toHaveBeenCalledWith("meGustaJs", true);
})