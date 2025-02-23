/* Copiar el ejercicio ej191.js
Utilizar async & await y try & catch para obtener el mismo resultado anterior.
Mostrar el mensaje de error en pantalla (acordate de desconectar internet antes de pedir los datos al servidor).
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
* Pokemon: Raticate
Tip: vas a necesitar alguna función auxiliar que sea async & await para hacerlo. */

const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon?limit=20"; // andá a la primera pag (no especificamos offset así que lo toma como offset=0) y dame los primeros 20

export async function getPokemones() {
  
    try {
        const response = await fetch(POKE_API_URL);
        const pokemones = await response.json();

        for(let objetoPokemon of pokemones.results) {
            console.log(`* Pokemon: ${objetoPokemon.name.charAt(0).toUpperCase()}${objetoPokemon.name.substr(1)}`);
        }
        
    } catch (error) {
        console.log("Ups, hubo un error...", error); 
    }

}

// getPokemones();