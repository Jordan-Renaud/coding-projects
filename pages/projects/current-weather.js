import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../styles/projects/current-weather.module.scss";

export default function CurrentWeather() {
  //loader variables
  const [loading, setLoading] = useState(true);

  //weather variables
  const [tempCelsius, setTempCelsius] = useState(0);
  const [tempFarenheit, setTempFarenheit] = useState(0);
  const [icon, setIcon] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [degreeType, setDegreeType] = useState("C");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setCoordinates);
    } else {
      console.log("shit not working");
    }
  }, []);

  function setCoordinates(position) {
    const { latitude, longitude } = position.coords;
    doApiCall(latitude, longitude);
  }

  function doApiCall(latitude, longitude) {
    const url = `https://weather-proxy.freecodecamp.rocks/api/current?lat=${latitude}&lon=${longitude}`;
    axios
      .get(url)
      .then(getWeatherJSON)
      .then(() => setTimeout(() => setLoading(false), 2000));
  }

  function getWeatherJSON(response) {
    const JSON = response.data;

    setTempCelsius(Math.floor(JSON.main.temp));
    setTempFarenheit(Math.floor((JSON.main.temp * 9) / 5 + 32));
    setIcon(JSON.weather[0].icon);
    setDescription(JSON.weather[0].main);
    setLocation(`${JSON.name}, ${JSON.sys.country}`);
  }

  function changeDegreeType() {
    degreeType === "C" ? setDegreeType("F") : setDegreeType("C");
  }

  return (
    <div className={styles.CurrentWeather}>
      <h1 className="projectTitle">Current Weather</h1>
      <div className={styles.content}>
        {loading ? (
          <div className={styles.loaderContainer}>
            <div className={styles.loader}></div>
          </div>
        ) : (
          <div className={styles.weather}>
            <p>{location}</p>
            <div className={styles.temperatureContainer}>
              <p className={styles.temperature}>
                {degreeType === "C" ? tempCelsius : tempFarenheit}
              </p>
              <button className="input-item" onClick={changeDegreeType}>
                °{degreeType}
              </button>
            </div>
            <img className={styles.icon} src={icon} alt="weather icon" />
            <p className={styles.description}>{description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
