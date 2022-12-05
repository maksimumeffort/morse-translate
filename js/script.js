const morseDict = require("./data");
const domObjects = require("./dom");

// handle errors
const argTypeError = new Error("Argument should be a string");
const argNumsError = new Error("You can only provide one argument");

// translate input (english text) into morse code
export const translateToMorse = (...str) => {
  if (str.length !== 1) {
    throw argNumsError;
  }
  if (typeof str[0] !== "string") {
    throw argTypeError;
  }

  const engArray = str[0].split("").map((el) => el.toUpperCase());
  const morseArray = engArray.map((el) => {
    return el === " " ? " " : morseDict.dict[el];
  });
  // console.log(resultArray.join(" "));
  return morseArray.join(" ");
};

// 1 space between english WORDS
// 1 space between morse CHARACTERS

// translate input (morse code) into english

export const translateToEng = (...str) => {
  const morseArray = str[0].split(" ");
  const engTranslArray = [];
  console.log(morseArray);
  const engArray = morseArray.map((el) => {
    // console.log(el);
    Object.entries(morseDict.dict).forEach(([key, value]) => {
      if (el === "") {
        return engTranslArray.push(".");
      }
      if (el === value) {
        console.log(el, "is ", key);
        return engTranslArray.push(key);
      }
      // else {
      //   return engTranslArray.push("_");
      // }
    });
    console.log(engTranslArray);
  });
  return engTranslArray.join("").replace(/[.]+/, " ");
};

// Bonus:
// - handle special characters
// - detect if morse code / english and translate

// edge cases?
