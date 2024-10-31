console.log("************** PRACTICE 106 - DICES *********************");

interface DiceState {
  tirada: () => void;     
  reset: () => void;      
  printResult: () => void; 
}

const stateDice = () :DiceState => {
  let diceOne = 0;
  let diceTwo = 0;

  return {
    tirada: function () {
      diceOne = Math.floor(Math.random() * 6) + 1;
      diceTwo = Math.floor(Math.random() * 6) + 1;
    },
    reset: function () {
      diceOne = 0;
      diceTwo = 0;
      console.log(`Has resetado los dados`)
    },
    printResult: function () {
      if (diceOne === 0 && diceTwo === 0) {
        console.log("Aún no has tirado");
      } else if (diceOne === 6 && diceTwo === 6) {
        console.log("¡Enhorabuena, has hecho doblete!");
      } else {
        console.log(`Has sacado un ${diceOne} y un ${diceTwo} = ${diceOne + diceTwo}`);
      }
    }
  };
};

// Uso del closure
const diceGame = stateDice();
diceGame.tirada();
diceGame.printResult();
diceGame.reset();