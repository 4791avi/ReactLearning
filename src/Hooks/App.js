import React, { useState } from 'react'
function App(){
  const nameStateVaribale = useState("Avinash Kumar");
  console.log(nameStateVaribale);
  const name = nameStateVaribale[0];
  const setName = nameStateVaribale[1];

  const handleClick = () => {
    // nameStateVaribale[1]("Monu Mehta");
    setName("Sonu Mehta");
  };
  return(
    <>
    {/* <h1>UseState: {nameStateVaribale[0]}</h1> */}
    <h1>UseState: {name}</h1>
    <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default App;