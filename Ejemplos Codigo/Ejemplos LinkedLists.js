const { Console } = require("console");

function LinkedList() {
  this.head = null;
}
function Node(valor){
  this.value = valor;
  this.next = null;
}

LinkedList.prototype.add = function(valor) {
  var nuevoNodo = new Node(valor);

  if(!this.head){
    this.head = nuevoNodo;
  } else {
    var tailActual = this.head;
    while (tailActual.next !== null) {
      tailActual = tailActual.next;
    }
    tailActual.next = nuevoNodo;
  }
}


// 1

// ----- LinkedList -----

// EJERCICIO 3
// Implementar el método size dentro del prototype de LinkedList que deberá retornar el tamaño actual de
// la LinkedList. En el caso de que la lista se encuentre vacía deberá retornar cero.
// Ejemplo:
//    var lista = new LinkedList();
//    lista.size(); --> 0
//    lista.add(1);
//    lista.size(); --> 1
//    lista.add(2);
//    lista.add(3);
//    lista.size(); --> 3

LinkedList.prototype.size = function () {
  let suma =0;
  // Tu código aca:
  if(!this.head){
    return suma;
  } else {
    var tailActual = this.head;
    suma ++
    while (tailActual.next !== null) {
      tailActual = tailActual.next;
      suma ++
    }
  }
  return suma;
}



// EJERCICIO 4
// Implementar el método removeFromPos dentro del prototype de LinkedList que deberá remover un elemento de
// la posición indicada ("pos" será la posición del elemento a remover).
// En el caso de que la posición en la que se quiera hacer el remove no sea válida (Supere el tamaño de
// la lista actual o sea un número negativo) debe devolver false.
// Si el nodo fue removido correctamente devolver el valor del nodo.
// Aclaración: la posición cero corresponde al head de la LinkedList
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> [2] --> [3] --> [4]
//    lista.removeFromPos(2);
//    Ahora la lista quedaría: Head --> [1] --> [2] --> [4] y la función debería haber devuelto el valor 3
// Ejemplo 2:
//    Suponiendo que se pide una posición inválida: removeFromPos(8) --> false

LinkedList.prototype.removeFromPos = function (pos) {
  // Tu código aca:
  if (this.next === null) return false; //lista vacia
  let current = this.head;
  let posterior = null;
  let anterior = null;
  let posActual = 0;
  while (current) {
    if (posActual === pos) { //encontre la posicion
      if (pos === 0) { // la posicion a eliminar es el head posicion 0
        if (!current.next) { //lista con un solo nodo
            let valor = current.value;
            current = null;
            return valor;
        }
        this.head = current.next;
        
        return current.value;
      } else if (anterior.next){ // la posicion es 1  y mayor que 1
            anterior.next = posterior;
            return current.value;
      } else { //la posicion a eliminar es la ultima
            anterior.next = null;
            return current.value;
      }
    };
    anterior = current;
    current = current.next;
    posActual ++;
    if (!current && posActual < pos) {return false} // si pos es mas grande que la lista
    else if (current) {posterior = current.next};
    
  }
  return false;
}




// EJERCICIO 5
// Implementar la función orderLinkedList que ordene los elementos de la lista pasada por parámetro
// y retorne una nueva lista con dichos elementos ya ordenados.
// Ejemplo:
//    Lista original: Head --> 4 --> 13 --> 1 --> 10 --> null
//    Lista nueva luego de aplicar el order: Head --> 1 --> 4 --> 10 --> 13 --> null
// IMPORTANTE: Pueden usar algun método de ordenamiento ya visto para tener un arreglo ordenado y a
// partir de él construir la nueva lista ordenada

var orderLinkedList = function (linkedList) {
  // recorrer la lista hasta el final
  let current = linkedList.head;
  // console.log(current)
  let index = 0;
  let array = [];
  if (!current){ //lista vacia
    return undefined
  }
  // sino esta vacia recorro hasta el final
  while (current) {
    array[index] = current.value;
    current = current.next;
    index ++
  }
  // ahora ordeno el array
  let value;
  let j = 0;
  for (let index = 0; index < array.length; index++) {
    value = array[index];
    j = index -1;
    while (j >= 0 && array[j] > value) {
      array[j+1] = array[j];
      j = j-1;
    }
    array[j+1] = value;
  }
  // creo y lleno una nueva lista
  var nuevaLista;
  nuevaLista = new LinkedList();
  for (let index = 0; index < array.length; index++) {
    nuevaLista.add(array[index]);
    
  }
  return nuevaLista;
  }


