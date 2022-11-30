import { calcWinState, BoardState } from "./ticTacToe";
const testBoard1: BoardState = ["O", "X", "O", "X", "O", "X", "O", "X", "O"];

const testBoard2: BoardState = ["X", "X", "O", "X", "O", "X", "X", "X", "O"];

const testBoard3: BoardState = ["O", "O", "O", "X", "O", "X", "O", "X", "O"];

const testBoard4: BoardState = ["", "X", "O", "", "", "X", "", "", ""];

const testBoard5: BoardState = ["O", "X", "O", "O", "X", "X", "X", "O", "O"];

test("CalcWinState checks to see if a game of tic tac toe is won, drawn or not finished", () => {
  expect(calcWinState(testBoard1)).toStrictEqual({ state: "won", winner: "O" });
  expect(calcWinState(testBoard2)).toStrictEqual({ state: "won", winner: "X" });
  expect(calcWinState(testBoard3)).toStrictEqual({ state: "won", winner: "O" });
  expect(calcWinState(testBoard4)).toStrictEqual({ state: "not yet finished" });
  expect(calcWinState(testBoard5)).toStrictEqual({ state: "draw" });
});
