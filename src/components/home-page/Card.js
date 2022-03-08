import Image from "next/image";
import CardFront from "./CardFront";
import styles from "src/styles/home-page/Card.module.scss";

export default function Card({ cardContent }) {
  const frontOfCard = cardContent.frontOfCard;
  const backOfCard = cardContent.backOfCard;

  return (
    <div className={styles.Card}>
      <div className={styles.back}>
        <Image
          src={backOfCard.image}
          width={400}
          height={600}
          alt={backOfCard.alt}
        />
      </div>
      <CardFront cardContent={frontOfCard} />
    </div>
  );
}
