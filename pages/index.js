import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coding Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Coding Projects</h1>
        <h2>
          Projects based off the freeCodeCamp{" "}
          <a href="https://www.freecodecamp.org/learn/coding-interview-prep/#take-home-projects">
            Take Home Projects
          </a>
        </h2>
        <Link href="/projects/current-weather">
          <a>Current Weather Project</a>
        </Link>
      </main>
    </div>
  );
}
