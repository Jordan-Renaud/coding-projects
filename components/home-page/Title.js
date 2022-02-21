import Typist from "react-typist";
import { useState } from "react";

export default function Title({ texts }) {
  const [currentTextCounter, setCurrentTextCounter] = useState(0);
  const timer = setTimeout(
    () =>
      currentTextCounter < texts.length - 1
        ? setCurrentTextCounter(currentTextCounter + 1)
        : setCurrentTextCounter(0),
    3000
  );

  //TODO: https://github.com/jstejada/react-typist look at delayGenerator
  return (
    <h1>
      <Typist
        onTypingDone={() => clearTimeout(timer)}
        startDelay={500}
        avgTypingDelay={150}
        key={currentTextCounter}
      >
        {texts[currentTextCounter]}
      </Typist>
      CODING <br />
      PROJECTS
    </h1>
  );
}
