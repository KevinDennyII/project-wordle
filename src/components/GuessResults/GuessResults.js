import React from 'react';
import Guess from "../Guess";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import {range} from "../../utils";
function GuessResults({guessInputs, answer}) {

  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map(num => {
        const id = guessInputs[num] ? guessInputs[num].id : undefined;
        const value = guessInputs[num] ? guessInputs[num].value : undefined
        return <Guess key={id} value={value} answer={answer}/>
      })
      }
    </div>
  );
}

export default GuessResults;
