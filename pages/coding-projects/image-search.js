import { useState } from "react";
import styles from "src/styles/projects/image-search.module.scss";

const topics = ["cats", "dogs", "mice"];

export default function ImageSearch() {
  const [photos, setPhotos] = useState([]);
  const [searchBarTerm, setSearchBarTerm] = useState("");

  function doApiCall(searchTerm) {
    fetch("/api/image-search?searchTerm=" + encodeURIComponent(searchTerm))
      .then((res) => res.json())
      .then((results) => {
        setPhotos(results.results);
      })
      .catch((e) => {
        console.log("error occurred: ", e);
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
      <h1 className="projectTitle">/image-search</h1>
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
