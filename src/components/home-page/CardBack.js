import Image from "next/image";
import styles from "src/styles/home-page/CardFront.module.scss";

export default function CardBack({ cardContent }) {
  return (
    <div className={styles.CardFront}>
      <h2>{cardContent.title}</h2>
      <a
        href={cardContent.link}
        onClick={(e) => e.stopPropagation()}
        target="_blank"
        rel="noreferrer"
      >
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
