import { getPokemones } from "../js/ej192";

const log = jest.spyOn(console, "log").mockImplementation(() => {});
afterEach(() => log.mockReset());

describe("try and catch funcion pokemones", () => {
    test("devolver los primeros 20 pokemones e imprimirlos", async () => {
        await getPokemones();
        expect(log).toHaveBeenCalledTimes(20);
    
        const pokemones = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate"];
    
        for (let i = 0; i < pokemones.length; i++) {
            expect(log).toHaveBeenNthCalledWith(i + 1, `* Pokemon: ${pokemones[i]}`);
        }
    })

    // simulemos que falló la conexión
    test("catch con mensaje de error", async () => {
        global.fetch = jest.fn(() => Promise.reject("API sin conexión"));

        await getPokemones();
        expect(fetch).toHaveBeenCalledWith("https://pokeapi.co/api/v2/pokemon?limit=20");
        expect(log).toHaveBeenCalledTimes(1);
        expect(log).toHaveBeenCalledWith("Ups, hubo un error...", "API sin conexión");
    })
})