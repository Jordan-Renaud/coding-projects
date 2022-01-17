import { useState } from "react";
import styles from "../../styles/twitch-streamers.module.scss";

export default function TwitchStreamers() {
  const [streamerData, setStreamerData] = useState([
    { name: "ESL_SC2", isOnline: false, details: "" },
    { name: "OgamingSC2", isOnline: false, details: "" },
    { name: "cretetion", isOnline: false, details: "" },
    { name: "freecodecamp", isOnline: false, details: "" },
    { name: "storbeck", isOnline: false, details: "" },
    { name: "habathcx", isOnline: false, details: "" },
    { name: "RobotCaleb", isOnline: false, details: "" },
    { name: "noobs2ninjas", isOnline: false, details: "" },
  ]);
  return (
    <div>
      <h1>Twitch Streamers</h1>
      <button>All</button>
      <button>Online</button>
      <button>Offline</button>
      <ul>
        {streamerData.map((streamer) => (
          <li>{streamer.name}</li>
        ))}
      </ul>
    </div>
  );
}
