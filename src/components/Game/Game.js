import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from "../GuessResults";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";
import Keyboard from '../Keyboard';

// Pick a random word on every pageload.
// const answer = sample(WORDS);
function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [guessInputs, setGuessInputs] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');
  console.log(answer);

  function handleGuessInputs(guessInput){
    const nextGuess = {
      value: guessInput,
      id: `${guessInput}-${Math.random()}`
    }
    let updatedGuessInputs = [...guessInputs, nextGuess]
    setGuessInputs(updatedGuessInputs);

    if(guessInput.toUpperCase() === answer){
      setGameStatus('won');
    } else if (updatedGuessInputs.length >= NUM_OF_GUESSES_ALLOWED){
      setGameStatus('lost')
    }
  }

  function handleRestart(){
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGameStatus('running')
    setGuessInputs([]);
  }

  return (
    <div>
      <GuessResults answer={answer} guessInputs={guessInputs} />
      <GuessInput
        handleGuessInputs={handleGuessInputs}
        gameStatus={gameStatus}
      />
      {gameStatus === 'won' && (
        <WonBanner numOfGuesses={guessInputs.length} handleRestart={handleRestart} />
      )}
      {gameStatus === 'lost' && (
        <LostBanner answer={answer} handleRestart={handleRestart} />
      )}
      <Keyboard />
    </div>
  );
}

export default Game;
