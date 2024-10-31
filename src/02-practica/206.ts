console.log("************** PRACTICE 206 - PLAYERS ORDER *********************");

const getPlayersOrder = (players: string[], turns: number) : string[] => {
  if (turns === 0 || turns === players.length) {
    return players;
  }
  
  let remainingTurns = turns;

  while (remainingTurns > 0) {
    const [firstPlayer, ...rest] = players; 
    players = [...rest, firstPlayer]; 
    remainingTurns--; 
  }

  return players;
};

const newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 2);
console.log(newOrderIn2Turns);