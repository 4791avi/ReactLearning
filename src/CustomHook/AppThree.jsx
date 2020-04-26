import React from 'react'
import useCustomFunction from './Custom';

function AppThree(){
  const data = useCustomFunction();
  console.log(data.count)
  return(
    <>
    <h1>Count Up: {data.count}</h1>
    <button type="button" onClick= {data.handleClickIncrement}>Click For Increment</button>
    </>
  );
}

export default AppThree;
