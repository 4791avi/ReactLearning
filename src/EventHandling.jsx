import React, { Component } from 'react'

export default class EventHandling extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  // If we use arrow function this keyword is automatically binded to the function other wise we have to bind the 
  // this keyword in the constructor

  // handleClick = () => {
  //   console.log("Button is Clicked", this)
  // };

  handleClick() {
    console.log("Button is Clicked", this)
  };

  render() {
    return (
      <div>
        <h1>Hello To this React World</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}
