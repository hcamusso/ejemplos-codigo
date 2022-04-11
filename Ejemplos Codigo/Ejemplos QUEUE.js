1

// ----- QUEUE -----

// EJERCICIO 6
// Implementar la función controlAcces: a partir de una Queue que va a recibir como paráemtro que tiene
// en cada posición un objeto que va a representar a una persona y tiene la siguiente forma:
// {
//   fullname: "Franco Etcheverri",
//   age: 26,
//   ticket: {
//     number: 1,
//     event: "Tomorrowland"
//   }
// }
// La idea es ir verificando uno a uno si la primer persona de la cola tiene los requisitos necesarios para
// ingresar al evento correspondiente (también recibido por parámetro). Los requisitos que debe cumplir son:
// - Ser mayor de 18 años (18 inclusive es válido)
// - Tener un ticket que corresponda con el evento (prop event de ticket)
// - Que no haya ingresado ya otra persona al evento con ese mismo número de ticket
// Finalmente la función debe devolver un arreglo con todos los nombres de las personas que pudieron ingresar

var controlAcces = function (queue, event) {
  // Tu código aca:
let ingresaron =[]; //arreglo a devolver con los que ingresaron al evento
let asignado = []; // arreglo de los numeros asignados
let numAsignado = false // bandera que indica que el numero esta asignado
let turno; // objeto en tratamiento
let index = 0;
while (queue.size() > 0) {
    turno = queue.dequeue();
    if (turno.age >= 18 && turno.ticket.event === event && turno.ticket.number !=null ) {
      // console.log(turno.ticket.number)
      // console.log(asignado)
      for (let j = 0; j < asignado.length; j++) {
        const element = asignado[j];
        if(element === turno.ticket.number) { // el ticket ya esta asignado
          numAsignado = true;
        }
      }
      if (numAsignado === false){
      ingresaron[index]=turno.fullname;
      index ++;
      asignado.push(turno.ticket.number);
      
      }
      numAsignado = false;
    }

  }
  // console.log(ingresaron.length)
  return ingresaron
}

3
// ----- QUEUE -----

// EJERCICIO 6
// Implementar la función controlAcces: a partir de una Queue que va a recibir como paráemtro que tiene
// en cada posición un objeto que va a representar a una persona y tiene la siguiente forma:
// {
//   fullname: "Franco Etcheverri",
//   age: 26,
//   ticket: {
//     number: 1,
//     event: "Tomorrowland"
//   }
// }
// La idea es ir verificando uno a uno si la primer persona de la cola tiene los requisitos necesarios para
// ingresar al evento correspondiente (también recibido por parámetro). Los requisitos que debe cumplir son:
// - Ser mayor de 18 años (18 inclusive es válido)
// - Tener un ticket que corresponda con el evento (prop event de ticket)
// - Que no haya ingresado ya otra persona al evento con ese mismo número de ticket
// Finalmente la función debe devolver un arreglo con todos los nombres de las personas que pudieron ingresar
// Importante!: Aquellas personas que no cumplan con los requisitos para ingresar deben ser removidos de la cola 

var controlAcces = function(queue, event){
  // Tu código aca:
  let control = queue.dequeue();
  let cache = [];
  let ingresaron = [];
  
    while (control) {
      if (control.age >= 18 && control.ticket.event === event && control.ticket.number) {
        if (!cache.includes(control.ticket.number)) {
          cache.push(control.ticket.number);
          ingresaron.push (control.fullname)
        console.log(control)
      }
    }
      control = queue.dequeue();
}
return ingresaron;
}

