import styles from "../styles/WriteUp.module.scss";

export default function WriteUp({ content }) {
  return (
    <div className={styles.WriteUp}>
      <h2 className={styles.title}>{content.title}</h2>
      <div className={styles.linkContainer}>
        <a className="link" href={content.link} target="_blank">
          freeCodeCamp link
        </a>
      </div>
      <div>
        {content.keywords.map((keyword) => (
          <span key={keyword}>{keyword}</span>
        ))}
      </div>
      <article className={styles.content}>
        <p>{content.about}</p>
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
