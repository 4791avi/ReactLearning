import React, { Component } from 'react';

function Player(props){
  // const handleClick = () => {
  //   console.log("Button is clicked");
  // }
  function handleClick(e){
    // e.preventDefault();
    console.log("Button is clicked", this);
  }
  return(
    <div>
    <h1>Hello To this React World</h1>
    <button onClick={handleClick}>Click Me</button>
    <a href="https://www.google.com" onClick={handleClick}>click on me</a>
  </div>
  );
}
export default Player;