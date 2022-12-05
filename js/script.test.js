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
});
