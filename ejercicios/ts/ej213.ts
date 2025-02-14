/* Crear una interfaz con el nombre Vehiculo con las siguientes propiedades
marca es un string
modelo es un string
color es un string
cantidadDePasajeros es un number
Crear una interfaz con el nombre Auto que extienda a Vehiculo y tenga la siguiente propiedad:
esDescapotable es un boolean
Crear una interfaz con el nombre Camion que extienda a Vehiculo y tenga la siguiente propiedad:
cantidadDeAcoplados es un number
Crear una función con el nombre mostrarDatosAuto que acepte como parámetro un Auto y muestre en pantalla los datos del auto
Crear una función con el nombre mostrarDatosCamion que acepte como parámetro un Camion y muestre en pantalla los datos del camion
Crear los siguientes objetos:
const auto = {
  marca: "Honda",
  modelo: "Civic",
  color: "Negro",
  cantidadDePasajeros: 5,
  esDescapotable: true,
};

const camion = {
  marca: "Volvo",
  modelo: "FH16",
  color: "Rojo",
  cantidadDePasajeros: 3,
  cantidadDeAcoplados: 2,
};
Llamar a las funciones mostrarDatosAuto y mostrarDatosCamion pasando el tipo de parámetro esperado
En pantalla se debe ver los siguientes mensajes:
Marca: Honda
Modelo: Civic
Color: Negro
Cantidad de pasajeros: 5
Es descapotable: true
Marca: Volvo
Modelo: FH16
Color: Rojo
Cantidad de pasajeros: 3 */

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

function mostrarDatosAuto({ marca, modelo, color, cantidadDePasajeros, esDescapotable}: Auto) {
    console.log(`Marca: ${marca}\nModelo: ${modelo}\nColor: ${color}\nCantidad de pasajeros: ${cantidadDePasajeros}\nEs descapotable: ${esDescapotable}`);
};

function mostrarDatosCamion({ marca, modelo, color, cantidadDePasajeros, cantidadDeAcoplados}: Camion) {
    console.log(`Marca: ${marca}\n
        Modelo: ${modelo}\n
        Color: ${color}\n
        Cantidad de pasajeros: ${cantidadDePasajeros}\n
        Cantidad de acoplados: ${cantidadDeAcoplados}`);
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

mostrarDatosAuto(auto);
mostrarDatosCamion(camion);

export {};