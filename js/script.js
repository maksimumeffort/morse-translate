const morseDict = require("./data");
const domObjects = require("./dom");
// translate input (english text) into morse code

const argTypeError = new Error("Argument should be a string");

const argNumsError = new Error("You can only provide one argument");

export const translateToMorse = (...str) => {
  if (str.length !== 1) {
    throw argNumsError;
  }
  if (typeof str[0] !== "string") {
    throw argTypeError;
  }

  const strArray = str[0].split("").map((el) => el.toUpperCase());
  const resultArray = strArray.map((el) => {
    return el === " " ? " " : morseDict.dict[el];
  });
  console.log(resultArray.join(" "));
  return resultArray.join(" ");
};

// 1 space between english WORDS

// translate input (morse code) into english

export const translateToEng = () => {};

// 1 space between morse CHARACTERS

// Bonus:
// - handle special characters
// - detect if morse code / english and translate

// edge cases?