5
// ----- QUEUE -----
  
  // EJERCICIO 6 
  // Implementar la función cardGame: a partir de dos Queue que va a recibir como paráemtros tiene
  // que determinar quién será el ganador del juego de cartas. Las reglas de dicho juego son las siguientes:
  //    - Cada jugador tendrá un mazo con cartas numeradas del 1 al 12
  //    - Estos mazos estarán implementados a partir de la estructura de Queue utilizada en el homework
  //    - En cada turno del juego, cada jugador lanzará la carta que se encuentre primero en su mazo (Queue)
  //    - El jugador que tenga el número más alto en el turno ganará dicho turno
  //    - El jugador que gane dicho turno se quedará con ambas cartas agregándolas al final del mazo (Primero
  //    la suya y luego la de su contrincante)
  //    - En el caso de que haya empate ambos pierden las cartas y no se agregan a ningún mazo
  //    - El ganador del juego será quien deje a su oponente sin cartas en su mazo
  // Aclaración: la función cardGame debe retornar "A wins!" en el caso de que el ganador sea el jugador A o
  // "B wins!" en caso contrario. [Puede ocurrir que haya empate, en dicho caso retornat "Game tie!"]
  // Ejemplo:
  //    - mazoUserA = [4,2,10,11]
  //    - mazoUserB = [6,9,10,3]
  //    Primer mano:
  //     A --> 4  vs  6 <-- B [6 > 4 entones gana la mano B y pone ambas cartas en su mazo, colocando primero la suya]
  //    - mazoUserA = [2,10,11]
  //    - mazoUserB = [6,9,10,3,6,4]
  
  var cardGame = function(mazoUserA, mazoUserB){
    let cartaA;
    let cartaB;
    while (mazoUserA.size() !==0 && mazoUserB.size() !==0) {
      cartaA = mazoUserA.dequeue();
      cartaB = mazoUserB.dequeue();
      if (cartaA > cartaB) { 
        mazoUserA.enqueue(cartaA);
        mazoUserA.enqueue(cartaB);
      }
      if (cartaB > cartaA) {
        mazoUserB.enqueue(cartaB);
        mazoUserB.enqueue(cartaA);
      }
    }
    if (mazoUserA.size() === 0 && mazoUserB.size() === 0) {
      return "Game tie!"
    } else { 
      if (mazoUserA.size() === 0) {
        return "B wins!"
      } else {
        return "A wins!"
      }
    }
  }
  
  // ---------------

7
// ---- Queue ----
// EJERCICIO 9
// Implementar la función cardGame: a partir de dos Queues que va a recibir como paráemtro que
// van a representar mazos de cartas de dos jugadores debemos determinar quien va a ser el ganador
// de este juego que va a tener la siguiente dinámica:
// - Los jugadores tendrán que defender su "Castillo" que contiene un total de 100 puntos de resistencia
// - Cada carta tendrá puntos de ataque (attack) y puntos de defensa (defense)
// - Ambos jugadores van a sacar las dos primeras cartas de su mazo
//      * La primera carta será su carta asignada para atacar
//      * La segunda carta será su carta asignada para defender
// - La carta asignada para atacar del jugador uno se enfrentará contra la carta asignada para defender
//   del jugador dos y viceversa. Si el ataque supera los puntos de defensa el daño sobrante será aplicado
//   sobre el castillo.
// - El juego finaliza cuando alguno de los dos castillos se quede sin puntos de resistencia o cuando los mazos
//   se acaben. En este último caso ganará aquel jugador que tenga mayor cantidad de puntos de resistencia
//   restantes en su castillo.
// La función deberá devolver un string indicando al ganador: 'PLAYER ONE' o 'PLAYER TWO' (Respetar mayúsculas) o
// 'TIE' en el caso de empate
// NOTA: Ambos mazos contienen la misma cantidad de cartas
//
// Ejemplo:
// Los jugadores levantan 2 cartas cada uno.
// La primera carta del jugador uno va a atacar a la segunda carta del jugador dos
// La primer carta del jugador dos va a atacar a la segunda carta del jugador uno
//
// Primer carta del jugador 1 (ATAQUE) vs Segunda carta del jugador 2 (DEFENSA):
// {attack: 5, defense: 5} vs {attack: 5, defense: 26}
// Ataque 5 vs Defensa 20 --> 5 no supera 20 --> No hay daño sobre el castillo
//
// Primer carta del jugador 2 (ATAQUE) vs Segunda carta del jugador 1 (DEFENSA):
// {attack: 20, defense: 26} vs {attack: 15, defense: 10}
// Ataque 20 vs Defensa 10 --> 20 supera a 10 --> Como hay 10 puntos de diferencia esa cantidad de daño es aplicada
// al castillo del jugador 1
//
// Una vez terminada la ronda, se procede a repetir lo mismo con las siguientes 2 cartas de cada jugaodr hasta
// finalizar el juego.

