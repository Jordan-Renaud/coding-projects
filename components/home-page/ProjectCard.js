import Link from "next/link";
import styles from "../../styles/home-page/ProjectCard.module.scss";

export default function ProjectCard({ link, title }) {
  return (
    <Link href={link} passHref>
      <a className={styles.ProjectCard}>
        <div className={styles.crtScreen}>
          <p className={styles.link}>/{title}</p>
        </div>
      </a>
    </Link>
  );
}
