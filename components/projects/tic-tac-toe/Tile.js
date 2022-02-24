import styles from "../../../styles/projects/tic-tac-toe.module.scss";

export default function Tile({
  position,
  isHighlighted,
  piecePlaced,
  children,
}) {
  return (
    <button
      key={position}
      value={position}
      className={`${styles.square} ${isHighlighted && styles.winningSquare}`}
      onClick={() => piecePlaced(position)}
    >
      {children}
    </button>
  );
}
