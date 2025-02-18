import { segundos, ej184 } from "../js/ej184";

jest.useFakeTimers();

const log = jest.spyOn(console, "log").mockImplementation(() => {});

test("Que el timer devuelva 'pasaron 3 segundos' a los 3 segundos", () => {
    
    ej184();

    jest.advanceTimersByTime(segundos);

    expect(log).toHaveBeenCalledWith("Pasaron 3 segundos");

});