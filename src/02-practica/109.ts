console.log("************** PRACTICE 109 - PRIMES *********************");

const isPrime = (num :number) : boolean => {
  if (num <= 1) return false; 
  for (let i = 2; i <= Math.sqrt(num); i++) { 
    if (num % i === 0) {
      return false;
    }
  }
  return true; 
}

const showPrimes = (from: number, to:number) : void => {
  for (let num = from; num <= to; num++) {
    if (isPrime(num)) {
      console.log(num + " is PRIME!");
    } else {
      console.log(num + " is not a prime");
    }
  }
}

showPrimes(1, 100);