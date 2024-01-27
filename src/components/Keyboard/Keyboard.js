import React from 'react';

function Keyboard() {

  const rows = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "{shift} {numbers} z x c v b n m {backspace}",
  ];

  return (
  <div>
    {rows.map(row => {
      return row.split(" ").map((key) =>{
        return <button className="keyboard-hg-button" key={`key-${Math.random()}`}>{key}</button>
      })
    })
    }
  </div>
  );
}

export default Keyboard;
