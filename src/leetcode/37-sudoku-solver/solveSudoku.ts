import { isValidCell } from "../36-valid-sudoku/isValidSudoku";

/*
PSEUDOCODE:
- Iterate through board (single for loop)
- if board[row][column] is empty => for each possible number (1-9):
    - Check if current board[row][column] is valid
    - if so call recursively call the solve function on the next board[row][column] along (next column)
    - if the next COLUMN + 1 > 8 then call it on COLUMN 0 and ROW + 1
    - if COLUMN = 8 and ROW = 8 and isValid - return 
*/

export function solveSudoku(
  board: string[][],
  row: number = 0,
  column: number = 0
): boolean {
  // Base case => return if last board[row][column] on board is reached and it is valid
  if (row === 8 && column === 8 && board[row][column] !== ".") {
    return isValidCell(board, row, column);
  }

  //Find next empty slot
  while (board[row][column] !== "." && !(row === 8 && column === 8)) {
    const result = nextRowColumn(row, column);
    row = result[0];
    column = result[1];
  }

  //Have to backtrack if path is incorrect
  for (let candidate = 1; candidate < 10; candidate++) {
    board[row][column] = candidate.toString();
    if (isValidCell(board, row, column)) {
      //Check if it is a valid last cell
      if (row === 8 && column === 8) return true;

      //if somewhere further along the path does not work (returns false)
      // reset board[row][column] to "."
      if (
        solveSudoku(
          board,
          nextRowColumn(row, column)[0],
          nextRowColumn(row, column)[1]
        ) === false
      ) {
        board[row][column] = ".";
      } else return true;
    }
  }

  if (row === 0 && column === 0) return true;
  board[row][column] = ".";
  return false;
}

function nextRowColumn(row: number, column: number): number[] {
  if (column === 8) return [row + 1, 0];
  return [row, column + 1];
}

const board = [
  [".", ".", "9", "7", "4", "8", ".", ".", "."],
  ["7", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", "2", ".", "1", ".", "9", ".", ".", "."],
  [".", ".", "7", ".", ".", ".", "2", "4", "."],
  [".", "6", "4", ".", "1", ".", "5", "9", "."],
  [".", "9", "8", ".", ".", ".", "3", ".", "."],
  [".", ".", ".", "8", ".", "3", ".", "2", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "6"],
  [".", ".", ".", "2", "7", "5", "9", ".", "."],
];
solveSudoku(board);
