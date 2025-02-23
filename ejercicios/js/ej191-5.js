// mi forma fetch (mezcla ejs 191 y 192)

const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon?limit=20"; // andá a la primera pag (no especificamos offset así que lo toma como offset=0) y dame los primeros 20

export async function getPokemones() {
  const response = await fetch(POKE_API_URL); // fetch es una promesa que devuelve un objeto response. Ahí no se muestra la data en sí, sino info sobre nuestro request (status, url...);

  const pokemones = await response.json(); // el response es una variable (podría llamarse cualquier cosa) que contiene al objeto Response, que tiene un método json que cuando lo ejecutamos devuelve una promesa. Ahora sí nos va a dar la data.

  return pokemones; // acá estan nuestros pokemones 
}

// getPokemones() // getPokemones() es async, eso significa que va a devolver una promesa. Así que la manejamos con then

// .then( (data) => { // lo que sea que haya devuelto (si salió bien todo) mostramelo en consola.
  
//     for(let objetoPokemon of data.results) { // data es un objeto que tiene una propiedad results, cuyo valor es un array lleno de objetos Pokemones.
//       console.log(`* Pokemon: ${objetoPokemon.name.charAt(0).toUpperCase()}${objetoPokemon.name.substr(1)}`) // de cada objetoPokemon queremos solo el nombre. Agarrá el primer char y pasamelo a mayus. Después mostrame el resto de la cadena a partir del char 1 incluido.
//     }
// })

// .catch( (error) => console.log("Ups, hubo un error...", error)); // si falló en alguna promise atajalo.