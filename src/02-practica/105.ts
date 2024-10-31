console.log("************** PRACTICE 105 - DEEP EQUAL *********************");

// APARTADO A:

interface User {
  name: string,
  age: number
}

const user : User = { name: "María", age: 30 };
const clonedUser : User = { name: "María", age: 30 };

console.log(user === clonedUser); // false

const isEqual = (a: User, b: User) :boolean => {
 
 const keysA = Object.keys(a);
 const keysB = Object.keys(b);
 
 if (keysA.length !== keysB.length){
   return false;
 }
 for (let key of keysA) {
    if (!b.hasOwnProperty(key) || a[key] !== b[key]) {
      return false;
    }
  }
  
 return true
}

console.log("Son iguales: " + isEqual(user, clonedUser)); // true

//APARTADO B:


interface UserPro {
  name: string,
  age: number,
  address: {
    city: string,
    code:number
  }
  friends: string[]
}

const userB : UserPro = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};

const clonedUserB : UserPro = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};

const isDeepEqual = (a: UserPro, b: UserPro) :boolean => {
  
  if (a === b) return true;

 
  if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) {
    return false; 
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  
  for (let key of keysA) {
    if (!b.hasOwnProperty(key) || !isDeepEqual(a[key], b[key])) {
      return false; 
    }
  }

  return true; 
}

console.log(isDeepEqual(userB, clonedUserB));

