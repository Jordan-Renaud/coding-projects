import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { random } from "lodash";
import styles from "../../styles/simon-game.module.scss";

export default function SimonGame() {
  //set up
  const colours = [
    { normal: "#ED1216", highlighted: "#F04245" },
    { normal: "#DB7224", highlighted: "#E28F50" },
    { normal: "#E7BA18", highlighted: "#ECC846" },
    { normal: "#3EC13F", highlighted: "#65CD65" },
    { normal: "#169DE9", highlighted: "#44B1EE" },
    { normal: "#EC0CF3", highlighted: "#F03DF5" },
    { normal: "#9023DC", highlighted: "#A64FE3" },
    { normal: "#B89147", highlighted: "#C6A76C" },
    { normal: "#49322C", highlighted: "#69483F" },
    { normal: "#7C7D83", highlighted: "#96979C" },
  ];

  const [numberOfSquares, setNumberOfSquares] = useState(4);
  const [squares, setSquares] = useState([...Array(numberOfSquares).keys()]);
  const [highlightedSquare, setHighlightedSquare] = useState(null);

  //game play variables
  const [clickedSequence, setClickedSequence] = useState([]);
  const [sequence, setSequence] = useState([]);
  const [isPlayerTurn, setIsPlayerTurn] = useState(false);

  useEffect(() => {
    setSquares([...Array(Number(numberOfSquares)).keys()]);
  }, [numberOfSquares]);

  function startGame(event) {
    event.preventDefault();
    computerDoMove();
  }

  function computerDoMove() {
    //add an item to squence
    const newSquence = [...sequence, random(0, numberOfSquares - 1)];
    console.log(newSquence);
    setSequence(newSquence);

    //play back sequence
    newSquence.forEach((square, index) =>
      setTimeout(() => {
        highlight(square);
      }, 600 * index)
    );

    //set it to player's turn
    //TO DO: add a timeout for setting this
    setTimeout(() => {
      setIsPlayerTurn(true);
    }, 600 * newSquence.length);
  }

  function handleClick({ target: { value: square } }) {
    highlight(square);
    setClickedSequence([...clickedSequence, square]);
  }

  function highlight(square) {
    setHighlightedSquare(Number(square));
    setTimeout(() => {
      setHighlightedSquare(null);
    }, 300);
  }

  return (
    <div className={styles.SimonGame}>
      <h1>Simon Game</h1>
      <form className={styles.setup}>
        <label htmlFor="square-amount">Choose how many squares:</label>
        <select
          value={numberOfSquares}
          onChange={({ target: { value } }) => setNumberOfSquares(value)}
          name="square-amount"
          id="square-amount"
        >
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
        </select>
        <button onClick={startGame}>Start</button>
      </form>
      <div className={styles.gameBoard}>
        {squares.map((square) => (
          <button
            key={square}
            disabled={!isPlayerTurn}
            className={`${styles.square} ${
              highlightedSquare === square
                ? styles.highlighted
                : "notHighlighted"
            } ${isPlayerTurn ? "canClick" : styles.disabled}`}
            onClick={handleClick}
            value={square}
            style={{ backgroundColor: colours[square].normal }}
          ></button>
        ))}
      </div>
    </div>
  );
}
