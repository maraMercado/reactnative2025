import { jugador } from "../js/ej154";

const log = jest.spyOn(console, "log").mockImplementation(() => {});
afterEach(() => log.mockReset());

describe("funcion jugador", () => {

    test("nombre inicial = null", () => {
        expect(jugador.nombre).toBeNull();
    })

    test("setear nombre", () => {
        jugador.nombre = "pepito";
        expect(jugador).toHaveProperty("nombre", "pepito");
    })

    test("metodo perder energia", () => {
        jugador.perderEnergia(30);
        expect(jugador).toHaveProperty("energia", 70);
        expect(log).toHaveBeenCalledWith("El jugador 'pepito' recibió 30 puntos de daño! Ahora su energía es:", 
        70)
    })

    test("metodo recuperar energia", () => {
        jugador.recuperarEnergia(50);
        expect(jugador).toHaveProperty("energia", 100);
        expect(log).toHaveBeenCalledWith("Energía al máximo!:", 100);
    })

    test("metodo perder vida", () => {
        jugador.perderVida(2);
        expect(jugador).toHaveProperty("vidas", 1);
        expect(log).toHaveBeenCalledWith("El jugador 'pepito' recibió 2 puntos de daño fatal! Ahora tiene:", 1, "vidas.");
    })

    test("metodo recuperar vida", () => {
        jugador.recuperarVida(105);
        expect(jugador).toHaveProperty("vidas", 99);
        expect(log).toHaveBeenCalledWith("Tienes la vida al máximo! Tu vida es:", 99);
    })  

    test("game over, fuera de energía", () => {
        jugador.perderEnergia(200);
        expect(jugador).toHaveProperty("energia", -100);
        expect(log).toHaveBeenCalledWith("Game over! Tu energía actual no está permitida: ", -100);
    })

    test("recuperar energia en game over", () => {
        jugador.recuperarEnergia(500);
        expect(jugador).toHaveProperty("energia", -100);
        expect(log).toHaveBeenCalledWith("No puedes recuperar energía negativa...");
    })

    test("perder vidas en game over", () => {
        jugador.perderVida(1);
        expect(jugador).toHaveProperty("vidas", 98);
        expect(log).toHaveBeenCalledWith("Ya perdiste!");
    })

    test("recuperar vidas en game over", () => {
        jugador.recuperarVida(200);
        expect(jugador).toHaveProperty("vidas", 98);
        expect(log).toHaveBeenCalledWith("Ya perdiste!");
    })
})