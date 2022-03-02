import Tags from "../components/Tags";
import styles from "../styles/WriteUp.module.scss";

export default function WriteUp({ content }) {
  return (
    <div className={styles.WriteUp}>
      <h2 className={styles.title}>{content.title}</h2>
      <div className={styles.linkContainer}>
        <a
          className="link"
          href={content.link}
          target="_blank"
          rel="noreferrer"
        >
          freeCodeCamp link
        </a>
      </div>
      <Tags names={content.keywords} />
      <article className={styles.content}>
        {content.about}
        <ul className={styles.userStories}>
          {content.userStories.map((userStory, index) => (
            <li key={index}>{`User Story #${index + 1}: ${userStory}`}</li>
          ))}
        </ul>
        <p>{content.whatHappened}</p>
        <p>{content.challenges}</p>
        <p>{content.future}</p>
      </article>
    </div>
  );
}
