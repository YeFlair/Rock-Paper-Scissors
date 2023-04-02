# Rock-Paper-Scissors
Rock, Paper, Scissors: A classic game implemented in JavaScript. Enhance your coding skills by exploring problem decomposition, modularity, conditional logic, error handling, and randomness.

This is a simple implementation of the classic Rock, Paper, Scissors game in JavaScript. Users can play against the computer, and the program will determine and display the winner.

# Code Overview

The code consists of four main functions:

`getUserChoice(userInput)`: Takes a user input string and returns the corresponding choice, if valid.
`getComputerChoice()`: Randomly generates the computer's choice.
`determineWinner(userChoice, computerChoice)`: Determines the winner based on the user and computer choices.
`playGame()`: Plays the game by calling the other functions, displaying the user and computer choices, and announcing the winner.

### Using includes for Input Validation
The Array.prototype.includes() method is used to check if the user's input is valid. The method checks whether the provided array contains the specified element, returning a boolean value. In our case, we use it to verify that the user input is one of the three valid choices: "rock", "paper", or "scissors". By using includes(), we can easily maintain and scale the code if we decide to add more choices in the future.

### Error Handling
If the user provides an invalid input, the getUserChoice function will display an error message ("Error! Try Again") and return undefined. The game will not proceed until a valid input is provided.

# Stretch Goals
* Best of X: Modify the game to play a specified number of rounds (e.g., best of 3 or best of 5), and keep * Track of the score: Display the final score and overall winner at the end.
* Add a score tracker: Keep track of the number of games won by the user and computer.
* Add more choices: "lizard" and "Spock", as seen on 'The Big Bang Theory', to create a more challenging game.
    * Rock crushes Lizard
    * Lizard poisons Spock
    * Spock smashes Scissors
    * Scissors decapitate Lizard
    * Lizard eats Paper
    * Paper disproves Spock
    * Spock vaporizes Rock

# Contributing

Contributions are welcome! Please follow these steps to contribute:

* Fork this repository.
* Create a new branch with a descriptive name, such as feature-add-ui or bugfix-input-validation.
* Commit your changes to the new branch.
* Open a pull request with a clear description of the changes you've made and any additional information that may be helpful for the reviewers.

Please ensure that your code adheres to the existing style and structure, and that you have tested your changes thoroughly before submitting a pull request.