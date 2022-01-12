import { useState } from "react";
import styles from "../../styles/wikipedia-viewer.module.scss";
import axios from "axios";

export default function WikipediaViewer() {
  const [searchQuery, setSearchQuery] = useState("");

  function searchWikipedia(event) {
    event.preventDefault();
    getSearchQuery(event);
    doApiCall(prepareSearchText(searchQuery));
  }

  function getSearchQuery(event) {
    setSearchQuery(event.target.value);
  }

  function prepareSearchText(searchText) {
    return searchText.toLowerCase().replace(" ", "%20");
  }

  function doApiCall(searchText) {
    const url = `https://en.wikipedia.org//w/api.php?action=opensearch&format=json&origin=*&search=${searchText}&limit=10`;
    console.log(url);
    axios.get(url).then(handleJSON);
  }

  function handleJSON(JSON) {
    console.log(JSON);
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
