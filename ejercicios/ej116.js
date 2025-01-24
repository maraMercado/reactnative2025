/* 
Crear la función mejorJugadorArgentino que acepta como parámetro un número
Esta función retorna el nombre de un jugador según el número de camiseta que utilizó en la selección del 86
Utilizar la siguiente lista de jugadores: 18 Nery Pumpido 5 José Luis Brown 9 José Cuciuffo 19 Óscar Ruggeri 14 Ricardo Giusti 16 Julio Olarticoechea 2 Sergio Batista 12 Héctor Enrique 7 Jorge Burruchaga 10 Diego Armando Maradona 11 Jorge Valdano
En caso de que se ingrese un número que no corresponde a un jugardor retornar el siguiente valor: Carlos Bilardo
Mostrar en consola el número pasado como parámetro y el nombre del jugador retornado
ejemplo: Si pasamos 10 como parámetro obtenemos Diego Armando Maradona como valor de retorno. Mostrar en consola: 10, Diego Armando Maradona
*/

function mejorJugadorArgentino (numero) {

    switch (numero) {
        case 18:
            console.log(`${numero}, Nery Pumpido`);
            return "Nery Pumpido"; 

        case 5:
            console.log(`${numero}, José Luis Brown`);
            return "José Luis Brown";

        case 9:
            console.log(`${numero}, José Cuciuffo`);
            return "José Cuciuffo";

        case 19:
            console.log(`${numero}, Óscar Ruggeri`);
            return "Óscar Ruggeri";

        case 14:
            console.log(`${numero}, Ricardo Giusti`);
            return "Ricardo Giusti";

        case 16:
            console.log(`${numero}, Julio Olarticoechea`);
            return "Julio Olarticoechea";

        case 2:
            console.log(`${numero}, Sergio Batista`);
            return "Sergio Batista";

        case 12:
            console.log(`${numero}, Héctor Enrique`);
            return "Héctor Enrique";

        case 7:
            console.log(`${numero}, Jorge Burruchaga`);
            return "Jorge Burruchaga";

        case 10:
            console.log(`${numero}, Diego Armando Maradona`);
            return "Diego Armando Maradona";

        case 11:
            console.log(`${numero}, Jorge Valdano`);
            return "Jorge Valdano";

        default: 
            console.log(`Carlos Bilardo`);
            return "Carlos Bilardo";
    }
}

mejorJugadorArgentino(10);
mejorJugadorArgentino(33);
mejorJugadorArgentino(12);