function cardGame(playerOneCards, playerTwoCards) {
  // Tu código aca:
let resistenciaUno = 100; // puntos de resistencia del castillo 1
let resistenciaDos = 100; // puntos de resistencia del castillo 2
let primerCartaUno;
let primerCartaDos;
let segundaCartaUno;
let segundaCartaDos;
let diferenciaUno;
let diferenciaDos;
while (playerOneCards.size()>0 && resistenciaUno > 0 && resistenciaDos > 0) {
  primerCartaUno = playerOneCards.dequeue();
  segundaCartaUno = playerOneCards.dequeue();
  primerCartaDos = playerTwoCards.dequeue();
  segundaCartaDos = playerTwoCards.dequeue();
  diferenciaDos = primerCartaUno.attack - segundaCartaDos.defense;
  diferenciaUno = primerCartaDos.attack - segundaCartaUno.defense;
  if(diferenciaDos > 0) {resistenciaDos = resistenciaDos - diferenciaDos };
  if(diferenciaUno > 0) {resistenciaUno = resistenciaUno - diferenciaUno};
  }
if (resistenciaUno > resistenciaDos) {
  return "PLAYER ONE";
} else {
  if (resistenciaDos > resistenciaUno) {
    return "PLAYER TWO";
  } else {
    return "TIE";
  }
}
}


8
/*****************************************************************/
/*********************** Recursion y Stack ***********************/
/*****************************************************************/

// Ejercicio C.
// Implementar una funcion que revierta los valores de una stack (pila).
// Ejemplo:
// 1 <- TOP
// 2
// 3
// 4
//
// Resultado:
// 4 <- TOP
// 3
// 2
// 1
Queue.prototype.reverseStack = function () {
    
    let arr = [];
    let long = this.size()
    
    for (let index = 0; index < long; index++) {
        arr [index] = this.dequeue();
        
    }
    for (let index = long-1; index > -1; index--) {
        this.enqueue(arr[index]);    
    }
    return this
    };

// Ejercicio F.

// Dada una Queue, implementar una funcion que vacie dicha queue.
// Es decir que remueva todos los elementos uno por uno de la queue.
// Por ejemplo: [1, 2, 3, 4, 5, 6] --> [];
// HINT: usar el metodo .isEmpty() de la clase Queue ya implementada.

Queue.prototype.clearAll = function () {
  
    while (this.size() > 0) {
        
        eliminar=this.dequeue()
    }
    
    return this;
};

// 9
//  EJERCICIO 6
// *
// * Utilizando un STACK, y dada una frase invertir palabra por palabra de la misma.
// * NO SE PUEDEN USAR METODOS DE ARRAY. 
// *
// * Parametro:
// *   str: string a ser invertido palabra a palabra
// *
// * Ejemplo:
// *   Hello World: olleH dlroW
// *   There is a little monkey: erehT si a elttil yeknom
// * */

function reverseWords(string) {
  let pila = new Stack();
  let devolver='';
  for (let index = 0; index < string.length; index++) {
    if(string[index]!== ' '){
      pila.push(string[index]); 
    }
    if ((string[index] === ' '&& index <= string.length-1) || index === string.length-1){  
      let sizeAux=pila.size(); 
      for (let i= 0; i < sizeAux; i++) {
        devolver= devolver + pila.pop();
      }
    }
    if (string[index] === ' '){
      devolver = devolver + ' ';
    }
  }
  return devolver
};
