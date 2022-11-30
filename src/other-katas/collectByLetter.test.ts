import collectByLetter from "./collectByLetter";

test("Collects words by groups of first letter", () => {
  expect(collectByLetter(["H"])).toEqual({ h: ["H"] });
});
