import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import InputField from "../InputField";
import GuessResults from "../GuessResults";
import Banner from "../Banner";

// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [state, setState] = React.useState("on going");
  const [answer, setAnswer] = React.useState(sample(WORDS));

  console.info({ answer });

  function handleNewGuess(guess) {
    if (!WORDS.includes(guess)) {
      window.alert("You must enter a valid word");
      return;
    }
    const newGuess = {
      guess,
      id: Math.random(),
    };

    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);

    if (guess === answer) {
      setState("won");
      return;
    }

    if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setState("lose");
    }
  }

  function reset() {
    setGuesses([]);
    setState("on going");
    setAnswer(sample(WORDS));
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <InputField handleNewGuess={handleNewGuess} state={state} />
      {state !== "on going" && (
        <Banner state={state} tries={guesses.length} answer={answer} reset={reset}/>
      )}
    </>
  );
}

export default Game;
