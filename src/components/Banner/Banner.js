import React from 'react';

function Banner() {
  return (
  <div>
    <div className="happy banner">
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong>3 guesses</strong>.
    </p>
    </div>
    <div className="sad banner">
      <p>Sorry, the correct answer is <strong>LEARN</strong>.</p>
    </div>
  </div>
  );
}

export default Banner;
