import React, { Component } from 'react'
import Pt from 'prop-types';

export default class TypeCheckingWithProps extends Component {
  render() {
    return (
      <div>
        <h1>MY NAME IS: {this.props.name}</h1>
        <h1>MY AGE IS: {this.props.age}</h1>
      </div>
    )
  }
}

TypeCheckingWithProps.PropsTypes = {
  name: Pt.string.isRequired,
  age:  Pt.numner.isRequired
}

TypeCheckingWithProps.defaultProps = {
  name: "2345"
}