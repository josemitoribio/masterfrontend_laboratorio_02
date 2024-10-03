console.log("************** DELIVERABLE 02 *********************");

const arrayFirst: number[] = [1, 2, 3, 4];
const arraySecond: number[] = [5, 6, 7, 8];
const arrayThird: number[] = [9, 10, 11, 12];

const concat = <T>(a: T[], b: T[]): T[] => [...a, ...b];
const concatResult = concat<number>(arrayFirst, arraySecond);

console.log(`El resultado de Concat: ${concatResult}`);


const concatMulti = <T>(...arrays : T[][]) : T[] => {
  const result = [];   
  
  for (const array of arrays) { 
    for (const item of array) { 
      result.push(item); 
    }
  }
  return result;
};

const concatMultiResult = concatMulti<number>(arrayFirst, arraySecond, arrayThird);

console.log(`El resultado de Concat Multi: ${concatMultiResult}`); 