import React, { Component } from 'react'

export default class Student extends Component {

  componentDidMount(){
    console.log("Student -- Component Did MOunt -- Mounted")
  };
  render() {
    console.log("Student -- Component Rendered")
    return (
      <div>
        <h1>Student Component</h1>
      </div>
    )
  }
}
