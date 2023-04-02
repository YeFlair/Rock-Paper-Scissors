const getUserChoice = userInput => {
    const choices = ["rock", "paper", "scissors"];
    userInput = userInput.toLowerCase();
    if (choices.includes(userInput)) {
      return userInput;
    } else {
      console.log("Error! Try Again");
    }
  };
  
  const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const number = Math.floor(Math.random() * choices.length);
    return choices[number];
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "Y'all tied";
    }
  
    const winningChoices = {
      "rock": "scissors",
      "paper": "rock",
      "scissors": "paper"
    };
  
    return winningChoices[userChoice] === computerChoice ? "User Wins" : "Computer Wins";
  };
  
  const play = userInput => {
    const userChoice = getUserChoice(userInput);
    const computerChoice = getComputerChoice();
    const result = document.getElementById("result");
    result.innerHTML = `
      User: ${userChoice} vs. Computer: ${computerChoice}<br>
      ${determineWinner(userChoice, computerChoice)}
    `;
  };
  