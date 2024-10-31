console.log("************** CHALLENGE 04 *********************");

const expensiveFunction = () : number => {
    console.log("Una única llamada");
    return 3.1415;
  }

const memoize = <T> (fn: () => T): () => T => {
  let resultado : T | undefined;

  return () => {
    if (resultado !== undefined) {
      return resultado;
    }
    resultado = fn();
    return resultado;
  };
};
  
const memoizeOneLine = <T> (fn: () => T): () => T => {
    let resultado; return () => (resultado !== undefined ? resultado : (resultado = fn()));
  };

const memoized = memoize(expensiveFunction);
console.log("Memoized sin argumentos:");
console.log(memoized()); // Una única llamada // 3.1415
console.log(memoized()); // 3.1415
console.log(memoized()); // 3.1415

let count = 0; 

const repeatText = (repetitions: number, text: string) : string =>
  (count++, `${text} `.repeat(repetitions).trim())

const memoizeArguments = <T extends any[], R>(fn: (...args: T) => R) => {
  let resultado: { [key: string]: R } = {};

  return (...args: T): R => {
    const key = args.join("_");

    if (resultado[key] !== undefined) {
      return resultado[key];
    }

    resultado[key] = fn(...args);
    return resultado[key];
  };
};

const memoizedGreet = memoizeArguments(repeatText);

console.log("Memoized con argumentos:");
console.log(memoizedGreet(1, "pam"));   // pam
console.log(memoizedGreet(3, "chun"));  // chun chun chun
console.log(memoizedGreet(1, "pam"));   // pam
console.log(memoizedGreet(3, "chun"));  // chun chun chun
console.log(count);  