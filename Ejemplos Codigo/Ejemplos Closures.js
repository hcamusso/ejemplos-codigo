// ----- Closures -----

// EJERCICIO 10
// Implementar la función closureGreeting que recibe un parámetro (prefix) mediante closures debe permitir
// generar nuevas funciones de saludo dejando fijo siempre el prefijo indicado.
// Ejemplo 1:
//    var hiGreeting = closureGreeting("Hi");
//    hiGreeting("Franco");  --> Devolverá "Hi Franco, you are number 1"
//    hiGreeting("Toni"); --> Devolverá "Hi Toni, you are number 2"
// Ejemplo 2:
//    var helloGreeting = closureGreeting("Hello");
//    helloGreeting("Franco");  --> Devolverá "Hello Franco, you are number 1"
//    helloGreeting("Toni"); --> Devolverá "Hello Toni, you are number 2"
// IMPORTANTE: Prestar atención a los espacios, comas y demás caracteres ya que tiene que el string
// debe coincidir en todos sus caracteres para que el test pase correctamente

function closureGreeting(prefix) {
    let contador = 0;
    return function(nombre){
      contador = contador + 1;
      return prefix+' '+nombre+', you are number '+contador;
      
    }
  }
  
  var hiGreeting = closureGreeting("Hi");
  var helloGreeting = closureGreeting("Hello");

  //2
  // EJERCICIO 10
// Implementar la función closureDetect que recibe como parámetro:
//  - Un array (symptoms) que va a contener en cada posición un string representando un
//    síntoma médico de alguna enfermedad
//  - Un número (min) que va a indicar la cantidad mínima de síntomas que debe tener un
//    paciente para considerar que posee la enfermedad
// Ejemplos:
//   var symptoms = ['fever', 'dry cough', 'tiredness', 'sore throat', 'diarrhoea', 'loss of taste', 'loss of smell'];
//   var covidDetector = closureDetect(symptoms, 3);
//
//   var personOne = {
//     name: 'Franco',
//     age: 26,
//     symptoms: ['fever', 'congestion', 'loss of taste', 'tiredness']
//   }
//
//   var personTwo = {
//     name: 'Toni',
//     age: 30,
//     symptoms: ['congestion', 'tiredness']
//   }
//
//   covidDetector(personOne); --> true
//   covidDetector(personTwo); --> false
//  [Observar los tests para otros casos]

function closureDetect(symptoms, min) {
  // Tu código aca:
  let longSymptoms = symptoms.length;

  return function(persona){
        let cont = 0;
        let longPersona = persona.symptoms.length;
        for (let i = 0; i < longSymptoms; i++) {
          const elementSymptoms = symptoms[i];
          for (let j = 0; j < longPersona; j++) {
            const elementPersona = persona.symptoms[j];
            if(elementSymptoms === elementPersona) {cont ++}
          }        
        }
        if (cont >= min) {return true}
        else {return false}
  }
}

  //3
  // ----- Closures -----

// EJERCICIO 10
// Implementar la función closureSum que recibe un parámetro (numFijo) y que debe retornar otra función
// que también debe recibir un parámetro y debe devolver la suma de este últimom parámetro con numFijo.
// Ejemplo 1:
//    var sumaCinco = closureSum(5);
//    sumaCinco(2);  --> Devolverá 7 (Ya que 2 + 5 = 7)
//    sumaCinco(11); --> Devolverá 16 (Ya que 11 + 5 = 16)
// Ejemplo 2:
//    var sumaDiez = closureSum(10);
//    sumaDiez(2);  --> Devolverá 12 (Ya que 2 + 10 = 12)
//    sumaDiez(11); --> Devolverá 21 (Ya que 11 + 10 = 21)

function closureSum(numFijo) {
  /* Tu codigo aqui */
  return function(numero) {
    return (numFijo + numero);
  }

}

  //5
    // EJERCICIO 10
  // Implementar la función closureSum que recibe un parámetro
  // (numFijo) y que debe retornar otra función
  // que también debe recibir un parámetro y debe devolver la suma de 
  // este últimom parámetro con numFijo.
  // Ejemplo 1:
  // var sumaCinco = closureSum(5);
  //  console.log(sumaCinco(2));  //--> Devolverá 7 (Ya que 2 + 5 = 7)
  //    sumaCinco(11); --> Devolverá 16 (Ya que 11 + 5 = 16)
  // Ejemplo 2:
  //    var sumaDiez = closureSum(10);
  //    sumaDiez(2);  --> Devolverá 12 (Ya que 2 + 10 = 12)
  //    sumaDiez(11); --> Devolverá 21 (Ya que 11 + 10 = 21)
  
  function closureSum(numFijo) {
      
    return function(numero) {
      return numFijo+numero;
    }
  }

  //7
  // ----- Closures -----
