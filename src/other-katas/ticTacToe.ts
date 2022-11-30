type Player = "X" | "O";
type PosFill = "" | "X" | "O";

export type BoardState = [
  PosFill,
  PosFill,
  PosFill,
  PosFill,
  PosFill,
  PosFill,
  PosFill,
  PosFill,
  PosFill
];

type WinState =
  | { state: "won"; winner: Player }
  | { state: "not yet finished" }
  | { state: "draw" };

type BoardPos = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
type line = [BoardPos, BoardPos, BoardPos];

/*
If find the first winning line
  identify that PLAYER
    return the winState with that player included

If All board spaces are full but no one has won, it is a draw

If no won has won and there are still empty strings, the game is still in play
*/

export const calcWinState = (board: BoardState): WinState => {
  const winningLine: line | undefined = findWinningLine(board);

  if (winningLine) {
    const winningPlayer = getWinningPlayer(winningLine, board);
    return { state: "won", winner: winningPlayer };
  }

  if (isFilledWithNoWinner(board)) {
    return { state: "draw" };
  }

  return { state: "not yet finished" };
};

const findWinningLine = (board: BoardState): line | undefined => {
  const winningLines: line[] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const [posA, posB, posC] of winningLines) {
    if (
      allPositionsMatch(board[posA], board[posB], board[posC]) &&
      board[posA] !== ""
    ) {
      return [posA, posB, posC];
    }
  }
};

const allPositionsMatch = (
  linePosA: PosFill,
  linePosB: PosFill,
  linePosC: PosFill
): boolean => {
  return linePosA === linePosB && linePosA === linePosC;
};

const getWinningPlayer = (winningLine: line, board: BoardState): Player => {
  //person at winning line 0 on the board
  const firstPosOfWinningLine = winningLine[0];
  return board[firstPosOfWinningLine] as Player;
};

const isFilledWithNoWinner = (board: BoardState): boolean => {
  return board.every((el) => el !== "");
};

// type WinState =
//   | `X won by row`
//   | "X won by column"
//   | "X won by diagonal"
//   | `O won by row`
//   | "O won by column"
//   | "O won by diagonal"
//   | "There was a draw"
//   | "The game has not been finished yet";
// type Player = "x" | "o" | "";

// const calcWinState = (BoardState: Player[][]): WinState => {
//   const xwonByRow = BoardState.some((row) => row.every((el) => el === "x")); //BoardState[0].every(el => el === 'x') || BoardState[1].every(el => el === 'x') || BoardState[2].every(el => el === 'x');

//   const xwonByColumn =
//     BoardState.every((row) => row[0] === "x") ||
//     BoardState.every((row) => row[1] === "x") ||
//     BoardState.every((row) => row[2] === "x");

//   const xwonByDiagonal =
//     (BoardState[0][0] === "x" &&
//       BoardState[1][1] === "x" &&
//       BoardState[2][2] === "x") ||
//     (BoardState[0][2] === "x" &&
//       BoardState[1][1] === "x" &&
//       BoardState[2][0] === "x");

//   const ywonByRow = BoardState.some((row) => row.every((el) => el === "o")); //BoardState[0].every(el => el === 'o') || BoardState[1].every(el => el === 'o') || BoardState[2].every(el => el === 'o');

//   const ywonByColumn =
//     BoardState.every((row) => row[0] === "o") ||
//     BoardState.every((row) => row[1] === "o") ||
//     BoardState.every((row) => row[2] === "o");

//   const ywonByDiagonal =
//     (BoardState[0][0] === "o" &&
//       BoardState[1][1] === "o" &&
//       BoardState[2][2] === "o") ||
//     (BoardState[0][2] === "o" &&
//       BoardState[1][1] === "o" &&
//       BoardState[2][0] === "o");

//   const isDraw = BoardState.every((row) =>
//     row.every((position) => position !== "")
//   );

//   if (xwonByRow) {
//     return `X won by row`;
//   } else if (xwonByColumn) {
//     return "X won by column";
//   } else if (xwonByDiagonal) {
//     return "X won by diagonal";
//   } else if (ywonByRow) {
//     return `O won by row`;
//   } else if (ywonByColumn) {
//     return "O won by column";
//   } else if (ywonByDiagonal) {
//     return "O won by diagonal";
//   } else if (isDraw) {
//     return "There was a draw";
//   } else {
//     return "The game has not been finished yet";
//   }
// };

// console.log(
//   calcWinState([
//     ["o", "x", "x"],
//     ["x", "o", "o"],
//     ["x", "o", "x"],
//   ])
// );
