import { useState, useEffect } from "react";
import styles from "../../styles/twitch-streamers.module.scss";

export default function TwitchStreamers() {
  const [streamerData, setStreamerData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const streamers = [
      "ESL_SC2",
      "OgamingSC2",
      "cretetion",
      "freecodecamp",
      "storbeck",
      "habathcx",
      "RobotCaleb",
      "noobs2ninjas",
    ];

    (async () => {
      const data = await Promise.all(
        streamers.map((streamer) => getTwitchJSON(streamer))
      );
      setStreamerData(data.map(handleData));
    })();
  }, []);

  async function getTwitchJSON(streamer) {
    const url = `https://twitch-proxy.freecodecamp.rocks/twitch-api/channels/${streamer}/`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data: ", error);
      setError(error);
    }
  }

  function handleData(JSON) {
    const name = JSON.name;
    const isOnline = JSON.mature;
    const profilePic = JSON.logo;
    const details = isOnline ? JSON.game : "Offline";

    return {
      name: name,
      logo: profilePic,
      isOnline: isOnline,
      details: details,
    };
  }

  return (
    <div className={styles.Twitch}>
      <h1>Twitch Streamers</h1>
      <div className={styles.buttonContainer}>
        <button>All</button>
        <button>Online</button>
        <button>Offline</button>
      </div>
      <ul className={styles.resultsContainer}>
        {streamerData.map((streamer, index) => (
          <li
            className={`${styles.streamer} ${
              streamer.isOnline ? styles.online : styles.offline
            }`}
            key={index}
          >
            <img className={styles.logo} src={streamer.logo} />
            <a
              className="link"
              href={`https://www.twitch.tv/${streamer.name}`}
              target="_blank"
            >
              {streamer.name}
            </a>
            <p>{streamer.details}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
