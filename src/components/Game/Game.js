import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessInputs, setGuessInput] = React.useState([]);
  function handleGuessInputs(guessInput){
    const nextGuess = {
      value: guessInput,
      id: `${guessInput}-${Math.random()}`
    }
    let updatedGuessInputs = [...guessInputs, nextGuess]
    setGuessInput(updatedGuessInputs);
  }

  return (
    <div>
      <GuessInput handleGuessInputs={handleGuessInputs} guessInputs={guessInputs} />
    </div>
  );
}

export default Game;
