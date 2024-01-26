import React from 'react';

function Keyboard() {

  const rows = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "{shift} {numbers} z x c v b n m {backspace}",
  ];

  return (
  <div>
    {rows.map((row) => {
      row.split(" ").map((key) =>{
        return <span key={`key-${Math.random()}`}>{key}</span>
      })
      // return <br />
    })
    }
  </div>
  );
}

export default Keyboard;
