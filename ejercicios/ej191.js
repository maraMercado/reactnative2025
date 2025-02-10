/* */

const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon";

fetch(POKE_API_URL)
  .then((response) => {
    return response.json();
  })
  .then((allPokemon) => console.log(allPokemon));