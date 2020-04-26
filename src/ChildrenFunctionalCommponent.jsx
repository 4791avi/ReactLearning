import React, { Component } from 'react';

const Player = (props) => {
  return(
  <h1>Data is coming from children and data is: {props.children} and props name: {props.name}</h1>
  );
};


export default Player;