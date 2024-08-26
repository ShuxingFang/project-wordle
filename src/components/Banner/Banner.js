import React from "react";

function Banner({ state, tries, answer, reset }) {
  if (state === "won") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>
            {" "}
            {tries} {tries === 1 ? "guess" : "guesses"}
          </strong>
        </p>
        <button className="won" onClick={reset}>New game</button>
      </div>
    );
  } else {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
        <button className="lose" onClick={reset}>New game</button>
      </div>
    );
  }
}

export default Banner;
