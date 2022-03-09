import CardFront from "./CardFront";
import CardBack from "./CardBack";
import { useState } from "react";
import styles from "src/styles/home-page/Card.module.scss";

export default function Card({ cardContent }) {
  const frontOfCard = cardContent.frontOfCard;
  const backOfCard = cardContent.backOfCard;
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`${styles.Card} ${
        isFlipped ? styles.flipped : styles.notFlipped
      }`}
      onClick={() => (isFlipped ? setIsFlipped(false) : setIsFlipped(true))}
    >
      <CardBack cardContent={backOfCard} />
      <CardFront cardContent={frontOfCard} />
    </div>
  );
}
