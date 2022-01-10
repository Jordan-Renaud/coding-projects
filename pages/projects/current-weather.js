import { useState, useEffect } from "react";

import Link from "next/link";

export default function CurrentWeather() {
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setCoordinates);
    } else {
      console.log("shit not working");
    }
  });

  function setCoordinates(position) {
    setLongitude(position.coords.longitude);
    setLatitude(position.coords.latitude);
  }

  return (
    <div>
      <h1>weather</h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  );
}
