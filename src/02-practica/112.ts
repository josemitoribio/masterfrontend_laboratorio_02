console.log("************** PRACTICE 112 - SUBSETS *********************");

//Opción bucles:

const subsets = (word :string) : string[]=>{
  const result = [];

  for (let i = 1; i < word.length; i++) {
    result.push(word.slice(i));
  }
  return result;
}

console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]

//Opción sin bucles ni arrays auxiliares:

const subsetsWithoutAux =(word: string) :string[] =>{
  if (word.length === 0) {
    return []; 
  }

  let restOfTheWord = word.slice(1);

  return [restOfTheWord].concat(subsets(restOfTheWord)); 
}

console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]