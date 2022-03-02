import styles from "../styles/Tags.module.scss";

export default function Tags({ names }) {
  return (
    <div className={styles.Tags}>
      {names.map((name) => (
        <p key={name} className={styles.individual}>
          {name}
        </p>
      ))}
    </div>
  );
}
