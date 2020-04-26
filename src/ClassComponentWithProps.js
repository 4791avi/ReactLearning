import React, { Component } from 'react'

export default class ClassComponentWithProps extends Component {
  render() {
    return (
    <p>I am class component with Props name:- {this.props.name}</p>
    );
  }
}
