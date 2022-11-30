import { bracketValidator } from "./bracket-validator";

test("Collects words by groups of first letter", () => {
  expect(bracketValidator("{}")).toEqual(true);
  expect(bracketValidator("{}]")).toEqual(false);
  expect(bracketValidator("[{}]")).toEqual(true);
  expect(bracketValidator("[{}]()")).toEqual(true);
});
