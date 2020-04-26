import React, { useState } from 'react'

function AppOne(){
  const [name, setName] = useState("Avinash Kumar");
  const [age, setAge] = useState(28);

  const handleClick = () => {
    setName("MOnu Mehta");
    setAge(30);
  }

  return(
    <>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <button onClick={handleClick}>Click Me</button>
  </>
  );
}
export default AppOne;