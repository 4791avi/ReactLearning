import React, { useState } from 'react'

function useCustomFunction() {
  const [count, setcount] = useState(0);
  const handleClickIncrement = () => {
    setcount(count + 10);
  };

  return(
    count,
    handleClickIncrement
  );
 }

export default useCustomFunction; 