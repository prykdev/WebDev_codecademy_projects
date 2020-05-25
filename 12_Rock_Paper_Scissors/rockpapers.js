const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput==='rock'||userInput==='scissors'||userInput==='paper')
  {
    return userInput;
  }
  else
  {
   console.log("error");
  }

};
//console.log(getUserChoice('paper'));
//console.log(getUserChoice('rock'));
const getComputerChoice = () => {
randomNumber=Math.floor(Math.random() * 3);
switch (randomNumber) {
  case 0:
    return 'rock';
  case 1:
    return 'paper';
  case 2: 
    return 'scissors';
}
}
const determineWinner=(userInput,randomNumber)=>{
  if (userInput===randomNumber)
  {
    return "this is tie";
  }
   if (userInput==='rock')
   {
     if(randomNumber==='paper')
     {
       return 'you lose!'
     }
     else
     {
       return 'congo you won!'
     }
   }
    if (userInput==='paper')
    {
       if(randomNumber==='scissors')
       {
         return "you lose!"
       }
       else{
         return "congo you won!"
       }

    }
    if (userInput==='scissors') 
  {
    if(randomNumber==='rock')
    {
      return "you lose!"
    }
    else{
      return "congo you won!"
    }

  }
};

const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice,computerChoice))
};
playGame();