import { createApi } from "unsplash-js";
import { useState } from "react";
import styles from "../../styles/projects/image-search.module.scss";

//TODO: make not public
const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_API_KEY,
});

const topics = ["cats", "dogs", "mice"];

export default function ImageSearch() {
  const [photos, setPhotos] = useState([]);
  const [searchBarTerm, setSearchBarTerm] = useState("");

  function doApiCall(searchTerm) {
    unsplash.search
      .getPhotos({
        query: searchTerm,
        page: 1,
        perPage: 12,
        orderBy: "relevant",
      })
      .then((results) => {
        console.log(results);
        if (results.errors) {
          console.log("error occurred: ", results.errors[0]);
        } else {
          setPhotos(results.response.results);
        }
      });
  }

  function searchImagesFromTopics(event) {
    const searchTerm = event.target.value;
    doApiCall(searchTerm);
  }

  function searchImagesFromSearchBar(event) {
    event.preventDefault();
    doApiCall(searchBarTerm);
  }

  return (
    <div className={styles.ImageSearch}>
      <h1 className="projectTitle">Image Search</h1>
      <form className={styles.searchContainer}>
        <input
          className="input-item"
          type="text"
          placeholder="Search.."
          name="search"
          value={searchBarTerm}
          onChange={(e) => setSearchBarTerm(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && doApiCall(searchBarTerm)}
        />
        <button
          className="input-item"
          type="submit"
          onClick={searchImagesFromSearchBar}
        >
          Search
        </button>
      </form>
      <div className={styles.buttonContainer}>
        {topics.map((topic) => (
          <button
            className="input-item"
            key={topic}
            value={topic}
            onClick={searchImagesFromTopics}
          >
            {topic}
          </button>
        ))}
      </div>
      <div className={styles.photos}>
        {photos.map((photo) => (
          <img
            key={photo.alt_description}
            src={photo.urls.small}
            alt={photo.alt_description}
          />
        ))}
      </div>
    </div>
  );
}
