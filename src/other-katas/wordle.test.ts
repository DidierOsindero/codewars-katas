import { markWordleGuess } from "./wordle";

test("markWordleGuess checks which words in a string match/are included in a target string and returns an object with this information for each character.", () => {
  expect(markWordleGuess("HELLO", "HELLO")).toStrictEqual([
    { value: "H", status: "matched" },
    { value: "E", status: "matched" },
    { value: "L", status: "matched" },
    { value: "L", status: "matched" },
    { value: "O", status: "matched" },
  ]);
  expect(markWordleGuess("ABCDE", "VWXYZ")).toStrictEqual([
    { value: "A", status: "not included" },
    { value: "B", status: "not included" },
    { value: "C", status: "not included" },
    { value: "D", status: "not included" },
    { value: "E", status: "not included" },
  ]);
  expect(markWordleGuess("ABCDE", "EDCBA")).toStrictEqual([
    { value: "A", status: "included" },
    { value: "B", status: "included" },
    { value: "C", status: "matched" },
    { value: "D", status: "included" },
    { value: "E", status: "included" },
  ]);
  expect(markWordleGuess("HELLO", "WORLD")).toStrictEqual([
    { value: "H", status: "not included" },
    { value: "E", status: "not included" },
    { value: "L", status: "not included" },
    { value: "L", status: "matched" },
    { value: "O", status: "included" },
  ]);

  expect(markWordleGuess("LULLS", "LEVEL")).toStrictEqual([
    { value: "L", status: "matched" },
    { value: "U", status: "not included" },
    { value: "L", status: "included" },
    { value: "L", status: "not included" },
    { value: "S", status: "not included" },
  ]);
});
