import { createApi } from "unsplash-js";
import styles from "../../styles/image-search.module.scss";

const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_API_KEY,
});

const topics = ["cats", "dogs", "mice"];

export default function ImageSearch() {
  unsplash.photos.get({ photoId: "N0e6W2WDa5U" }).then((result) => {
    if (result.errors) {
      // handle error here
      console.log("error occurred: ", result.errors[0]);
    } else {
      // handle success here
      const photo = result.response;
      console.log(photo);
    }
  });

  return (
    <div className={styles.ImageSearch}>
      <h1>Image Search</h1>
      <form>
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit">Search</button>
      </form>
      <div className={styles.buttonContainer}>
        {topics.map((topic) => (
          <button>{topic}</button>
        ))}
      </div>
      <div></div>
    </div>
  );
}
