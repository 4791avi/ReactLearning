import React, { Component } from 'react'

export default class StateInsideConstructor extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "Raju Kumar",
      age: "25",
      address: this.props.address
    }
  }
  render() {
    return (
      <div>
        <h1>My Name is :- {this.state.name}</h1>
        <h1>My age is :- {this.state.age}</h1>
        <h1>My address is :- {this.state.address}</h1>
      </div>
    )
  }
}
