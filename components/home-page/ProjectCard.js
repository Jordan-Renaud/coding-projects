import Link from "next/link";
import styles from "../../styles/home-page/ProjectCard.module.scss";

export default function ProjectCard({ link, key, title }) {
  return (
    <Link key={key} href={link}>
      <div className={styles.ProjectCard}>
        <p className={styles.link}>/{title}</p>
      </div>
    </Link>
  );
}
