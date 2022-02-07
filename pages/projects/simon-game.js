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
  const [audioFiles, setAudioFiles] = useState([]);

  //game play variables
  const [sequence, setSequence] = useState(null);
  const [isPlayerTurn, setIsPlayerTurn] = useState(false);
  const [currentItemInSequence, setCurrentItemInSequence] = useState(0);
  const [mistakesLeft, setMistakesLeft] = useState(3);
  const [gameMode, setGameMode] = useState("normal");

  //map sounds on to setAudioFiles
  useEffect(() => {
    const audios = [...Array(10).keys()].map(
      (n) => new Audio(`/simon-game-sounds/simonSound${n}.mp3`)
    );
    setAudioFiles(audios);
  }, []);

  //sets up the board at the specified number of squares
  useEffect(() => {
    setSquares([...Array(Number(numberOfSquares)).keys()]);
  }, [numberOfSquares]);

  //sets up the game mode
  useEffect(() => {
    if (gameMode === "normal") {
      setMistakesLeft(3);
    } else if (gameMode === "strict") {
      setMistakesLeft(1);
    }
    setCurrentItemInSequence(0);
    setIsPlayerTurn(false);
    sequence && setSequence([]);
  }, [gameMode]);

  //checks for end of player's turn
  useEffect(() => {
    if (
      sequence &&
      currentItemInSequence === sequence.length &&
      sequence.length !== 0
    ) {
      setIsPlayerTurn(false);
      console.log("player turn ended");
      setTimeout(() => {
        computerDoMove();
      }, 1000);
    }
  }, [currentItemInSequence]);

  //checks for all mistakes used up
  useEffect(() => {
    if (mistakesLeft === 0) {
      alert("You lost");
      resetAndStartGame();
    }
  }, [mistakesLeft]);

  //check for empty sequence before computer moves (on game reset)
  useEffect(() => {
    if (sequence && sequence.length === 0) {
      console.log(sequence);
      setTimeout(() => {
        computerDoMove();
      }, 1000);
    }
  }, [sequence]);

  function resetAndStartGame() {
    console.log("reset");
    setMistakesLeft(3);
    setCurrentItemInSequence(0);
    setIsPlayerTurn(false);
    setSequence([]);
  }

  function computerDoMove() {
    console.log("computer move");
    //add an item to squence
    const newSquence = [...sequence, random(0, numberOfSquares - 1)];
    setSequence(newSquence);

    //resets tracker for user
    setCurrentItemInSequence(0);

    //play back sequence
    newSquence.forEach((square, index) =>
      setTimeout(() => {
        highlight(square);
      }, 600 * index)
    );

    //set it to player's turn after computer is done
    setTimeout(() => {
      setIsPlayerTurn(true);
    }, 600 * newSquence.length);
  }

  function handleClick({ target: { value: square } }) {
    //highlight clicked square
    highlight(square);

    //check for a mistake
    Number(square) !== sequence[currentItemInSequence] &&
      setMistakesLeft(mistakesLeft - 1);

    //update current item to track where the user is in the sequence
    setCurrentItemInSequence(currentItemInSequence + 1);
  }

  function highlight(square) {
    setHighlightedSquare(Number(square));
    playSound(square);
    setTimeout(() => {
      setHighlightedSquare(null);
    }, 300);
  }

  function playSound(square) {
    audioFiles[square].currentTime = 0;
    audioFiles[square].play();
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
        <select
          value={gameMode}
          onChange={({ target: { value } }) => setGameMode(value)}
          name="game-mode"
          id="game-mode"
        >
          <option value="normal">Normal</option>
          <option value="strict">Strict</option>
        </select>
        <button
          onClick={(e) => {
            e.preventDefault();
            resetAndStartGame();
          }}
        >
          Start
        </button>
      </form>
      <p>Number of Mistakes left: {mistakesLeft}</p>
      <p>Length of Sequence: {sequence ? sequence.length : 0}</p>
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
