export default function WriteUp({ title, paragraphs }) {
  return (
    <div>
      <h2>{title}</h2>
      {paragraphs.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
    </div>
  );
}
