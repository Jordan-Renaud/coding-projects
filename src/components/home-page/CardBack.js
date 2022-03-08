import Image from "next/image";
import styles from "src/styles/home-page/CardBack.module.scss";

export default function CardBack({ cardContent }) {
  return (
    <div className={styles.cardBack}>
      <Image
        src={cardContent.image}
        width={400}
        height={600}
        alt={cardContent.alt}
      />
    </div>
  );
}
