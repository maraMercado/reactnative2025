import { fibonacci } from "../js/ej75-formula";

const log = jest.spyOn(console, "log").mockImplementation(() => {});
afterEach(() => log.mockReset());

test("fibonacci", () => {

    fibonacci();
    expect(log).toHaveBeenCalledTimes(13);
    expect(log).toHaveBeenLastCalledWith(144);
})