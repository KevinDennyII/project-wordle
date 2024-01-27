import React from 'react';

function LostBanner({answer, handleRestart}) {
  return (
    <div className="sad banner">
  <p>Sorry, the correct answer is <strong>{answer}</strong>.</p><br/>
      <button className="restart-button" onClick={handleRestart}>Restart</button>
</div>
  );
}

export default LostBanner;
