/* Declarar un objeto con el nombre de jugador con los siguientes métodos y propiedades

propiedad: nombre, valor: null
propiedad: energia, valor: 100
propiedad: vidas, valor: 3
método: perderEnergia
método: recuperarEnergia
método: perderVida
método: recuperarVida
Establecer un nombre al jugador

El método perderEnergia acepta un parámetro danio y disminuye la energía del jugador

La energía del jugador no puede ser menor que 0
El jugador no puede tener energía negativa
El método recuperarEnergia acepta un parámetro energiaRecuperada e incrementa la energía del jugador

La energía del jugador no puede ser mayor que 100
No se puede recuperar energía negativa
El método perderVida le saca una vida al jugador

Las vidas del jugador no pueden ser negativas
El método recuperarVida recupera una vida al jugador

Las vidas del jugador no pueden ser más grandes que 99
Ejecutar las siguientes acciones llamando a los métodos correspondientes:

El jugador pierde una vida
El jugador pierde 10 de energía
El jugador pierde 5 de energía
El jugador pierde 15 de energía
El jugador pierde 20 de energía
El jugador recupera 10 de energía
El jugador pierde 30 de energía
El jugador pierde 40 de energía
El jugador pierde una vida
El jugador pierde una vida
El jugador gana una vida
El jugador gana una vida
El jugador gana una vida
El jugador pierde una vida
Luego de cada acción mostrar el estado del objeto jugador El jugador ${nombre} tiene ${energia}% de energía y ${vidas} vidas
*/

export const jugador = {
    nombre: null,

    energia: 100,

    vidas: 3,

    perderEnergia: (danio) => 
        danio < jugador.energia 
        ? console.log(`El jugador '${jugador.nombre}' recibió ${danio} puntos de daño! Ahora su energía es:`, 
            jugador.energia -= danio) 
        : console.log("Game over! Tu energía actual no está permitida: ", jugador.energia -= danio),

    recuperarEnergia: function (stamina) {
        
        if (jugador.energia < 0) {
            console.log("No puedes recuperar energía negativa...");
            return;
        }

        jugador.energia += stamina;

        if(jugador.energia > 0 && jugador.energia < 100) {

            console.log(`El jugador '${jugador.nombre}' recuperó ${stamina} puntos de stamina! Ahora su energía es:`, jugador.energia);

        }  else if (jugador.energia > 100) {

            console.log(`Energía al máximo!:`, jugador.energia = 100);

        } else {
            console.log("Game over! Ya te quedaste sin energía");
        }
    },

    perderVida: function (danioFatal) {

        this.vidas -= danioFatal;

        if (this.vidas <= 0 || this.energia <= 0) {
            console.log("Ya perdiste!");
            return;
        }

        console.log(`El jugador '${this.nombre}' recibió ${danioFatal} puntos de daño fatal! Ahora tiene:`, this.vidas, "vidas.");

    },

    recuperarVida: function (sanacion) {

        if (this.vidas <= 0 || this.energia <= 0) {
            console.log("Ya perdiste!");
            return;
        }

        this.vidas += sanacion;

        if (this.vidas >= 99) {
            this.vidas = 99;
            console.log("Tienes la vida al máximo! Tu vida es:", this.vidas);
        } else {
            console.log(`El jugador '${this.nombre}' obtuvo ${sanacion} puntos de sanación! Ahora su vida es:`, this.vidas);
        }

    } 
}

// jugador.nombre = "mara24";

// jugador.perderVida(1);
// jugador.perderEnergia(10);
// jugador.perderEnergia(15);
// jugador.perderEnergia(5);
// jugador.perderEnergia(20);
// jugador.recuperarEnergia(10);
// jugador.perderEnergia(30);
// jugador.perderEnergia(40);
// jugador.perderVida(1);
// jugador.perderVida(1);
// jugador.recuperarVida(1);
// jugador.recuperarVida(1);
// jugador.recuperarVida(1);
// jugador.perderVida(1);