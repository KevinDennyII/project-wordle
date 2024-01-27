import React from 'react';

function Keyboard() {

  const rows = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "{shift} {numbers} z x c v b n m {backspace}",
  ];

  return (
  <div>
    <span className="keyboard">
    {rows.map(row => {
      return (<span className="keyboard-row"> {row.split(" ").map((key) =>{
        return <span className="letter" key={`key-${Math.random()}`}>{key}</span>
      })
      }</span>)
    })
    }
      </span>
  </div>
  );
}

export default Keyboard;
