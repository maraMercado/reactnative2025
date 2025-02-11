/* Crear un nueva instancia de vehículo utilizando Object.create utilizando vehículo como parámetro.
Nombrar la nueva instancia como vehiculo2
Asignar vehiculo2 los siguientes valores a la propiedad correspondiente: Honda, Pilot, 4, 2025, Dark Blue.
Mostrar en pantalla los siguiente valores de la nueva instancia:
vehiculo2.toString();
console.log(vehiculo2.getColor());
Honda Pilot 2025
Dark Blue */

const vehiculo = {
    marca: "Toyota",
    modelo: "Rav4",
    cantidadDePuertas: 4,
    anio: 2024,
    color: "black",
    toString: function () {
      console.log(`${this.marca} ${this.modelo} ${this.anio}`);
    },
    getColor: function () {
      return this.color;
    },
};

const vehiculo2 = Object.create(vehiculo); // lo crea con las mismas propiedades y métodos, que nosotros seguramente tengamos que sobreescribir. Al hacer console.log no muestra ni los métodos, aparece vacío, pero en realidad está heredando todas las propiedades con sus valores y los métodos (ej: si acá hago vehiculo2.marca devuelve 'Toyota').
  
vehiculo2.marca = "Honda";
vehiculo2.modelo = "Pilot";
vehiculo2.cantidadDePuertas = 4;
vehiculo2.anio = 2025;
vehiculo2.color = "Dark Blue";

vehiculo2.toString();
console.log(vehiculo2.getColor());