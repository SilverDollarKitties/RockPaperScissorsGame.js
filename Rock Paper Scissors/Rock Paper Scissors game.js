const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
if (userInput ==='rock' || userInput ==='scissors' || userInput === 'paper' || userInput ==='bomb'){
  return userInput
}else {
  console.log('Enter valid word');
}
};

const getComputerChoice = () => {
  randomNumber = (Math.floor(Math.random()* 3));
  switch (randomNumber){
  case 0:
  return 'rock';
  case 1:
  return 'paper';
  case 2: 
  return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice)
  return 'Tie'
  if (userChoice === 'rock'){
    if(computerChoice ==='paper')
    return 'computer won';
  }
  else{
    return "You've won!"
  }
  if (userChoice ==='paper'){
    if(computerChoice ==='scissors')
    return 'computer won'
  }
  else {
    return 'youve won'
  }
  if (userChoice ==='scissors'){
    if(computerChoice ==='rock')
    return 'computer won'
  } else {
    return 'youve won'
  }
  /*if (userChoice ==='bomb'){
    return 'youve won'
  }*/
};

const playGame = () => {
  userChoice = getUserChoice('rock');
  computerChoice = getComputerChoice();
  console.log("you threw " + userChoice);
  console.log ("computer threw " + computerChoice)
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();