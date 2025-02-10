/* Crar una nueva clase con el nombre Vehiculo y replicar las propiedades y funcionalidades que tiene el siguiente objeto literal.
const vehiculo = {
  marca: "Toyota",
  modelo: "Rav4",
  cantidadDePuertas: 4,
  anio: 2024,
  color: "Black",
  toString: function () {
    console.log(`${this.marca} ${this.modelo} ${this.anio}`);
  },
  getColor: function () {
    return this.color;
  },
};
Crear 2 instancias pasando los siguientes valores a la función constructora:
Toyota, Rav4, 4, 2024, Black
Honda, Pilot, 4, 2025, Dark Blue
Mostrar en pantalla los siguientes datos:
vehiculo.toString();
console.log(vehiculo.getColor());
vehiculo2.toString();
console.log(vehiculo2.getColor()); */

class Vehiculo {
    constructor(marca, modelo, cantidadDePuertas, anio, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.cantidadDePuertas = cantidadDePuertas;
        this.anio = anio;
        this.color = color;
    }

    toString() {
        console.log(`${this.marca} ${this.modelo} ${this.anio}`);
    }

    getColor() {
        return this.color;
    }
}

const vehiculo = new Vehiculo("Toyota", "Rav4", 4, 2024, "Black");
const vehiculo2 = new Vehiculo("Honda", "Pilot", 4, 2025, "Dark Blue");

vehiculo.toString();
console.log(vehiculo.getColor());
vehiculo2.toString();
console.log(vehiculo2.getColor());