// 2
// EJERCICIO 5
// Implementar la función mergeLinkedLists que, a partir de dos listas simplemente enlazadas 
// del mismo tamaño retorne una nueva lista con los elementos de ambas listas
// Ejemplo:
//    Lista 1: Head --> 1 --> 7 --> 20 --> null
//    Lista 2: Head --> 4 --> 13 --> 2 --> null
//    Lista nueva luego de aplicar mergeLinkedLists:
//             Head --> 1 --> 4 --> 7 --> 13 --> 20 --> 2 --> null
// Nota: las listas enlazadas mergeadas intercalandose.
// El nodo 1 de la lista 1, se conecta con el nodo 1 de la lista 2.
// Continuando con el nodo 2 de la lista 2, conectandose con el nodo 2 de la lista 2.
var mergeLinkedLists = function(linkedListOne, linkedListTwo){
  // Tu código aca:
  if (!linkedListOne) {
    return linkedListTwo
} else if (!linkedListTwo) {
    return linkedListOne;
}

let mergedHead = null;
if (linkedListOne.data <= linkedListTwo.data) {
    mergedHead = linkedListOne;
    linkedListOne = linkedListOne.next;
} else {
    mergedHead = linkedListTwo
    linkedListTwo = linkedListTwo.next;
}

let mergedTail = mergedHead;

while (linkedListOne && linkedListTwo) {
    let temp = null;
    if (linkedListOne.data <= linkedListTwo.data) {
        temp = linkedListOne;
        linkedListOne = linkedListOne.next;
    } else {
        temp = linkedListTwo;
        linkedListTwo = linkedListTwo.next;
    }

    mergedTail.next = temp;
    mergedTail = temp;
}

if (linkedListOne) {
    mergedTail.next = linkedListOne;
} else if (linkedListTwo) {
    mergedTail.next = linkedListTwo;
}

return mergedHead;

}

// 3
// ----- LinkedList -----

// EJERCICIO 3
// Implementar el método size dentro del prototype de LinkedList que deberá retornar el tamaño actual de
// la LinkedList. En el caso de que la lista se encuentre vacía deberá retornar cero.
// Ejemplo:
//    var lista = new LinkedList();
//    lista.size(); --> 0
//    lista.add(1);
//    lista.size(); --> 1
//    lista.add(2);
//    lista.add(3);
//    lista.size(); --> 3

LinkedList.prototype.size = function(){
  let contador = 0;
  if (!this.head) {return contador; 
  } else {
    let tailActual = this.head;
    contador = contador +1;
    while (tailActual.next !== null) {
      contador = contador +1;
      tailActual = tailActual.next;
    }
    return contador;
  }
} 


// EJERCICIO 4
// Implementar el método addInPos dentro del prototype de LinkedList que deberá agregar un elemento en
// la posición indicada. Ambos datos serán brindados como parámetro (pos, value). Donde "pos" será la
// posición en la cual se deberá agregar el valor "value". En el caso de que la posición en la que se
// quiera hacer la inserción no sea válida (Supere el tamaño de la lista actual) debe devolver false.
// Si el nodo fue agregado correctamente devolver true.
// Aclaración: la posición cero corresponde al head de la LinkedList
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> [2] --> [4]
//    lista.addInPos(2, 3);
//    Ahora la lista quedaría: Head --> [1] --> [2] --> [3] --> [4]
// Ejemplo 2:
//    Suponiendo que la lista está vacía: Head --> null
//    lista.addInPos(2, 3); --> Debería devolver false ya que no es posible agregar en la posición 2
//    sin antes tener cargada la posición 0 y 1.

LinkedList.prototype.addInPos = function(pos,value){
  
  if (this.size()<pos) {return false};
  let nuevoNodo = new Node (value);
  let current = this.head;
  let anterior = null;
  let posActual = 0;
  while (posActual <= pos) {
    if (posActual === pos) { //encontre la posicion
       if (anterior.next){ // la posicion es 1  y mayor que 1
            nuevoNodo.next = anterior.next;
            anterior.next = nuevoNodo;
            return true;
      } else { //la posicion a add es la ultima
            nuevoNodo.next = null;
            anterior.next = nuevoNodo;
            return true;
      }
    };
    anterior = current;
    current = current.next;
    posActual ++;
  }
  return false;
}

