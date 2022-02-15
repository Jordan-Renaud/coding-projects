import { useState, useEffect } from "react";
import styles from "../../styles/twitch-streamers.module.scss";

export default function TwitchStreamers() {
  const [streamerData, setStreamerData] = useState([]);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("All");

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
    getAndSetStreamers(streamers);
  }, []);

  async function getAndSetStreamers(streamers) {
    const data = await Promise.all(
      streamers.map((streamer) => getTwitchJSON(streamer))
    );
    setStreamerData(data.map(handleData));
  }

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

  function handleData(json) {
    const name = json.name;
    const isOnline = json.partner || json.mature;
    const profilePic = json.logo;
    const details = isOnline ? `${json.game}: ${json.status}` : "Offline";

    return {
      name: name,
      logo: profilePic,
      isOnline: isOnline,
      details: details,
    };
  }

  function filterResultsBy(option) {
    if (option === "Online") {
      return streamerData.filter((streamer) => streamer.isOnline);
    } else if (option === "Offline") {
      return streamerData.filter((streamer) => !streamer.isOnline);
    } else {
      return streamerData;
    }
  }

  return (
    <div className={styles.Twitch}>
      <h1>Twitch Streamers</h1>
      <div className={styles.buttonContainer}>
        <button onClick={() => setFilter("All")} value={"All"}>
          All
        </button>
        <button onClick={() => setFilter("Online")} value={"Online"}>
          Online
        </button>
        <button onClick={() => setFilter("Offline")} value={"Offline"}>
          Offline
        </button>
      </div>
      <ul className={styles.resultsContainer}>
        {filterResultsBy(filter).map((streamer, index) => (
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
