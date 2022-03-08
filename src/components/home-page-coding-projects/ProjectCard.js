import Link from "next/link";
import styles from "../../styles/home-page-coding-projects/ProjectCard.module.scss";

export default function ProjectCard({ link, title }) {
  return (
    <Link href={link} passHref>
      <a className={styles.ProjectCard}>
        <p className={styles.link}>/{title}</p>
      </a>
    </Link>
  );
}
