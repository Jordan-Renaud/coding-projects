import { useState, useEffect } from "react";
import { TwitchStreamerData } from "../data";
import styles from "../../styles/twitch-streamers.module.scss";

export default function TwitchStreamers() {
  const [streamerData, setStreamerData] = useState(TwitchStreamerData);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTwitchJSON("cretetion");
  }, []);

  function getTwitchJSON(streamer) {
    const url = `https://twitch-proxy.freecodecamp.rocks/twitch-api/channels/${streamer}`;
    fetch(url)
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .then(handleData);
  }

  function handleData(JSON) {
    console.log(JSON);
  }
  return (
    <div className={styles.Twitch}>
      <h1>Twitch Streamers</h1>
      <div className={styles.buttonContainer}>
        <button>All</button>
        <button>Online</button>
        <button>Offline</button>
      </div>
      <ul>
        {streamerData.map((streamer, index) => (
          <li key={index}>{streamer.name}</li>
        ))}
      </ul>
    </div>
  );
}
