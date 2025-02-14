/* Crear una función con el nombre mostrarDatosDeLaColeccion que acepte un parámetro del tipo de datos unknown
Crear un interfaz con el nombre de Animal con las siguientes propiedades:
raza del tipo string
muerde del tipo boolean
colores del tipo array de colores literales marron, negro, blanco, gris
Crea una colección con el nombre animales del tipo colección de Animal con los siguientes items:
const perro = {
  raza: "Cocker",
  muerde: true,
  color: ["negro"],
};

const gato = {
  raza: "Persa",
  muerde: false,
  color: ["marron", "blanco"],
};

const leon = {
  raza: "León Africano",
  muerde: true,
  color: ["marron", "negro"],
};
Dentro de la función necesitamos recorrer la colección y mostrar sus valores
Dado que el parámetro es desconocido debemos decirle a TypeScript que estamos seguros que este parámetro es una colección del tipo Animal
Llamar a la función mostrarDatosDeLaColeccion pasando la colección animales */

function mostrarDatosDeLaColeccion (input: unknown) {
    (input as Array<Animal>).forEach((animal) => console.log(animal));
};

interface Animal {
    raza: string;
    muerde: boolean;
    color: Array<"marron" | "negro" | "blanco" | "gris">;
}

const perro: Animal = {
    raza: "Cocker",
    muerde: true,
    color: ["negro"],
};
      
const gato: Animal = {
    raza: "Persa",
    muerde: false,
    color: ["marron", "blanco"]
};
      
const leon: Animal = {
    raza: "León Africano",
    muerde: true,
    color: ["marron", "negro"],
};

const animales: Array<Animal> = [perro, leon, gato];
mostrarDatosDeLaColeccion(animales);

export {};