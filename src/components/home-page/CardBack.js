import Image from "next/image";
import styles from "src/styles/home-page/CardBack.module.scss";

export default function CardBack({ cardContent }) {
  return (
    <article className={styles.CardBack}>
      <h2 className={styles.projectTitle}>{cardContent.title}</h2>
      <a
        href={cardContent.link}
        onClick={(e) => e.stopPropagation()}
        target="_blank"
        rel="noreferrer"
        className={styles.pageLink}
      >
        <Image
          src={cardContent.image}
          width={200}
          height={200}
          alt={cardContent.alt}
        />
      </a>
      <section className={styles.about}>
        {cardContent.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>
    </article>
  );
}
