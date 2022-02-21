import Link from "next/link";
import styles from "../../styles/home-page/ProjectCard.module.scss";

export default function ProjectCard({ link, key, title }) {
  return (
    <div className={styles.ProjectCard}>
      <Link key={key} href={link}>
        <a className={styles.link}>{title}</a>
      </Link>
    </div>
  );
}
