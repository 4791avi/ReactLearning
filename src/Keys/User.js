import React, { Component } from 'react'

export default class User extends Component {
  render() {
    return (
    <li key={this.props.values}>{this.props.values}</li>
    )
  }
}
