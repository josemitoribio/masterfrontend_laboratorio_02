console.log("************** PRACTICE 205 - FIBONACCI *********************");

const fib = (n: number) :number => {
  
    let [a, b] = [0, 1];
  
    for (let i = 2; i <= n; i++) {
      [a, b] = [b, a + b];
    }
    
    return n === 0 ? a : b;
  };

// Ejemplos de uso
console.log(fib(0));  // 0
console.log(fib(1));  // 1
console.log(fib(2));  // 1
console.log(fib(3));  // 2
console.log(fib(4));  // 3
console.log(fib(5));  // 5
console.log(fib(10)); // 55
  