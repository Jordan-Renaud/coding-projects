import styles from "src/styles/home-page/LinkTile.module.scss";

export default function LinkTile({ iconLink, icon, iconTitle }) {
  return (
    <div className={styles.LinkTile} id={styles.iconTitle}>
      <a href={iconLink} target="_blank" rel="noreferrer">
        {icon}
      </a>
    </div>
  );
}
