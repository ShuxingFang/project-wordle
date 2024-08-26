import React from "react";
import Guess from "../Guess";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import {range} from "../../utils";

function GuessResults({ guesses, answer }) {
  let len = guesses.length;

  return (
    <div className="guess-results">
      {guesses.map(({ id, guess }) => (
        <Guess guess={guess} key={id} answer={answer} />
      ))}
      {range(NUM_OF_GUESSES_ALLOWED - len).map((index) => (
        <Guess guess={""} key={index} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
