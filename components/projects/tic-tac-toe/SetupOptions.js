import styles from "../../../styles/projects/tic-tac-toe.module.scss";

export default function SetupOptions({ setNumberOfPlayers, gameMode }) {
  return (
    <div className={styles.SetupOptions}>
      <div className={styles.playerType}>
        <input
          id="one-player"
          type="radio"
          name="one-player"
          onChange={() => setNumberOfPlayers(1)}
          value={1}
          checked={gameMode === "onePlayer"}
        />
        <label htmlFor="one-player">One Player</label>
      </div>
      <div className={styles.playerType}>
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
    </div>
  );
}
