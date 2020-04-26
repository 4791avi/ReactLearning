import React, { Component } from 'react'

export default class ConstructorComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "Avinash Kumar",
      age: this.props.age
    }
    console.log("I am Constructor")
    console.log(props)
  }
  render() {
    return (
      <div>
        <h1>Hello To The React World</h1>
      </div>
    )
  }
}
