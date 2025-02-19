import { muchaInterpolacion } from "../js/ej21";

const log = jest.spyOn(console, "log").mockImplementation(() => {});

afterEach(() => {
    log.mockReset();
})

test("que interpole bien", () => {
    muchaInterpolacion();

    expect(log).toHaveBeenCalledTimes(3);
    expect(log).toHaveBeenCalledWith("Tengo 18 años");
    expect(log).toHaveBeenCalledWith("Mi teléfono es 1127318597");
    expect(log).toHaveBeenCalledWith("Vivo en Bulnes al 860");
})