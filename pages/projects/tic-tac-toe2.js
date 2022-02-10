import styles from "../../styles/tic-tac-toe.module.scss";

function Tile({ position, isHighlighted, piecePlaced, children }) {
  return (
    <button
      key={position}
      value={position}
      className={`${styles.square} ${isHighlighted && styles.winningSquare}`}
      onClick={piecePlaced}
    >
      {children}
    </button>
  );
}

export default function TicTacToe2() {
  const {
    currentTurn,
    player1,
    player2,
    player1Wins,
    player2Wins,
    board,
    winningSquares,
    doMove,
  } = {
    board: [""],
    winningSquares: [],
  };

  return (
    <div className={styles.TicTacToe}>
      <h1>Tic Tac Toe</h1>
      <div>
        <input
          id="one-player"
          type="radio"
          name="player-type"
          onClick={() => setOnePlayer(true)}
          defaultChecked
        />
        <label htmlFor="one-player">One Player</label>
        <input
          id="two-player"
          type="radio"
          onClick={() => setOnePlayer(false)}
          name="player-type"
        />
        <label htmlFor="two-player">Two Player</label>
      </div>
      <div>
        <p>Current Turn: {currentTurn}</p>
        <p>
          {player1} Wins: {player1Wins}
        </p>
        <p>
          {player2} Wins: {player2Wins}
        </p>
      </div>
      <div className={styles.board}>
        {board.map((square, index) => (
          <Tile position={index} isHighlighted={winningSquares.includes(index)}>
            {square}
          </Tile>
        ))}
      </div>
    </div>
  );
}
