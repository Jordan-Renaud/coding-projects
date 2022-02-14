export default function WriteUp({ content }) {
  return (
    <div>
      <h2>{content.title}</h2>
      <a href={content.link} target="_blank">
        freecodecamp link
      </a>
      {content.keywords.map((keyword) => (
        <span key={keyword}>{keyword}</span>
      ))}
      <p>{content.about}</p>
      <ul>
        {content.userStories.map((userStory, index) => (
          <li key={index}>{`User Story #${index + 1}: ${userStory}`}</li>
        ))}
      </ul>
      <p>{content.whatHappened}</p>
      <p>{content.challenges}</p>
      <p>{content.future}</p>
    </div>
  );
}
