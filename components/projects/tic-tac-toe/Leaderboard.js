export default function Leaderboard({
  player1,
  player2,
  player1Score,
  player2Score,
}) {
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
