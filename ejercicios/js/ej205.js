/* Crear un documento con el nombre ej205.js
Crear un documento con el nombre moduloej205.js
Copiar la función mostrarNumeros del ej112.js y pegarla en el archivo moduloej205.js
Exportar la función mostrarNumeros utilizando export
Importar y utilizar la función mostrarNumeros con los siguientes valores:
100, 400
800, 25
50, 50
"50", 50
Agregar al módulo 2 las siguientes variables:
inicio y asignar el valor 0
fin y asignar el valor 100
Exportar las variables inicio y fin del módulo moduloej205.js
Importar las variables inicio y fin y utilizarlas de la siguiente manera:
mostrarNumeros(inicio, fin);
Una vez que todo funciona renombrar y utilizar las variables inicio y fin por numero1 y numero2.
mostrarNumeros(numero1, numero2);
*/

import { mostrarNumeros, inicio as numero1, fin as numero2} from "./ej205-modulo.js";

mostrarNumeros(100, 400);
mostrarNumeros(800, 25);
mostrarNumeros(50, 50);
mostrarNumeros("50", 50);
mostrarNumeros(numero1, numero2);