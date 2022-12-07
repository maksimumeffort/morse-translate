import { dict, special, nums, punct } from "./data.js";
import {
  inputLabel,
  outputLabel,
  inputField,
  outputField,
  reverseBtn,
  translateBtn,
} from "./dom.js";
// const morseDict = require("./data");
// const jsdom = require("./dom");
// const { JSDOM } = jsdom;

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
    return el === " " ? " " : dict[el];
  });
  // console.log(resultArray.join(" "));
  return morseArray.join(" ");
};

// 1 space between english WORDS
// 1 space between morse CHARACTERS

// translate input (morse code) into english

export const translateToEng = (...str) => {
  if (str.length !== 1) {
    throw argNumsError;
  }
  if (typeof str[0] !== "string") {
    throw argTypeError;
  }

  const morseArray = str[0].split(" ");
  const engTranslArray = [];
  // console.log(morseArray);
  const engArray = morseArray.map((el) => {
    // console.log(el);
    Object.entries(dict).forEach(([key, value]) => {
      if (el === "") {
        return engTranslArray.push(".");
      }
      if (el === value) {
        // console.log(el, "is ", key);
        return engTranslArray.push(key);
      }
      // else {
      //   return engTranslArray.push("_");
      // }
    });
    // console.log(engTranslArray);
  });
  return engTranslArray.join("").replace(/[.]+/, " ");
};

// Bonus:
// - handle special characters
// - detect if morse code / english and translate

// edge cases?

// TODO comment all code below for tests to run

// translate button functionality
let isEng = true;
export const clickTranslate = (string, isEng) => {
  return isEng === true ? translateToMorse(string) : translateToEng(string);
};

translateBtn.addEventListener("click", (event) => {
  event.preventDefault();
  // console.log(inputField.value);
  const inputFieldValue = inputField.value;
  const output = clickTranslate(inputFieldValue, isEng);

  outputField.innerHTML = output;

  // const inputValue =
  //   isMorse === true ? jsdom.engInputField.value : jsdom.morseInputField.value;
  // console.log("translated");
  // clickTranslate(inputValue, isMorse);
  // console.log(inputField);
});

// reverse button functionality
export const clickReverse = () => {
  console.log("reversed");
  if (isEng === true) {
    return (isEng = false);
  } else {
    isEng = true;
  }
};

reverseBtn.addEventListener("click", (event) => {
  event.preventDefault();
  clickReverse();
  console.log(`English is ${isEng}`);
  if (isEng === true) {
    inputLabel.innerHTML = "English";
    outputLabel.innerHTML = "Morse Code";
  } else {
    inputLabel.innerHTML = "Morse Code";
    outputLabel.innerHTML = "English";
  }
});




