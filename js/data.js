const dict = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

const nums = {
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....- ",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
};

const punct = {
  period: ".-.-.-",
  comma: "--..--",
  questionMark: "..--..",
  semicolon: "-.-.-.",
  colon: "---...",
  dash: "-....-",
  slash: "-..-.",
  apostrophe: ".----.",
  quotations: ".-..-.",
};

const special = {
  underscore: "..--.-",
  addition: ".-.-.",
  subtraction: "-....-",
  multiplication: "-..-",
  division: "---...",
  equal: "-...-",
  rightParenthesis: "-.--.-",
  leftParenthesis: "-.--.",
};

module.exports = {
  dict,
  nums,
  punct,
  special,
};
