/* Copiar el código del ejercicio ej213.ts y pegarlo en el nuevo archivo del ejercicio ej214.ts
Crear una nueva función con el nombre de mostrarAutoOCamion que acepte un parámetro del tipo o un auto o un camion
La función mostrarAutoOCamion muestra o los datos del auto o los datos del camion
Dado que los dos objetos son Vehiculos tienen en común varias propiedades
Dado que TS necesita saber si el parámetro pasado es un auto o camión debemos validar algunas propiedades
Usando un if statement pueden comprobar si por ejemplo el parámetro esDescapotable para saber que es un auto o camión.
Usando la palabra reservada in podemos saber si un obejeto tiene o no una propiedad:
if ("esDescapotable" in vehiculo) {
  console.log(`Es descapotable: ${vehiculo.esDescapotable}`);
} else {
  console.log(`Cantidad de acoplados: ${vehiculo.cantidadDeAcoplados}`);
}
Borrar las funciones mostrarDatosAuto y mostrarDatosCamion
Remplazar los llamados a las funciones anteriores por el uso de la nueva función mostrarAutoOCamion
El resto del código debe funcionar de la misma manera ` */

interface Vehiculo {
    marca: string;
    modelo: string;
    color: string;
    cantidadDePasajeros: number;
};

interface Auto extends Vehiculo {
    esDescapotable: boolean;
};

interface Camion extends Vehiculo {
    cantidadDeAcoplados: number;
};

function mostrarDatosAutoCamion(input: Vehiculo) {
    console.log(`Marca: ${input.marca}`);
    console.log(`Color: ${input.color}`);
    console.log(`Cantidad de pasajeros: ${input.cantidadDePasajeros}`);

    if ("esDescapotable" in input) {
        console.log(`Es descapotable: ${auto.esDescapotable}`);
      } else if ("cantidadDeAcoplados" in input) {
        console.log(`Cantidad de acoplados: ${camion.cantidadDeAcoplados}`);
      }
};

const auto: Auto = {
    marca: "Honda",
    modelo: "Civic",
    color: "Negro",
    cantidadDePasajeros: 5,
    esDescapotable: true
};

const camion: Camion = {
    marca: "Volvo",
    modelo: "FH16",
    color: "Rojo",
    cantidadDePasajeros: 3,
    cantidadDeAcoplados: 2,
};

mostrarDatosAutoCamion(auto);
mostrarDatosAutoCamion(camion);

export {};