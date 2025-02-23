/* Utilizando fetch intenta obtener los datos de la API https://pokeapi.co/api/v2/pokemon.
Utiliza Promises para manejar el resultado de fetch.
Parsea el JSON y muestra en pantalla los nombres de los primeros 20 Pokemones.
Mostrar los nombres con la primer letra en mayúscula (repaso de charAt, toUpperCase, substring).
Manejar tanto el caso de éxito como el de error al hacer el pedido de Pokemones.
En caso de Error mostrar el error en pantalla (Para probar pueden desconectar internet por un segundo al ejecutarlo).
* Pokemon: Bulbasaur
* Pokemon: Ivysaur
* Pokemon: Venusaur
* Pokemon: Charmander
* Pokemon: Charmeleon
* Pokemon: Charizard
* Pokemon: Squirtle
* Pokemon: Wartortle
* Pokemon: Blastoise
* Pokemon: Caterpie
* Pokemon: Metapod
* Pokemon: Butterfree
* Pokemon: Weedle
* Pokemon: Kakuna
* Pokemon: Beedrill
* Pokemon: Pidgey
* Pokemon: Pidgeotto
* Pokemon: Pidgeot
* Pokemon: Rattata
* Pokemon: Raticate */

const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon?limit=20"; // andá a la primera pag (no especificamos offset así que lo toma como offset=0) y dame los primeros 20

async function getPokemones() {
  const response = await fetch(POKE_API_URL); // fetch es una promesa que devuelve un objeto response. Ahí no se muestra la data en sí, sino info sobre nuestro request (status, url...);

  const pokemones = await response.json(); // el response es una variable (podría llamarse cualquier cosa) que contiene al objeto Response, que tiene un método json que cuando lo ejecutamos devuelve una promesa. Ahora sí nos va a dar la data.

  return pokemones; // acá estan nuestros pokemones 
}

fetch(POKE_API_URL)

.then( (response) => {
  return response.json(); // RETURN!!! 
})

.then( (data) => {
  for(let objetoPokemon of data.results) {
    console.log(`* Pokemon: ${objetoPokemon.name.charAt(0).toUpperCase()}${objetoPokemon.name.substr(1)}`)
  }
})

.catch( (error) => console.log("Ups, hubo un error...", error));

