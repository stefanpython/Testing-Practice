const capitalize = require("./capitalize");
const reverseString = require("./reverseString");
const calculator = require("./calculator");
const caesarCipher = require("./caesarCipher");

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
