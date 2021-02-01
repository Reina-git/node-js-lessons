const generateDiceNumber = () => {
   return Math.floor(Math.random() * 6) + 1;
};

const maxTotal = 101;
let diceTotal = 0;

for (let i = 0; i < 6; i++) {
   if (diceTotal < maxTotal - 6) {
      let diceRoll = generateDiceNumber();
      console.log("diceRoll", diceRoll);
      if (diceTotal < maxTotal - 60) {
         diceTotal = diceRoll * 10 + diceTotal;
         console.log("diceTotal", diceTotal);
      } else if (diceRoll * 10 + diceTotal < maxTotal) {
         diceTotal = diceRoll * 10 + diceTotal;
         console.log("diceTotal", diceTotal);
      } else {
         diceTotal = diceRoll + diceTotal;
         console.log("diceTotal getting close", diceTotal);
      }
   }
}
