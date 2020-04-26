import React, { Component } from 'react'

export default class UpdateStateComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "Avinash Kumar",
      age: this.props.age
    }
  }

  handleClick = () => {
    console.log("Button Clicked");
    // this.setState(function(state,props){
    //   console.log(state)
    //   console.log(props)
    // });
    this.setState((state, props) => {
        console.log(state)
        console.log(props)
    });
  }
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <h4>Name: {this.state.name}</h4>
        <h4>Age: {this.state.age}</h4>
        <button onClick={this.handleClick}>Click Me</button>

      </div>
    )
  }
}
