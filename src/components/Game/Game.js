import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessInputs, setGuessInput] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');

  function handleGuessInputs(guessInput){
    const nextGuess = {
      value: guessInput,
      id: `${guessInput}-${Math.random()}`
    }
    let updatedGuessInputs = [...guessInputs, nextGuess]
    setGuessInput(updatedGuessInputs);

    if(guessInput.toUpperCase() === answer){
      setGameStatus('won');
    } else if (updatedGuessInputs.length >= NUM_OF_GUESSES_ALLOWED){
      setGameStatus('lost')
    }
  }

  return (
    <div>
      <GuessInput
        answer={answer}
        handleGuessInputs={handleGuessInputs}
        guessInputs={guessInputs}
        gameStatus={gameStatus}
      />
      {gameStatus === 'won' && (
        <WonBanner numOfGuesses={guessInputs.length} />
      )}
      {gameStatus === 'lost' && (
        <LostBanner answer={answer} />
      )}
    </div>
  );
}

export default Game;
