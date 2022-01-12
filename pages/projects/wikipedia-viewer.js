import { useState } from "react";
import styles from "../../styles/wikipedia-viewer.module.scss";

export default function WikipediaViewer() {
  const [searchQuery, setSearchQuery] = useState("");

  function getSearchQuery(event) {
    setSearchQuery(event.target.value);
  }

  function searchWikipedia(event) {
    event.preventDefault();
    getSearchQuery(event);
    console.log("search", searchQuery);
  }

  return (
    <div className={styles.WikipediaViewer}>
      <h1>Wikipedia Viewer</h1>
      <p>{searchQuery}</p>
      <div className={styles.searchContainer}>
        <input
          type="search"
          value={searchQuery}
          onInput={getSearchQuery}
          aria-label="Search wikipedia"
        />
        <button onClick={searchWikipedia}>Search</button>
      </div>
    </div>
  );
}
