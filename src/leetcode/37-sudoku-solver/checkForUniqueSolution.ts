import {
  ICell,
  isValidCell2,
  isValidSudoku2,
} from "../36-valid-sudoku/isValidSudoku2";

export function checkForUniqueSolution(board: ICell[][]): boolean {
  const allSolutions: ICell[][][] = [];
  solve(board);
  function solve(
    board: ICell[][],
    row: number = 0,
    column: number = 0
  ): boolean {
    // //END if there is more than one solution
    // if (allSolutions.length > 1) return true;
    // // If last board[row][column] on board is reached and it is valid push to All solutions and increment choose another val

    //When algorithm reaches the last cell, it is empty and it adds a solving number, it does not remove that number before backtracking! It should set number to ""
    if (
      row === 8 &&
      column === 8 &&
      board[row][column].val !== "" &&
      isValidCell2(board, row, column)
    ) {
      //Add copy of valid solution
      const copy = [...board];
      for (let i = 0; i < 9; i++) {
        copy[i] = [...board[i]];
        for (let j = 0; j < 9; j++) {
          copy[i][j] = { ...board[i][j] };
        }
      }
      allSolutions.push(copy);
      //Initiate backtracking by forcing wrong solution
      return false;
    }

    //Find next empty slot
    while (board[row][column].val !== "" && !(row === 8 && column === 8)) {
      const result = nextRowColumn(row, column);
      row = result[0];
      column = result[1];
    }

    //Have to backtrack if path is incorrect
    for (let candidate = 1; candidate < 10; candidate++) {
      board[row][column].val = candidate.toString();
      if (row === 1 && column === 7 && candidate === 7) {
        console.log("Trying");
      }
      if (row === 1 && column === 8 && candidate === 2) {
        console.log("7:2");
      }
      if (isValidCell2(board, row, column)) {
        //Check if it is a valid last cell
        if (row === 8 && column === 8) {
          //Add copy of valid solution
          const copy = [...board];
          for (let i = 0; i < 9; i++) {
            copy[i] = [...board[i]];
            for (let j = 0; j < 9; j++) {
              copy[i][j] = { ...board[i][j] };
            }
          }
          allSolutions.push(copy);
          board[row][column].val = "";
          return false;
        }

        //if somewhere further along the path does not work (returns false)
        // reset board[row][column].val to ""
        if (
          solve(
            board,
            nextRowColumn(row, column)[0],
            nextRowColumn(row, column)[1]
          ) === false
        ) {
          board[row][column].val = "";
        } else return true;
      }
    }

    //If you've reached the end
    if (row === 0 && column === 0) return true;
    board[row][column].val = "";
    return false;
  }
  console.log(allSolutions.length);
  return allSolutions.length === 1;
}

function nextRowColumn(row: number, column: number): number[] {
  if (column === 8) return [row + 1, 0];
  return [row, column + 1];
}

