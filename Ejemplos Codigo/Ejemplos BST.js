// 1
// ----- BST -----

// EJERCICIO 7
// Implementar la función generateBST para que a partir de un array recibido como parametro
// genere un BinarySearchTree. Devolver dicho arbol generado.
// Ejemplo:
//    - array(16,6,23,2,17,31,14,5);
//    - arbol generado:
//             16
//          /      \
//        6         23
//      /  \       /   \
//     2    14    17    31
//      \
//       5


var generateBST = function (array) {
  // Tu código aca:
var tree = new BinarySearchTree(array[0]);
// console.log(tree)
for (let index = 1; index < array.length; index++) {
  const element = array[index];
  tree.insert(element)
  }
  // console.log(tree);
  return tree
}

// 2
// ----- BST -----

// EJERCICIO 7
// Implementar la función height dentro del prototype de BinarySearchTree que debe devolver la "altura"
// máxima del arbol recibido por parámetro.
// Ejemplo:
//             16             ---> Nivel 1
//          /      \
//        6         23        ---> Nivel 2
//      /  \       /   \
//     2    14    17    31    ---> Nivel 3
//      \
//       5                    ---> Nivel 4
// Este arbol tiene una altura de 4
// PISTA: Una forma de resolverlo es pensarlo recursivamente y usando Math.max

BinarySearchTree.prototype.height = function(){
  // Tu código aca:
     /* if (!this.value) {
      return 0;
    }
  
    return 1 + Math.max(this.right.height(), this.left.height());
  };*/
      if (this.value === null){
  	            return 0;
      }
  	        else {
        	      /* compute the depth of each subtree */
  	            let lDepth = this.right.height();
                let rDepth = this.left.height();
  	   
  	            /* use the larger one */
  	            if (lDepth > rDepth){
  	                return (lDepth + 1);
                  }
  	             else{
                  return (rDepth + 1);
                }
	        }
    }


// ---------------


// Ejercicio 8
// Dado un arreglo ordenado, encontrar el índice de un elemento específico pasado como parámetro
// utilizando el método conocido como búsqueda binaria. En el caso de que el número buscado no se encuentre
// en el array devolver -1.
// Para mayor información sobre dicho método:
//    - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
//    - https://en.wikipedia.org/wiki/Binary_search_algorithm
// Ejemplo:
//    array = [1,2,3,4,5,6,7,8,9,10];
//    binarySearch(array, 2) --> Devolvería 1 ya que array[1] = 2
//    [Donde 2 sería el número sobre el cuál queremos saber su posición en el array]


  var binarySearch = function (array, target) {
    // Tu código aca:
    //console.log(...array);

    let first = 0;    //left endpoint
    let last = array.length - 1;   //right endpoint
    let position = -1;
    let found = false;
    let middle;
 
    while (found === false && first <= last) {
        middle = Math.floor((first + last)/2);
        if (array[middle] == target) {
            found = true;
            position = middle;
        } else if (array[middle] > target) {  //if in lower half
            last = middle - 1;
        } else {  //in in upper half
            first = middle + 1;
        }
    }
    return position;
    

}


// 3
// ----- BST -----

// EJERCICIO 7
// Implementar la función generateBST para que a partir de un array recibido como parametro
// genere un BinarySearchTree. Devolver dicho arbol generado.
// Ejemplo:
//    - array(16,6,23,2,17,31,14,5);
//    - arbol generado:
//             16
//          /      \
//        6         23
//      /  \       /   \
//     2    14    17    31
//      \
//       5

var generateBST = function(array){
  /* Tu codigo aqui */
  // creo la cabecera
  var arbol = new BinarySearchTree(array[0]);
for (let index = 1; index < array.length; index++) {
  const element = array[index];
  arbol.insert(element);
  
}
return arbol;
}


7
// ---- Arboles Binarios ----
// EJERCICIO 4
// Implementar la función searchMin que busque en nuestro arbol binario, el valor minimo.
// Ejemplo:
//             16
//          /      \
//        6         23
//      /  \       /   \
//     2    14    17    31
//      \
//       5
//  Debería retornarnos 2
BinarySearchTree.prototype.searchMin = function () {
  if (this.left === null) { // no tiene hijo izq
    return this.value;
  } else { // tiene hijo izq, recursivo
    return this.left.searchMin();
  }

};

// 8
/*****************************************************************/
/****************************** BST ******************************/
/*****************************************************************/

// Ejercicio E.

// Dado un Binary Search Tree, devolver las hojas de ese arbol en un array
// ordenado de menor a mayor.
// Si se nos presenta un arbol como el que se encuentra en el archivo BST.png
// la funcion deberia retornar [1, 5, 14].


