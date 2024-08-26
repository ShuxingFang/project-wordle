import React from "react";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  if (guess === "") {
    guess = "     ";
  }

  const result = checkGuess(guess, answer);

  return (
    <p className="guess">
      {result.map((item, index) => (
        <span
          className={`cell ${guess === "     " ? "" : item.status}`}
          key={index}
        >
          {item.letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
