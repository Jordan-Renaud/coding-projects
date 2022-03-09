import Card from "src/components/home-page/Card";
import styles from "src/styles/home-page/Home.module.scss";

//working image/variables --> delete when done
import questionMark from "../public/twitch-streamers-images/questionMark.png";
const cards = [
  {
    frontOfCard: {
      title: "Project 1",
      image: questionMark,
      link: "https://easy-recipes-jr.netlify.app/",
      content: ["paragraph 1", "paragraph 2"],
      alt: "picture of website",
    },
    backOfCard: {
      image: questionMark,
      alt: "this is the back of the card",
    },
  },
  {
    frontOfCard: {
      title: "Project 2",
      image: questionMark,
      link: "https://easy-recipes-jr.netlify.app/",
      content: ["paragraph 1", "paragraph 2"],
      alt: "picture of website",
    },
    backOfCard: {
      image: questionMark,
      alt: "this is the back of the card",
    },
  },
];

export default function Home() {
  return (
    <div className={styles.Home}>
      <h1 className="projectTitle">Jordan Renaud Developer</h1>
      <div className={styles.cardContainer}>
        {cards.map((cardContent, index) => (
          <Card key={index} cardContent={cardContent} />
        ))}
      </div>
    </div>
  );
}
