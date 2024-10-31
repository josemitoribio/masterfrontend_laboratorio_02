console.log("************** PRACTICE 115 - ZIP *********************");

const zipObject = (keys: string[], values: string[]) : Record<string, string> => {
  let result = {};
  
  for(let i = 0; i < keys.length ; i++){
    if (i < values.length) {
      result[keys[i]] = values[i];
    }
  }
  return result
}

// Ejemplo
console.log(zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])); // {spanish: "hola", english: "hi", french: "salut"}
console.log(zipObject(["spanish", "english", "french"], ["hola"])); // {spanish: "hola"}