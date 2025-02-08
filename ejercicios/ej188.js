/* Crear una función con el nombre crearPromesa.
La función crearPromesa retorna una nueva Promise que se va a resolver a los 5 segundos llamando a la función onSuccess.
Crear una variable con el nombre promesa y asignar el valor retornado por la función crearPromesa.
A los 5 segundos se debería mostrar un mensaje de éxito.
Manejar el caso donde la promesa sea exitosa.
Pasaron 5 segundos y la promesa fue exitosa
Modificar la función crearPromesa para que acepte un parámetro con el nombre de delay y que este sea la cantidad de segundos que tarda la promesa en resolverse.
Probar con los siguientes valores:
5 segundos
1 segundo
10 segundos
Outcome esperado:
Paso 1 segundos y la promesa fue exitosa
Pasaron 5 segundos y la promesa fue exitosa
Pasaron 10 segundos y la promesa fue exitosa
Modificar el código para que la función crearPromesa ahora acepte un segundo parámetro también con el nombre de tieneError.
Por defecto el parámetro tieneError tiene el valor false.
En caso de tener error la promesa debe no resolverse.
Manejar el caso catch para esa promesa.
Llamar la promesa con los siguientes valores:
5 segundos
1 segundo
10 segundos
3 segundos con error (Usando catch)
Paso 1 segundos y la promesa fue exitosa
Pasaron 3 segundos y la no promesa fue exitosa
Pasaron 5 segundos y la promesa fue exitosa
Pasaron 10 segundos y la promesa fue exitosa */

function crearPromesa (delay, tieneError = false) {

    let segundos = delay * 1000;
    let msg = `Pas${delay === 1 ? "ó" : "aron"} ${delay} segundo${delay === 1 ? "" : "s"} y la promesa ${tieneError ? "no " : ""}fue exitosa.`;

    return new Promise ((onSuccess, onError) => {

        setTimeout(() => {

            if (tieneError) {
                onError(msg);
            } else {
                onSuccess(msg);
            }

        }, segundos);
    });
}

const promise1 = crearPromesa(5);
const promise2 = crearPromesa(1);
const promise3 = crearPromesa(10);
const promise4 = crearPromesa(3, true);

const promises = [promise1, promise2, promise3, promise4];

Promise.allSettled(promises).then
    ((mensaje) => console.log(mensaje))
        .catch
    ((mensaje) => console.log(mensaje));