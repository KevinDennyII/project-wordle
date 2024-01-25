import React from 'react';
import GuessResults from "../GuessResults";

function GuessInput({handleGuessInputs, guessInputs}) {
  const [guessInput, setGuessInput] = React.useState('');
  function handleSubmit(event){
      event.preventDefault();
      handleGuessInputs(guessInput);
      console.log({guessInput});
      setGuessInput('')
  }
  return (
    <div>
      <GuessResults guessInputs={guessInputs} />
      <form
        className="guess-input-wrapper"
        onSubmit={handleSubmit}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          id="guess-input"
          type="text"
          value={guessInput}
          onChange={event => {
            setGuessInput(event.target.value.toUpperCase());
          }}/>
      </form>
    </div>
  );
}

export default GuessInput;
