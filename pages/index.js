import Card from "src/components/home-page/Card";
import { cardData } from "src/data";
import styles from "src/styles/home-page/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.Home}>
      <h1 className="projectTitle">Jordan Renaud Developer</h1>
      <div className={styles.cardContainer}>
        {cardData.map((cardContent, index) => (
          <Card key={index} cardContent={cardContent} />
        ))}
      </div>
    </div>
  );
}
