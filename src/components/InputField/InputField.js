import React from "react";

function InputField({ handleNewGuess, state }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleNewGuess(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        value={guess}
        type="text"
        minLength="5"
        maxLength="5"
        required
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        disabled={state !== "on going"}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default InputField;
