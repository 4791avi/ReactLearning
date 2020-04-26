import React, { Component } from 'react'

export default class PropsInClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>I am class Component and props is: name:{this.props.name} age:{this.props.age}</h1>
      </div>
    )
  }
}