// EJERCICIO 5
// Implementar el método removeFromPos dentro del prototype de LinkedList que deberá remover un elemento de
// la posición indicada ("pos" será la posición del elemento a remover).
// En el caso de que la posición en la que se quiera hacer el remove no sea válida (Supere el tamaño de
// la lista actual o sea un número negativo) debe devolver false.
// Si el nodo fue removido correctamente devolver el valor del nodo.
// Aclaración: la posición cero corresponde al head de la LinkedList
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> [2] --> [3] --> [4]
//    lista.removeFromPos(2);
//    Ahora la lista quedaría: Head --> [1] --> [2] --> [4] y la función debería haber devuelto el valor 3
// Ejemplo 2:
//    Suponiendo que se pide una posición inválida: removeFromPos(8) --> false

LinkedList.prototype.removeFromPos = function(pos){
  // Tu código aca:
  if (this.next === null) return false; //lista vacia
  let current = this.head;
  let posterior = null;
  let anterior = null;
  let posActual = 0;
  while (current) {
    if (posActual === pos) { //encontre la posicion
      if (pos === 0) { // la posicion a eliminar es el head posicion 0
        if (!current.next) { //lista con un solo nodo
            let valor = current.value;
            current = null;
            return valor;
        }
        this.head = current.next;
        
        return current.value;
      } else if (anterior.next){ // la posicion es 1  y mayor que 1
            anterior.next = posterior;
            return current.value;
      } else { //la posicion a eliminar es la ultima
            anterior.next = null;
            return current.value;
      }
    };
    anterior = current;
    current = current.next;
    posActual ++;
    if (!current && posActual < pos) {return false} // si pos es mas grande que la lista
    else if (current) {posterior = current.next};
  }
  return false;

}


// 5
// ----- LinkedList -----
  
  // EJERCICIO 3
  // Implementar el método size dentro del prototype de LinkedList que deberá retornar el tamaño actual de
  // la LinkedList. En el caso de que la lista se encuentre vacía deberá retornar cero.
  // Ejemplo:
  //    var lista = new LinkedList();
  //    lista.size(); --> 0
  //    lista.add(1);
  //    lista.size(); --> 1
  //    lista.add(2);
  //    lista.add(3);
  //    lista.size(); --> 3
  
  LinkedList.prototype.size = function(){
    let tamanio = 0;
    if (this.head) {//lista no vacia
      let tailActual = this.head;
      tamanio = 1;
      while (tailActual.next !== null) {
        tailActual = tailActual.next;
        tamanio = tamanio + 1;
        }
    }
    return tamanio;
  }
/*  Para probar el ejercicio 3
  var linkedList;
  linkedList = new LinkedList();
  console.log(linkedList.size())//.to.equal(0);
  linkedList.add(1);
  linkedList.add(2);
  console.log(linkedList.size())//.to.equal(2);
  linkedList.add(3);
  console.log(linkedList.size())//.to.equal(3); */
  // EJERCICIO 4
  // Implementar el método addInPos dentro del prototype de LinkedList que deberá agregar un elemento en
  // la posición indicada. Ambos datos serán brindados como parámetro (pos, value). Donde "pos" será la
  // posición en la cual se deberá agregar el valor "value". En el caso de que la posición en la que se
  // quiera hacer la inserción no sea válida (Supere el tamaño de la lista actual) debe devolver false.
  // Si el nodo fue agregado correctamente devolver true.
  // Aclaración: la posición cero corresponde al head de la LinkedList
  // Ejemplo 1:
  //    Suponiendo que la lista actual es: Head --> [1] --> [2] --> [4]
  //    lista.addInPos(2, 3);
  //    Ahora la lista quedaría: Head --> [1] --> [2] --> [3] --> [4]
  // Ejemplo 2:
  //    Suponiendo que la lista está vacía: Head --> null
  //    lista.addInPos(2, 3); --> Debería devolver false ya que no es posible agregar en la posición 2
  //    sin antes tener cargada la posición 0 y 1.
  
  LinkedList.prototype.addInPos = function(pos, value){
    var nuevoNodo = new Node(value);
    var retorno = false;
    var current = 0;
    if (!this.head) {//lista vacia
      if (pos === 0) {//el nodo a insertar es en la cabecera
        this.head = nuevoNodo;
        retorno = true;
      } else {// no se puede insertar por ejemplo el nodo 2 si la lista esta vacia
        retorno = false;
      }
    } else {// la lista no esta vacia
      var tailActual = this.head;
      var tailAnterior = null;
      while (current < pos) {
        tailAnterior = tailActual;
        tailActual = tailActual.next;
        current = current +1;
      }
      tailAnterior.next = nuevoNodo;
      nuevoNodo.next = tailActual;
      retorno = true;
    }
    return retorno
   }  
  
