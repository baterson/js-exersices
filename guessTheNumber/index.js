import {
  generateRandomNumbers,
  setWinState,
  setLoseState,
  setDefaultState,
  getUserInput,
  isValidValue,
} from "./lib.js";

/**
 * Guess The Number game:
 *    Computer generates 10 random numbers from 1 to 10
 *    User should guess the number to win
 */
const playGame = () => {
  /**
   * Use provided functions from lib.js to write the game logic,
   * For example to get random numbers use generateRandomNumbers function
   *
   * const numbers = generateRandomNumbers();
   *
   * Steps to follow:
   * - Generate numbers
   * - Get user input
   * - Validate the input
   * - Set the default state if input is invalid
   * - Check if user input match one numbers from array
   * - Set Win/Lose state based on result of the previous step
   */
};

// Set playGame as callback function for the "click" event handler of the Play button
const button = document.getElementById("mainButton");
button.addEventListener("click", playGame);
