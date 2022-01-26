import { createApi } from "unsplash-js";
import styles from "../../styles/image-search.module.scss";

const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_API_KEY,
});

const topics = ["cats", "dogs", "mice"];

export default function ImageSearch() {
  function searchImagesFromTopics(event) {
    const searchTerm = event.target.value;
    console.log("searching", searchTerm);

    unsplash.search
      .getPhotos({
        query: searchTerm,
        page: 1,
        perPage: 10,
        orderBy: "relevant",
      })
      .then((results) => {
        if (results.errors) {
          // handle error here
          console.log("error occurred: ", results.errors[0]);
        } else {
          // handle success here
          const photos = results.response;
          console.log(photos);
        }
      });
  }

  return (
    <div className={styles.ImageSearch}>
      <h1>Image Search</h1>
      <form>
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit">Search</button>
      </form>
      <div className={styles.buttonContainer}>
        {topics.map((topic) => (
          <button key={topic} value={topic} onClick={searchImagesFromTopics}>
            {topic}
          </button>
        ))}
      </div>
      <div></div>
    </div>
  );
}
