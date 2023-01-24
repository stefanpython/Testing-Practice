const capitalize = require("./capitalize");
const reverseString = require("./reverseString");
const calculator = require("./calculator");
const caesarCipher = require("./caesarCipher");
const analyzeArray = require("./analyzeArray");

test("capitalize first character", () => {
  expect(capitalize("cat")).toBe("Cat");
});

test("reverse string", () => {
  expect(reverseString("positive")).toBe("evitisop");
});

describe("calculator", () => {
  it("should add two numbers", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  it("should subtract two numbers", () => {
    expect(calculator.subtract(4, 2)).toBe(2);
  });

  it("should divide two numbers", () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  it("should multiply two numbers", () => {
    expect(calculator.multiply(4, 2)).toBe(8);
  });
});

describe("caesarCipher", () => {
  it("should return ciphered string", () => {
    expect(caesarCipher("HELLO WORLD", 3)).toBe("KHOOR ZRUOG");
  });

  it("should be wrapping from z to a", () => {
    expect(caesarCipher("azazel", 5)).toBe("fefejq");
  });

  it("should work with punctuation", () => {
    expect(caesarCipher("optimist, realist!", 10)).toBe("yzdswscd, bokvscd!");
  });
});

describe("analyzeArray", () => {
  it("should return average, min, max and length", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
});
