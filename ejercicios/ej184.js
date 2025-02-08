/* Crear un timer que se ejecute tan sola una vez a los 3 segundos y muestre en pantalla el siguiente mensaje Pasaron 3 segundos. */

const segundos = 3 * 1000;

setTimeout(() => console.log("Pasaron 3 segundos"), segundos);