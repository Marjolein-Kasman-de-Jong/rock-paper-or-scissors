console.log('hi');

// Get and validate user choice

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Invalid input');
  }
};

// Get computer choice

const getComputerChoice = () => {
  const number = Math.floor(Math.random() * 3);
  switch(number) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break; 
  }
}

// Determine a winner

const determineWinner = (userChoice, computerChoice) => {
  // Handle secret cheat code
  if (userChoice === 'bomb') {
    return 'The user won.';
  }
  // Check if the game was a tie
  if (userChoice === computerChoice) {
    return 'The game was a tie.';
  }
  // Determine winner
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won.';
    } else {
      return 'The user won.';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won.';
    } else {
      return 'The user won.';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won.';
    } else {
      return 'The user won.';
    }
  }
}

// Play the game and console.log() the results

const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log(userChoice, computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

// Start the game

playGame();