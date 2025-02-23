import { getPokemones } from "../js/ej191-5";

// vamos a mockear el fetch. simulamos que vamos a recibir un objeto con propiedad pokemones y valor 20. así no hacemos una llamada posta al servidor, sólo testeamos que nuestra función tenga bien el mecanismo de fetch.

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({"pokemones": 20})
    })
)

test("traer primeros 20 pokemones", async () => {
    const results = await getPokemones();

    expect(results).toEqual({"pokemones": 20});
    expect(fetch).toHaveBeenCalledTimes(1);
}, 10000)