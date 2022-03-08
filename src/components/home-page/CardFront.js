import Image from "next/image";
import styles from "src/styles/home-page/CardFront.module.scss";

export default function CardFront({ cardContent }) {
  return (
    <div className={styles.front}>
      <h2>{cardContent.title}</h2>
      <a href={cardContent.link}>
        <Image
          src={cardContent.image}
          width={200}
          height={200}
          alt={cardContent.alt}
        />
      </a>
      {cardContent.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}
