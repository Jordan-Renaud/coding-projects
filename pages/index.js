import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.Home}>
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

        <p>colours</p>
        <p className={styles.tourmaline}>#85a1ac</p>
        <p className={styles.peri}>#6868ac</p>
        <p className={styles.pink}>#e9435e</p>
        <p className={styles.cornsilk}>#ecc371</p>

        <div className={styles.projectsContainer}>
          <Link href="/projects/current-weather">
            <a className={styles.project}>Current Weather Project</a>
          </Link>
          <Link href="/projects/wikipedia-viewer" className={styles.project}>
            <a>Wikipedia</a>
          </Link>
          <Link href="/projects/twitch-streamers" className={styles.project}>
            <a>Twitch</a>
          </Link>
          <Link href="/projects/image-search" className={styles.project}>
            <a>Image Search</a>
          </Link>
        </div>
      </main>

      <footer>Jordan Renaud 2022</footer>
    </div>
  );
}
