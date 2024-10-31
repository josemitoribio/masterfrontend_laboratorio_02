console.log("************** PRACTICE 103 - CHECK ARGUMENTS *********************");

const f = (input: string | undefined) : string => { 
  return input === undefined ? "Unknown" : (input ?? ""); 
}

