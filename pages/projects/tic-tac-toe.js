import { useState } from "react";
import { shuffle } from "lodash";
import styles from "../../styles/tic-tac-toe.module.scss";
import { useEffect } from "react/cjs/react.development";

export default function TicTacToe() {
  //set up variables
  const emptyBoard = ["", "", "", "", "", "", "", "", ""];

  const [player1, setplayer1] = useState("X");
  const [player2, setplayer2] = useState("O");
  const [board, setBoard] = useState(emptyBoard);

  //playing variables
  const [currentTurn, setCurrentTurn] = useState(player1);
  const [player1Wins, setPlayer1Wins] = useState(0);
  const [player2Wins, setPlayer2Wins] = useState(0);
  const [winningSquares, setWinningSquares] = useState([]);

  //game mode variables
  const [onePlayer, setOnePlayer] = useState(true);

  function doMove(event) {
    const squareIndex = event.target.value;

    placePiece(squareIndex);
    setCurrentTurn(currentTurn === player1 ? player2 : player1);
    checkForAWin();
  }

  function placePiece(squareIndex) {
    board[squareIndex] === "" && board.splice(squareIndex, 1, currentTurn);
  }

  function checkForAWin() {
    const sections = [
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
    sections.forEach((section) =>
      dealWithSection(section[0], section[1], section[2])
    );
    isAllSpacesFilled() && handleDraw();
  }

  useEffect(() => {
    if (onePlayer && currentTurn === player2) {
      doComputerMove();
    }
  }, [currentTurn]);

  function doComputerMove() {
    //get the empty squares

    //wait for 1 seconds
    setTimeout(() => {
      const emptyIndexes = board
        .map((square, index) => (square === "" ? index : null))
        .filter(Boolean);
      placePiece(_.shuffle(emptyIndexes)[0]);
      setCurrentTurn(currentTurn === player1 ? player2 : player1);
    }, 1000);
  }

  function dealWithSection(index1, index2, index3) {
    checkWinningSection(index1, index2, index3) &&
      handleWin(index1, index2, index3);
  }

  function checkWinningSection(index1, index2, index3) {
    return (
      board[index1] !== "" &&
      board[index1] === board[index2] &&
      board[index1] === board[index3]
    );
  }

  function handleWin(index1, index2, index3) {
    //update score board
    board[index1] === player1 && setPlayer1Wins(player1Wins + 1);
    board[index1] === player2 && setPlayer2Wins(player2Wins + 1);

    //show winning row
    setWinningSquares([index1, index2, index3]);

    //reset board after 2 seconds
    setTimeout(() => {
      setBoard(emptyBoard);
      setWinningSquares([]);
    }, 2000);
  }

  //draw check
  function isAllSpacesFilled() {
    return !board.includes("");
  }

  function handleDraw() {
    //flash all squares
    setWinningSquares([...Array(9).keys()]);

    //reset board
    setTimeout(() => {
      setBoard(emptyBoard);
      setWinningSquares([]);
    }, 2000);
  }

  function setToOnePlayer() {
    console.log("oneplayer");
    //wait 1 second
    //if player 2 insert piece at rabdom location that is empty
  }

  function setToTwoPlayer() {
    console.log("twoplayer");
  }

  return (
    <div className={styles.TicTacToe}>
      <h1>Tic Tac Toe</h1>
      <div>
        <input
          id="one-player"
          type="radio"
          name="player-type"
          onClick={setToOnePlayer}
          defaultChecked
        />
        <label htmlFor="one-player">One Player</label>
        <input
          id="two-player"
          type="radio"
          onClick={setToTwoPlayer}
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
          <button
            key={index}
            value={index}
            className={`${styles.square} ${
              winningSquares.includes(index) && styles.winningSquare
            }`}
            onClick={doMove}
          >
            {square}
          </button>
        ))}
      </div>
    </div>
  );
}
