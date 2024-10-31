console.log("************** PRACTICE *********************");
console.log("************** PRACTICE 101 - BIGGUEST WORD *********************");

const biggestWord = (phrase: string) => {
  const words = phrase.split(' ');
  
  const longestWord = words.reduce((acc, currentWord) => {
     if (currentWord.length > acc.length) {
    return currentWord;
  }
    return acc;
}, "")
  return longestWord;
}; 

// Ejemplos
console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener"
console.log(biggestWord("Ejercicios básicos de JavaScript")); // "Ejercicios
