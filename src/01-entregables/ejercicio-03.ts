console.log("************** DELIVERABLE 03 *********************");

interface A {
    name: string;
    surname: string;
    country: string;
}

interface B {
    name: string;
    age: number;
    married: boolean;
}

const a: A = { 
    name: "Maria", 
    surname: "Ibañez",
    country: "SPA"
};

const b: B = { 
    name: "Luisa",
    age: 31, 
    married: true 
};

function clone<T>(source: T) :T {
    return { ...source }; 
}

const cloneResult : A = clone(a);
console.log(`El resultado de Clone es: ${cloneResult}`);

function merge<T, U>(source: T, target: U) : T & U {
    const cloneTarget = clone(target); 
    return { ...cloneTarget, ...source };
}

const mergeResult : A & B = merge(a, b); 
console.log(`El resultado de Merge es: ${mergeResult}`);
