console.log("************** CHALLENGES *********************");
console.log("************** CHALLENGE 01 *********************");
console.log("¡Ojo! Debido a que se trabaja con setTimeout los resultados de este challenge aparecen al final de la consola.");

// Los resultados de este challenge se imprimirán en la consola los últimos.

const delay = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

const showMessage = async ([time, message]: [number, string]): Promise<void> => {
  await delay(time);
  console.log(message);
};

const triggers : (() => Promise<void>)[] = [
  async () => await showMessage([200, "third"]),
  async () => await showMessage([100, "second"]),
];

const run = async (triggers: (() => Promise<void>)[]): Promise<void> => {
    await triggers[0]();
    await triggers[1]();
    console.log("first");
  };

run(triggers);
