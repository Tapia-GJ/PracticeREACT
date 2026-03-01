import { expect, test, describe } from "vitest";
import { add, multiply, substract } from "./math.helper";
//* Testing automatico
describe("add", () => {
  test("should add two positive numbers", () => {
    // ! arrange
    const result = add(1, 2);
    // ! Act
    console.log(result);
    //! Assert
    expect(result).toBe(3);
  });
});

describe("subscribe", () => {
  test("should rest two numbers", () => {
    // ! arrange
    const result = substract(1, 2);
    // ! Act
    console.log(result);
    //! Assert
    expect(result).toBe(-1);
  });

  test("debe devolver la resta de 4-4", () => {
    const result = substract(4, 4);
    expect(result).toBe(0);
  });
});

describe("multiplicación", () => {
  test("debe devolver 4*5", () => {
    const result = multiply(4, 5);
    expect(result).toBe(20);
  });
  test("debe devolver 7*5", () => {
    const result = multiply(7, 5);

    tyttty;
    expect(result).toBe(35);
  });
});
