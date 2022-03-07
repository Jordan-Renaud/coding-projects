import { useReducer, useEffect } from "react";
import { shuffle } from "lodash";
import SetupOptions from "src/components/projects/tic-tac-toe/SetupOptions";
import Leaderboard from "src/components/projects/tic-tac-toe/Leaderboard";
import Board from "src/components/projects/tic-tac-toe/Board";
import styles from "src/styles/projects/tic-tac-toe.module.scss";

const initialState = {
  player1: "X",
  player2: "O",
  player1Score: 0,
  player2Score: 0,
  currentTurn: "X",
  board: [...Array(9)],
  winningTiles: [],
  gameMode: "twoPlayer",
};

const winningPositions = [
  //horizontal checks
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //verical checks
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  //diagonal checks
  [0, 4, 8],
  [2, 4, 6],
];

function reducer(state, action) {
  switch (action.type) {
    case "changeGameMode":
      return {
        ...state,
        board: initialState.board,
        winningTiles: initialState.winningTiles,
        currentTurn: initialState.currentTurn,
        gameMode: action.numberOfPlayers === 1 ? "onePlayer" : "twoPlayer",
      };
    case "newGame":
      return { ...initialState, gameMode: state.gameMode };
    case "newRound":
      return {
        ...state,
        board: initialState.board,
        winningTiles: initialState.winningTiles,
        currentTurn: initialState.currentTurn,
      };
    case "placePiece":
      return placePieceReducer(state, action);
    default:
      throw new Error();
  }
}

function placePieceReducer(state, action) {
  const newBoard = [...state.board];
  //prevent tile being overwritten
  if (newBoard[action.location]) return state;
  //prevent title placement after game won
  if (state.winningTiles.length > 0) return state;

  //update board
  newBoard[action.location] = state.currentTurn;

  //check for win
  let newWinningTiles = [];
  winningPositions.forEach((winningPosition) => {
    if (checkWinningSection(newBoard, ...winningPosition)) {
      // there is a winner
      newWinningTiles = winningPosition;
    }
  });

  //add score
  let newPlayer1Score = state.player1Score;
  let newPlayer2Score = state.player2Score;
  if (newWinningTiles.length > 0) {
    //timeout then
    if (state.currentTurn === state.player1) {
      newPlayer1Score++;
    } else if (state.currentTurn === state.player2) {
      newPlayer2Score++;
    }
  }

  return {
    ...state,
    board: newBoard,
    currentTurn:
      state.currentTurn === state.player1 ? state.player2 : state.player1,
    winningTiles: newWinningTiles,
    player1Score: newPlayer1Score,
    player2Score: newPlayer2Score,
  };
}

function checkWinningSection(board, index1, index2, index3) {
  return (
    board[index1] &&
    board[index1] === board[index2] &&
    board[index1] === board[index3]
  );
}

export default function TicTacToe() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    currentTurn,
    player1,
    player2,
    player1Score,
    player2Score,
    board,
    winningTiles,
    gameMode,
  } = state;
  const hasWon = winningTiles.length > 0;
  const hasDrawn = !board.some((tile) => tile === undefined);

  useEffect(() => {
    if (hasWon || hasDrawn) {
      //reset after win
      const timer = setTimeout(() => dispatch({ type: "newRound" }), 1500);
      return () => clearTimeout(timer);
    }
  }, [hasWon, hasDrawn]);

  //check for computers turn
  useEffect(() => {
    //get the empty squares
    if (currentTurn === player2 && gameMode === "onePlayer") {
      const timer = setTimeout(() => {
        const emptyIndexes = board
          .map((square, index) => (square === undefined ? index : null))
          .filter(Boolean);
        dispatch({ type: "placePiece", location: shuffle(emptyIndexes)[0] });
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [currentTurn]);

  return (
    <div className={styles.TicTacToe}>
      <h1 className="projectTitle">/tic-tac-toe</h1>
      <SetupOptions
        setNumberOfPlayers={(number) =>
          dispatch({ type: "changeGameMode", numberOfPlayers: number })
        }
        gameMode={gameMode}
      />
      <div className={styles.buttonContainer}>
        <button
          className="input-item"
          onClick={() => dispatch({ type: "newGame" })}
        >
          New Game
        </button>
        <button
          className="input-item"
          onClick={() => dispatch({ type: "newRound" })}
        >
          New Round
        </button>
      </div>
      <p>Current Turn: {currentTurn}</p>
      <Leaderboard
        player1={player1}
        player2={player2}
        player1Score={player1Score}
        player2Score={player2Score}
      />
      <Board
        tiles={board}
        winningTiles={winningTiles}
        piecePlaced={(location) => {
          dispatch({ type: "placePiece", location });
        }}
      />
    </div>
  );
}