// para probar ejercico 4
/* var linkedList;
linkedList = new LinkedList();
console.log(linkedList.addInPos(2,2));//.to.equal(false);
      linkedList.add(1);
      linkedList.add(2);
      console.log(linkedList.addInPos(2,3))//.to.equal(true);
      console.log(linkedList.head.next.next.value)//.to.equal(3);
      console.log(linkedList.head.next.next.next)//.to.equal(null);
      linkedList.add(4);
      linkedList.add(6);
      console.log(linkedList.addInPos(4,5))//.to.equal(true);
      console.log(linkedList.head.next.next.next.next.value)//.to.equal(5);
      console.log(linkedList.head.next.next.next.next.next.value)//.to.equal(6); */

  // EJERCICIO 5
  // Implementar el método reverse dentro del prototype de LinkedList que invierta el orden de la lista
  // original y retorne una nueva lista con dichos elementos invertidos de posición.
  // Ejemplo:
  //    Lista original: Head --> 1 --> 4 --> 10 --> 13 --> null
  //    Lista nueva luego de aplicar el reverse: Head --> 13 --> 10 --> 4 --> 1 --> null
  
  LinkedList.prototype.reverse = function(){
    let array = [];
    // recorro toda la lista y la registro en el array
    if (this.head) {//lista no vacia
      let tailActual = this.head;
      array.push(tailActual.value);
      while (tailActual.next !== null) {
        tailActual = tailActual.next;
        array.push(tailActual.value);
        }
    } 
    array = array.reverse();
    let linkedListNueva = new LinkedList();
    for (let index = 0; index < array.length; index++) {
      linkedListNueva.add(array[index]) ;
      }
    return linkedListNueva;
  }  

  // para probar ejercico 5
/*  var linkedList;
linkedList = new LinkedList();
linkedList.add(1);
      linkedList.add(2);
      linkedList.add(3);
      var revertedLinkedList = linkedList.reverse();
      console.log(revertedLinkedList.head)
      console.log(revertedLinkedList.remove())//.to.equal(1);
      console.log(revertedLinkedList.remove())//.to.equal(2);
      console.log(revertedLinkedList.remove())//.to.equal(3); */
  // --------------------

// / ----- LinkedList -----

// EJERCICIO 3
// Implementar el método size dentro del prototype de LinkedList que deberá retornar el tamaño actual de
// la LinkedList. En el caso de que la lista se encuentre vacía deberá retornar cero.
// Ejemplo:
//    var lista = new LinkedList();
//    lista.size(); --> 0
//    lista.add(1);
//    lista.size(); --> 1
//    lista.add(2);
//    lista.add(3);
//    lista.size(); --> 3

LinkedList.prototype.size = function () {
  // Tu código aca:
let resultado = 0;
if(!this.head){
  return resultado;
} else {
  resultado ++;
  let tailActual = this.head;
  while (tailActual.next !== null) {
    tailActual = tailActual.next;
    resultado ++;
  }
 
}
return resultado
}


var linkedList;


// EJERCICIO 4
// Implementar el método removeFromPos dentro del prototype de LinkedList que deberá remover un elemento de
// la posición indicada ("pos" será la posición del elemento a remover).
// En el caso de que la posición en la que se quiera hacer el remove no sea válida (Supere el tamaño de
// la lista actual o sea un número negativo) debe devolver false.
// Si el nodo fue removido correctamente devolver el valor del nodo.
// Aclaración: la posición cero corresponde al head de la LinkedList
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> [2] --> [3] --> [4]
//    lista.removeFromPos(2);
//    Ahora la lista quedaría: Head --> [1] --> [2] --> [4] y la función debería haber devuelto el valor 3
// Ejemplo 2:
//    Suponiendo que se pide una posición inválida: removeFromPos(8) --> false

LinkedList.prototype.removeFromPos = function (pos) {
  // Tu código aca:

  if(!this.head){
    return false;
  } else {
    
    let tailActual = this.head;
    let posActual = 0;
    let tailAnterior;
    let tailPosterior = tailActual.next;
    if (pos === 0) {
      let devolver = tailActual.value;
      this.head = tailPosterior;
      console.log(linkedList.head)
      return devolver;
    };
    while (tailActual.next !== null && posActual < pos) {
      console.log(posActual)
      tailAnterior = tailActual;
      tailActual = tailActual.next;
      tailPosterior = tailActual.next;
      posActual++;
      console.log(posActual);
    };
    if (posActual === pos) {
      tailAnterior.next = tailPosterior;
      return tailActual.value;
    } else {
      return false;
    }
  }
}


