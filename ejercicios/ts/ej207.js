"use strict";
/* Crea una colección con el nombre notas y asigna el tipo de dato que corresponde
Los valores de la colección nota son [6, 8, 7.5]
Crea una colección con el nombre notas2 y asigna el tipo de dato que corresponde utilizando <> para definir el tipo.
Los valores de la colección nota 2 son [5, 4, 8]
Crea una clase Vehiculo con las siguientes propiedades:
marca
modelo
anio
color
Crea 4 instancias de la clase Vehiculo asignando los siguientes valores:
'Toyota, 'Rav4', 2024, 'negro'
'Toyota, '4Runner', 2010, 'gris'
'Honda, 'Pilot', 2020, 'blanco'
'Honda, 'CR-V', 2015, 'rojo'
Crea una colección con el nombre vehiculos que tenga como elementos las 4 instancias de Vehiculo
Agrega el tipo que corresponde a la colección vehiculos */
Object.defineProperty(exports, "__esModule", { value: true });
var notas = [6, 8, 7.5];
var notas2 = [5, 4, 8];
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, anio, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.color = color;
    }
    return Vehiculo;
}());
var auto1 = new Vehiculo("Toyota", "Rav4", 2024, "negro");
var auto2 = new Vehiculo("Toyota", "4Runner", 2010, "gris");
var auto3 = new Vehiculo("Honda", "Pilot", 2020, "blanco");
var auto4 = new Vehiculo("Honda", "CR-V", 2015, "rojo");
var vehiculos = [auto1, auto2, auto3, auto4];
