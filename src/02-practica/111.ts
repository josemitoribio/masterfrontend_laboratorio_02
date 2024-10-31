console.log("************** PRACTICE 111 - REVERSE TEXT *********************");

const reverseText = (text: string) :string => {
 return text.split(' ').reverse().join(' ');
}

console.log(reverseText("Uno dos tres"));