----- Recursión -----

// EJERCICIO 1
// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]
function countArray(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      suma = suma + countArray(array[i]);
    } else {
    suma = suma + array[i];
    }
  }
  return suma;
}

function serieInventada(array,n) {
  array[n] = (array[n-1]+array[n-2]+array[n-3])*2;
}


function secuenciaHenry(array, n) {
  if (n < 0) return false;
for (let index = 0; index < array.length; index++) {
  // console.log(typeof array[index]);
  if (typeof array[index] === 'string') {
    let auxiliar = (array[index].length);
    array[index] = auxiliar;
    // console.log(array)
  } 
}
if (n < 3) {return array[n]
  
} else { for (let index = 3; index < n+1; index++){
  serieInventada(array,index);

}
 return array[n] 
}
}

// EJERCICIO 2
// Secuencia inventada: f(n) = f(n-1) x f(n-2) - f(n-2)
// Siendo f, secuenciaHenry.
// Donde las primeras dos posiciones son dadas por el parametro recibidos y a partir de
// la siguiente se calcula como la multiplicación de los 2 números anteriores restados al número anterior.
// object es un objeto del cual debemos obtener f(0) y f(1) siguiendo la siguiente lógica:
// f(0) será el valor de la propiedad llamada 'first'
// f(1) será un número igual a la cantidad de propiedades de obj
// Por ejemplo si recibimos: 
// var obj = {
//   1: true,
//   first: 2,
//   7: ['F','r','a','n','c','o!'],
//   h: {a: 1},
//   z: [],
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4
// }
// deberíamos tener los siguientes 2 valores iniciales
// secuenciaHenry(0) = 2 y secuenciaHenry(1) = 9
// A partir de ahí la tercera posición sería  9 x 2 - 2 = 16 y así sucesivamente
// La función secuenciaHenry debe devolver el enésimo numero de la serie, por ejemplo para el objeto
// antes mencionado:
// secuencia: 2, 9, 16, 135, 2144, 289305
// secuenciaHenry(0) // 2  ya que el elemento de la posición 0 es cero
// secuenciaHenry(1) // 9 ya que el elemento de la posición 1 es 1
// secuenciaHenry(5) // 289305 ya que el elemento de la posición 5 es 289305
// Para números negativos de n debe devolver null
// PISTA: Pueden utilizar el método Object.keys() para f(1)

function secuenciaHenry(obj, n) {
  // Tu código aca:
  if (n<0) return null;
  if(n=1) return Object.keys(obj);
  return secuenciaHenry(obj, n-1)*secuenciaHenry(obj, n-2) - secuenciaHenry(obj, n-2);

}


3-CP
----- Recursión -----

// EJERCICIO 1
// Implementar la función objContains: debe buscar dentro de un objeto anidado un par {clave: valor}
// especifico. Tanto el objeto como el nombre de la propiedad y su valor serán recibidos por parámetro.
// En el caso de que encuentre el valor indicado en cualquier nivel del objeto debe devolver true,
// de lo contrario, devolver false.
// Aclaraciones:
//   - Un objeto anidado es un objeto que dentro tiene uno o más objetos.
//     Ej:
//        const user = {
//            id: 6,
//            email: 'homero@maxpower.com',
//            infoPersonal: {
//                nombre: 'Homero Simpson',
//                direccion: {
//                    calle: 'Avenida Siempreviva',
//                    numero: 742,
//                    barrio: 'Springfield',
//                    estado: 'Massachusetts'
//                }
//            }
//        }
//   - Caso que devuelve true  --> objContains(user, "barrio", "Springfield");
//   - Caso que devuelve false --> objContains(user, "empleo", "Empleado en planta nuclear");
// Pista: utilizar typeof para determinar si el valor de una propiedad es un objeto para aplicar
// allí la recursión

var objContains = function(obj, prop, value){
  var a = [];
  resultado = false;
  if(obj.hasOwnProperty(prop)) {
    if (obj[prop] === value) {
      resultado = true;
    }
} else {
  a = Object.keys(obj);
  for (let index = 0; index < a.length; index++) {
    const element = a[index];
    if(typeof obj[a[index]] === 'object'){
      objContains(obj[a[index]],prop,value)
    }
  } 
}
  return resultado;
}

function secuenciaInventada (arrayCalculado, n, index){

  // caso base
  if (n < 0) {return false};
  if (n=== 0 || n=== 1 || n===2 || index === n +1) {return arrayCalculado[n]};
  
// Operacion a repetir

arrayCalculado[index] = (arrayCalculado[index-1]+arrayCalculado[index-2]+arrayCalculado[index-3])*2;
console.log(arrayCalculado[index])
index++
return secuenciaInventada (arrayCalculado, n, index)
}

function secuenciaHenry(array, n) {
  // Tu código aca:
  for (let index = 0; index < array.length; index++) {
    let valor = array[index]
    if ( typeof valor === 'string') {array[index] = valor.length};
    }
let arrayCalculado = array;
let index = 3
var respuesta = secuenciaInventada(arrayCalculado,n,index);
return respuesta
} 

