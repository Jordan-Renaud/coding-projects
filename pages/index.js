import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import { colours, projects } from "./data";
import useEmblaCarousel from "embla-carousel-react";

export default function Home() {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
  });

  return (
    <div className={styles.Home}>
      <Head>
        <title>Coding Projects</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <h1>Coding Projects</h1>
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

        <p>colours</p>
        <p className={styles.tourmaline}>#85a1ac</p>
        <p className={styles.peri}>#6868ac</p>
        <p className={styles.pink}>#e9435e</p>
        <p className={styles.cornsilk}>#ecc371</p>

        <div className={styles.caroselContainer}>
          <div className={styles.carosel} ref={emblaRef}>
            <div className={styles.projectsContainer}>
              {projects.map((project) => (
                <Link key={project.title} href={project.link}>
                  <div className={styles.project}>
                    <a className={styles.link}>{project.title}</a>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer>Jordan Renaud 2022</footer>
    </div>
  );
}
