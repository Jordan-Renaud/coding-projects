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

function SetupOptions({ setNumberOfPlayers }) {
  return (
    <div>
      <input
        id="one-player"
        type="radio"
        name="player-type"
        onClick={() => setNumberOfPlayers(1)}
        defaultChecked
      />
      <label htmlFor="one-player">One Player</label>
      <input
        id="two-player"
        type="radio"
        onClick={() => setNumberOfPlayers(2)}
        name="player-type"
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

export default function TicTacToe2() {
  const {
    currentTurn,
    player1,
    player2,
    player1Score,
    player2Score,
    board,
    winningTiles,
    piecePlaced,
  } = {
    board: [""],
    winningTiles: [],
  };

  return (
    <div className={styles.TicTacToe}>
      <h1>Tic Tac Toe</h1>
      <SetupOptions setNumberOfPlayers={(x) => console.log(x)} />
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
        piecePlaced={piecePlaced}
      />
    </div>
  );
}
