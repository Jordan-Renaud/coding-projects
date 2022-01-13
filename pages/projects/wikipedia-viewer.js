import { useState } from "react";
import styles from "../../styles/wikipedia-viewer.module.scss";

export default function WikipediaViewer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  function searchWikipedia(event) {
    event.preventDefault();
    getSearchQuery(event);
    doApiCall(prepareSearchText(searchQuery));
  }

  function getSearchQuery(event) {
    setSearchQuery(event.target.value);
  }

  function prepareSearchText(searchText) {
    return encodeURIComponent(searchText.toLowerCase());
  }

  function doApiCall(searchText) {
    const url = `https://en.wikipedia.org//w/api.php?action=opensearch&format=json&origin=*&search=${searchText}&limit=10`;
    console.log(url);
    fetch(url)
      .then((data) => data.json())
      .then(handleJSON);
  }

  function handleJSON(JSON) {
    setResults(JSON.data[1]);
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
      <div className={styles.results}>
        {results.map((result) => (
          <p>{result}</p>
        ))}
      </div>
    </div>
  );
}
