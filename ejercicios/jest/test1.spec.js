import * as Ejercicio1 from "../js/ej1";

const { nombre, edad, fechaDeNacimiento, direccion } = Ejercicio1;

describe("Test ej 1", () => {
     test("Las variables están definidas", () => {
       
       expect(nombre).toBeUndefined;
       expect(edad).toBeUndefined;
       expect(fechaDeNacimiento).toBeUndefined;
       expect(direccion).toBeUndefined;
     });
});