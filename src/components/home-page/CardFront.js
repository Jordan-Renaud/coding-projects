import Image from "next/image";
import styles from "src/styles/home-page/CardFront.module.scss";

export default function CardFront({ cardContent }) {
  return (
    <div className={styles.cardFront}>
      <Image
        src={cardContent.image}
        width={300}
        height={400}
        layout="responsive"
        alt={cardContent.alt}
      />
    </div>
  );
}
