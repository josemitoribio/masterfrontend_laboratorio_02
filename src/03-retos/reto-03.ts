console.log("************** CHALLENGE 03 *********************");

type NumberArray = number | NumberArray[];

const sample: NumberArray = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

const numbers: NumberArray = sample.flat(4);

console.log("Array ya tipado y aplanado:", numbers);