5
  // ----- Recursión -----
  
  // EJERCICIO 1
  // Implementar la función objContains: debe buscar dentro de un objeto anidado un par {clave: valor}
  // especifico. Tanto el objeto como el nombre de la propiedad y su valor serán recibidos por parámetro.
  // En el caso de que encuentre el valor indicado en cualquier nivel del objeto debe devolver true,
  // de lo contrario, devolver false.
  // Aclaraciones:
  //   - Un objeto anidado es un objeto que dentro tiene uno o más objetos.
  //     Ej:
  //        const user = {
  //            id: 6,
  //            email: 'homero@maxpower.com',
  //            infoPersonal: {
  //                nombre: 'Homero Simpson',
  //                direccion: {
  //                    calle: 'Avenida Siempreviva',
  //                    numero: 742,
  //                    barrio: 'Springfield',
  //                    estado: 'Massachusetts'
  //                }
  //            }
  //        }
  //   - Caso que devuelve true  --> objContains(user, "barrio", "Springfield");
  //   - Caso que devuelve false --> objContains(user, "empleo", "Empleado en planta nuclear");
  // Pista: utilizar typeof para determinar si el valor de una propiedad es un objeto para aplicar
  // allí la recursión
  var encontrado = false;
  var objContains = function(obj, prop, value) {
    var a = [];
    encontrado = false;

    if (obj.hasOwnProperty(prop)) {
      
      if(obj[prop]===value) {
        encontrado = true;
      }
      
    } else {
      a = Object.keys(obj);
      for (let index = 0; index < a.length; index++) {
        const element = a[index];
        if(typeof obj[a[index]] === 'object'){
           objContains(obj[a[index]],prop,value)
        }
      } 
    }
    return encontrado;
  }


// EJERCICIO 2
  // Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
  // número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
  // El array será recibido por parámetro.
  // Ejemplo:
  //    const array = [1, [2, [3,4]], [5,6], 7];
  //    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
  // Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
  // [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]
  
  var countArray = function(array){
    let suma = 0;

      for (let index = 0; index < array.length; index++) {
        if (Array.isArray(array[index])) { 
          suma = suma + countArray(array[index]);
        } else {
          suma = suma + array[index];
        } ;
      }
      return suma
    }

6
// ----- Recursión -----

// EJERCICIO 1
// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var countArray = function (array) {
let suma = 0;
for (let i = 0; i < array.length; i++) {
  
  if (Array.isArray(array[i])) {
    suma = suma + countArray(array[i]);
  } else {
    suma = suma + array[i];
  };
}
return suma
};

// EJERCICIO 2
// Secuencia inventada: f(n) = (f(n-1) + f(n-2) + f(n-3)) x 2
// Donde las primeras tres posiciones son dadas por el array recibido por parametro y a partir de
// la siguiente se calcula como la suma de los 3 números anteriores multiplicados por dos.
// array es un arreglo de 3 posiciones que puede contener números o strings, aquellas posiciones que
// sean números debemos dejarlas tal cual están pero las que tengan strings debemos calcular su cantidad
// de caracteres para usarlos en la secuencia.
// Por ejemplo si recibimos: ["Franco", 1, "Henry"] deberíamos tener los siguientes 3 valores iniciales
// de la secuencia f(0) = 6, f(1) = 1 y f(2) = 5 (Ya que "Franco" tiene 6 caracteres y "Henry", 5)
// A partir de ahí la cuarta posición sería  (6 + 1 + 5) * 2 = 24 y así sucesivamente
// La función secuenciaHenry debe devolver el enésimo numero de la serie, por ejemplo para el array
// antes mencionado:
// secuencia: 6, 1, 5, 24, 60, 178, 524
// secuenciaHenry(0) // 6  ya que el elemento de la posición 0 es cero
// secuenciaHenry(1) // 1 ya que el elemento de la posición 1 es 1
// secuenciaHenry(6) // 524 ya que el elemento de la posición 6 es 524
// Para números negativos de n debe devolver false

function secuenciaInventada(array,n,i){
  
  if (n < 3 || i === n+1) {return array[n]}; // caso base
   // operacion a repetir
    array[i]=(array[i-1]+array[i-2]+array[i-3])*2;
    i++;
    return secuenciaInventada(array,n,i)
}
function convertirANum(array){
for (let i = 0; i < array.length; i++) {
  if(typeof array[i] === 'string') {
    array[i]=array[i].length;
  }else{
    array[i]=array[i];
  };
}return array;
};

function secuenciaHenry(array, n) {
  if (n < 0) {return false};
  array = convertirANum(array);
  let i=3
  let respuesta=secuenciaInventada(array,n,i)
  return respuesta;
}

