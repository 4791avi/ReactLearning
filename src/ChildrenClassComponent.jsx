import React, { Component } from 'react'

export default class ChildrenClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>I am children of the class component : {this.props.children} and props name is: {this.props.name}</h1>
      </div>
    )
  }
}
