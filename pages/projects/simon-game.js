import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
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

  useEffect(() => {
    setSquares([...Array(Number(numberOfSquares)).keys()]);
    console.log(numberOfSquares);
  }, [numberOfSquares]);

  function handleClick({ target: { value: square } }) {
    highlight(square);
    setClickedSequence([...clickedSequence, square]);
  }

  function highlight(square) {
    setHighlightedSquare(Number(square));
    setTimeout(() => {
      setHighlightedSquare(null);
    }, 500);
  }

  return (
    <div className={styles.SimonGame}>
      <h1>Simon Game</h1>
      <form>
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
      </form>
      <div className={styles.gameBoard}>
        {squares.map((square) => (
          <button
            key={square}
            className={`${styles.square} ${
              highlightedSquare === square
                ? styles.highlighted
                : "notHighlighted"
            }`}
            onClick={handleClick}
            value={square}
            style={{ backgroundColor: colours[square].normal }}
          ></button>
        ))}
      </div>
    </div>
  );
}
