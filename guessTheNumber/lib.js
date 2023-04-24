// Utility functions do not supposed to be used directly
const generateRandomInteger = (min, max) => {
  return Math.floor(min + Math.random() * (max - min + 1));
};

const removeClasses = (node) => {
  node.classList.remove("win");
  node.classList.remove("lose");
  node.classList.remove("default");
};

const setResult = (text, className) => {
  const node = document.getElementById("result");

  node.innerHTML = text;
  removeClasses(node);
  node.classList.add(className);
};

//

// Generates array of 10 numbers from 1 to 9
const generateRandomNumbers = () => {
  return Array.from({ length: 10 }).map((i) => generateRandomInteger(1, 9));
};

// Functions for setting result UI
const setWinState = () => setResult("You won!", "win");

const setLoseState = () => setResult("You lost :(", "lose");

const setDefaultState = () => setResult("Type number from 1 to 9", "default");

// Returns user input converted to Number
const getUserInput = () => Number(document.getElementById("input").value);

// Validates whether the value is in numbers from 1 to 9
const isValidValue = (value) => {
  if (value > 0 && value < 10) {
    return true;
  } else {
    return false;
  }
};

export {
  generateRandomNumbers,
  setWinState,
  setLoseState,
  setDefaultState,
  getUserInput,
  isValidValue,
};
