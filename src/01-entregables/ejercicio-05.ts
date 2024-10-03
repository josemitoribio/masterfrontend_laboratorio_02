console.log("************** DELIVERABLE 05 *********************");

class SlotMachine {
    protected coinCounter: number;
  
    constructor() {
      this.coinCounter = 0; 
    }
  
    play(): void { 
      this.coinCounter++;
  
      const randOne: boolean = Math.random() < 0.5;
      const randTwo: boolean = Math.random() < 0.5;
      const randThree: boolean = Math.random() < 0.5;
  
      if (randOne && randTwo && randThree) {
        console.log(`¡Congratulations!. You won ${this.coinCounter} coins!!`);
        this.coinCounter = 0;
      } else {
        console.log("Good luck next time!!");
      }
    }
  }
  
const machine1 = new SlotMachine();

machine1.play(); 
machine1.play(); 
machine1.play(); 
machine1.play(); 
  