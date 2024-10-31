console.log("************** CHALLENGE 02 *********************");

type MyObject = {
  a: number;
  b: {
    c: any; 
    d: {
      e: number;
      f: {
        g: string;
      };
    };
  };
};

const myObject: MyObject = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: "bingo",
      },
    },
  },
};

const deepGet = (object: MyObject, ...keys: string[]): any => {
  if (keys.length === 0) {
    return object;
  }

  for (const key of keys) {
    if (object && key in object) {
      object = object[key];
    } else {
      return undefined;
    }
  }

  return object;
};

console.log("Results of deepGet:");
console.log(deepGet(myObject, "x")); // undefined
console.log(deepGet(myObject, "a")); // 1
console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
console.log(deepGet(myObject, "b", "c")); // null
console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
console.log(deepGet(myObject));  // {a: 1, b: {...}}

const myObjectSet: Record<string, any> = { };

const deepSet = (value: any, object: Record<string, any>, ...keys: string[]): void => {
  let current = object;

  if (!current || keys.length === 0) {
    return;
  }
  
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];

    if (!(key in current)) {
      current[key] = {}; 
    }
    current = current[key];
  }

  current[keys[keys.length - 1]] = value;
};

console.log("Results of deepSet:");
deepSet(1, myObjectSet, "a", "b");
console.log(JSON.stringify(myObjectSet));  // {a: { b: 1}}
deepSet(2, myObjectSet, "a", "c");
console.log(JSON.stringify(myObjectSet));  // {a: { b: 1, c: 2}}
deepSet(3, myObjectSet, "a");
console.log(JSON.stringify(myObjectSet));  // {a: 3}
deepSet(4, myObjectSet);
console.log(JSON.stringify(myObjectSet));  // Do nothing // {a: 3}
