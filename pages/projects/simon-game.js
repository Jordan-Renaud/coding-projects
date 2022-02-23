import { useState, useEffect } from "react";
import { random } from "lodash";

//confetti imports
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

import styles from "../../styles/projects/simon-game.module.scss";

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
  const { width, height } = useWindowSize();

  const [numberOfSquares, setNumberOfSquares] = useState(4);
  const [squares, setSquares] = useState([...Array(numberOfSquares).keys()]);
  const [highlightedSquare, setHighlightedSquare] = useState(null);
  const [audioFiles, setAudioFiles] = useState([]);
  const [errorSound, setErrorSound] = useState();

  //game play variables
  const [sequence, setSequence] = useState(null);
  const [isPlayerTurn, setIsPlayerTurn] = useState(false);
  const [currentItemInSequence, setCurrentItemInSequence] = useState(0);
  const [mistakesLeft, setMistakesLeft] = useState(3);
  const [gameMode, setGameMode] = useState("normal");
  const [playerHasWon, setPlayerHasWon] = useState(false);
  const [playerHasLost, setPlayerHasLost] = useState(false);
  const [madeMistakeInRound, setMadeMistakeInRound] = useState(false);

  //map sounds on to setAudioFiles
  useEffect(() => {
    const audios = [...Array(10).keys()].map(
      (n) => new Audio(`/simon-game-sounds/simonSound${n}.mp3`)
    );
    setAudioFiles(audios);
    setErrorSound(new Audio(`/simon-game-sounds/simonSoundError.mp3`));
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

  //checks for end of player's turn or win
  useEffect(() => {
    if (
      sequence &&
      currentItemInSequence === sequence.length &&
      sequence.length === 20
    ) {
      //player has won
      setPlayerHasWon(true);
      setIsPlayerTurn(false);
    } else if (
      sequence &&
      currentItemInSequence === sequence.length &&
      sequence.length !== 0 &&
      !madeMistakeInRound &&
      !playerHasLost
    ) {
      setIsPlayerTurn(false);
      setTimeout(() => {
        computerDoMove("new");
      }, 1000);
    }
  }, [currentItemInSequence]);

  //checks for all mistakes used up
  useEffect(() => {
    if (mistakesLeft === 0) {
      setPlayerHasLost(true);
      setIsPlayerTurn(false);
    }
  }, [mistakesLeft]);

  //check for empty sequence before computer moves (on game reset)
  useEffect(() => {
    if (sequence && sequence.length === 0) {
      setTimeout(() => {
        computerDoMove("new");
      }, 1000);
    }
  }, [sequence]);

  function resetAndStartGame() {
    setPlayerHasWon(false);
    setPlayerHasLost(false);
    setMistakesLeft(gameMode === "normal" ? 3 : 1);
    setCurrentItemInSequence(0);
    setIsPlayerTurn(false);
    setSequence([]);
  }

  function computerDoMove(type) {
    setMadeMistakeInRound(false);
    let newSquence = sequence;
    //add an item to squence
    if (type === "new") {
      newSquence = [...sequence, random(0, numberOfSquares - 1)];
      setSequence(newSquence);
    }

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
    //helper functions
    function handleMistake() {
      //mistake is made
      setMadeMistakeInRound(true);

      //play weird sound
      errorSound.play();

      //wait then replay round
      if (mistakesLeft === 0) {
        setTimeout(() => {
          computerDoMove("repeat");
        }, 1000);
      }
    }
    //highlight clicked square
    highlight(square);

    //checks for a mistake
    if (Number(square) !== sequence[currentItemInSequence]) {
      handleMistake();
      setMistakesLeft(mistakesLeft - 1);
    }

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
      {playerHasWon && <Confetti width={width} height={height} />}
      {playerHasLost && (
        <Confetti width={width} height={height} colors={["#000000"]} />
      )}
      <h1 className="projectTitle">/simon-game</h1>
      <form className={styles.setup}>
        <label htmlFor="square-amount">Choose how many squares:</label>
        <select
          className="input-item"
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
          className="input-item"
          value={gameMode}
          onChange={({ target: { value } }) => setGameMode(value)}
          name="game-mode"
          id="game-mode"
        >
          <option value="normal">Normal</option>
          <option value="strict">Strict</option>
        </select>
        <button
          className="input-item"
          onClick={(e) => {
            e.preventDefault();
            resetAndStartGame();
          }}
        >
          Start
        </button>
      </form>

      <div className={styles.gameInfo}>
        <p>Number of Mistakes left: {mistakesLeft}</p>
        <p>Length of Sequence: {sequence ? sequence.length : 0}</p>
      </div>
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
