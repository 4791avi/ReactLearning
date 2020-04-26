import React, { useState,useEffect } from 'react';

function AppTwo(){
  const [countInc, Increment] = useState(100); 
  const [countDec, Decrement] = useState(100);

  const handleIncrement = () => {
    Increment(countInc + 10);
  }

  const handleDecrement = () => {
    Decrement(countDec - 10);
  }
  
  return(
    <>
      <h1>Count Up: {countInc}</h1>
      <button onClick={handleIncrement}>Click For Increment</button>

      <h1>Count Down {countDec}</h1>
      <button onClick={handleDecrement}>Click For Increment</button>
    </>
  );
}

export default AppTwo;