const generatedBoard: ICell[][] = [
  [
    { val: "", status: "user-defined" },
    { val: "2", status: "pre-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "9", status: "pre-defined" },
    { val: "5", status: "pre-defined" },
  ],
  [
    { val: "", status: "user-defined" },
    { val: "1", status: "pre-defined" },
    { val: "3", status: "pre-defined" },
    { val: "2", status: "pre-defined" },
    { val: "8", status: "pre-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
  ],
  [
    { val: "9", status: "pre-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "7", status: "pre-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "3", status: "pre-defined" },
  ],
  [
    { val: "1", status: "pre-defined" },
    { val: "4", status: "pre-defined" },
    { val: "5", status: "pre-defined" },
    { val: "3", status: "pre-defined" },
    { val: "6", status: "pre-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
  ],
  [
    { val: "", status: "user-defined" },
    { val: "3", status: "pre-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
  ],
  [
    { val: "6", status: "pre-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "4", status: "pre-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
  ],
  [
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "2", status: "pre-defined" },
    { val: "6", status: "pre-defined" },
    { val: "", status: "user-defined" },
    { val: "4", status: "pre-defined" },
    { val: "", status: "user-defined" },
  ],
  [
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "9", status: "pre-defined" },
    { val: "3", status: "pre-defined" },
    { val: "", status: "user-defined" },
    { val: "7", status: "pre-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
  ],
  [
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "", status: "user-defined" },
    { val: "7", status: "pre-defined" },
    { val: "", status: "user-defined" },
    { val: "1", status: "pre-defined" },
    { val: "", status: "user-defined" },
    { val: "3", status: "pre-defined" },
    { val: "", status: "user-defined" },
  ],
];

const multipleSolutions: ICell[][] = [
  [
    {
      val: "2",
      status: "user-defined",
    },
    {
      val: "9",
      status: "pre-defined",
    },
    {
      val: "5",
      status: "user-defined",
    },
    {
      val: "7",
      status: "user-defined",
    },
    {
      val: "4",
      status: "user-defined",
    },
    {
      val: "3",
      status: "user-defined",
    },
    {
      val: "8",
      status: "user-defined",
    },
    {
      val: "6",
      status: "pre-defined",
    },
    {
      val: "1",
      status: "pre-defined",
    },
  ],
  [
    {
      val: "4",
      status: "user-defined",
    },
    {
      val: "3",
      status: "pre-defined",
    },
    {
      val: "1",
      status: "pre-defined",
    },
    {
      val: "8",
      status: "pre-defined",
    },
    {
      val: "6",
      status: "pre-defined",
    },
    {
      val: "5",
      status: "user-defined",
    },
    {
      val: "9",
      status: "user-defined",
    },
    {
      val: "",
      status: "user-defined",
    },
    {
      val: "",
      status: "user-defined",
    },
  ],
  [
    {
      val: "8",
      status: "pre-defined",
    },
    {
      val: "7",
      status: "user-defined",
    },
    {
      val: "6",
      status: "user-defined",
    },
    {
      val: "1",
      status: "user-defined",
    },
    {
      val: "9",
      status: "user-defined",
    },
    {
      val: "2",
      status: "pre-defined",
    },
    {
      val: "5",
      status: "user-defined",
    },
    {
      val: "4",
      status: "user-defined",
    },
    {
      val: "3",
      status: "pre-defined",
    },
  ],
  [
    {
      val: "3",
      status: "pre-defined",
    },
    {
      val: "8",
      status: "pre-defined",
    },
    {
      val: "7",
      status: "pre-defined",
    },
    {
      val: "4",
      status: "pre-defined",
    },
    {
      val: "5",
      status: "pre-defined",
    },
    {
      val: "9",
      status: "user-defined",
    },
    {
      val: "2",
      status: "user-defined",
    },
    {
      val: "1",
      status: "user-defined",
    },
    {
      val: "6",
      status: "user-defined",
    },
  ],
  [
    {
      val: "6",
      status: "user-defined",
    },
    {
      val: "1",
      status: "pre-defined",
    },
    {
      val: "2",
      status: "user-defined",
    },
    {
      val: "3",
      status: "user-defined",
    },
    {
      val: "8",
      status: "user-defined",
    },
    {
      val: "7",
      status: "user-defined",
    },
    {
      val: "4",
      status: "user-defined",
    },
    {
      val: "9",
      status: "user-defined",
    },
    {
      val: "5",
      status: "user-defined",
    },
  ],
  [
    {
      val: "5",
      status: "pre-defined",
    },
    {
      val: "4",
      status: "user-defined",
    },
    {
      val: "9",
      status: "user-defined",
    },
    {
      val: "2",
      status: "user-defined",
    },
    {
      val: "1",
      status: "user-defined",
    },
    {
      val: "6",
      status: "pre-defined",
    },
    {
      val: "7",
      status: "user-defined",
    },
    {
      val: "3",
      status: "user-defined",
    },
    {
      val: "8",
      status: "user-defined",
    },
  ],
  [
    {
      val: "7",
      status: "user-defined",
    },
    {
      val: "6",
      status: "user-defined",
    },
    {
      val: "3",
      status: "user-defined",
    },
    {
      val: "5",
      status: "user-defined",
    },
    {
      val: "2",
      status: "pre-defined",
    },
    {
      val: "4",
      status: "pre-defined",
    },
    {
      val: "1",
      status: "user-defined",
    },
    {
      val: "8",
      status: "pre-defined",
    },
    {
      val: "9",
      status: "user-defined",
    },
  ],
  [
    {
      val: "9",
      status: "user-defined",
    },
    {
      val: "2",
      status: "user-defined",
    },
    {
      val: "8",
      status: "user-defined",
    },
    {
      val: "6",
      status: "pre-defined",
    },
    {
      val: "7",
      status: "pre-defined",
    },
    {
      val: "1",
      status: "user-defined",
    },
    {
      val: "3",
      status: "pre-defined",
    },
    {
      val: "5",
      status: "user-defined",
    },
    {
      val: "4",
      status: "user-defined",
    },
  ],
  [
    {
      val: "1",
      status: "user-defined",
    },
    {
      val: "5",
      status: "user-defined",
    },
    {
      val: "4",
      status: "user-defined",
    },
    {
      val: "9",
      status: "pre-defined",
    },
    {
      val: "3",
      status: "user-defined",
    },
    {
      val: "8",
      status: "pre-defined",
    },
    {
      val: "6",
      status: "user-defined",
    },
    {
      val: "",
      status: "pre-defined",
    },
    {
      val: "",
      status: "user-defined",
    },
  ],
];
checkForUniqueSolution(multipleSolutions);
