import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Title from "../components/home-page/Title";
import { projects } from "./data";

export default function Home() {
  console.log(projects);

  return (
    <div className={styles.Home}>
      <Head>
        <title>Coding Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Title texts={["FUN", "TAKE HOME", "LEARNING"]} />
        <h2>
          Projects based off the freeCodeCamp{" "}
          <a
            className={styles.link}
            href="https://www.freecodecamp.org/learn/coding-interview-prep/#take-home-projects"
          >
            Take Home Projects
          </a>
          .
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
