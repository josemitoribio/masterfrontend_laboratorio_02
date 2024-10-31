console.log("************** PRACTICE 114 - VALUES *********************");

// Devuelva una lista de valores de todas las propiedades de un objeto:

const valuesProperty = <T extends Record<string, any>>(obj: T): Array<T[keyof T]> => {
  return Object.values(obj); 
}
console.log(valuesProperty({ id: 31, duration: 310, name: "long video", format: "mp4" })); 


// Evita añadir las propiedades heredadas en caso de ser instancia de una clase:

const valuesOwnProperty = (obj) => {
  let result = [];
  
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) { 
      result.push(obj[key]); 
    }
  }
  
  return result;
}

// Ejemplo de uso

function Person(name: string) {
  this.name = name;
}

Person.prototype.walk = function() {
  console.log("I'm walking");
};

const john = new Person("John");
console.log(valuesOwnProperty(john)); 