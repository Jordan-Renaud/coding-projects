import { useState } from "react";
import styles from "../../styles/tic-tac-toe.module.scss";

export default function TicTacToe() {
  const emptyBoard = ["", "", "", "", "", "", "", "", ""];

  const [player1, setplayer1] = useState("X");
  const [player2, setplayer2] = useState("O");
  const [board, setBoard] = useState(emptyBoard);
  const [currentTurn, setCurrentTurn] = useState(player1);
  const [player1Wins, setPlayer1Wins] = useState(0);
  const [player2Wins, setPlayer2Wins] = useState(0);

  function doMove(event) {
    const squareIndex = event.target.value;

    //handle playing logic
    if (board[squareIndex] === "") {
      //place piece
      board.splice(squareIndex, 1, currentTurn);
    } else {
      //ignore as square is occupied
    }

    //update player turn
    setCurrentTurn(currentTurn === player1 ? player2 : player1);
    console.log(checkForAWin());
  }

  //draw check
  function isSpacesFilled() {
    return !board.includes("");
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
  }

  function dealWithSection(index1, index2, index3) {
    checkWinningSection(index1, index2, index3) && handleWin(index1);
  }

  function checkWinningSection(index1, index2, index3) {
    return (
      board[index1] !== "" &&
      board[index1] === board[index2] &&
      board[index1] === board[index3]
    );
  }

  function handleWin(index1) {
    //update score board
    board[index1] === player1 && setPlayer1Wins(player1Wins + 1);
    board[index1] === player2 && setPlayer2Wins(player2Wins + 1);

    //show animation of winning row

    //reset board
    setBoard(emptyBoard);
  }

  return (
    <div className={styles.TicTacToe}>
      <h1>Tic Tac Toe</h1>
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
            className={styles.square}
            onClick={doMove}
          >
            {square}
          </button>
        ))}
      </div>
    </div>
  );
}