7
/ ---- Recursión ----
// EJERCICIO 7
// La función countDeep recibe por parámetro un arreglo que contiene números y/o arreglos (estos últimos contienen, a su vez, más números 
//y/o arreglos), y retorna la cantidad de arreglos que hay en total, incluyendo al padre.
// Ejemplo:
// countDeep( [ 1, 2, 3, [ 4, [ 5, 6 ] ], 7, [ 8 ], 9] ) ----> Debería retornar 4

function countDeep(arr, cont = 1) {
  // Tu código aca:
  for (let index = 0; index < arr.length; index++) {
    if (Array.isArray(arr[index])){
        cont = countDeep(arr[index], cont) + 1
    };
  };
return cont;
};

// EJERCICIO 8
// Implementar la función isAncestor: debe determinar si dado dos nombres de personas las mismas
// son parientes o no (La primera debe ser ancestro de la segunda). La función recibira un objeto
// que va a representar sólo la parte femenina del "arbol genealogico" familiar y será de la siguiente forma:
// const genealogyTree = {
//   "Mona Simpson": [],
//   "Marge Simpson": ["Lisa Simpson", "Maggie Simpson"],
//   "Jacqueline Bouvier": [ "Patty Bouvier", "Marge Simpson", "Selma Bouvier"],
//   "Patty Bouvier": [],
//   "Selma Bouvier": ["Ling Bouvier"],
//   "Edwina": ["Abigail Simpson"],
//   "Lisa Simpson": [],
//   "Maggie Simpson": [],
//   "Ling Bouvier": []
// }
// Ejemplo:
//  - Caso que devuelve true --> isAncestor(genealogyTree, "Jacqueline Bouvier", "Maggie Simpson")
//  - Caso que devuelve false --> isAncestor(genealogyTree, "Jacqueline Bouvier", "Abigail Simpson")
//  [Observar los tests para otros casos]
var isAncestor = function (genealogyTree, ancestor, descendant) {
  // Tu código aca:
  if(Array.isArray(genealogyTree[ancestor]) === null) {
    return false //caso base
  }
  for( let i=0; i<genealogyTree[ancestor].length;i++){
  if(genealogyTree[ancestor][i]===descendant) {
    return true;
  } else { 
     if(isAncestor(genealogyTree,genealogyTree[ancestor][i],descendant )) {
       return true;
     }
   }
}
return false
};

8
// Ejercicio B.
// Implementar una funcion que retorne true o false si el numero pasado por parametro es palindromo.
// Controlar que el numero pasado por parametro tengas mas de tres cifras, si el nro pasado tiene 2 o menos cifras
// o es negativo devolver null.
// Palindromo es una expresion que se lee igual de derecha a izquierda o viceversa.
// Ejemplo de numeros palindromos: 1001, 252, 2001, 2222, 9889.

function isPalindrome(number, secondNum ='', count = -1) {
    //que tenga mas o igual que 3 cifras, caso contrario null;
    //si es palindromo entonces retorno true, sino falso;
// if (number < 100) return null;
// let string = ''
// string = string + number;

// for (let index = 0; index < Math.floor(string.length / 2); index++) {
//  if(string[index] !== string[string.length-1-index]) { return false}; 
// }
// return true;
if (number < 100) return null;
if (count === string.length * -1) { return (string === secondNum)}
let string = number.toString();
secondNum += string[string.length + count];
count--;
return isPalindrome(number,secondNum,count)

}

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

10
function newtonRaphson(x, count,pre = x/2,contador=0) {
  //casos base
  if (x < 0 || Math.floor(x) !== x) { return -1}
  if (count === 0) return pre;
  if (contador === count) {return pre}
  // encontrar nuevos argumentos 

  
 
  // hago la operacion
  pre = (pre + (x/pre))/2;
  contador++

   //para cada nuevos argumentos llamar a recursiva
  return newtonRaphson(x,count,pre,contador);

}
//repaso martina
//repaso martina
// Devolver la cantidad de propiedades de un objeto, teniendo en cuenta los objetos anidados y no los arrays anidados.

var countProps = function(obj){
  let count=0;
  //for in recorre las propiedades de los objeto
  for (const key in object) {
      count++;
      if (typeof obj[key] === 'object') {
          //ojo los array tambien devuelven true
          if (!Array.isArray(obj[key])) {
              count += countProps(obj[key]);
          }
      }
  }
  return count;
  }
  
  var obj = {
      a: {
          a1:10,
          a2: 'Frsnco',
          a3: {f: 'r',a:'n', c : {o: true}}
      },
      b:2,
      c: [1,{a:1},'franco']
  }
  
  console.log(countProps(obj))

  //repaso mati

  function direcciones(laberinto,direccion = ''){
    let elemento
    //caso base
    if(!laberinto) {return ''}
    //operacion a repetir
    for (var key in laberinto) {
      
        elemento = laberinto[key]
        if( elemento === 'destino'){
          return direccion + key;
        } else {
          if( typeof elemento === 'object'){ 
            direccion = direccion + key;
            return (direcciones(elemento,direccion))

          }
        };
        
      
    }
  }