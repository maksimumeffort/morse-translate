import { translateToMorse, translateToEng } from "./script";

const argTypeError = new Error("Argument should be a string");

const argNumsError = new Error("You can only provide one argument");

describe("Test cases for function that translates english to morse code", () => {
  it("should take one parameter typeof string", () => {
    expect(4).toThrow(argTypeError);
  });
});
