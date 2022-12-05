import { translateToMorse, translateToEng } from "./script.js";

const argTypeError = new Error("Argument should be a string");

const argNumsError = new Error("You can only provide one argument");

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

describe("Test cases for function that translates morse code to english", () => {
  it("should return correct value in english", () => {
    expect(translateToEng(".-")).toBe("A");
    expect(translateToEng(".- .-.. . -..-")).toBe("ALEX");
  });

  it("should handle spaces in a sentence correctly", () => {
    expect(translateToEng(".... . .-.. .-.. ---   - .... . .-. .")).toBe(
      "HELLO THERE"
    );
    // expect(translateToEng("hElLo tHErE")).toBe(
    //   ".... . .-.. .-.. ---   - .... . .-. ."
    // );
  });

  // it("should return capitalized words in sentence", () => {
  //   expect(translateToMorse("a")).toBe(".-");
  //   expect(translateToMorse("aLeX")).toBe(".- .-.. . -..-");
  // });

  // it("should take only one argument", () => {
  //   expect(() => {
  //     translateToMorse("hello", 0);
  //   }).toThrow(argNumsError);
  //   expect(() => {
  //     translateToMorse();
  //   }).toThrow(argNumsError);
  // });

  // it("should only take a string as argument", () => {
  //   expect(() => {
  //     translateToMorse(124);
  //   }).toThrow(argTypeError);
  // });
});
