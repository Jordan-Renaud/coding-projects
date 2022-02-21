import Head from "next/head";
import Link from "next/link";
import Title from "../components/home-page/Title";
import { projects, titleWords } from "./data";
import styles from "../styles/home-page/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.Home}>
      <Head>
        <title>coding projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.content}>
        <Title texts={titleWords} />
        <h2 className={styles.subheading}>
          Projects based off the freeCodeCamp{" "}
          <a
            className="link"
            href="https://www.freecodecamp.org/learn/coding-interview-prep/#take-home-projects"
          >
            Take Home Projects
          </a>
        </h2>
        {projects.map((project) => (
          <Link key={project.title} href={project.link}>
            <div className={styles.project}>
              <a className={styles.link}>{project.title}</a>
            </div>
          </Link>
        ))}
      </main>

      <footer>Jordan Renaud 2022</footer>
    </div>
  );
}
