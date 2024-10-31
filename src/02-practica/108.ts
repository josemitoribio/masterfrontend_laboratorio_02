console.log("************** PRACTICE 108 - INCLUDES *********************");

const includesBucle = (array: number[], value: number) :boolean => {
  for (let i = 0; i < array.length; i++){
    if (array[i] === value) {
      return true; 
    }
  }
  return false; 
}

console.log(includesBucle([1, 2, 3], 3)); 
console.log(includesBucle([1, 2, 3], 0)); 

const includesIndex = (array: number[], value: number) :boolean => {
  return array.indexOf(value) !== -1; 
}

console.log(includesIndex([1, 2, 3], 3)); 
console.log(includesIndex([1, 2, 3], 0)); 

const includes = (array: number[], value: number) :boolean => {
  return array.includes(value); 
}

console.log(includes([1, 2, 3], 3)); 
console.log(includes([1, 2, 3], 0)); 