// EJERCICIO 6
// Implementar la función passport que recibe como parámetro:
//  - Una edad mínima para que las personas puedan ingresar a un país
//  - El país en cuestión
// La función passport retorna una función isAllowed, la cual recibirá un arreglo de personas que quieren ingresar al país, y 
// retornará un nuevo arreglo con los admitidos (aquellos que cumplan con la edad requerida).
function passport(minAge, country) {
  // Tu código aca:
  if (minAge < 18) {
    return false;
  } else{
    return function isAllowed(array) {
      let newArray =[];
      for (let index = 0; index < array.length; index++) {
        if (array[index].age >= minAge && array[index].allowed == country) {
          newArray.push(array[index].name);
        };
      };
      if (newArray.length >0){
        return newArray;
      } else {
        return false;
      };
    };
  };
};

//8
/*****************************************************************/
/**************************** Closures ***************************/
/*****************************************************************/

// Ejercicio D.

// Implementar una funcion usando closures
// Pepe tiene 28 años. Se quiere crear una funcion que incremente la edad de Pepe en un año
// y muestre por consola la nueva edad de Pepe.
// Por ejemplo, si llamo a la funcion growUp(), deberia devolver "Pepe tiene ahora 29 años."
// Si vuelvo a llamar a growUp(), deberia devolver "Pepe tiene ahora 30 años."
// Y asi consecutivamente...

function growUp() {
    
    let contador = 28;
 return function (){
     contador++;
     return 'Pepe riene ahora '+contador+' años';
 }
}
//10
/* EJERCICIO 10
 *
 *
 *
 * Implementar la funcion closureTrip cuya finalidad es determinar a que ciudades o paises puede llegar
 * una persona en funcion de la cantidad de millas y ciudad origen.
 *
 * Parametros:
 *   - flights: un arreglo en donde cada elemento esta compuesto por dos propiedades
 *               airport y destinations, donde destination es un arreglo, y cada elemento
 *               posee una propiedad city y otra miles.
 *
 *
 * Salida:
 *   > un arreglo con el nombre de las ciudades a los cuales puede llegar la persona
 *
 * Ejemplo:
 *
 * let flights = [{origin: 'BUE', destinations:[{city: 'FRANCIA', miles: 500}, {city: 'ITALIA', miles: 200},
 *                                              {city: 'ALEMANIA', miles: 400}]}, 
 *               {origin: 'ITALIA', destinations: [{city: 'FRANCIA', miles: 30}]},
 *               {origin: 'BUE', destinations: [{city: 'MENDOZA', miles: 30}, {city: 'CORDOBA', miles: 700},
 *                                              {city: 'SALTA', miles: 200}]}]
 *
 * let user = {
 *   name: 'Martina',
 *   miles: 450,
 *   origin: 'BUE'
 * }
 *
 *
 * closureTrip(flights)(user) => [ 'ITALIA', 'ALEMANIA', 'MENDOZA', 'SALTA' ]
 *
 * */

function closureTrip(flights) {
  // Tu código aca:

    return function (params) {
      let arrayTrip = [];
      // const esOrigen = vuelo => vuelo.origin === params.origin;
      // const vuelosDesde = flights.filter(esOrigen); // obtengo un array de los vuelos que tienen el origen necesario
      // console.log (vuelosDesde);

      

      for (let index = 0; index < flights.length; index++) {
        const element = flights[index].origin;
        console.log(element)
        if (element === params.origin) {
          for (let j = 0; j < flights[index].destinations.length; j++) {
            const elementDestino = flights[index].destinations[j];
            console.log(elementDestino)
            if (elementDestino.miles <= params.miles) {
              arrayTrip.push(elementDestino.city);
            }
          }
        }
      } return arrayTrip
    }

}
// repaso martina
var closureMult = function (multiplicar) {
  return function(num){
    return num * multiplicar;
    }
};

var mulCuatro = closureMult(4)
console.log(mulCuatro(2));