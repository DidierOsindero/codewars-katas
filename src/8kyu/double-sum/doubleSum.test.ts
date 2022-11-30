import doubleSum from "./doubleSum";

test("doubleSum adds first number to second number doubled (multiplied by two)", () => {
  expect(doubleSum(4, 3)).toBe(10);
  expect(doubleSum(2, 1)).toBe(4);
  expect(doubleSum(2, 5)).toBe(12);
});
