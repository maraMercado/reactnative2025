const json = `{
    "character": {
      "name": "Aria the Brave",
      "class": "Warrior",
      "level": 10,
      "hp": 120,
      "mana": 50,
      "equipment": {
        "weapon": {
          "name": "Flaming Sword",
          "damage": 35,
          "element": "Fire"
        },
        "armor": {
          "name": "Dragon Scale Shield",
          "defense": 50
        }
      },
      "inventory": [
        { "item": "Health Potion", "type": "Consumable", "effect": "+50 HP" },
        { "item": "Mana Potion", "type": "Consumable", "effect": "+30 Mana" },
        {
          "item": "Mystic Gem",
          "type": "Artifact",
          "effect": "Boosts magic power"
        }
      ],
      "quests": [
        { "name": "Slay the Dragon", "status": "Completed" },
        { "name": "Find the Lost Amulet", "status": "In Progress" }
      ]
    }
  }`;

// Transformar el JSON en un objeto de JavaScript.
const objeto = JSON.parse(json);

// Extraer y mostrar el name, class and level del personaje (character).

console.log("Nombre:", objeto.character.name);
console.log("Clase:", objeto.character.class);
console.log("Nivel", objeto.character.level);

//Iterar la colección de inventory y mostrar el name y effect de cada item en pantalla.

console.log("Inventario:");
objeto.character.inventory.forEach(function (pociones) {
    console.log(`- ${pociones.item}: ${pociones.effect}`);
})

//Mostar el name de los quests que todavía están en status In Progress.

console.log("Quests en progreso:");
objeto.character.quests.filter(function (quest) {
    return quest.status === "In Progress";
}) .forEach(function (quest) {
    console.log(`- ${quest.name}`);
});



