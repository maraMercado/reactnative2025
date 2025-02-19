import { dosTextos } from "../js/ej19";

const log = jest.spyOn(console, "log").mockImplementation(() => {});

afterEach(() => {
        log.mockReset();
})

test("Que salgan bien las comillas", () => {
    dosTextos();
    expect(console.log).toHaveBeenCalledTimes(2);
    expect(console.log).toHaveBeenCalledWith('Este texto tiene "comillas dobles"');
    expect(console.log).toHaveBeenCalledWith("Este texto tiene 'comillas simples'");
})