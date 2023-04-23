let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// generating target numbers between 0 & 9
const generateTarget = () =>  {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (userGuess, computerGuess, targetGuess) => {
  if (Math.abs(humanGuess - targetGuess) <= Math.abs(computerGuess-targetGuess))  {
  return true;  
  }; 
  return false; 
};
  //Increasing winners score after each round
  const updateScore = (winner) =>  {
    if (winner === 'human')  {
      humanScore ++; //increasing human score by 1 point
    } else if (winner === 'computer')  {
      computerScore ++; //increasing computer score by 1 point
    }
  };
  // Updating the round number after each round
  const advanceRound = () =>  {  
    currentRoundNumber ++;
  };
  console.log(humanScore);
  
  console.log(computerScore);

