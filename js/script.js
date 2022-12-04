const morseDict = require("./data");
const domObjects = require("./dom");
// translate input (english text) into morse code

const argTypeError = new Error("Argument should be a string");

const argNumsError = new Error("You can only provide one argument");

export const translateToMorse = (...str) => {
  const input = str;
  const dictionary = Object.entries(morseDict);
  let result = "";

  console.log(morseDict);

  console.log(input);
  return;
};

// 1 space between english WORDS

// translate input (morse code) into english

export const translateToEng = () => {};

// 1 space between morse CHARACTERS

// Bonus:
// - handle special characters
// - detect if morse code / english and translate

// edge cases?
