import React from 'react';
import {range} from "../../utils";
import { checkGuess } from '../../game-helpers';
import Banner from '../Banner';

function Guess({value, answer}) {
  let numOfGuesses = 0;
  let result;
  if(value) {
    result = checkGuess(value, answer);

    numOfGuesses = result.map(item => {
      if(item.status !== 'correct') {
        console.log(result)
        return numOfGuesses+1;
      }
    });
    console.log(numOfGuesses);
  }

  return (
    <>
      <p className="guess">
        {range(0,5).map(num =>(
          <span 
          key={num} 
          className={`cell ${result ? result[num].status : ''}`}>
            {value ? value[num] : undefined}
            </span>
          ))}
      </p>
      <Banner />
    </>
  );
}

export default Guess;