BinarySearchTree.prototype.getLeafs = function () {
    let visited = [];
    let queue = [];
    let current = this;
    queue.push(current);

    while (queue.length) {
        current = queue.shift();
        if (current.left === null && current.right === null) visited.push(current.value);

        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }
    console.log(visited)
    return visited;
    
};
// 9
//  EJERCICIO 7
// *
// * Implemtnar la funcion height dentro del prototype de BinarySearchTree que calcule la altura de un arbol.
// *
// * Parametros: -
// * Valor de retorno: altura del arbol
// *
// * Pista: funcion auxiliar, calcular la altura de un arbol.[Una forma de resolverlo es pensarlo recursivamente y usando Math.max]
// *
// *            16             ---> Nivel 1
//           /      \
//         6         23        ---> Nivel 2
//       /  \       /   \
//      2    14    17    31    ---> Nivel 3
//       \
//        5                    ---> Nivel 4

// * La funcion devolveria 3
// * */

BinarySearchTree.prototype.height = function () {
  if(this.value === null) {return 0}
  if(this.left === null && this.right === null){ return 1;  }
  if(this.left === null){ return 1 + this.right.height(); }
  if(this.right === null){ return 1 + this.left.height();}
  return 1+Math.max(this.left.height(),this.right.height());
};


/*
* EJERCICIO 8
*
* Implemtnar la funcion balanced dentro del prototype de BinarySearchTree que determine si el arbol
* se encuentra o no balanceado.
* vamos a decir que un árbol es balanceado cuando la cantidad de nodos que haya a la izquierda del root 
* sea igual (o no difiera en más de una unidad) a la cantidad de nodos en la parte izquierda.


* Parametros: -
* Valor de retorno:
*   true: si el arbol esta balanceado
*   false: si el arbol no esta balanceado
*
*
*            16             ---> Nivel 1
          /      \
        6         23        ---> Nivel 2
      /  \       /   \
     2    14    17    31    ---> Nivel 3
      \
       5                    ---> Nivel 4

* La funcion devolveria true
*
* TIP: Se pueden usar funciones previamente definidas
* */

BinarySearchTree.prototype.balanced = function () {
  let cantIzq = 0; 
  let cantDer = 0;
  if (this.left !== null) {cantIzq = this.left.size();}
  if (this.right !== null) {cantDer = this.right.size()};
  if((cantIzq - cantDer) >= -1 && (cantIzq - cantDer) <= 1) {return true} 
  else {return false}
};

// 10
// EJERCICIO 7
// *
// * Implemtnar la funcion height dentro del prototype de BinarySearchTree que calcule la altura de un arbol.
// *
// * Parametros: -
// * Valor de retorno: altura del arbol
// * 
// * Salida:
// *   > Altura del arbol 
// *
// * Pista: funcion auxiliar, calcular la altura de un arbol.[Una forma de resolverlo es pensarlo recursivamente y usando Math.max]
// *
// *            16             ---> Nivel 1
//           /      \
//         6         23        ---> Nivel 2
//       /  \       /   \
//      2    14    17    31    ---> Nivel 3
//       \
//        5                    ---> Nivel 4

// * La funcion devolveria 3
// * */

BinarySearchTree.prototype.height = function (height = 1) {
  // Tu código aca:
  if(this.value === null) {return 0}
  if(this.left === null && this.right === null){ return 1;  }
  if(this.left === null){ return 1 + this.right.height(); }
  if(this.right === null){ return 1 + this.left.height();}
  return 1+Math.max(this.left.height(),this.right.height());
};

/*
* EJERCICIO 8
*
* Implemtnar la funcion balanced dentro del prototype de BinarySearchTree que determine si el arbol
* se encuentra o no balanceado.
*
* Parametros: -
* 
* Salida:
*   > true: si el arbol esta balanceado
*   > false: si el arbol no esta balanceado
*
*
*            16             ---> Nivel 1
          /      \
        6         23        ---> Nivel 2
      /  \       /   \
     2    14    17    31    ---> Nivel 3
      \
       5                    ---> Nivel 4

* La funcion devolveria true
*
* TIP: Se pueden usar funciones previamente definidas
* */

BinarySearchTree.prototype.balanced = function () {
  // Tu código aca:
  let cantIzq = 0; 
  let cantDer = 0;
  if (this.left !== null) {cantIzq = this.left.size();}
  if (this.right !== null) {cantDer = this.right.size()};
  if((cantIzq - cantDer) >= -1 && (cantIzq - cantDer) <= 1) {return true} 
  else {return false}
};