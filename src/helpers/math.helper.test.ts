import { expect, test } from "vitest";
import { add } from "./math.helper";

test("add function from cart", () => {
  const result = add(1, 2);
  console.log(result);
  expect(result).toBe(4);
});
