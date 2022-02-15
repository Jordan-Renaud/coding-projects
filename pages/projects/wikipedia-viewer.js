import { useState } from "react";
import styles from "../../styles/wikipedia-viewer.module.scss";
import axios from "axios";

export default function WikipediaViewer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  function searchWikipedia(event) {
    getSearchQuery(event);
    doApiCall(prepareSearchText(searchQuery));
  }

  function handleClick(event) {
    event.preventDefault();
    searchWikipedia(event);
  }

  function handleKeyPress(event) {
    event.key === "Enter" && searchWikipedia(event);
  }

  function getSearchQuery(event) {
    setSearchQuery(event.target.value);
    setResults([]);
  }

  function prepareSearchText(searchText) {
    return encodeURIComponent(searchText.toLowerCase());
  }

  function doApiCall(searchText) {
    const url = `https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${searchText}`;
    axios(url).then(handleJSON);
  }

  function handleJSON(json) {
    const pagesJSON = json.data.query.pages;
    setResults(
      ...results,
      Object.keys(pagesJSON).map((pageID) => {
        return {
          title: pagesJSON[pageID].title,
          index: pagesJSON[pageID].index,
          extract: pagesJSON[pageID].extract,
          pageNumber: pagesJSON[pageID].pageid,
        };
      })
    );
  }

  return (
    <div className={styles.WikipediaViewer}>
      <h1>Wikipedia Viewer</h1>
      <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank">
        Random
      </a>
      <div className={styles.searchContainer}>
        <input
          type="search"
          onKeyPress={handleKeyPress}
          value={searchQuery}
          onInput={getSearchQuery}
          aria-label="Search wikipedia"
        />
        <button onClick={handleClick}>Search</button>
      </div>
      <div className={styles.results}>
        {results.map((result) => (
          <a
            href={`http://en.wikipedia.org/?curid=${result.pageNumber}`}
            target="_blank"
            key={result.title}
          >
            <p className={styles.linkTitle}>{result.title}</p>
            <p>{result.extract}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
