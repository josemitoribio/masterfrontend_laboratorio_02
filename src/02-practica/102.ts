console.log("************** PRACTICE 102 - BIGGUEST WORD *********************");

interface Scores {
  [name: string]: number; 
}

const eso2o: Scores = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};

const values = (obj: Scores) : number[] => {
  return Object.keys(obj).map(key => obj[key]);
};

const calculateAverage = (array: number[]): number  => {
  const totalAverage = array.reduce((total, notas) => total + notas, 0);
  const average = totalAverage / array.length;
  return average
}

const printAverage = (classResults : Scores) => {
  
  const calificaciones = values(classResults);
  const media = calculateAverage(calificaciones);
 
  let resultado;

  switch (true) {
    case media === 10:
      resultado = "Matrícula de Honor";
      break;
    case media >= 9:
      resultado = "Sobresaliente";
      break;
    case media >= 7:
      resultado = "Notable";
      break;
    case media >= 6:
      resultado = "Bien";
      break;
    case media >= 5:
      resultado = "Suficiente";
      break;
    case media >= 4:
      resultado = "Insuficiente";
      break;
    default:
      resultado = "Muy deficiente"; // Este caso se da si media < 4
  }
  console.log(`La media de la clase es: ${media} - ${resultado}`);
}

printAverage(eso2o);
