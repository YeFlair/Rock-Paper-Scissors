let userScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

const getUserChoice = userInput => {
  return userInput.toLowerCase();
};

const getComputerChoice = () => {
  const number = Math.floor(Math.random() * 3);
  return ["rock", "paper", "scissors"][number];
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }
  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  return winConditions[userChoice] === computerChoice
    ? "User wins!"
    : "Computer wins!";
};

const checkGameOver = () => {
  if (userScore >= 3) {
    alert("User wins the game!");
    resetGame();
  } else if (computerScore >= 3) {
    alert("Computer wins the game!");
    resetGame();
  }
};

const resetGame = () => {
  userScore = 0;
  computerScore = 0;
  roundsPlayed = 0;
  document.getElementById("user-score").textContent = userScore;
  document.getElementById("computer-score").textContent = computerScore;
  document.getElementById("result").innerHTML = "";
};

const handleClick = choice => {
  if (roundsPlayed >= 7) {
    alert("No Winner! Please start a new game.");
    resetGame();
    return;
  }

  const userChoice = getUserChoice(choice);
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `User: ${userChoice} vs. Computer: ${computerChoice} - ${result}`;

  if (result === "User wins!") {
    userScore++;
  } else if (result === "Computer wins!") {
    computerScore++;
  }

  document.getElementById("user-score").textContent = userScore;
  document.getElementById("computer-score").textContent = computerScore;
  roundsPlayed++;
  checkGameOver();
};
