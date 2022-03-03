import Typist from "react-typist";
import { useEffect, useState } from "react";
import styles from "../../styles/home-page/Title.module.scss";

export default function Title({ texts }) {
  const [currentTextCounter, setCurrentTextCounter] = useState(0);

  function calculateTime() {
    const waitingTime = (word) => (word.length > 4 ? 400 * word.length : 2000);

    setTimeout(
      () =>
        currentTextCounter < texts.length - 1
          ? setCurrentTextCounter(currentTextCounter + 1)
          : setCurrentTextCounter(0),
      waitingTime(texts[currentTextCounter])
    );
  }

  return (
    <h1 className={styles.Title}>
      <Typist
        onTypingDone={calculateTime}
        startDelay={500}
        avgTypingDelay={150}
        key={currentTextCounter}
      >
        {texts[currentTextCounter]}
      </Typist>
      coding <br />
      projects
    </h1>
  );
}
