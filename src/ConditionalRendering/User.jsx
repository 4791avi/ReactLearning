import React, { Component } from 'react'

export default class User extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name
    }
  }
  render() {
    return (
      <div>
        <h1>Welcome {this.state.name}</h1>
        <button onClick={this.props.clickData}>Logout</button>
      </div>
    )
  }
}
