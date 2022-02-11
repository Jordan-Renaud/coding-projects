import { useReducer, useState } from "react";
import styles from "../../styles/tic-tac-toe.module.scss";

function Tile({ position, isHighlighted, piecePlaced, children }) {
  return (
    <button
      key={position}
      value={position}
      className={`${styles.square} ${isHighlighted && styles.winningSquare}`}
      onClick={() => piecePlaced(position)}
    >
      {children}
    </button>
  );
}

function SetupOptions({ setNumberOfPlayers, gameMode }) {
  return (
    <div>
      <input
        id="one-player"
        type="radio"
        name="one-player"
        onChange={() => setNumberOfPlayers(1)}
        value={1}
        checked={gameMode === "onePlayer"}
      />
      <label htmlFor="one-player">One Player</label>
      <input
        id="two-player"
        type="radio"
        onChange={() => setNumberOfPlayers(2)}
        name="two-player"
        value={2}
        checked={gameMode === "twoPlayer"}
      />
      <label htmlFor="two-player">Two Player</label>
    </div>
  );
}

function Leaderboard({ player1, player2, player1Score, player2Score }) {
  return (
    <div>
      <p>
        {player1} Wins: {player1Score}
      </p>
      <p>
        {player2} Wins: {player2Score}
      </p>
    </div>
  );
}

function Board({ tiles, winningTiles, piecePlaced }) {
  return (
    <div className={styles.board}>
      {tiles.map((square, index) => (
        <Tile
          key={index}
          position={index}
          isHighlighted={winningTiles.includes(index)}
          piecePlaced={piecePlaced}
        >
          {square}
        </Tile>
      ))}
    </div>
  );
}

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

function reducer(state, action) {
  switch (action.type) {
    case "changeGameMode":
      return {
        ...state,
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
      const newBoard = [...state.board];
      newBoard[action.location] = state.currentTurn;
      console.log("newBoard", newBoard);
      console.log("oldboard", state.board);

      return { ...state, board: newBoard };
    default:
      throw new Error();
  }
}

export default function TicTacToe2() {
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

  return (
    <div className={styles.TicTacToe}>
      <h1>Tic Tac Toe</h1>
      <SetupOptions
        setNumberOfPlayers={(number) =>
          dispatch({ type: "changeGameMode", numberOfPlayers: number })
        }
        gameMode={gameMode}
      />
      <button onClick={() => dispatch({ type: "newGame" })}>New Game</button>
      <button onClick={() => dispatch({ type: "newRound" })}>New Round</button>
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
        piecePlaced={(location) => dispatch({ type: "placePiece", location })}
      />
    </div>
  );
}