var linkedList;
linkedList = new LinkedList();
console.log(linkedList.removeFromPos(2))//.to.equal(false);
linkedList.add(1);
linkedList.add(2);
console.log(linkedList.removeFromPos(1))//.to.equal(2);
console.log(linkedList.head.value)//.to.equal(1);
console.log(linkedList.head.next)//.to.equal(null);
linkedList.add(4);
linkedList.add(6);
console.log(linkedList.removeFromPos(5))//.to.equal(false);
console.log(linkedList.removeFromPos(0))//.to.equal(1);
console.log(linkedList.head.value)//.to.equal(4);
console.log(linkedList.head.next.value)//.to.equal(6);

// 7
// ---- Linked List ----
//EJERCICIO 1
// Agregar el método orderList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de menor a mayor.
// Ejemplo:
//     Suponiendo que la lista actual es: Head --> [4] --> [5] --> [1]
//     lista.orderList();
//     Ahora la lista quedaría: Head --> [1] --> [4] --> [5]
// ACLARACIÓN: Se debe ordenar la lista original y no una nueva.
LinkedList.prototype.orderList = function () {
  // Tu código aca:
  
  let cambiado = true;
  let auxiliar = null
  do {
    cambiado = false;
    let cabecera = this.head;
    let siguiente = cabecera.next;
    while (siguiente != null) {
      if(cabecera.value > siguiente.value) {
            auxiliar = siguiente.value;
            siguiente.value = cabecera.value;
            cabecera.value = auxiliar;
            cambiado = true;
      }
      cabecera = cabecera.next;
      siguiente = cabecera.next;
    }
  } while (cambiado);
  return this  
};

// var linkedList = new LinkedList();

  
//     linkedList.add(6);
//     linkedList.add(4);
//     linkedList.add(2);
//     linkedList.add(7);
//     linkedList.add(8);
//     linkedList.add(1);
//     linkedList.orderList();
//     console.log(linkedList.head.value)//.to.equal(1);
//     console.log(linkedList.head.next.value)//.to.equal(2);
//     console.log(linkedList.head.next.next.value)//.to.equal(4);
//     console.log(linkedList.head.next.next.next.value)//.to.equal(6);
//     console.log(linkedList.head.next.next.next.next.value)//.to.equal(7);
//     console.log(linkedList.head.next.next.next.next.next.value)//.to.equal(8);


// EJERCICIO 2
// Agregar al prototipo de LinkedList un método reverseLinkedList que invierta el orden de los elementos de la lista.
// Ejemplo:
// let myList = Head --> [1] --> [2] --> [3] --> [4]
// myList.reverseLinkedList()
// myList = Head --> [4] --> [3] --> [2] --> [1]
LinkedList.prototype.reverseLinkedList = function () {
  // Tu código aca:
let array = [];
let current = this.head;
while (current) {
  array.push(current.value);
  current=current.next;
  console.log(array);
}
current = this.head;
while (current) {
  current.value = array.pop();
  current=current.next;
}
};

// EJERCICIO 3
// Implementar la función joinLinkedLists que, a partir de dos listas simplemente enlazadas
// del mismo tamaño retorne una nueva lista con los elementos de ambas listas
// Ejemplo:
//    Lista 1: Head --> [2] --> [8] --> [22] --> null
//    Lista 2: Head --> [6] --> [15] --> [4] --> null
//    joinLinkedList(linkedListOne, linkedListTwo)
//    Head --> [2] --> [6] --> [8] --> [15] --> [22] --> [4] --> null
function joinLinkedList(linkedListOne, linkedListTwo) {
  // Tu código aca:
  let tree = new LinkedList();
  let lista1 = linkedListOne.head;
  let lista2 = linkedListTwo.head;
  while (lista1) {
    tree.add(lista1.value);
    tree.add(lista2.value);
    lista1 = lista1.next;
    lista2 = lista2.next;
    
  }

  return tree;
}

// 8
/*****************************************************************/
/************************** Linked List **************************/
/*****************************************************************/

