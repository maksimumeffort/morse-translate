/**
 * @jest-environment jsdom
 */

import {
  translateToMorse,
  translateToEng,
  clickTranslate,
  clickReverse,
} from "./script.js";

// import {
//   morseInputField,
//   engInputField,
//   reverseBtn,
//   translateBtn,
// } from "./dom.js";

const argTypeError = new Error("Argument should be a string");

const argNumsError = new Error("You can only provide one argument");

// test for eng to morse

describe("Test cases for function that translates english to morse code", () => {
  it("should return correct value in morse code", () => {
    expect(translateToMorse("A")).toBe(".-");
    expect(translateToMorse("Alex")).toBe(".- .-.. . -..-");
  });

  it("should be case insensitive", () => {
    expect(translateToMorse("a")).toBe(".-");
    expect(translateToMorse("aLeX")).toBe(".- .-.. . -..-");
  });

  it("should handle spaces in a sentence correctly", () => {
    expect(translateToMorse("hello there")).toBe(
      ".... . .-.. .-.. ---   - .... . .-. ."
    );
    expect(translateToMorse("hElLo tHErE")).toBe(
      ".... . .-.. .-.. ---   - .... . .-. ."
    );
  });

  it("should take only one argument", () => {
    expect(() => {
      translateToMorse("hello", 0);
    }).toThrow(argNumsError);
    expect(() => {
      translateToMorse();
    }).toThrow(argNumsError);
  });

  it("should only take a string as argument", () => {
    expect(() => {
      translateToMorse(124);
    }).toThrow(argTypeError);
  });
});

// test for morse to eng

describe("Test cases for function that translates morse code to english", () => {
  it("should return correct value in english", () => {
    expect(translateToEng(".-")).toBe("A");
    expect(translateToEng(".- .-.. . -..-")).toBe("ALEX");
  });

  it("should handle spaces in a sentence correctly", () => {
    expect(translateToEng(".... . .-.. .-.. ---   - .... . .-. .")).toBe(
      "HELLO THERE"
    );
  });

  it("should take only one argument", () => {
    expect(() => {
      translateToEng("hello", 0);
    }).toThrow(argNumsError);
    expect(() => {
      translateToEng();
    }).toThrow(argNumsError);
  });

  it("should only take a string as argument", () => {
    expect(() => {
      translateToEng(124);
    }).toThrow(argTypeError);
  });
});

// test the jsdom

// describe("test cases for jsdom", () => {
//   it("uses jsdom in this test file", () => {
//     const element = document.createElement("div");
//     expect(element).not.toBeNull();
//   });

//   it("recognises reverse button", () => {
//     // const clickLog = window.console.log("reversed");
//     expect(clickReverse()).toBe(false);
//   });

//   it("recognises translate button", () => {
//     const clickLog = window.console.log("clicked");
//     expect(clickTranslate()).toBe(undefined);
//     expect(clickTranslate("hello")).toBe("hello");
//   });

//   // it("recognises the engInput value", () => {
//   //   const inputField = document.querySelector("#engInputField");
//   //   inputField.innerHTML = "howdy";
//   //   // const inputLog = window.console.log("hello");

//   //   expect(clickTranslate()).toBe("howdy");
//   // });
// });
