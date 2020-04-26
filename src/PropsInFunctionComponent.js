import React, { Component } from 'react';

const Employee = (props) => {
  return(
    <div>
      <h1>Hello My name is: {props.name}</h1>
      <h1>Hello My age is: {props.age}</h1>
    </div>
  );
}

export default Employee;