// Ejercicio A.
// Implementar los siguientes metodos para una linked list ya implementada.
// Ejemplo: head -> 12 -> 15 -> 16 -> 10 -> 2 -> null
// getHead() ---> Devuelve el primer nodo de la linkd list.
// myLinkedList.getHead() ---> devuelve 12.
// getTail() ---> Devuelve el ultimo nodo de la linked list.
// myLinkedList.getTail() ---> devuelve 2.
// search(value) ---> Devuelve la posicion del nodo con el valor recibido por parametro, contando desde 0.
// myLinkedList.search(16) ---> devuelve 2.

LinkedList.prototype.getHead = function () {
    if(!this.head) {return false} // la lista esta vacia.
    return this.head.value
};
// List = new LinkedList();
//                 List.add(15);
                
//                 List.add(30);
//                 List.add(22);
//                 List.add(100);

//                 console.log(List.getHead())//.to.equal(15);

LinkedList.prototype.getTail = function () {
    if(!this.head) {return false} // la lista esta vacia.
    let current = this.head;
    while (current.next !==null) {
        current = current.next;
    }
    return current.value;
};

LinkedList.prototype.search = function (value) {
    if(!this.head) {return false} // la lista esta vacia.
    let current = this.head;
    let contador = 0;
    while (current) {
        if (current.value === value) { return contador};
        contador++;
        current = current.next
    }
    return false
};


// /*
// //10
// * EJERCICIO 3
// *
// * Implementar el método compressList dentro del prototype de LinkedList que deberá DEVOLVER UNA NUEVA LISTA
// * en donde cada elemento se obtiene de aplicar la funcion a dos nodos consecutivos. Si la lista tiene un unico
// * elemento, debe devolver la lista con dicho elemento.
// *
// *
// * Parametros:
// *   func : funcion a aplicar
// *
// * Salida: 
// *   > una nueva lista con las caracteristicas mencionadas
// *
// * Ejemplos:
// * lista:  -> 5 -> 4 -> 9 -> 1 -> 2 -> null
// * func = function(a,b) return a+b; 
// * lista.compressList(func): -> 9 -> 10 -> null

// * ¿Por que? 
// *   - Toma el 5 y el 4 -> func(5, 4) -> retorna 9 => nuevo nodo con 9 
// *   - Toma el 9 y el 1 -> func (9, 1) -> retorna 10 => nuevo nodo con 10, consecutivo al nodo previamente creado
// *   - Toma el 2, no tiene un proximo elemento para aplicar la funcion, se deshecha 
// *   => Se obtiene una nueva lista que es:  -> 9 -> 10 -> null 
// *
// * lista: -> 2 -> 2 -> null
// * func = function(a,b) return a+b; 
// * lista.compressList(func): -> 4 -> null
// * 
// * ¿Por que? 
// *   - Toma el 2 y el 2 -> func(2, 2) -> retorna 4 => nuevo nodo con 4
// *   - No tengo mas nodos para aplicar la funcion 
// *   => Se obtiene una nueva lista que es: -> 4 -> null 

// *
// * lista: -> 2 -> null
// * func = function(a,b) return a+b; 
// * lista.compressList(func): -> 2 -> null
// * 
// * ¿Por que? 
// *   - La lista inicial tiene un UNICO nodo, por lo tanto no le aplicaremos funcion ni reduccion
// *   - No se puede reducir 
// *   - Devuelve una nueva lista igual a la provista  
// *   => Se obtiene una nueva lista que es: -> 2 -> null 
// * 
// * */
LinkedList.prototype.compressList = function (func) {
  let nuevaLista = new LinkedList();
  
  // Tu código aca:

  let current = this.head;

  let siguiente;
  let par = false;
  if (current && current.next === null){nuevaLista.add(current.value)}
  while (current && current.next !== null) {
    nuevaLista.add(func(current.value,current.next.value));
    if (current.next.next !== null) {current = current.next.next}
    else {return nuevaLista}
  }
  return nuevaLista;
};

//repaso marina

LinkedList.prototype.changeNotNumbers = function () {
let count = 0;
let current = this.head;
while (current) {
  console.log(Number('1'))
  numero =1
  strNumero = String(numero);
  console.log(typeof strNumero )
  console.log(numero.toString())
  console.log(String(numero))
  console.log('1')
  if (isNaN(Number(current.value))) {
    count++;
    current.value ='Cambiado'
  }
  current=current.next;
}
return count;
};

var nuevaLista = new LinkedList();

nuevaLista.add(1);
nuevaLista.add(2);
nuevaLista.add(3);
nuevaLista.add('Hernan');

console.log(nuevaLista)
console.log(nuevaLista.changeNotNumbers())
console.log(nuevaLista.head.next.next)