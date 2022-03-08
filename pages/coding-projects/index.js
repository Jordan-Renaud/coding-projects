import Head from "next/head";
import Title from "src/components/home-page-coding-projects/Title";
import ProjectCard from "src/components/home-page-coding-projects/ProjectCard";
import { projects, titleWords } from "src/data";
import styles from "src/styles/home-page-coding-projects/Home.module.scss";

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
        <div className={styles.projectContainer}>
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              link={project.link}
              title={project.title}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
