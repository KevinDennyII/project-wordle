import React from 'react';

function WonBanner({numOfGuesses, handleRestart}) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{numOfGuesses === 1 ? `1 guess` : `${numOfGuesses} guesses`}</strong>.<br/>
        <button className="restart-button" onClick={handleRestart}>Restart</button>
      </p>
    </div>
  );
}

export default WonBanner;
