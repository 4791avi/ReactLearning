import React, { Component } from 'react'
import Mark from '../GetDerivedStateFromProps/Marks';

export default class Student extends Component {
  constructor() {
    super();
    this.state = {
      roll: 101
    }
  }

  handleClicked = () => {
    console.log("Button clicked");
    // this.setState({roll: 102});
    this.setState({roll: this.state.roll + 2});
  };

  render() {
    console.log("Student -- Render Method (Child Of APP)");
    return (
      <div>
         <h1>Hello I am Student Component</h1>
         <Mark roll={this.state.roll}/>
       <button onClick={this.handleClicked}>Clicked</button>
      </div>
    );
  }
}
