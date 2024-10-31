console.log("************** PRACTICE 207 - reminder *********************");
console.log("¡Ojo! Debido a que se trabaja con setTimeout los resultados de este challenge aparecen al final de la consola.");

class Reminder {
 
  text: string;

  constructor(text: string) {
    this.text = text;
  }

  remindMe(delay: number) {
    setTimeout(() => {
      console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
    }, delay * 1000);
  }
}

const message = new Reminder("Enhorabuena");
message.remindMe(2);
