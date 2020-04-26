import React, { Component } from 'react'

export default class PassingArgsToEventHandler extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: "101",
      name: "Avinash Kumar"
    }
  }
  handleClick = (id, e) => {
    console.log(id)
    console.log(e)
    console.log("Button Clicked");
  };

  handleClickArgs = e => {
    this.handleClick(this.state.id, e);
    // console.log(this.state.id, e)
  }

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        {/* <button onClick={this.handleClickArgs}>Click Me</button> */}
        <button onClick={e => {
        this.handleClick(this.state.id, e);}
        }>Click Me</button>
      </div>
    );
  }
}
