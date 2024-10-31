console.log("************** CHALLENGE 06 *********************");

//------------- CUESTIÓN 1

const x : number = NaN;

console.log("Cuestión 1");
console.log(x === x); // false

//------------- CUESTIÓN 2

const isNaNValue = (v :number) : boolean => Number.isNaN(v);

console.log("Cuestión 2");
console.log(isNaNValue(NaN)); // true

//------------- CUESTIÓN 3

const isNaNValueTwo = (v :number) : boolean => Number.isNaN(v);

const y : number = NaN;

console.log("Cuestión 3");
console.log(!isNaNValue(y) && y !== y); // false

/*
No habría forma de que la expresión !isNaNValue(y) && y !== y fuese true puesto que
isNaNValue(y) siendo y = Nan devuelve true y !isNaNValue(y) false, mientras que para que
y !== y sea true y debería ser y =  Nan, por lo tanto la lógica de !isNaNValue(y) && y !== y
se contradice entre sí y devolverá false.
*/ 

//------------- CUESTIÓN 4

const z : number = Infinity;

console.log("Cuestión 4");
console.log(z + 1 === z - 1); // true

//------------- CUESTIÓN 5

const q : { valueOf: () => number } = {
    valueOf: function() {
      return Math.random();  
    }
  };

console.log("Cuestión 5");
console.log(q > q); // true

/*
Aunque es un truco cuyo uso no es práctico ni recomendado he encontrado la forma
mediante el uso de valueOf junto con Math.random. De este modo 
Cuando JavaScript ejecuta q > q, evalúa x a la izquierda y a la derecha por separado. 
Como he utilizado el método valueOf para que devuelva un número aleatorio, 
cada evaluación de q puede devolver un valor distinto y de esta forma hay ocasiones en que
el valor de la izquierda sea mayor que el de la derecha y devuelva true.
*/