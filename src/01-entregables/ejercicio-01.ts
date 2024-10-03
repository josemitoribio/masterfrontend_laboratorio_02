console.log("************** DELIVERABLE 01 *********************");

const students: string[] = ["Ana", "Rosa", "María", "Macarena"];

const head = ([first]: string[]) : string => first;
const headStudents = head(students);
console.log(`El resultado de Head: ${headStudents}`);

const tail = ([, ...rest] : string[]) : string[] => rest;
const tailStudents = tail(students);
console.log(`El resultado de Tail: ${tailStudents}`);

const init = (arrayInit : string[]) : string[] => arrayInit.slice(0, -1);
const initStudents = init(students);
console.log(`El resultado de Init: ${initStudents}`);

const last = (arrayLast : string[]) : string => arrayLast[arrayLast.length - 1];
const lastStudents = last(students);
console.log(`El resultado de Last: ${lastStudents}`);

const lastSlice = (arrayLastSlice : string[]) : string => arrayLastSlice.slice(-1)[0];
const lastSliceStudents = lastSlice(students);
console.log(`El resultado de Last con slice: ${lastSliceStudents}`);